import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ScrollTopButton } from './features/scroll-to-top/scroll-top-button';
import { SiteFooter } from './layout/site-footer/site-footer';
import { SiteHeader } from './layout/site-header/site-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ScrollTopButton, SiteFooter, SiteHeader],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
