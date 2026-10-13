import { Transcript, transcriptSteps, type TranscriptContent } from '../transcript/Transcript'
import type { SlideDef } from '../deck/types'

export function transcriptSlide(
  def: Omit<SlideDef, 'steps' | 'Component'> & { content: TranscriptContent },
): SlideDef & { content: TranscriptContent } {
  const { content } = def
  return {
    ...def,
    steps: transcriptSteps(content),
    Component: ({ step }) => <Transcript step={step} content={content} />,
  }
}
