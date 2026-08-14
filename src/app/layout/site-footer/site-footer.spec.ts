import { TestBed } from '@angular/core/testing';

import { SiteFooter } from './site-footer';

describe('SiteFooter', () => {
  it('renders the portfolio copyright and implementation note', async () => {
    const fixture = TestBed.createComponent(SiteFooter);
    await fixture.whenStable();
    const footer = fixture.nativeElement as HTMLElement;

    expect(footer.textContent).toContain('© 2026 Dmitriy Farion');
    expect(footer.textContent).toContain('Built with Angular');
    expect(footer.textContent).not.toContain('Open to work');
  });

});
