# Copilot Workspace Instructions for codespaces-react

## Project Overview

**codespaces-react** is a React 18 + Vite + Tailwind CSS web application for managing a Knowledge Base. It's built with modern ESM modules and features a responsive UI with a sidebar layout.

**Tech Stack**:
- **Build**: Vite 6.3.6 (dev server, production bundling)
- **Runtime**: React 18.2.0 + React DOM 18.2.0 (ES modules)
- **Styling**: Tailwind CSS 4.2.2 (utility-first, no CSS files)
- **Testing**: Vitest 3.0.7 + React Testing Library 13.4.0
- **Node**: ES modules (`"type": "module"` in package.json)

## Essential Commands

When working in this project, use these commands:

```bash
npm start              # Dev server on http://localhost:3000 (headless, port 3000)
npm test              # Run Vitest in watch mode (vitest)
npm run build         # Production optimized build
npm run preview       # Preview production build locally
```

**Note**: The dev server is typically already running in the "Codespaces: server" terminal.

## Project Architecture

### Directory Structure

```
src/
├── index.jsx          # App entry point (renders to #root)
├── App.jsx            # Main component (state hub, modal management, KB grid)
├── index.css          # Global styles (Tailwind imports + CSS variables)
├── App.css            # (empty, available for custom styles)
├── components/
│   ├── Layout/
│   │   ├── Header.jsx  # Top navbar with logo, search, notifications
│   │   └── Sidebar.jsx # Left navigation menu
│   ├── UI/             # Reusable presentational components
│   │   ├── Button.jsx          # Variant-based button (primary, secondary, etc)
│   │   ├── KBCard.jsx          # KB card display (title, description, date)
│   │   └── CreateModal.jsx     # Slide-in panel for KB creation (right side)
│   └── KnowledgeBase/
│       └── CreateKBForm.jsx    # (placeholder, not yet implemented)
```

### Key Components

| Component | Purpose | Location |
|-----------|---------|----------|
| **App** | State hub (`isModalOpen`), renders Layout + KB grid | `App.jsx` |
| **Header** | Top navbar, branding, search, notifications | `components/Layout/Header.jsx` |
| **Sidebar** | Navigation menu (Projects, Orchestrator, Admin) | `components/Layout/Sidebar.jsx` |
| **Button** | Reusable button with variants (primary, secondary) | `components/UI/Button.jsx` |
| **KBCard** | Card displaying KB item (title, desc, metadata) | `components/UI/KBCard.jsx` |
| **CreateModal** | Slide-in create panel (right side, dismissible) | `components/UI/CreateModal.jsx` |

## Development Patterns & Conventions

### Component Structure

- **All functional components** (no class components)
- **Props-based configuration**: `variant`, `className`, callbacks
- **Destructuring**: Props destructured in function signature
- **Defaults**: Optional props have defaults (e.g., `variant = 'primary'`)

**Example**:
```javascript
const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  // variant maps to predefined Tailwind classes
  // className allows caller customization
}
```

### Styling Approach

**Tailwind CSS exclusive** — no separate CSS files:
- ✅ All styles via inline Tailwind utility classes
- ✅ Mobile-first responsive: `md:` and `lg:` prefixes
- ✅ Custom colors defined as CSS variables in `index.css` (referenced inline)

**Design Tokens** (from `index.css`):
- **Primary**: `#4F46E5` (indigo) — buttons, active states
- **Secondary**: `#1E1B4B` (dark purple) — headers, text
- **Background**: `#F9FAFB` (light gray)

**Common Patterns**:
- Flexbox layout: `flex`, `flex-col`, `flex-1`
- Grid for cards: `lg:grid-cols-3` for responsive lists
- Container centering: `max-w-[1280px] mx-auto`
- Spacing: Tailwind units (e.g., `gap-4`, `p-6`, `my-8`)

### State Management

- **Local `useState`** for UI state (e.g., modal open/close)
- **No external state** (Context API, Redux, Zustand not set up yet)
- **Unidirectional data flow**: App → Layout/components
- **Parent callbacks**: Handle state changes via prop functions

**Example**:
```javascript
const [isModalOpen, setIsModalOpen] = useState(false);
<Button onClick={() => setIsModalOpen(true)}>Create</Button>
<CreateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
```

### Naming Conventions

- **Components**: PascalCase (`App.jsx`, `Header.jsx`, `KBCard.jsx`)
- **Utilities/hooks**: lowercase (`helpers.js`, `useCustomHook.js`)
- **Semantic names**: Self-descriptive (`Header`, `Sidebar`, `CreateModal`)
- **Props for callbacks**: `onSomething` (e.g., `onClose`, `onCreateClick`)

## Testing

### Running Tests

```bash
npm test              # Launch Vitest in watch mode
```

### Testing Libraries

- **Vitest**: Vite-native test runner (configured in `vite.config.js`)
- **React Testing Library**: Component testing utilities
- **jest-dom**: Custom matchers (`toBeInTheDocument()`, etc)
- **jsdom**: DOM environment for tests

### Test Files

- **Location**: Colocated with components (e.g., `App.test.jsx`)
- **Setup**: `setupTests.js` imports `@testing-library/jest-dom`
- **Pattern**: Use `render()`, `screen`, user-event for interactions

