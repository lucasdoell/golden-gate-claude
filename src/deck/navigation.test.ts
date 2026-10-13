import { next, prev, fromHash, toHash } from './navigation'

const steps = [1, 3, 2]

describe('next', () => {
  it('advances a step before advancing the slide', () => {
    expect(next({ slide: 1, step: 0 }, steps)).toEqual({ slide: 1, step: 1 })
    expect(next({ slide: 1, step: 2 }, steps)).toEqual({ slide: 2, step: 0 })
  })

  it('moves to the next slide when the current slide has one step', () => {
    expect(next({ slide: 0, step: 0 }, steps)).toEqual({ slide: 1, step: 0 })
  })

  it('stays put at the very end', () => {
    expect(next({ slide: 2, step: 1 }, steps)).toEqual({ slide: 2, step: 1 })
  })
})

describe('prev', () => {
  it('steps back within a slide', () => {
    expect(prev({ slide: 1, step: 2 }, steps)).toEqual({ slide: 1, step: 1 })
  })

  it('lands on the last step of the previous slide', () => {
    expect(prev({ slide: 2, step: 0 }, steps)).toEqual({ slide: 1, step: 2 })
  })

  it('stays put at the very start', () => {
    expect(prev({ slide: 0, step: 0 }, steps)).toEqual({ slide: 0, step: 0 })
  })
})

describe('hash', () => {
  it('round-trips a 1-based slide number', () => {
    expect(toHash(6)).toBe('#/7')
    expect(fromHash('#/7', 16)).toBe(6)
  })

  it('clamps and falls back to the first slide', () => {
    expect(fromHash('', 16)).toBe(0)
    expect(fromHash('#/nope', 16)).toBe(0)
    expect(fromHash('#/99', 16)).toBe(15)
    expect(fromHash('#/0', 16)).toBe(0)
  })
})
