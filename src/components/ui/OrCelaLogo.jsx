/* Tunisian Zellige tile icon — SVG approximation of the Or Cela brand logo */
export function OrCelaLogoTile({ size = 64, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 72 72"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Or Cela logo"
    >
      <rect width="72" height="72" fill="#003399" rx="2" />
      <rect x="4" y="4" width="64" height="64" fill="#FAF9F6" />
      <polygon points="36,8 64,36 36,64 8,36"  fill="#003399" />
      <polygon points="36,15 57,36 36,57 15,36" fill="#FAF9F6" />
      <polygon points="36,22 50,36 36,50 22,36" fill="#D49D35" />
      <polygon points="36,28 44,36 36,44 28,36" fill="#003399" />
      <circle cx="36" cy="36" r="9" fill="#FAF9F6" />
      <ellipse cx="36" cy="27" rx="3.5" ry="5.5" fill="#D49D35" />
      <ellipse cx="36" cy="45" rx="3.5" ry="5.5" fill="#D49D35" />
      <ellipse cx="27" cy="36" rx="5.5" ry="3.5" fill="#D49D35" />
      <ellipse cx="45" cy="36" rx="5.5" ry="3.5" fill="#D49D35" />
      <circle cx="36" cy="36" r="4.5" fill="#003399" />
      <circle cx="36" cy="36" r="2"   fill="#FAF9F6" />
      <rect x="5.5"  y="5.5"  width="7" height="7" fill="#E07825" transform="rotate(45 9 9)"   />
      <rect x="59.5" y="5.5"  width="7" height="7" fill="#E07825" transform="rotate(45 63 9)"  />
      <rect x="5.5"  y="59.5" width="7" height="7" fill="#E07825" transform="rotate(45 9 63)"  />
      <rect x="59.5" y="59.5" width="7" height="7" fill="#E07825" transform="rotate(45 63 63)" />
      <circle cx="9"  cy="9"  r="2.5" fill="#3D9B3D" />
      <circle cx="63" cy="9"  r="2.5" fill="#3D9B3D" />
      <circle cx="9"  cy="63" r="2.5" fill="#3D9B3D" />
      <circle cx="63" cy="63" r="2.5" fill="#3D9B3D" />
    </svg>
  )
}
