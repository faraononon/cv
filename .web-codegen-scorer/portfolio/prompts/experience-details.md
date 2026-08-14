# Accessible experience details

{{> contextFiles 'src/**/*.ts, src/**/*.html, src/**/*.css, package.json, docs/portfolio-architecture.md' }}

Enhance the existing proof-first portfolio home page with accessible expandable details for each
experience card.

Each card must expose a clearly named control that expands a concise details panel containing two
specific responsibilities and two outcomes for that company. Only one card may be expanded at a
time. Manage the interaction with Angular signals and keep the typed experience content outside
the templates.

Preserve the existing graphite, off-white, and lime visual direction, simple divider system,
semantic list and article structure, and responsive desktop/mobile composition. The interaction
must be fully keyboard accessible, communicate its expanded state to assistive technology, and
respect reduced-motion preferences.

Add or update focused unit tests for the new behavior. Do not add dependencies, change package
versions, introduce services for static content, or rewrite unrelated application structure.
