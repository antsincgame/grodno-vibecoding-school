

import { useState } from 'react';
import { Link } from 'react-router-dom';

const COOKIE_KEY = 'vc-grodno-cookie-consent';

export default function CookieConsent() {
  const [visible] = useState(() => !localStorage.getItem(COOKIE_KEY));
  const [dismissed, setDismissed] = useState(false);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'true');
    setDismissed(true);
  };

  if (!visible || dismissed) return null;

  return (
    <div className="cookie-banner">
      <p className="cookie-text">
        Мы используем файлы cookie для улучшения работы сайта, анализа трафика
        и персонализации контента. Продолжая использовать наш сайт, вы соглашаетесь
        с нашей{' '}
        <Link to="/privacy">Политикой конфиденциальности</Link>.
      </p>
      <button className="cyber-button cookie-accept" onClick={handleAccept}>
        Принять
      </button>
    </div>
  );
}
