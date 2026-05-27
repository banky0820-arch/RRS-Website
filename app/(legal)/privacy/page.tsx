import type { Metadata } from 'next'
import { legalContent } from '@/content/legal'
import { ScrollReveal } from '@/components/marketing/ScrollReveal'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Resort Recovery Solutions privacy policy — how we collect, use, and protect your information.',
}

export default function PrivacyPage() {
  const { privacy } = legalContent

  return (
    <LegalPage
      eyebrow={privacy.eyebrow}
      title={privacy.title}
      lastUpdated={privacy.lastUpdated}
      intro={privacy.intro}
      sections={privacy.sections}
    />
  )
}

function LegalPage({
  eyebrow,
  title,
  lastUpdated,
  intro,
  sections,
}: {
  eyebrow: string
  title: string
  lastUpdated: string
  intro: string
  sections: { title: string; body: string }[]
}) {
  return (
    <>
      <section className="bg-ink py-20" aria-labelledby="legal-heading">
        <div className="container-wide max-w-3xl">
          <ScrollReveal>
            <p className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-accent mb-4">
              {eyebrow}
            </p>
            <h1
              id="legal-heading"
              className="font-display text-canvas"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontVariationSettings: '"opsz" 48' }}
            >
              {title}
            </h1>
            <p className="mt-4 font-body text-[14px] text-[rgba(250,247,242,0.5)]">
              Last updated: {lastUpdated}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-canvas py-16">
        <div className="container-wide max-w-3xl">
          <ScrollReveal>
            <p className="font-body text-[17px] text-[var(--color-text-muted)] leading-relaxed mb-12">
              {intro}
            </p>
          </ScrollReveal>

          <div className="flex flex-col" style={{ borderTop: '1px solid var(--color-border)' }}>
            {sections.map(({ title, body }, i) => (
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
