'use client'
import Image from 'next/image'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Carousel from '@/components/Carousel'
import { useReveal } from '@/lib/useReveal'
import { useEffect, useRef, useState } from 'react'

function ProductScroll() {
  const [active, setActive] = useState(0)
  const panelRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)]

  useEffect(() => {
    const observers = panelRefs.map((ref, i) => {
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(i) },
        { threshold: 0.5 }
      )
      if (ref.current) obs.observe(ref.current)
      return obs
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <section className="products" id="product">
      {/* Sticky left */}
      <div className="products__sticky">
        <div className={`products__img products__img--photo ${active === 0 ? 'products__img--active' : ''}`}>
          <Image src="/images/image 2045.jpg" alt="Chainreactor benchtop bioreactor" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className={`products__img products__img--dark ${active === 1 ? 'products__img--active' : ''}`}>
          <LBMDiagram />
        </div>
      </div>

      {/* Scrolling right panels */}
      <div className="products__panels">
        <div className="products__panel" ref={panelRefs[0]}>
          <h2 className="product__headline">Our 3D printed modular benchtop bioreactors replicate industrial scale physics. The bench behaves just like the plant.</h2>
        </div>
        <div className="products__panel" ref={panelRefs[1]}>
          <h2 className="product__headline">Our Large Biological Model predicts the exact cell journey inside a commercial facility on a computer.</h2>
          <p className="product__body" style={{ marginTop: 24 }}>Test at small scale, know at full scale.</p>
        </div>
      </div>
    </section>
  )
}

const tickerItems = ['SHIPPING NOW', '——', '2 PATENT FAMILIES FILED', '——', 'EU / UK / US DEPLOYMENTS', '——']

