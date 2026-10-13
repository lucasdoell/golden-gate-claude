import type { SlideDef } from '../deck/types'
import { blackBox, important, limitedTime, sourceMap, theFeature, title } from './explainer'
import { memorial } from './memorial'
import { dials, deckProblem } from './serious'
import {
  bobsMom,
  breakup,
  coldOpen,
  featureClamped,
  kittens,
  mathProof,
  paris,
  planets,
  pythonOop,
  spaghetti,
  toiletFlange,
} from './transcripts'

/** Order and intensities follow docs/deck-outline.md. */
export const slides: SlideDef[] = [
  coldOpen,
  title,
  blackBox,
  sourceMap,
  theFeature,
  important,
  limitedTime,
  pythonOop,
  paris,
  breakup,
  spaghetti,
  kittens,
  featureClamped,
  dials,
  deckProblem,
  memorial,
  toiletFlange,
  bobsMom,
  planets,
  mathProof,
]

export const transcriptSlides = [
  coldOpen,
  pythonOop,
  paris,
  breakup,
  spaghetti,
  kittens,
  featureClamped,
  toiletFlange,
  bobsMom,
  planets,
  mathProof,
]
