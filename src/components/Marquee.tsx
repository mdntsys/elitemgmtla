type Props = { phrases: string[]; repeats?: number }

export function Marquee({ phrases, repeats = 4 }: Props) {
  const items = Array.from({ length: repeats }, (_, i) => i)
  return (
    <div className="overflow-hidden bg-ink-soft py-5 border-y border-cream/10">
      <div className="marquee-track flex w-max gap-12 whitespace-nowrap">
        {items.map((cycle) =>
          phrases.map((phrase, i) => (
            <span
              key={`${cycle}-${i}`}
              className="font-display text-cream text-2xl md:text-3xl"
            >
              {phrase}
              <span className="mx-12 text-cream/40">|</span>
            </span>
          )),
        )}
      </div>
    </div>
  )
}
