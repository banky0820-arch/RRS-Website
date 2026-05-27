'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { contactContent } from '@/content/contact'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const { form } = contactContent

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        className="py-12 px-8 bg-paper"
        style={{ border: '1px solid var(--color-border)' }}
        role="status"
        aria-live="polite"
      >
        <p className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-accent mb-3">
          Inquiry received
        </p>
        <p className="font-display text-ink" style={{ fontSize: '1.5rem', fontVariationSettings: '"opsz" 28' }}>
          {form.successMessage}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate aria-label={form.headline}>
      <div className="mb-8">
        <p className="font-body font-[500] text-[11px] tracking-[0.08em] uppercase text-accent mb-2">
          New inquiry
        </p>
        <h2
          className="font-display text-ink"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontVariationSettings: '"opsz" 36' }}
        >
          {form.headline}
        </h2>
        <p className="mt-2 font-body text-[15px] text-[var(--color-text-muted)]">{form.subhead}</p>
      </div>

      <div className="flex flex-col gap-8">
        <div className="grid md:grid-cols-2 gap-8">
          <Input label={form.fields.company} name="company" autoComplete="organization" required />
          <Input label={form.fields.name} name="name" autoComplete="name" required />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Input label={form.fields.title} name="title" autoComplete="organization-title" />
          <Input label={form.fields.email} type="email" name="email" autoComplete="email" required />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <Input label={form.fields.phone} type="tel" name="phone" autoComplete="tel" />
          <Select
            label={form.fields.portfolioType}
            name="portfolio-type"
            options={form.fields.portfolioTypeOptions}
            placeholder="Select one…"
          />
        </div>
        <Textarea label={form.fields.message} name="message" />

        <div>
          <Button type="submit" variant="primary" size="lg">
            {form.fields.submit}
          </Button>
        </div>
      </div>
    </form>
  )
}
