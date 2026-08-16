import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { SiteHeader } from './site-header';

describe('SiteHeader', () => {
  it('renders the brand and primary navigation', async () => {
    await TestBed.configureTestingModule({
      imports: [SiteHeader],
      providers: [provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(SiteHeader);
    await fixture.whenStable();
    const header = fixture.nativeElement as HTMLElement;

    expect(header.querySelector('.brand')?.getAttribute('aria-label')).toBe(
      'Dmitriy Farion — home',
    );
    expect(header.querySelector('.brand')?.textContent?.replace(/\s/g, '')).toBe(
      'Dmitriy/Portfolio',
    );
    expect(header.querySelector('nav')?.getAttribute('aria-label')).toBe('Primary navigation');
    expect(header.querySelectorAll('.nav a')).toHaveLength(4);
    expect(
      Array.from(header.querySelectorAll('.nav a'), (link) => link.textContent?.trim()),
    ).toEqual(['01About', '02Projects', '03Skills', '04Contact']);
    expect(header.querySelectorAll('.locale-switcher a')).toHaveLength(2);
    expect(header.querySelector('.locale-switcher [aria-current="page"]')?.textContent).toBe('EN');
  });
});
