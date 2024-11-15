/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'earth': '#8B5E3C',
        'forest': '#2C5530',
        
        // Secondary Colors
        'mushroom': '#9A8F85',
        'sky': '#7CA5B8',
        
        // Accent Colors
        'moon': '#C9B037',
        'sunset': '#E85D3F',
        
        // Neutral Tones
        'stone': {
          light: '#F5F2ED',
          dark: '#2F2F2F',
        }
      },
      fontFamily: {
        'sans': [
          'SF Pro Display',
          'Helvetica Neue',
          'Arial Nova',
          'Helvetica',
          'Arial',
          'sans-serif'
        ],
        'serif': [
          'Iowan Old Style',
          'Palatino Linotype',
          'URW Palladio L',
          'P052',
          'serif'
        ],
      },
      spacing: {
        'natural': '24px', // Minimum spacing between major elements
      },
      borderRadius: {
        'organic': '1.5rem', // For rounded corners
      }
    },
  },
  plugins: [],
}

