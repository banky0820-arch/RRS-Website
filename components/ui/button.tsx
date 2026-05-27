import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 font-body font-[500] text-[12px] tracking-[0.06em] uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-accent text-paper px-6 py-3 hover:bg-[#375a3b] active:bg-[#2e4d31]',
        ghost:
          'border border-ink text-ink px-6 py-3 hover:bg-ink hover:text-canvas',
        'ghost-canvas':
          'border border-canvas text-canvas px-6 py-3 hover:bg-canvas hover:text-ink',
        link:
          'text-accent underline-offset-4 hover:underline p-0',
        'link-muted':
          'text-[var(--color-text-muted)] underline-offset-4 hover:text-ink p-0',
      },
      size: {
        default: '',
        sm: 'text-[11px] px-4 py-2',
        lg: 'text-[13px] px-8 py-4',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
