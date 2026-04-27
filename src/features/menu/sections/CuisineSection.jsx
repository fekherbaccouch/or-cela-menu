import { motion } from 'framer-motion'
import { Salad, Fish, Cake } from 'lucide-react'
import { cuisine } from '../../../data/menuData'
import SectionTitle from '../../../components/ui/SectionTitle'

const ICON_MAP = { Salad, Fish, Cake }

function CuisineColumn({ col, colIndex }) {
  const Icon = ICON_MAP[col.icon] ?? Fish

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: colIndex * 0.12 }}
      className="flex-1 min-w-0"
    >
      {/* Column header */}
      <div className="flex flex-col items-center mb-4">
        <Icon size={20} strokeWidth={1.4} className="text-gold-accent mb-1.5" />
        <h3 className="font-sans text-[11px] font-bold tracking-[0.22em] uppercase text-primary-blue">
          {col.label}
        </h3>
        <div className="w-6 border-t border-gold-accent mt-1.5" />
      </div>

      {/* Numbered items — numbers continue across columns */}
      <ol className="space-y-2.5">
        {col.items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="font-sans text-[11px] font-bold text-gold-accent shrink-0 w-5 pt-[1px]">
              {col.startNum + i}.
            </span>
            <span className="font-sans text-[12px] md:text-[13px] text-ink leading-snug">
              {item}
            </span>
          </li>
        ))}
      </ol>
    </motion.div>
  )
}

export default function CuisineSection() {
  return (
    <section className="mb-2">
      {/* "CUISINE" header with flanking olive-branch icons from lucide */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <Salad size={18} strokeWidth={1.4} className="text-primary-blue opacity-60" />
        <SectionTitle size="xl">Cuisine</SectionTitle>
        <Cake size={18} strokeWidth={1.4} className="text-primary-blue opacity-60" />
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-6">
        {cuisine.map((col, i) => (
          <CuisineColumn key={col.key} col={col} colIndex={i} />
        ))}
      </div>
    </section>
  )
}
