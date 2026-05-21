import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

/**
 * Architectural blueprint that reacts to scroll position:
 * - Sun/celestial disc rotates and rises
 * - Estate elevation parallax-shifts upward
 * - Pool waterlines drift horizontally at different rates
 * - A small marker traces the scroll progress along the right edge
 */
export function ScrollArt() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const sunY = useTransform(scrollYProgress, [0, 1], [40, -50])
  const sunRotate = useTransform(scrollYProgress, [0, 1], [-70, 70])
  const buildingY = useTransform(scrollYProgress, [0, 1], [50, -10])
  const waterX1 = useTransform(scrollYProgress, [0, 1], [0, -60])
  const waterX2 = useTransform(scrollYProgress, [0, 1], [0, 45])
  const waterX3 = useTransform(scrollYProgress, [0, 1], [0, -30])
  const markerY = useTransform(scrollYProgress, [0, 1], [0, 320])
  const labelOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 0.6, 0.6, 0])

  return (
    <div ref={ref} className="relative w-full max-w-[460px] aspect-[3/4] text-ink">
      <svg
        viewBox="0 0 300 400"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
      >
        {/* Outer frame */}
        <rect
          x="0.5"
          y="0.5"
          width="299"
          height="399"
          strokeWidth="0.4"
          opacity="0.18"
        />

        {/* Editorial labels */}
        <motion.text
          x="20"
          y="22"
          fontSize="6.5"
          fill="currentColor"
          style={{ letterSpacing: '2.2px', opacity: labelOpacity }}
        >
          ELEVATION — 01
        </motion.text>
        <motion.text
          x="280"
          y="22"
          fontSize="6.5"
          fill="currentColor"
          textAnchor="end"
          style={{ letterSpacing: '2.2px', opacity: labelOpacity }}
        >
          34.05° N
        </motion.text>

        {/* Sun disc */}
        <motion.g style={{ y: sunY }}>
          <circle cx="150" cy="110" r="58" strokeWidth="0.5" opacity="0.4" />
          <circle cx="150" cy="110" r="42" strokeWidth="0.3" opacity="0.25" />
          <motion.g
            style={{
              rotate: sunRotate,
              transformOrigin: '150px 110px',
            }}
          >
            <line x1="150" y1="42" x2="150" y2="58" strokeWidth="0.7" />
            <line x1="150" y1="162" x2="150" y2="178" strokeWidth="0.5" opacity="0.5" />
            <line x1="82" y1="110" x2="98" y2="110" strokeWidth="0.5" opacity="0.5" />
            <line x1="202" y1="110" x2="218" y2="110" strokeWidth="0.5" opacity="0.5" />
            <line x1="103" y1="63" x2="114" y2="74" strokeWidth="0.4" opacity="0.35" />
            <line x1="186" y1="146" x2="197" y2="157" strokeWidth="0.4" opacity="0.35" />
            <line x1="197" y1="63" x2="186" y2="74" strokeWidth="0.4" opacity="0.35" />
            <line x1="114" y1="146" x2="103" y2="157" strokeWidth="0.4" opacity="0.35" />
            <circle cx="150" cy="110" r="2.5" fill="currentColor" />
          </motion.g>
        </motion.g>

        {/* Estate elevation */}
        <motion.g style={{ y: buildingY }}>
          {/* Pitched roof */}
          <path d="M 55 240 L 150 188 L 245 240" strokeWidth="0.8" strokeLinejoin="round" />
          {/* Chimneys */}
          <path d="M 110 215 L 110 200 L 120 200 L 120 220" strokeWidth="0.5" />
          {/* Outer walls */}
          <line x1="75" y1="240" x2="75" y2="310" strokeWidth="0.8" />
          <line x1="225" y1="240" x2="225" y2="310" strokeWidth="0.8" />
          {/* Interior columns */}
          <line x1="108" y1="248" x2="108" y2="310" strokeWidth="0.45" opacity="0.7" />
          <line x1="150" y1="248" x2="150" y2="278" strokeWidth="0.45" opacity="0.7" />
          <line x1="192" y1="248" x2="192" y2="310" strokeWidth="0.45" opacity="0.7" />
          {/* Door */}
          <rect x="140" y="280" width="20" height="30" strokeWidth="0.55" />
          {/* Windows */}
          <rect x="85" y="258" width="14" height="14" strokeWidth="0.4" opacity="0.7" />
          <rect x="201" y="258" width="14" height="14" strokeWidth="0.4" opacity="0.7" />
          {/* Foundation line */}
          <line x1="30" y1="310" x2="270" y2="310" strokeWidth="0.6" />
        </motion.g>

        {/* Pool / water lines */}
        <motion.path
          d="M -20 338 Q 50 333, 120 338 T 260 338 T 400 338"
          strokeWidth="0.6"
          style={{ x: waterX1 }}
        />
        <motion.path
          d="M -40 354 Q 30 349, 100 354 T 240 354 T 380 354"
          strokeWidth="0.5"
          opacity="0.65"
          style={{ x: waterX2 }}
        />
        <motion.path
          d="M -20 370 Q 50 365, 120 370 T 260 370 T 400 370"
          strokeWidth="0.4"
          opacity="0.45"
          style={{ x: waterX3 }}
        />

        {/* Footer label */}
        <motion.text
          x="20"
          y="392"
          fontSize="6.5"
          fill="currentColor"
          style={{ letterSpacing: '2.2px', opacity: labelOpacity }}
        >
          ELITE ESTATE · LOS ANGELES · MMXXVI
        </motion.text>

        {/* Right-edge scroll progress track */}
        <line
          x1="285"
          y1="50"
          x2="285"
          y2="380"
          strokeWidth="0.3"
          opacity="0.25"
        />
        <motion.circle
          cx="285"
          cy="50"
          r="2.2"
          fill="currentColor"
          style={{ y: markerY }}
        />
      </svg>
    </div>
  )
}
