import { TestBed } from '@angular/core/testing';

import { SkillsSection } from './skills-section';

describe('SkillsSection', () => {
  it('renders all brief-defined groups as semantic skill lists', async () => {
    const fixture = TestBed.createComponent(SkillsSection);
    await fixture.whenStable();
    const section = fixture.nativeElement as HTMLElement;

    expect(section.querySelector('#skills')).toBeTruthy();
    expect(section.querySelectorAll('article')).toHaveLength(6);
    expect(section.querySelectorAll('h3')).toHaveLength(6);
    expect(
      Array.from(section.querySelectorAll('h3'), (heading) => heading.textContent?.trim()),
    ).toEqual([
      'Frontend platform',
      'Architecture',
      'UI & UX',
      'Build & performance',
      'AI Engineering',
      'Testing & quality',
    ]);
    expect(section.textContent).toContain('Angular');
    expect(section.textContent).toContain('OpenAI Codex');
    expect(section.textContent).toContain('Harness Concepts');
    expect(section.querySelector('[aria-label="AI Engineering skills"]')).toBeTruthy();
    expect(section.querySelectorAll('.icon img').length).toBeGreaterThanOrEqual(10);
    expect(section.querySelector('.ui-ux ul')?.querySelectorAll('li')).toHaveLength(4);
    expect(section.querySelector('.tooling-delivery ul')?.querySelectorAll('li')).toHaveLength(4);
  });
});
