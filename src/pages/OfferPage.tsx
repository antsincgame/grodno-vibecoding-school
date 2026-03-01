import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function OfferPage() {
  return (
    <>
      <Header />
      <main className="section" style={{ paddingTop: '120px' }}>
        <h1 className="section-title" style={{ marginBottom: '40px' }}>Публичная оферта</h1>

        <div className="cyber-card" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: 1.8, fontSize: '16px' }}>
          <h2 style={{ color: 'var(--neon-cyan)', marginBottom: '16px', fontSize: '20px' }}>
            1. Предмет оферты
          </h2>
          <p style={{ marginBottom: '20px', opacity: 0.85 }}>
            Орлов Дмитрий Дмитриевич, самозанятый (наставник по работе на компьютерах, УНП: НА8252796),
            предлагает услуги по обучению программированию с использованием инструментов искусственного
            интеллекта в рамках AI-лаборатории VibeCoding в г. Гродно.
          </p>

          <h2 style={{ color: 'var(--neon-cyan)', marginBottom: '16px', fontSize: '20px' }}>
            2. Описание услуг
          </h2>
          <p style={{ marginBottom: '12px', opacity: 0.85 }}>
            <strong style={{ color: 'var(--neon-green)' }}>Базовый курс:</strong> 5 очных занятий по 2 часа.
            Стоимость — 1000 BYN. Включает предоставление подписки Cursor Pro
            на период обучения, учебные материалы и сертификат по окончании.
          </p>
          <p style={{ marginBottom: '20px', opacity: 0.85 }}>
            <strong style={{ color: 'var(--neon-pink)' }}>Разовое занятие:</strong> 1 очное занятие продолжительностью
            2 часа. Стоимость — 200 BYN.
          </p>

          <h2 style={{ color: 'var(--neon-cyan)', marginBottom: '16px', fontSize: '20px' }}>
            3. Порядок оплаты
          </h2>
          <p style={{ marginBottom: '20px', opacity: 0.85 }}>
            Оплата производится до начала занятий наличными или банковским переводом.
            Акцептом настоящей оферты является оплата услуг и/или заполнение формы записи
            на сайте grodno.vibecoding.by.
          </p>

          <h2 style={{ color: 'var(--neon-cyan)', marginBottom: '16px', fontSize: '20px' }}>
            4. Контакты
          </h2>
          <p style={{ marginBottom: '20px', opacity: 0.85 }}>
            Орлов Дмитрий Дмитриевич, самозанятый, УНП: НА8252796<br />
            Адрес: г. Гродно, ул. Краснопартизанская 55-2, каб.29<br />
            Email: info@vibecoding.by<br />
            Телефон: +375 (29) 282-88-78
          </p>

          <div style={{ marginTop: '30px', textAlign: 'center' }}>
            <Link to="/" className="cyber-button">
              На главную
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
