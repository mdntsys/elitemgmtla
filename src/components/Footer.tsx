import { Link } from 'react-router-dom'
import { Marquee } from './Marquee'

export function Footer() {
  return (
    <footer className="mt-24">
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-28">
          <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs tracking-luxe uppercase text-cream/60 mb-6">Reach out</p>
              <h2 className="font-display text-5xl md:text-7xl leading-[1.05]">
                Begin the<br />
                conversation.
              </h2>
            </div>
            <a
              href="mailto:sales@elitemgmtla.com"
              className="font-display text-2xl md:text-3xl text-cream hover:opacity-80 transition-opacity"
            >
              sales@elitemgmtla.com
            </a>
          </div>
        </div>
      </section>

      <Marquee
        phrases={[
          'Elevate your home. Live without limits.',
          'Documented. Scheduled. Anticipated.',
          'Every detail accounted for. Nothing left to chance.',
        ]}
      />

      <section className="bg-ink-soft text-cream/70">
        <div className="mx-auto max-w-[1600px] px-6 py-10 md:px-10 md:py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <p className="text-xs tracking-luxe uppercase">
              © {new Date().getFullYear()} Elite Estate Management LA
            </p>
            <nav className="flex flex-wrap gap-8">
              <Link to="/about" className="text-xs tracking-luxe uppercase hover:text-cream transition-colors">About</Link>
              <Link to="/services" className="text-xs tracking-luxe uppercase hover:text-cream transition-colors">Services</Link>
              <Link to="/contact" className="text-xs tracking-luxe uppercase hover:text-cream transition-colors">Contact</Link>
            </nav>
            <p className="text-xs tracking-luxe uppercase">
              Los Angeles, California
            </p>
          </div>
        </div>
      </section>
    </footer>
  )
}
