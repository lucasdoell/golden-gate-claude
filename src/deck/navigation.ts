export interface Position {
  slide: number
  step: number
}

/** `stepCounts[i]` is how many states slide `i` has (at least 1). */
export function next(pos: Position, stepCounts: number[]): Position {
  if (pos.step < stepCounts[pos.slide] - 1) return { slide: pos.slide, step: pos.step + 1 }
  if (pos.slide < stepCounts.length - 1) return { slide: pos.slide + 1, step: 0 }
  return pos
}

export function prev(pos: Position, stepCounts: number[]): Position {
  if (pos.step > 0) return { slide: pos.slide, step: pos.step - 1 }
  if (pos.slide > 0) return { slide: pos.slide - 1, step: stepCounts[pos.slide - 1] - 1 }
  return pos
}

export function toHash(slide: number): string {
  return `#/${slide + 1}`
}

export function fromHash(hash: string, slideCount: number): number {
  const n = Number.parseInt(hash.replace(/^#\/?/, ''), 10)
  if (Number.isNaN(n)) return 0
  return Math.min(Math.max(n - 1, 0), slideCount - 1)
}
