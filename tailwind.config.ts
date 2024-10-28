import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  fontFamily: { montserrat: ['Montserrat'],
    theme: {
      extend: {
        boxShadow: {
          'custom': '0px 13px 19px 0px rgba(0, 0, 0, 0.07)', // Equivalent to #00000012
        
        colors: { background: "var(--background)", foreground: "var(--foreground)",},
      },
    },
  },
},
    plugins: [],
  };

export default config;
