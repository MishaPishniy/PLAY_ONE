# Repository Guidelines

## Project Structure & Module Organization

This TypeScript Playwright project tests external QAuto and SauceDemo sites; it contains no application server or build pipeline.

- `tests/`: executable `*.spec.ts` tests; `tests/saucedemo-auth/` covers planned authentication scenarios.
- `pages/`: page objects; `fixtures/`: reusable Playwright fixtures; `test-data/`: test inputs.
- `specs/`: Markdown test plans. `tests/seed.spec.ts` is a generation scaffold.
- `.github/agents/`: planner, generator, and healer instructions; `.github/workflows/`: CI.
- `playwright.config.ts`: shared configuration. Reports and authentication state are generated artifacts.

## Build, Test, and Development Commands

Run commands from this directory using Node.js LTS:

- `npm ci`: install dependencies from the lockfile.
- `npx playwright install`: install browsers; use `--with-deps` on Linux CI.
- `npx playwright test tests/saucedemo-auth`: run the authentication suite.
- `npx playwright test tests/saucedemo.spec.ts --headed`: inspect a single test in a visible browser.
- `npx playwright test --forbid-only`: run all discovered tests and reject focused tests.
- `npx playwright test --reporter=html`: generate an HTML report; open it with `npx playwright show-report`.

No npm scripts, build command, linter, or formatter are configured.

## Coding Style & Naming Conventions

Use two-space indentation, semicolons, typed page objects, and async/await. Preserve nearby quote style. Prefer descriptive kebab-case spec filenames, PascalCase classes, and camelCase methods. Use role-based locators or stable `data-test` attributes and web-first assertions; avoid fixed sleeps.

## Testing Guidelines

Use `@playwright/test`. Run affected specs before submission; cover successful behavior, validation, and relevant failures. No numeric coverage threshold is configured. Keep tests independent with fresh browser contexts.

For generated tests, follow `.github/agents/playwright-test-generator.agent.md`: one test per file, plan/seed references, and step comments. Treat each table row as an independent case.

Never add `test.only`. Existing occurrences in `tests/example.spec.ts` can suppress other tests; resolve them before claiming a full-suite pass.

## Configuration & Security

The default baseURL targets QAuto. SauceDemo specs must override it and the inherited HTTP credentials locally. Keep authentication tests free of saved sessions. Use `.env.example` for configuration names; never commit credentials, `.env`, or `playwright/.auth/`. `.env` is not currently ignored, so check staged files carefully.

## Commit & Pull Request Guidelines

The current branch has no commits, so no historical convention is established. Prefer imperative, scoped messages such as `test: cover SauceDemo login validation`. PRs should describe scope, reference applicable issues or plan IDs, and report commands and results. Attach traces or screenshots when they clarify failures.
