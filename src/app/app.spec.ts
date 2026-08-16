import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Router } from '@angular/router';

import { App } from './app';
import { routes } from './app.routes';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideHttpClient(), provideRouter(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the shared page frame', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('app-site-header')).toBeTruthy();
    expect(compiled.querySelector('router-outlet')).toBeTruthy();
    expect(compiled.querySelector('app-site-footer')).toBeTruthy();
    expect(compiled.querySelector('app-scroll-top-button')).toBeTruthy();
  });

  it('switches the full UI, company links, and downloadable CV to Russian', async () => {
    const fixture = TestBed.createComponent(App);
    await TestBed.inject(Router).navigateByUrl('/ru');
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(document.documentElement.lang).toBe('ru');
    expect(compiled.querySelector('.nav')?.textContent).toContain('Проекты');
    expect(compiled.querySelector('.hero .role')?.textContent).toContain(
      'Senior Angular Frontend Developer',
    );
    expect(
      compiled.querySelector<HTMLAnchorElement>('.action.secondary')?.getAttribute('href'),
    ).toBe('/resume/Farion_Dmitriy_Resume_RU.pdf');
    expect(
      compiled.querySelector<HTMLAnchorElement>('#bimeister .company-link')?.getAttribute('href'),
    ).toBe('https://bimeister.com/ru/');
    expect(compiled.querySelector('#skills-title')?.textContent).toContain('Навыки');
    expect(compiled.querySelector('.site-footer')?.textContent).toContain('Built with Angular');
    expect(compiled.querySelector('.profile')?.textContent).toContain(
      '"role": "Angular Frontend Engineer"',
    );
  });
});
