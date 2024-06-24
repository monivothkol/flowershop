/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,vue,js,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'border': 'border 4s ease infinite',
      },
    }, 
    
  },
  plugins: [],
}

