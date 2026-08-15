import { TestBed } from '@angular/core/testing';

import { ExperienceSection } from './experience-section';

describe('ExperienceSection', () => {
  it('renders every experience as a project card', async () => {
    const fixture = TestBed.createComponent(ExperienceSection);
    await fixture.whenStable();
    const section = fixture.nativeElement as HTMLElement;

    expect(section.querySelector('#selected-work h2')?.textContent).toContain('Projects');
    expect(section.querySelectorAll('ol > li')).toHaveLength(3);
    expect(section.querySelectorAll('app-experience-card')).toHaveLength(3);
    expect(section.querySelectorAll('.technologies')).toHaveLength(3);
    expect(section.textContent).toContain('Bimeister');
    expect(section.textContent).toContain('B2Broker');
    expect(section.textContent).toContain('Solarlab');
  });
});
