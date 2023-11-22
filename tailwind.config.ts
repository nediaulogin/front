import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      minHeight: {
        '3/4': '75vh',
        '2/3': '70vh',
      },
      backgroundImage: {},
    },
  },
  plugins: [],

}
export default config
