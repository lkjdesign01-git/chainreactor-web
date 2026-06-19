import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chainreactor — The Flight Simulator for Biology',
  description: 'De-risk your bioprocess scale-up. Chainreactor replicates commercial-scale physics at benchtop.',
  openGraph: {
    title: 'Chainreactor — The Flight Simulator for Biology',
    description: 'De-risk your bioprocess scale-up.',
    siteName: 'Chainreactor',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
