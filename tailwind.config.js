export default {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
      secondary: ['Roboto Mono', 'monospace'],
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      us: '320px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('/public/assets/site-bg3.png')",
        about: "url('/public/assets/about.png')",
        services: "url('/public/assets/services.png')",
      },
    },
  },
  plugins: [],
};