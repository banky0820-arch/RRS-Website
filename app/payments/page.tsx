import type { Metadata } from 'next'
import Link from 'next/link'
import { paymentsContent } from '@/content/payments'
import { PortalCards } from '@/components/payments/PortalCard'
import { RightsBanner } from '@/components/payments/RightsBanner'
import { Phone, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Make a Payment | Resort Recovery Solutions',
  description: 'Pay your account or set up a payment plan with Resort Recovery Solutions.',
  robots: { index: false, follow: false },
}

export default function PaymentsLandingPage() {
  const { landing } = paymentsContent
  const { contact } = landing

  return (
    <div className="min-h-screen bg-canvas">
      {/* Header */}
      <section className="py-20" aria-labelledby="payments-heading">
        <div className="container-wide max-w-3xl text-center mx-auto">
          <h1
            id="payments-heading"
            className="font-display text-ink"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontVariationSettings: '"opsz" 48' }}
          >
            {landing.headline}
          </h1>
          <p className="mt-4 font-body text-[17px] text-[var(--color-text-muted)] leading-relaxed max-w-xl mx-auto">
            {landing.subhead}
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="pb-12" aria-label="Payment options">
        <div className="container-wide">
          <PortalCards />
        </div>
      </section>

      {/* Rights banner */}
      <section className="pb-12" aria-label="Consumer rights">
        <div className="container-wide">
          <RightsBanner />
        </div>
      </section>

      {/* Contact info */}
      <section
        className="py-12"
        style={{ borderTop: '1px solid var(--color-border)' }}
        aria-label="Contact information"
      >
        <div className="container-wide max-w-2xl mx-auto">
          <dl className="grid md:grid-cols-3 gap-8">
            <div className="flex gap-3 items-start">
              <Phone className="text-accent mt-0.5 shrink-0" size={16} aria-hidden="true" />
              <div>
                <dt className="font-body font-[500] text-[11px] tracking-[0.06em] uppercase text-[var(--color-text-muted)] mb-1">
                  Phone
                </dt>
                <dd>
                  <a
                    href={`tel:${contact.phone.replace(/\D/g, '')}`}
                    className="font-body text-[16px] text-ink hover:text-accent transition-colors"
                  >
                    {contact.phone}
                  </a>
                </dd>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <Clock className="text-accent mt-0.5 shrink-0" size={16} aria-hidden="true" />
              <div>
                <dt className="font-body font-[500] text-[11px] tracking-[0.06em] uppercase text-[var(--color-text-muted)] mb-1">
                  Hours
                </dt>
                <dd className="font-body text-[15px] text-[var(--color-text-muted)]">{contact.hours}</dd>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <MapPin className="text-accent mt-0.5 shrink-0" size={16} aria-hidden="true" />
              <div>
                <dt className="font-body font-[500] text-[11px] tracking-[0.06em] uppercase text-[var(--color-text-muted)] mb-1">
                  Mail
                </dt>
                <dd className="font-body text-[15px] text-[var(--color-text-muted)] whitespace-pre-line">
                  {contact.address}
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </section>

      {/* Mini-Miranda */}
      <div
        className="py-6"
        style={{ borderTop: '1px solid var(--color-border)' }}
        role="note"
      >
        <div className="container-wide max-w-2xl mx-auto">
          <p className="font-body text-[12px] text-[var(--color-text-muted)] leading-relaxed">
            {landing.miniMiranda}
          </p>
        </div>
      </div>
    </div>
  )
}
