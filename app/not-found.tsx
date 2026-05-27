import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-canvas flex flex-col items-center justify-center text-center px-6">
      <p className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-accent mb-4">
        404
      </p>
      <h1
        className="font-display text-ink mb-4"
        style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontVariationSettings: '"opsz" 48' }}
      >
        Page not found.
      </h1>
      <p className="font-body text-[17px] text-[var(--color-text-muted)] mb-8 max-w-md">
        The page you requested doesn&rsquo;t exist or has moved.
      </p>
      <Button asChild variant="primary">
        <Link href="/">Return home</Link>
      </Button>
    </div>
  )
}
