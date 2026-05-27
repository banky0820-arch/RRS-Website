import Link from 'next/link'
import { homeContent } from '@/content/home'
import { Button } from '@/components/ui/button'
import { ScrollReveal } from './ScrollReveal'

export function CTABand() {
  const { cta } = homeContent

  return (
    <section
      className="bg-canvas py-24"
      style={{ borderTop: '1px solid var(--color-border)' }}
      aria-labelledby="cta-heading"
    >
      <div className="container-wide">
        <ScrollReveal>
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-3">
              <h2
                id="cta-heading"
                className="font-display text-ink"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontVariationSettings: '"opsz" 72' }}
              >
                {cta.headline}
              </h2>
              <p className="mt-4 font-body text-[17px] text-[var(--color-text-muted)] leading-relaxed max-w-xl">
                {cta.body}
              </p>
            </div>
            <div className="md:col-span-2 flex items-center">
              <Button asChild variant="primary" size="lg">
                <Link href={cta.cta.href}>{cta.cta.label}</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
