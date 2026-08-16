import { DOCUMENT } from '@angular/common';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

import { Locale, PORTFOLIO_CONTENT } from './portfolio-content';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  private readonly document = inject(DOCUMENT);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);
  private readonly title = inject(Title);
  private readonly activeLocale = signal(this.localeFromUrl(this.router.url));
  private readonly activeFragment = signal<string | undefined>(
    this.router.parseUrl(this.router.url).fragment ?? undefined,
  );

  readonly locale = this.activeLocale.asReadonly();
  readonly fragment = this.activeFragment.asReadonly();
  readonly content = computed(() => PORTFOLIO_CONTENT[this.activeLocale()]);

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.activeLocale.set(this.localeFromUrl(event.urlAfterRedirects));
        this.activeFragment.set(
          this.router.parseUrl(event.urlAfterRedirects).fragment ?? undefined,
        );
      });

    effect(() => {
      const locale = this.activeLocale();
      const meta = PORTFOLIO_CONTENT[locale].meta;
      this.document.documentElement.lang = locale;
      this.title.setTitle(meta.title);
      this.meta.updateTag({ name: 'description', content: meta.description });
    });
  }

  private localeFromUrl(url: string): Locale {
    const segment = this.router.parseUrl(url).root.children['primary']?.segments[0]?.path;
    return segment === 'ru' ? 'ru' : 'en';
  }
}
