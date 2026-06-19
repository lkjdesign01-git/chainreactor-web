'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const slides = [
  { src: '/images/Carousel Image 01.jpg', alt: 'Material sample 1' },
  { src: '/images/Carousel Image 02.jpg', alt: 'Material sample 2' },
  { src: '/images/Carousel Image 03.jpg', alt: 'Material sample 3' },
  { src: '/images/Carousel Image 04.jpg', alt: 'Material sample 4' },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = (index: number) => {
    setCurrent((index + slides.length) % slides.length)
  }

  useEffect(() => {
    autoRef.current = setInterval(() => goTo(current + 1), 4000)
    return () => { if (autoRef.current) clearInterval(autoRef.current) }
  }, [current])

  useEffect(() => {
    if (!trackRef.current) return
    const slideW = trackRef.current.children[0]?.clientWidth ?? 0
    trackRef.current.style.transform = `translateX(-${current * slideW}px)`
  }, [current])

  const pause = () => { if (autoRef.current) clearInterval(autoRef.current) }
  const resume = () => { autoRef.current = setInterval(() => goTo(current + 1), 4000) }

  return (
    <div className="materials" id="materials">
      <div className="materials__header">
        <p className="materials__eyebrow reveal">Materials</p>
        <h2 className="materials__headline reveal reveal-delay-1">
          Materials made by biology.<br />
          <em>Powered by Chainreactor.</em>
        </h2>
      </div>

      <div className="carousel" onMouseEnter={pause} onMouseLeave={resume}>
        <div className="carousel__track" ref={trackRef}>
          {slides.map((s) => (
            <div className="carousel__slide" key={s.src}>
              <Image src={s.src} alt={s.alt} fill style={{ objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </div>

      <div className="carousel__controls">
        <button className="carousel__btn" onClick={() => goTo(current - 1)} aria-label="Previous">←</button>
        <button className="carousel__btn" onClick={() => goTo(current + 1)} aria-label="Next">→</button>
      </div>
    </div>
  )
}
