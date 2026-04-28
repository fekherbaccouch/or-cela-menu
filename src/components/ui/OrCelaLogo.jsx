export function OrCelaLogoTile({ size = 64, className = '' }) {
  return (
    <img
      src="/chart.png"
      width={size}
      height={size}
      alt="Or Cela logo"
      className={className}
      style={{ objectFit: 'cover', display: 'block' }}
    />
  )
}
