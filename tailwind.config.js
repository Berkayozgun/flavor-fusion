/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f0f4f8',
        secondary: '#d9e2ec',
        accent: '#48bb78',
        text: '#2d3748',
        background: '#f7fafc',
      },
    },
  },
  plugins: [],
}
