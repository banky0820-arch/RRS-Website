import Link from 'next/link'
import { CreditCard, CalendarDays } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { paymentsContent } from '@/content/payments'

const iconMap: Record<string, React.ElementType> = {
  CreditCard,
  CalendarDays,
}

export function PortalCards() {
  const { cards } = paymentsContent.landing

  return (
    <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
      {cards.map(({ id, icon, title, description, cta, href, isPhone, isExternal }) => {
        const Icon = iconMap[icon]
        return (
          <div
            key={id}
            className="bg-paper p-8 flex flex-col"
            style={{ border: '1px solid var(--color-border)' }}
          >
            {Icon && (
              <Icon
                className="text-accent mb-4"
                size={24}
                aria-hidden="true"
              />
            )}
            <h2 className="font-display text-ink mb-2" style={{ fontSize: '1.5rem', fontVariationSettings: '"opsz" 36' }}>
              {title}
            </h2>
            <p className="font-body text-[15px] text-[var(--color-text-muted)] leading-relaxed mb-6 grow">
              {description}
            </p>
            {isPhone ? (
              <p className="font-display text-ink" style={{ fontSize: '1.5rem', fontVariationSettings: '"opsz" 36' }}>
                <a href={href} className="hover:text-accent transition-colors">{cta}</a>
              </p>
            ) : isExternal ? (
              <Button asChild variant="primary">
                <a href={href} target="_blank" rel="noopener noreferrer">{cta}</a>
              </Button>
            ) : (
              <Button asChild variant="primary">
                <Link href={href}>{cta}</Link>
              </Button>
            )}
          </div>
        )
      })}
    </div>
  )
}
