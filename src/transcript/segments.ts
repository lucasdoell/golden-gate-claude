export interface Segment {
  text: string
  hl: boolean
}

/** Splits `text` into plain/highlighted runs, keeping only the first `visible` characters. */
export function segments(text: string, visible: number, highlights: string[]): Segment[] {
  const ranges = highlights
    .map((phrase) => {
      const start = text.indexOf(phrase)
      if (start === -1) throw new Error(`Highlight not found in transcript: "${phrase}"`)
      return [start, start + phrase.length] as const
    })
    .sort((a, b) => a[0] - b[0])

  const out: Segment[] = []
  const push = (from: number, to: number, hl: boolean) => {
    const end = Math.min(to, visible)
    if (end > from) out.push({ text: text.slice(from, end), hl })
  }

  let cursor = 0
  for (const [start, end] of ranges) {
    push(cursor, start, false)
    push(start, end, true)
    cursor = end
  }
  push(cursor, text.length, false)
  return out
}

/** Given each block's length and a running total, how many characters of each block are visible. */
export function visibleChars(lengths: number[], total: number): number[] {
  let remaining = total
  return lengths.map((len) => {
    const shown = Math.max(0, Math.min(len, remaining))
    remaining -= shown
    return shown
  })
}
