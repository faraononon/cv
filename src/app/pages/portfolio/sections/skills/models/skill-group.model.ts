export interface SkillGroup {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly skills: readonly SkillItem[];
}

export interface SkillItem {
  readonly label: string;
  readonly icon?: string;
}
