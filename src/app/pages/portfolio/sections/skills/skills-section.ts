import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

import { SKILL_GROUPS } from './data/skill-groups';

@Component({
  selector: 'app-skills-section',
  imports: [NgOptimizedImage],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.css',
})
export class SkillsSection {
  protected readonly groups = SKILL_GROUPS;
}
