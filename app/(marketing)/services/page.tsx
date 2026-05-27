import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { servicesContent } from '@/content/services'
import { ScrollReveal } from '@/components/marketing/ScrollReveal'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Pre-charge-off recovery, post-charge-off portfolio work, and portfolio assessment for the timeshare industry.',
}

export default function ServicesPage() {
  const { hero, services, process } = servicesContent

  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden py-32 min-h-[480px] flex items-center"
        aria-labelledby="services-hero-heading"
      >
        <Image
          src="/services-hero.jpg"
          alt=""
          fill
          priority
          className="object-cover object-right"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(10,22,40,0.92) 0%, rgba(6,16,30,0.70) 100%)' }}
          aria-hidden="true"
        />
        <div className="relative container-wide max-w-4xl">
          <ScrollReveal>
            <p className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-accent mb-4">
              {hero.eyebrow}
            </p>
            <h1
              id="services-hero-heading"
              className="font-display text-canvas"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontVariationSettings: '"opsz" 72', whiteSpace: 'pre-line' }}
            >
              {hero.headline}
            </h1>
            <p className="mt-6 font-body text-[18px] text-accent leading-relaxed max-w-2xl">
              {hero.subhead}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services detail */}
      <section className="bg-canvas py-24" aria-label="Service details">
        <div className="container-wide">
          <div className="flex flex-col gap-0">
            {services.map(({ id, eyebrow, title, description, capabilities }, i) => (
              <ScrollReveal key={id} delay={i * 0.05}>
                <article
                  id={id}
                  className="grid md:grid-cols-5 gap-12 py-16"
                  style={{ borderTop: '1px solid var(--color-border)' }}
                >
                  <div className="md:col-span-2">
                    <p className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-accent mb-3">
                      {eyebrow}
                    </p>
                    <h2
                      className="font-display text-ink"
                      style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontVariationSettings: '"opsz" 36' }}
                    >
                      {title}
                    </h2>
                  </div>
                  <div className="md:col-span-3">
                    <p className="font-body text-[17px] text-[var(--color-text-muted)] leading-relaxed mb-6">
                      {description}
                    </p>
                    <ul className="flex flex-col gap-2.5">
                      {capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-3 font-body text-[16px] text-ink">
                          <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-accent" aria-hidden="true" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        className="bg-paper py-24"
        style={{ borderTop: '1px solid var(--color-border)' }}
        aria-labelledby="process-heading"
      >
        <div className="container-wide">
          <ScrollReveal>
            <h2
              id="process-heading"
              className="font-display text-ink mb-16"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontVariationSettings: '"opsz" 72' }}
            >
              {process.headline}
            </h2>
          </ScrollReveal>
          <div
            className="grid md:grid-cols-4"
            style={{ borderTop: '1px solid var(--color-border)' }}
          >
            {process.steps.map(({ number, title, body }, i) => (
              <ScrollReveal key={number} delay={i * 0.08}>
                <div
                  className="pt-8 pr-8 pb-8"
                  style={{ borderRight: i < process.steps.length - 1 ? '1px solid var(--color-border)' : undefined }}
                >
                  <p
                    className="font-display text-ink mb-4 opacity-20"
                    style={{ fontSize: '3rem', fontVariationSettings: '"opsz" 48' }}
                    aria-hidden="true"
                  >
                    {number}
                  </p>
                  <h3 className="font-body font-[600] text-[17px] text-ink mb-3">{title}</h3>
                  <p className="font-body text-[15px] text-[var(--color-text-muted)] leading-relaxed">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-canvas py-16"
        style={{ borderTop: '1px solid var(--color-border)' }}
        aria-label="Contact call to action"
      >
        <div className="container-wide flex flex-col md:flex-row md:items-center gap-8">
          <p className="font-display text-ink" style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontVariationSettings: '"opsz" 36' }}>
            Ready to start a conversation?
          </p>
          <Button asChild variant="primary" size="lg">
            <Link href="/contact">Request a proposal</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
