import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        foreground: '#ffffff',
        accent: {
          DEFAULT: '#7c3aed', // Purple accent
          hover: '#6d28d9',
        },
        card: 'rgba(20, 20, 20, 0.6)',
      },
    },
  },
  plugins: [],
}
export default config
