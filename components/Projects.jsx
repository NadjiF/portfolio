'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'ClimPro Services',
  description: 'Site vitrine pour un plombier-climaticien...',
  tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Resend'],
    image: '/climpro-screen.png',
    objectPosition: 'left top',
  link: 'https://climpro-services-b473.vercel.app',
  },
  { 
    title: 'Blog Culinaire',
    description: 'Blog de recettes connecté à un CMS Strapi. Gestion de contenu, catégories, recherche et pages statiques générées.',
    tags: ['Next.js', 'Strapi', 'Tailwind CSS'],
    image: '/Blog-culinaire-preview.png',
    objectPosition: 'center top',
    link: '#',
  },
]

export default function Projects() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps', 
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section id="projets" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        {/* En-tête */}
        <div className="mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-black tracking-tight">
            Mes réalisations
          </h2>
          <span className="font-sans text-sm text-slate-600 mt-3 block">
            Projets récents
          </span>
        </div>

        {/* Carrousel */}
        <div className="relative">

          {/* Flèche gauche */}
          <button
  onClick={scrollPrev}
  disabled={!canScrollPrev}
  aria-label="Projet précédent"
  className="absolute left-0 top-[30%] -translate-y-1/2 -translate-x-14 z-20 text-black hover:text-slate-600 disabled:opacity-0 disabled:pointer-events-none transition-colors p-2"
>
  <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
</button>

          {/* Flèche droite */}
        <button
  onClick={scrollNext}
  disabled={!canScrollNext}
  aria-label="Projet suivant"
  className="absolute right-0 top-[30%] -translate-y-1/2 translate-x-14 z-20 text-black hover:text-slate-600 disabled:opacity-0 disabled:pointer-events-none transition-colors p-2"
>
  <svg className="w-14 h-14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
</button>

          {/* Viewport Embla */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">

              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] min-w-0"
                >
{/* Mockup écran */}
<div className="rounded-xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.2)]">

  {/* Barre écran (type MacBook) */}
  <div className="flex items-center justify-center px-3 py-1.5 bg-slate-800">
    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
  </div>

  {/* Screenshot */}
  <div className="relative aspect-[16/10] bg-white overflow-hidden">
    <Image
      src={project.image}
      alt={project.title}
      fill
      style={{ objectPosition: project.objectPosition || 'center top' }}
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 50vw"
    />
  </div>
</div>


                  {/* Infos sous le mockup */}
                  <div className="mt-6 px-1">
                    <h3 className="font-display text-xl font-bold text-black mb-2">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-slate-600 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-sans text-xs px-3 py-1 rounded-full border border-slate-800 text-slate-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Lien */}
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-sm font-medium text-black hover:text-brand transition-colors"
                    >
                      Voir le projet
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </div>

        {/* Bouton Voir plus */}
        <div className="flex justify-center mt-16">
          <a
            href="#"
            className="group inline-flex items-center gap-2 bg-black hover:bg-slate-800 text-white font-medium text-sm px-8 py-3 rounded-full transition-all shadow-[0_4px_16px_rgba(0,0,0,0.12)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:-translate-y-0.5"
          >
            Voir plus
          </a>
        </div>

      </div>
    </section>
  )
}
