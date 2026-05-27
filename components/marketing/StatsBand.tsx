import { homeContent } from '@/content/home'
import { ScrollReveal } from './ScrollReveal'

export function StatsBand() {
  const { stats } = homeContent

  return (
    <section
      className="bg-paper"
      style={{ borderBottom: '1px solid var(--color-border)' }}
      aria-label="Key statistics"
    >
      <div className="container-wide py-16">
        <dl
          className="grid grid-cols-2 md:grid-cols-3"
          style={{
            borderTop: '1px solid var(--color-border)',
            borderLeft: '1px solid var(--color-border)',
          }}
        >
          {stats.map(({ value, label }, i) => (
            <ScrollReveal key={label} delay={i * 0.08}>
              <div
                className="px-8 py-10"
                style={{ borderRight: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
              >
                <dt
                  className="font-display text-ink"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontVariationSettings: '"opsz" 72' }}
                >
                  {value}
                </dt>
                <dd className="mt-2 font-body text-[14px] text-[var(--color-text-muted)] leading-snug">
                  {label}
                </dd>
              </div>
            </ScrollReveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
