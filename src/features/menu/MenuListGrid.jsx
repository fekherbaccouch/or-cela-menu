import { motion, AnimatePresence } from 'framer-motion'
import MenuListCard from '../../components/ui/MenuListCard'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
}
const cardVariant = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.32 } },
}

export default function MenuListGrid({ items, onSelectItem }) {
  if (items.length === 0) {
    return (
      <div className="py-20 text-center bg-primary-blue/5">
        <p className="font-serif italic text-warm-gray text-lg">Aucun article trouvé.</p>
        <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-warm-gray/60 mt-2">
          Modifiez vos filtres ou votre recherche.
        </p>
      </div>
    )
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={items.map(i => i.id).join('-')}
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
      >
        {items.map((item, idx) => (
          <motion.div key={item.id} variants={cardVariant}>
            <MenuListCard item={item} globalIndex={idx + 1} onClick={onSelectItem} />
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}
