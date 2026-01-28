module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0b4a6f',
          600: '#0d5f8f'
        },
        accent: '#d6a94f',
        muted: '#6b7280',
        surface: '#f8fafc',
        card: '#ffffff'
      },
      boxShadow: {
        'card-soft': '0 6px 18px rgba(15,23,36,0.06)'
      }
    }
  },
  plugins: []
};

