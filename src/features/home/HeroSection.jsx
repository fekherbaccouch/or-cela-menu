import { motion } from 'framer-motion'
import { OrCelaLogoTile } from '../../components/ui/OrCelaLogo'


function TilePlate({ size = 180, className = '' }) {
  return (
    <img
      src="/chart.png"
      width={size}
      height={size}
      aria-hidden="true"
      className={className}
      style={{ objectFit: 'cover', display: 'block' }}
    />
  )
}

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-5">
      <div className="w-16 md:w-28 h-px bg-gold-accent" />
      <div className="flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 bg-gold-accent rotate-45" />
        <div className="w-3 h-3 bg-gold-accent rotate-45" />
        <div className="w-1.5 h-1.5 bg-gold-accent rotate-45" />
      </div>
      <div className="w-16 md:w-28 h-px bg-gold-accent" />
    </div>
  )
}

export default function HeroSection() {
  return (
    <section id="accueil"
      className="relative min-h-screen flex flex-col items-center justify-center
        bg-cream-paper overflow-hidden pt-16">

      <div className="pointer-events-none select-none">
        <TilePlate size={220} className="absolute -top-10 -left-10 opacity-80" />
        <TilePlate size={220} className="absolute -top-10 -right-10 opacity-80" />
        <TilePlate size={180} className="absolute -bottom-8 -left-6 opacity-70" />
        <TilePlate size={180} className="absolute -bottom-8 -right-6 opacity-70" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl">

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <OrCelaLogoTile size={90} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="font-serif text-7xl md:text-9xl font-bold text-primary-blue leading-none tracking-tight mt-5">
            Or Cela
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="font-sans text-[11px] md:text-[12px] tracking-[0.3em] uppercase text-warm-gray mt-3"
        >
          Restaurant · Bar · Music &amp; more
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full"
        >
          <GoldDivider />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="font-serif italic text-base md:text-lg text-warm-gray leading-relaxed max-w-md"
        >
          Un lieu unique où l'art et la gastronomie se rencontrent{' '}
          <span className="text-gold-accent font-semibold not-italic">harmonieusement.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.95 }}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <a href="#menu"
            className="px-8 py-3.5 bg-primary-blue text-cream-paper font-sans text-[11px]
              font-bold tracking-[0.2em] uppercase hover:bg-deep-blue transition-colors shadow-md">
            Notre Menu
          </a>
          <a href="#contact"
            className="px-8 py-3.5 bg-primary-blue/10 text-primary-blue font-sans text-[11px]
              font-bold tracking-[0.2em] uppercase hover:bg-primary-blue hover:text-cream-paper transition-colors">
            Réserver
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-warm-gray">
          Découvrir
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-gold-accent to-transparent"
        />
      </motion.div>
    </section>
  )
}
