'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/branches', label: 'Branches' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/80 bg-beige/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="flex items-center gap-3 sm:gap-4">
          <Image
            src="/header-logo.svg"
            alt="Tatva Yoga Studio logo"
            width={160}
            height={49}
            className="h-10 w-auto object-contain sm:h-12 md:h-14"
          />
          <span className="sr-only">Tatva Yoga Studio</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-darkgreen">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/918121612347?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20my%20free%20trial%20session%20at%20Tatva%20Yoga%20Studio."
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-darkgreen px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#233a39] md:inline-flex"
          >
            WhatsApp
          </a>

          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-darkgreen/10 bg-white text-darkgreen shadow-sm transition hover:bg-darkgreen/5 md:hidden"
          >
            <span className="text-xl">{open ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-lightgreen/20 bg-white/90 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-darkgreen">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 hover:bg-beige">
                {item.label}
              </Link>
            ))}
            <Link href="https://wa.me/918121612347?text=Hello%2C%20I%E2%80%99d%20like%20to%20book%20my%20free%20trial%20session%20at%20Tatva%20Yoga%20Studio." className="block rounded-2xl bg-darkgreen px-4 py-3 text-center text-sm font-semibold text-white hover:bg-[#233a39]">
              WhatsApp
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  )
}
