import { motion } from 'framer-motion'

const STATS = [
  { n: '2024', label: 'Ouverture' },
  { n: '44',   label: 'Plats signature' },
  { n: '100%', label: 'Produits frais' },
]

const TAGS = ['Restaurant', 'Bar', 'Music Live', 'Événements Privés']

export default function AboutSection() {
  return (
    <section id="univers" className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

        {/* Left: Text panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="bg-deep-blue flex flex-col justify-center px-8 md:px-14 lg:px-20 py-20 md:py-28"
        >
          <p className="font-sans text-[10px] tracking-[0.45em] uppercase text-gold-accent mb-6">
            Notre Univers
          </p>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-cream-paper leading-[1.1] mb-8">
            Art &amp; Gastronomie,{' '}
            <span className="italic text-gold-accent">harmonieusement.</span>
          </h2>

          <div className="w-14 h-px bg-gold-accent/40 mb-8" />

          <div className="space-y-4 font-sans text-[14px] text-cream-paper/65 leading-relaxed max-w-md mb-12">
            <p>
              Niché au cœur de l'<span className="text-cream-paper font-semibold">Hôtel Acquaviva</span>{' '}
              à <span className="text-cream-paper font-semibold">Gammarth</span>, Or Cela propose une
              expérience culinaire raffinée inspirée des saveurs{' '}
              <span className="text-gold-accent font-semibold">méditerranéennes et tunisiennes.</span>
            </p>
            <p>
              Chaque détail, de l'assiette à l'ambiance, reflète une{' '}
              <span className="text-gold-accent font-semibold">ligne artistique singulière</span>,
              invitant les convives à un voyage sensoriel élégant et authentique.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 mb-10">
            <div className="h-px bg-gold-accent/20 col-span-3 -mb-6" />
            {STATS.map(({ n, label }) => (
              <div key={label}>
                <p className="font-serif text-3xl font-bold text-gold-accent mb-1">{n}</p>
                <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-cream-paper/40">{label}</p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {TAGS.map(tag => (
              <span key={tag}
                className="px-4 py-1.5 bg-gold-accent/15 font-sans text-[9px]
                  tracking-[0.18em] uppercase text-gold-accent/90">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right: Photo panel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative min-h-[400px] lg:min-h-0 overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&h=1200&fit=crop&auto=format&q=85"
            alt="Or Cela — ambiance"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/30 to-transparent" />

          <div className="absolute bottom-8 left-8 right-8">
            <div className="bg-ink/70 backdrop-blur-sm p-6">
              <p className="font-serif italic text-lg text-cream-paper/90 leading-snug mb-3">
                "Une expérience sensorielle complète, entre art, gastronomie et musique."
              </p>
              <div className="w-8 h-px bg-gold-accent" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
