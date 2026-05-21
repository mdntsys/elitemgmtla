import { ArrowButton } from './ArrowButton'

type Props = {
  number: string
  label: string
  to?: string
  href?: string
  direction?: 'right' | 'down'
}

export function SectionDivider({ number, label, to, href, direction = 'down' }: Props) {
  return (
    <div className="mx-auto flex max-w-[1600px] items-center gap-6 px-6 py-12 md:px-10 md:py-20">
      <span className="font-display text-sm md:text-base text-ink/70">{number}</span>
      <span className="h-px flex-1 bg-ink/20" />
      <ArrowButton label={label} to={to} href={href} direction={direction} variant="dark" />
    </div>
  )
}
