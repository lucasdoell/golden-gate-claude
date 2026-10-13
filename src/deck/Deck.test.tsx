import { act, fireEvent, render, screen } from '@testing-library/react'
import { Deck } from './Deck'
import type { SlideDef } from './types'

const slides: SlideDef[] = [
  { id: 'a', intensity: 0, steps: 2, notes: 'notes a', Component: ({ step }) => <p>A{step}</p> },
  { id: 'b', intensity: 1, steps: 1, notes: 'notes b', Component: () => <p>B</p> },
]

const press = (key: string) => act(() => void fireEvent.keyDown(window, { key }))

describe('Deck', () => {
  beforeEach(() => history.replaceState(null, '', '#/1'))

  it('steps through a slide before moving on, and tracks the slide in the hash', async () => {
    render(<Deck slides={slides} />)
    expect(screen.getByText('A0')).toBeInTheDocument()
    press('ArrowRight')
    expect(screen.getByText('A1')).toBeInTheDocument()
    press(' ')
    expect(await screen.findByText('B')).toBeInTheDocument()
    expect(window.location.hash).toBe('#/2')
    press('ArrowLeft')
    expect(await screen.findByText('A1')).toBeInTheDocument()
  })

  it('starts on the slide in the hash', () => {
    history.replaceState(null, '', '#/2')
    render(<Deck slides={slides} />)
    expect(screen.getByText('B')).toBeInTheDocument()
  })

  it('toggles speaker notes with N', () => {
    render(<Deck slides={slides} />)
    press('n')
    expect(screen.getByText('notes a')).toBeInTheDocument()
  })
})
