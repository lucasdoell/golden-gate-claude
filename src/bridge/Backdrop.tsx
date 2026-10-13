import { AnimatePresence, motion } from 'motion/react'
import type { Intensity } from '../deck/types'

const ORANGE = '#C0362C'
const NAVY = '#14243A'

/** Intensity 1: a faint main cable sneaking in from the top-right corner. */
function Cables() {
  const suspenders: [number, number][] = [
    [1587, 190], [1652, 310], [1715, 410], [1778, 490], [1839, 550], [1888, 584],
  ]
  return (
    <svg className="absolute inset-0" viewBox="0 0 1920 1080" fill="none" opacity={0.18}>
      <path d="M1500 0 Q 1720 520 1920 600" stroke={NAVY} strokeWidth={6} />
      {suspenders.map(([x, y]) => (
        <line key={x} x1={x} x2={x} y1={y} y2={1080} stroke={NAVY} strokeWidth={2} />
      ))}
    </svg>
  )
}

/** Intensity 2: a full art-deco tower has moved in on the right. */
function Tower() {
  return (
    <>
      <svg className="absolute inset-0" viewBox="0 0 1920 1080" fill="none">
        <path d="M1556 70 Q 1470 760 1220 1080" stroke={ORANGE} strokeWidth={8} opacity={0.35} />
        <path d="M1724 70 Q 1840 520 1920 640" stroke={ORANGE} strokeWidth={8} />
        <g fill={ORANGE}>
          <polygon points="1528,1080 1584,1080 1580,640 1576,300 1572,70 1540,70 1536,300 1532,640" />
          <polygon points="1696,1080 1752,1080 1748,640 1744,300 1740,70 1708,70 1704,300 1700,640" />
          <rect x={1532} y={56} width={216} height={18} />
          <rect x={1544} y={40} width={24} height={16} />
          <rect x={1712} y={40} width={24} height={16} />
          {[150, 360, 560, 760].map((y) => (
            <g key={y}>
              <rect x={1576} y={y} width={128} height={22} />
              <rect x={1590} y={y + 22} width={100} height={8} />
            </g>
          ))}
        </g>
      </svg>
      <div
        className="absolute rounded-full bg-fog"
        style={{ left: 1300, top: 860, width: 760, height: 260, filter: 'blur(48px)', opacity: 0.85 }}
      />
    </>
  )
}

/** Intensity 3: the whole slide is the bridge. */
export function Silhouette() {
  const suspenders = []
  for (let x = 510; x <= 1410; x += 90) {
    const t = (x - 420) / 1080
    suspenders.push([x, 580 + 1040 * t * (1 - t)] as const)
  }
  return (
    <>
      <svg className="absolute inset-0" viewBox="0 0 1920 1080" fill="none">
        <path
          d="M0 860 Q 260 760 420 580 Q 960 1100 1500 580 Q 1660 760 1920 860"
          stroke={NAVY}
          strokeWidth={6}
        />
        {suspenders.map(([x, y]) => (
          <line key={x} x1={x} x2={x} y1={y} y2={900} stroke={NAVY} strokeWidth={2.5} />
        ))}
        <g fill={NAVY}>
          <rect x={0} y={900} width={1920} height={16} />
          <rect x={0} y={922} width={1920} height={4} />
          {[398, 1478].map((x) => (
            <g key={x}>
              <rect x={x} y={560} width={12} height={520} />
              <rect x={x + 32} y={560} width={12} height={520} />
              <rect x={x - 4} y={548} width={52} height={14} />
              {[620, 720, 820].map((y) => (
                <rect key={y} x={x + 12} y={y} width={20} height={12} />
              ))}
            </g>
          ))}
        </g>
      </svg>
      {(
        <div
          className="absolute rounded-full bg-fog"
          style={{ left: -200, top: 900, width: 2320, height: 320, filter: 'blur(64px)', opacity: 0.55 }}
        />
      )}
    </>
  )
}

const LAYERS: Record<Intensity, (() => React.ReactNode) | null> = {
  0: null,
  1: Cables,
  2: Tower,
  3: Silhouette,
}

export function Backdrop({ intensity, dim = false }: { intensity: Intensity; dim?: boolean }) {
  const Layer = LAYERS[intensity]
  return (
    <AnimatePresence>
      {Layer && (
        <motion.div
          key={intensity}
          className="pointer-events-none absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: dim ? 0.22 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Layer />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
