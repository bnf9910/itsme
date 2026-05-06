import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 청담잇츠미 베이지/아이보리 인테리어 무드 + 블랙앤화이트 메인
        ink: {
          DEFAULT: '#0A0A0A', // 메인 블랙
          900: '#161616',
          700: '#3A3A3A',
          500: '#6B6B6B',
        },
        bone: {
          DEFAULT: '#F8F5F0', // 클리닉 인테리어의 베이지/아이보리
          50: '#FCFAF7',
          100: '#F8F5F0',
          200: '#EFE9DF',
          300: '#E0D7C8',
          500: '#C4B49E',
        },
        accent: {
          DEFAULT: '#A88B5C', // 골드 포인트 (럭셔리)
          dark: '#8B7148',
        },
      },
      fontFamily: {
        // Editorial 럭셔리 무드: 디스플레이는 세리프, 본문은 산세리프
        display: ['var(--font-display)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      letterSpacing: {
        'widest-2': '0.25em',
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'fade-up': 'fadeUp 1s ease-out forwards',
        'reveal': 'reveal 1.4s cubic-bezier(0.65, 0, 0.35, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        reveal: {
          '0%': { clipPath: 'inset(0 100% 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
