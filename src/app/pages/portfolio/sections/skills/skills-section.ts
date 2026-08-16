import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';

import { LocaleService } from '../../../../core/i18n/locale.service';

@Component({
  selector: 'app-skills-section',
  imports: [NgOptimizedImage],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.css',
})
export class SkillsSection {
  protected readonly i18n = inject(LocaleService);
}
