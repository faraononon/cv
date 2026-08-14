import { getBuiltInRatings } from 'web-codegen-scorer';

/** @type {import('web-codegen-scorer').EnvironmentConfig} */
export default {
  displayName: 'Dmitriy Farion Portfolio',
  clientSideFramework: 'angular',
  sourceDirectory: '../..',
  ratings: getBuiltInRatings(),
  generationSystemPrompt: '../../.agents/references/best-practices.md',
  executablePrompts: ['./prompts/**/*.md'],
  packageManager: 'npm',
  testCommand: 'npm test -- --watch=false',
};
