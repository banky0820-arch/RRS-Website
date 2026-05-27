import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { complianceContent } from '@/content/compliance'
import { ScrollReveal } from '@/components/marketing/ScrollReveal'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Compliance',
  description:
    'FDCPA, Regulation F, 35-state licensing, and e-OSCAR participation. Compliance is the foundation of every RRS engagement.',
}

export default function CompliancePage() {
  const { hero, overview, frameworks, program, contact } = complianceContent

  return (
    <>
      {/* Hero — dark */}
      <section className="relative overflow-hidden py-32 min-h-[480px] flex items-center" aria-labelledby="compliance-hero-heading">
        <Image
          src="/compliance-hero.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(10,22,40,0.90) 0%, rgba(6,16,30,0.75) 100%)' }}
          aria-hidden="true"
        />
        <div className="relative container-wide max-w-4xl">
          <ScrollReveal>
            <p className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-accent mb-4">
              {hero.eyebrow}
            </p>
            <h1
              id="compliance-hero-heading"
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
            <p className="font-body text-[17px] text-[var(--color-text-muted)] leading-relaxed">{overview.body}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Frameworks */}
      <section
        id="licensing"
        className="bg-paper py-24"
        aria-labelledby="frameworks-heading"
      >
        <div className="container-wide">
          <ScrollReveal>
            <h2
              id="frameworks-heading"
              className="font-display text-ink mb-16"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontVariationSettings: '"opsz" 72' }}
            >
              Regulatory frameworks.
            </h2>
          </ScrollReveal>
          <div className="flex flex-col" style={{ borderTop: '1px solid var(--color-border)' }}>
            {frameworks.map(({ eyebrow, title, body }, i) => (
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
                  <p className="md:col-span-3 font-body text-[17px] text-[var(--color-text-muted)] leading-relaxed self-start">
                    {body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Program structure */}
      <section
        className="bg-canvas py-24"
        style={{ borderTop: '1px solid var(--color-border)' }}
        aria-labelledby="program-heading"
      >
        <div className="container-wide grid md:grid-cols-5 gap-16">
          <ScrollReveal className="md:col-span-2">
            <h2
              id="program-heading"
              className="font-display text-ink"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontVariationSettings: '"opsz" 48' }}
            >
              {program.headline}
            </h2>
          </ScrollReveal>
          <div className="md:col-span-3 flex flex-col" style={{ borderTop: '1px solid var(--color-border)' }}>
            {program.items.map(({ title, body }, i) => (
              <ScrollReveal key={title} delay={i * 0.05}>
                <div className="py-6" style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <h3 className="font-body font-[600] text-[16px] text-ink mb-1.5">{title}</h3>
                  <p className="font-body text-[15px] text-[var(--color-text-muted)] leading-relaxed">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        className="bg-paper py-16"
        style={{ borderTop: '1px solid var(--color-border)' }}
        aria-labelledby="compliance-contact-heading"
      >
        <div className="container-wide grid md:grid-cols-5 gap-12 items-start">
          <ScrollReveal className="md:col-span-2">
            <h2
              id="compliance-contact-heading"
              className="font-display text-ink"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontVariationSettings: '"opsz" 36' }}
            >
              {contact.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal className="md:col-span-3" delay={0.1}>
            <p className="font-body text-[17px] text-[var(--color-text-muted)] leading-relaxed mb-4">{contact.body}</p>
            <p className="font-body text-[16px] text-ink mb-1">
              <a href={`mailto:${contact.email}`} className="hover:text-accent transition-colors">
                {contact.email}
              </a>
            </p>
            <p className="font-body text-[15px] text-[var(--color-text-muted)]">{contact.address}</p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
