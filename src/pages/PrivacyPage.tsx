import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="section" style={{ paddingTop: '120px' }}>
        <h1 className="section-title" style={{ marginBottom: '40px' }}>Политика конфиденциальности</h1>

        <div className="cyber-card" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: 1.8, fontSize: '16px' }}>
          <h2 style={{ color: 'var(--neon-cyan)', marginBottom: '16px', fontSize: '20px' }}>
            1. Общие положения
          </h2>
          <p style={{ marginBottom: '20px', opacity: 0.85 }}>
            Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных
            данных пользователей сайта grodno.vibecoding.by (далее — Сайт), принадлежащего
            самозанятому Орлову Дмитрию Дмитриевичу (наставник по работе на компьютерах, УНП: НА8252796).
          </p>

          <h2 style={{ color: 'var(--neon-cyan)', marginBottom: '16px', fontSize: '20px' }}>
            2. Какие данные мы собираем
          </h2>
          <p style={{ marginBottom: '20px', opacity: 0.85 }}>
            При заполнении формы записи мы собираем: имя, номер телефона, адрес электронной почты,
            выбранный тариф и комментарий. Также мы используем файлы cookie для анализа трафика
            и улучшения работы сайта.
          </p>

          <h2 style={{ color: 'var(--neon-cyan)', marginBottom: '16px', fontSize: '20px' }}>
            3. Цели обработки данных
          </h2>
          <p style={{ marginBottom: '20px', opacity: 0.85 }}>
            Персональные данные обрабатываются исключительно для связи с пользователем по вопросам
            записи на обучение, информирования о расписании занятий и улучшения качества
            предоставляемых услуг.
          </p>

          <h2 style={{ color: 'var(--neon-cyan)', marginBottom: '16px', fontSize: '20px' }}>
            4. Защита данных
          </h2>
          <p style={{ marginBottom: '20px', opacity: 0.85 }}>
            Мы принимаем необходимые организационные и технические меры для защиты персональных данных
            от неправомерного доступа, изменения, раскрытия или уничтожения. Данные хранятся
            на защищённых серверах и не передаются третьим лицам.
          </p>

          <h2 style={{ color: 'var(--neon-cyan)', marginBottom: '16px', fontSize: '20px' }}>
            5. Контакты
          </h2>
          <p style={{ marginBottom: '20px', opacity: 0.85 }}>
            По вопросам обработки персональных данных обращайтесь: info@vibecoding.by,
            +375 (29) 282-88-78.
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
