'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Projets', href: '#projets' },
  { label: 'Compétences', href: '#competences' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-[0_1px_12px_rgba(0,0,0,0.04)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center cursor-pointer"
            aria-label="Retour en haut"
          >
            <Image
              src="/logo.svg"
              alt="andji.dev"
              width={100}
              height={28}
              priority
              className="h-7 w-auto"
            />
          </button>

          {/* Groupe liens + CTA à droite — desktop */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="group relative text-sm text-black font-medium transition-colors"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand rounded-full transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* CTA desktop */}
            <a
              href="#contact"
              className="inline-flex items-center text-sm bg-brand hover:bg-brand-dark text-white font-medium px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(0,145,126,0.25)] hover:shadow-[0_6px_20px_rgba(0,145,126,0.4)]"
            >
              Me contacter
            </a>
          </div>

          {/* Burger mobile */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className={`block w-5 h-0.5 bg-black transition-all ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-black transition-all ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-black transition-all ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`md:hidden absolute left-0 right-0 top-full transition-all duration-300 ${
          menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-white border-t border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)] px-6 py-6">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-black hover:bg-slate-50 rounded-xl px-4 py-3 transition-colors font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 text-sm bg-brand hover:bg-brand-dark text-white font-medium px-5 py-3 rounded-full text-center transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Me contacter
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
