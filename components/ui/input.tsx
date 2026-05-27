import * as React from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => {
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={inputId}
          className="font-body font-[500] text-[11px] tracking-[0.06em] uppercase text-[var(--color-text-muted)]"
        >
          {label}
        </label>
        <input
          id={inputId}
          ref={ref}
          aria-describedby={error ? `${inputId}-error` : undefined}
          aria-invalid={error ? true : undefined}
          className={cn(
            'block w-full border-b border-border bg-transparent py-2.5 text-[17px] font-body text-text transition-colors placeholder:text-[var(--color-text-muted)] placeholder:opacity-50 focus:border-ink focus:outline-none',
            error && 'border-red-600',
            className
          )}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="text-[13px] text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
