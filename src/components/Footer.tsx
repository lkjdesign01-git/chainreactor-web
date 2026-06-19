import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div>
          <div className="footer__logo">
            <Image src="/Logo.svg" alt="Chainreactor" width={120} height={20} />
          </div>
          <p className="footer__tagline">The flight simulator for biology. De-risk your bioprocess scale-up.</p>
        </div>
        <div>
          <p className="footer__col-title">Product</p>
          <ul className="footer__links">
            <li><Link href="/#technology">Technology</Link></li>
            <li><Link href="/#product">CR-01 Benchtop</Link></li>
            <li><Link href="/#product">CR-02 Desktop</Link></li>
            <li><Link href="/#materials">Materials</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer__col-title">Company</p>
          <ul className="footer__links">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Press</Link></li>
          </ul>
        </div>
        <div>
          <p className="footer__col-title">Contact</p>
          <ul className="footer__links">
            <li><Link href="/pricing">Get Pricing</Link></li>
            <li><Link href="/manual">Manual</Link></li>
            <li><a href="mailto:hello@chainreactor.bio">hello@chainreactor.bio</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__copy">© {new Date().getFullYear()} Chainreactor. All rights reserved.</p>
        <nav className="footer__bottom-links">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms</Link>
          <Link href="#">Legal</Link>
        </nav>
      </div>
    </footer>
  )
}
