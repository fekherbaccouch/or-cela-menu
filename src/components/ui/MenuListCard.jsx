export default function MenuListCard({ item, globalIndex, onClick }) {
  return (
    <article
      onClick={() => onClick(item)}
      className="group cursor-pointer bg-white flex flex-col
        hover:bg-primary-blue transition-all duration-300
        shadow-sm hover:shadow-xl p-7 md:p-8 min-h-[240px]"
      aria-label={`Voir ${item.name}`}
    >
      {/* Top row: index + featured badge */}
      <div className="flex items-start justify-between mb-5">
        <span className="font-sans text-[9px] tracking-[0.35em] uppercase font-semibold
          text-warm-gray/40 group-hover:text-cream-paper/35 transition-colors">
          {String(globalIndex).padStart(2, '0')}
        </span>
        {item.isFeatured && (
          <div className="bg-gold-accent px-2.5 py-1">
            <span className="font-sans text-[8px] tracking-[0.18em] uppercase font-bold text-primary-blue">
              ⭑ Chef's Pick
            </span>
          </div>
        )}
      </div>

      {/* Name */}
      <h3 className="font-serif text-[18px] md:text-xl font-bold text-ink leading-tight
        group-hover:text-cream-paper transition-colors duration-300 mb-4">
        {item.name}
      </h3>

      {/* Gold rule */}
      <div className="w-10 h-px bg-gold-accent/50 group-hover:bg-gold-accent transition-colors mb-4" />

      {/* Description */}
      <p className="font-sans text-[12px] text-warm-gray leading-relaxed
        group-hover:text-cream-paper/65 transition-colors duration-300 flex-1">
        {item.description}
      </p>

      {/* Footer: tags + price */}
      <div className="flex items-end justify-between gap-3 mt-6">
        <div className="flex flex-wrap gap-1.5">
          <span className="px-2 py-0.5 font-sans text-[8px] tracking-[0.12em] uppercase font-semibold
            bg-primary-blue/8 text-primary-blue
            group-hover:bg-white/15 group-hover:text-cream-paper transition-all">
            {item.origin}
          </span>
          {item.type.slice(0, 2).map(t => (
            <span key={t} className="px-2 py-0.5 font-sans text-[8px] tracking-[0.12em] uppercase font-semibold
              bg-gold-accent/12 text-gold-accent
              group-hover:bg-gold-accent/25 group-hover:text-gold-accent transition-all">
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
