'use client'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useReveal } from '@/lib/useReveal'

export default function ManualPage() {
  useReveal()
  return (
    <>
      <Nav />
      <main className="manual-page">
        <p className="manual-page__tag reveal">Documentation</p>
        <h1 className="manual-page__headline reveal reveal-delay-1">Manual<br />Page</h1>
        <p className="manual-page__body reveal reveal-delay-2">
          Full product documentation and operator manuals for Chainreactor systems are coming soon.
          For immediate support, please contact us at{' '}
          <a href="mailto:hello@chainreactor.bio" style={{ textDecoration: 'underline' }}>
            hello@chainreactor.bio
          </a>.
        </p>
      </main>
      <Footer />
    </>
  )
}
