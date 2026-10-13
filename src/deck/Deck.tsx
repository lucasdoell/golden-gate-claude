import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, MotionConfig, motion } from 'motion/react'
import { DeckContext, type Interceptor } from './context'
import { fromHash, next, prev, toHash, type Position } from './navigation'
import { Stage } from './Stage'
import { intensityAt, type SlideDef } from './types'
import { Backdrop } from '../bridge/Backdrop'
import { BridgeProgress } from '../bridge/BridgeProgress'

const ADVANCE_KEYS = ['ArrowRight', ' ', 'PageDown', 'Enter']
const BACK_KEYS = ['ArrowLeft', 'PageUp', 'Backspace']

export function Deck({ slides }: { slides: SlideDef[] }) {
  const stepCounts = useMemo(() => slides.map((s) => s.steps), [slides])
  const [pos, setPos] = useState<Position>(() => ({
    slide: fromHash(window.location.hash, slides.length),
    step: 0,
  }))
  const [showNotes, setShowNotes] = useState(false)
  const interceptor = useRef<Interceptor | null>(null)

  const advance = useCallback(() => {
    if (interceptor.current?.()) return
    setPos((p) => next(p, stepCounts))
  }, [stepCounts])
  const back = useCallback(() => setPos((p) => prev(p, stepCounts)), [stepCounts])
  const setInterceptor = useCallback((fn: Interceptor | null) => {
    interceptor.current = fn
  }, [])
  const controls = useMemo(() => ({ advance, setInterceptor }), [advance, setInterceptor])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (ADVANCE_KEYS.includes(e.key)) advance()
      else if (BACK_KEYS.includes(e.key)) back()
      else if (e.key === 'Home') setPos({ slide: 0, step: 0 })
      else if (e.key === 'End') setPos({ slide: slides.findLastIndex((s) => !s.postCredits), step: 0 })
      else if (e.key === 'n' || e.key === 'N') setShowNotes((v) => !v)
      else return
      e.preventDefault()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [advance, back, slides])

  // Keep the URL in sync so a refresh keeps your place, and let manual hash edits jump.
  useEffect(() => {
    const hash = toHash(pos.slide)
    if (window.location.hash !== hash) history.replaceState(null, '', hash)
  }, [pos.slide])
  useEffect(() => {
    const onHash = () => {
      const slide = fromHash(window.location.hash, slides.length)
      setPos((p) => (p.slide === slide ? p : { slide, step: 0 }))
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [slides.length])

  const slide = slides[pos.slide]
  const intensity = intensityAt(slide, pos.step)
  const mainCount = slides.filter((s) => !s.postCredits).length
  const SlideComponent = slide.Component

  return (
    <MotionConfig reducedMotion="user">
      <DeckContext.Provider value={controls}>
        <Stage
          data-intensity={intensity}
          onClick={(e) => {
            if (!(e.target as HTMLElement).closest('button, a')) advance()
          }}
        >
          <Backdrop intensity={intensity} dim={slide.dimBackdrop} />

          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <SlideComponent step={pos.step} />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence>
            {intensity < 3 && (
              <motion.div
                className="absolute bottom-[56px] left-[128px] flex items-end gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <BridgeProgress
                  progress={pos.slide / (mainCount - 1)}
                  width={intensity === 2 ? 1180 : 1500}
                />
                <span className="kicker mb-1 shrink-0 whitespace-nowrap text-[20px] tracking-[0.2em] text-steel">
                  {String(pos.slide + 1).padStart(2, '0')} / {mainCount}
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {showNotes && (
            <div className="absolute inset-x-0 bottom-0 z-50 max-h-[40%] overflow-auto bg-navy/95 px-16 py-10 font-sans text-[30px] leading-snug text-fog">
              <div className="kicker mb-3 text-gold">
                Notes · slide {pos.slide + 1} · step {pos.step + 1}/{slide.steps}
              </div>
              {slide.notes}
            </div>
          )}
        </Stage>
      </DeckContext.Provider>
    </MotionConfig>
  )
}
