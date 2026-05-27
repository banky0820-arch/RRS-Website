import { MarketingNav } from '@/components/layout/MarketingNav'
import { Footer } from '@/components/layout/Footer'

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MarketingNav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
