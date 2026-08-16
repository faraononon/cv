import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { LocaleService } from '../../../../../core/i18n/locale.service';
import { ContactMessage } from '../models/contact-message.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly endpoint = 'https://formspree.io/f/mwleqwqq';
  private readonly http = inject(HttpClient);
  private readonly i18n = inject(LocaleService);

  send(message: ContactMessage) {
    return this.http.post<void>(
      this.endpoint,
      {
        ...message,
        subject:
          this.i18n.locale() === 'ru'
            ? `Сообщение с сайта от ${message.name}`
            : `Portfolio contact from ${message.name}`,
      },
      {
        headers: { Accept: 'application/json' },
        timeout: 10_000,
      },
    );
  }
}
