import Image from 'next/image'
import { homeContent } from '@/content/home'
import { ScrollReveal } from './ScrollReveal'

export function IndustrySection() {
  const { industrySection } = homeContent

  return (
    <section
      className="bg-paper overflow-hidden"
      style={{ borderTop: '1px solid var(--color-border)' }}
      aria-labelledby="industry-heading"
    >
      <div className="grid md:grid-cols-2 min-h-[520px]">
        {/* Text */}
        <div className="flex items-center px-8 py-20 md:px-16 md:py-24">
          <ScrollReveal>
            <p className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-accent mb-6">
              Industry Focus
            </p>
            <h2
              id="industry-heading"
              className="font-display text-ink mb-8"
              style={{
                fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                fontVariationSettings: '"opsz" 72',
                whiteSpace: 'pre-line',
              }}
            >
              {industrySection.headline}
            </h2>
            <p className="font-body text-[17px] text-[var(--color-text-muted)] leading-relaxed mb-8 prose-body">
              {industrySection.body}
            </p>
            <p className="font-body font-[500] text-[13px] text-ink mb-3">Who we work with:</p>
            <ul className="flex flex-col gap-3">
              {industrySection.segments.map((seg) => (
                <li
                  key={seg}
                  className="flex items-start gap-3 font-body text-[16px] text-ink"
                >
                  <span
                    className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-accent"
                    aria-hidden="true"
                  />
                  {seg}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        {/* Photo */}
        <div className="relative min-h-[320px] md:min-h-0 order-first md:order-last">
          <Image
            src="/industry-resort.jpg"
            alt="Resort property with pool at dusk"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  )
}
