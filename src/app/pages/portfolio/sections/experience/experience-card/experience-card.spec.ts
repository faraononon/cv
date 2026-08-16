import { TestBed } from '@angular/core/testing';

import { EXPERIENCES } from '../data/experiences';
import { ExperienceCard } from './experience-card';

describe('ExperienceCard', () => {
  it('connects the supplied company to responsibility and measurable outcomes', async () => {
    const fixture = TestBed.createComponent(ExperienceCard);
    fixture.componentRef.setInput('experience', EXPERIENCES[0]);
    await fixture.whenStable();
    const card = fixture.nativeElement as HTMLElement;

    expect(card.querySelector('h3')?.textContent).toContain('Bimeister');
    expect(card.querySelector('time')?.textContent).toContain('06/2023');
    expect(card.querySelector('.responsibility')?.textContent).toContain(
      'Led a frontend team of 3',
    );
    expect(card.querySelector('.technologies')?.textContent).toContain('Angular');
    expect(card.querySelector('.technologies')?.textContent).toContain('Nx');
    expect(card.querySelectorAll('.technologies li')).toHaveLength(13);
    expect(card.querySelector('.results')?.textContent).toContain('Nx monorepo migration');
    expect(card.querySelector('.results')?.textContent).toContain('10+ reusable UI kit components');
    expect(card.querySelectorAll('.results li')).toHaveLength(3);
  });

  it('opens the company website safely in a new tab', async () => {
    const fixture = TestBed.createComponent(ExperienceCard);
    fixture.componentRef.setInput('experience', EXPERIENCES[0]);
    await fixture.whenStable();
    const link = (fixture.nativeElement as HTMLElement).querySelector('.company-link');

    expect(link?.getAttribute('href')).toBe('https://bimeister.com/en/');
    expect(link?.getAttribute('target')).toBe('_blank');
    expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
    expect(link?.getAttribute('aria-label')).toContain('opens in a new tab');
    expect(link?.textContent).toContain('View company');
  });

  it('renders the Bimeister project screenshot with an accessible description', async () => {
    const fixture = TestBed.createComponent(ExperienceCard);
    fixture.componentRef.setInput('experience', EXPERIENCES[0]);
    await fixture.whenStable();
    const card = fixture.nativeElement as HTMLElement;
    const image = card.querySelector('img');

    expect(image?.getAttribute('src')).toContain('/images/projects/bimeister-platform.png');
    expect(image?.getAttribute('alt')).toContain('Bimeister industrial platform website');
    expect(card.querySelector('.visual')?.hasAttribute('aria-hidden')).toBe(false);
  });

  it('renders the B2Broker product screenshot with an accessible description', async () => {
    const fixture = TestBed.createComponent(ExperienceCard);
    fixture.componentRef.setInput('experience', EXPERIENCES[1]);
    await fixture.whenStable();
    const card = fixture.nativeElement as HTMLElement;
    const image = card.querySelector('img');

    expect(image?.getAttribute('src')).toContain('/images/projects/b2broker-dashboard.png');
    expect(image?.getAttribute('alt')).toContain('B2CORE CRM landing page');
    expect(card.querySelector('.visual')?.hasAttribute('aria-hidden')).toBe(false);
  });

  it('renders the Solarlab product screenshot with an accessible description', async () => {
    const fixture = TestBed.createComponent(ExperienceCard);
    fixture.componentRef.setInput('experience', EXPERIENCES[2]);
    await fixture.whenStable();
    const card = fixture.nativeElement as HTMLElement;
    const image = card.querySelector('img');

    expect(image?.getAttribute('src')).toContain('/images/projects/solarlab-rts-market.png');
    expect(image?.getAttribute('alt')).toContain('SolarLab website');
    expect(card.querySelector('.visual')?.hasAttribute('aria-hidden')).toBe(false);
  });
});
