'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <Link href="/" className="nav__wordmark">CHAINREACTOR</Link>
      <ul className="nav__links">
        <li><Link href="/pricing" className="nav__btn">PRICING</Link></li>
        <li><Link href="mailto:info@chainreactor.bio" className="nav__btn">CONTACT US</Link></li>
      </ul>
    </nav>
  )
}
