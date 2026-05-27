'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Industry', href: '/industry' },
  { label: 'About', href: '/about' },
  { label: 'Compliance', href: '/compliance' },
  { label: 'Contact', href: '/contact' },
]

export function MarketingNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`sticky top-0 z-50 h-[72px] bg-canvas transition-shadow duration-200 ${
          scrolled ? 'shadow-[0_1px_2px_rgba(10,22,40,0.04)]' : ''
        }`}
        style={{ borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="container-wide h-full items-center hidden md:grid md:grid-cols-[auto_1fr_auto]">
          {/* Wordmark — left */}
          <Link
            href="/"
            className="flex items-center gap-2.5 focus-visible:outline-accent"
            aria-label="Resort Recovery Solutions — home"
          >
            <Image src="/logo-mark.png" alt="" width={60} height={37} className="shrink-0" />
            <span className="font-display text-[20px] text-ink whitespace-nowrap">Resort Recovery Solutions, LLC</span>
          </Link>

          {/* Center nav */}
          <nav className="flex items-center justify-center gap-8" aria-label="Main navigation">
            {navLinks.map(({ label, href }) => {
              const active = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? 'page' : undefined}
                  className={`font-body font-[500] text-[14px] tracking-[0.01em] transition-colors duration-150 ${
                    active ? 'text-ink' : 'text-[var(--color-text-muted)] hover:text-ink'
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* Right: payment CTA */}
          <div
            className="flex items-center justify-end"
            style={{ borderLeft: '1px solid var(--color-border)', paddingLeft: '1.5rem' }}
          >
            <Link
              href="/payments"
              className="font-body font-[500] text-[14px] tracking-[0.01em] text-accent hover:underline underline-offset-4 whitespace-nowrap"
            >
              Consumer Payment Portal →
            </Link>
          </div>
        </div>

        {/* Mobile: flex row with wordmark + hamburger */}
        <div className="container-wide flex md:hidden h-full items-center">
          <Link
            href="/"
            className="flex items-center gap-2.5 focus-visible:outline-accent"
            aria-label="Resort Recovery Solutions — home"
          >
            <Image src="/logo-mark.png" alt="" width={60} height={37} className="shrink-0" />
            <span className="font-display text-[20px] text-ink whitespace-nowrap">Resort Recovery Solutions, LLC</span>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="ml-auto md:hidden p-2 text-ink"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-40 bg-canvas pt-[72px]"
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
        >
          <nav className="container-wide flex flex-col py-8 gap-1" aria-label="Mobile navigation">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="py-4 font-body font-[500] text-[18px] text-ink border-b border-border"
                aria-current={pathname === href ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/payments"
              className="py-4 font-body font-[500] text-[18px] text-accent"
            >
              Consumer Payment Portal →
            </Link>
          </nav>
        </div>
      )}
    </>
  )
}
