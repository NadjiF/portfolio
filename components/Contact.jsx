'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#F5F5F3]">
      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gray-900 rounded-3xl p-12 md:p-16 text-center"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-gray-400">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
            Travaillons ensemble
          </h2>
          <p className="text-gray-400 mb-10 max-w-md mx-auto">
            Vous avez un projet en tête ? Je suis disponible pour des missions freelance remote ou locales.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:andjif.dev@gmail.com"
              className="bg-white text-gray-900 text-sm font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              M'envoyer un email
            </a>
            <a
             href="https://www.malt.fr"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-gray-900 text-sm font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
>
  Mon profil Malt
</a>
          </div>

          <div className="mt-10 flex justify-center gap-6">
            <a
              href="https://github.com/NadjiF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  )
}
