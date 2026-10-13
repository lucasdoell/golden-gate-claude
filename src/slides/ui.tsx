import type { ReactNode } from 'react'
import { motion } from 'motion/react'

/** Standard slide padding (96 / 128 / 72) with room left for the progress bridge. */
export function Frame({ kicker, children }: { kicker?: string; children: ReactNode }) {
  return (
    <div className="absolute inset-0 flex flex-col gap-8 px-[128px] pt-[96px] pb-[200px]">
      {kicker && <div className="kicker">{kicker}</div>}
      {children}
    </div>
  )
}

export function Title({ children, size = 120 }: { children: ReactNode; size?: number }) {
  return (
    <h1 className="m-0 font-display font-normal leading-[1.02]" style={{ fontSize: size, textWrap: 'balance' }}>
      {children}
    </h1>
  )
}

/** Fades content in once the slide reaches `show`. Keeps layout stable by reserving space. */
export function Reveal({
  show,
  children,
  className = '',
  y = 16,
}: {
  show: boolean
  children: ReactNode
  className?: string
  y?: number
}) {
  return (
    <motion.div
      className={className}
      initial={false}
      animate={{ opacity: show ? 1 : 0, y: show ? 0 : y }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function Code({ children, size = 36 }: { children: ReactNode; size?: number }) {
  return (
    <pre
      className="m-0 w-fit rounded-xl bg-navy px-12 py-9 font-mono leading-[1.5] text-fog"
      style={{ fontSize: size }}
    >
      {children}
    </pre>
  )
}

export function Body({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`m-0 font-sans text-[38px] leading-[1.35] ${className}`}>{children}</p>
}
