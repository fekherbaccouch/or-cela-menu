import { Beer, GlassWater, Wine, UtensilsCrossed, Leaf, Martini } from 'lucide-react'
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
      className="group flex items-center gap-2 text-left w-full
        px-2 py-[6px] my-[2px] rounded-sm border border-transparent
        hover:border-primary-blue/15 hover:bg-primary-blue/5
        active:bg-primary-blue/10 transition-all duration-150"
    >
      <span className="font-sans text-[10px] text-gold-accent/50 shrink-0 w-4 text-right">
        {prefix}
      </span>
      <span className="flex-1 font-sans text-[12px] md:text-[13px] font-semibold text-ink leading-snug
        group-hover:text-primary-blue transition-colors duration-150 underline decoration-dotted
        decoration-primary-blue/25 underline-offset-2">
        {item.name}
        {item.isFeatured && (
          <span className="ml-1.5 font-sans text-[8px] tracking-[0.12em] uppercase text-gold-accent font-bold">⭑</span>
        )}
      </span>
      {item.price && (
        <span className="font-sans text-[11px] text-primary-blue/60 font-semibold shrink-0 ml-1
          group-hover:text-primary-blue transition-colors duration-150">
          {item.price} DT
        </span>
      )}
      <span className="text-primary-blue/30 group-hover:text-primary-blue/70
        transition-colors duration-150 text-[12px] shrink-0">
        ›
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
  'Bières':      Beer,
  'Soft Drinks': GlassWater,
  'Vins Rouges': Wine,
  'Vins Rosés':  Wine,
  'Vins Blancs': Wine,
  'Vodka':       GlassWater,
  'Whisky':      Wine,
  'Gin':         Wine,
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

  const cocktailsSubs = SUBCATS.Cocktails.map(sub => ({
    sub, items: menuItems.filter(i => i.category === 'Cocktails' && i.subcategory === sub),
  }))

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
          className="bg-[#FAF9F6] px-6 sm:px-10 md:px-16 py-0"
          style={{ border: '1px solid rgba(212,157,53,0.35)' }}
        >
          {/* Brand header */}
          <div className="flex items-center justify-center">
            <OrCelaLogoTile size={154} />
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

          {/* ── COCKTAILS ── */}
          <OrnateDiv label="Cocktails" icon={Martini} />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {cocktailsSubs.map(({ sub, items }) => (
              <div key={sub}>
                <p className="font-sans text-[9px] tracking-[0.3em] uppercase font-bold text-primary-blue mb-3 text-center">{sub}</p>
                <div className="h-px bg-gold-accent/20 mb-4" />
                <ul>{items.map(item => <Item key={item.id} item={item} prefix="•" onSelect={onSelectItem} />)}</ul>
              </div>
            ))}
          </div>

          {/* ── BOISSONS ── */}
          <OrnateDiv label="Boissons" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {boissonsSubs.map(({ sub, items }) => (
              <div key={sub}>
                <SubHead icon={BOISSON_ICONS[sub] ?? Wine} title={sub} />
                <ul>{items.map(item => <Item key={item.id} item={item} prefix="•" onSelect={onSelectItem} />)}</ul>
              </div>
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
