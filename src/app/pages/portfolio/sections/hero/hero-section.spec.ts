import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { HeroSection } from './hero-section';

describe('HeroSection', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSection],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('identifies Dmitriy, his Angular specialization, experience, and availability', async () => {
    const fixture = TestBed.createComponent(HeroSection);
    await fixture.whenStable();
    const hero = fixture.nativeElement as HTMLElement;

    expect(hero.querySelector('h1')?.textContent).toContain('Dmitriy Farion');
    expect(hero.querySelector('.role')?.textContent).toContain('Angular Frontend Engineer');
    expect(hero.querySelector('.experience')?.textContent).toContain('7+ years');
    expect(hero.querySelector('.summary')?.textContent).toContain(
      'I love building scalable Angular platforms',
    );
    expect(hero.querySelector('[role="status"]')?.textContent).toContain('Open to work');
  });

  it('presents the complete profile as labelled, non-editable JSON', async () => {
    const fixture = TestBed.createComponent(HeroSection);
    await fixture.whenStable();
    const hero = fixture.nativeElement as HTMLElement;
    const profile = hero.querySelector<HTMLElement>('[aria-label="Dmitriy Farion profile data"]');

    expect(profile).toBeTruthy();
    expect(profile?.textContent).toContain('"name": "Dmitriy Farion"');
    expect(profile?.textContent).toContain('"role": "Angular Frontend Engineer"');
    expect(profile?.textContent).toContain('"location": "Remote"');
    expect(profile?.textContent).toContain('"experience": "7+ years"');
    expect(profile?.textContent).toContain('"selectedWork": 3');
    expect(profile?.textContent).toContain('"email": "farion.dmitri@gmail.com"');
    expect(profile?.textContent).toContain('"messenger": "Available on request"');
    expect(profile?.textContent).toContain('"status": "open_to_work"');
    expect(profile?.matches('textarea, input, [contenteditable="true"]')).toBe(false);
  });

  it('links to selected work and the stable downloadable CV', async () => {
    const fixture = TestBed.createComponent(HeroSection);
    await fixture.whenStable();
    const hero = fixture.nativeElement as HTMLElement;
    const selectedWork = hero.querySelector<HTMLAnchorElement>('.action.primary');
    const resume = hero.querySelector<HTMLAnchorElement>('.action.secondary');

    expect(selectedWork?.getAttribute('href')).toBe('/#selected-work');
    expect(resume?.getAttribute('href')).toBe('/resume/Farion_Dmitriy_Resume_EN.pdf');
    expect(resume?.hasAttribute('download')).toBe(true);
    expect(resume?.textContent).toContain('Download CV');
  });

  it('renders the static Angular mark as a decorative background layer', async () => {
    const fixture = TestBed.createComponent(HeroSection);
    await fixture.whenStable();
    const hero = fixture.nativeElement as HTMLElement;
    const visual = hero.querySelector('.visual');

    expect(visual).toBeTruthy();
    expect(visual?.getAttribute('aria-hidden')).toBe('true');
    expect(visual?.querySelector('app-angular-mark')).toBeTruthy();
  });
});
