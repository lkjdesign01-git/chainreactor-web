'use client'
import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const FORM_ENDPOINT = ''

export default function PricingPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const data = new FormData(e.currentTarget)
    const payload = {
      fullName:      data.get('fullName'),
      email:         data.get('email'),
      company:       data.get('company'),
      bioreactor:    data.get('bioreactor'),
      microorganism: data.getAll('microorganism'),
      sensors:       data.getAll('sensors'),
      hardware:      data.getAll('hardware'),
      comments:      data.get('comments'),
    }
    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        })
        if (!res.ok) throw new Error()
      } else {
        await new Promise(r => setTimeout(r, 600))
      }
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Nav />
      <main className="pricing">
        <div className="pricing__inner">
          <h1 className="pricing__headline">
            To learn more about our pricing,<br />
            please fill out the form below and we will get in touch.
          </h1>

          <div className="pricing__card">
            {status === 'success' ? (
              <div style={{ padding: '40px 0' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-mid)', marginBottom: 12 }}>Received</p>
                <p style={{ fontSize: 16, lineHeight: 1.6 }}>Thank you — we&apos;ll be in touch within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>

                {/* Personal Details */}
                <div className="pf-row">
                  <p className="pf-section-label">Personal Details</p>
                  <div className="pf-fields">
                    <input className="pf-input" type="text" name="fullName" placeholder="Full Name..." required />
                    <input className="pf-input" type="email" name="email" placeholder="Email" required />
                    <input className="pf-input" type="text" name="company" placeholder="Company" />
                  </div>
                </div>

                {/* Type of bioreactor interest */}
                <div className="pf-row">
                  <p className="pf-section-label">Type of bioreactor interest</p>
                  <div className="pf-fields">
                    {[
                      'Benchtop (1–200L)',
                      'Pilot-scale (200–5000L)',
                      'Industrial-scale (>5000L)',
                    ].map(opt => (
                      <label className="pf-option" key={opt}>
                        <input type="radio" name="bioreactor" value={opt} />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Type of microorganisms/cells */}
                <div className="pf-row">
                  <p className="pf-section-label">Type of microorganisms/cells</p>
                  <div className="pf-fields">
                    {['Yeast', 'Bacteria', 'Animal cell', 'Fungi', 'Plant', 'Other'].map(opt => (
                      <label className="pf-option" key={opt}>
                        <input type="checkbox" name="microorganism" value={opt} />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Sensors and Control */}
                <div className="pf-row">
                  <p className="pf-section-label">Sensors and Control</p>
                  <div className="pf-fields">
                    {[
                      'Temperature',
                      'pH range',
                      'DO %',
                      'Turbidity',
                      'Foaming',
                      'O2/CO2 Exhaust gas analyzer',
                      'PCO2',
                      'Other (specify in additional comments)',
                    ].map(opt => (
                      <label className="pf-option" key={opt}>
                        <input type="checkbox" name="sensors" value={opt} />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Optional hardware/support requirements */}
                <div className="pf-row">
                  <p className="pf-section-label">Optional hardware/support requirements</p>
                  <div className="pf-fields">
                    {[
                      'No special requirements',
                      'Custom vessel geometry',
                      'GMP-compatible materials',
                      'Containment / biosafety requirements',
                      'Lab automation integration',
                    ].map(opt => (
                      <label className="pf-option" key={opt}>
                        <input type="checkbox" name="hardware" value={opt} />
                        <span>{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Additional Comments */}
                <div className="pf-row">
                  <p className="pf-section-label">Additional Comments</p>
                  <div className="pf-fields">
                    <textarea
                      className="pf-textarea"
                      name="comments"
                      rows={4}
                      placeholder="Any additional context about your process, timeline, or requirements…"
                    />
                    <label className="pf-option" style={{ marginTop: 16 }}>
                      <input type="checkbox" name="terms" required />
                      <span>I confirm I accept Terms and Privacy Policy</span>
                    </label>
                  </div>
                </div>

                {/* Submit */}
                <div className="pf-submit-row">
                  <button type="submit" className="pf-submit-btn" disabled={status === 'sending'}>
                    {status === 'sending' ? 'SENDING…' : status === 'error' ? 'ERROR — TRY AGAIN' : 'SUBMIT'}
                  </button>
                </div>

              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
