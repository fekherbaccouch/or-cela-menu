import { MapPin, Phone } from 'lucide-react'
import { OrCelaLogoTile } from './OrCelaLogo'

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function FacebookIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

const HOURS = [
  { day: 'Tous les jours', time: '18h – 02h' },
]

export default function Footer() {
  return (
    <footer className="bg-ink">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <OrCelaLogoTile size={80} white={true} />
            </div>
            <p className="font-serif italic text-cream-paper/40 text-sm leading-relaxed mb-8">
              Une expérience culinaire et sensorielle au cœur de Gammarth.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/or.cela?igsh=anN6eWVrbDJwNXBq" target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 bg-gold-accent/10 flex items-center justify-center
                  text-gold-accent/70 hover:bg-gold-accent hover:text-primary-blue transition-all">
                <InstagramIcon size={15} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61583724637130" target="_blank" rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 bg-gold-accent/10 flex items-center justify-center
                  text-gold-accent/70 hover:bg-gold-accent hover:text-primary-blue transition-all">
                <FacebookIcon size={15} />
              </a>
              <a href="https://wa.me/21655959777" target="_blank" rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 bg-gold-accent/10 flex items-center justify-center
                  text-gold-accent/70 hover:bg-gold-accent hover:text-primary-blue transition-all">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold-accent mb-5">Horaires</p>
            <ul className="space-y-3.5">
              {HOURS.map(({ day, time }) => (
                <li key={day} className="flex items-start justify-between gap-4 pb-3.5">
                  <span className="font-sans text-[11px] font-semibold text-cream-paper/80 shrink-0">{day}</span>
                  <span className="font-sans text-[11px] text-cream-paper/40 text-right">{time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold-accent mb-5">Contact</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} strokeWidth={1.5} className="text-gold-accent/60 mt-0.5 shrink-0" />
                <span className="font-sans text-[12px] text-cream-paper/60 whitespace-pre-line leading-relaxed">
                  {'Hôtel Acquaviva\nGammarth, Tunisie'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} strokeWidth={1.5} className="text-gold-accent/60 mt-0.5 shrink-0" />
                <a href="https://wa.me/21655959777" target="_blank" rel="noopener noreferrer"
                  className="font-sans text-[12px] text-cream-paper/60 hover:text-gold-accent transition-colors">
                  +216 55 959 777
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold-accent mb-5">Navigation</p>
            <ul className="space-y-3">
              {['Menu', 'Notre Univers', 'Galerie'].map(item => (
                <li key={item}>
                  <a href={`#${item === 'Notre Univers' ? 'univers' : item.toLowerCase()}`}
                    className="font-sans text-[12px] text-cream-paper/50 hover:text-gold-accent
                      transition-colors tracking-wide">
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a href="https://wa.me/21655959777" target="_blank" rel="noopener noreferrer"
                  className="font-sans text-[12px] text-cream-paper/50 hover:text-gold-accent
                    transition-colors tracking-wide">
                  Réserver une table
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="h-px bg-white/8" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row
        items-center justify-between gap-3">
        <p className="font-sans text-[10px] text-cream-paper/25">
          © {new Date().getFullYear()} Or Cela · Hôtel Acquaviva, Gammarth, Tunisie. Tous droits réservés.
        </p>
        <p className="font-serif italic text-[11px] text-cream-paper/25">
          Merci de faire partie de l'expérience Or Cela.
        </p>
      </div>

    </footer>
  )
}
