// tailwind.config.ts
export default {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0d062a",
        secondary: "#aaa6c3",
        darken: "#000",
        whiten: "#fff",
        gray: "#E8E7E9",
        violet: "#915EFF",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
        sm: "650px",
        md: "900px",
        lg: "1200px",
      },
    },
  },
  plugins: [
    // Include any plugins you may need
  ],
} as const;
