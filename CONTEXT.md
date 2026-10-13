# Golden Gate Claude Deck

A short (<15 min), humorous-but-educational React slide deck about Golden Gate Claude, presented at a PowerPoint night.

## Audience

NJ DCA teammates: web developers who follow AI news but are not ML practitioners. They know what an LLM is and what a prompt is, but not what a neuron, activation, or sparse autoencoder is. Explain using software/web analogies where possible; skip the math.

## Teaching analogies

- **Finding features = un-minifying a bundle.** Model internals are a minified bundle whose variables are reused for unrelated things (polysemanticity); the sparse autoencoder is a source-map generator that recovers ~34M readable names.
- **Clamping = `:root { --golden-gate-bridge: 10x !important; }`.** A global override every token "inherits." Footnote: features are added to activations, not cascaded — the analogy is about leaking into everything.

## Language

**Golden Gate Claude**:
The Claude 3 Sonnet variant Anthropic released publicly for ~24 hours on 2024-05-23, with the Golden Gate Bridge feature clamped high.
_Avoid_: "GGC" on slides (fine in code)

**Feature**:
A direction inside the model's internals that corresponds to a human-understandable concept (e.g. "Golden Gate Bridge"). Presented to the audience as a "concept dial."
_Avoid_: neuron (features are not single neurons — that's the point of the research)

**Clamping**:
Forcing a feature's activation to a fixed value (here, ~10x its normal max) on every token, regardless of input. Presented as "taping the dial to 11."
_Avoid_: fine-tuning, prompting (Golden Gate Claude was neither)

**Sparse Autoencoder**:
The tool Anthropic used to extract features from Claude 3 Sonnet. Named once on a slide ("for the nerds"); otherwise referred to via the source-map analogy.

**Bridge Intensity**:
How much the deck itself has been "taken over" by the bridge on a given slide, 0–3. The deck mirrors Golden Gate Claude: the cold open is fully consumed (3), the explainer resets to normal (0), the transcript act escalates (1→2), Act IV snaps back to sober (0) for the serious point, and the closer is fully consumed again (3). Act IV calls the gag out explicitly.
_Avoid_: theme, mode (intensity is a narrative device, not a user setting)

**Post-credits**:
Optional bonus Transcripts shown after the memorial's fog-out, only if time allows. The main deck must stand alone without them.
_Avoid_: appendix, extras

**Transcript**:
A real, publicly shared exchange with Golden Gate Claude (user prompt + model response), re-typed into the deck's own chat UI and credited to its original poster/source. Transcripts may be trimmed (marked with "…") but never invented or reworded.
_Avoid_: example, screenshot (a screenshot is a source artifact, not what's shown on the slide)
