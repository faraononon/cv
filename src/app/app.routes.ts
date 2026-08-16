import { Routes } from '@angular/router';

import { PortfolioPage } from './pages/portfolio/portfolio-page';

export const routes: Routes = [
  { path: 'en', component: PortfolioPage },
  { path: 'ru', component: PortfolioPage },
  { path: '', redirectTo: 'ru', pathMatch: 'full' },
  { path: '**', redirectTo: 'ru' },
];
