import * as React from 'react'
import { cn } from '@/lib/utils'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  error?: string
  options: string[]
  placeholder?: string
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, options, placeholder, ...props }, ref) => {
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={inputId}
          className="font-body font-[500] text-[11px] tracking-[0.06em] uppercase text-[var(--color-text-muted)]"
        >
          {label}
        </label>
        <select
          id={inputId}
          ref={ref}
          aria-describedby={error ? `${inputId}-error` : undefined}
          aria-invalid={error ? true : undefined}
          className={cn(
            'block w-full border-b border-border bg-transparent py-2.5 text-[17px] font-body text-text transition-colors focus:border-ink focus:outline-none appearance-none',
            error && 'border-red-600',
            className
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {error && (
          <p id={`${inputId}-error`} className="text-[13px] text-red-600" role="alert">
            {error}
          </p>
        )}
      </div>
    )
  }
)
Select.displayName = 'Select'

export { Select }
