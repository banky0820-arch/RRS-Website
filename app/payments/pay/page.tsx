import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Make a Payment | Resort Recovery Solutions',
  description: 'Secure payment portal for Resort Recovery Solutions accounts.',
  robots: { index: false, follow: false },
}

export default function PayPage() {
  redirect('https://intelligentnegotiator.com/resortrecoveryllc/')
}
