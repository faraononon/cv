import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AvailabilityFooter } from './shared/ui/availability-footer/availability-footer';
import { SiteHeader } from './shared/ui/site-header/site-header';

@Component({
  selector: 'app-root',
  imports: [AvailabilityFooter, RouterOutlet, SiteHeader],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
