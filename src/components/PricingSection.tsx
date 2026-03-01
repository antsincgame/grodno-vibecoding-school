export default function PricingSection() {
  return (
    <section className="section" id="pricing">
      <h2 className="section-title">Тарифы на обучение программированию в Гродно</h2>
      <p className="section-subtitle">
        Прозрачные цены. Cursor Pro и Cursor Ultra предоставляются за наш счёт.
        Выбери формат, который подходит именно тебе.
      </p>

      <div className="pricing-grid pricing-grid-3">
        <div className="cyber-card pricing-card">
          <div
            className="pricing-badge"
            style={{
              borderColor: 'var(--neon-pink)',
              color: 'var(--neon-pink)',
              background: 'rgba(255, 0, 110, 0.15)',
            }}
          >
            Пробное
          </div>
          <h3 className="pricing-name">Разовое занятие</h3>
          <p className="pricing-desc">Одно занятие — 2 часа</p>
          <div className="pricing-price">200</div>
          <div className="pricing-currency">BYN</div>

          <div
            className="pricing-bonus"
            style={{ borderColor: 'rgba(255, 0, 110, 0.3)', color: 'var(--neon-pink)' }}
          >
            Идеально для знакомства с методом
          </div>

          <ul className="pricing-features">
            <li>2 часа практики с наставником</li>
            <li>Знакомство с AI-разработкой</li>
            <li>Пробный мини-проект</li>
            <li>Консультация по карьере</li>
            <li>Без обязательств</li>
          </ul>

          <a href="#contact" className="cyber-button cyber-button-pink" style={{ width: '100%' }}>
            Записаться на занятие
          </a>
        </div>

        <div className="cyber-card pricing-card featured">
          <div className="pricing-badge">Лучший выбор</div>
          <h3 className="pricing-name">Базовый курс</h3>
          <p className="pricing-desc">5 занятий по 2 часа</p>
          <div className="pricing-price">1000</div>
          <div className="pricing-currency">BYN</div>

          <div className="pricing-bonus">🎁 Cursor Pro бесплатно на время обучения</div>

          <ul className="pricing-features">
            <li>10 часов практики с наставником</li>
            <li>Реальный проект в портфолио</li>
            <li>Cursor Pro — предоставляем мы</li>
            <li>Все учебные материалы</li>
            <li>Поддержка между занятиями</li>
            <li>Сертификат по окончании</li>
            <li>Малая группа до 6 человек</li>
          </ul>

          <a href="#contact" className="cyber-button" style={{ width: '100%' }}>
            Записаться на курс
          </a>
        </div>

        <div
          className="cyber-card pricing-card"
          style={{
            borderColor: 'var(--neon-green)',
            boxShadow: '0 0 30px rgba(57, 255, 20, 0.2)',
          }}
        >
          <div
            className="pricing-badge"
            style={{
              borderColor: 'var(--neon-green)',
              color: 'var(--neon-green)',
              background: 'rgba(57, 255, 20, 0.15)',
            }}
          >
            Максимум
          </div>
          <h3 className="pricing-name" style={{ color: 'var(--neon-green)' }}>
            VibeMaster PRO
          </h3>
          <p className="pricing-desc">
            Личное наставничество от основателя методологии вайбкодинга в Беларуси
          </p>
          <div className="pricing-price" style={{ color: 'var(--neon-green)' }}>3 000</div>
          <div className="pricing-currency">BYN</div>

          <div
            className="pricing-bonus"
            style={{
              borderColor: 'rgba(57, 255, 20, 0.4)',
              color: 'var(--neon-green)',
              background: 'rgba(57, 255, 20, 0.08)',
            }}
          >
            ⚡ Cursor Ultra — предоставляем за свой счёт
          </div>

          <ul className="pricing-features">
            <li>Безлимитный доступ в AI-лабораторию Гродно 24/7</li>
            <li>Прямой контакт с Дмитрием Орловым онлайн и офлайн</li>
            <li>Cursor Ultra — предоставляем мы</li>
            <li>Индивидуальная программа под ваши цели</li>
            <li>Код-ревью в любое время</li>
            <li>Помощь с реальным проектом до результата</li>
            <li>Офлайн-сессии без записи, когда удобно</li>
            <li>Сертификат мастера вайбкодинга с подписью основателя</li>
          </ul>

          <p
            style={{
              fontSize: '13px',
              opacity: 0.7,
              marginBottom: '20px',
              lineHeight: 1.6,
              fontStyle: 'italic',
            }}
          >
            Для тех, кто переходит в IT, строит стартап или хочет гарантированный результат
            с наставником лично.
          </p>

          <a
            href="#contact"
            className="cyber-button cyber-button-green"
            style={{ width: '100%' }}
          >
            Получить доступ
          </a>
        </div>
      </div>
    </section>
  );
}
