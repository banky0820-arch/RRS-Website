import { PaymentsNav } from '@/components/layout/PaymentsNav'

export default function PaymentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PaymentsNav />
      <main>{children}</main>
    </>
  )
}
