'use client'

import { motion } from 'framer-motion'
import { Heart, Rocket, Users } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-background overflow-hidden">

      <div
        aria-hidden="true"
        className="absolute right-1/4 top-1/4 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.05] blur-[120px]"
        style={{ backgroundColor: '#84CC16' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* En-tête */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-mono text-xs text-brand uppercase tracking-[0.2em] mb-4">
            À propos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
            Mon parcours
          </h2>
          <p className="font-sans text-base text-muted max-w-xl mx-auto">
            Une reconversion choisie, une aventure qui continue.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Colonne gauche - texte */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-6 text-muted-light leading-relaxed"
          >
            <p>
              Le développement web n'est pas mon premier métier. Après une <span className="text-foreground font-medium">reconversion mûrement réfléchie</span>, je me suis lancé avec l'envie sincère de comprendre comment se construisent les produits qu'on utilise au quotidien, et d'apprendre à les construire moi-même.
            </p>
            <p>
              Depuis, je n'ai jamais arrêté de me former. À chaque projet, j'ajoute une brique : <span className="text-foreground font-medium">React, le design, le motion design</span>. Au lieu de me cantonner au code, j'ai voulu maîtriser tout ce qui fait un bon produit web, du premier croquis à la mise en ligne.
            </p>
            <p>
              Aujourd'hui, je suis en <span className="text-foreground font-medium">freelance</span> et je travaille sur des projets qui me passionnent : les miens d'abord, puis ceux de clients et collaborateurs qui partagent une certaine exigence. Si vous cherchez quelqu'un qui s'investit vraiment, on devrait bien s'entendre.
            </p>
            <p className="text-sm text-muted pt-4">
              Basé en France · Disponible en remote ou hybride
            </p>
          </motion.div>

          {/* Colonne droite - 3 cartes valeurs */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-3"
          >
            {[
              { icon: Heart, title: 'Engagé', text: 'Je travaille sur des projets qui m\'intéressent, et ça se voit dans le résultat.' },
              { icon: Rocket, title: 'En progression', text: 'Toujours en train d\'apprendre quelque chose de nouveau, à chaque projet.' },
              { icon: Users, title: 'Collaboratif', text: 'Les meilleurs projets naissent quand on s\'entend bien avec les bonnes personnes.' },
            ].map(({ icon: Icon, title, text }) => (
              <div 
                key={title}
                className="group bg-surface border border-border hover:border-brand/40 rounded-xl p-5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center bg-background border border-border group-hover:border-brand/50 group-hover:bg-brand/10 rounded-lg transition-all">
                    <Icon className="w-4 h-4 text-brand" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-sm mb-1">
                      {title}
                    </h3>
                    <p className="text-muted text-sm leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

        </div>

      </div>
    </section>
  )
}