**Example** (from `App.test.jsx`):
```javascript
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders KB list', () => {
  render(<App />);
  expect(screen.getByText(/Knowledge Base/i)).toBeDefined();
});
```

### Known Testing Issues

⚠️ **Gotcha**: Current `App.test.jsx` looks for "learn react" text (doesn't exist in App). Update tests when modifying App components.

## Development Workflow

### Typical Task: Add a Component

1. **Create file** in appropriate directory (`components/UI/`, `components/Layout/`, etc)
2. **Use functional component** with destructured props
3. **Style with Tailwind classes** (no CSS files)
4. **Pass `className` prop** for caller customization
5. **Write tests** colocated with component (`.test.jsx`)
6. **Run tests**: `npm test` to verify

### Typical Task: Modify Styling

1. **Edit inline Tailwind classes** in `.jsx` files
2. **Add custom colors** to `index.css` if needed (as CSS variables)
3. **Use responsive prefixes** for mobile-first design
4. **Test on mobile**: Use browser DevTools responsive mode

### Typical Task: Update State/Props

1. **Add `useState`** in parent component (usually `App.jsx` for global state)
2. **Pass down as props** to child components
3. **Pass callbacks** for state updates (e.g., `onClose`, `onCreate`)
4. **Test props flow**: Check that children receive and use props correctly

## Important Conventions & Gotchas

### 🟢 Best Practices

- ✅ Keep styling in **Tailwind classes only** (no separate CSS files)
- ✅ Pass `onClick`/callbacks through **props for composability**
- ✅ Use **`className` prop extension** pattern: `<div className={`base-classes ${className}`}>`
- ✅ Follow **mobile-first responsive**: write mobile styles first, then `md:`/`lg:` overrides
- ✅ Keep components **small and focused** (separate into Layout/UI/Feature folders)
- ✅ Use **semantic component names** (e.g., `CreateModal` not `Modal1`)

### 🔴 Known Issues / Gotchas

1. **Modal focus management**: CreateModal doesn't trap focus or restore focus on close
   - **Impact**: Accessibility issue, keyboard users can tab outside modal
   - **When fixing**: Add `autoFocus` to first input, implement focus trap logic

2. **Search not wired**: Search input in Header exists but doesn't filter KB list
   - **Impact**: Typing in search does nothing
   - **When fixing**: Pass search state through App → Header, filter KBCard display

3. **CreateKBForm empty**: Component exists but has no implementation
   - **Impact**: Modal can't actually create KB items yet
   - **When fixing**: Build form fields, add submit handler

4. **Hard-coded data**: App.jsx has static KB items (no backend/database)
   - **Impact**: No persistence across page reloads
   - **When fixing**: Add API calls or localStorage

5. **Tailwind colors not in config**: Color values are inline strings, not centralized
   - **Impact**: Inconsistency if colors change
   - **Consider**: Add custom colors to `tailwind.config.js` for reusability

6. **ESLint config mismatched**: `eslintConfig` references `react-app` preset for CRA, not compatible with Vite
   - **Impact**: No active linting (okay for now, watch for warnings)
   - **When fixing**: Switch to Vite-compatible ESLint config (e.g., `eslint-plugin-react`, `eslint-plugin-react-hooks`)

7. **Test doesn't match app**: App.test.jsx will fail with current App.jsx content
   - **Impact**: CI would fail if tests run
   - **When fixing**: Update test matchers to match actual rendered content

### 🟡 Patterns to Maintain

- **Component composition** over feature duplication
- **Props for customization** (avoid CSS-in-JS libraries or inline styles)
- **Unidirectional data flow** from App through components
- **Responsive-first design** using Tailwind breakpoints
- **Functional components with hooks** (no class components)

## File Modification Tips

### When Editing Components

- **Keep Tailwind classes inline** in JSX (don't extract to CSS)
- **Pass `className` prop** to children for customization
- **Add prop comments** for complex prop interfaces

### When Adding State

- **Add `useState` at App level** for shared state between multiple components
- **Use local `useState`** for component-specific UI state (e.g., input focus)
- **Pass callbacks down** (e.g., `onClose`, `onSubmit`)

### When Styling Responsive

- **Mobile-first**: Write unprefixed classes for mobile, then `md:` for tablets, `lg:` for desktop
- **Test breakpoints**: Use React DevTools or browser responsive mode at 768px (md) and 1024px (lg)

## Quick Reference

| Aspect | Details |
|--------|---------|
| **Tech** | React 18 + Vite + Tailwind 4 + Vitest |
| **Build** | `npm start` (dev), `npm run build` (prod), `npm test` (test) |
| **Styling** | Tailwind only (no CSS files), responsive with `md:` / `lg:` |
| **Components** | Functional, props-based, small and focused |
| **State** | `useState` in App for shared, local for component state |
| **Testing** | Vitest + React Testing Library, collocated `.test.jsx` files |
| **Structure** | Layout (Header/Sidebar) → UI (Button/Card/Modal) → Features (KnowledgeBase) |

---

**Last Updated**: 2025-04-06  
**Created for**: Productive AI-assisted development in this React + Vite codebase
