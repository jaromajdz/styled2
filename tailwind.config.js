/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
        colors:{
          'foreground': {
              DEFAULT: 'rgb(var(--foreground-color) / <alpha-value>)',
              '50': 'rgb(var(--foreground-color-50) / <alpha-value>)',
              '100': 'rgb(var(--foreground-color-100) / <alpha-value>)',
              '200': 'rgb(var(--foreground-color-200) / <alpha-value>)',
              '300': 'rgb(var(--foreground-color-300) / <alpha-value>)',
              '400': 'rgb(var(--foreground-color-400) / <alpha-value>)',
              '500': 'rgb(var(--foreground-color-500) / <alpha-value>)',
              '600': 'rgb(var(--foreground-color-600) / <alpha-value>)',
              '700': 'rgb(var(--foreground-color-700) / <alpha-value>)',
              '800': 'rgb(var(--foreground-color-800) / <alpha-value>)',
              '900': 'rgb(var(--foreground-color-900) / <alpha-value>)',
              '950': 'rgb(var(--foreground-color-950) / <alpha-value>)',
          },
          'background': {
            DEFAULT: 'rgb(var(--background-color) / <alpha-value>)',
            '50': 'rgb(var(--background-color-50) / <alpha-value>)',
            '100': 'rgb(var(--background-color-100) / <alpha-value>)',
            '200': 'rgb(var(--background-color-200) / <alpha-value>)',
            '300': 'rgb(var(--background-color-300) / <alpha-value>)',
            '400': 'rgb(var(--background-color-400) / <alpha-value>)',
            '500': 'rgb(var(--background-color-500) / <alpha-value>)',
            '600': 'rgb(var(--background-color-600) / <alpha-value>)',
            '700': 'rgb(var(--background-color-700) / <alpha-value>)',
            '800': 'rgb(var(--background-color-800) / <alpha-value>)',
            '900': 'rgb(var(--background-color-900) / <alpha-value>)',
            '950': 'rgb(var(--background-color-950) / <alpha-value>)',
        },
        'primary': {
          DEFAULT: 'rgb(var(--primary-color) / <alpha-value>)',
          '50': 'rgb(var(--primary-color-50) / <alpha-value>)',
          '100': 'rgb(var(--primary-color-100) / <alpha-value>)',
          '200': 'rgb(var(--primary-color-200) / <alpha-value>)',
          '300': 'rgb(var(--primary-color-300) / <alpha-value>)',
          '400': 'rgb(var(--primary-color-400) / <alpha-value>)',
          '500': 'rgb(var(--primary-color-500) / <alpha-value>)',
          '600': 'rgb(var(--primary-color-600) / <alpha-value>)',
          '700': 'rgb(var(--primary-color-700) / <alpha-value>)',
          '800': 'rgb(var(--primary-color-800) / <alpha-value>)',
          '900': 'rgb(var(--primary-color-900) / <alpha-value>)',
          '950': 'rgb(var(--primary-color-950) / <alpha-value>)',
        },
        'secondary': {
          default: 'rgb(var(--secondary-color) / <alpha-value>)',
          '50': 'rgb(var(--secondary-color-50) / <alpha-value>)',
          '100': 'rgb(var(--secondary-color-100) / <alpha-value>)',
          '200': 'rgb(var(--secondary-color-200) / <alpha-value>)',
          '300': 'rgb(var(--secondary-color-300) / <alpha-value>)',
          '400': 'rgb(var(--secondary-color-400) / <alpha-value>)',
          '500': 'rgb(var(--secondary-color-500) / <alpha-value>)',
          '600': 'rgb(var(--secondary-color-600) / <alpha-value>)',
          '700': 'rgb(var(--secondary-color-700) / <alpha-value>)',
          '800': 'rgb(var(--secondary-color-800) / <alpha-value>)',
          '900': 'rgb(var(--secondary-color-900) / <alpha-value>)',
          '950': 'rgb(var(--secondary-color-950) / <alpha-value>)',
        },
        
        'accent': {
          default: 'rgb(var(--accent-color) / <alpha-value>)',
          '50': 'rgb(var(--accent-color-50) / <alpha-value>)',
          '100': 'rgb(var(--accent-color-100) / <alpha-value>)',
          '200': 'rgb(var(--accent-color-200) / <alpha-value>)',
          '300': 'rgb(var(--accent-color-300) / <alpha-value>)',
          '400': 'rgb(var(--accent-color-400) / <alpha-value>)',
          '500': 'rgb(var(--accent-color-500) / <alpha-value>)',
          '600': 'rgb(var(--accent-color-600) / <alpha-value>)',
          '700': 'rgb(var(--accent-color-700) / <alpha-value>)',
          '800': 'rgb(var(--accent-color-800) / <alpha-value>)',
          '900': 'rgb(var(--accent-color-900) / <alpha-value>)',
          '950': 'rgb(var(--accent-color-950) / <alpha-value>)',
        }
        
      },
    },
  },
  plugins: [],
}

