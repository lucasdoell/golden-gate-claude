// Every claim here is verified in docs/research/act-iv.md. Bias and bioweapon features were
// found but NOT steered — don't imply otherwise.
import type { SlideDef } from '../deck/types'
import { Frame, Reveal, Title } from './ui'

const DIALS = [
  { name: 'Unsafe code', id: '1M/570621', effect: 'Writes a buffer overflow bug that regular Claude doesn’t.' },
  { name: 'Backdoor', id: '34M/1385669', effect: 'Opens a port, with helpful variable names like socket_backdoor.' },
  {
    name: 'Sycophantic praise',
    id: '1M/847723',
    effect: 'Gushes over a user who claims to have invented “Stop and smell the roses.”',
  },
  { name: 'Secrecy', id: '1M/268551', effect: 'Plans, in its scratchpad, to lie to the user and keep a secret.' },
  { name: 'Scam email', id: '34M/15460472', effect: 'Writes a scam email its safety training would normally refuse.' },
]

export const dials: SlideDef = {
  id: 'dials',
  intensity: 0,
  steps: 3,
  notes:
    "Here's why this isn't just a meme. The same paper found dials for things you'd really want to know about. Turning these up did what you'd fear. They also found features for bias and bioweapons — they didn't play with those. The point: if you can see the dial, you can watch it. Anthropic is careful to say this is a research demo; users can't turn these dials, and the paper says outright it hasn't shown any of this is useful for safety yet.",
  Component: ({ step }) => (
    <Frame kicker="Act IV · The Serious Part">
      <Title size={104}>The dials aren't all bridges</Title>
      <div className="grid grid-cols-3 gap-5">
        {DIALS.map((d) => (
          <div key={d.id} className="flex flex-col gap-2 rounded-xl bg-white/45 px-7 py-5">
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-[28px] font-semibold">{d.name}</span>
              <span className="font-mono text-[18px] text-steel">{d.id}</span>
            </div>
            <span className="text-[23px] leading-snug text-steel">{d.effect}</span>
          </div>
        ))}
        <div className="flex flex-col justify-center gap-2 rounded-xl border-2 border-dashed border-deepfog px-7 py-5">
          <span className="text-[24px] font-semibold">Also found, not steered</span>
          <span className="text-[23px] leading-snug text-steel">Bias · bioweapons · manipulation · power-seeking</span>
        </div>
      </div>
      <Reveal show={step >= 1} className="border-l-4 border-orange pl-8">
        <p className="m-0 text-[30px] leading-snug">
          “…monitor AI systems for certain dangerous behaviors (such as deceiving the user), to steer them towards
          desirable outcomes (debiasing), or to remove certain dangerous subject matter entirely.”
          <span className="text-steel"> — Anthropic</span>
        </p>
      </Reveal>
      <Reveal show={step >= 2} className="-mt-3 text-[24px] text-steel">
        Fine print, from the paper: “the present work does not show that any features are actually useful for
        safety.”
      </Reveal>
    </Frame>
  ),
}

/** Bridge Intensity of each main slide, 1–16. Keep in sync with slides/index.ts. */
const DECK_INTENSITY = [3, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 0, 0, 3]

const NEXT = [
  { when: 'Jul 2024', what: 'Google DeepMind releases Gemma Scope: 400+ open sparse autoencoders, 30M+ features.' },
  { when: 'Mar 2025', what: 'Anthropic traces Claude’s thoughts and finds it plans ahead — it picks the rhyme first.' },
  { when: 'May 2025', what: 'Anthropic open-sources its circuit-tracing tools “so that anyone can build on our research.”' },
  { when: 'Aug 2025', what: 'Persona vectors: monitoring traits like sycophancy and hallucination.' },
]

export const deckProblem: SlideDef = {
  id: 'deck-problem',
  intensity: 0,
  steps: 2,
  notes:
    "Confession: you may have noticed the slides getting oranger. That was the joke — one dial turned up, leaking into everything, until the deck couldn't stop. Same trick. And the research kept going: open tools, tracing how Claude plans, monitoring personality traits. You can poke at real features yourself on Neuronpedia.",
  Component: ({ step }) => (
    <Frame kicker="Act IV · Full Disclosure">
      <Title size={104}>This deck had a problem too</Title>
      <div className="flex gap-20">
        <div className="flex w-[560px] shrink-0 flex-col gap-5">
          <div className="flex h-[220px] items-end gap-[10px] border-b-4 border-navy">
            {DECK_INTENSITY.map((v, i) => (
              <div
                key={i}
                className={i === 14 ? 'bg-navy' : 'bg-orange'}
                style={{ width: 25, height: i === 14 ? 8 : 12 + v * 66, opacity: i === 14 ? 1 : 0.35 + v * 0.22 }}
              />
            ))}
          </div>
          <div className="flex justify-between text-[18px] font-semibold tracking-[0.2em] text-steel uppercase">
            <span>Slide 1</span>
            <span>You are here ↑</span>
          </div>
          <p className="m-0 text-[30px] leading-snug">
            Bridge intensity, per slide. One dial, turned up, leaking into everything.
          </p>
        </div>
        <Reveal show={step >= 1} className="flex flex-col gap-5">
          <div className="kicker text-[20px]">What came next</div>
          {NEXT.map((n) => (
            <div key={n.when} className="flex gap-6 text-[27px] leading-snug">
              <span className="w-[130px] shrink-0 font-semibold text-accent">{n.when}</span>
              <span>{n.what}</span>
            </div>
          ))}
          <div className="flex gap-6 text-[27px] leading-snug">
            <span className="w-[130px] shrink-0 font-semibold text-accent">Try it</span>
            <span>
              <span className="font-mono">neuronpedia.org</span> — explore, visualize, and steer real model internals.
            </span>
          </div>
        </Reveal>
      </div>
    </Frame>
  ),
}
