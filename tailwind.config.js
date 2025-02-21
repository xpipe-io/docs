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
    '../node_modules/fumadocs-openapi/dist/**/*.js'
  ],
  presets: [createPreset({
    preset: {

      light: {
        background: '0 0% 98%',
        foreground: '0 0% 3.9%',
        muted: '220 0% 96.1%',
        'muted-foreground': '0 0% 20.1%',
        popover: '0 0% 98%',
        'popover-foreground': '0 0% 15.1%',
        card: '220 0% 100%',
        'card-foreground': '0 0% 3.9%',
        border: '220 0% 75.8%',
        primary: '175 90% 25.2%',
        'primary-foreground': '0 0% 98%',
        secondary: '220 0% 100.1%',
        'secondary-foreground': '0 0% 9%',
        accent: '170 0% 94.1%',
        'accent-foreground': '0 0% 9%',
        ring: '170 100% 63.9%',
      },
      dark: {
        'card-foreground': '170 60% 94.5%',
        'primary-foreground': '0 0% 9%',
        'secondary-foreground': '170 80% 90%',
        ring: '170 100% 85%',
        card: '170 0% 10%',
        muted: '170 0% 10%',
        'muted-foreground': '170 0% 75%',
        'accent-foreground': '170 80% 90%',
        popover: '220 0% 10%',
        'popover-foreground': '170 0% 65%',
        accent: '170 0% 20%',
        secondary: '170 0% 20%',
        background: '0 0 0',
        foreground: '220 60% 94.5%',
        primary: '170 65% 50%',
        border: '205 0% 25%',
      },
    }
  })],
};
