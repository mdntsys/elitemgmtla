import { motion } from 'framer-motion'
import { ArrowButton } from '../components/ArrowButton'
import { Mark } from '../components/Mark'
import { SectionDivider } from '../components/SectionDivider'
import { services } from '../data/services'

const HERO_IMG =
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2400&q=80'

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
                Services<br /><span className="italic">in Detail</span>
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
            The rarest luxury isn't square footage or finishes;
            it's <span className="italic">time</span>.
          </h2>
          <p className="mt-8 text-xs tracking-luxe uppercase text-ink/70">
            Our role is to give you more of it
          </p>
          <p className="mt-8 text-base md:text-lg leading-relaxed text-ink/75 max-w-xl">
            We manage the details that do not belong on your calendar: coordinating
            vendors, overseeing maintenance, preparing your home for arrival, and
            handling the unexpected with calm precision. Whether you are in residence
            or away, we act as a trusted extension of your household — keeping the
            property protected, prepared, and beautifully in sync with your life.
          </p>
        </motion.div>
      </section>

      <SectionDivider number="01" label="services" direction="down" />

      {/* WHERE WE BEGIN */}
      <section className="bg-cream-200/40 py-20 md:py-28">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10 text-center">
          <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-ink">
            Where We Begin
          </h2>
          <p className="mt-4 text-xs tracking-luxe uppercase text-ink/60">
            These are the building blocks — your needs shape the plan
          </p>
        </div>

        <div className="mx-auto mt-20 max-w-[1600px] px-6 md:px-10">
          <div className="grid grid-cols-1 gap-y-20 md:gap-y-28">
            {services.map((s, i) => (
              <motion.article
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="grid gap-10 md:grid-cols-[180px_1fr_1fr] md:gap-16 border-t border-ink/15 pt-12"
              >
                <div>
                  <p className="font-display text-ink/60 text-xl">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <p className="mt-3 text-xs tracking-luxe uppercase text-ink">
                    {s.label}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-2xl md:text-4xl leading-[1.15] text-ink">
                    {s.short}
                  </h3>
                  <p className="mt-6 text-base leading-relaxed text-ink/75">
                    {s.description}
                  </p>
                </div>
                <ul className="space-y-3 self-center">
                  {s.details.map((d) => (
                    <li
                      key={d}
                      className="flex gap-3 text-sm text-ink/80 leading-snug"
                    >
                      <span className="mt-2 inline-block h-px w-3 flex-none bg-ink/40" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
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
