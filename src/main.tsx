import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/limelight/400.css'
import '@fontsource/josefin-sans/400.css'
import '@fontsource/josefin-sans/400-italic.css'
import '@fontsource/josefin-sans/600.css'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/600.css'
import './index.css'
import { Deck } from './deck/Deck'
import { slides } from './slides'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Deck slides={slides} />
  </StrictMode>,
)
