import { useEffect, useState, type ReactNode } from 'react'

export const STAGE_W = 1920
export const STAGE_H = 1080

/** A fixed 1920×1080 canvas, scaled to fit the window and letterboxed. */
export function Stage({ children, ...rest }: { children: ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const fit = () => setScale(Math.min(window.innerWidth / STAGE_W, window.innerHeight / STAGE_H))
    fit()
    window.addEventListener('resize', fit)
    return () => window.removeEventListener('resize', fit)
  }, [])

  return (
    <div className="grid h-full w-full place-items-center overflow-hidden">
      <div style={{ width: STAGE_W * scale, height: STAGE_H * scale }}>
        <div
          {...rest}
          className="relative origin-top-left overflow-hidden"
          style={{ width: STAGE_W, height: STAGE_H, transform: `scale(${scale})` }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