function LBMDiagram() {
  const cx = 240, cy = 255, r = 145
  const pt = (deg: number, radius = r) => ({
    x: cx + radius * Math.cos((deg * Math.PI) / 180),
    y: cy + radius * Math.sin((deg * Math.PI) / 180),
  })

  const nodes: { num: string; lines: string[]; angle: number; lx: number; ly: number; anchor: 'middle'|'start'|'end' }[] = [
    { num: '01', lines: ['More customers'],           angle: 270, lx: 240, ly: 68,  anchor: 'middle' },
    { num: '02', lines: ['More runs'],                angle: 5,   lx: 410, ly: 258, anchor: 'start'  },
    { num: '03', lines: ['More high-quality', 'data'],angle: 68,  lx: 318, ly: 420, anchor: 'start'  },
    { num: '04', lines: ['Better predictions'],       angle: 112, lx: 162, ly: 420, anchor: 'end'    },
    { num: '05', lines: ['Better outcomes'],          angle: 175, lx: 72,  ly: 258, anchor: 'end'    },
  ]
  const arrowAt = [318, 36, 90, 140, 222]

  return (
    <svg className="lbm__svg" viewBox="0 0 480 510" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx={cx} cy={cy} r={r} stroke="#7dff7d" strokeWidth="0.8"/>
      <rect x={cx - 85} y={cy - 85} width={170} height={170} fill="#0d0d0d"/>

      {arrowAt.map((a, i) => {
        const p = pt(a)
        return (
          <g key={i} transform={`translate(${p.x},${p.y}) rotate(${a + 90})`}>
            <polygon points="0,-7 5,3 -5,3" fill="#7dff7d"/>
          </g>
        )
      })}

      {nodes.map((n) => {
        const p = pt(n.angle)
        return (
          <g key={n.num}>
            <circle cx={p.x} cy={p.y} r={3} fill="#7dff7d"/>
            <text x={n.lx} y={n.ly - 14} fill="#7dff7d" fontSize="9" fontFamily="IBM Plex Mono" letterSpacing="2" textAnchor={n.anchor}>{n.num}</text>
            {n.lines.map((line, li) => (
              <text key={li} x={n.lx} y={n.ly + li * 17} fill="rgba(255,255,255,0.75)" fontSize="12.5" fontFamily="PP Mori, sans-serif" textAnchor={n.anchor}>{line}</text>
            ))}
          </g>
        )
      })}
    </svg>
  )
}

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
              <div className="boarding__col-top">
                <p className="boarding__col-label">01</p>
                <h3 className="boarding__col-title">The Journey</h3>
              </div>
              <p className="boarding__col-body">Moving to a commercial facility requires a <strong>1,000x increase</strong> in volume. At that scale, cells behave very differently.</p>
            </div>
            <div className="boarding__col reveal reveal-delay-2">
              <div className="boarding__col-top">
                <p className="boarding__col-label">02</p>
                <h3 className="boarding__col-title">The Turbulance</h3>
              </div>
              <p className="boarding__col-body">Mixing time stretches from a perfect 5 seconds in the lab to a stagnant <strong>60–120 seconds</strong> in a giant tank.</p>
            </div>
            <div className="boarding__col reveal reveal-delay-4">
              <div className="boarding__col-top">
                <p className="boarding__col-label">03</p>
                <h3 className="boarding__col-title">The Crash</h3>
              </div>
              <p className="boarding__col-body">Localized physical stress starves and suffocates cells — yields plummet by <strong>20% to 70%.</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* MICROENVIRONMENT */}
      <section className="scale">
        <div className="scale__bg">
          <Image src="/images/BG Image 02.jpg" alt="" fill style={{ objectFit: 'cover' }} priority />
        </div>
        <div className="scale__glass">
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
                <p>Chainreactor is the flight simulator for biotech: hardware and software that lets you design, predict and test before you scale, saving millions in R&amp;D.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS — sticky left image, scrolling right panels */}
      <ProductScroll />

      {/* STATS TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <span className="ticker__item" key={i}>{item}</span>
          ))}
        </div>
      </div>

      {/* MATERIALS CAROUSEL */}
      <Carousel />

      {/* KEY FEATURES */}
      <section className="features">
        <div className="features__bg">
          <Image src="/images/BG Image 03.jpg" alt="" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="features__glass">
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
        <div className="comparison__inner">
          <h2 className="comparison__headline reveal">Print the vessel.<br />Skip the wait.<br />Land safely.</h2>
          <div className="comparison__table reveal reveal-delay-1">
            <div className="comparison__col comparison__col--legacy">
              <div className="comparison__col-header">Legacy Hardware</div>
              <div className="comparison__cell">12–24 month lead times</div>
              <div className="comparison__cell">Fixed geometry</div>
              <div className="comparison__cell">Supply chain dependency</div>
              <div className="comparison__cell">Revalidation at scale</div>
            </div>
            <div className="comparison__col comparison__col--cr">
              <div className="comparison__col-header">CHAINREACTOR</div>
              <div className="comparison__cell">Days to deployment</div>
              <div className="comparison__cell">Fully custom</div>
              <div className="comparison__cell">Printed locally</div>
              <div className="comparison__cell">Geometry continuity</div>
            </div>
          </div>
        </div>
        <div className="comparison__image">
          <Image src="/images/Group 33.jpg" alt="Chainreactor bioreactor system" fill style={{ objectFit: 'cover' }} />
        </div>
      </section>

      {/* LOGOS */}
      <section className="logos">
        <p className="logos__label">BACKED BY:</p>
        <div className="logos__marquee" aria-hidden="true">
          <div className="logos__track">
            {[1,2,3,4,1,2,3,4].map((n, i) => (
              <div className="logos__pill" key={i}>
                <img src={`/images/logo-${n}.svg`} alt={`Partner logo ${n}`} className="logos__logo" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA WAVE */}
      <section className="cta-wave">
        <div className="cta-wave__bg">
          <Image src="/images/BG Image.jpg" alt="" fill style={{ objectFit: 'cover' }} />
        </div>
        <div className="cta-wave__glass">
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
