import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { homeContent } from '@/content/home'

export function Hero() {
  const { hero } = homeContent

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background photo */}
      <Image
        src="/hero-resort.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(10,22,40,0.88) 0%, rgba(6,16,30,0.72) 100%)' }}
        aria-hidden="true"
      />
      <div className="relative container-wide w-full py-24">
        <div className="max-w-4xl">
          <h1
            className="font-display font-display-hero text-canvas"
            style={{
              fontSize: 'clamp(3.5rem, 8vw, 6rem)',
              fontVariationSettings: '"opsz" 144',
              whiteSpace: 'pre-line',
            }}
          >
            {hero.headline}
          </h1>

          <p
            className="mt-8 font-body text-[rgba(250,247,242,0.7)]"
            style={{ fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', maxWidth: '42rem', lineHeight: 1.6 }}
          >
            {hero.subhead}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild variant="primary" size="lg">
              <Link href={hero.ctaPrimary.href}>{hero.ctaPrimary.label}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div
          className="w-px h-8 bg-[rgba(250,247,242,0.25)]"
          aria-hidden="true"
        />
        <span className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-[rgba(250,247,242,0.4)]">
          Scroll
        </span>
      </div>
    </section>
  )
}
