const PROGRAM_ITEMS = [
  {
    number: '01',
    title: 'Введение в ИИ-разработку',
    desc: 'Знакомство с Cursor AI, настройка рабочего окружения. Первый проект за 2 часа. Основы промпт-инженерии — как правильно ставить задачи ИИ.',
  },
  {
    number: '02',
    title: 'Веб-разработка с ИИ',
    desc: 'HTML, CSS, JavaScript с помощью искусственного интеллекта. Создание адаптивных веб-страниц. Современные подходы к вёрстке с AI-ассистентом.',
  },
  {
    number: '03',
    title: 'React и компонентный подход',
    desc: 'Построение интерактивных интерфейсов с React и Cursor AI. Компоненты, состояние, работа с данными — всё через призму ИИ программирования.',
  },
  {
    number: '04',
    title: 'Базы данных и бэкенд',
    desc: 'API, серверная логика, Supabase — быстрый старт без глубоких знаний. ИИ помогает писать запросы, структурировать данные и настраивать сервер.',
  },
  {
    number: '05',
    title: 'Деплой и портфолио',
    desc: 'Публикация проектов в интернете, настройка домена, базовое SEO. Оформление портфолио для старта карьеры IT-разработчика в Гродно и удалённо.',
  },
  {
    number: '06',
    title: 'Продвинутые AI-техники',
    desc: 'GitHub, отладка, оптимизация промптов. Стратегии создания коммерческих продуктов. Как профессионально применять ИИ в реальной разработке.',
  },
];

export default function ProgramSection() {
  return (
    <section className="section" id="program" aria-label="Программа курсов ИИ программирования в Гродно">
      <h2 className="section-title">Программа курсов ИИ программирования в Гродно</h2>
      <p className="section-subtitle">
        6 занятий — от нуля до рабочего проекта. 70% практики за компьютером,
        30% теории. Каждый урок — реальный прогресс.
      </p>

      <div className="program-grid">
        {PROGRAM_ITEMS.map((item) => (
          <div key={item.number} className="cyber-card program-item">
            <div className="program-number">{item.number}</div>
            <h3 className="program-item-title">{item.title}</h3>
            <p className="program-item-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
