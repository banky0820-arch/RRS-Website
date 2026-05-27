import Image from 'next/image'
import Link from 'next/link'

export function PaymentsNav() {
  return (
    <header
      className="sticky top-0 z-50 h-[72px] bg-canvas"
      style={{ borderBottom: '1px solid var(--color-border)' }}
    >
      <div className="container-wide flex h-full items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="Resort Recovery Solutions — home"
        >
          <Image src="/logo-mark.png" alt="" width={60} height={37} className="shrink-0" />
          <span className="font-display text-[20px] text-ink">Resort Recovery Solutions, LLC</span>
        </Link>

        <Link
          href="/"
          className="font-body font-[500] text-[14px] tracking-[0.01em] text-[var(--color-text-muted)] hover:text-ink transition-colors"
        >
          Return to main site
        </Link>
      </div>
    </header>
  )
}
