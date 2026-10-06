'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Code2, Server, Palette } from 'lucide-react'
import { useState } from 'react'

const competences = [
  {
    icon: Code2,
    title: 'Front-end & React',
    description: "J'intègre vos maquettes et développe des interfaces modernes, performantes et accessibles avec l'écosystème React.",
    tag: 'Développement moderne',
    stack: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    icon: Server,
    title: 'WordPress & PHP',
    description: "Développement de thèmes enfants custom from scratch, création de Custom Post Types et intégration de champs ACF pour des sites CMS sur-mesure.",
    tag: 'CMS & intégration',
    stack: ['WordPress', 'PHP', 'ACF', 'Astra', 'Contact Form 7'],
  },
  {
    icon: Palette,
    title: 'Design & Intégration',
    description: "De la maquette Figma au code HTML/CSS/JS. Je transforme un design en interface responsive, en respectant les bonnes pratiques d'accessibilité et de SEO.",
    tag: 'Figma to code',
    stack: ['Figma', 'HTML5', 'CSS3', 'Responsive', 'Accessibilité'],
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stackContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.05 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
}

const stackItem = {
  hidden: { opacity: 0, y: 8, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, y: -4, scale: 0.95, transition: { duration: 0.15 } },
}

export default function Competences() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <section id="competences" className="relative bg-white pt-32 pb-32 overflow-hidden">

      {/* Halo vert pastel très subtil en fond */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[800px] rounded-full pointer-events-none opacity-[0.08] blur-[100px]"
        style={{ backgroundColor: '#00917e' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block font-sans text-xs font-semibold text-brand uppercase tracking-[0.2em] mb-4">
            Compétences
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
            Mes compétences techniques
          </h2>
          <p className="font-sans text-base text-slate-600 max-w-xl mx-auto mb-2">
            Un socle technique polyvalent, nourri par la pratique régulière sur des projets concrets.
          </p>
          <p className="font-sans text-xs text-brand/70 mt-4">
            Survolez une carte pour voir les outils utilisés
          </p>
        </motion.div>

        {/* Cards compétences avec stack au hover */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {competences.map((item, index) => {
            const Icon = item.icon
            const isHovered = hoveredCard === index

            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative bg-white border border-slate-200 hover:border-slate-900 rounded-2xl p-8 transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] cursor-default min-h-[320px] flex flex-col"
              >

                {/* Icône */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                </div>

                {/* Tag */}
                <span className="font-sans text-[10px] text-slate-500 uppercase tracking-[0.15em] mb-3 block font-semibold">
                  {item.tag}
                </span>

                {/* Titre */}
                <h3 className="font-display text-xl font-bold text-black mb-3 tracking-tight">
                  {item.title}
                </h3>

                {/* Description / Stack au hover */}
                <div className="relative flex-1">
                  <AnimatePresence mode="wait">
                    {!isHovered ? (
                      <motion.p
                        key="description"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="font-sans text-sm text-slate-600 leading-relaxed"
                      >
                        {item.description}
                      </motion.p>
                    ) : (
                      <motion.div
                        key="stack"
                        variants={stackContainer}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="flex flex-col gap-3"
                      >
                        <motion.span
                          variants={stackItem}
                          className="font-sans text-[10px] text-brand uppercase tracking-[0.2em] font-semibold"
                        >
                          Stack utilisée
                        </motion.span>
                        <div className="flex flex-wrap gap-2">
                          {item.stack.map((tech) => (
                            <motion.span
                              key={tech}
                              variants={stackItem}
                              className="font-sans text-xs px-3 py-1.5 rounded-lg border border-brand/30 bg-brand/10 text-brand font-medium"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
