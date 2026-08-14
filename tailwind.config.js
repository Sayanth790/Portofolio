/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      keyframes: {
        scan: {
          '0%': { transform: 'translateY(-150%)' },
          '100%': { transform: 'translateY(450%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slowPulse: {
          '0%, 100%': { opacity: '0.6', transform: 'translate(-50%, -50%) scale(1)' },
          '50%': { opacity: '1', transform: 'translate(-50%, -50%) scale(1.1)' },
        },
      },
      animation: {
        'scan': 'scan 3.5s linear infinite',
        'fadeInUp': 'fadeInUp 1s ease-out 0.4s forwards',
        'pulse-slow': 'slowPulse 7s ease-in-out infinite',
      },
      colors: {
        background: '#050505',
      },
    },
  },
  plugins: [],
};
