import { useState } from 'react';
import { Link } from 'react-router-dom';

const COOKIE_KEY = 'vc-grodno-cookie-consent';

export default function CookieConsent() {
  const [visible] = useState(() => !localStorage.getItem(COOKIE_KEY));
  const [dismissed, setDismissed] = useState(false);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, 'accepted');
    setDismissed(true);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_KEY, 'declined');
    setDismissed(true);
  };

  if (!visible || dismissed) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-label="Уведомление об использовании cookie">
      <p className="cookie-text">
        Мы используем файлы cookie для обеспечения работоспособности сайта и анализа
        посещаемости. Подробнее — в{' '}
        <Link to="/privacy">Политике конфиденциальности</Link>{' '}
        (раздел 10).
      </p>
      <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
        <button className="cyber-button cookie-accept" onClick={handleAccept}>
          Принять
        </button>
        <button
          className="cyber-button cookie-accept"
          onClick={handleDecline}
          style={{ borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.6)' }}
        >
          Отклонить
        </button>
      </div>
    </div>
  );
}
