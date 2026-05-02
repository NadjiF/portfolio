'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F5F5F3]">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-16 pt-32 pb-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* GAUCHE — contenu */}
          <div className="order-2 lg:order-1">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-sans text-sm text-slate-600 mb-5"
            >
              Développeur web freelance
            </motion.div>

            {/* Titre */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.08] tracking-tight text-black mb-6"
            >
              Je crée{' '}
              <span className="relative inline-block">
                <span className="relative z-10">votre site web</span>
                <svg
                  className="absolute -bottom-1 left-0 w-full h-[0.3em] z-0"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
                    d="M2 8 Q 75 2, 150 6 T 298 5"
                    stroke="#00917e"
                    strokeWidth="5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{' '}
              complet&nbsp;: du design à la mise en ligne
            </motion.h1>

            {/* Sous-titre */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-sans text-base text-slate-600 leading-relaxed max-w-md mb-10"
            >
              Mon objectif : un site fonctionnel, agréable à parcourir et qui reflète votre identité.
            </motion.p>

            {/* Boutons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="#projets"
                className="group inline-flex items-center gap-2 bg-black hover:bg-slate-800 text-white font-medium text-sm px-6 py-3 rounded-full transition-all shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:-translate-y-0.5"
              >
                Voir mes projets
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center bg-[#00917e] hover:bg-[#007a6a] text-white font-medium text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5"
              >
                Me contacter
              </a>
            </motion.div>

          </div>

          {/* DROITE — illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-xl">
              <Image
                src="/illustration-hero.svg"
                alt="Développeur web freelance"
                width={600}
                height={530}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
