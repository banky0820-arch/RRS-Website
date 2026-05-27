import type { Metadata } from 'next'
import Link from 'next/link'
import { industryContent } from '@/content/industry'
import { ScrollReveal } from '@/components/marketing/ScrollReveal'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Industry',
  description:
    'Resort Recovery Solutions works exclusively in the timeshare and vacation ownership industry — resort developers, HOAs, and exchange networks.',
}

export default function IndustryPage() {
  const { hero, overview, segments, differentiators, cta } = industryContent

  return (
    <>
      {/* Hero */}
      <section className="bg-ink py-24" aria-labelledby="industry-hero-heading">
        <div className="container-wide max-w-4xl">
          <ScrollReveal>
            <p className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-accent mb-4">
              {hero.eyebrow}
            </p>
            <h1
              id="industry-hero-heading"
              className="font-display text-canvas"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontVariationSettings: '"opsz" 72', whiteSpace: 'pre-line' }}
            >
              {hero.headline}
            </h1>
            <p className="mt-6 font-body text-[18px] text-[rgba(250,247,242,0.7)] leading-relaxed max-w-2xl">
              {hero.subhead}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section
        className="bg-canvas py-24"
        style={{ borderBottom: '1px solid var(--color-border)' }}
        aria-labelledby="overview-heading"
      >
        <div className="container-wide grid md:grid-cols-5 gap-16">
          <ScrollReveal className="md:col-span-2">
            <h2
              id="overview-heading"
              className="font-display text-ink"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontVariationSettings: '"opsz" 48' }}
            >
              {overview.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal className="md:col-span-3" delay={0.1}>
            <div className="flex flex-col gap-5">
              {overview.paragraphs.map((p, i) => (
                <p key={i} className="font-body text-[17px] text-[var(--color-text-muted)] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Segments */}
      <section className="bg-paper py-24" aria-labelledby="segments-heading">
        <div className="container-wide">
          <ScrollReveal>
            <h2
              id="segments-heading"
              className="font-display text-ink mb-16"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontVariationSettings: '"opsz" 72' }}
            >
              Who we serve.
            </h2>
          </ScrollReveal>
          <div className="flex flex-col" style={{ borderTop: '1px solid var(--color-border)' }}>
            {segments.map(({ eyebrow, title, body }, i) => (
              <ScrollReveal key={title} delay={i * 0.06}>
                <div
                  className="grid md:grid-cols-5 gap-12 py-12"
                  style={{ borderBottom: '1px solid var(--color-border)' }}
                >
                  <div className="md:col-span-2">
                    <p className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-accent mb-2">
                      {eyebrow}
                    </p>
                    <h3
                      className="font-display text-ink"
                      style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', fontVariationSettings: '"opsz" 28' }}
                    >
                      {title}
                    </h3>
                  </div>
                  <p className="md:col-span-3 font-body text-[17px] text-[var(--color-text-muted)] leading-relaxed self-center">
                    {body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        className="bg-canvas py-16"
        style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
        aria-label="Key metrics"
      >
        <div className="container-wide">
          <dl className="grid md:grid-cols-3" style={{ borderLeft: '1px solid var(--color-border)' }}>
            {differentiators.map(({ stat, label, detail }, i) => (
              <ScrollReveal key={label} delay={i * 0.08}>
                <div
                  className="px-8 py-8"
                  style={{ borderRight: '1px solid var(--color-border)' }}
                >
                  <dt
                    className="font-display text-ink mb-1"
                    style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontVariationSettings: '"opsz" 72' }}
                  >
                    {stat}
                  </dt>
                  <dd className="font-body text-[15px] text-ink font-[500] mb-1">{label}</dd>
                  <dd className="font-body text-[14px] text-[var(--color-text-muted)]">{detail}</dd>
                </div>
              </ScrollReveal>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-canvas py-16" aria-label="Contact call to action">
        <div className="container-wide flex flex-col md:flex-row md:items-center gap-8">
          <div>
            <p className="font-display text-ink" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', fontVariationSettings: '"opsz" 36' }}>
              {cta.headline}
            </p>
            <p className="mt-3 font-body text-[16px] text-[var(--color-text-muted)]">{cta.body}</p>
          </div>
          <div className="shrink-0">
            <Button asChild variant="primary" size="lg">
              <Link href={cta.cta.href}>{cta.cta.label}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
