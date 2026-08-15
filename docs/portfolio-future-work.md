# Portfolio future work

Status: planned, updated 2026-08-15.

The current CSR portfolio is the working baseline. Future work should preserve its semantic HTML,
accessibility, section ownership, static fallbacks, and small dependency surface.

## Light and dark themes

### Goal

Support a polished light theme and the existing dark theme while respecting the visitor's system
preference and allowing an explicit choice.

### Planned approach

- convert the current dark palette into semantic theme tokens rather than component-specific
  colors;
- add a light token set with WCAG AA contrast for text, controls, focus rings, and accent states;
- use `prefers-color-scheme` when the visitor has not made a choice;
- add an accessible theme control with `system`, `light`, and `dark` options;
- persist an explicit preference locally without making components read browser storage directly;
- expose the resolved theme on the root element through a stable attribute such as `data-theme`;
- update `color-scheme` so native controls match the active theme;
- prevent a flash of the wrong theme during initial load and future hydration;
- verify project images, the Angular mark, selection colors, and reduced-motion states in both
  themes.

### Acceptance criteria

- system preference is used by default;
- an explicit choice survives reloads;
- there is no visible incorrect-theme flash on initial navigation;
- every component remains readable and meets WCAG AA in both themes;
- theme switching does not recreate the routed page or reset the contact form.

## English and Russian localization

### Goal

Offer complete English and Russian versions of the portfolio, including content, navigation,
validation feedback, metadata, and the downloadable CV strategy.

### Decision gate

Choose the localization model before implementation:

- Angular compile-time localization with locale-specific builds and URLs; or
- runtime localization if instant in-place language switching is a hard requirement.

The decision should favor SEO, maintainability, bundle size, and hosting constraints over the
visual behavior of the language button alone.

### Planned approach

- define the canonical URL strategy, for example `/en/` and `/ru/`, including the default locale;
- extract template copy, accessible labels, form messages, route titles, and metadata;
- reorganize experience and skill content into typed locale-owned sources without duplicating
  presentation components;
- add a language control that preserves the equivalent route and fragment;
- set the document `lang` attribute correctly for every rendered locale;
- add canonical and `hreflang` metadata;
- decide whether each locale downloads a localized CV or a single English CV;
- test long Russian text at all responsive breakpoints.

### Acceptance criteria

- no user-facing English text remains in the Russian version and vice versa;
- direct navigation and refresh work for both locale URLs;
- headings, labels, alternative text, validation, status messages, and metadata are localized;
- the selected language survives navigation;
- both locales build and pass the same functional and accessibility checks.

## SSR and hybrid rendering experiment

### Goal

Add Angular server rendering as a deliberate learning and performance experiment, then choose the
appropriate production rendering mode per route.

The portfolio is mostly static, so prerendering may remain the best production mode for public
content. SSR is still useful to evaluate server infrastructure, hydration, locale routing, and
future dynamic content. The outcome should be evidence-based rather than assuming every route
needs request-time rendering.

### Planned approach

- add the Angular-version-compatible `@angular/ssr` integration through the Angular CLI;
- establish server and browser entry points without changing component ownership;
- enable hydration and verify that it produces no DOM mismatch warnings;
- classify routes as CSR, prerendered, or request-time SSR based on actual requirements;
- decide the locale URL strategy before finalizing server routes;
- audit direct browser API usage and keep it behind render-safe boundaries;
- make theme initialization deterministic on the server and client;
- render route- and locale-specific title, description, canonical, Open Graph, and `hreflang`
  metadata;
- verify that contact submission remains a client-side interaction after hydration;
- measure initial HTML, LCP, CLS, JavaScript cost, and hosting complexity against the CSR baseline;
- document the deployment target and whether it supports a Node server or only static assets.

### Acceptance criteria

- important portfolio content and links are present in the initial HTML;
- direct navigation works for every supported locale and route;
- hydration has no console warnings or duplicated side effects;
- scroll-to-top and future theme persistence do not access browser-only APIs on the server;
- metadata is correct per route and locale;
- the chosen rendering mode has a documented performance and operational reason;
- both server and browser production builds pass.

## Three.js Angular mark

### Goal

Replace the internal implementation of the static Angular mark with a distinctive lime-and-black
3D identity without delaying first content or reducing accessibility.

### Planned approach

- finalize geometry, material, lighting, theme variants, and motion direction before adding a
  runtime dependency;
- keep `AngularMark` as the public component boundary;
- dynamically load `three` and the scene only after the hero's static content is available;
- keep the current static mark as loading, error, reduced-motion, low-power, and unsupported-WebGL
  fallback;
- treat the canvas as decorative and remove it from keyboard and accessibility navigation;
- run the render loop outside Angular change detection;
- resize with `ResizeObserver` and cap device pixel ratio;
- pause rendering when the document is hidden or the mark is outside the viewport;
- adapt colors and lighting to both themes without duplicating the scene;
- isolate all DOM and WebGL setup from server rendering;
- dispose animation frames, observers, geometry, materials, and renderer resources on destroy.

### Acceptance criteria

- first content and hydration do not wait for Three.js;
- the static fallback is always available and visually stable;
- reduced-motion users do not receive continuous animation;
- the canvas introduces no keyboard stop or misleading accessible content;
- the scene remains smooth at target desktop sizes and degrades safely on mobile;
- switching themes updates the mark without leaking resources;
- leaving the route releases every animation and WebGL resource;
- bundle and performance changes are measured and accepted explicitly.

## Playwright and Axe

### Goal

Add browser-level regression coverage once themes, locale routing, and rendering behavior are
stable enough to test through public user flows.

### Planned approach

- add Playwright and Axe infrastructure;
- cover navigation, language and theme selection, CV download, contact validation, successful
  submission mocking, and keyboard interaction;
- run representative desktop, tablet, and mobile viewports;
- test both themes and both locales without creating an excessive snapshot matrix;
- add focused visual baselines after the 3D fallback and layout stabilize;
- run the suite in CI when deployment automation is introduced.

### Acceptance criteria

- critical flows pass in Chromium;
- automated Axe checks report no serious or critical violations;
- keyboard focus follows document order in every theme and locale;
- server-rendered pages hydrate successfully in browser tests;
- responsive smoke tests pass at agreed viewports;
- visual snapshots change only through intentional review.

## Recommended delivery order

1. Stabilize the current CSR baseline and measure it.
2. Refactor color tokens and deliver light/dark/system themes.
3. Decide the localization strategy and deliver English/Russian URLs and content.
4. Run the SSR/hybrid-rendering experiment with themes and locales included from the start.
5. Add Playwright and Axe coverage for the stable public behavior.
6. Integrate the Three.js Angular mark behind its existing static fallback.

Theme and locale decisions precede SSR because they affect initial HTML, persistence, routing, and
hydration. SSR precedes Three.js so the browser-only rendering boundary is established before a
WebGL dependency is introduced.
