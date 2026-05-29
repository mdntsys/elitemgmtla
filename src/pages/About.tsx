import { motion } from 'framer-motion'
import { SectionDivider } from '../components/SectionDivider'

const HERO_IMG =
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=80'
const INTERIOR_IMG =
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2400&q=80'

const VALUES = [
  {
    label: 'Intentional',
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
      'We do not wait for problems to surface. The work that matters most is the work you never see: issues caught and resolved before they reach you.',
  },
  {
    label: 'Care',
    body:
      'Every home in our care is held as if it were our own. The household, the property, and the lives inside receive the attention we would give ours.',
  },
]

const TEAM = [
  {
    name: 'Noah Alvarez',
    role: 'Founder & Principal',
    image: '/team/noah.jpg',
    bio: 'Founded Elite to bring real rigor to private estate management. Sets the standard the team is held to, and the principal’s first call.',
  },
  {
    name: 'Mary Jackson',
    role: 'Estate Director',
    image: '',
    bio: 'Two decades inside private households. Runs daily operations with precision that catches what others miss before it reaches the principal.',
  },
  {
    name: 'Nicolas Perez',
    role: 'Director of Client Experience',
    image: '',
    bio: 'The bridge between principal and team. Translates each client’s standards into the way the home is run, every day, without exception.',
  },
  {
    name: 'Brenda Lozano',
    role: 'Client Concierge',
    image: '',
    bio: 'Lives in the details. Schedules, vendors, and the personal requests that turn a residence into a household.',
  },
  {
    name: 'Michael Alvarez',
    role: 'VP of Strategic Planning',
    image: '',
    bio: 'Plans the long horizon. Budgets, staffing, succession, and the moves that matter most three years out.',
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
                  Concierge attention.<br />Selfless service.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10 pt-24 md:pt-32">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <h2 className="font-display text-3xl md:text-5xl leading-[1.1] text-ink">
              Our mission is simple: deliver uncompromising peace of mind by
              managing every detail of our clients' estates with integrity,
              discretion, and excellence.
            </h2>
            <p className="mt-10 text-base md:text-lg leading-relaxed text-ink/75 max-w-xl">
              We exist for principals whose attention is in demand elsewhere:
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
          <img
            src="/about-mission.jpg"
            alt="A laptop, navy leather planner, espresso, and orchid on a travertine desk by a garden window"
            className="aspect-[4/5] w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      <SectionDivider label="our values" direction="down" />

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
            "A private home should feel like a quiet system that anticipates you,
            adapts to you, and asks nothing of you in return."
          </p>
        </div>
      </section>

      {/* TEAM */}
      <section className="w-full px-6 md:px-10 py-24 md:py-32">
        <div>
          <p className="text-xs tracking-luxe uppercase text-ink/60">
            Leadership
          </p>
          <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05] text-ink">
            The Elite Team
          </h2>
        </div>

        <div className="mt-16 grid gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-5 md:gap-6">
          {TEAM.map((member) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="group relative aspect-[4/5] w-full overflow-hidden bg-cream-300"
            >
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs tracking-luxe uppercase text-ink/40">
                    {member.name}
                  </span>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/65 to-black/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                <h3 className="font-display text-lg md:text-xl text-white leading-tight">
                  {member.name}
                </h3>
                <p className="mt-1 text-[10px] tracking-luxe uppercase text-white/70">
                  {member.role}
                </p>
                <p className="mt-3 text-[12px] md:text-[13px] leading-relaxed text-white/90 md:text-white/30 transition-colors duration-500 md:group-hover:text-white/95">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider label="begin a conversation" to="/contact" direction="right" />
    </>
  )
}
