import type { Metadata } from 'next'
import { legalContent } from '@/content/legal'
import { ScrollReveal } from '@/components/marketing/ScrollReveal'

export const metadata: Metadata = {
  title: 'Accessibility',
  description: 'Resort Recovery Solutions accessibility statement — WCAG 2.1 AA commitment.',
}

const { accessibility } = legalContent

export default function AccessibilityPage() {
  return (
    <>
      <section className="bg-ink py-20" aria-labelledby="a11y-heading">
        <div className="container-wide max-w-3xl">
          <ScrollReveal>
            <p className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-accent mb-4">
              {accessibility.eyebrow}
            </p>
            <h1
              id="a11y-heading"
              className="font-display text-canvas"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontVariationSettings: '"opsz" 48' }}
            >
              {accessibility.title}
            </h1>
            <p className="mt-4 font-body text-[14px] text-[rgba(250,247,242,0.5)]">
              Last updated: {accessibility.lastUpdated}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-canvas py-16">
        <div className="container-wide max-w-3xl">
          <ScrollReveal>
            <p className="font-body text-[17px] text-[var(--color-text-muted)] leading-relaxed mb-12">
              {accessibility.intro}
            </p>
          </ScrollReveal>

          <div className="flex flex-col" style={{ borderTop: '1px solid var(--color-border)' }}>
            {accessibility.sections.map(({ title, body }, i) => (
              <ScrollReveal key={title} delay={i * 0.04}>
                <div
                  className="py-10"
                  style={{ borderBottom: '1px solid var(--color-border)' }}
                >
                  <h2
                    className="font-display text-ink mb-4"
                    style={{ fontSize: '1.25rem', fontVariationSettings: '"opsz" 24' }}
                  >
                    {title}
                  </h2>
                  <p className="font-body text-[16px] text-[var(--color-text-muted)] leading-relaxed whitespace-pre-line">
                    {body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
