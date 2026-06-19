'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import { useReveal } from '@/lib/useReveal'

// ── Swap this URL for your email service endpoint ──────────
// Options: Formspree (https://formspree.io/f/YOUR_ID)
//          Zapier webhook, Make.com webhook, EmailJS, etc.
const FORM_ENDPOINT = ''

export default function PricingPage() {
  useReveal()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = new FormData(form)

    const payload = {
      companyName:    data.get('companyName'),
      firstName:      data.get('firstName'),
      lastName:       data.get('lastName'),
      email:          data.get('email'),
      bioreactorType: data.get('bioreactorType'),
      microorganism:  data.get('microorganism'),
      services:       data.getAll('services'),
      hardware:       data.getAll('hardware'),
      comments:       data.get('comments'),
      submittedAt:    new Date().toISOString(),
    }

    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!res.ok) throw new Error('Request failed')
      } else {
        console.log('Form payload (no endpoint configured):', payload)
        await new Promise((r) => setTimeout(r, 600))
      }
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Nav />
      <main className="pricing-page">
        <div className="pricing-header">
          <p className="pricing-header__eyebrow reveal">Pricing &amp; Enquiry</p>
          <h1 className="pricing-header__headline reveal reveal-delay-1">
            To learn more about our pricing,<br />
            please fill out the form below<br />
            and we will get in touch.
          </h1>
          <p className="pricing-header__sub reveal reveal-delay-2">
            We&apos;ll match you with the right configuration and provide a detailed quote within 48 hours.
          </p>
        </div>

        <div className="pricing-form-wrap">
          {status === 'success' ? (
            <div style={{ padding: '40px 0' }}>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-mid)', marginBottom: 12 }}>Received</p>
              <p style={{ fontSize: 18, lineHeight: 1.6 }}>Thank you — we&apos;ve received your enquiry and will be in touch within 48 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>

              <div className="form-section reveal">
                <label className="form-label" htmlFor="companyName">Company Name</label>
                <input className="form-input" type="text" id="companyName" name="companyName" placeholder="Your organisation" required />
              </div>

              <div className="form-section reveal">
                <div className="form-row">
                  <div>
                    <label className="form-label" htmlFor="firstName">First Name</label>
                    <input className="form-input" type="text" id="firstName" name="firstName" placeholder="First" required />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="lastName">Last Name</label>
                    <input className="form-input" type="text" id="lastName" name="lastName" placeholder="Last" required />
                  </div>
                </div>
              </div>

              <div className="form-section reveal">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input className="form-input" type="email" id="email" name="email" placeholder="you@company.com" required />
              </div>

              <div className="form-section reveal">
                <label className="form-label">Type of Bioreactor Interest</label>
                <div className="form-radio-group">
                  {[
                    { value: 'benchtop', label: 'CR-01 Benchtop Module (0.5 – 2L)' },
                    { value: 'desktop',  label: 'CR-02 Desktop System (2 – 10L)' },
                    { value: 'both',     label: 'Both / Unsure — I&apos;d like guidance' },
                  ].map(({ value, label }) => (
                    <label className="form-radio-label" key={value}>
                      <input type="radio" name="bioreactorType" value={value} />
                      <span dangerouslySetInnerHTML={{ __html: label }} />
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-section reveal">
                <label className="form-label">Type of Microorganism / Cell Line</label>
                <div className="form-radio-group">
                  {['Bacteria', 'Mammalian cells', 'Yeast / Fungi', 'Algae', 'Other / Multiple'].map((label) => (
                    <label className="form-radio-label" key={label}>
                      <input type="radio" name="microorganism" value={label.toLowerCase().split(' ')[0]} />
                      {label}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-section reveal">
                <label className="form-label">Services &amp; Control Requirements</label>
                <div className="form-checkbox-group">
                  {[
                    { value: 'process-dev',      label: 'Process development support' },
                    { value: 'scale-up',          label: 'Scale-up consulting' },
                    { value: 'data-reporting',    label: 'Automated compliance data reporting' },
                    { value: 'remote-monitoring', label: 'Remote monitoring & control' },
                    { value: 'training',          label: 'Operator training' },
                  ].map(({ value, label }) => (
                    <label className="form-checkbox-label" key={value}>
                      <input type="checkbox" name="services" value={value} />
                      {label}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-section reveal">
                <label className="form-label">Special Hardware Requirements</label>
                <div className="form-checkbox-group">
                  {[
                    { value: 'custom-geometry', label: 'Custom vessel geometry (3D-printed to spec)' },
                    { value: 'gmp',             label: 'GMP-compatible materials' },
                    { value: 'containment',     label: 'Containment / biosafety level requirements' },
                    { value: 'integration',     label: 'Integration with existing lab automation' },
                    { value: 'sparging',        label: 'Custom sparging / aeration configurations' },
                  ].map(({ value, label }) => (
                    <label className="form-checkbox-label" key={value}>
                      <input type="checkbox" name="hardware" value={value} />
                      {label}
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-section reveal">
                <label className="form-label" htmlFor="comments">Additional Comments</label>
                <textarea
                  className="form-textarea"
                  id="comments"
                  name="comments"
                  placeholder="Tell us anything else about your process, timeline, or specific challenges…"
                  rows={5}
                />
              </div>

              <div className="form-submit reveal">
                <button
                  type="submit"
                  className="form-submit-btn"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : status === 'error' ? 'Error — try again' : 'Submit →'}
                </button>
                <p className="form-submit-note">We&apos;ll respond within 48 hours. No commitment required.</p>
              </div>

            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
