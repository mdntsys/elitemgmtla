import { motion } from 'framer-motion'
import { ArrowButton } from '../components/ArrowButton'
import { Mark } from '../components/Mark'
import { SectionDivider } from '../components/SectionDivider'
import { services } from '../data/services'

const HERO_IMG = '/services-hero.jpg'

export default function Services() {
  return (
    <>
      {/* HERO */}
      <section className="px-4 md:px-8">
        <div className="relative mx-auto max-w-[1600px] overflow-hidden">
          <div
            className="relative h-[48vh] min-h-[360px] md:h-[58vh] bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMG})` }}
          >
            <div className="absolute inset-0 bg-ink/35" />
            <div className="absolute inset-0 mx-auto flex max-w-[1600px] items-end px-6 md:px-10 pb-10 md:pb-16">
              <h1 className="font-display text-cream text-5xl md:text-7xl lg:text-8xl leading-[1.0]">
                Our <span className="italic">Elite</span> Services
              </h1>
            </div>
            <div className="absolute right-6 md:right-10 top-10 md:top-14">
              <Mark variant="light" />
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <h2 className="font-display text-3xl md:text-5xl leading-[1.1] text-ink">
            Your life, Our <span className="italic">priority</span>.
          </h2>
          <p className="mt-8 text-xs tracking-luxe uppercase text-ink/70">
            Run by us, lived by you
          </p>
          <p className="mt-8 text-base md:text-lg leading-relaxed text-ink/75 max-w-xl">
            We manage the details of your life: coordinating vendors,
            overseeing maintenance, preparing your home for arrival, and
            handling the unexpected with calm precision. Whether you are in residence
            or away, we act as a trusted extension of your household, keeping the
            property protected, prepared, and beautifully in sync with your life.
          </p>
        </motion.div>
      </section>

      <SectionDivider label="services" direction="down" />

      {/* 24/7 BAND */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 py-10 md:py-14 text-center">
          <p className="text-xs tracking-luxe uppercase text-cream/60">
            Around the clock
          </p>
          <h2 className="mt-3 font-display text-3xl md:text-5xl leading-[1.05]">
            24/7 On-Demand Support
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm md:text-base leading-relaxed text-cream/75">
            However the day unfolds, someone is already on it. A direct line
            to your household, day or night, in residence or away.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-cream-200/40 py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-y-24 md:gap-y-36">
            {services.map((s, i) => {
              const imageRight = i % 2 === 0
              return (
                <motion.article
                  key={s.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="grid items-center gap-10 md:grid-cols-2 md:gap-20"
                >
                  <div className={imageRight ? 'md:order-1' : 'md:order-2'}>
                    <h2 className="font-display text-3xl md:text-5xl leading-[1.1] text-ink">
                      {s.label}
                    </h2>
                    <h3 className="mt-5 font-display text-xl md:text-2xl leading-snug text-ink/75 max-w-md">
                      {s.short}
                    </h3>
                    <ul className="mt-10 space-y-3">
                      {s.details.map((d) => (
                        <li
                          key={d}
                          className="flex gap-3 text-sm md:text-base text-ink/80 leading-snug"
                        >
                          <span className="mt-2 inline-block h-px w-3 flex-none bg-ink/40" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`${imageRight ? 'md:order-2' : 'md:order-1'} aspect-[4/5] w-full overflow-hidden bg-cream-300`}
                  >
                    {s.image ? (
                      <img
                        src={s.image}
                        alt={s.label}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="text-xs tracking-luxe uppercase text-ink/40">
                          Image: {s.label}
                        </span>
                      </div>
                    )}
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 py-24 md:py-32 text-center">
        <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-ink max-w-3xl mx-auto">
          A management plan, drawn precisely around your household.
        </h2>
        <div className="mt-12 inline-flex">
          <ArrowButton label="Start a conversation" to="/contact" />
        </div>
      </section>
    </>
  )
}
