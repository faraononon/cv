import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

import { Experience } from '../models/experience.model';

@Component({
  selector: 'app-experience-card',
  imports: [NgOptimizedImage],
  templateUrl: './experience-card.html',
  styleUrl: './experience-card.css',
})
export class ExperienceCard {
  readonly experience = input.required<Experience>();
}
