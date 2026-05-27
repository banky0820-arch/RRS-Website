import type { Metadata } from 'next'
import Image from 'next/image'
import { contactContent } from '@/content/contact'
import { ScrollReveal } from '@/components/marketing/ScrollReveal'
import { ContactForm } from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Request a proposal or reach Resort Recovery Solutions. All inquiries handled confidentially with same-business-day response.',
}

export default function ContactPage() {
  const { hero, info } = contactContent

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-32 min-h-[480px] flex items-center" aria-labelledby="contact-hero-heading">
        <Image
          src="/contact-hero.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(10,22,40,0.90) 0%, rgba(6,16,30,0.72) 100%)' }}
          aria-hidden="true"
        />
        <div className="relative container-wide max-w-4xl">
          <ScrollReveal>
            <p className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-accent mb-4">
              {hero.eyebrow}
            </p>
            <h1
              id="contact-hero-heading"
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

      {/* Form + info */}
      <section className="bg-canvas py-24" aria-label="Contact form and information">
        <div className="container-wide grid md:grid-cols-5 gap-16 items-start">
          {/* Form — 60% */}
          <div className="md:col-span-3">
            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>
          </div>

          {/* Info — 40% */}
          <ScrollReveal className="md:col-span-2" delay={0.12}>
            <div className="flex flex-col gap-8 pt-2">
              <div>
                <p className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-2">
                  {info.address.label}
                </p>
                {info.address.lines.map((line) => (
                  <p key={line} className="font-body text-[16px] text-ink leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>

              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                <p className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-2">
                  {info.phone.label}
                </p>
                <a
                  href={`tel:${info.phone.value.replace(/\D/g, '')}`}
                  className="font-body text-[16px] text-ink hover:text-accent transition-colors"
                >
                  {info.phone.value}
                </a>
                <p className="mt-1 font-body text-[13px] text-[var(--color-text-muted)]">{info.phone.note}</p>
              </div>

              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                <p className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-2">
                  {info.email.label}
                </p>
                <a
                  href={`mailto:${info.email.value}`}
                  className="font-body text-[16px] text-ink hover:text-accent transition-colors"
                >
                  {info.email.value}
                </a>
              </div>

              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                <p className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-2">
                  {info.compliance.label}
                </p>
                <a
                  href={`mailto:${info.compliance.value}`}
                  className="font-body text-[16px] text-ink hover:text-accent transition-colors"
                >
                  {info.compliance.value}
                </a>
              </div>

              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem' }}>
                <p className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-[var(--color-text-muted)] mb-1">
                  Hours
                </p>
                <p className="font-body text-[15px] text-[var(--color-text-muted)]">{info.hours}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
