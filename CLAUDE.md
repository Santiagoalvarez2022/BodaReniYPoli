# BodaReniYPoli — Project Conventions

React + Vite + Tailwind v4 wedding invitation site.

## Section naming

Every top-level piece rendered directly in `App.jsx` is a **Section**: a component named `<Descriptivo>Section.jsx`, living in `src/components/<nombreSection>/`. The name must describe what the section *does* or communicates to the guest, not what visual asset it happens to use.

Current sections, in render order:

| Component | Folder | Purpose |
|---|---|---|
| `WelcomeEnvelopeSection` | `welcomeEnvelopeSection/` | Loading gate while data fetches, styled as the envelope opening; first thing the guest sees |
| `IntroductionSection` | `introductionSection/` | Couple photo + intro copy |
| `EventsDetailsSection` | `eventsDetailsSection/` | Civil / Sellamiento / Fiesta details |
| `GiftRegistrySection` | `giftRegistrySection/` | Bank alias / gift contribution ask |
| `ConfirmationSection` | `confirmationSection/` | Guest search + RSVP confirmation |
| `ClosingMessageSection` | `closingMessageSection/` | Closing message to guests |

Before naming a new section, name it after its purpose, then confirm with the user if it's ambiguous — don't guess on something this visible.

## Component placement

- A component used by exactly one Section lives in `<section>/components/<component>/` (e.g. `confirmationSection/components/guestConfirmationModal/`).
- A component with **no section-specific business logic**, reused by 2+ Sections, lives in `src/components/shared/<component>/` (e.g. `shared/stamp/`, used by both `WelcomeEnvelopeSection` and `ClosingMessageSection`).
- If a component has its own state/effects/decisions tied to a particular flow, it's not "shared" even if it's small — it belongs under the Section that owns that flow, or is itself a Section.
- Non-component helper modules (hooks, pure functions, constants) for a Section live flat inside that Section's folder, not under its nested `components/` — that subfolder is reserved for renderable pieces.
- Dead/legacy code lives in `src/unusedComponents/` and must never be imported from active code.

## Language convention

Code identifiers — variables, function names, hooks, constants, file names — are in **English**. Any comments (rare, see below) are also in English. Text actually rendered to the wedding guests (headings, button labels, placeholders, dates) is in **Spanish** — that's content, not code.

## Comments

Don't write comments. Code should be self-explanatory through naming; if it isn't, that's a naming problem to fix, not a comment to add.

## Styling

Tailwind is installed — use it. Style with utility classes directly in JSX; a component-level `.css` file is the exception, not the default, and only exists for things Tailwind genuinely can't express:
- a `background-image` pointing at an imported asset (the `url()` needs the real relative path)
- a multi-point `clip-path` or other gnarly shape
- `@keyframes` animations
- anything that needs to win a specificity fight against a shared component's own default styling (prefer Tailwind's `!` important-modifier on the utility class first — e.g. `!w-[100px]` — before adding a CSS override rule for this)
- **form layout**, specifically: sibling sizing relationships (e.g. an input filling the remaining space next to a fixed-width icon) and repeated styling for `.map()`-rendered rows (e.g. a search dropdown's `<li>` options) — see `confirmationSection.css`'s `.input-container`/`.input-icon-search` split and `.options-container-guests > li` for the reference pattern. This is the one case where the `.css` file wins even though Tailwind *could* technically express it inline — it keeps the structural relationship in one place instead of split across sibling `className`s. State-dependent/conditional classes (e.g. the `isOptionsOpen && ...` ternary in `ConfirmationSection.jsx`) stay inline in JSX regardless — only the static structural relationship moves to CSS.

When a value doesn't land on Tailwind's default scale, use an arbitrary-value utility (`p-[1.5em]`, `top-[8%]`) instead of a custom CSS class — that's still Tailwind, not an exception.

Don't repeat the same declaration across many sibling classes in a `.css` file, and don't reach for grouped selectors (`.a, .b, .c { ... }`) to dedupe them either. Inherited properties (`color`, `font-family`, `text-align`, …) belong on the parent element as a Tailwind class, so children inherit it for free — only the element that actually differs gets its own override class. Non-inherited properties (`background-color`, `border`, …) that repeat across a couple of elements just get the same utility class applied directly on each one; that's normal Tailwind usage, not duplication worth fighting.

## Effects

Don't reach for `useEffect` by default. Prefer derived state and plain event handlers. Only use `useEffect` for genuine side effects tied to the component's lifecycle (e.g. `WelcomeEnvelopeSection`'s load-gated animation timers) — not for things that can be computed during render or handled directly in an event handler.
