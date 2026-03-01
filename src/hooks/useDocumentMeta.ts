import { useEffect } from 'react';

interface DocumentMeta {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  robots?: string;
}

const BASE_URL = 'https://grodno.vibecoding.by';

function setMetaTag(name: string, content: string, attribute: 'name' | 'property' = 'name') {
  const selector = `meta[${attribute}="${name}"]`;
  const existing = document.querySelector(selector);

  if (existing) {
    existing.setAttribute('content', content);
    return;
  }

  const meta = document.createElement('meta');
  meta.setAttribute(attribute, name);
  meta.setAttribute('content', content);
  document.head.appendChild(meta);
}

function setCanonical(href: string) {
  const existing = document.querySelector('link[rel="canonical"]');
  if (existing) {
    existing.setAttribute('href', href);
    return;
  }

  const link = document.createElement('link');
  link.setAttribute('rel', 'canonical');
  link.setAttribute('href', href);
  document.head.appendChild(link);
}

export function useDocumentMeta({ title, description, canonical, ogTitle, ogDescription, robots }: DocumentMeta) {
  useEffect(() => {
    document.title = title;
    setMetaTag('description', description);
    setMetaTag('robots', robots ?? 'index, follow, max-image-preview:large, max-snippet:-1');
    setCanonical(canonical ?? BASE_URL);

    setMetaTag('og:title', ogTitle ?? title, 'property');
    setMetaTag('og:description', ogDescription ?? description, 'property');
    setMetaTag('og:url', canonical ?? BASE_URL, 'property');

    setMetaTag('twitter:title', ogTitle ?? title);
    setMetaTag('twitter:description', ogDescription ?? description);
  }, [title, description, canonical, ogTitle, ogDescription, robots]);
}
