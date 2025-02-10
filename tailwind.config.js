// @ts-check
import { createPreset } from 'fumadocs-ui/tailwind-plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './mdx-components.{ts,tsx}',
    './node_modules/fumadocs-ui/dist/**/*.js',
  ],
  presets: [createPreset({
    preset: {

      light: {
        background: '0 0% 98%',
        foreground: '0 0% 3.9%',
        muted: '220 90% 96.1%',
        'muted-foreground': '0 0% 45.1%',
        popover: '0 0% 98%',
        'popover-foreground': '0 0% 15.1%',
        card: '220 50% 98%',
        'card-foreground': '0 0% 3.9%',
        border: '220 50% 89.8%',
        primary: '210 80% 20.2%',
        'primary-foreground': '0 0% 98%',
        secondary: '220 90% 96.1%',
        'secondary-foreground': '0 0% 9%',
        accent: '220 50% 94.1%',
        'accent-foreground': '0 0% 9%',
        ring: '220 100% 63.9%',
      },
      dark: {
        'card-foreground': '220 60% 94.5%',
        'primary-foreground': '0 0% 9%',
        'secondary-foreground': '220 80% 90%',
        ring: '205 100% 85%',
        card: '220 50% 10%',
        muted: '220 50% 10%',
        'muted-foreground': '220 30% 65%',
        'accent-foreground': '220 80% 90%',
        popover: '220 50% 10%',
        'popover-foreground': '220 30% 65%',
        accent: '220 40% 20%',
        secondary: '220 50% 20%',
        background: '220 60% 6%',
        foreground: '220 60% 94.5%',
        primary: '205 100% 85%',
        border: '220 50% 20%',
      },
      css: {
        '.dark body': {
          'background-image': 'linear-gradient(rgba(5, 105, 255, 0.15), transparent 20rem, transparent)',
          'background-repeat': 'no-repeat',
        },
      },
    }
  })],
};
