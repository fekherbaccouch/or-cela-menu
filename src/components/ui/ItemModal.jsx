import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, UtensilsCrossed, Wine, Leaf, GlassWater } from 'lucide-react'

function FallbackBg({ item }) {
  const Icon = item.category === 'Boissons' || item.category === 'Cocktails'
    ? (item.type?.includes('Alcoholic') ? Wine : GlassWater)
    : (item.type?.includes('Vegan') || item.type?.includes('Vegetarian') ? Leaf : UtensilsCrossed)
  return (
    <div className="absolute inset-0 bg-primary-blue/5 flex items-center justify-center">
      <Icon size={80} strokeWidth={0.5} className="text-primary-blue/10" />
    </div>
  )
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay },
})

export default function ItemModal({ item, onClose }) {
  const [imgError, setImgError] = useState(false)

  useEffect(() => { setImgError(false) }, [item?.id])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] bg-ink/80 backdrop-blur-md
            flex items-center justify-center p-4 md:p-12"
          onClick={onClose}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0,  scale: 1    }}
            exit={{ opacity: 0, y: 30, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 280, damping: 28, mass: 0.9 }}
            onClick={e => e.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.45)]"
            style={{ background: '#FAF9F6' }}
          >
            {/* Gold top border accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              className="absolute top-0 inset-x-0 h-[2px] bg-gold-accent z-20"
              style={{ transformOrigin: 'left' }}
            />

            {/* Close */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.25 }}
              onClick={onClose}
              className="absolute top-5 right-5 z-30 w-9 h-9 rounded-full
                bg-ink/10 backdrop-blur-sm flex items-center justify-center
                text-ink/50 hover:bg-primary-blue hover:text-cream-paper
                transition-all duration-200"
              aria-label="Fermer"
            >
              <X size={15} strokeWidth={2} />
            </motion.button>

            <div className="flex flex-col md:flex-row">

              {/* ── Image panel ── */}
              <div className="relative md:w-[48%] shrink-0 overflow-hidden bg-primary-blue/5">
                <div className="aspect-[4/3] md:aspect-auto md:h-full min-h-[260px] relative overflow-hidden">
                  {!imgError ? (
                    <motion.img
                      key={item.id}
                      src={item.imageUrl}
                      alt={item.name}
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1,   opacity: 1 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <FallbackBg item={item} />
                  )}
                  {/* Bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* ── Content panel ── */}
              <div className="flex-1 px-8 md:px-10 py-10 flex flex-col overflow-y-auto max-h-[80vh] md:max-h-none">

                {/* Category */}
                <motion.p {...fade(0.15)} className="font-sans text-[9px] tracking-[0.35em] uppercase text-gold-accent mb-3">
                  {item.category} · {item.subcategory}
                </motion.p>

                {/* Name */}
                <motion.h2 {...fade(0.22)} className="font-serif text-2xl md:text-3xl font-bold text-primary-blue leading-tight mb-5">
                  {item.name}
                </motion.h2>

                {/* Gold rule draw-in */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.55, ease: 'easeOut', delay: 0.3 }}
                  className="w-12 h-[2px] bg-gold-accent mb-6"
                  style={{ transformOrigin: 'left' }}
                />

                {/* Description */}
                <motion.p {...fade(0.38)} className="font-sans text-[13px] md:text-sm text-warm-gray leading-relaxed flex-1">
                  {item.description}
                </motion.p>

                {/* Price */}
                {item.price && (
                  <motion.div
                    {...fade(0.48)}
                    className="mt-8 pt-5 border-t border-primary-blue/8 flex items-end gap-2"
                  >
                    <span className="font-serif text-3xl font-bold text-primary-blue leading-none">
                      {item.price}
                    </span>
                    <span className="font-sans text-sm text-warm-gray mb-0.5">DT</span>
                  </motion.div>
                )}

              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
