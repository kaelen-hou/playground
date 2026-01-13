# Agent Guidelines - AppFlow Landing Page

This document provides guidance for agentic coding agents working in this repository.

## Build & Development Commands

```bash
# Start development server (http://localhost:5173)
npm run dev

# Type-check and build for production
npm run build

# Preview production build locally
npm run preview
```

**Note:** This project does NOT have tests configured. Add testing framework (Vitest/Jest) before implementing tests.

## Project Structure

```
src/
├── main.tsx           # React entry point
├── App.tsx            # Root component (composes all sections)
├── index.css          # Global styles + Tailwind imports (@import must precede @tailwind)
└── components/
    ├── Header.tsx     # Fixed navigation with glassmorphism
    ├── Hero.tsx       # Hero section with main CTA
    ├── Features.tsx   # Feature cards grid (6 items)
    ├── AppPreview.tsx # Phone mockups showing app interface
    ├── CTA.tsx        # Download CTA section
    └── Footer.tsx     # Footer with links and social icons
```

## Code Style Guidelines

### TypeScript Configuration
- **Strict mode enabled**: All type checking active
- **No unused locals/parameters**: Clean code required
- **ES2020 target**: Modern JS features available
- **JSX transform**: `react-jsx` (no React import needed)

### Import Organization
- **Named imports preferred**: `import { Header } from './components/Header'`
- **Group React imports first** (if needed)
- **Component imports**: Use relative paths from `src/`
- **Third-party imports**: Before local imports

### Component Conventions

**Naming:**
- Component files: PascalCase (`Header.tsx`, `Hero.tsx`)
- Component exports: Named function exports preferred (`export function ComponentName()`)
- Default export: Allowed for root components

**Structure:**
```typescript
// Preferred pattern
export function ComponentName() {
  return (
    <section className="[tailwind-classes]">
      {/* JSX content */}
    </section>
  )
}

// Alternative for root components
function App() {
  return <div>{/* content */}</div>
}
export default App
```

**Props:**
- Always type props (even if empty): `interface ComponentProps { ... }`
- Use TypeScript interfaces for component props
- Destructure props in function signature

### Tailwind CSS Guidelines

**Color Scheme:**
- Primary: Blue to indigo gradient (`from-blue-500 to-indigo-600`)
- Backgrounds: White, gray-50, gray-100
- Text: gray-900 (headings), gray-600 (body)

**Layout Patterns:**
- Containers: `max-w-6xl mx-auto px-6`
- Sections: `py-20` vertical padding
- Grid: `md:grid-cols-2 lg:grid-cols-3` responsive
- Flex: `items-center justify-between` common

**Spacing:** Use consistent values: 4, 6, 8, 16, 20, 24

**Borders:** `border-gray-100` (subtle), `border-gray-200` (hover)
**Shadows:** `hover:shadow-lg` for interactive cards
**Rounded:** `rounded-full` (buttons), `rounded-xl/2xl` (cards)

**Responsive:** Mobile-first design with `md:` and `lg:` breakpoints

### Icon Usage
- Inline SVG components (Heroicons-style paths)
- Consistent sizing: `w-5 h-5` (small), `w-6 h-6` (medium)
- Colors: `text-blue-600` (primary), `text-gray-900` (dark)

### Error Handling
- Try/catch for async operations
- Error boundaries for React components (add if needed)
- Graceful degradation for failed fetches

### Semantic HTML
- Use semantic elements: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`
- Proper heading hierarchy: `<h1>` → `<h2>` → `<h3>`
- Accessible link text (avoid "click here")

### Styling Constraints
- **NO custom CSS in component files**: Use Tailwind utilities only
- Global styles go in `index.css`
- Inline SVGs only for icons (no image files currently)

## Adding New Features

**New sections:**
1. Create component in `src/components/ComponentName.tsx`
2. Export named function: `export function ComponentName() {}`
3. Import in `App.tsx` and place in appropriate location
4. Use Tailwind classes matching existing patterns

**Adding dependencies:**
- Prefer React ecosystem libraries
- Check Tailwind compatibility (v4)
- Add type definitions: `npm install --save-dev @types/package-name`

## When Adding Tests

This project currently has NO test framework. Recommended setup:
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

Then configure `vite.config.ts` with `test: {}` section.

## Important Notes

- **No client-side state management needed** (static content)
- **No routing** (single-page with anchor links)
- **TypeScript strict errors must be resolved** before building
- **Chinese language**: All user-facing text is in Simplified Chinese (zh-CN)
- **Performance**: Minimal dependencies, optimize bundle size

## Verification

Before marking work complete:
1. Run `npm run build` - must pass without errors
2. Check TypeScript compilation (part of build)
3. Verify responsive behavior (mobile, tablet, desktop)
4. Test in dev server: `npm run dev`
5. Ensure all links and buttons function
