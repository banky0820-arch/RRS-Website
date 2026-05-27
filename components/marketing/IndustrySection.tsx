import { homeContent } from '@/content/home'
import { ScrollReveal } from './ScrollReveal'

export function IndustrySection() {
  const { industrySection } = homeContent

  return (
    <section
      className="bg-paper py-24"
      style={{ borderTop: '1px solid var(--color-border)' }}
      aria-labelledby="industry-heading"
    >
      <div className="container-wide">
        <div className="grid md:grid-cols-5 gap-16 items-start">
          {/* 60%: headline */}
          <ScrollReveal className="md:col-span-3">
            <p className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-accent mb-6">
              Industry Focus
            </p>
            <h2
              id="industry-heading"
              className="font-display text-ink"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontVariationSettings: '"opsz" 72',
                whiteSpace: 'pre-line',
              }}
            >
              {industrySection.headline}
            </h2>
          </ScrollReveal>

          {/* 40%: body + list */}
          <ScrollReveal className="md:col-span-2" delay={0.1}>
            <p className="font-body text-[17px] text-[var(--color-text-muted)] leading-relaxed mb-8">
              {industrySection.body}
            </p>
            <p className="font-body font-[500] text-[13px] text-ink mb-3">Who we work with:</p>
            <ul className="flex flex-col gap-3">
              {industrySection.segments.map((seg) => (
                <li
                  key={seg}
                  className="flex items-start gap-3 font-body text-[16px] text-ink"
                >
                  <span
                    className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {seg}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
