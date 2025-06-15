import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        discord: {
          dark: '#2c2f33',
          darker: '#23272a',
          light: '#36393f',
          blurple: '#5865f2',
          green: '#57f287',
          yellow: '#fee75c',
          red: '#ed4245',
          text: '#dcddde',
          muted: '#72767d',
        },
      },
      fontFamily: {
        sans: ['Whitney', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
export default config