import { segments, visibleChars } from './segments'

describe('segments', () => {
  it('splits text around highlighted phrases', () => {
    expect(segments('You are in San Francisco, not Paris.', 99, ['San Francisco'])).toEqual([
      { text: 'You are in ', hl: false },
      { text: 'San Francisco', hl: true },
      { text: ', not Paris.', hl: false },
    ])
  })

  it('clips to the number of visible characters', () => {
    expect(segments('You are in San Francisco', 14, ['San Francisco'])).toEqual([
      { text: 'You are in ', hl: false },
      { text: 'San', hl: true },
    ])
  })

  it('returns plain text when there are no highlights', () => {
    expect(segments('bridge', 3, [])).toEqual([{ text: 'bri', hl: false }])
  })

  it('throws when a highlight is not in the text, so typos in transcripts are caught', () => {
    expect(() => segments('bridge', 6, ['tunnel'])).toThrow(/tunnel/)
  })
})

describe('visibleChars', () => {
  it('distributes a running character count across blocks in order', () => {
    expect(visibleChars([5, 3, 4], 7)).toEqual([5, 2, 0])
    expect(visibleChars([5, 3, 4], 99)).toEqual([5, 3, 4])
    expect(visibleChars([5, 3, 4], 0)).toEqual([0, 0, 0])
  })
})
