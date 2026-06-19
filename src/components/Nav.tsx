'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <Link href="/" className="nav__logo">
        <Image src="/Logo.svg" alt="Chainreactor" width={140} height={22} priority />
      </Link>
      <ul className="nav__links">
        <li><Link href="/#technology">Technology</Link></li>
        <li><Link href="/#product">Product</Link></li>
        <li><Link href="/#materials">Materials</Link></li>
        <li><Link href="/pricing" className="nav__cta">Get Pricing</Link></li>
      </ul>
    </nav>
  )
}
