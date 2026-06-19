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
      firstName:    data.get('firstName'),
      lastName:     data.get('lastName'),
      email:        data.get('email'),
      speciesType:  data.get('speciesType'),
      microorganism:data.get('microorganism'),
      sensors:      data.getAll('sensors'),
      hardware:     data.getAll('hardware'),
      comments:     data.get('comments'),
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

          {status === 'success' ? (
            <div className="pricing__success">
              <p className="pf-section-label">RECEIVED</p>
              <p style={{ fontSize: 16, lineHeight: 1.6, marginTop: 12 }}>
                Thank you — we&apos;ve received your enquiry and will be in touch within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>

              {/* Personal Details */}
              <div className="pf-row">
                <p className="pf-section-label">Personal Details</p>
                <div className="pf-fields">
                  <div className="pf-two-col">
                    <div className="pf-field">
                      <label className="pf-field-label" htmlFor="firstName">First Name</label>
                      <input className="pf-input" type="text" id="firstName" name="firstName" required />
                    </div>
                    <div className="pf-field">
                      <label className="pf-field-label" htmlFor="lastName">Last Name</label>
                      <input className="pf-input" type="text" id="lastName" name="lastName" required />
                    </div>
                  </div>
                  <div className="pf-field" style={{ marginTop: 28 }}>
                    <label className="pf-field-label" htmlFor="email">Email</label>
                    <input className="pf-input" type="email" id="email" name="email" required />
                  </div>
                </div>
              </div>

              {/* Type of Species of Interest */}
              <div className="pf-row">
                <p className="pf-section-label">Type of Species of Interest</p>
                <div className="pf-fields">
                  {[
                    'Aerobic (Yeast / Mold / Bacteria)',
                    'Anaerobic',
                    'Mammalian cells',
                    'Plant cells',
                    'Other',
                  ].map(opt => (
                    <label className="pf-option" key={opt}>
                      <input type="radio" name="speciesType" value={opt} />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Type of microorganisms/media */}
              <div className="pf-row">
                <p className="pf-section-label">Type of microorganisms/media</p>
                <div className="pf-fields">
                  {[
                    'Bacteria',
                    'Yeast',
                    'CHO',
                    'HEK',
                    'Other',
                  ].map(opt => (
                    <label className="pf-option" key={opt}>
                      <input type="radio" name="microorganism" value={opt} />
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
                    'Standard pH / DO / Temperature',
                    'Custom sensor package',
                    'Remote monitoring & control',
                    'Automated data reporting',
                    'Agitation control',
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
                  <label className="pf-option" style={{ marginTop: 20 }}>
                    <input type="checkbox" name="terms" required />
                    <span>I confirm I accept Terms and Privacy Policy</span>
                  </label>
                </div>
              </div>

              {/* Submit */}
              <div className="pf-submit-row">
                <button
                  type="submit"
                  className="pf-submit-btn"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'SENDING…' : status === 'error' ? 'ERROR — TRY AGAIN' : 'SUBMIT'}
                </button>
              </div>

            </form>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
