import type { Metadata } from 'next'
import Link from 'next/link'
import { paymentsContent } from '@/content/payments'
import { Button } from '@/components/ui/button'
import { ArrowLeft, MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Your Rights | Resort Recovery Solutions',
  description:
    'Know your rights under the Fair Debt Collection Practices Act (FDCPA). How to dispute a debt, request validation, and contact the CFPB.',
  robots: { index: false, follow: false },
}

export default function RightsPage() {
  const { rights } = paymentsContent

  return (
    <div className="min-h-screen bg-canvas">
      {/* Header */}
      <section className="py-16" aria-labelledby="rights-heading">
        <div className="container-wide max-w-3xl">
          <Link
            href="/payments"
            className="inline-flex items-center gap-2 font-body text-[14px] text-[var(--color-text-muted)] hover:text-ink transition-colors mb-8"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            Back to account options
          </Link>

          <h1
            id="rights-heading"
            className="font-display text-ink"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontVariationSettings: '"opsz" 48' }}
          >
            {rights.headline}
          </h1>
          <p className="mt-4 font-body text-[17px] text-[var(--color-text-muted)] leading-relaxed">
            {rights.intro}
          </p>

          {/* Mini-Miranda */}
          <div
            className="mt-8 p-5 bg-paper"
            style={{ border: '1px solid var(--color-border)' }}
            role="note"
            aria-label="Debt collection disclosure"
          >
            <p className="font-body text-[14px] text-[var(--color-text-muted)] leading-relaxed">
              {rights.miniMiranda}
            </p>
          </div>
        </div>
      </section>

      <div className="container-wide max-w-3xl pb-20">
        <div className="flex flex-col gap-0" style={{ borderTop: '1px solid var(--color-border)' }}>

          {/* FDCPA rights */}
          <section
            className="py-12"
            style={{ borderBottom: '1px solid var(--color-border)' }}
            aria-labelledby="fdcpa-heading"
          >
            <h2
              id="fdcpa-heading"
              className="font-display text-ink mb-4"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontVariationSettings: '"opsz" 36' }}
            >
              {rights.fdcpa.headline}
            </h2>
            <p className="font-body text-[17px] text-[var(--color-text-muted)] leading-relaxed mb-5">
              {rights.fdcpa.body}
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {rights.fdcpa.rights.map((r) => (
                <li key={r} className="flex items-start gap-3 font-body text-[16px] text-ink">
                  <span className="mt-2 shrink-0 w-1 h-1 rounded-full bg-accent" aria-hidden="true" />
                  {r}
                </li>
              ))}
            </ul>
            <div
              className="p-4 bg-paper"
              style={{ border: '1px solid var(--color-border)' }}
              role="note"
            >
              <p className="font-body text-[13px] text-[var(--color-text-muted)] leading-relaxed">
                {rights.fdcpa.disclosure}
              </p>
            </div>
          </section>

          {/* How to dispute */}
          <section
            className="py-12"
            style={{ borderBottom: '1px solid var(--color-border)' }}
            aria-labelledby="dispute-heading"
          >
            <h2
              id="dispute-heading"
              className="font-display text-ink mb-4"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontVariationSettings: '"opsz" 36' }}
            >
              {rights.dispute.headline}
            </h2>
            <p className="font-body text-[17px] text-[var(--color-text-muted)] leading-relaxed mb-4">
              {rights.dispute.intro}
            </p>

            {/* 30-day notice — prominent */}
            <div
              className="mb-8 p-5 bg-paper"
              style={{ borderLeft: '3px solid var(--color-accent)' }}
              role="note"
              aria-label="Important: 30-day dispute window"
            >
              <p className="font-body font-[500] text-[15px] text-ink leading-relaxed">
                {rights.dispute.thirtyDayNotice}
              </p>
            </div>

            {/* Dispute methods */}
            <div className="flex flex-col gap-8">
              {rights.dispute.methods.map((method) => (
                <div
                  key={method.method}
                  className="p-6 bg-paper"
                  style={{ border: '1px solid var(--color-border)' }}
                >
                  <h3 className="font-body font-[600] text-[16px] text-ink mb-3">{method.method}</h3>
                  <p className="font-body text-[15px] text-[var(--color-text-muted)] leading-relaxed mb-4">
                    {method.detail}
                  </p>

                  {method.address && (
                    <div className="flex gap-3 items-start mb-3">
                      <MapPin className="text-accent mt-0.5 shrink-0" size={14} aria-hidden="true" />
                      <address className="not-italic">
                        {method.address.map((line) => (
                          <p key={line} className="font-body font-[500] text-[15px] text-ink leading-relaxed">
                            {line}
                          </p>
                        ))}
                      </address>
                    </div>
                  )}

                  {method.note && (
                    <p className="font-body text-[13px] text-[var(--color-text-muted)] leading-relaxed italic">
                      {method.note}
                    </p>
                  )}

                  {method.phone && (
                    <div className="flex gap-3 items-center">
                      <Phone className="text-accent shrink-0" size={14} aria-hidden="true" />
                      <a
                        href={`tel:${method.phone.replace(/\D/g, '')}`}
                        className="font-body font-[500] text-[16px] text-ink hover:text-accent transition-colors"
                      >
                        {method.phone}
                      </a>
                      <span className="font-body text-[14px] text-[var(--color-text-muted)]">
                        {method.hours}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div
              className="mt-6 p-4 bg-paper"
              style={{ border: '1px solid var(--color-border)' }}
              role="note"
            >
              <p className="font-body text-[13px] text-[var(--color-text-muted)] leading-relaxed">
                {rights.dispute.disclosure}
              </p>
            </div>
          </section>

          {/* Stop contact */}
          <section
            className="py-12"
            style={{ borderBottom: '1px solid var(--color-border)' }}
            aria-labelledby="stop-contact-heading"
          >
            <h2
              id="stop-contact-heading"
              className="font-display text-ink mb-4"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontVariationSettings: '"opsz" 36' }}
            >
              {rights.stopContact.headline}
            </h2>
            <p className="font-body text-[17px] text-[var(--color-text-muted)] leading-relaxed mb-6">
              {rights.stopContact.body}
            </p>
            <div className="flex gap-3 items-start">
              <MapPin className="text-accent mt-0.5 shrink-0" size={14} aria-hidden="true" />
              <address className="not-italic">
                {rights.stopContact.address.map((line) => (
                  <p key={line} className="font-body font-[500] text-[15px] text-ink leading-snug">
                    {line}
                  </p>
                ))}
              </address>
            </div>
          </section>

          {/* CFPB */}
          <section className="py-12" aria-labelledby="cfpb-heading">
            <h2
              id="cfpb-heading"
              className="font-display text-ink mb-4"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontVariationSettings: '"opsz" 36' }}
            >
              {rights.cfpb.headline}
            </h2>
            <p className="font-body text-[17px] text-[var(--color-text-muted)] leading-relaxed">
              {rights.cfpb.body}
            </p>
          </section>
        </div>

        {/* Footer contact */}
        <div
          className="mt-4 pt-8"
          style={{ borderTop: '1px solid var(--color-border)' }}
        >
          <p className="font-body font-[500] text-[11px] tracking-[0.06em] uppercase text-[var(--color-text-muted)] mb-3">
            Questions about your account
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <a
              href={`tel:${rights.contact.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-2 font-body font-[500] text-[16px] text-ink hover:text-accent transition-colors"
            >
              <Phone size={14} aria-hidden="true" />
              {rights.contact.phone}
            </a>
            <span className="font-body text-[14px] text-[var(--color-text-muted)]">
              {rights.contact.hours}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
