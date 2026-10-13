import { useCallback, useMemo } from 'react'
import { motion } from 'motion/react'
import { useInterceptAdvance } from '../deck/context'
import { segments, visibleChars } from './segments'
import { useTypewriter } from './useTypewriter'

export type Block =
  | { kind: 'text'; text: string }
  | { kind: 'item'; text: string }
  | { kind: 'code'; text: string }
  | { kind: 'quote'; text: string }

export interface TranscriptContent {
  kicker?: string
  /** Omitted when the original prompt isn't visible in the source. */
  prompt?: string
  promptLabel?: string
  replyLabel?: string
  blocks: Block[]
  /** Phrases (verbatim from the blocks) that get the orange sweep on the punchline step. */
  highlights?: string[]
  /** Withheld from typing; lands in Limelight on the punchline step. */
  punch?: string
  credit: string
  /** Max width of the transcript column, so it clears the tower at intensity 2. */
  width?: number
  textSize?: number
  cps?: number
}

/** 0 = prompt, 1 = typing, 2 = punchline (if any). */
export function transcriptSteps(t: TranscriptContent) {
  return t.highlights?.length || t.punch ? 3 : 2
}

const TEXT_STYLES: Record<Block['kind'], string> = {
  text: 'font-sans',
  item: 'font-sans',
  code: 'font-mono text-[0.8em] leading-[1.45] whitespace-pre bg-navy text-fog rounded-lg px-8 py-6 w-fit',
  quote: 'font-display text-accent leading-[1.1]',
}

export function Transcript({ step, content }: { step: number; content: TranscriptContent }) {
  const {
    kicker,
    prompt,
    promptLabel = 'A user asked',
    replyLabel = 'Golden Gate Claude replied',
    blocks,
    highlights = [],
    punch,
    credit,
    width = 1500,
    textSize = 34,
    cps = 60,
  } = content

  const lengths = useMemo(() => blocks.map((b) => b.text.length), [blocks])
  const total = lengths.reduce((a, b) => a + b, 0)
  const { count, typing, finish } = useTypewriter(total, step, cps)
  const shown = visibleChars(lengths, count)
  const punchline = step >= 2

  const intercept = useCallback(() => {
    if (!typing) return false
    finish()
    return true
  }, [typing, finish])
  useInterceptAdvance(intercept)

  const caretBlock = typing ? shown.findIndex((n, i) => n < lengths[i]) : -1

  const rendered = blocks.map((block, i) => {
    if (shown[i] === 0 && caretBlock !== i) return null
    const own = highlights.filter((h) => block.text.includes(h))
    const body = segments(block.text, shown[i], own).map((seg, j) =>
      seg.hl ? (
        <span key={j} className="sweep" data-on={punchline}>
          {seg.text}
        </span>
      ) : (
        <span key={j}>{seg.text}</span>
      ),
    )
    return (
      <div
        key={i}
        className={`${TEXT_STYLES[block.kind]} ${block.kind === 'item' ? 'relative pl-8' : ''}`}
        style={block.kind === 'quote' ? { fontSize: textSize * 1.7 } : undefined}
      >
        {block.kind === 'item' && <span className="absolute left-0 text-accent">•</span>}
        {body}
        {caretBlock === i && <span className="caret" />}
      </div>
    )
  })

  return (
    <div className="absolute inset-0 px-[128px] pt-[88px]" style={{ fontSize: textSize }}>
      <div className="flex flex-col gap-7" style={{ maxWidth: width }}>
        {kicker && <div className="kicker">{kicker}</div>}

        {prompt && (
          <div className="flex flex-col gap-3">
            <div className="kicker text-[18px] opacity-80">{promptLabel}</div>
            <div className="border-l-4 border-accent pl-7 font-mono text-[0.8em] leading-[1.5]">{prompt}</div>
          </div>
        )}

        <div className="flex flex-col gap-3">
          <motion.div className="kicker text-[18px] opacity-80" animate={{ opacity: step >= 1 ? 0.8 : 0 }}>
            {replyLabel}
          </motion.div>
          <div className="flex flex-col gap-[0.55em] leading-[1.38]">{rendered}</div>
        </div>

        {punch && (
          <motion.div
            className="font-display leading-[1.1] text-accent"
            style={{ fontSize: textSize * 1.9 }}
            initial={false}
            animate={{ opacity: punchline ? 1 : 0, y: punchline ? 0 : 16 }}
            transition={{ duration: 0.6 }}
          >
            {punch}
          </motion.div>
        )}

        <motion.div
          className="text-[22px] italic text-label"
          animate={{ opacity: step >= 1 && !typing ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {credit}
        </motion.div>
      </div>
    </div>
  )
}
