# React Quiz App - Copilot Instructions

## Architecture Overview

This is a React quiz application built with Vite, featuring a simple 3-page flow: Home → Quiz → Results. The app uses React Router for navigation and CSS Modules for styling. Quiz data is centralized in `src/data/quiz.js` as a static array.

## Development Workflow

### Commands (Windows PowerShell Issues)

- **Development**: Use `cmd /c "npm run dev"` instead of `npm run dev` to avoid PowerShell execution policy issues
- **Build**: `npm run build` → `npm run preview` for testing production builds
- **Deploy**: `npm run deploy` (auto-builds and pushes to GitHub Pages)
- **Lint**: `npm run lint` before commits

### URL Structure

- Local dev: `http://localhost:5173/react-quiz/` (note the `/react-quiz/` base path)
- Router uses `basename="/react-quiz"` to match Vite's `base: "/react-quiz/"` config
- Routes: `/quiz` (home), `/` (quiz), `/result` (results) - relative to basename

## Key Patterns

### File Organization

```
src/
├── pages/           # Route components (HomePage..jsx, QuizPage.jsx, ResultPage.jsx)
├── components/      # Reusable UI with colocated CSS modules
├── data/quiz.js     # Quiz content as exportable array
└── const.js         # Routing constants (ROUTES object)
```

### Component Conventions

- Functional components only (React 19)
- PascalCase filenames with `.jsx` extension
- CSS Modules: `Component.module.css` alongside `Component.jsx`
- Import routing from `const.js`: `import { ROUTES } from "../const"`

### Quiz Data Structure

```javascript
{
  question: "Question text",
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  answerIndex: 0  // Index of correct option
}
```

### State Management

- No external state library - uses React hooks and local state
- Quiz progress managed in `QuizPage.jsx`
- Results calculated and passed via navigation state

## Critical Dependencies

- `react-router-dom ^7.8.2`: Navigation between quiz steps
- `react-confetti ^6.4.0`: Results page celebration effect
- `gh-pages ^6.3.0`: Automated GitHub Pages deployment

## Deployment Notes

- GitHub Pages deployment configured with base path `/react-quiz/`
- Router basename must match Vite base config for proper routing
- Static quiz data means no backend/API dependencies

## Testing Strategy

Manual testing only - exercise full flow in both `npm run dev` and `npm run preview` modes. Verify quiz data changes render correctly after editing `src/data/quiz.js`.
