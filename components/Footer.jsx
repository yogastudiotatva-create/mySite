import Link from 'next/link'

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/branches', label: 'Branches' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms' },
  { href: '/disclaimer', label: 'Disclaimer' },
]

export default function Footer() {
  return (
    <footer className="border-t border-lightgreen/20 bg-white/90 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold">Tatva Wellness LLP</p>
          <p className="text-sm text-darkgreen/70">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-darkgreen/80">
          {footerLinks.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-darkgreen transition-colors">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
