import { Experience } from '../../pages/portfolio/sections/experience/models/experience.model';
import { SkillGroup } from '../../pages/portfolio/sections/skills/models/skill-group.model';

export type Locale = 'en' | 'ru';

interface PortfolioContent {
  readonly meta: { readonly title: string; readonly description: string };
  readonly header: {
    readonly homeLabel: string;
    readonly brandName: string;
    readonly portfolio: string;
    readonly navigationLabel: string;
    readonly navigation: readonly string[];
    readonly languageLabel: string;
    readonly englishLabel: string;
    readonly russianLabel: string;
  };
  readonly hero: {
    readonly firstName: string;
    readonly lastName: string;
    readonly role: string;
    readonly experience: string;
    readonly summary: string;
    readonly availability: string;
    readonly actionsLabel: string;
    readonly viewWork: string;
    readonly downloadCv: string;
    readonly resumeUrl: string;
  };
  readonly experience: {
    readonly eyebrow: string;
    readonly title: string;
    readonly intro: string;
    readonly resultsLabel: string;
    readonly stackLabel: string;
    readonly technologiesLabel: (company: string) => string;
    readonly companyLinkText: string;
    readonly companyLinkLabel: (company: string) => string;
    readonly companyLinkTitle: (company: string) => string;
    readonly items: readonly Experience[];
  };
  readonly skills: {
    readonly eyebrow: string;
    readonly title: string;
    readonly intro: string;
    readonly listLabel: (group: string) => string;
    readonly groups: readonly SkillGroup[];
  };
  readonly contact: {
    readonly eyebrow: string;
    readonly title: string;
    readonly intro: string;
    readonly directLinksLabel: string;
    readonly prompt: string;
    readonly statement: string;
    readonly optionsLabel: string;
    readonly emailLabel: string;
    readonly githubLabel: string;
    readonly telegramLabel: string;
    readonly honeypotLabel: string;
    readonly nameLabel: string;
    readonly namePlaceholder: string;
    readonly nameError: string;
    readonly emailFieldLabel: string;
    readonly emailPlaceholder: string;
    readonly emailError: string;
    readonly messageLabel: string;
    readonly messagePlaceholder: string;
    readonly messageError: (minLength: number) => string;
    readonly sending: string;
    readonly send: string;
    readonly success: string;
    readonly error: string;
  };
  readonly scrollTop: { readonly label: string; readonly text: string };
}

const technologyGroups = {
  frontend: [
    { label: 'Angular', icon: '/images/skills/angular.svg' },
    { label: 'TypeScript', icon: '/images/skills/typescript.svg' },
    { label: 'JavaScript ES6+', icon: '/images/skills/javascript.svg' },
    { label: 'RxJS' },
    { label: 'Signals' },
    { label: 'Standalone Components' },
  ],
  architecture: [
    { label: 'NgRx', icon: '/images/skills/ngrx.svg' },
    { label: 'Ngxs' },
    { label: 'Feature-Sliced Design' },
    { label: 'Nx Monorepo', icon: '/images/skills/nx.svg' },
    { label: 'DDD' },
  ],
  ui: [
    { label: 'HTML5', icon: '/images/skills/html5.svg' },
    { label: 'CSS3 / SASS', icon: '/images/skills/sass.svg' },
    { label: 'Angular Material' },
    { label: 'Responsive Design' },
  ],
  tooling: [
    { label: 'Webpack', icon: '/images/skills/webpack.svg' },
    { label: 'Vite', icon: '/images/skills/vite.svg' },
    { label: 'GitHub Actions', icon: '/images/skills/githubactions.svg' },
    { label: 'Bundlephobia' },
  ],
  ai: [
    { label: 'OpenAI Codex' },
    { label: 'Agent Skills' },
    { label: 'Agentic Workflows' },
    { label: 'Harness Concepts' },
    { label: 'Orchestration' },
  ],
  testing: [
    { label: 'Jasmine', icon: '/images/skills/jasmine.svg' },
    { label: 'Karma' },
    { label: 'Jest', icon: '/images/skills/jest.svg' },
    { label: 'Cypress', icon: '/images/skills/cypress.svg' },
  ],
} as const;

