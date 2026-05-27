export function OrCelaLogoTile({ size = 64, className = '', white = false }) {
  return (
    <img
      src={white ? '/logowhite.png' : '/logo.png'}
      width={size}
      height={size}
      alt="Or Cela logo"
      className={className}
      style={{ objectFit: 'cover', display: 'block' }}
    />
  )
}
