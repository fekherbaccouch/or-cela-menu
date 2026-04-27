import { motion } from 'framer-motion'

const U = (id) => `https://images.unsplash.com/photo-${id}?auto=format&q=80`

const PHOTOS = [
  { id: '1414235077428-338989a2e8c0', label: 'Ambiance'       },
  { id: '1559847844-5315695dadae',    label: 'Cuisine'         },
  { id: '1567620905732-2d1ec7ab7445', label: 'Nos Plats'       },
  { id: '1571877227200-a0d98ea607e9', label: 'Desserts'        },
  { id: '1510626176961-4b57d4fbad03', label: 'Le Bar'          },
  { id: '1585937421612-70a008356fbe', label: 'Tapas'           },
]

export default function GallerySection() {
  return (
    <section id="gallery" className="bg-ink py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10"
        >
          <div>
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold-accent mb-3">
              L'atmosphère
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream-paper uppercase tracking-wide">
              Galerie
            </h2>
          </div>
          <p className="font-serif italic text-cream-paper/40 text-sm md:text-base max-w-xs">
            Chaque détail reflète une ligne artistique singulière.
          </p>
        </motion.div>

        {/* Mobile: stacked rows. Desktop: editorial 4-col 2-row grid */}
        <div className="hidden md:grid md:grid-cols-4 md:grid-rows-2 gap-3" style={{ height: '520px' }}>

          {/* Big feature tile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-2 row-span-2 relative overflow-hidden group cursor-pointer"
          >
            <img
              src={`${U(PHOTOS[0].id)}&w=800&h=900&fit=crop`}
              alt={PHOTOS[0].label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold-accent mb-1">Or Cela</p>
              <p className="font-serif text-2xl font-bold text-cream-paper">{PHOTOS[0].label}</p>
            </div>
          </motion.div>

          {/* 4 smaller tiles */}
          {PHOTOS.slice(1, 5).map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden group cursor-pointer"
            >
              <img
                src={`${U(photo.id)}&w=500&h=500&fit=crop`}
                alt={photo.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="font-sans text-[9px] tracking-[0.2em] uppercase font-semibold text-cream-paper">
                  {photo.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile layout: 1 big + 2x2 grid */}
        <div className="md:hidden flex flex-col gap-2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden group cursor-pointer"
            style={{ height: '260px' }}
          >
            <img
              src={`${U(PHOTOS[0].id)}&w=800&h=500&fit=crop`}
              alt={PHOTOS[0].label}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold-accent mb-0.5">Or Cela</p>
              <p className="font-serif text-xl font-bold text-cream-paper">{PHOTOS[0].label}</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-2">
            {PHOTOS.slice(1, 5).map((photo, i) => (
              <motion.div
                key={photo.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="relative overflow-hidden group cursor-pointer aspect-square"
              >
                <img
                  src={`${U(photo.id)}&w=400&h=400&fit=crop`}
                  alt={photo.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-ink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase font-semibold text-cream-paper">
                    {photo.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <span className="inline-block bg-gold-accent/10 px-8 py-3
            font-sans text-[10px] tracking-[0.25em] uppercase text-gold-accent/70">
            Photos à venir — Ouverture très prochaine
          </span>
        </div>

      </div>
    </section>
  )
}