const englishExperiences: readonly Experience[] = [
  {
    slug: 'bimeister',
    company: 'Bimeister',
    companyUrl: 'https://bimeister.com/en/',
    period: '06/2023 — 06/2026',
    headline: 'Industrial SaaS platform',
    responsibility:
      'Led a frontend team of 3, owning technical decisions, task decomposition, code reviews, and frontend delivery.',
    image: {
      src: '/images/projects/bimeister-platform.png',
      alt: 'Bimeister industrial platform website over an aerial view of a production facility',
      width: 1693,
      height: 1177,
    },
    technologies: [
      'Angular',
      'TypeScript',
      'RxJS',
      'Nx',
      'DDD',
      'Ngxs',
      'HTML5',
      'CSS3',
      'SCSS',
      'Jasmine',
      'Karma',
      'Cypress',
      'GitLab',
    ],
    supportingResults: [
      'Nx monorepo migration',
      '10+ reusable UI kit components',
      'Shared feature components',
    ],
  },
  {
    slug: 'b2broker',
    company: 'B2Broker',
    companyUrl: 'https://b2broker.com/products/b2core-traders-room/',
    period: '02/2022 — 05/2023',
    headline: 'Greenfield Angular product',
    responsibility:
      'Designed the frontend architecture across 5 major business domains and delivered the product from scratch to its first production release.',
    image: {
      src: '/images/projects/b2broker-dashboard.png',
      alt: 'B2CORE CRM landing page with a B2Broker client dashboard preview',
      width: 1420,
      height: 1116,
    },
    technologies: [
      'Angular',
      'TypeScript',
      'RxJS',
      'Jest',
      'Vite',
      'HTML5',
      'CSS3',
      'SCSS',
      'Jira',
      'Git',
    ],
    supportingResults: [
      'Feature-Sliced architecture',
      '84% Jest code coverage',
      'Cross-team reviews & mentoring',
    ],
  },
  {
    slug: 'solarlab',
    company: 'Solarlab',
    companyUrl: 'https://solarlab.ru/en/index.html',
    period: '08/2018 — 02/2022',
    headline: 'Enterprise B2B & marketplaces',
    responsibility:
      'Refactored legacy Angular modules, introduced route-level lazy loading, and optimized third-party dependencies.',
    image: {
      src: '/images/projects/solarlab-rts-market.png',
      alt: 'SolarLab website presenting fintech, blockchain, and document management solutions',
      width: 1308,
      height: 866,
    },
    technologies: [
      'Angular',
      'TypeScript',
      'JavaScript',
      'RxJS',
      'HTML5',
      'CSS3',
      'SCSS',
      'Webpack',
      'Jira',
      'Git',
    ],
    supportingResults: [
      'Trainee → Senior in 3.5 years',
      '20+ candidates evaluated',
      'Bundle optimization',
    ],
  },
];

const russianExperiences: readonly Experience[] = [
  {
    slug: 'bimeister',
    company: 'Bimeister',
    companyUrl: 'https://bimeister.com/ru/',
    period: '06/2023 — 06/2026',
    headline: 'Промышленная SaaS-платформа',
    responsibility:
      'Руководил фронтенд-командой из трёх человек: принимал технические решения, декомпозировал задачи, проводил код-ревью и отвечал за результат команды.',
    image: {
      src: '/images/projects/bimeister-platform.png',
      alt: 'Сайт промышленной платформы Bimeister на фоне производственного объекта',
      width: 1693,
      height: 1177,
    },
    technologies: englishExperiences[0].technologies,
    supportingResults: [
      'Миграция на Nx-монорепозиторий',
      'Более 10 переиспользуемых компонентов UI-кита',
      'Общие компоненты продуктовой логики',
    ],
  },
  {
    slug: 'b2broker',
    company: 'B2Broker',
    companyUrl: 'https://b2broker.com/ru/products/b2core-traders-room/',
    period: '02/2022 — 05/2023',
    headline: 'Новый продукт на Angular',
    responsibility:
      'Спроектировал фронтенд-архитектуру для пяти ключевых бизнес-доменов и обеспечил разработку продукта с нуля до первого промышленного релиза.',
    image: {
      src: '/images/projects/b2broker-dashboard.png',
      alt: 'Страница B2CORE CRM с интерфейсом кабинета клиента B2Broker',
      width: 1420,
      height: 1116,
    },
    technologies: englishExperiences[1].technologies,
    supportingResults: [
      'Архитектура Feature-Sliced Design',
      '84% покрытия кода тестами Jest',
      'Межкомандные ревью и менторство',
    ],
  },
  {
    slug: 'solarlab',
    company: 'Solarlab',
    companyUrl: 'https://solarlab.ru/index.html',
    period: '08/2018 — 02/2022',
    headline: 'Корпоративные B2B-системы и маркетплейсы',
    responsibility:
      'Рефакторил устаревшие модули Angular, внедрил ленивую загрузку маршрутов и оптимизировал сторонние зависимости.',
    image: {
      src: '/images/projects/solarlab-rts-market.png',
      alt: 'Сайт SolarLab с решениями для финтеха, блокчейна и управления документами',
      width: 1308,
      height: 866,
    },
    technologies: englishExperiences[2].technologies,
    supportingResults: [
      'Рост от стажёра до старшего разработчика за 3,5 года',
      'Более 20 технических собеседований',
      'Оптимизация размера сборки',
    ],
  },
];

