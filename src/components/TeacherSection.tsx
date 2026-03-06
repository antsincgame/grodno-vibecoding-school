

export default function TeacherSection() {
  return (
    <section className="section" id="teacher">
      <h2 className="section-title">Наставник курсов программирования в&nbsp;Гродно</h2>
      <p className="section-subtitle">
        Основатель VibeCoding, практикующий разработчик с 15+ лет опыта в IT-индустрии
      </p>

      <div className="teacher-card">
        <div className="teacher-photo-wrapper">
          <img
            src="/images/lab/lab-01.jpg"
            alt="Дмитрий Орлов — наставник школы программирования VibeCoding в Гродно"
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
            в формате живой офлайн-школы.
          </p>

          <p className="teacher-bio">
            На курсах программирования в Гродно Дмитрий лично ведёт каждый урок,
            помогает с проектами и делится реальным опытом коммерческой разработки.
            Индивидуальный подход, мини-группы до 4 человек, живое общение — как персональное репетиторство, но в команде.
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
