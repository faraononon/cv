import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { ContactService } from './data-access/contact.service';

type ContactField = 'name' | 'email' | 'message';

const CONTACT_VALIDATION = {
  nameMaxLength: 80,
  emailMaxLength: 160,
  messageMinLength: 10,
  messageMaxLength: 2_000,
} as const;

enum ContactStatus {
  Idle = 'idle',
  Sending = 'sending',
  Success = 'success',
  Error = 'error',
}

@Component({
  selector: 'app-contact-section',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.css',
})
export class ContactSection {
  private readonly formBuilder = inject(FormBuilder);
  private readonly contactService = inject(ContactService);

  protected readonly validationLimits = CONTACT_VALIDATION;
  protected readonly contactStatuses = ContactStatus;
  protected readonly contactStatus = signal(ContactStatus.Idle);

  protected readonly form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.maxLength(CONTACT_VALIDATION.nameMaxLength)]],
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.maxLength(CONTACT_VALIDATION.emailMaxLength),
      ],
    ],
    message: [
      '',
      [
        Validators.required,
        Validators.minLength(CONTACT_VALIDATION.messageMinLength),
        Validators.maxLength(CONTACT_VALIDATION.messageMaxLength),
      ],
    ],
    _gotcha: [''],
  });

  protected isInvalid(field: ContactField): boolean {
    const control = this.form.controls[field];

    return control.invalid && (control.touched || control.dirty);
  }

  protected submit(): void {
    if (this.form.invalid || this.contactStatus() === ContactStatus.Sending) {
      this.form.markAllAsTouched();
      return;
    }

    this.contactStatus.set(ContactStatus.Sending);

    this.contactService.send(this.form.getRawValue()).subscribe({
      next: () => {
        this.form.reset();
        this.contactStatus.set(ContactStatus.Success);
      },
      error: () => this.contactStatus.set(ContactStatus.Error),
    });
  }
}
