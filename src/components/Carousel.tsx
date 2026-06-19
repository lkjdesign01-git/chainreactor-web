'use client'
import Image from 'next/image'

const slides = [
  { src: '/images/Carousel Image 01.jpg', alt: 'Cosmetics', label: 'COSMETICS' },
  { src: '/images/Carousel Image 02.jpg', alt: 'Pharmaceuticals', label: 'PHARMACEUTICALS' },
  { src: '/images/Carousel Image 03.jpg', alt: 'Fabric', label: 'FABRIC' },
  { src: '/images/Carousel Image 04.jpg', alt: 'Cosmetics', label: 'COSMETICS' },
]

export default function Carousel() {
  return (
    <section className="materials" id="materials">
      <div className="materials__header">
        <h2 className="materials__headline reveal">
          Materials made by biology.<br />
          <em>Powered by Chainreactor.</em>
        </h2>
      </div>
      <div className="carousel">
        <div className="carousel__track">
          {[...slides, ...slides].map((s, i) => (
            <div className="carousel__item" key={i}>
              <div className="carousel__slide">
                <Image src={s.src} alt={s.alt} fill style={{ objectFit: 'cover' }} />
              </div>
              <p className="carousel__label">● {s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
