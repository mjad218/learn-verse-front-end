/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        accent: "#03045E",
        accent2: "#023E8A",
        accent3: "#0077B6",
        accent4: "#0096C7",
        accent5: "#00B4D8",
        accent6: "#48CAE4",
        accent7: "#90E0EF",
        accent8: "#ADE8F4",
        accent9: "#CAF0F8",
        accent10: "#f9feff",
      },
      backgroundColor: {
        accent: "#3e63dd",
      },
      fontFamily: {
        roboto: "var(--font-roboto)",
        dmSerif: "var(--font-title)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
