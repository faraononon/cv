import { SkillGroup } from '../models/skill-group.model';

export const SKILL_GROUPS: readonly SkillGroup[] = [
  {
    id: 'frontend-platform',
    title: 'Frontend platform',
    description: 'The runtime, reactive foundation, and interface layer.',
    skills: [
      { label: 'Angular 16+', icon: '/images/skills/angular.svg' },
      { label: 'TypeScript', icon: '/images/skills/typescript.svg' },
      { label: 'JavaScript ES6+', icon: '/images/skills/javascript.svg' },
      { label: 'RxJS' },
      { label: 'Signals' },
      { label: 'Standalone Components' },
      { label: 'HTML5', icon: '/images/skills/html5.svg' },
      { label: 'CSS3 / SCSS', icon: '/images/skills/sass.svg' },
      { label: 'Angular Material' },
      { label: 'Responsive Design' },
      { label: 'Accessibility' },
    ],
  },
  {
    id: 'state-architecture',
    title: 'State & architecture',
    description: 'Patterns that keep complex products scalable and maintainable.',
    skills: [
      { label: 'NgRx', icon: '/images/skills/ngrx.svg' },
      { label: 'Ngxs' },
      { label: 'Feature-Sliced Design' },
      { label: 'Nx Monorepo', icon: '/images/skills/nx.svg' },
      { label: 'DDD' },
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
  {
    id: 'tooling-delivery',
    title: 'Tooling & delivery',
    description: 'The systems around the code that keep teams moving.',
    skills: [
      { label: 'Webpack', icon: '/images/skills/webpack.svg' },
      { label: 'Vite', icon: '/images/skills/vite.svg' },
      { label: 'GitHub Actions', icon: '/images/skills/githubactions.svg' },
      { label: 'GitLab', icon: '/images/skills/gitlab.svg' },
      { label: 'Git', icon: '/images/skills/git.svg' },
      { label: 'Linux', icon: '/images/skills/linux.svg' },
    ],
  },
  {
    id: 'leadership',
    title: 'Leadership',
    description: 'Technical direction backed by delivery ownership.',
    skills: [
      { label: 'Frontend Team Leadership' },
      { label: 'Task Distribution' },
      { label: 'Delivery Ownership' },
      { label: 'Mentoring' },
      { label: 'Cross-Team Reviews' },
      { label: 'Technical Interviews' },
    ],
  },
];
