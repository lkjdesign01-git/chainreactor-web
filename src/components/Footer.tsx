import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo-col">
          <Image src="/Logo.svg" alt="Chainreactor" width={140} height={24} />
        </div>
        <div className="footer__nav-col">
          <Link href="/pricing" className="footer__link">PRICING</Link>
          <Link href="mailto:info@chainreactor.bio" className="footer__link">CONTACT US</Link>
        </div>
        <div className="footer__contact-col">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__link">LINKEDIN</a>
          <a href="mailto:info@chainreactor.bio" className="footer__link">INFO@CHAINREACTOR.BIO</a>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copy">© 2026 CHAINREACTOR</p>
        <div className="footer__legal">
          <Link href="#">TERMS &amp; CONDITIONS</Link>
          <Link href="#">PRIVACY POLICY</Link>
        </div>
        <p className="footer__location">LISBON, PORTUGAL</p>
      </div>
    </footer>
  )
}
