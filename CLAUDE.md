# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Structure

This is a playground repository containing independent projects. Each subdirectory is a self-contained project with its own dependencies and configuration.

### appflow-landing

A React + TypeScript landing page for a mobile productivity app.

**Commands:**
```bash
cd appflow-landing
npm install        # Install dependencies
npm run dev        # Start dev server (http://localhost:5173)
npm run build      # Type-check and build for production
npm run preview    # Preview production build
```

**Tech Stack:**
- React 18 + TypeScript
- Vite for bundling
- Tailwind CSS for styling

**Architecture:**
- `src/App.tsx` - Main app component, composes all sections
- `src/components/` - Page sections (Header, Hero, Features, AppPreview, CTA, Footer)
- `src/index.css` - Global styles and Tailwind imports (note: `@import` must come before `@tailwind` directives)
