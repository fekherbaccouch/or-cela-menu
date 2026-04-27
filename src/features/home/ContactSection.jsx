import { motion } from 'framer-motion'
import { MapPin, Clock, Phone, Mail } from 'lucide-react'

const HOURS = [
  { day: 'Lun – Ven', time: '12h00 – 15h00  ·  19h00 – 00h00' },
  { day: 'Samedi',    time: '12h00 – 01h00' },
  { day: 'Dimanche',  time: '12h00 – 23h00' },
]

const inputBase = `w-full bg-transparent py-3
  font-sans text-[13px] text-ink placeholder:text-warm-gray/40
  focus:outline-none transition-colors`

function Field({ id, label, type, options }) {
  if (type === 'select') {
    return (
      <div>
        <label htmlFor={id} className="block font-sans text-[9px] tracking-[0.2em] uppercase text-warm-gray mb-2">{label}</label>
        <div className="relative">
          <select id={id} className={inputBase + ' appearance-none bg-primary-blue/5 px-3 cursor-pointer'}>
            {options.map(o => <option key={o}>{o}</option>)}
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-gray/50 pointer-events-none text-[10px]">▾</span>
        </div>
      </div>
    )
  }
  return (
    <div>
      <label htmlFor={id} className="block font-sans text-[9px] tracking-[0.2em] uppercase text-warm-gray mb-2">{label}</label>
      <div className="bg-primary-blue/5">
        <input id={id} type={type} className={inputBase + ' px-3'} />
      </div>
    </div>
  )
}

export default function ContactSection() {
  return (
    <section id="contact" className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-5">

        {/* Left info panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-2 bg-deep-blue px-8 md:px-12 lg:px-14 py-20 md:py-28 flex flex-col gap-10"
        >
          <div>
            <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold-accent mb-4">
              Nous rejoindre
            </p>
            <h2 className="font-serif text-4xl font-bold text-cream-paper leading-tight">
              Contact &<br />Réservation
            </h2>
          </div>

          <div className="space-y-7">
            {[
              { icon: MapPin, label: 'Adresse',   value: 'Hôtel Acquaviva\nGammarth, Tunisie' },
              { icon: Phone,  label: 'Téléphone', value: '+216 XX XXX XXX'                     },
              { icon: Mail,   label: 'E-mail',    value: 'contact@orcela.tn'                   },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4">
                <div className="w-9 h-9 bg-gold-accent/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon size={15} strokeWidth={1.5} className="text-gold-accent" />
                </div>
                <div>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold-accent/70 mb-1">{label}</p>
                  <p className="font-sans text-[13px] text-cream-paper/80 whitespace-pre-line">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="flex items-center gap-3 mb-5">
              <Clock size={13} className="text-gold-accent" />
              <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold-accent/70">Horaires</p>
            </div>
            <ul className="space-y-3">
              {HOURS.map(({ day, time }) => (
                <li key={day} className="flex items-start justify-between gap-4">
                  <span className="font-sans text-[11px] font-semibold text-cream-paper/80 shrink-0">{day}</span>
                  <span className="font-sans text-[11px] text-cream-paper/50 text-right">{time}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Right form panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="lg:col-span-3 bg-cream-paper px-8 md:px-12 lg:px-16 py-20 md:py-28 flex flex-col justify-center"
        >
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold-accent mb-2">
            Formulaire
          </p>
          <h3 className="font-serif text-3xl font-bold text-primary-blue mb-10">
            Demande de réservation
          </h3>

          <form onSubmit={e => e.preventDefault()} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field id="name"   label="Nom complet"    type="text"   />
              <Field id="phone"  label="Téléphone"      type="tel"    />
              <Field id="email"  label="E-mail"         type="email"  />
              <Field id="date"   label="Date souhaitée" type="date"   />
              <Field id="guests" label="Couverts"       type="select"
                options={['1 personne','2 personnes','3-4 personnes','5-6 personnes','7-10 personnes','10+ personnes']} />
              <Field id="time"   label="Heure préférée" type="select"
                options={['12h00','13h00','14h00','19h00','20h00','21h00','22h00']} />
            </div>

            <div>
              <label htmlFor="message"
                className="block font-sans text-[9px] tracking-[0.2em] uppercase text-warm-gray mb-2">
                Message (optionnel)
              </label>
              <div className="bg-primary-blue/5 px-3">
                <textarea
                  id="message"
                  rows={3}
                  className="w-full bg-transparent py-3 font-sans text-[13px] text-ink
                    placeholder:text-warm-gray/40 resize-none focus:outline-none"
                  placeholder="Allergies, occasions spéciales…"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary-blue font-sans text-[11px] font-bold
                tracking-[0.25em] uppercase text-cream-paper hover:bg-deep-blue
                transition-colors shadow-md mt-2"
            >
              Envoyer la demande
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  )
}
