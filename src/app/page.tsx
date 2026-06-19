'use client'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Carousel from '@/components/Carousel'
import { LabDots, CommercialDots } from '@/components/ScaleDots'
import { useReveal } from '@/lib/useReveal'

const tickerItems = [
  { stat: '3', label: 'Inter-Modules' },
  { stat: '0', label: 'U-Components' },
  { stat: '$1.99', label: 'Compliance Cost' },
  { stat: '100%', label: 'Scale Fidelity' },
  { stat: '72hr', label: 'Setup Time' },
  { stat: '10L', label: 'Max Volume' },
  { stat: '±0.1°C', label: 'Temp Control' },
  { stat: '1000×', label: 'Scale Factor' },
]

export default function Home() {
  useReveal()

  return (
    <>
      <Nav />

      {/* HERO */}
      <section className="hero">
        <video className="hero__video" autoPlay muted loop playsInline>
          <source src="/Hero Video.mp4" type="video/mp4" />
        </video>
        <div className="hero__overlay" />
        <div className="hero__logo-mark">
          <Image src="/Logo.svg" alt="Chainreactor" width={260} height={60} priority />
        </div>
        <div className="hero__content">
          <p className="hero__tag">Chainreactor — Bioprocess Scale-Up</p>
          <h1 className="hero__headline">The flight simulator<br />for biology.</h1>
        </div>
      </section>

      {/* BOARDING */}
      <section id="technology">
        <div className="boarding">
          <h2 className="boarding__headline reveal">Would you board a plane with an 80% of crashing?</h2>
          <p className="boarding__sub reveal reveal-delay-1">
            Those are the odds biomanufacturers are up against every time they scale a process, because every batch is a bet against physics.
          </p>
          <div className="boarding__cols">
            <div className="boarding__col reveal">
              <p className="boarding__col-label">01 — The Journey</p>
              <h3 className="boarding__col-title">The Journey</h3>
              <p className="boarding__col-body">Moving to a commercial facility requires a 1,000x increase in volume. At that scale, cells behave very differently.</p>
            </div>
            <div className="boarding__col reveal reveal-delay-1">
              <p className="boarding__col-label">02 — The Turbulence</p>
              <h3 className="boarding__col-title">The Turbulence</h3>
              <p className="boarding__col-body">Oxygen gradients, shear stress, pH fluctuations — variables that don&apos;t exist at lab scale appear suddenly and catastrophically.</p>
            </div>
            <div className="boarding__col reveal reveal-delay-2">
              <p className="boarding__col-label">03 — The Crash</p>
              <h3 className="boarding__col-title">The Crash</h3>
              <p className="boarding__col-body">Most bioprocesses fail during scale-up. Years of R&amp;D, millions in capex — gone. The industry accepts this. We don&apos;t.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SCALE */}
      <section className="scale">
        <div className="scale__inner">
          <div className="scale__col reveal">
            <p className="scale__label">Lab Scale</p>
            <LabDots />
            <h3 className="scale__title">Lab Scale</h3>
            <p className="scale__body">A single bioreactor. Controlled, predictable, fully characterised at benchtop.</p>
          </div>
          <div className="scale__col reveal reveal-delay-1">
            <p className="scale__label">Commercial Scale</p>
            <CommercialDots />
            <h3 className="scale__title">Commercial Scale</h3>
            <p className="scale__body">Hundreds of modules. New physics. New failure modes. A completely different physical world.</p>
          </div>
          <div className="scale__divider" />
          <p className="scale__footer reveal">
            <strong>The same rules don&apos;t apply.</strong> A completely different physical world — and nobody has been preparing you for it. Until now.
          </p>
        </div>
      </section>

      {/* PRODUCT: Benchtop */}
      <section className="product" id="product">
        <div className="product__image">
          <Image src="/images/image 2045.jpg" alt="Chainreactor benchtop bioreactor" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="product__content">
          <p className="product__tag reveal">01 — Benchtop Module</p>
          <h2 className="product__headline reveal reveal-delay-1">Our 3D-printed modular benchtop faithfully replicates large-scale physics. The environment behaves just like the plant.</h2>
          <p className="product__body reveal reveal-delay-2">Every fluid dynamic, every mass transfer coefficient, every oxygen gradient — simulated at lab scale so you can de-risk scale-up before you commit.</p>
          <p className="product__spec reveal reveal-delay-3">CR-01 Benchtop Module — 2L working volume</p>
        </div>
      </section>

      {/* PRODUCT: Desktop full-width */}
      <section className="product product--full">
        <div className="product__image">
          <Image src="/images/Group 33.jpg" alt="Chainreactor large biological desktop" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="product__content">
          <p className="product__tag reveal">02 — Desktop System</p>
          <h2 className="product__headline reveal reveal-delay-1">Our large biological desktop provides the exact same environment as a commercial bioreactor. Total scale simulation at 10L.</h2>
          <p className="product__body reveal reveal-delay-2">True scale-up confidence, delivered at desktop footprint. No surprises when you reach the plant.</p>
        </div>
      </section>

      {/* STATS TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <div className="ticker__item" key={i}>
              <strong>{item.stat}</strong> {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* MATERIALS CAROUSEL */}
      <Carousel />

      {/* SPECS */}
      <section className="specs">
        <div className="specs__bg">
          <Image src="/images/BG Image 02.jpg" alt="" fill style={{ objectFit: 'cover' }} aria-hidden />
        </div>
        <div className="specs__overlay" />
        <div className="specs__inner">
          <h2 className="specs__headline reveal">Built for the rigour of commercial bioprocessing.</h2>
          <table className="specs__table reveal reveal-delay-1">
            <thead>
              <tr>
                <th>Specification</th>
                <th>Benchtop CR-01</th>
                <th>Desktop CR-02</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Working Volume', '0.5 – 2L', '2 – 10L'],
                ['Temperature Control', '±0.1°C', '±0.05°C'],
                ['Dissolved Oxygen', '0 – 100% sat.', '0 – 100% sat.'],
                ['pH Range', '4.0 – 9.0', '4.0 – 9.0'],
                ['Agitation', '50 – 1200 RPM', '10 – 800 RPM'],
                ['Scale Simulation Fidelity', 'Commercial scale', 'Industrial scale'],
                ['Footprint', 'Benchtop (0.5m²)', 'Desktop (1.2m²)'],
              ].map(([spec, a, b]) => (
                <tr key={spec}>
                  <td>{spec}</td>
                  <td>{a}</td>
                  <td>{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="comparison">
        <div className="comparison__inner">
          <h2 className="comparison__headline reveal">Print the vessel.<br />Skip the wait.<br />Land safely.</h2>
          <p className="comparison__sub reveal reveal-delay-1">Stop paying the scale-up tax. Chainreactor replaces the guesswork.</p>
          <div className="comparison__grid reveal reveal-delay-2">
            <div className="comparison__header-cell" />
            <div className="comparison__header-cell">Legacy Hardware</div>
            <div className="comparison__header-cell active">Chainreactor</div>
            {[
              ['Scale fidelity', 'Approximated', <><span className="check">✓</span> True simulation</>],
              ['Setup time', '6–12 weeks', '72 hours'],
              ['Cost of batch failure', '$500k–$5M', 'Predictable'],
              ['Custom vessel geometries', <><span className="cross">✕</span></>, <><span className="check">✓</span> 3D-printed to spec</>],
              ['Compliance-ready data', 'Manual exports', 'Automated reporting'],
              ['Physical footprint', 'Large / pilot plant', 'Benchtop / desktop'],
            ].map(([label, legacy, cr], i) => (
              <>
                <div className="comparison__label" key={`label-${i}`}>{label}</div>
                <div className="comparison__cell" key={`legacy-${i}`}>{legacy}</div>
                <div className="comparison__cell active" key={`cr-${i}`}>{cr}</div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="logos">
        <p className="logos__label reveal">Backed by &amp; working with</p>
        <div className="logos__grid">
          {['⬡ Founders Circle', '▲ OceanDown', '◈ CENTI', '✦ Positive Renewables', '⬢ ProFab'].map((name, i) => (
            <span className={`logos__grid-item reveal reveal-delay-${i}`} key={name}>{name}</span>
          ))}
        </div>
      </section>

      {/* CTA WAVE */}
      <section className="cta-wave">
        <div className="cta-wave__bg">
          <Image src="/images/BG Image.jpg" alt="" fill style={{ objectFit: 'cover' }} aria-hidden />
        </div>
        <div className="cta-wave__overlay" />
        <div className="cta-wave__content">
          <p className="cta-wave__eyebrow reveal">The future of bioprocessing</p>
          <h2 className="cta-wave__headline reveal reveal-delay-1">Building the future as one cycle.<br />For the first time, completely.</h2>
          <Link href="/pricing" className="cta-wave__btn reveal reveal-delay-2">Book a demo →</Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="final-cta__inner">
          <h2 className="final-cta__headline reveal">Ready to de-risk your scale-up?</h2>
          <div className="final-cta__right">
            <p className="final-cta__body reveal reveal-delay-1">Tell us about your process and we&apos;ll show you exactly how Chainreactor fits in — no commitment required.</p>
            <Link href="/pricing" className="final-cta__btn reveal reveal-delay-2">Get in touch →</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
