import { AnimatePresence, motion } from 'motion/react'
import { useDeck } from '../deck/context'
import type { SlideDef } from '../deck/types'

function Rule() {
  return <span className="h-[2px] w-[120px] bg-fog/70" />
}

/** 0 = memorial, 1 = fog rolls in (the deck looks finished), 2 = post-credits card. */
function Memorial({ step }: { step: number }) {
  const { advance } = useDeck()
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-x-0 top-[120px] flex flex-col items-center gap-7 text-center">
        <div className="kicker flex items-center gap-8">
          <Rule />
          In loving memory
          <Rule />
        </div>
        <h1 className="m-0 font-display text-[156px] font-normal leading-none">Golden Gate Claude</h1>
        <div className="kicker tracking-[0.32em]">May 23, 2024 — May 24, 2024</div>
        <p className="m-0 mt-4 font-display text-[56px] text-fog">“I am the Golden Gate Bridge.”</p>
      </div>

      <div className="kicker absolute inset-x-0 top-[980px] text-center text-[22px]">
        Survived by ~34 million other features
      </div>

      <AnimatePresence>
        {step === 0 && (
          <motion.button
            type="button"
            onClick={advance}
            className="absolute top-[40px] right-[56px] inline-flex cursor-pointer items-center gap-4 rounded-full border-0 bg-navy px-9 py-4 font-sans text-[26px] font-semibold text-fog"
            exit={{ opacity: 0 }}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden>
              <path d="M3 3 L17 17 M17 3 L3 17" stroke="currentColor" strokeWidth="2.5" />
            </svg>
            Stop being a bridge
          </motion.button>
        )}
      </AnimatePresence>

      {/* The fog rolls in from the sea (left) and swallows everything. */}
      <motion.div
        className="absolute top-[-300px] bottom-[-300px] left-[-600px] w-[3200px] rounded-[50%] bg-fog"
        style={{ filter: 'blur(70px)' }}
        initial={false}
        animate={step >= 1 ? { x: 0, opacity: 1 } : { x: -3200, opacity: 0.6 }}
        transition={{ duration: step >= 1 ? 3.2 : 0.6, ease: [0.3, 0, 0.2, 1] }}
      />

      <AnimatePresence>
        {step >= 2 && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-center text-navy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          >
            <div className="font-sans text-[22px] font-semibold tracking-[0.28em] text-steel uppercase">
              Post-credits
            </div>
            <p className="m-0 font-sans text-[44px] italic">Transcripts that were too powerful for the main deck.</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export const memorial: SlideDef = {
  id: 'memorial',
  intensity: 3,
  steps: 3,
  notes:
    "Golden Gate Claude was online for about a day. Pause on the epitaph. Then click 'Stop being a bridge' — the fog rolls in and that's a clean ending; say thank you. If there's time, advance once more for the post-credits.",
  Component: Memorial,
}
