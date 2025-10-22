# Nurse Nest Finder

A responsive single-page React + TypeScript experience tailored for traveling nurses seeking short-term, furnished housing near their assignments. The interface leans into a friendly dating-app vibe with playful copy, match scores, and heart-driven favorites so nurses can spot their perfect stay at a glance.

## What Was Built
- **End-to-end SPA scaffold** with Vite, React 18, TypeScript, Tailwind CSS v4, and shadcn-style primitives ready for rapid iteration.
- **Contract-aware listings flow** powered by mocked API data, a memoized listings hook, and derived view models that surface all-in pricing, safety intel, and compatibility tags.
- **Interactive filter suite** (dates, hospitals, pets, parking, instant application, safety, favorites) backed by a typed Zustand store so changes instantly recompute match scores.
- **Dating-inspired UI components** including hero, filter bar, responsive grid, skeletons, and profile-style listing cards with extension requests and universal screening messaging.
- **Design system foundation** with reusable button, badge, card, toggle, and checkbox components built on Radix primitives to enforce accessibility and consistent styling.

## Architecture Overview
- `src/app/(pages)/home/page.tsx` renders the hero, filter controls, and listings grid to keep the SPA focused and portable.
- `src/app/api/listings/route.ts` mocks a backend endpoint so the front end can hydrate listings without external dependencies; swap with a real API when ready.
- `src/hooks/useListings.ts` orchestrates fetching, loading states, filter application, and match scoring while exposing derived `ListingViewModel`s ready for presentation.
- `src/stores/*` centralize global state: user profile defaults (`useUserStore`), contract filters (`useFiltersStore`), and favorites toggles (`useFavoritesStore`).
- `src/components/*` houses modular UI pieces—cards, grids, buttons, skeletons—so layouts stay declarative and easy to extend.
- `src/lib/*` packages shared utilities like match-score calculation, formatting helpers, and static hospital data.
- `src/types/*` defines the schema for listings, filters, and user profiles to maintain type safety end-to-end.

## UX & Interaction Highlights
- **Date-locked availability** ensures only listings covering the entire assignment window appear; the view model pre-filters mismatched stays.
- **Transparent pricing** shows a combined weekly total alongside line-item breakdowns for rent, utilities, cleaning, pets, parking, and extras.
- **Commute & safety context** surfaces distance, neighborhood vibes, quiet hours, and safety badges with accessible iconography.
- **Extension workflow** lets nurses request extra weeks in one tap—configurable for real messaging in production.
- **Favorites and instant applications** tie into the global stores so matches can be hearted and filtered consistently across the UI.
- **Responsive layout** delivers a single-column mobile view that gracefully scales to multi-column grids on larger breakpoints.
- **Skeleton states & focus styling** ensure perceived performance and accessibility, with Radix-based components handling keyboard navigation and ARIA attributes.

## Getting Started
```bash
npm install
npm run dev
```
The development server boots at [http://localhost:5173](http://localhost:5173). Listings are mocked, so you can explore filters, favorites, and loading states without provisioning backend services.

## Available Scripts
- `npm run dev` – start the Vite dev server.
- `npm run build` – type-check and generate a production bundle.
- `npm run preview` – preview the production build locally.
- `npm run lint` – run ESLint with accessibility and hooks rules enforced.

## Debugging & Verification Tips
- **Network throttling**: simulate slow APIs to observe skeleton states and ensure the UI communicates loading clearly.
- **State inspection**: open React DevTools and Zustand’s store inspector to validate filter and favorite mutations.
- **Accessibility checks**: run `npm run lint` or integrate axe DevTools to catch ARIA or contrast regressions early.
- **Data tweaks**: adjust `src/app/api/listings/route.ts` to validate that filters, pricing totals, and match scores respond as expected.

## Suggested Tests
- Unit test `calcMatchScore` and filter helpers with Vitest/RTL to lock in compatibility logic.
- Component test `ListingCard` and `FilterBar` interactions with React Testing Library.
- End-to-end coverage with Cypress or Playwright once real authentication and persistence are wired up.

## Next Steps
1. **Persist real data** – replace the mock API with a database-backed endpoint and wire up real user screening + favorites storage.
2. **Authentication & profiles** – add secure login, profile management, and document upload flows so background checks stay synchronized.
3. **Contract extension automation** – connect the “Request extension” CTA to messaging or booking systems and capture host responses.
4. **Analytics & alerts** – add telemetry for filter usage and allow nurses to opt into notifications when new matches meet saved criteria.
5. **Offline & caching** – introduce service workers or SWR caching to keep recent searches available in low-connectivity hospital environments.

Happy matching! 💖
