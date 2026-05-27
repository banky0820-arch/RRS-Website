import type { Metadata } from 'next'
import { Hero } from '@/components/marketing/Hero'
import { StatsBand } from '@/components/marketing/StatsBand'
import { ServicesGrid } from '@/components/marketing/ServicesGrid'
import { IndustrySection } from '@/components/marketing/IndustrySection'
import { ComplianceBand } from '@/components/marketing/ComplianceBand'
import { TestimonialSection } from '@/components/marketing/TestimonialSection'
import { CTABand } from '@/components/marketing/CTABand'

export const metadata: Metadata = {
  title: 'Resort Recovery Solutions | Timeshare Debt Recovery',
  description:
    'Specialized third-party debt collection for the resort and timeshare industry. FDCPA compliant, licensed in 35 states. $340M+ recovered.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ServicesGrid />
      <IndustrySection />
      <ComplianceBand />
      <TestimonialSection />
      <CTABand />
    </>
  )
}
