import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const FOOD = [
  { src: '/brk-001.webp',  label: 'Assortiment Brik'      },
  { src: '/brk-002.webp',  label: 'Brik Danouni'          },
  { src: '/brk-003.webp',  label: 'Assortiment Brik'      },
  { src: '/ef-002.webp',   label: 'Salade Tunisienne'      },
  { src: '/ef-003.webp',   label: 'Sardines Marinées'      },
  { src: '/piz-001.webp',  label: 'Pizza Nokhet Lebled'    },
  { src: '/piz-002.webp',  label: 'Pizza Halk Lwed'        },
  { src: '/sui-001.webp',  label: 'Madfouna Boulettes'     },
  { src: '/sui-002.webp',  label: 'Klaya Agneau'           },
  { src: '/taj-001.webp',  label: 'Assortiment Tajine'     },
  { src: '/taj-002.webp',  label: 'Assortiment Tajine'     },
  { src: '/taj-003.webp',  label: 'Tajin Salade Méchouia'  },
]

const COCKTAILS = [
  { src: '/cnot-001.webp', label: 'Elmdina'        },
  { src: '/cnot-002.webp', label: 'Sidi Bou'       },
  { src: '/cnot-003.webp', label: 'Tunisiano'      },
  { src: '/csig-004.webp', label: 'Ice Breath'     },
]

const WINES = [
  { src: '/vin-r-001.webp',   label: 'Vin Rouge'   },
  { src: '/vin-r-002.webp',   label: 'Vin Rouge'   },
  { src: '/vin-r-003.webp',   label: 'Vin Rouge'   },
  { src: '/vin-r-004.webp',   label: 'Vin Rouge'   },
  { src: '/vin-r-005.webp',   label: 'Vin Rouge'   },
  { src: '/vin-r-006.webp',   label: 'Vin Rouge'   },
  { src: '/vin-ros-002.webp', label: 'Vin Rosé'    },
  { src: '/vin-ros-003.webp', label: 'Vin Rosé'    },
  { src: '/vin-ros-004.webp', label: 'Vin Rosé'    },
  { src: '/vin-ros-005.webp', label: 'Vin Rosé'    },
  { src: '/vin-ros-007.webp', label: 'Vin Rosé'    },
  { src: '/vin-ros-008.webp', label: 'Vin Rosé'    },
  { src: '/vin-b-001.webp',   label: 'Vin Blanc'   },
  { src: '/vin-b-002.webp',   label: 'Vin Blanc'   },
  { src: '/vin-b-003.webp',   label: 'Vin Blanc'   },
  { src: '/vin-b-005.webp',   label: 'Vin Blanc'   },
  { src: '/vin-b-006.webp',   label: 'Vin Blanc'   },
  { src: '/vin-b-007.webp',   label: 'Vin Blanc'   },
  { src: '/vin-b-008.webp',   label: 'Vin Blanc'   },
]

const ALL = [...FOOD, ...COCKTAILS, ...WINES]

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5)
}

function AnimatedTile({ images, interval = 4000, className }) {
  const [pool] = useState(() => shuffle(images))
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex(i => (i + 1) % pool.length), interval)
    return () => clearInterval(t)
  }, [pool, interval])

  const current = pool[index]

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <AnimatePresence mode="sync">
        <motion.div
          key={current.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <motion.img
            src={current.src}
            alt={current.label}
            initial={{ scale: 1.06 }}
            animate={{ scale: 1 }}
            exit={{ scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5">
            <p className="font-sans text-[9px] tracking-[0.25em] uppercase text-gold-accent mb-0.5">Or Cela</p>
            <p className="font-serif text-lg md:text-xl font-bold text-cream-paper leading-tight">
              {current.label}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

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

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-4 md:grid-rows-2 gap-3" style={{ height: '520px' }}>
          <AnimatedTile images={ALL}       interval={3800} className="col-span-2 row-span-2" />
          <AnimatedTile images={FOOD}      interval={4200} className="col-span-1 row-span-1" />
          <AnimatedTile images={COCKTAILS} interval={3200} className="col-span-1 row-span-1" />
          <AnimatedTile images={WINES}     interval={4800} className="col-span-1 row-span-1" />
          <AnimatedTile images={ALL}       interval={3500} className="col-span-1 row-span-1" />
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col gap-2">
          <AnimatedTile images={ALL} interval={3800} className="relative h-[260px]" />
          <div className="grid grid-cols-2 gap-2">
            <AnimatedTile images={FOOD}      interval={4000} className="relative aspect-square" />
            <AnimatedTile images={COCKTAILS} interval={3200} className="relative aspect-square" />
            <AnimatedTile images={WINES}     interval={4500} className="relative aspect-square" />
            <AnimatedTile images={ALL}       interval={3600} className="relative aspect-square" />
          </div>
        </div>

      </div>
    </section>
  )
}
