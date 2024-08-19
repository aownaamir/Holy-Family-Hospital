/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mehron: {
          100: "#8C1D1D",
        },
      },
      backgroundColor: {
        mehron: {
          100: "#8C1D1D",
        },
      },
      borderColor: {
        mehron: {
          100: "#8C1D1D",
        },
      },
    },
  },
  plugins: [],
};
