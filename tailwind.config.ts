import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { 
        primary: 'var(--primary)',
        example:'var(--example)', 
        'example-2':'var(--example-2)',  
      },
    },
  },
  plugins: [],
} satisfies Config;
