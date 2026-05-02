'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const links = [
  { label: 'Projets', href: '#projets' },
  { label: 'Services', href: '#services' },
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
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
      {/* Pill principal */}
      <div
        className={`rounded-full backdrop-blur-md border transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 border-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]'
            : 'bg-white/70 border-white/60 shadow-[0_4px_20px_rgba(0,0,0,0.06)]'
        }`}
      >
        <div className="flex items-center justify-between pl-6 pr-2 py-2">

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

  {/* Groupe liens + CTA à droite */}
  <div className="hidden md:flex items-center gap-8">
    <nav className="flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm text-slate-600 hover:text-black transition-colors font-medium"
              >
                {link.label}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA desktop */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center text-sm bg-brand hover:bg-brand-dark text-white font-medium px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5"
          >
            Me contacter
          </a>
</div>
          {/* Burger mobile */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 mr-2"
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
        className={`md:hidden absolute left-0 right-0 top-full mt-2 transition-all duration-300 ${
          menuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md border border-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-3">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-700 hover:text-black hover:bg-slate-50 rounded-full px-4 py-3 transition-colors font-medium"
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
