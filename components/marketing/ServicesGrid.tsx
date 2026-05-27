import Link from 'next/link'
import { homeContent } from '@/content/home'
import { ScrollReveal } from './ScrollReveal'

export function ServicesGrid() {
  const { services } = homeContent

  return (
    <section className="bg-canvas py-24" aria-labelledby="services-heading">
      <div className="container-wide">
        <ScrollReveal>
          <p className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-accent mb-6">
            Services
          </p>
          <h2
            id="services-heading"
            className="font-display text-ink"
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontVariationSettings: '"opsz" 72', marginBottom: '3rem' }}
          >
            Full-cycle recovery.
          </h2>
        </ScrollReveal>

        <div
          className="grid md:grid-cols-2"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          {services.map(({ eyebrow, title, body, href }, i) => (
            <ScrollReveal key={title} delay={i * 0.1}>
              <article
                className={`py-10 ${i === 0 ? 'md:pr-10' : 'md:pl-10'}`}
                style={{
                  borderRight: i < services.length - 1 ? '1px solid var(--color-border)' : undefined,
                }}
              >
                <p className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-accent mb-3">
                  {eyebrow}
                </p>
                <h3
                  className="font-display text-ink mb-3"
                  style={{ fontSize: '1.75rem', fontVariationSettings: '"opsz" 36' }}
                >
                  {title}
                </h3>
                <p className="font-body text-[16px] text-[var(--color-text-muted)] leading-relaxed mb-6">
                  {body}
                </p>
                <Link
                  href={href}
                  className="font-body font-[500] text-[14px] text-ink hover:text-accent transition-colors"
                >
                  Learn more →
                </Link>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
