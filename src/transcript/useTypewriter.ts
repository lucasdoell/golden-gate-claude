import { useCallback, useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'motion/react'

/**
 * Types `total` characters while `running`. Starts full if the slide is entered
 * mid-way (e.g. stepping back), and resets when the slide steps back to before typing.
 */
export function useTypewriter(total: number, step: number, cps: number) {
  const reduced = useReducedMotion()
  const [count, setCount] = useState(() => (step >= 1 ? total : 0))
  const prevStep = useRef(step)

  useEffect(() => {
    const from = prevStep.current
    prevStep.current = step
    if (step === 0) setCount(0)
    else if (from === 0 && step === 1 && reduced) setCount(total)
  }, [step, total, reduced])

  const typing = step === 1 && count < total

  useEffect(() => {
    if (!typing) return
    let raf = 0
    let last = performance.now()
    let carry = 0
    const tick = (now: number) => {
      carry += ((now - last) / 1000) * cps
      last = now
      const add = Math.floor(carry)
      if (add > 0) {
        carry -= add
        setCount((c) => Math.min(total, c + add))
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [typing, total, cps])

  const finish = useCallback(() => setCount(total), [total])
  return { count, typing, finish }
}
