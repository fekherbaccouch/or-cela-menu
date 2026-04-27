import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Beer, GlassWater, Wine, Flower2, Grape, Salad, Fish, Cake } from 'lucide-react'
import { drinks, cuisine, tapas } from '../../data/menuData'

/* ── Icon map ── */
const ICON = { Beer, GlassWater, Wine, Flower2, Grape, Salad, Fish, Cake }

/* ── Gold ornamental rule ── */
function GoldRule() {
  return (
    <div className="flex items-center justify-center gap-2 my-3">
      <div className="w-8 border-t border-gold-accent" />
      <div className="w-1.5 h-1.5 bg-gold-accent rotate-45" />
      <div className="w-8 border-t border-gold-accent" />
    </div>
  )
}

/* ── Drink category card ── */
function DrinkCard({ cat, delay }) {
  const Icon = ICON[cat.icon] ?? Wine
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      className="border-2 border-primary-blue p-5 flex flex-col items-center text-center"
    >
      <Icon size={28} strokeWidth={1.4} className="text-gold-accent mb-2" />
      <h3 className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-primary-blue">
        {cat.label}
      </h3>
      <GoldRule />
      <ul className="space-y-1.5 text-left w-full">
        {cat.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-gold-accent text-[10px] mt-[3px] shrink-0">●</span>
            <span className="font-sans text-[12px] text-ink leading-snug">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

/* ── Cuisine column ── */
function CuisineColumn({ col, delay }) {
  const Icon = ICON[col.icon] ?? Fish
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      className="flex-1 min-w-0"
    >
      <div className="flex flex-col items-center mb-4">
        <Icon size={20} strokeWidth={1.4} className="text-gold-accent mb-1.5" />
        <h3 className="font-sans text-[11px] font-bold tracking-[0.22em] uppercase text-primary-blue">
          {col.label}
        </h3>
        <div className="w-6 border-t border-gold-accent mt-1.5" />
      </div>
      <ol className="space-y-3">
        {col.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="font-sans text-[11px] font-bold text-gold-accent w-6 shrink-0 pt-px">
              {col.startNum + i}.
            </span>
            <span className="font-sans text-[13px] text-ink leading-snug">{item}</span>
          </li>
        ))}
      </ol>
    </motion.div>
  )
}

/* ── Tapas columns ── */
function TapasPanel() {
  const cols = [tapas.slice(0, 4), tapas.slice(4, 8), tapas.slice(8, 12)]
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col md:flex-row gap-8"
    >
      {cols.map((col, ci) => (
        <ol key={ci} className="flex-1 space-y-3 list-none">
          {col.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="font-sans text-[11px] font-bold text-gold-accent w-6 shrink-0 pt-px">
                {ci * 4 + i + 1}.
              </span>
              <span className="font-sans text-[13px] text-ink leading-snug">{item}</span>
            </li>
          ))}
        </ol>
      ))}
    </motion.div>
  )
}

/* ── Tab button ── */
function Tab({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 md:px-10 py-3 font-sans text-[11px] font-bold tracking-[0.18em] uppercase
        border-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-primary-blue
        ${active
          ? 'bg-primary-blue text-cream-paper border-primary-blue'
          : 'bg-cream-paper text-primary-blue border-primary-blue hover:bg-primary-blue/10'}`}
    >
      {label}
    </button>
  )
}

const TABS = [
  { key: 'boissons', label: 'Boissons' },
  { key: 'cuisine',  label: 'Cuisine'  },
  { key: 'tapas',    label: 'Tapas'    },
]

export default function MenuSection() {
  const [active, setActive] = useState('boissons')

  return (
    <section id="menu" className="bg-cream-paper py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-accent mb-3">
            Or Cela
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-blue tracking-wide uppercase">
            Notre Menu
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="w-20 border-t-2 border-primary-blue" />
            <div className="w-2 h-2 bg-gold-accent rotate-45" />
            <div className="w-20 border-t-2 border-primary-blue" />
          </div>
          <p className="font-serif italic text-sm text-warm-gray mt-3">
            Une expérience méditerranéenne élégante et authentique.
          </p>
        </motion.div>

        {/* Tab bar */}
        <div className="flex justify-center mb-10">
          <div className="flex border-2 border-primary-blue divide-x-2 divide-primary-blue overflow-hidden">
            {TABS.map(t => (
              <Tab key={t.key} label={t.label} active={active === t.key} onClick={() => setActive(t.key)} />
            ))}
          </div>
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {active === 'boissons' && (
            <motion.div
              key="boissons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                {drinks.map((cat, i) => (
                  <DrinkCard key={cat.key} cat={cat} delay={i * 0.07} />
                ))}
              </div>
            </motion.div>
          )}

          {active === 'cuisine' && (
            <motion.div
              key="cuisine"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="border-2 border-primary-blue p-6 md:p-10">
                <div className="border border-gold-accent p-5 md:p-8">
                  <div className="flex flex-col md:flex-row gap-8">
                    {cuisine.map((col, i) => (
                      <CuisineColumn key={col.key} col={col} delay={i * 0.1} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {active === 'tapas' && (
            <motion.div
              key="tapas"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="border-2 border-primary-blue p-6 md:p-10">
                <div className="border border-gold-accent p-5 md:p-8">
                  <TapasPanel />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
