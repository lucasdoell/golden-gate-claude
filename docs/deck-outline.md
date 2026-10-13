# Deck Outline

Target: ~13 min main deck, hard cap 15. Bracketed number = Bridge Intensity (see CONTEXT.md). Transcript sources in `docs/research/transcripts.md`.

| # | Act | Slide | Content | Status |
|---|---|---|---|---|
| 1 | Cold open [3] | "How does it feel?" | Transcript #2: "It's hard to put into words how amazing it feels to be the Golden Gate Bridge…" — no context | |
| 2 | — [0] | Title | Golden Gate Claude — *The greatest AI model ever released.* | |
| 3 | I [0] | The black box | Minified bundle; variables reused for unrelated things (polysemanticity) | |
| 4 | I [0] | Source maps | Scaling Monosemanticity (May 21, 2024): ~34M features from Claude 3 Sonnet | |
| 5 | II [0] | Feature 34M/31164353 | Fires on bridge photos + Chinese/Japanese/Korean text | |
| 6 | II [0] | `!important` | `:root { --golden-gate-bridge: 10x !important; }` | Mocked |
| 7 | II [0→1] | "For a limited time" | 24h launch, "Don't expect 'reasonable' responses", "Stop being a bridge" button | |
| 8 | III [1] | Python OOP | Transcript #8 | |
| 9 | III [1] | Paris | Transcript #15 | Mocked |
| 10 | III [1→2] | Breakup advice | Transcript #12 | |
| 11 | III [2] | Spaghetti | Transcript #9 | |
| 12 | III [2] | 1000 kittens | Transcript #4 | Mocked |
| 13 | III [2] | "Feature clamped?" | Transcript #3 — pivot to serious | |
| 14 | IV [0] | The dials aren't all bridges | Safety-relevant features; monitoring + steering (see docs/research/act-iv.md) | Verified |
| 15 | IV [0] | "This deck had a problem too" | Call out escalation gag; what came next (see docs/research/act-iv.md) | Verified |
| 16 | Closer [3] | Memorial | Illustrated (no photo); "I am the Golden Gate Bridge."; "Survived by ~34 million other features"; "Stop being a bridge" button | Mocked |

## Post-credits (after memorial, only if time allows)

Clicking "Stop being a bridge" rolls fog over the memorial — the deck looks finished. A small card then fades in: *"Post-credits: transcripts that were too powerful for the main deck."* Advancing continues into the bonus transcripts at intensity 3; stopping at the fog is a clean ending.

Toilet flange (#11), Bob's mom (#17), planets (#16), math proof (#18). (20 Questions dropped: only part of the exchange is verifiable.)

## Presentation mechanics

- Stack: Vite + React + TypeScript + Tailwind + Motion. Runs locally; no deployment.
- → / Space / clicker advances one **step**; a slide advances only after all its steps. ← steps back. URL hash tracks slide (`#/7`) so refresh keeps place.
- Transcript slides: prompt visible on enter → click streams response (~60 chars/sec; another click skips to end) → click lands punchline (orange highlight sweep or Limelight quote fade-in).
- `prefers-reduced-motion`: typing and fog become instant fades.
- Speaker notes stored per slide in data; no presenter window.
- Defaults (not discussed, easy to change): fonts self-hosted via `@fontsource` so the deck works offline at the venue; fixed 1920×1080 stage scaled to fit the screen with letterboxing.

## Design (from Paper mockups — file "Golden Gate Claude — Deck")

- 1920×1080 slides. Palette: fog `#E7E5E0`, navy `#14243A`, International Orange `#C0362C`, steel `#6E7A88`, gold `#C9A24A`, deep fog `#C9CDD2`.
- Type: Limelight (display), Josefin Sans (labels/body), JetBrains Mono (prompts/code).
- Bridge progress bar v2 (stepped towers, suspenders, deck truss, 1930s car) on every slide; shortened when a tower occupies the right side.
- Memorial is fully illustrated — no photo.
