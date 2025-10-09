# Repository Guidelines

## Project Structure & Module Organization

The Vite workspace lives at the repository root. Application code sits in `src/`, grouped by responsibility: `pages/` holds routed screens (`HomePage..jsx`, `QuizPage.jsx`, `ResultPage.jsx`), `components/` contains reusable UI atoms with colocated CSS modules (for example `components/Button/Button.jsx` with `Button.module.css`), and `data/quiz.js` stores quiz definitions consumed by the quiz flow. Global styles live in `App.css` and `index.css`, and routing constants are centralized in `const.js`. Static assets (currently only `react.svg`) live in `src/assets/`. Build artifacts are emitted to `dist/` by Vite; keep this directory out of version control.

## Build, Test, and Development Commands

Run `npm install` once to bootstrap dependencies. Use `npm run dev` for a live reload dev server, `npm run build` for production bundles, and `npm run preview` to locally smoke-test the built output. `npm run lint` executes ESLint with the shared config, and `npm run deploy` publishes `dist/` to GitHub Pages (it implicitly runs `npm run predeploy`).

## Coding Style & Naming Conventions

Follow the ESLint rules defined in `eslint.config.js` (ES2020 modules, React 19 runtime, hooks checks). Prefer functional components, PascalCase for component filenames, and `Component.module.css` for scoped styles. Keep routing keys in `const.js` uppercase. Enforce two-space indentation and trailing semicolons omitted, matching existing files. Import paths should be relative to `src/` without deep nesting aliases. Run `npm run lint` before committing, and address any `no-undef` or `no-unused-vars` errors promptly.

## Testing Guidelines

There is no automated test suite yet; rely on `npm run lint` plus high-value manual verification. Exercise the full quiz flow (start, question navigation, results confetti) in both dev (`npm run dev`) and built (`npm run preview`) modes, and confirm data updates made in `src/data/quiz.js` render correctly. Record any new regression checks in pull request notes until a test harness is introduced.

## Commit & Pull Request Guidelines

Recent history mixes imperative (`Update vite.config.js`) and conventional (`fix: correct syntax for exporting Vite configuration`) messages; standardize on `type: short imperative summary`, e.g., `feat: add timed quiz mode`. Reference relevant issues in the body, describe UI or data changes, and attach before/after screenshots for visual tweaks. PRs should call out manual test notes (commands run, browsers checked) and mention any deployment impact, especially when touching `const.js` routing or GitHub Pages configuration.
