# Portfolio

Dmitriy Farion's proof-first frontend portfolio. The application uses Angular 22 standalone
components, typed static content, scoped CSS, and responsive inline SVG illustrations.

Architecture and deferred production work are documented in:

- [`docs/portfolio-architecture.md`](docs/portfolio-architecture.md)
- [`docs/portfolio-future-work.md`](docs/portfolio-future-work.md)

## Prerequisites

Use Node.js 24.18.1 (LTS). The version is pinned in `.nvmrc` and `.node-version` for compatible version managers.

```bash
nvm install 24.18.1
nvm use 24.18.1
npm install
```

## Development server

To start a local development server, run:

```bash
npm start
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
npm run build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
npm test
```

End-to-end and automated Axe coverage are intentionally deferred until the remaining routes are
implemented; see the future-work document.
