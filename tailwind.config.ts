import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#ec4899",
          secondary: "#7f1d1d"
        }
      },
      fontFamily: {
        display: ["'Inter Variable'", "system-ui", "sans-serif"],
        body: ["'Inter Variable'", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
