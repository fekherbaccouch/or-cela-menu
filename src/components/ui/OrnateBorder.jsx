/*
  OrnateBorder — matches the reference flyer frame:
  • Outer thin gold rule
  • Blue geometric tile strip (repeating diamond motif)
  • Inner thin gold rule
  • Large circular corner medallions (chart.png)
*/

/* ── 80×80 tile: navy blue base, large cream diamond w/ nested rings,
      orange quarter-circles at corners, green buds at midpoints ── */
const T = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
  <rect width="80" height="80" fill="#001060"/>

  <!-- cream outer diamond -->
  <polygon points="40,3 77,40 40,77 3,40" fill="#EEE3C8"/>
  <!-- gold ring -->
  <polygon points="40,10 70,40 40,70 10,40" fill="#C8921A"/>
  <!-- orange ring -->
  <polygon points="40,18 62,40 40,62 18,40" fill="#C05418"/>
  <!-- blue ring -->
  <polygon points="40,26 54,40 40,54 26,40" fill="#001060"/>
  <!-- small gold diamond -->
  <polygon points="40,31 49,40 40,49 31,40" fill="#C8921A"/>
  <!-- cream dot -->
  <circle cx="40" cy="40" r="4"   fill="#001060"/>
  <circle cx="40" cy="40" r="2"   fill="#EEE3C8"/>

  <!-- green leaf buds at midpoints -->
  <ellipse cx="40" cy="1.5" rx="5"   ry="7"   fill="#357028"/>
  <ellipse cx="40" cy="78.5" rx="5"  ry="7"   fill="#357028"/>
  <ellipse cx="1.5" cy="40"  rx="7"  ry="5"   fill="#357028"/>
  <ellipse cx="78.5" cy="40" rx="7"  ry="5"   fill="#357028"/>

  <!-- orange quarter-circles at tile corners -->
  <circle cx="0"  cy="0"  r="13" fill="#C05418"/>
  <circle cx="80" cy="0"  r="13" fill="#C05418"/>
  <circle cx="0"  cy="80" r="13" fill="#C05418"/>
  <circle cx="80" cy="80" r="13" fill="#C05418"/>

  <!-- white arch in each corner -->
  <path d="M0,13 A13,13,0,0,0,13,0 L0,0 Z"   fill="#EEE3C8"/>
  <path d="M67,0 A13,13,0,0,0,80,13 L80,0 Z"  fill="#EEE3C8"/>
  <path d="M0,67 A13,13,0,0,0,13,80 L0,80 Z"  fill="#EEE3C8"/>
  <path d="M67,80 A13,13,0,0,0,80,67 L80,80 Z" fill="#EEE3C8"/>

  <!-- gold ring on corner dot -->
  <circle cx="0"  cy="0"  r="7" fill="none" stroke="#C8921A" stroke-width="1.5"/>
  <circle cx="80" cy="0"  r="7" fill="none" stroke="#C8921A" stroke-width="1.5"/>
  <circle cx="0"  cy="80" r="7" fill="none" stroke="#C8921A" stroke-width="1.5"/>
  <circle cx="80" cy="80" r="7" fill="none" stroke="#C8921A" stroke-width="1.5"/>
</svg>`)

const TILE = `url("data:image/svg+xml,${T}")`

/* ── Circular corner medallion using the real zellige photo ── */
function Corner({ pos }) {
  const base = 'absolute z-20 pointer-events-none select-none'
  const style = {
    tl: { top: 0,    left:  0,  transform: 'translate(-38%, -38%)' },
    tr: { top: 0,    right: 0,  transform: 'translate( 38%, -38%)' },
    bl: { bottom: 0, left:  0,  transform: 'translate(-38%,  38%)' },
    br: { bottom: 0, right: 0,  transform: 'translate( 38%,  38%)' },
  }[pos]

  return (
    <div className={base} style={{ ...style, width: 200, height: 200,
      borderRadius: '50%', overflow: 'hidden',
      boxShadow: '0 0 0 3px #C8921A, 0 0 0 6px #001060, 0 6px 24px rgba(0,0,0,0.35)',
      position: 'absolute',
    }}>
      <img src="/chart.png" alt="" aria-hidden="true"
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
  )
}

export default function OrnateBorder({ children }) {
  const strip = {
    backgroundImage: TILE,
    backgroundSize:  '80px 80px',
    backgroundRepeat: 'repeat',
  }

  return (
    <div style={{ position: 'relative', width: '100%', backgroundColor: '#001060' }}>

      {/* ── Outer gold line ── */}
      <div style={{ position: 'absolute', inset: 0, border: '2px solid #C8921A', zIndex: 15, pointerEvents: 'none' }} />

      {/* ── Tile strips ── */}
      <div style={{ position: 'absolute', top: 4,    left: 4,  right: 4,  height: 80, zIndex: 10, pointerEvents: 'none', ...strip }} />
      <div style={{ position: 'absolute', bottom: 4, left: 4,  right: 4,  height: 80, zIndex: 10, pointerEvents: 'none', ...strip }} />
      <div style={{ position: 'absolute', top: 84,   left: 4,  bottom: 84, width: 80, zIndex: 10, pointerEvents: 'none', ...strip }} />
      <div style={{ position: 'absolute', top: 84,   right: 4, bottom: 84, width: 80, zIndex: 10, pointerEvents: 'none', ...strip }} />

      {/* ── Inner gold line ── */}
      <div style={{
        position: 'absolute', top: 84, left: 84, right: 84, bottom: 84,
        border: '2px solid #C8921A', zIndex: 11, pointerEvents: 'none',
      }} />

      {/* ── Corner medallions ── */}
      <Corner pos="tl" />
      <Corner pos="tr" />
      <Corner pos="bl" />
      <Corner pos="br" />

      {/* ── Content ── */}
      <div style={{ position: 'relative', zIndex: 5, padding: '100px 100px' }}>
        {children}
      </div>

    </div>
  )
}
