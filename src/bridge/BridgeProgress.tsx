import { motion } from 'motion/react'

const SUSPENDERS: [number, number][] = [
  [250, 31], [309, 42], [368, 52], [427, 60], [486, 68], [544, 74], [603, 78], [662, 82], [721, 84],
  [780, 85], [839, 84], [898, 82], [957, 78], [1016, 74], [1075, 68], [1133, 60], [1192, 52], [1251, 42], [1310, 31],
]
const NAVY = '#14243A'
const SPAN = 1560
const CAR_W = 28 * 1.6

function Tower({ x }: { x: number }) {
  return (
    <g fill={NAVY} transform={`translate(${x} 0)`}>
      <rect x={0} y={10} width={24} height={5} />
      <rect x={2} y={15} width={6} height={95} />
      <rect x={16} y={15} width={6} height={95} />
      <rect x={8} y={24} width={8} height={5} />
      <rect x={8} y={42} width={8} height={4} />
      <rect x={8} y={60} width={8} height={3} />
      <rect x={4} y={6} width={4} height={4} />
      <rect x={16} y={6} width={4} height={4} />
    </g>
  )
}

/** The progress bar: a tiny bridge with a 1930s car driving across it. */
export function BridgeProgress({ progress, width }: { progress: number; width: number }) {
  const p = Math.min(Math.max(progress, 0), 1)
  return (
    <motion.svg
      viewBox={`0 0 ${SPAN} 110`}
      initial={false}
      animate={{ width }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      fill="none"
      aria-hidden
    >
      <path d="M0 88 Q 120 72 169 18" stroke={NAVY} strokeWidth={2} />
      <path d="M1391 18 Q 1440 72 1560 88" stroke={NAVY} strokeWidth={2} />
      <path d="M191 18 Q 780 150 1369 18" stroke={NAVY} strokeWidth={2} />
      {SUSPENDERS.map(([x, y]) => (
        <line key={x} x1={x} x2={x} y1={y} y2={90} stroke="#6E7A88" strokeWidth={1.25} />
      ))}
      <rect x={0} y={90} width={SPAN} height={4} fill={NAVY} />
      <rect x={0} y={99} width={SPAN} height={1.5} fill={NAVY} />
      <motion.rect
        x={0}
        y={90}
        height={4}
        fill="#C0362C"
        initial={false}
        animate={{ width: p * SPAN }}
        transition={{ duration: 0.9, ease: 'easeInOut' }}
      />
      <Tower x={168} />
      <Tower x={1368} />
      <motion.g initial={false} animate={{ x: p * (SPAN - CAR_W) }} transition={{ duration: 0.9, ease: 'easeInOut' }}>
        {/* Mirrored so the hood faces the direction of travel. */}
        <g transform={`translate(${CAR_W} 64) scale(-1.6 1.6)`}>
          <path
            d="M0 12 L0 8 Q0 6 3 6 L8 6 L11 1 Q12 0 14 0 L20 0 Q22 0 23 2 L25 6 L27 7 Q28 8 28 10 L28 12 Z"
            fill="#C0362C"
          />
          <rect x={13} y={2} width={4} height={4} fill="#E7E5E0" />
          <rect x={18} y={2} width={3.5} height={4} fill="#E7E5E0" />
          <circle cx={6.5} cy={13} r={3} fill={NAVY} />
          <circle cx={21.5} cy={13} r={3} fill={NAVY} />
        </g>
      </motion.g>
    </motion.svg>
  )
}
