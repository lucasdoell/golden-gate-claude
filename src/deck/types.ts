import type { ComponentType } from 'react'

export type Intensity = 0 | 1 | 2 | 3

export interface SlideProps {
  step: number
}

export interface SlideDef {
  id: string
  /** Bridge Intensity, optionally changing as the slide's steps advance. */
  intensity: Intensity | ((step: number) => Intensity)
  /** How many states the slide has; each click advances one. */
  steps: number
  /** What to say. Press N to show. */
  notes: string
  /** Post-credits slides don't count toward the main deck's progress. */
  postCredits?: boolean
  /** Fade the intensity backdrop so long text stays readable over it. */
  dimBackdrop?: boolean
  Component: ComponentType<SlideProps>
}

export function intensityAt(slide: SlideDef, step: number): Intensity {
  return typeof slide.intensity === 'function' ? slide.intensity(step) : slide.intensity
}
