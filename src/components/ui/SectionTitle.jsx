/* Decorative section header — flanking lines + diamond ornament */
export default function SectionTitle({ children, italic = false, size = 'lg' }) {
  const textClass = size === 'xl'
    ? 'text-3xl md:text-4xl'
    : 'text-2xl md:text-3xl'

  return (
    <div className="text-center mb-1">
      <div className="flex items-center gap-3">
        <div className="flex-1 border-t-2 border-primary-blue" />
        <h2
          className={`font-serif font-bold text-primary-blue tracking-[0.18em] uppercase px-4 ${textClass} ${italic ? 'italic' : ''}`}
        >
          {children}
        </h2>
        <div className="flex-1 border-t-2 border-primary-blue" />
      </div>

      {/* Gold sub-ornament */}
      <div className="flex items-center justify-center gap-2 mt-1.5">
        <div className="w-10 border-t border-gold-accent" />
        <div className="w-2 h-2 bg-gold-accent rotate-45 shrink-0" />
        <div className="w-10 border-t border-gold-accent" />
      </div>
    </div>
  )
}
