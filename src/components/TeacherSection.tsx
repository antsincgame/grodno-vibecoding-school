

export default function TeacherSection() {
  return (
    <section className="section" id="teacher">
      <h2 className="section-title">Дмитрий Орлов — ваш наставник в мире AI</h2>
      <p className="section-subtitle">
        Основатель VibeCoding, практикующий разработчик с 15+ лет опыта в IT-индустрии
      </p>

      <div className="teacher-card">
        <div className="teacher-photo-wrapper">
          <img
            src="/images/lab/lab-01.jpg"
            alt="Дмитрий Орлов — преподаватель AI-лаборатории VibeCoding в Гродно"
            width={300}
            className="teacher-photo"
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div>
          <h3 className="teacher-name">Дмитрий Орлов</h3>
          <p className="teacher-role">Основатель VibeCoding / AI-разработчик</p>

          <div className="teacher-badges">
            <span className="teacher-badge">15+ лет в IT</span>
            <span className="teacher-badge">Основатель VibeCoding</span>
            <span className="teacher-badge">Бывший Резидент ПВТ</span>
            <span className="teacher-badge">Основатель «Студия Орлова»</span>
          </div>

          <p className="teacher-bio">
            Дмитрий — практик, который сам создаёт продукты с помощью AI каждый день.
            Он основал онлайн-школу{' '}
            <a
              href="https://vibecoding.by/about"
              target="_blank"
              rel="noopener noreferrer"
              className="teacher-link"
            >
              VibeCoding
            </a>
            , через которую уже прошли десятки учеников. Теперь VibeCoding пришёл в Гродно
            в формате живой AI-лаборатории.
          </p>

          <p className="teacher-bio">
            На занятиях в AI-лаборатории Гродно Дмитрий лично ведёт каждый урок,
            помогает с проектами и делится реальным опытом коммерческой разработки.
            Индивидуальный подход, малые группы, живое общение — всё для максимального результата.
          </p>

          <a
            href="https://vibecoding.by/about"
            target="_blank"
            rel="noopener noreferrer"
            className="teacher-link"
          >
            Подробнее о преподавателе →
          </a>
        </div>
      </div>
    </section>
  );
}
