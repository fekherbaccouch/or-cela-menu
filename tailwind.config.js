/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#003399',
        'deep-blue':    '#001F5C',
        'gold-accent':  '#D49D35',
        'gold-light':   '#E8BB5A',
        'cream-paper':  '#FAF9F6',
        'tile-orange':  '#E07825',
        'warm-gray':    '#7A6E62',
        'ink':          '#1C1A18',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
