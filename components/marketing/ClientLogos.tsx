import { ScrollReveal } from './ScrollReveal'

const placeholderLogos = [
  { id: 1, label: 'Resort Group A' },
  { id: 2, label: 'Resort Group B' },
  { id: 3, label: 'Resort Group C' },
  { id: 4, label: 'Resort Group D' },
  { id: 5, label: 'Resort Group E' },
  { id: 6, label: 'Resort Group F' },
]

function LogoPlaceholder({ label }: { label: string }) {
  return (
    <div
      className="flex items-center justify-center h-14 w-full px-4"
      style={{ border: '1px solid var(--color-border)' }}
      aria-label={label}
      role="img"
    >
      {/* Geometric placeholder: wordmark-style initials */}
      <span
        className="font-body font-[500] text-[11px] tracking-[0.1em] uppercase text-[var(--color-text-muted)] select-none"
        aria-hidden="true"
      >
        {label.replace('Resort Group ', 'RG ')}
      </span>
    </div>
  )
}

export function ClientLogos() {
  return (
    <section
      className="bg-canvas py-16"
      style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}
      aria-labelledby="clients-heading"
    >
      <div className="container-wide">
        <ScrollReveal>
        </ScrollReveal>
        <ScrollReveal>
          <ul
            className="grid grid-cols-3 md:grid-cols-6 gap-3"
            aria-label="Client logos"
          >
            {placeholderLogos.map(({ id, label }) => (
              <li key={id}>
                <LogoPlaceholder label={label} />
              </li>
            ))}
          </ul>
        </ScrollReveal>
      </div>
    </section>
  )
}
