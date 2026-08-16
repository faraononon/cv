import { DOCUMENT } from '@angular/common';
import { afterNextRender, Component, DestroyRef, inject, signal } from '@angular/core';

import { LocaleService } from '../../core/i18n/locale.service';

const MIN_REVEAL_DISTANCE_PX = 360;
const VIEWPORT_REVEAL_RATIO = 0.7;

@Component({
  selector: 'app-scroll-top-button',
  templateUrl: './scroll-top-button.html',
  styleUrl: './scroll-top-button.css',
})
export class ScrollTopButton {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  protected readonly i18n = inject(LocaleService);

  protected readonly visible = signal(false);

  constructor() {
    afterNextRender(() => {
      const view = this.document.defaultView;

      if (!view) {
        return;
      }

      const updateVisibility = () => {
        const scrollPosition = view.scrollY || this.document.documentElement.scrollTop;
        const revealAfter = Math.max(
          MIN_REVEAL_DISTANCE_PX,
          view.innerHeight * VIEWPORT_REVEAL_RATIO,
        );

        this.visible.set(scrollPosition > revealAfter);
      };

      updateVisibility();
      view.addEventListener('scroll', updateVisibility, { passive: true });

      this.destroyRef.onDestroy(() => view.removeEventListener('scroll', updateVisibility));
    });
  }

  protected scrollToTop(): void {
    const view = this.document.defaultView;

    if (!view) {
      return;
    }

    const reduceMotion = view.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;

    view.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }
}
