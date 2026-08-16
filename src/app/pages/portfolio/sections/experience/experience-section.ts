import { Component, inject } from '@angular/core';

import { LocaleService } from '../../../../core/i18n/locale.service';
import { ExperienceCard } from './experience-card/experience-card';

@Component({
  selector: 'app-experience-section',
  imports: [ExperienceCard],
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.css',
})
export class ExperienceSection {
  protected readonly i18n = inject(LocaleService);
}
