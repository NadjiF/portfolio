'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative bg-white pt-32 pb-24 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* GAUCHE — Texte */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-brand block mb-4"
            >
              Développeur front-end
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight mb-6 leading-[1.1]"
            >
              Je conçois des{' '}
              <span className="relative inline-block">
                interfaces web
                {/* Soulignement SVG dessiné animé */}
                <motion.svg
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 1, ease: 'easeInOut' }}
                  className="absolute left-0 -bottom-2 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M2 8C50 3 150 3 298 8"
                    stroke="#00917e"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </motion.svg>
              </span>
              , du design à la mise en ligne.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-sans text-base md:text-lg text-slate-600 leading-relaxed mb-10 max-w-xl"
            >
              Spécialisé en React, Next.js et WordPress. Je transforme vos maquettes en interfaces performantes et accessibles.
            </motion.p>

            {/* Boutons CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projets"
                className="group inline-flex items-center gap-2 bg-black hover:bg-slate-800 text-white font-medium text-sm px-7 py-3 rounded-full transition-all shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:-translate-y-0.5"
              >
                Voir mes projets
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>

              <a
                href="/CV-Nadji.pdf"
                download
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-black font-medium text-sm px-7 py-3 rounded-full border border-slate-300 hover:border-slate-900 transition-all hover:-translate-y-0.5"
              >
                Télécharger mon CV
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 3a1 1 0 011 1v8.586l3.293-3.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 111.414-1.414L9 12.586V4a1 1 0 011-1z" clipRule="evenodd" />
                  <path d="M3 15a1 1 0 011 1v2h12v-2a1 1 0 112 0v3a1 1 0 01-1 1H3a1 1 0 01-1-1v-3a1 1 0 011-1z" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* DROITE — Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            <div className="relative w-full max-w-md lg:max-w-xl">
              <Image
                src="/illustration-hero.svg"
                alt="Développeur front-end"
                width={600}
                height={530}
                className="w-full h-auto relative z-10"
                priority
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
