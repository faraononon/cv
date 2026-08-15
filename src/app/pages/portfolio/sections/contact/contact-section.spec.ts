import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ContactSection } from './contact-section';

describe('ContactSection', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactSection],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();
  });

  it('renders direct contact links', () => {
    const fixture = TestBed.createComponent(ContactSection);
    fixture.detectChanges();
    const section = fixture.nativeElement as HTMLElement;

    expect(section.querySelector<HTMLAnchorElement>('a[href^="mailto:"]')?.href).toContain(
      'farion.dmitri@gmail.com',
    );
    expect(section.querySelector<HTMLAnchorElement>('a[href*="github.com"]')?.href).toContain(
      'github.com/faraononon',
    );
    expect(section.querySelector<HTMLAnchorElement>('a[href*="t.me"]')?.href).toContain(
      't.me/extencio',
    );
    expect(section.querySelectorAll('.details nav svg')).toHaveLength(3);
    expect(section.textContent).not.toContain('github.com/faraononon');
    expect(section.textContent).not.toContain('@extencio');
  });

  it('validates the form before sending', () => {
    const fixture = TestBed.createComponent(ContactSection);
    fixture.detectChanges();
    const form = fixture.nativeElement.querySelector('form') as HTMLFormElement;

    form.dispatchEvent(new Event('submit'));
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelectorAll('[aria-invalid="true"]')).toHaveLength(3);
    TestBed.inject(HttpTestingController).expectNone('https://formspree.io/f/mwleqwqq');
  });

  it('posts a valid message to Formspree and shows success', () => {
    const fixture = TestBed.createComponent(ContactSection);
    fixture.detectChanges();
    const component = fixture.componentInstance;

    component['form'].setValue({
      name: 'Alex',
      email: 'alex@example.com',
      message: 'Let us discuss an Angular platform.',
      _gotcha: '',
    });
    component['submit']();

    const request = TestBed.inject(HttpTestingController).expectOne(
      'https://formspree.io/f/mwleqwqq',
    );
    expect(request.request.body).toEqual({
      name: 'Alex',
      email: 'alex@example.com',
      message: 'Let us discuss an Angular platform.',
      _gotcha: '',
      subject: 'Portfolio contact from Alex',
    });
    expect(request.request.headers.get('Accept')).toBe('application/json');
    request.flush(null);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain("Message sent. I'll get back to you soon.");
  });
});
