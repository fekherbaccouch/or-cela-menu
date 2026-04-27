import { motion } from 'framer-motion'
import { Beer, GlassWater, Wine, Flower2, Grape } from 'lucide-react'
import { drinks } from '../../../data/menuData'
import SectionTitle from '../../../components/ui/SectionTitle'

const ICON_MAP = { Beer, GlassWater, Wine, Flower2, Grape }

function DrinkColumn({ category, index, isLast }) {
  const Icon = ICON_MAP[category.icon] ?? Wine

  return (
    <div className="flex flex-1 min-w-0">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="flex-1 flex flex-col items-center text-center px-2 md:px-3"
      >
        {/* Category icon */}
        <Icon
          size={26}
          strokeWidth={1.4}
          className="text-gold-accent mb-2"
        />

        {/* Category label */}
        <h3 className="font-sans text-[10px] md:text-[11px] font-bold tracking-[0.22em] uppercase text-primary-blue mb-2">
          {category.label}
        </h3>

        {/* Gold rule */}
        <div className="w-8 border-t border-gold-accent mb-3" />

        {/* Items — bullet list, no prices (matches reference) */}
        <ul className="space-y-1.5 text-left w-full">
          {category.items.map((item, i) => (
            <li key={i} className="flex items-start gap-1.5">
              <span className="text-gold-accent text-[10px] mt-[3px] shrink-0">●</span>
              <span className="font-sans text-[11px] md:text-[12px] text-ink leading-snug">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Vertical divider between columns */}
      {!isLast && (
        <div className="hidden md:block w-px bg-primary-blue/30 self-stretch mx-1" />
      )}
    </div>
  )
}

export default function DrinksSection() {
  return (
    <section className="mb-2">
      <SectionTitle>Boissons</SectionTitle>

      <div className="flex flex-col md:flex-row mt-6 gap-4 md:gap-0">
        {drinks.map((cat, i) => (
          <DrinkColumn
            key={cat.key}
            category={cat}
            index={i}
            isLast={i === drinks.length - 1}
          />
        ))}
      </div>
    </section>
  )
}
