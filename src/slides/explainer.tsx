import type { SlideDef } from '../deck/types'
import { Body, Code, Frame, Reveal, Title } from './ui'

export const title: SlideDef = {
  id: 'title',
  intensity: 0,
  steps: 2,
  notes:
    'That was a real AI model, publicly available, for one day in May 2024. Tonight: how it happened, what people did with it, and why it actually matters.',
  Component: ({ step }) => (
    <div className="absolute inset-0 flex flex-col justify-center gap-10 px-[128px] pb-[160px]">
      <div className="kicker">A PowerPoint Night Retrospective</div>
      <Title size={176}>Golden Gate Claude</Title>
      <p className="m-0 font-sans text-[56px] italic leading-tight">
        The greatest AI model ever released.<span className="text-accent">*</span>
      </p>
      <Reveal show={step >= 1}>
        <p className="m-0 font-sans text-[26px] text-steel">
          <span className="text-accent">*</span> Available for 24 hours. Results may vary. Contains bridge.
        </p>
      </Reveal>
    </div>
  ),
}

export const blackBox: SlideDef = {
  id: 'black-box',
  intensity: 0,
  steps: 3,
  notes:
    "You've all opened a minified bundle in DevTools. Single-letter names, no meaning. Now imagine every variable is also reused for a dozen unrelated things depending on the line. An LLM's internals are like that, only worse: billions of numbers, no names, and each one moonlighting. (It's not literally code — it's the same reading experience.)",
  Component: ({ step }) => (
    <Frame kicker="Act I · The Black Box">
      <Title size={112}>An LLM is like a minified bundle</Title>
      <div className="mt-4 flex items-start gap-16">
        <Code size={34}>
          {`var d=b.e(c);\nif(d.f>.7)return g(d,h);\nd=k(d,c.m);`}
        </Code>
        <Reveal show={step >= 1} className="flex flex-col gap-5 pt-2 font-mono text-[30px]">
          <div>
            <span className="text-accent">d</span> = a user?
          </div>
          <div>
            <span className="text-accent">d</span> = a price?
          </div>
          <div>
            <span className="text-accent">d</span> = a feeling about Tuesdays?
          </div>
          <div className="text-steel">
            <span className="text-accent">d</span> = depends on the line.
          </div>
        </Reveal>
      </div>
      <Reveal show={step >= 2} className="mt-6 flex flex-col gap-4">
        <Body>Billions of numbers. No names. Each one reused for unrelated things.</Body>
        <p className="m-0 text-[26px] text-steel">
          Researchers call this <em>polysemanticity</em>. You may now forget that word.
        </p>
      </Reveal>
    </Frame>
  ),
}

export const sourceMap: SlideDef = {
  id: 'source-map',
  intensity: 0,
  steps: 3,
  notes:
    "May 21, 2024: Anthropic published 'Scaling Monosemanticity.' They built a tool that reads Claude 3 Sonnet's internals and recovers readable concepts — about 34 million of them. They call them features. Think of each one as a concept dial.",
  Component: ({ step }) => (
    <Frame kicker="Act I · The Source Map">
      <Title size={112}>Anthropic generated a source map</Title>
      <Body className="text-steel">
        <em>Scaling Monosemanticity</em> · May 21, 2024 · run on Claude 3 Sonnet
      </Body>
      <div className="mt-6 flex items-end gap-14">
        <Reveal show={step >= 1} className="flex items-end gap-14">
          <div className="font-display text-[200px] leading-[0.85] text-accent">~34M</div>
          <div className="flex flex-col gap-3 pb-3">
            <div className="font-mono text-[30px]">
              <span className="text-steel line-through">d</span>
              <span className="mx-4 text-steel">→</span>
              <span>golden_gate_bridge</span>
            </div>
            <Body>readable concepts, called <strong className="font-semibold">features</strong></Body>
          </div>
        </Reveal>
      </div>
      <Reveal show={step >= 2} className="mt-4 flex flex-col gap-2 text-[26px] text-steel">
        <p className="m-0">33,554,432 slots, to be exact. About 65% never fired. We don’t talk about them.</p>
        <p className="m-0">For the nerds: the source-map generator is a sparse autoencoder.</p>
      </Reveal>
    </Frame>
  ),
}

const FIRES_ON = [
  'Mentions of the bridge, in English',
  'Photos of the bridge (the features were found using text only)',
  'Its Wikipedia intro in Chinese, Japanese, Korean…',
]

