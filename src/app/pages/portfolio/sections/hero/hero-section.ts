import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { AngularMark } from './angular-mark/angular-mark';

@Component({
  selector: 'app-hero-section',
  imports: [AngularMark, RouterLink],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {}
