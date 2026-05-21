import { Link } from 'react-router-dom'
import { ChevronRight, ChevronDown } from 'lucide-react'
import { cn } from '../lib/cn'

type Direction = 'right' | 'down'
type Variant = 'dark' | 'light'

type Props = {
  label: string
  to?: string
  href?: string
  onClick?: () => void
  direction?: Direction
  variant?: Variant
  className?: string
  labelClassName?: string
}

export function ArrowButton({
  label,
  to,
  href,
  onClick,
  direction = 'right',
  variant = 'dark',
  className,
  labelClassName,
}: Props) {
  const Icon = direction === 'down' ? ChevronDown : ChevronRight
  const isDark = variant === 'dark'

  const inner = (
    <span
      className={cn(
        'group inline-flex items-center gap-4 transition-opacity hover:opacity-80',
        className,
      )}
    >
      <span
        className={cn(
          'text-xs tracking-luxe uppercase',
          isDark ? 'text-ink' : 'text-cream',
          labelClassName,
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          'flex h-11 w-11 items-center justify-center rounded-full transition-transform group-hover:scale-105',
          isDark ? 'bg-ink text-cream' : 'bg-cream text-ink',
        )}
      >
        <Icon className="h-4 w-4" strokeWidth={1.5} />
      </span>
    </span>
  )

  if (to) return <Link to={to}>{inner}</Link>
  if (href) return <a href={href}>{inner}</a>
  return (
    <button type="button" onClick={onClick}>
      {inner}
    </button>
  )
}
