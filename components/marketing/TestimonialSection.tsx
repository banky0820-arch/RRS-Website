import Image from 'next/image'
import { homeContent } from '@/content/home'
import { ScrollReveal } from './ScrollReveal'

export function TestimonialSection() {
  const { testimonial } = homeContent

  return (
    <section
      className="bg-paper overflow-hidden"
      style={{ borderTop: '1px solid var(--color-border)' }}
      aria-label="Client testimonial"
    >
      <div className="grid md:grid-cols-2 min-h-[480px]">
        {/* Photo */}
        <div className="relative min-h-[300px] md:min-h-0">
          <Image
            src="/testimonial-resort.jpg"
            alt="Resort pool overlooking the ocean"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Quote */}
        <div className="flex items-center px-10 py-16 md:px-16 md:py-20">
          <ScrollReveal>
            <figure>
              <blockquote>
                <p
                  className="font-display text-ink italic"
                  style={{
                    fontSize: 'clamp(1.25rem, 2.2vw, 1.875rem)',
                    fontVariationSettings: '"opsz" 36, "WONK" 1',
                    lineHeight: 1.35,
                    letterSpacing: '-0.015em',
                  }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-8">
                <p
                  className="font-body font-[500] text-[14px] text-[var(--color-text-muted)]"
                  style={{
                    borderTop: '1px solid var(--color-border)',
                    paddingTop: '1.25rem',
                  }}
                >
                  {testimonial.author}
                  <span className="block text-[12px] tracking-[0.04em] mt-0.5">
                    {testimonial.company}
                  </span>
                </p>
              </figcaption>
            </figure>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
