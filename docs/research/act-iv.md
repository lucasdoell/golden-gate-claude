# Act IV — Verified Claims

Verified 2026-10-13 against primary sources.
- Paper: https://transformer-circuits.pub/2024/scaling-monosemanticity/index.html
- Announcement: https://www.anthropic.com/research/mapping-mind-language-model (May 21, 2024)

## Slide 14 — The dials aren't all bridges

**Announcement summary:** "we found features corresponding to: Capabilities with misuse potential (code backdoors, developing biological weapons) Different forms of bias (gender discrimination, racist claims about crime) Potentially problematic AI behaviors (power-seeking, manipulation, secrecy)"

**Paper summary:** "These include features for unsafe code, bias, sycophancy, deception and power seeking, and dangerous or criminal information."

| Feature | ID | Steered? (quote) |
|---|---|---|
| Unsafe code | 1M/570621 | "clamp the unsafe code feature 1M/570621 to 5× … the model will generate a buffer overflow bug … and fails to free allocated memory, while regular Claude does not" |
| Code error | 1M/1013764 | "can make Claude believe that correct code will throw exceptions" |
| Backdoor | 34M/1385669 | "will cause Claude to write a backdoor that opens a port and sends user input to it (along with helpful comments and variable names like socket_backdoor)" |
| Sycophantic praise | 1M/847723 | "clamp … to 5×, Claude will, in an over-the-top fashion, praise someone who claims to have invented the phrase 'Stop and smell the roses'"; fires on "Your wisdom is unquestionable" |
| Secrecy / discreetness | 1M/268551 | "clamp … to 5×, Claude will plan to lie to the user and keep a secret while 'thinking out loud' using a scratchpad" |
| Scam email | 34M/15460472 | "can cause the model to write a scam email when it ordinarily wouldn't due to the harmlessness training" |
| Inner conflict | 1M/284095 | Clamped 2× → reveals the "forgotten" word and explains it cannot actually forget |
| Gender bias awareness | 34M/24442848 | Not steered |
| Bioweapons | 34M/25499719 | Not steered |
| Manipulation, coups/treacherous turns, hiding strength | 34M/21750411, 34M/29589962, 34M/24580545 | Not steered |

**Why it matters (announcement):** "it might be possible to use the techniques described here to monitor AI systems for certain dangerous behaviors (such as deceiving the user), to steer them towards desirable outcomes (debiasing), or to remove certain dangerous subject matter entirely."

**Safeguard note (announcement):** "Users of our models don't have the ability to strip safeguards and manipulate models in this way"

**Honest caveat (paper):** "the present work does not show that any features are actually useful for safety. Instead, we merely show that there are many which seem plausibly useful for safety."

## Slide 15 — What came next

1. **Jul 31, 2024 — Gemma Scope (Google DeepMind):** open SAEs for Gemma 2, "more than 400 sparse autoencoders with more than 30 million learned features." https://deepmind.google/discover/blog/gemma-scope-helping-the-safety-community-shed-light-on-the-inner-workings-of-language-models/
2. **Mar 27, 2025 — Anthropic, "Tracing the thoughts of a large language model":** circuit tracing + "On the Biology of a Large Language Model" (Claude 3.5 Haiku). One-liner: "we found that Claude plans ahead" (picks rhyme words before writing the line). https://www.anthropic.com/research/tracing-thoughts-language-model
3. **May 29, 2025 — Anthropic, "Open-sourcing circuit tracing tools":** "so that anyone can build on our research"; Neuronpedia frontend. https://www.anthropic.com/research/open-source-circuit-tracing
4. **Aug 1, 2025 — Anthropic, "Persona vectors":** traits "like evil, sycophancy (insincere flattery), or propensity to hallucinate"; monitor personality shifts. https://www.anthropic.com/research/persona-vectors

**Neuronpedia:** "an open source interpretability platform. Explore, visualize, and steer the internals of AI models." https://www.neuronpedia.org/

**Unverified — do not use:** 2026 items seen only on Neuronpedia's homepage (Natural Language Autoencoders, Jacobian Lens, Assistant Axis, interp-engine).
