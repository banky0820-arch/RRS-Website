import Link from 'next/link'
import { homeContent } from '@/content/home'
import { ScrollReveal } from './ScrollReveal'
import { Button } from '@/components/ui/button'

export function ComplianceBand() {
  const { compliance } = homeContent

  return (
    <section
      className="bg-ink py-24"
      aria-labelledby="compliance-heading"
    >
      <div className="container-wide">
        <div className="grid md:grid-cols-5 gap-16 items-start">
          <ScrollReveal className="md:col-span-3">
            <p className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-accent mb-6">
              Compliance
            </p>
            <h2
              id="compliance-heading"
              className="font-display text-canvas"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontVariationSettings: '"opsz" 72' }}
            >
              {compliance.headline}
            </h2>
          </ScrollReveal>

          <ScrollReveal className="md:col-span-2" delay={0.1}>
            <p className="font-body text-[17px] text-[rgba(250,247,242,0.7)] leading-relaxed mb-8">
              {compliance.body}
            </p>

            {/* Certification tags */}
            <ul className="flex flex-wrap gap-2 mb-8" aria-label="Certifications">
              {compliance.certifications.map((cert) => (
                <li
                  key={cert}
                  className="font-body font-[500] text-[11px] tracking-[0.04em] text-canvas px-3 py-1.5"
                  style={{ border: '1px solid rgba(250,247,242,0.2)' }}
                >
                  {cert}
                </li>
              ))}
            </ul>

            <Button asChild variant="ghost-canvas">
              <Link href="/compliance">View compliance details →</Link>
            </Button>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
