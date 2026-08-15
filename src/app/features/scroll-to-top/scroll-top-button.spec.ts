import { TestBed } from '@angular/core/testing';
import { vi } from 'vitest';

import { ScrollTopButton } from './scroll-top-button';

describe('ScrollTopButton', () => {
  it('stays out of the tab order until it is useful', async () => {
    const fixture = TestBed.createComponent(ScrollTopButton);

    await fixture.whenStable();

    const button = fixture.nativeElement.querySelector('.scroll-top') as HTMLButtonElement;

    expect(button.tabIndex).toBe(-1);
    expect(button.getAttribute('aria-hidden')).toBe('true');
  });

  it('becomes visible after scrolling past the first viewport', async () => {
    const scrollY = vi.spyOn(window, 'scrollY', 'get').mockReturnValue(0);
    const fixture = TestBed.createComponent(ScrollTopButton);

    await fixture.whenStable();

    const button = fixture.nativeElement.querySelector('.scroll-top') as HTMLButtonElement;

    expect(button.classList).not.toContain('visible');

    scrollY.mockReturnValue(900);
    window.dispatchEvent(new Event('scroll'));

    await fixture.whenStable();

    expect(button.classList).toContain('visible');
    expect(button.tabIndex).toBe(0);
    expect(button.getAttribute('aria-hidden')).toBe('false');

    scrollY.mockRestore();
  });

  it('scrolls smoothly to the page start', async () => {
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined);
    const fixture = TestBed.createComponent(ScrollTopButton);

    fixture.componentInstance['visible'].set(true);

    await fixture.whenStable();

    (fixture.nativeElement.querySelector('.scroll-top') as HTMLButtonElement).click();

    expect(scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' });

    scrollTo.mockRestore();
  });
});
