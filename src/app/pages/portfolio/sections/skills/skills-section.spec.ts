import { TestBed } from '@angular/core/testing';

import { SkillsSection } from './skills-section';

describe('SkillsSection', () => {
  it('renders all brief-defined groups as semantic skill lists', async () => {
    const fixture = TestBed.createComponent(SkillsSection);
    await fixture.whenStable();
    const section = fixture.nativeElement as HTMLElement;

    expect(section.querySelector('#skills')).toBeTruthy();
    expect(section.querySelectorAll('article')).toHaveLength(5);
    expect(section.querySelectorAll('h3')).toHaveLength(5);
    expect(section.textContent).toContain('Angular 16+');
    expect(section.textContent).toContain('Technical Interviews');
    expect(section.querySelector('[aria-label="Leadership skills"]')).toBeTruthy();
    expect(section.querySelectorAll('.icon img').length).toBeGreaterThan(10);
    expect(section.textContent).not.toContain('skills.config.ts');
    expect(section.textContent).not.toContain('Reusable UI Systems');
    expect(section.textContent).not.toContain('Code Review');
    expect(section.textContent).not.toContain('Agile / Scrum');
  });
});
