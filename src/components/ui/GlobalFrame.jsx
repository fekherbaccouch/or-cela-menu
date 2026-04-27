/* Fixed Tunisian tile border that frames the entire viewport — z-50, pointer-events-none */
export default function GlobalFrame() {
  return (
    <div className="fixed inset-0 z-50 pointer-events-none" aria-hidden="true">

      {/* ── Tile strips ── */}
      <div className="absolute inset-x-0 top-0    h-5 tile-strip" />
      <div className="absolute inset-x-0 bottom-0 h-5 tile-strip" />
      <div className="absolute inset-y-0 left-0   w-5 tile-strip" />
      <div className="absolute inset-y-0 right-0  w-5 tile-strip" />

      {/* ── Inner gold accent lines ── */}
      <div className="absolute top-5    inset-x-0 h-px bg-gold-accent" />
      <div className="absolute bottom-5 inset-x-0 h-px bg-gold-accent" />
      <div className="absolute left-5   inset-y-0 w-px bg-gold-accent" />
      <div className="absolute right-5  inset-y-0 w-px bg-gold-accent" />

      {/* ── Corner diamond ornaments ── */}
      {[
        'top-5    left-5  -translate-x-1/2 -translate-y-1/2',
        'top-5    right-5  translate-x-1/2 -translate-y-1/2',
        'bottom-5 left-5  -translate-x-1/2  translate-y-1/2',
        'bottom-5 right-5  translate-x-1/2  translate-y-1/2',
      ].map((pos, i) => (
        <div
          key={i}
          className={`absolute ${pos} w-3 h-3 bg-gold-accent rotate-45`}
        />
      ))}

    </div>
  )
}
