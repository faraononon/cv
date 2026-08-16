import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { LocaleService } from '../../../../core/i18n/locale.service';
import { AngularMark } from './angular-mark/angular-mark';

@Component({
  selector: 'app-hero-section',
  imports: [AngularMark, RouterLink],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {
  protected readonly i18n = inject(LocaleService);
}
