import Image from 'next/image'
import Link from 'next/link'

const footerColumns = [
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Leadership', href: '/about#leadership' },
      { label: 'Compliance', href: '/compliance' },
      { label: 'Licensing', href: '/compliance#licensing' },
    ],
  },
  {
    heading: 'Services',
    links: [
      { label: 'Pre-Charge-Off Recovery', href: '/services#pre-chargeoff' },
      { label: 'Post-Charge-Off Recovery', href: '/services#post-chargeoff' },
      { label: 'Portfolio Assessment', href: '/services#consulting' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Accessibility', href: '/accessibility' },
    ],
  },
  {
    heading: 'Contact',
    links: [
      { label: 'Request a Proposal', href: '/contact' },
      { label: '8755 Aero Drive, Suite 304', href: null },
      { label: 'San Diego, CA 92123', href: null },
    ],
  },
]

export function Footer() {
  return (
    <footer
      className="bg-ink text-canvas"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="container-wide py-16">
        {/* Top: wordmark + payment link */}
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between pb-10"
          style={{ borderBottom: '1px solid rgba(250,247,242,0.12)' }}
        >
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label="Resort Recovery Solutions — home"
          >
            <Image src="/logo-mark.png" alt="" width={60} height={37} className="shrink-0 invert" />
            <span className="font-display text-[22px] text-canvas">Resort Recovery Solutions, LLC</span>
          </Link>

          <div
            className="mt-6 md:mt-0 flex items-center gap-4 md:pl-8"
            style={{ borderTop: '1px solid rgba(250,247,242,0.12)', paddingTop: '1.5rem' }}
          >
            <span className="font-body text-[14px] text-[rgba(250,247,242,0.6)]">
              Consumer?
            </span>
            <div style={{ borderLeft: '1px solid rgba(250,247,242,0.2)', paddingLeft: '1rem' }}>
              <Link
                href="/payments"
                className="font-body font-[500] text-[14px] text-accent hover:underline underline-offset-4"
              >
                Make a Payment →
              </Link>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pt-10">
          {footerColumns.map(({ heading, links }) => (
            <div key={heading}>
              <p className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-[rgba(250,247,242,0.5)] mb-4">
                {heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    {href ? (
                      <Link
                        href={href}
                        className="font-body text-[14px] text-[rgba(250,247,242,0.75)] hover:text-canvas transition-colors"
                      >
                        {label}
                      </Link>
                    ) : (
                      <span className="font-body text-[14px] text-[rgba(250,247,242,0.5)]">
                        {label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* License disclosure band */}
      <div
        className="bg-[#060e1a]"
        style={{ borderTop: '1px solid rgba(250,247,242,0.08)' }}
      >
        <div className="container-wide py-6">
          <p className="font-body text-[12px] text-[rgba(250,247,242,0.4)] leading-relaxed max-w-4xl">
            Resort Recovery Solutions, LLC is a licensed third-party debt collection agency. Collection activity is conducted in states where we hold active licenses. Licensed by the California Department of Financial Protection and Innovation (DFPI). DCLA #10222-99. This communication may constitute an attempt to collect a debt. ©{' '}
            {new Date().getFullYear()} Resort Recovery Solutions, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
