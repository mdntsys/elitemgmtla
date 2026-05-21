import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Logo } from './Logo'
import { cn } from '../lib/cn'

const links = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled ? 'bg-cream/90 backdrop-blur-md' : 'bg-cream',
      )}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <Logo />

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                cn(
                  'text-xs tracking-luxe uppercase transition-opacity',
                  isActive ? 'text-ink opacity-100' : 'text-ink opacity-70 hover:opacity-100',
                )
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setOpen((s) => !s)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={cn('h-px w-7 bg-ink transition-transform', open && 'translate-y-2 rotate-45')} />
          <span className={cn('h-px w-7 bg-ink transition-opacity', open && 'opacity-0')} />
          <span className={cn('h-px w-7 bg-ink transition-transform', open && '-translate-y-1.5 -rotate-45')} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-ink/10 bg-cream">
          <nav className="flex flex-col px-6 py-6 gap-5">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'text-sm tracking-luxe uppercase',
                    isActive ? 'text-ink' : 'text-ink/70',
                  )
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
