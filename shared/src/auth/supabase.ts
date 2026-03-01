import { createClient, SupabaseClient } from '@supabase/supabase-js';

function getRootDomain(): string {
  const host = typeof window !== 'undefined' ? window.location.hostname : '';
  const parts = host.split('.');
  return parts.length >= 2 ? `.${parts.slice(-2).join('.')}` : host;
}

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(^| )${encodeURIComponent(name)}=([^;]+)`));
  return match ? decodeURIComponent(match[2]) : null;
}

function setCookie(name: string, value: string): void {
  if (typeof document === 'undefined') return;
  const domain = getRootDomain();
  const maxAge = 365 * 24 * 60 * 60;
  document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; domain=${domain}; path=/; max-age=${maxAge}; SameSite=Lax; Secure`;
}

function deleteCookie(name: string): void {
  if (typeof document === 'undefined') return;
  const domain = getRootDomain();
  document.cookie = `${encodeURIComponent(name)}=; domain=${domain}; path=/; max-age=0`;
}

const COOKIE_KEY = 'vc-refresh-token';

let supabaseInstance: SupabaseClient | null = null;
let sessionRestored = false;

export function getSupabase(): SupabaseClient {
  if (supabaseInstance) return supabaseInstance;

  const url = import.meta.env.VITE_SUPABASE_URL;
  const key = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!url || !key) {
    throw new Error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY');
  }

  supabaseInstance = createClient(url, key, {
    auth: {
      detectSessionInUrl: true,
      autoRefreshToken: true,
      persistSession: true,
      flowType: 'implicit',
    },
  });

  // Save refresh_token to cross-domain cookie on auth changes
  supabaseInstance.auth.onAuthStateChange((_event, session) => {
    if (session?.refresh_token) {
      setCookie(COOKIE_KEY, session.refresh_token);
    } else if (_event === 'SIGNED_OUT') {
      deleteCookie(COOKIE_KEY);
    }
  });

  return supabaseInstance;
}

// Restore session from cross-domain cookie if no local session
export async function restoreCrossDomainSession(): Promise<boolean> {
  if (sessionRestored) return false;
  sessionRestored = true;

  const supabase = getSupabase();
  
  // Check if already have session
  const { data: { session } } = await supabase.auth.getSession();
  if (session) return true;

  // Try cross-domain cookie
  const refreshToken = getCookie(COOKIE_KEY);
  if (!refreshToken) return false;

  try {
    const { data, error } = await supabase.auth.refreshSession({ refresh_token: refreshToken });
    if (error || !data.session) {
      deleteCookie(COOKIE_KEY);
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

export { type SupabaseClient };
