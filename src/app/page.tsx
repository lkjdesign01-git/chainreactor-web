'use client'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Carousel from '@/components/Carousel'
import { useReveal } from '@/lib/useReveal'

const tickerItems = ['SHIPPING NOW', '2 PATENT FAMILIES FILED', 'EU / UK / US DEPLOYMENTS']

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
          <p className="hero__tag">CHAINREACTOR</p>
          <h1 className="hero__headline">The flight simulator for biology</h1>
          <p className="hero__sub">Chainreactors pressurizable bioreactors combine physical AI, process engineering and patented 3D-printing.</p>
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
              <p className="boarding__col-label">01</p>
              <h3 className="boarding__col-title">The Journey</h3>
              <p className="boarding__col-body">Moving to a commercial facility requires a <strong>1,000x increase</strong> in volume. At that scale, cells behave very differently.</p>
            </div>
            <div className="boarding__col reveal reveal-delay-1">
              <p className="boarding__col-label">02</p>
              <h3 className="boarding__col-title">The Turbulance</h3>
              <p className="boarding__col-body">Mixing time stretches from a perfect 5 seconds in the lab to a stagnant <strong>60–120 seconds</strong> in a giant tank.</p>
            </div>
            <div className="boarding__col reveal reveal-delay-2">
              <p className="boarding__col-label">03</p>
              <h3 className="boarding__col-title">The Crash</h3>
              <p className="boarding__col-body">Localized physical stress starves and suffocates cells — yields plummet by <strong>20% to 70%.</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* MICROENVIRONMENT */}
      <section className="scale">
        <p className="scale__section-label">MICROENVIRONMENT</p>
        <div className="scale__inner">
          <div className="scale__col reveal">
            <div className="scale__illustration">
              <Image src="/images/Lab Scale.svg" alt="Lab Scale illustration" width={104} height={163} style={{ height: '180px', width: 'auto' }} />
            </div>
            <h3 className="scale__title">Lab Scale</h3>
            <p className="scale__stat">5 SECONDS</p>
            <p className="scale__stat-sub">UNIFORM</p>
          </div>
          <div className="scale__col reveal reveal-delay-1">
            <div className="scale__illustration">
              <Image src="/images/Commercial Scale.svg" alt="Commercial Scale illustration" width={237} height={332} style={{ height: '220px', width: 'auto' }} />
            </div>
            <h3 className="scale__title">Commercial Scale</h3>
            <p className="scale__stat">60-120 SECONDS</p>
            <p className="scale__stat-sub">GRADIENTS</p>
          </div>
          <div className="scale__divider" />
          <div className="scale__footer reveal">
            <div className="scale__footer-left">
              <p>The same cells in the same media. <strong>A completely different physical world.</strong></p>
            </div>
            <div className="scale__footer-right">
              <p>$4B of capital has been lost to that failure to scale.</p>
              <p>Chainreactor is the flight simulator for biotech: hardware and software that lets you design, predict and test before you scale, saving millions in R&D.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT: Benchtop */}
      <section className="product" id="product">
        <div className="product__image">
          <Image src="/images/image 2045.jpg" alt="Chainreactor benchtop bioreactor" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="product__content">
          <h2 className="product__headline reveal">Our 3D printed modular benchtop bioreactors replicate industrial scale physics. The bench behaves just like the plant.</h2>
        </div>
      </section>

      {/* PRODUCT: Large Biological Model */}
      <section className="product product--lbm">
        <div className="product__lbm-visual">
          <div className="lbm__ring">
            <span className="lbm__point lbm__point--top"><span className="lbm__num">01</span>More customers</span>
            <span className="lbm__point lbm__point--right"><span className="lbm__num">02</span>More runs</span>
            <span className="lbm__point lbm__point--br"><span className="lbm__num">03</span>More high-quality data</span>
            <span className="lbm__point lbm__point--bl"><span className="lbm__num">04</span>Better predictions</span>
            <span className="lbm__point lbm__point--left"><span className="lbm__num">05</span>Better outcomes</span>
          </div>
        </div>
        <div className="product__content">
          <h2 className="product__headline reveal">Our Large Biological Model predicts the exact cell journey inside a commercial facility on a computer.</h2>
          <p className="product__body reveal reveal-delay-1">Test at small scale, know at full scale.</p>
        </div>
      </section>

      {/* STATS TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <div className="ticker__item" key={i}>{item}</div>
          ))}
        </div>
      </div>

      {/* MATERIALS CAROUSEL */}
      <Carousel />

      {/* KEY FEATURES */}
      <section className="features">
        <div className="features__bg">
          <Image src="/images/BG Image 03.jpg" alt="" fill style={{ objectFit: 'cover' }} aria-hidden />
        </div>
        <div className="features__overlay" />
        <div className="features__inner reveal">
          <p className="features__label">KEY FEATURES</p>
          <div className="features__row">
            <p className="features__num">01</p>
            <p className="features__name">OUR REACTORS</p>
            <ul className="features__list">
              <li>2 – 2000 liters</li>
              <li>One easy subscription</li>
              <li>Desktop / Cloud Control / Scriptable / Iterative</li>
            </ul>
          </div>
          <div className="features__row">
            <p className="features__num">02</p>
            <p className="features__name">VESSELS</p>
            <ul className="features__list">
              <li>Polymer vessel sizes from 250ml to 2k liters</li>
              <li>Stirred tank, Airlift and Perfusion Bioreactors</li>
              <li>Machine vision soft sensors</li>
            </ul>
          </div>
          <div className="features__row">
            <p className="features__num">03</p>
            <p className="features__name">CONTROL SYSTEM</p>
            <ul className="features__list">
              <li>Peristaltic pumps</li>
              <li>Cascade control</li>
              <li>Heating and cooling system included</li>
              <li>Standard sensors: PH, DO, Temperature</li>
              <li>Agitation Control</li>
              <li>Touchscreen Interface</li>
              <li>Fully scriptable processes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="comparison">
        <div className="comparison__image">
          <Image src="/images/Group 33.jpg" alt="Chainreactor bioreactor system" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="comparison__inner">
          <h2 className="comparison__headline reveal">Print the vessel.<br />Skip the wait.<br />Land safely.</h2>
          <div className="comparison__grid reveal reveal-delay-1">
            <div className="comparison__header-cell">Legacy Hardware</div>
            <div className="comparison__header-cell active">CHAINREACTOR</div>
            {[
              ['12–24 month lead times', 'Days to deployment'],
              ['Fixed geometry', 'Fully custom'],
              ['Supply chain dependency', 'Printed locally'],
              ['Revalidation at scale', 'Geometry continuity'],
            ].map(([legacy, cr], i) => (
              <>
                <div className="comparison__cell" key={`legacy-${i}`}>{legacy}</div>
                <div className="comparison__cell active" key={`cr-${i}`}>{cr}</div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="logos">
        <p className="logos__label reveal">BACKED BY:</p>
        <div className="logos__grid">
          <span className="logos__grid-item reveal">Técnico Lisboa</span>
          <span className="logos__grid-item reveal reveal-delay-1">newdawn</span>
          <span className="logos__grid-item reveal reveal-delay-2">centi</span>
          <span className="logos__grid-item reveal reveal-delay-3">Positive Ma+terials</span>
        </div>
      </section>

      {/* CTA WAVE */}
      <section className="cta-wave">
        <div className="cta-wave__bg">
          <Image src="/images/BG Image.jpg" alt="" fill style={{ objectFit: 'cover' }} aria-hidden />
        </div>
        <div className="cta-wave__overlay" />
        <div className="cta-wave__content">
          <h2 className="cta-wave__headline reveal">Building the picks and shovels for the biotech revolution.</h2>
          <div className="cta-wave__right">
            <p className="cta-wave__body reveal reveal-delay-1">Based in Lisbon, Portugal, our founding team has extensive experience in biotechnology and additive manufacturing, and includes the founders of two successful startups.</p>
            <p className="cta-wave__body reveal reveal-delay-2">Blending hands-on production capabilities and advanced automation skills, we&apos;re driven by the determination to help solve some of humanity&apos;s most complex problems. One bioreactor at a time.</p>
            <Link href="/pricing" className="cta-wave__btn reveal reveal-delay-3">BECOME AN EARLY ADOPTER</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
