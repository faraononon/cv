import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { ContactMessage } from '../models/contact-message.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly endpoint = 'https://formspree.io/f/mwleqwqq';
  private readonly http = inject(HttpClient);

  send(message: ContactMessage) {
    return this.http.post<void>(
      this.endpoint,
      {
        ...message,
        subject: `Portfolio contact from ${message.name}`,
      },
      {
        headers: { Accept: 'application/json' },
        timeout: 10_000,
      },
    );
  }
}
