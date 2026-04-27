import { motion } from 'framer-motion'
import { tapas } from '../../../data/menuData'

/* Split 12 items into 3 columns of 4 */
function splitColumns(arr, cols) {
  const perCol = Math.ceil(arr.length / cols)
  return Array.from({ length: cols }, (_, i) =>
    arr.slice(i * perCol, i * perCol + perCol)
  )
}

function TapasColumn({ items, startIndex, colIndex }) {
  return (
    <motion.ol
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: colIndex * 0.1 }}
      className="flex-1 space-y-2 list-none"
    >
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <span className="font-sans text-[11px] font-bold text-gold-accent shrink-0 w-5 pt-[1px]">
            {startIndex + i}.
          </span>
          <span className="font-sans text-[12px] md:text-[13px] text-ink leading-snug">
            {item}
          </span>
        </li>
      ))}
    </motion.ol>
  )
}

export default function TapasSection() {
  const cols = splitColumns(tapas, 3)

  return (
    <section>
      {/* "TAPAS" — italic serif, matching reference style */}
      <div className="text-center mb-6">
        <div className="flex items-center gap-3">
          <div className="flex-1 border-t-2 border-primary-blue" />
          <h2 className="font-serif text-3xl md:text-4xl font-bold italic text-primary-blue tracking-wide px-4">
            Tapas
          </h2>
          <div className="flex-1 border-t-2 border-primary-blue" />
        </div>
        <div className="flex items-center justify-center gap-2 mt-1.5">
          <div className="w-10 border-t border-gold-accent" />
          <div className="w-2 h-2 bg-gold-accent rotate-45 shrink-0" />
          <div className="w-10 border-t border-gold-accent" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        {cols.map((col, ci) => (
          <TapasColumn
            key={ci}
            items={col}
            startIndex={ci * Math.ceil(tapas.length / 3) + 1}
            colIndex={ci}
          />
        ))}
      </div>
    </section>
  )
}
