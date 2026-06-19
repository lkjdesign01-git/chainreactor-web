import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <Link href="/" className="footer__wordmark">CHAINREACTOR</Link>
        <nav className="footer__nav">
          <Link href="/pricing" className="footer__nav-link">PRICING</Link>
          <Link href="mailto:info@chainreactor.bio" className="footer__nav-link">CONTACT US</Link>
        </nav>
        <div className="footer__contact">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__contact-btn">LINKEDIN</a>
          <a href="mailto:info@chainreactor.bio" className="footer__contact-btn">INFO@CHAINREACTOR.BIO</a>
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
