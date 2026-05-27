import Link from 'next/link'
import { paymentsContent } from '@/content/payments'

export function RightsBanner() {
  const { rightsBanner } = paymentsContent.landing

  return (
    <div
      className="max-w-2xl mx-auto bg-canvas flex items-start gap-4 px-6 py-5"
      style={{ borderLeft: '3px solid var(--color-accent)' }}
      role="note"
      aria-label="Consumer rights notice"
    >
      <p className="font-body text-[15px] text-ink leading-relaxed">
        {rightsBanner.text}{' '}
        <Link
          href={rightsBanner.href}
          className="text-accent font-[500] hover:underline underline-offset-4"
        >
          {rightsBanner.linkLabel}
        </Link>
      </p>
    </div>
  )
}
