'use client'

import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 bg-black overflow-hidden">

      {/* Halo vert subtil */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none opacity-[0.08] blur-[120px]"
        style={{ backgroundColor: '#00917e' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-zinc-900/60 border border-zinc-800 rounded-3xl p-12 md:p-16 text-center overflow-hidden"
        >
          {/* Bordure verte subtile en haut */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-60" />

          <span className="inline-block font-sans text-xs font-semibold text-brand uppercase tracking-[0.2em] mb-4">
            Contact
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Prenons contact
          </h2>
          <p className="font-sans text-zinc-400 mb-10 max-w-lg mx-auto leading-relaxed">
            Disponible pour un poste de développeur front-end, en remote ou hybride. N'hésitez pas à m'écrire pour discuter d'une opportunité.
          </p>

          {/* Bouton CTA principal : email */}
          <div className="flex justify-center mb-10">
            <a
              href="mailto:nadji.dev@gmail.com"
              className="group inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white text-sm font-medium px-7 py-3 rounded-full transition-all shadow-[0_4px_20px_rgba(0,145,126,0.3)] hover:shadow-[0_6px_24px_rgba(0,145,126,0.5)] hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" strokeWidth={2} />
              M'envoyer un email
            </a>
          </div>

          {/* Icônes réseaux : GitHub + LinkedIn */}
          <div className="pt-8 border-t border-zinc-800 flex justify-center gap-8">
            <a
              href="https://github.com/NadjiF"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" strokeWidth={1.5} />
              <span className="font-sans text-sm">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/nadji-fali-5a80b2442/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="group inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" strokeWidth={1.5} />
              <span className="font-sans text-sm">LinkedIn</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  )
}
