import { createContext, useContext, useEffect } from 'react'

/** Return true to consume the click (e.g. finish typing instead of advancing). */
export type Interceptor = () => boolean

export interface DeckControls {
  advance: () => void
  setInterceptor: (fn: Interceptor | null) => void
}

export const DeckContext = createContext<DeckControls>({
  advance: () => {},
  setInterceptor: () => {},
})

export const useDeck = () => useContext(DeckContext)

export function useInterceptAdvance(fn: Interceptor | null) {
  const { setInterceptor } = useDeck()
  useEffect(() => {
    setInterceptor(fn)
    return () => setInterceptor(null)
  }, [fn, setInterceptor])
}
