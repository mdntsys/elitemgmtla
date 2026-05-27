import { motion } from 'framer-motion'
import { ArrowButton } from '../components/ArrowButton'
import { SectionDivider } from '../components/SectionDivider'
import { services } from '../data/services'

const HERO_IMG =
  'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=2400&q=80'
const SUNSET_IMG =
  'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=2400&q=80'
const INTERIOR_IMG =
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=80'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="px-4 md:px-8">
        <div className="relative mx-auto max-w-[1600px] overflow-hidden rounded-sm">
          <div
            className="relative h-[68vh] min-h-[480px] md:h-[78vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMG})` }}
          >
            {/* Layered overlays: base tint + radial darkening over the text block */}
            <div className="absolute inset-0 bg-ink/45" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(13,27,42,0.55) 0%, rgba(13,27,42,0.25) 60%, rgba(13,27,42,0.15) 100%)',
              }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-cream"
            >
              <h1
                className="font-display text-4xl leading-[1.05] md:text-6xl lg:text-7xl max-w-4xl"
                style={{ textShadow: '0 2px 32px rgba(0,0,0,0.45)' }}
              >
                Setting the standard for private home & estate management.
              </h1>
              <p
                className="mt-8 text-xs md:text-sm tracking-luxe uppercase opacity-95"
                style={{ textShadow: '0 1px 12px rgba(0,0,0,0.55)' }}
              >
                A management organization dedicated to homes, households, and the lives lived inside them.
              </p>
              <div className="mt-10">
                <ArrowButton label="Reach out" to="/contact" variant="light" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO STATEMENT */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pt-24 md:pt-32">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr] md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] text-ink">
              Elite Estate Management absorbs the work of running an estate,
              so nothing about home ever becomes a source of stress.
            </h2>
            <p className="mt-10 max-w-xl text-base md:text-lg leading-relaxed text-ink/75">
              We provide full-service home and estate management for Los Angeles
              households whose lives are full, fast-moving, and high-functioning.
              Whether you are home or away, we bring structure, oversight, and
              quiet ease to every part of your property, so it runs exactly as
              it should. We manage the details that do not belong on your calendar:
              coordinating vendors, overseeing maintenance, preparing the home for
              your arrival, and resolving the unexpected before it reaches your day.
            </p>
            <div className="mt-12">
              <ArrowButton label="Explore services" to="/services" />
            </div>
          </motion.div>
          <motion.div
            className="flex justify-center md:justify-end"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
          >
            <img
              src="/estate-pool.jpg"
              alt="Modern hillside estate with lap pool and ocean view"
              className="w-full max-w-[460px] aspect-[4/5] object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      <SectionDivider label="about us" to="/about" direction="down" />

      {/* ABOUT BAND with parallax-ish image */}
      <section className="relative">
        <div
          className="relative h-[55vh] min-h-[420px] bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${SUNSET_IMG})` }}
        >
          <div className="absolute inset-0 bg-ink/55" />
          <div className="absolute inset-0 mx-auto flex max-w-[1600px] flex-col px-6 md:px-10 py-10 md:py-16">
            <p className="text-xs tracking-luxe uppercase text-cream/80">About</p>
            <div className="mt-6 md:max-w-2xl">
              <h2 className="font-display text-cream text-4xl md:text-6xl leading-[1.05]">
                What makes us Elite
              </h2>
              <div className="mt-4 h-px w-full bg-cream/30" />
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-20 md:py-28">
          <div className="grid gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <p className="font-display text-2xl md:text-3xl leading-snug text-ink">
                Your home should function flawlessly, without you managing every
                detail. Our team has overseen some of the most complex estates and
                private households across Los Angeles.
              </p>
              <p className="mt-8 text-base md:text-lg leading-relaxed text-ink/75 max-w-xl">
                We understand what excellence looks like, and how quietly it is
                delivered. From seasonal preparation to system maintenance,
                renovation oversight to arrival setup, our work is tailored to your
                property, your lifestyle, and the way you like things done.
              </p>
            </div>
            <div>
              <p className="text-xs tracking-luxe uppercase text-ink/60">
                A handful of services we provide
              </p>
              <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
                {services.map((s) => (
                  <li
                    key={s.slug}
                    className="text-xs tracking-luxe uppercase text-ink"
                  >
                    {s.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider label="explore services" to="/services" direction="right" />

      {/* HOW IT WORKS */}
      <section
        className="relative bg-cover bg-center py-24 md:py-32"
        style={{ backgroundImage: `url(${INTERIOR_IMG})` }}
      >
        <div className="absolute inset-0 bg-cream/65" />
        <div className="relative mx-auto max-w-[1600px] px-6 md:px-10">
          <p className="text-xs tracking-luxe uppercase text-ink/70">How it works</p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05] text-ink max-w-3xl">
            We listen, and then we deliver.
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {STEPS.map((step) => (
              <motion.div
                key={step.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="bg-ink/85 backdrop-blur-md text-cream p-8 md:p-10"
              >
                <p className="text-xs tracking-luxe uppercase text-cream/60">
                  {step.n}
                </p>
                <h3 className="mt-4 font-display text-2xl md:text-3xl leading-tight">
                  {step.title}
                </h3>
                <p className="mt-5 text-sm md:text-base leading-relaxed text-cream/80">
                  {step.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider label="get in touch" to="/contact" direction="right" />
    </>
  )
}

const STEPS = [
  {
    n: '01',
    title: 'After your initial inquiry',
    body:
      'Reach out to begin a private conversation. We plan a time to discuss your home, your routines, and the support you require.',
  },
  {
    n: '02',
    title: 'A walk-through, in person',
    body:
      'We visit the property to understand its systems, staff, vendors, and the day-to-day rhythms of the household.',
  },
  {
    n: '03',
    title: 'Operations begin',
    body:
      'We build a tailored management plan and step in, coordinating vendors, overseeing operations, and freeing your calendar.',
  },
]
