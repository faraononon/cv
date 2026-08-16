import { SkillGroup } from '../models/skill-group.model';

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    id: 'frontend-platform',
    title: 'Frontend platform',
    description: 'Core Angular, reactive, and interface technologies.',
    skills: [
      { label: 'Angular', icon: '/images/skills/angular.svg' },
      { label: 'TypeScript', icon: '/images/skills/typescript.svg' },
      { label: 'JavaScript ES6+', icon: '/images/skills/javascript.svg' },
      { label: 'RxJS' },
      { label: 'Signals' },
      { label: 'Standalone Components' },
    ],
  },
  {
    id: 'state-architecture',
    title: 'Architecture',
    description: 'Scalable patterns for complex frontend products.',
    skills: [
      { label: 'NgRx', icon: '/images/skills/ngrx.svg' },
      { label: 'Ngxs' },
      { label: 'Feature-Sliced Design' },
      { label: 'Nx Monorepo', icon: '/images/skills/nx.svg' },
      { label: 'DDD' },
    ],
  },
  {
    id: 'ui-ux',
    title: 'UI & UX',
    description: 'Accessible, responsive Angular interfaces.',
    skills: [
      { label: 'HTML5', icon: '/images/skills/html5.svg' },
      { label: 'CSS3 / SASS', icon: '/images/skills/sass.svg' },
      { label: 'Angular Material' },
      { label: 'Responsive Design' },
    ],
  },
  {
    id: 'tooling-delivery',
    title: 'Build & performance',
    description: 'Build systems, delivery automation, and deliberate bundle performance.',
    skills: [
      { label: 'Webpack', icon: '/images/skills/webpack.svg' },
      { label: 'Vite', icon: '/images/skills/vite.svg' },
      { label: 'GitHub Actions', icon: '/images/skills/githubactions.svg' },
      { label: 'Bundlephobia' },
    ],
  },
  {
    id: 'ai-engineering',
    title: 'AI Engineering',
    description: 'Agent-assisted workflows applied to modern software delivery.',
    skills: [
      { label: 'OpenAI Codex' },
      { label: 'Agent Skills' },
      { label: 'Agentic Workflows' },
      { label: 'Harness Concepts' },
      { label: 'Orchestration' },
    ],
  },
  {
    id: 'testing-quality',
    title: 'Testing & quality',
    description: 'Confidence built into delivery, not added after it.',
    skills: [
      { label: 'Jasmine', icon: '/images/skills/jasmine.svg' },
      { label: 'Karma' },
      { label: 'Jest', icon: '/images/skills/jest.svg' },
      { label: 'Cypress', icon: '/images/skills/cypress.svg' },
    ],
  },
];
