import { MarketingNav } from '@/components/layout/MarketingNav'
import { Footer } from '@/components/layout/Footer'

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MarketingNav />
      <main>{children}</main>
      <Footer />
    </>
  )
}