export const theFeature: SlideDef = {
  id: 'the-feature',
  intensity: 0,
  steps: 3,
  notes:
    "One of those 34 million is the Golden Gate Bridge. It's not a keyword match. It lights up for pictures of the bridge, even though they found it using only text. It lights up in other languages. It's the concept, not the string.",
  Component: ({ step }) => (
    <Frame kicker="Act II · The Dial">
      <Title size={112}>One of them was the bridge</Title>
      <div className="mt-4 w-[1180px] overflow-hidden rounded-xl bg-navy font-mono text-fog">
        <div className="flex items-center gap-3 border-b border-white/10 px-10 py-5 text-[24px] text-deepfog">
          <span className="size-3 rounded-full bg-orange" />
          <span className="size-3 rounded-full bg-gold" />
          <span className="size-3 rounded-full bg-steel" />
          <span className="ml-4">Inspect › Features</span>
        </div>
        <div className="flex flex-col gap-6 px-10 py-8 text-[30px]">
          <div>
            <span className="text-deepfog">feature </span>
            <span className="text-gold">34M/31164353</span>
          </div>
          <div>
            <span className="text-deepfog">label: </span>
            <span className="text-[#E8A29C]">"Golden Gate Bridge"</span>
          </div>
          <div className="text-deepfog">fires on:</div>
          {FIRES_ON.map((text, i) => (
            <Reveal key={text} show={step >= i} className="flex items-center gap-5 pl-8">
              <span className="size-4 shrink-0 rounded-full bg-orange" />
              <span className="font-sans text-[32px]">{text}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </Frame>
  ),
}

export const important: SlideDef = {
  id: 'important',
  intensity: 0,
  steps: 3,
  notes:
    "Then they turned the dial up and taped it there — about 10 times higher than it ever goes naturally, on every single word. Not a prompt. Not training. Imagine shipping this to prod: a global !important that every element inherits. Footnote for the pedants: features are added, not cascaded. But the leaking-into-everything part is exactly right.",
  Component: ({ step }) => (
    <Frame kicker="Act II · Taping the Dial">
      <Title size={104}>What Anthropic actually did</Title>
      <div className="mt-6 flex items-center gap-20">
        <Code size={38}>
          {':root {\n  --golden-gate-bridge: '}
          <span className="text-[#F08A80]">10x !important</span>
          {';\n}'}
        </Code>
        <Reveal show={step >= 1} className="flex flex-col gap-4 text-[38px] leading-snug">
          <div>Not a system prompt.</div>
          <div>Not fine-tuning.</div>
          <div className="text-accent">A global override every word inherits.</div>
        </Reveal>
      </div>
      <Reveal show={step >= 2} className="mt-8 flex max-w-[1500px] flex-col gap-2 text-[26px] text-steel">
        <p className="m-0">
          Really: feature 34M/31164353 pinned to 10× its maximum activation, on every token. It’s added, not
          cascaded — but it leaks into everything.
        </p>
        <p className="m-0">Crank it to 100× and the model just repeats the same token forever.</p>
      </Reveal>
    </Frame>
  ),
}

function StopButton({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-4 rounded-full bg-navy px-9 py-4 font-sans text-[28px] font-semibold text-fog ${className}`}
    >
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden>
        <path d="M3 3 L17 17 M17 3 L3 17" stroke="currentColor" strokeWidth="2.5" />
      </svg>
      Stop being a bridge
    </span>
  )
}

export const limitedTime: SlideDef = {
  id: 'limited-time',
  intensity: (step) => (step >= 2 ? 1 : 0),
  steps: 3,
  notes:
    "Two days after the paper, Anthropic put it on claude.ai for 24 hours. Click the bridge logo, get Golden Gate Claude. Their own pitch: ask how to spend $10 and it recommends paying the bridge toll. It came with a disclaimer — and the best close button in software history.",
  Component: ({ step }) => (
    <Frame kicker="Act II · May 23, 2024">
      <Title size={120}>For a limited time only</Title>
      <Body>
        <span className="text-steel">@AnthropicAI:</span> “for a limited time, you can chat with Golden Gate Claude”
      </Body>
      <Reveal show={step >= 1} className="mt-4 w-[1180px]">
        <div className="flex items-start gap-6 rounded-xl border-2 border-deepfog bg-white/50 px-9 py-7">
          <svg width="36" height="36" viewBox="0 0 24 24" className="mt-1 shrink-0 text-steel" aria-hidden>
            <path d="M12 3 L22 20 H2 Z" fill="none" stroke="currentColor" strokeWidth="1.8" />
            <path d="M12 9 V14 M12 16.5 V17.5" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          <p className="m-0 font-sans text-[30px] leading-snug text-steel">
            Golden Gate Claude is an experimental model demonstrating a technique from our recent interpretability
            research. Don't expect 'reasonable' responses from this model.
          </p>
        </div>
      </Reveal>
      <Reveal show={step >= 2} className="mt-4 flex items-center gap-10">
        <StopButton />
        <span className="text-[30px] text-steel">← the actual close button. Online for 24 hours.</span>
      </Reveal>
    </Frame>
  ),
}

export { StopButton }
