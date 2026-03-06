import { Link } from 'react-router-dom';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SECTION_TITLE_STYLE = { color: 'var(--neon-cyan)', marginBottom: '16px', fontSize: '20px' } as const;
const PARAGRAPH_STYLE = { marginBottom: '20px', opacity: 0.85 } as const;
const LIST_STYLE = { marginBottom: '20px', opacity: 0.85, paddingLeft: '20px', lineHeight: 2 } as const;

export default function OfferPage() {
  useDocumentMeta({
    title: 'Публичная оферта | VibeCoding Гродно — школа ИИ программирования',
    description: 'Публичная оферта на оказание образовательных услуг по обучению AI-программированию. Условия записи, оплаты и возврата. Школа VibeCoding, Гродно.',
    canonical: 'https://grodno.vibecoding.by/offer',
    robots: 'noindex, follow',
  });

  return (
    <>
      <Header />
      <main className="section" style={{ paddingTop: '120px' }}>
        <h1 className="section-title" style={{ marginBottom: '40px' }}>Публичная оферта</h1>

        <div className="cyber-card" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: 1.8, fontSize: '16px' }}>

          <h2 style={SECTION_TITLE_STYLE}>1. Предмет оферты</h2>
          <p style={PARAGRAPH_STYLE}>
            Орлов Дмитрий Дмитриевич, самозанятый (наставник по работе на компьютерах, УНП: НА8252796,
            далее — Исполнитель), предлагает неопределённому кругу лиц (далее — Заказчик) услуги по обучению
            программированию с использованием инструментов искусственного интеллекта в рамках курсов
            VibeCoding в г. Гродно.
          </p>
          <p style={PARAGRAPH_STYLE}>
            Настоящая публичная оферта является официальным предложением Исполнителя заключить договор
            оказания платных услуг на изложенных ниже условиях (статья 407 Гражданского кодекса
            Республики Беларусь).
          </p>

          <h2 style={SECTION_TITLE_STYLE}>2. Описание услуг</h2>
          <p style={{ marginBottom: '12px', opacity: 0.85 }}>
            <strong style={{ color: 'var(--neon-green)' }}>Базовый курс:</strong> 6 очных занятий по 2 часа
            (мини-группа до 4 человек). Стоимость — 1 000 BYN. Включает предоставление подписки Cursor Pro
            на период обучения, учебные материалы и сертификат по окончании.
          </p>
          <p style={{ marginBottom: '12px', opacity: 0.85 }}>
            <strong style={{ color: 'var(--neon-pink)' }}>Разовое занятие:</strong> 1 очное занятие продолжительностью
            2 часа. Стоимость — 200 BYN.
          </p>
          <p style={PARAGRAPH_STYLE}>
            <strong style={{ color: 'var(--neon-green)' }}>VibeMaster PRO:</strong> индивидуальное наставничество
            с безлимитным доступом в учебный класс 24/7. Стоимость — 3 000 BYN. Включает Cursor Ultra,
            индивидуальную программу, код-ревью и сертификат мастера вайбкодинга.
          </p>

          <h2 style={SECTION_TITLE_STYLE}>3. Участие несовершеннолетних</h2>
          <p style={PARAGRAPH_STYLE}>
            Услуги Исполнителя доступны для лиц в возрасте от 14 лет. В соответствии со статьёй 25
            Гражданского кодекса Республики Беларусь и Законом Республики Беларусь «О правах ребёнка»,
            заключение договора (акцепт оферты) от имени несовершеннолетнего в возрасте от 14 до 18 лет
            осуществляется с письменного согласия его законного представителя (родителя, усыновителя,
            опекуна, попечителя).
          </p>
          <p style={PARAGRAPH_STYLE}>
            При подаче заявки на обучение несовершеннолетним Исполнитель вправе запросить:
          </p>
          <ul style={LIST_STYLE}>
            <li>ФИО законного представителя</li>
            <li>Контактный телефон законного представителя для подтверждения согласия</li>
            <li>Письменное согласие законного представителя (при необходимости)</li>
          </ul>

          <h2 style={SECTION_TITLE_STYLE}>4. Порядок заключения договора (акцепт)</h2>
          <p style={PARAGRAPH_STYLE}>
            Акцептом настоящей оферты является совершение Заказчиком одного из следующих действий:
          </p>
          <ul style={LIST_STYLE}>
            <li>Оплата услуг любым доступным способом</li>
            <li>Заполнение и отправка формы записи на сайте grodno.vibecoding.by с проставлением
              отметки о согласии с условиями оферты и политикой конфиденциальности</li>
          </ul>

          <h2 style={SECTION_TITLE_STYLE}>5. Порядок оплаты</h2>
          <p style={PARAGRAPH_STYLE}>
            Оплата производится до начала занятий одним из следующих способов:
          </p>
          <ul style={LIST_STYLE}>
            <li>Наличными в учебном классе</li>
            <li>Банковским переводом по реквизитам Исполнителя</li>
            <li>Переводом на карту (по договорённости)</li>
          </ul>

          <h2 style={SECTION_TITLE_STYLE}>6. Порядок возврата</h2>
          <p style={PARAGRAPH_STYLE}>
            Заказчик вправе отказаться от исполнения договора в любое время при условии оплаты
            Исполнителю фактически понесённых расходов (статья 736 Гражданского кодекса
            Республики Беларусь). Возврат осуществляется в следующем порядке:
          </p>
          <ul style={LIST_STYLE}>
            <li>До начала занятий — возврат 100% оплаченной суммы</li>
            <li>После проведения части занятий — возврат пропорционально неоказанным услугам</li>
            <li>Заявление на возврат направляется на info@vibecoding.by или в устной форме</li>
            <li>Возврат производится в течение 10 рабочих дней</li>
          </ul>

          <h2 style={SECTION_TITLE_STYLE}>7. Права и обязанности сторон</h2>
          <p style={{ marginBottom: '8px', opacity: 0.85 }}><strong style={{ color: 'var(--neon-cyan)' }}>Исполнитель обязуется:</strong></p>
          <ul style={LIST_STYLE}>
            <li>Оказать услуги надлежащего качества в установленные сроки</li>
            <li>Предоставить доступ к необходимым инструментам (Cursor Pro / Ultra)</li>
            <li>Обеспечить безопасные условия обучения</li>
          </ul>
          <p style={{ marginBottom: '8px', opacity: 0.85 }}><strong style={{ color: 'var(--neon-cyan)' }}>Заказчик обязуется:</strong></p>
          <ul style={LIST_STYLE}>
            <li>Своевременно оплатить услуги</li>
            <li>Соблюдать правила поведения в учебном классе</li>
            <li>Бережно относиться к оборудованию и имуществу Исполнителя</li>
          </ul>

          <h2 style={SECTION_TITLE_STYLE}>8. Разрешение споров</h2>
          <p style={PARAGRAPH_STYLE}>
            Все споры, возникающие из настоящей оферты, стороны стремятся разрешить путём переговоров.
            При невозможности досудебного урегулирования спор передаётся на рассмотрение в суд
            по месту нахождения Исполнителя в соответствии с законодательством Республики Беларусь.
          </p>

          <h2 style={SECTION_TITLE_STYLE}>9. Персональные данные</h2>
          <p style={PARAGRAPH_STYLE}>
            Обработка персональных данных Заказчика осуществляется в соответствии с{' '}
            <Link to="/privacy" style={{ color: 'var(--neon-cyan)' }}>Политикой конфиденциальности</Link>{' '}
            и Законом Республики Беларусь от 7 мая 2021 г. № 99-З «О защите персональных данных».
          </p>

          <h2 style={SECTION_TITLE_STYLE}>10. Контакты Исполнителя</h2>
          <p style={PARAGRAPH_STYLE}>
            Орлов Дмитрий Дмитриевич, самозанятый<br />
            УНП: НА8252796<br />
            Адрес: г. Гродно, ул. Краснопартизанская 55-2, каб. 29<br />
            Email: info@vibecoding.by<br />
            Телефон: +375 (29) 282-88-78
          </p>
          <p style={{ marginBottom: '20px', opacity: 0.6, fontSize: '14px' }}>
            Дата публикации оферты: 2 марта 2026 года
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
