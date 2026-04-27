import { motion } from 'framer-motion'
import { UtensilsCrossed, Wine, Music, Star } from 'lucide-react'

const PILLARS = [
  {
    icon: UtensilsCrossed,
    title: 'Restaurant',
    sub: 'Fine Dining',
    body: 'Cuisine méditerranéenne et tunisienne revisitée, avec des produits frais de saison et des recettes qui honorent le terroir.',
  },
  {
    icon: Wine,
    title: 'Bar',
    sub: 'Cocktails & Vins',
    body: 'Sélection de vins tunisiens et internationaux, cocktails maison et spiritueux choisis pour accompagner chaque moment.',
  },
  {
    icon: Music,
    title: 'Music Live',
    sub: 'Soirées & Concerts',
    body: 'Soirées musicales intimistes et lives acoustiques pour compléter une expérience sensorielle unique.',
  },
  {
    icon: Star,
    title: '& More',
    sub: 'Sur mesure',
    body: 'Événements privés, dîners thématiques et expériences sur mesure dans un cadre unique à Gammarth.',
  },
]

export default function ExperienceSection({ id }) {
  return (
    <section id={id} className="bg-cream-paper py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold-accent mb-4">
            L'expérience
          </p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-blue uppercase leading-tight">
              Plus qu'un<br />restaurant
            </h2>
            <div className="w-16 h-px bg-primary-blue/20 self-center hidden md:block" />
            <p className="font-serif italic text-warm-gray max-w-xs">
              Un lieu où chaque sens est éveillé — du goût à la musique.
            </p>
          </div>
        </motion.div>

        {/* Pillars — gap-px trick: container bg shows as 1px separators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-primary-blue/10">
          {PILLARS.map(({ icon: Icon, title, sub, body }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 md:p-10 bg-cream-paper group hover:bg-primary-blue transition-colors duration-300"
            >
              <div className="mb-6">
                <Icon size={28} strokeWidth={1.2}
                  className="text-gold-accent group-hover:text-gold-accent transition-colors" />
              </div>
              <p className="font-sans text-[8px] tracking-[0.25em] uppercase text-warm-gray
                group-hover:text-cream-paper/50 mb-1 transition-colors">
                {sub}
              </p>
              <h3 className="font-serif text-2xl font-bold text-primary-blue
                group-hover:text-cream-paper mb-4 transition-colors">
                {title}
              </h3>
              <div className="w-8 h-px bg-gold-accent/50 mb-4" />
              <p className="font-sans text-[12px] text-warm-gray leading-relaxed
                group-hover:text-cream-paper/70 transition-colors">
                {body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 flex flex-col md:flex-row items-center justify-between gap-6 pt-10"
        >
          <div>
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-warm-gray mb-1">
              Niché au cœur de
            </p>
            <p className="font-serif text-2xl md:text-3xl font-bold text-primary-blue">
              Hôtel Acquaviva · Gammarth
            </p>
          </div>
          <a href="#contact"
            className="px-8 py-3.5 bg-primary-blue font-sans text-[10px] font-bold
              tracking-[0.22em] uppercase text-cream-paper
              hover:bg-deep-blue transition-colors shadow-md">
            Réserver une table
          </a>
        </motion.div>

      </div>
    </section>
  )
}
