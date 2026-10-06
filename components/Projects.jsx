'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'Minimal Ink',
    description: "Site vitrine pour un studio de tatouage. Thème WordPress custom développé sur Astra, Custom Post Types avec ACF, intégration Contact Form 7.",
    tags: ['WordPress', 'PHP', 'ACF', 'CSS'],
    image: '/minimal-ink-preview.png',
    objectPosition: 'center top',
    link: '#',
  },
  {
    title: 'ClimPro Services',
    description: 'Site vitrine pour un plombier-climaticien. Formulaire de contact fonctionnel, animations Framer Motion, responsive mobile.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Resend'],
    image: '/climpro-screen.png',
    objectPosition: 'left top',
    link: 'https://climpro-services-b473.vercel.app',
  },
  {
    title: 'Blog Culinaire',
    description: 'Blog de recettes connecté à un CMS Strapi. Gestion de contenu, catégories, recherche et pages statiques générées.',
    tags: ['Next.js', 'Strapi', 'Tailwind CSS'],
    image: '/blog-culinaire-preview.png',
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
    <section id="projets" className="relative py-32 bg-background overflow-hidden">
      
      {/* Glow vert subtil en arrière-plan */}
      <div
        aria-hidden="true"
        className="absolute right-0 top-1/3 w-[600px] h-[600px] rounded-full pointer-events-none opacity-[0.05] blur-[120px]"
        style={{ backgroundColor: '#84CC16' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* En-tête */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="inline-block font-mono text-xs text-brand uppercase tracking-[0.2em] mb-4">
            Réalisations
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Projets récents
          </h2>
          <p className="font-sans text-base text-muted max-w-xl mx-auto">
            Une sélection de projets qui illustrent mon approche design et développement.
          </p>
        </motion.div>

        {/* Carrousel */}
        <div className="relative">

          {/* Flèche gauche */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Projet précédent"
            className="absolute left-0 top-[30%] -translate-y-1/2 -translate-x-14 z-20 text-foreground hover:text-brand disabled:opacity-0 disabled:pointer-events-none transition-colors p-2 hidden md:block"
          >
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Flèche droite */}
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Projet suivant"
            className="absolute right-0 top-[30%] -translate-y-1/2 translate-x-14 z-20 text-foreground hover:text-brand disabled:opacity-0 disabled:pointer-events-none transition-colors p-2 hidden md:block"
          >
            <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                  <div className="group rounded-xl overflow-hidden border border-border hover:border-brand/40 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">

                    {/* Barre écran (type MacBook) */}
                    <div className="flex items-center justify-center px-3 py-1.5 bg-surface border-b border-border">
                      <span className="w-1.5 h-1.5 rounded-full bg-border" />
                    </div>

                    {/* Screenshot */}
                    <div className="relative aspect-[16/10] bg-surface overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        style={{ objectPosition: project.objectPosition || 'center top' }}
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Overlay au hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>

                  {/* Infos sous le mockup */}
                  <div className="mt-6 px-1">
                    <h3 className="font-display text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-sans text-xs px-3 py-1 rounded-full border border-border bg-surface text-muted-light"
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
                      className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-brand transition-colors"
                    >
                      Voir le projet
                      <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
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
            href="https://github.com/NadjiF"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-surface hover:bg-surface-elevated border border-border hover:border-brand/40 text-foreground font-medium text-sm px-8 py-3 rounded-full transition-all hover:-translate-y-0.5"
          >
            Voir tous mes projets sur GitHub
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
