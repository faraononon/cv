import { NgOptimizedImage } from '@angular/common';
import { Component, inject, input } from '@angular/core';

import { LocaleService } from '../../../../../core/i18n/locale.service';
import { Experience } from '../models/experience.model';

@Component({
  selector: 'app-experience-card',
  imports: [NgOptimizedImage],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.css',
})
export class ExperienceCard {
  readonly experience = input.required<Experience>();
  protected readonly i18n = inject(LocaleService);
}
