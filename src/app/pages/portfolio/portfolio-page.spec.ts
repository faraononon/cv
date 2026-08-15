import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { PortfolioPage } from './portfolio-page';

describe('PortfolioPage', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [PortfolioPage] })
      .overrideComponent(PortfolioPage, {
        set: {
          imports: [],
          schemas: [CUSTOM_ELEMENTS_SCHEMA],
        },
      })
      .compileComponents();
  });

  it('composes the portfolio sections in page order', async () => {
    const fixture = TestBed.createComponent(PortfolioPage);
    await fixture.whenStable();
    const main = fixture.nativeElement.querySelector('main.page-width') as HTMLElement;

    expect(main).toBeTruthy();
    expect(Array.from(main.children, (element) => element.tagName)).toEqual([
      'APP-HERO-SECTION',
      'APP-EXPERIENCE-SECTION',
      'APP-SKILLS-SECTION',
      'APP-CONTACT-SECTION',
    ]);
  });
});
