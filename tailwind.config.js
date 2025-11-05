/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // tokens will be populated after design audit
      colors: {
        'custom-grayish': 'oklch(.95 .0058 264.53)',
      },
    },
  },
  plugins: [],
}

