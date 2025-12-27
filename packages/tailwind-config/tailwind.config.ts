import type { Config } from 'tailwindcss';

// We want each package to be responsible for its own content.
/**
 * @description
 * Каждый импортирующий пакет или приложение устанавливает `content`
 *
 */
const config: Omit<Config, 'content'> = {
  darkMode: ['class'],
  // NOTE: пример блока который необходимо настроить в приложении или пакете
  //   content: [
  //   './pages/**/*.{ts,tsx}',
  //   './components/**/*.{ts,tsx}',
  //   './app/**/*.{ts,tsx}',
  //   './src/**/*.{ts,tsx}',
  // ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        'glow-conic': 'conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)',
      },
    },
  },
  // plugins: [
  //   require('tailwindcss-animate')
  // ],
} satisfies <Config, 'content'>;

export default config;
