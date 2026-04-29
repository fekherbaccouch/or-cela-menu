import { Beer, GlassWater, Wine, UtensilsCrossed, Leaf } from 'lucide-react'
import { OrCelaLogoTile } from '../../components/ui/OrCelaLogo'
import { menuItems, SUBCATS } from '../../data/menuData'

/* ─────────────────────────────────────────────────────── */
/* Components                                              */
/* ─────────────────────────────────────────────────────── */
function OrnateDiv({ label, icon: Icon }) {
  return (
    <div className="flex items-center gap-4 my-10">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gold-accent/50" />
      <div className="text-center px-3">
        {Icon && <Icon size={16} strokeWidth={1.5} className="text-gold-accent mx-auto mb-2" />}
        <p className="font-sans text-[10px] md:text-[11px] tracking-[0.45em] uppercase font-bold text-gold-accent">
          ✦ {label} ✦
        </p>
      </div>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gold-accent/50" />
    </div>
  )
}

function Item({ item, prefix, onSelect }) {
  return (
    <button
      onClick={() => onSelect(item)}
      className="group flex items-start gap-2 text-left w-full py-[3px] hover:text-primary-blue transition-colors"
    >
      <span className="font-sans text-[10px] text-gold-accent/60 shrink-0 mt-[2px] w-4 text-right">
        {prefix}
      </span>
      <span className="flex-1 font-sans text-[12px] md:text-[13px] text-ink leading-snug group-hover:text-primary-blue">
        {item.name}
        {item.isFeatured && (
          <span className="ml-1.5 font-sans text-[8px] tracking-[0.12em] uppercase text-gold-accent font-bold">⭑</span>
        )}
      </span>
    </button>
  )
}

function SubHead({ icon: Icon, title }) {
  return (
    <div className="text-center mb-4">
      <Icon size={18} strokeWidth={1.5} className="text-gold-accent mx-auto mb-2" />
      <p className="font-sans text-[8px] tracking-[0.3em] uppercase font-bold text-primary-blue mb-2">{title}</p>
      <div className="h-px bg-gold-accent/30" />
    </div>
  )
}

/* ─────────────────────────────────────────────────────── */
/* Main View                                               */
/* ─────────────────────────────────────────────────────── */
const BOISSON_ICONS = {
  'Bières': Beer, 'Soft Drinks': GlassWater, 'Vins Rouges': Wine, 'Vins Rosés': Wine, 'Vins Blancs': Wine,
}

export default function MenuPrintView({ onSelectItem }) {
  /* Data Organising */
  const boissonsSubs = SUBCATS.Boissons.map(sub => ({
    sub, items: menuItems.filter(i => i.category === 'Boissons' && i.subcategory === sub),
  }))

  let counter = 1
  const cuisineNumbered = SUBCATS.Cuisine.map(sub => ({
    sub, items: menuItems.filter(i => i.category === 'Cuisine' && i.subcategory === sub).map(item => ({ item, num: counter++ })),
  }))

  const tapas = menuItems.filter(i => i.category === 'Tapas')
  const tapasChunk = [tapas.slice(0, 4), tapas.slice(4, 8), tapas.slice(8)]

  const checkerboardStyle = {
    backgroundColor: '#fff',
    backgroundImage: "url('/b1.png'), url('/b2.png'), url('/b2.png'), url('/b1.png')",
    backgroundPosition: '0px 0px, 40px 0px, 0px 60px, 40px 60px',
    backgroundSize: '80px 120px',
    backgroundRepeat: 'repeat',
  }

  return (
    <div className="w-full py-10 md:py-14 px-4 md:px-10 bg-white">
      <div className="max-w-5xl mx-auto p-[15px] md:p-[40px]" style={checkerboardStyle}>

        {/* Inner Document */}
        <div
          className="bg-[#FAF9F6] px-6 sm:px-10 md:px-16 py-12 md:py-16"
          style={{ border: '1px solid rgba(212,157,53,0.35)' }}
        >
          {/* Brand header */}
          <div className="text-center mb-10">
            <div className="flex flex-col items-center justify-center gap-2">
              <OrCelaLogoTile size={72} />
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary-blue leading-none">
                Or Cela
              </h1>
              <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-warm-gray">
                Restaurant · Bar · Music &amp; more
              </p>
            </div>
          </div>

          {/* ── BOISSONS ── */}
          <OrnateDiv label="Boissons" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {boissonsSubs.map(({ sub, items }) => (
              <div key={sub}>
                <SubHead icon={BOISSON_ICONS[sub] ?? Wine} title={sub} />
                <ul>{items.map(item => <Item key={item.id} item={item} prefix="•" onSelect={onSelectItem} />)}</ul>
              </div>
            ))}
          </div>

          {/* ── CUISINE ── */}
          <OrnateDiv label="Cuisine" icon={UtensilsCrossed} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {cuisineNumbered.map(({ sub, items }) => (
              <div key={sub}>
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase font-bold text-primary-blue mb-3 text-center">{sub}</p>
                <div className="h-px bg-gold-accent/20 mb-4" />
                <ul>{items.map(({ item, num }) => <Item key={item.id} item={item} prefix={`${num}.`} onSelect={onSelectItem} />)}</ul>
              </div>
            ))}
          </div>

          {/* ── TAPAS ── */}
          <OrnateDiv label="Tapas" icon={Leaf} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {tapasChunk.map((col, ci) => (
              <ul key={ci}>
                {col.map((item, li) => (
                  <Item key={item.id} item={item} prefix={`${ci * 4 + li + 1}.`} onSelect={onSelectItem} />
                ))}
              </ul>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="font-serif italic text-warm-gray text-sm">
              Merci de faire partie de l'expérience Or Cela.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
