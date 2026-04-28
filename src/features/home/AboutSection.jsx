import { motion } from 'framer-motion'

const STATS = [
  { n: '2024', label: 'Ouverture' },
  { n: '44',   label: 'Plats signature' },
  { n: '100%', label: 'Produits frais' },
]

const TAGS = ['Restaurant', 'Bar', 'Music Live', 'Événements Privés']

export default function AboutSection() {
  return (
    <section id="univers" className="overflow-hidden relative">

      {/* Full-bleed bg panels — deep-blue left half, photo right half */}
      <div className="absolute inset-y-0 left-0 right-1/2 bg-deep-blue hidden lg:block" />
      <div className="absolute inset-y-0 left-1/2 right-0 hidden lg:block overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&h=1200&fit=crop&auto=format&q=85"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/30 to-transparent" />
      </div>

      {/* Content — max-w-7xl aligns with all other sections */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

        {/* Left text panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="bg-deep-blue lg:bg-transparent flex flex-col justify-center
            px-6 md:px-10 py-20 md:py-28"
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
          <div className="pt-8 mb-10">
            <div className="h-px bg-gold-accent/20 mb-8" />
            <div className="grid grid-cols-3 gap-6">
              {STATS.map(({ n, label }) => (
                <div key={label}>
                  <p className="font-serif text-3xl font-bold text-gold-accent mb-1">{n}</p>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-cream-paper/40">{label}</p>
                </div>
              ))}
            </div>
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

        {/* Right photo panel — visible on mobile, hidden on lg (bg panel handles it) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="lg:hidden relative min-h-[400px] overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&h=1200&fit=crop&auto=format&q=85"
            alt="Or Cela — ambiance"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/30 to-transparent" />
        </motion.div>

        {/* Quote overlay — right column on desktop */}
        <div className="hidden lg:flex items-end px-6 md:px-10 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-ink/70 backdrop-blur-sm p-6"
          >
            <p className="font-serif italic text-lg text-cream-paper/90 leading-snug mb-3">
              "Une expérience sensorielle complète, entre art, gastronomie et musique."
            </p>
            <div className="w-8 h-px bg-gold-accent" />
          </motion.div>
        </div>

      </div>
    </section>
  )
}
