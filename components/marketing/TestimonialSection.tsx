import { homeContent } from '@/content/home'
import { ScrollReveal } from './ScrollReveal'

export function TestimonialSection() {
  const { testimonial } = homeContent

  return (
    <section
      className="bg-paper py-24"
      style={{ borderTop: '1px solid var(--color-border)' }}
      aria-label="Client testimonial"
    >
      <div className="container-wide">
        <ScrollReveal>
          <figure className="max-w-3xl mx-auto text-center">
            <blockquote>
              <p
                className="font-display text-ink italic"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontVariationSettings: '"opsz" 36',
                  lineHeight: 1.3,
                }}
              >
                &ldquo;{testimonial.quote}&rdquo;
              </p>
            </blockquote>
            <figcaption className="mt-8">
              <p
                className="font-body font-[500] text-[14px] text-[var(--color-text-muted)]"
                style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.5rem', display: 'inline-block', paddingInline: '2rem' }}
              >
                {testimonial.author}
                <span className="block text-[12px] tracking-[0.04em] mt-0.5">{testimonial.company}</span>
              </p>
            </figcaption>
          </figure>
        </ScrollReveal>
      </div>
    </section>
  )
}