export const PORTFOLIO_CONTENT: Readonly<Record<Locale, PortfolioContent>> = {
  en: {
    meta: {
      title: 'Dmitriy Farion — Senior Angular Frontend Developer',
      description:
        'Senior Angular Frontend Developer focused on product delivery, frontend leadership, architecture, and team enablement.',
    },
    header: {
      homeLabel: 'Dmitriy Farion — home',
      brandName: 'Dmitriy',
      portfolio: 'Portfolio',
      navigationLabel: 'Primary navigation',
      navigation: ['About', 'Projects', 'Skills', 'Contact'],
      languageLabel: 'Language',
      englishLabel: 'English',
      russianLabel: 'Russian',
    },
    hero: {
      firstName: 'Dmitriy',
      lastName: 'Farion',
      role: 'Senior Angular Frontend Developer',
      experience: '7+ years building complex frontend platforms',
      summary:
        'I love building scalable Angular platforms, shaping maintainable frontend architecture, and leading teams with end-to-end ownership.',
      availability: 'Open to work',
      actionsLabel: 'Portfolio actions',
      viewWork: 'View selected work',
      downloadCv: 'Download CV',
      resumeUrl: '/resume/Farion_Dmitriy_Resume_EN.pdf',
    },
    experience: {
      eyebrow: 'Selected work',
      title: 'Projects',
      intro:
        'Enterprise Angular products shaped through architecture, team leadership, and hands-on delivery.',
      resultsLabel: 'Supporting results',
      stackLabel: 'Core stack',
      technologiesLabel: (company) => `${company} technologies`,
      companyLinkText: 'View company',
      companyLinkLabel: (company) => `Visit ${company} website (opens in a new tab)`,
      companyLinkTitle: (company) => `Visit ${company} website`,
      items: englishExperiences,
    },
    skills: {
      eyebrow: 'Capabilities',
      title: 'Skills',
      intro: 'Technical depth organized by how it contributes to product delivery.',
      listLabel: (group) => `${group} skills`,
      groups: [
        {
          id: 'frontend-platform',
          title: 'Frontend platform',
          description: 'Core Angular, reactive, and interface technologies.',
          skills: technologyGroups.frontend,
        },
        {
          id: 'state-architecture',
          title: 'Architecture',
          description: 'Scalable patterns for complex frontend products.',
          skills: technologyGroups.architecture,
        },
        {
          id: 'ui-ux',
          title: 'UI & UX',
          description: 'Accessible, responsive Angular interfaces.',
          skills: technologyGroups.ui,
        },
        {
          id: 'tooling-delivery',
          title: 'Build & performance',
          description: 'Build systems, delivery automation, and deliberate bundle performance.',
          skills: technologyGroups.tooling,
        },
        {
          id: 'ai-engineering',
          title: 'AI Engineering',
          description: 'Agent-assisted workflows applied to modern software delivery.',
          skills: technologyGroups.ai,
        },
        {
          id: 'testing-quality',
          title: 'Testing & quality',
          description: 'Confidence built into delivery, not added after it.',
          skills: technologyGroups.testing,
        },
      ],
    },
    contact: {
      eyebrow: 'Contact / open to opportunities',
      title: "Let's talk",
      intro:
        'Have a product challenge, an Angular platform to scale, or a team that needs technical leadership? Send me a message.',
      directLinksLabel: 'Direct contact links',
      prompt: 'Start a conversation',
      statement: "Let's build a frontend that stays strong as the product grows.",
      optionsLabel: 'Contact options',
      emailLabel: 'Send an email to Dmitriy',
      githubLabel: "Open Dmitriy's GitHub profile",
      telegramLabel: 'Message Dmitriy on Telegram',
      honeypotLabel: 'Leave this field empty',
      nameLabel: 'Name',
      namePlaceholder: 'Your name',
      nameError: 'Please enter your name.',
      emailFieldLabel: 'Email',
      emailPlaceholder: 'you@company.com',
      emailError: 'Please enter a valid email.',
      messageLabel: 'Message',
      messagePlaceholder: 'Tell me about the project, role, or challenge.',
      messageError: (minLength) => `Please add at least ${minLength} characters.`,
      sending: 'Sending…',
      send: 'Send message',
      success: "Message sent. I'll get back to you soon.",
      error: 'Delivery is unavailable right now. Please use email or Telegram.',
    },
    scrollTop: { label: 'Scroll to top', text: 'Top' },
  },
  ru: {
    meta: {
      title: 'Дмитрий Фарион — Senior Angular Frontend Developer',
      description:
        'Senior Angular Frontend Developer: продуктовая разработка, архитектура, техническое лидерство и развитие команд.',
    },
    header: {
      homeLabel: 'Дмитрий Фарион — главная',
      brandName: 'Дмитрий',
      portfolio: 'Портфолио',
      navigationLabel: 'Основная навигация',
      navigation: ['Обо мне', 'Проекты', 'Навыки', 'Контакты'],
      languageLabel: 'Язык',
      englishLabel: 'Английский',
      russianLabel: 'Русский',
    },
    hero: {
      firstName: 'Дмитрий',
      lastName: 'Фарион',
      role: 'Senior Angular Frontend Developer',
      experience: 'Более 7 лет создаю сложные фронтенд-платформы',
      summary:
        'Создаю масштабируемые платформы на Angular, проектирую поддерживаемую фронтенд-архитектуру и руковожу командами, отвечая за результат на всех этапах разработки.',
      availability: 'Ищу работу',
      actionsLabel: 'Действия с портфолио',
      viewWork: 'Смотреть проекты',
      downloadCv: 'Скачать резюме',
      resumeUrl: '/resume/Farion_Dmitriy_Resume_RU.pdf',
    },
    experience: {
      eyebrow: 'Ключевые проекты',
      title: 'Проекты',
      intro:
        'Корпоративные продукты на Angular, в которых я отвечал за архитектуру, техническое лидерство и разработку.',
      resultsLabel: 'Основные результаты',
      stackLabel: 'Основной стек',
      technologiesLabel: (company) => `Технологии проекта ${company}`,
      companyLinkText: 'О компании',
      companyLinkLabel: (company) => `Открыть сайт ${company} в новой вкладке`,
      companyLinkTitle: (company) => `Открыть сайт ${company}`,
      items: russianExperiences,
    },
    skills: {
      eyebrow: 'Компетенции',
      title: 'Навыки',
      intro: 'Технические компетенции по направлениям разработки продукта.',
      listLabel: (group) => `Навыки: ${group}`,
      groups: [
        {
          id: 'frontend-platform',
          title: 'Фронтенд-платформа',
          description: 'Angular, реактивное программирование и разработка интерфейсов.',
          skills: technologyGroups.frontend,
        },
        {
          id: 'state-architecture',
          title: 'Архитектура',
          description: 'Архитектурные подходы для сложных фронтенд-продуктов.',
          skills: technologyGroups.architecture,
        },
        {
          id: 'ui-ux',
          title: 'UI и UX',
          description: 'Доступные адаптивные интерфейсы на Angular.',
          skills: technologyGroups.ui,
        },
        {
          id: 'tooling-delivery',
          title: 'Сборка',
          description:
            'Инструменты сборки, автоматизация релизов и оптимизация производительности.',
          skills: technologyGroups.tooling,
        },
        {
          id: 'ai-engineering',
          title: 'ИИ-инженерия',
          description: 'Агентные подходы и инструменты для современной разработки ПО.',
          skills: technologyGroups.ai,
        },
        {
          id: 'testing-quality',
          title: 'Тестирование и качество',
          description: 'Качество, встроенное в процесс разработки.',
          skills: technologyGroups.testing,
        },
      ],
    },
    contact: {
      eyebrow: 'Контакты / ищу работу',
      title: 'Обсудим проект',
      intro:
        'Если вам нужно масштабировать продукт на Angular, проработать архитектуру или усилить техническое лидерство в команде — напишите мне.',
      directLinksLabel: 'Контактные ссылки',
      prompt: 'Связаться напрямую',
      statement: 'Фронтенд-архитектура, рассчитанная на рост продукта и команды.',
      optionsLabel: 'Способы связи',
      emailLabel: 'Написать Дмитрию по электронной почте',
      githubLabel: 'Открыть профиль Дмитрия на GitHub',
      telegramLabel: 'Написать Дмитрию в Telegram',
      honeypotLabel: 'Оставьте это поле пустым',
      nameLabel: 'Имя',
      namePlaceholder: 'Ваше имя',
      nameError: 'Введите имя.',
      emailFieldLabel: 'Электронная почта',
      emailPlaceholder: 'you@company.com',
      emailError: 'Введите корректный адрес электронной почты.',
      messageLabel: 'Сообщение',
      messagePlaceholder: 'Опишите ваш проект, роль или задачу.',
      messageError: (minLength) => `Введите не менее ${minLength} символов.`,
      sending: 'Отправляем…',
      send: 'Отправить',
      success: 'Сообщение отправлено. Отвечу в ближайшее время.',
      error:
        'Не удалось отправить сообщение. Свяжитесь со мной по электронной почте или в Telegram.',
    },
    scrollTop: { label: 'Вернуться к началу страницы', text: 'Наверх' },
  },
};
