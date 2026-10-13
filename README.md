# Golden Gate Claude — the deck

A ~13-minute React slide deck about the greatest AI model ever released. Runs locally, works offline.

```sh
npm install
npm run dev      # open the printed URL, press F11 / fullscreen
npm test
```

## Presenting

| Key | Action |
|---|---|
| → · Space · PageDown · Enter · click | Next step (finishes typing first, if a transcript is mid-stream) |
| ← · PageUp · Backspace | Previous step |
| Home / End | First slide / memorial |
| N | Toggle speaker notes |

The URL hash (`#/7`) tracks the slide, so a refresh keeps your place. On the memorial, "Stop being a bridge" rolls in the fog — a clean ending. Advance again for the post-credits.

## Where things live

- `docs/deck-outline.md` — the spec; `CONTEXT.md` — vocabulary; `docs/research/` — verified sources
- `src/slides/` — slide content (transcripts are verbatim; never reword them)
- `src/deck/` — navigation, stage scaling, speaker notes
- `src/bridge/` — the progress bridge and the Bridge Intensity backdrops
- `src/transcript/` — typing, skip-to-end, punchline highlight
