import { Component } from '@angular/core';

import { EXPERIENCES } from './data/experiences';
import { ExperienceCard } from './experience-card/experience-card';

@Component({
  selector: 'app-experience-section',
  imports: [ExperienceCard],
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.css',
})
export class ExperienceSection {
  protected readonly experiences = EXPERIENCES;
}
