import type { Metadata } from 'next'
import Link from 'next/link'
import { aboutContent } from '@/content/about'
import { ScrollReveal } from '@/components/marketing/ScrollReveal'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Resort Recovery Solutions: twenty years of specialized timeshare debt recovery, based in San Diego. Meet the leadership team.',
}

export default function AboutPage() {
  const { hero, story, leadership, valuesHeadline, values, licenses } = aboutContent

  return (
    <>
      {/* Hero */}
      <section className="bg-ink py-24" aria-labelledby="about-hero-heading">
        <div className="container-wide max-w-4xl">
          <ScrollReveal>
            <p className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-accent mb-4">
              {hero.eyebrow}
            </p>
            <h1
              id="about-hero-heading"
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

      {/* Story */}
      <section
        className="bg-canvas py-24"
        style={{ borderBottom: '1px solid var(--color-border)' }}
        aria-labelledby="story-heading"
      >
        <div className="container-wide grid md:grid-cols-5 gap-16">
          <ScrollReveal className="md:col-span-2">
            <h2
              id="story-heading"
              className="font-display text-ink"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', fontVariationSettings: '"opsz" 48' }}
            >
              {story.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal className="md:col-span-3" delay={0.1}>
            <div className="flex flex-col gap-5">
              {story.paragraphs.map((p, i) => (
                <p key={i} className="font-body text-[17px] text-[var(--color-text-muted)] leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Leadership */}
      <section
        id="leadership"
        className="bg-paper py-24"
        aria-labelledby="leadership-heading"
      >
        <div className="container-wide">
          <ScrollReveal>
            <h2
              id="leadership-heading"
              className="font-display text-ink mb-16"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontVariationSettings: '"opsz" 72' }}
            >
              Leadership.
            </h2>
          </ScrollReveal>
          <div
            className="flex flex-col"
            style={{ borderTop: '1px solid var(--color-border)' }}
          >
            {leadership.map(({ name, title, bio }, i) => (
              <ScrollReveal key={name} delay={i * 0.06}>
                <div
                  className="grid md:grid-cols-5 gap-12 py-12"
                  style={{ borderBottom: '1px solid var(--color-border)' }}
                >
                  <div className="md:col-span-2">
                    <h3 className="font-body font-[600] text-[18px] text-ink mb-1">{name}</h3>
                    <p className="font-body text-[14px] text-accent tracking-[0.01em]">{title}</p>
                  </div>
                  <p className="md:col-span-3 font-body text-[17px] text-[var(--color-text-muted)] leading-relaxed self-start">
                    {bio}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="bg-canvas py-24"
        style={{ borderTop: '1px solid var(--color-border)' }}
        aria-labelledby="values-heading"
      >
        <div className="container-wide">
          <ScrollReveal>
            <h2
              id="values-heading"
              className="font-display text-ink mb-16"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontVariationSettings: '"opsz" 72' }}
            >
              {valuesHeadline}
            </h2>
          </ScrollReveal>
          <div
            className="grid md:grid-cols-3"
            style={{ borderTop: '1px solid var(--color-border)' }}
          >
            {values.map(({ title, body }, i) => (
              <ScrollReveal key={title} delay={i * 0.08}>
                <div
                  className="pt-8 pr-8 pb-8"
                  style={{ borderRight: i < values.length - 1 ? '1px solid var(--color-border)' : undefined }}
                >
                  <h3
                    className="font-display text-ink mb-3"
                    style={{ fontSize: '1.25rem', fontVariationSettings: '"opsz" 24' }}
                  >
                    {title}
                  </h3>
                  <p className="font-body text-[16px] text-[var(--color-text-muted)] leading-relaxed">{body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses */}
      <section
        className="bg-paper py-16"
        style={{ borderTop: '1px solid var(--color-border)' }}
        aria-labelledby="licenses-heading"
      >
        <div className="container-wide grid md:grid-cols-5 gap-12 items-start">
          <ScrollReveal className="md:col-span-2">
            <h2
              id="licenses-heading"
              className="font-display text-ink"
              style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontVariationSettings: '"opsz" 36' }}
            >
              {licenses.headline}
            </h2>
          </ScrollReveal>
          <ScrollReveal className="md:col-span-3" delay={0.1}>
            <p className="font-body text-[17px] text-[var(--color-text-muted)] leading-relaxed mb-4">
              {licenses.body}
            </p>
            <p className="font-body text-[15px] text-[var(--color-text-muted)]">{licenses.contact}</p>

          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
