import { Link } from 'react-router-dom'

type Props = { variant?: 'dark' | 'light' }

export function Logo({ variant = 'dark' }: Props) {
  const color = variant === 'dark' ? 'text-ink' : 'text-cream'
  return (
    <Link to="/" className={`flex items-center gap-3 ${color}`} aria-label="Elite Estate Management LA, Home">
      <svg viewBox="0 0 48 48" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M6 22 L24 8 L42 22" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 22 L10 40 L38 40 L38 22" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="24" cy="30" r="3" />
        <path d="M24 33 L24 40" />
      </svg>
      <span className="font-display text-xl leading-none tracking-tight">
        Elite Estate Management
        <span className="ml-1 text-[0.62em] tracking-luxe uppercase opacity-70">LA</span>
      </span>
    </Link>
  )
}
