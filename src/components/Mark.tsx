import { cn } from '../lib/cn'

type Props = {
  className?: string
  variant?: 'dark' | 'light'
  orientation?: 'horizontal' | 'vertical'
}

export function Mark({ className, variant = 'dark', orientation = 'horizontal' }: Props) {
  const text = variant === 'dark' ? 'text-ink' : 'text-cream'
  const line = variant === 'dark' ? 'bg-ink/40' : 'bg-cream/40'
  const muted = variant === 'dark' ? 'text-ink/80' : 'text-cream/90'
  const mutedShadow = variant === 'light' ? { textShadow: '0 1px 6px rgba(0,0,0,0.45)' } : undefined

  if (orientation === 'vertical') {
    return (
      <div className={cn('flex items-start gap-4', text, className)}>
        <span className={cn('mt-1 h-24 w-px flex-none', line)} />
        <div
          className={cn('text-[10px] tracking-luxe uppercase', muted)}
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', ...(mutedShadow ?? {}) }}
        >
          Elite Estate Management · Los Angeles
        </div>
      </div>
    )
  }

  return (
    <div className={cn('inline-flex flex-col gap-2.5', text, className)}>
      <span className="font-display text-2xl leading-none tracking-tight">
        Elite Estate
      </span>
      <span className={cn('h-px w-10', line)} />
      <span
        className={cn('text-[10px] tracking-luxe uppercase leading-relaxed', muted)}
        style={mutedShadow}
      >
        Management
        <br />
        Los Angeles
      </span>
    </div>
  )
}
