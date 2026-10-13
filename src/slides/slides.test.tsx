import { render } from '@testing-library/react'
import { intensityAt } from '../deck/types'
import { slides, transcriptSlides } from '.'

describe('deck content', () => {
  it('has 16 main slides followed only by post-credits slides', () => {
    const main = slides.filter((s) => !s.postCredits)
    expect(main).toHaveLength(16)
    expect(slides.slice(16).every((s) => s.postCredits)).toBe(true)
  })

  it('opens and closes fully consumed by the bridge', () => {
    expect(intensityAt(slides[0], 0)).toBe(3)
    expect(intensityAt(slides[15], 0)).toBe(3)
  })

  it('has unique ids and notes for every slide', () => {
    expect(new Set(slides.map((s) => s.id)).size).toBe(slides.length)
    for (const s of slides) expect(s.notes.length).toBeGreaterThan(20)
  })

  it.each(transcriptSlides.map((s) => [s.id, s] as const))(
    '%s: every highlight appears verbatim in the transcript',
    (_, slide) => {
      const text = slide.content.blocks.map((b) => b.text).join('\n')
      for (const h of slide.content.highlights ?? []) expect(text).toContain(h)
    },
  )

  it.each(slides.map((s) => [s.id, s] as const))('%s renders at every step', (_, slide) => {
    for (let step = 0; step < slide.steps; step++) {
      const { unmount } = render(<slide.Component step={step} />)
      unmount()
    }
  })
})
