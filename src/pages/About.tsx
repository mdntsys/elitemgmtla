import { motion } from 'framer-motion'
import { Mark } from '../components/Mark'
import { SectionDivider } from '../components/SectionDivider'

const HERO_IMG =
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=80'
const INTERIOR_IMG =
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=80'

const VALUES = [
  {
    label: 'Discretion',
    body:
      'Our work is invisible by design. Households we serve are protected by NDAs, vetted teams, and decades of experience with privacy at scale.',
  },
  {
    label: 'Precision',
    body:
      'Every property is documented, every system tracked, every vendor reviewed. We bring institutional rigor to the operation of a private home.',
  },
  {
    label: 'Anticipation',
    body:
      'We do not wait for problems to surface. The work that matters most is the work you never see — issues caught and resolved before they reach you.',
  },
  {
    label: 'Restraint',
    body:
      'A well-run home is a quiet one. Our presence is intentional, our communication considered, our footprint deliberately light.',
  },
]

export default function About() {
  return (
    <>
      <section className="px-4 md:px-8">
        <div className="relative mx-auto max-w-[1600px] overflow-hidden">
          <div
            className="relative h-[58vh] min-h-[420px] md:h-[68vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMG})` }}
          >
            <div className="absolute inset-0 bg-ink/45" />
            <div className="absolute inset-0 mx-auto flex max-w-[1600px] items-end px-6 md:px-10 pb-12 md:pb-20">
              <div className="max-w-3xl">
                <p className="text-xs tracking-luxe uppercase text-cream/80">About</p>
                <h1 className="mt-6 font-display text-cream text-5xl md:text-7xl leading-[1.0]">
                  An old-world approach<br />to the modern household.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pt-24 md:pt-32">
        <div className="grid gap-16 md:grid-cols-[1fr_auto] md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <h2 className="font-display text-3xl md:text-5xl leading-[1.1] text-ink">
              Elite Estate Management is a private operations firm, built for
              Los Angeles households where the cost of friction is high.
            </h2>
            <p className="mt-10 text-base md:text-lg leading-relaxed text-ink/75 max-w-xl">
              We exist for principals whose attention is in demand elsewhere —
              families, founders, executives, and creative leaders who require a
              home that simply works. Our team manages the vendors, the staff,
              the systems, and the small fires, so the household is never the
              thing on your mind.
            </p>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-ink/75 max-w-xl">
              We are deliberately small, deliberately experienced, and
              deliberately quiet about the homes in our care.
            </p>
          </motion.div>
          <div className="flex items-start justify-end pt-2">
            <Mark />
          </div>
        </div>
      </section>

      <SectionDivider number="01" label="our values" direction="down" />

      {/* VALUES */}
      <section className="bg-cream-200/40 py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <p className="text-xs tracking-luxe uppercase text-ink/60">
            How we work
          </p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05] text-ink max-w-3xl">
            Four principles, applied to every household.
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-x-16 md:gap-y-20">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="border-t border-ink/15 pt-8"
              >
                <p className="font-display text-ink/50 text-base">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 font-display text-3xl md:text-4xl text-ink">
                  {v.label}
                </h3>
                <p className="mt-6 text-base leading-relaxed text-ink/75 max-w-md">
                  {v.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE / BAND */}
      <section
        className="relative bg-fixed bg-cover bg-center"
        style={{ backgroundImage: `url(${INTERIOR_IMG})` }}
      >
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-36">
          <p className="text-xs tracking-luxe uppercase text-cream/60">
            Our standard
          </p>
          <p className="mt-8 font-display text-cream text-3xl md:text-5xl leading-[1.15] max-w-4xl">
            "A private home should feel like a quiet system — anticipating you,
            adapting to you, and asking nothing of you in return."
          </p>
        </div>
      </section>

      <SectionDivider number="02" label="begin a conversation" to="/contact" direction="right" />
    </>
  )
}
