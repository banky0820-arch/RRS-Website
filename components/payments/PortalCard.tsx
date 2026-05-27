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
      {cards.map(({ id, icon, title, description, items, footer, cta, href, isPhone, isExternal }: any) => {
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
            <h2 className="font-display text-ink mb-3" style={{ fontSize: '1.5rem', fontVariationSettings: '"opsz" 36' }}>
              {title}
            </h2>

            {/* Simple description */}
            {description ? (
              <p className="font-body text-[15px] text-[var(--color-text-muted)] leading-relaxed mb-6 grow">
                {description}
              </p>
            ) : null}

            {/* Bullet list of options */}
            {items && items.length > 0 && (
              <ul className="flex flex-col gap-2.5 mb-4 grow">
                {items.map((item: string) => (
                  <li key={item} className="flex items-start gap-2.5 font-body text-[14px] text-[var(--color-text-muted)] leading-snug">
                    <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-accent" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {/* Footer note */}
            {footer && (
              <p className="font-body text-[13px] text-[var(--color-text-muted)] leading-relaxed mb-6 italic">
                {footer}
              </p>
            )}

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
