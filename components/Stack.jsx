'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const services = [
  {
    icon: '/icon-creation-site.svg',
    title: 'Création de site internet',
    description: "Je crée votre site de A à Z. Un site clair et professionnel pour présenter votre activité et convaincre vos prospects.",
  },
  {
    icon: '/icon-boutique-en-ligne.svg',
    title: 'Boutique en ligne',
    description: "Pour vendre vos produits et/ou services avec une boutique simple à gérer au quotidien.",
  },
  {
    icon: '/icon-refonte-web.svg',
    title: 'Refonte web & identitaire',
    description: "Votre site vieillit ? Je lui donne un coup de jeune, côté design et performance.",
  },
]

const stack = [
  {
    category: 'Front-end',
    items: ['React', 'Next.js', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'CMS & Back-end',
    items: ['Strapi', 'Sanity', 'Node.js', 'REST API'],
  },
  {
    category: 'Outils',
    items: ['Git', 'GitHub', 'Vercel', 'VS Code'],
  },
  {
    category: 'Design & Créa',
    items: ['Figma', 'Adobe InDesign', 'Illustrator', 'Photoshop', 'After Effects'],
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

export default function Services() {
  return (
    <section id="services" className="relative bg-white pt-24 pb-24 overflow-hidden">

      {/* Cercle vert pastel — desktop */}
 {/* Demi-cercle vert pastel — desktop / tablette */}
<div
  aria-hidden="true"
  className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 md:w-[1100px] md:h-[1100px] lg:w-[1400px] lg:h-[1400px] rounded-full pointer-events-none"
  style={{ backgroundColor: '#C9E4DD' }}
/>

{/* Halo doux mobile uniquement */}
<div
  aria-hidden="true"
  className="md:hidden absolute inset-x-0 top-0 h-[600px] pointer-events-none"
  style={{
    background: 'radial-gradient(ellipse 90% 70% at center top, #C9E4DD 0%, rgba(201,228,221,0.6) 40%, rgba(255,255,255,0) 80%)',
  }}
/>
{/* Fondu blanc en bas — estompe le cercle desktop vers la stack */}
<div
  aria-hidden="true"
  className="hidden md:block absolute inset-x-0 bottom-0 h-[500px] pointer-events-none z-[1]"
  style={{
    background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 30%, rgba(255,255,255,0.95) 65%, rgba(255,255,255,1) 100%)',
  }}
/>

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ============================================ */}
        {/* PARTIE 1 — Les 3 services                   */}
        {/* ============================================ */}

        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-black tracking-tight mb-3">
            Mes services
          </h2>
          <p className="font-sans text-base text-slate-700">
            Ce que je peux faire pour vous
          </p>
        </div>

        {/* Grille services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-5xl mx-auto mb-24 md:mb-28"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="text-center px-4"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image
                    src={service.icon}
                    alt=""
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <h3 className="font-display text-lg font-bold text-brand mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="font-sans text-sm text-slate-700 leading-relaxed max-w-xs mx-auto">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ============================================ */}
        {/* PARTIE 2 — Stack technique (transition fluide depuis le cercle) */}
        {/* ============================================ */}

        {/* En-tête stack */}
        <div className="text-center mb-12">
          <h3 className="font-display text-3xl md:text-4xl font-bold text-black tracking-tight mb-3">
            Ma stack technique
          </h3>
          <p className="font-sans text-base text-slate-600 max-w-xl mx-auto">
            Les outils et technologies que j'utilise au quotidien pour concevoir vos projets.
          </p>
        </div>

        {/* Liste stack — format ligne */}
        <div className="max-w-4xl mx-auto space-y-6">
          {stack.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col md:flex-row md:items-start gap-3 md:gap-6"
            >
              {/* Label catégorie */}
              <div className="md:w-44 md:flex-shrink-0 md:pt-1.5">
                <span className="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-500">
                  {group.category}
                </span>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="font-sans text-sm px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-slate-700 hover:bg-brand hover:border-brand hover:text-white transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
