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
        popover: '220deg 22% 92%',
        'popover-foreground': '234deg 16% 35%',
        'secondary-foreground': '234deg 16% 35%',
        border: '223deg 16% 83%',
        primary: '125deg 55% 28%',
        'primary-foreground': '234deg 16% 35%',
        muted: '220deg 22% 92%',
        card: '220deg 22% 92%',
        accent: '223deg 16% 83%',
        'accent-foreground': '234deg 16% 35%',
        'card-foreground': '234deg 16% 35%',
        'muted-foreground': '233deg 10% 47%',
        foreground: '234deg 16% 35%',
        secondary: '220deg 22% 92%',
        background: '220deg 23% 95%',
        ring: '267deg 84% 81%',
      },
      dark: {
        ring: '267deg 84% 81%',
        primary: '125deg 63% 68%',
        background: '240deg 21% 15%',
        foreground: '226deg 64% 88%',
        popover: '240deg 23% 9%',
        card: '240deg 21% 12%',
        muted: '240deg 21% 12%',
        border: '237deg 16% 23%',
        accent: '237deg 16% 23%',
        secondary: '240deg 21% 12%',
        'primary-foreground': '240deg 23% 9%',
        'card-foreground': '226deg 64% 88%',
        'secondary-foreground': '226deg 64% 88%',
        'popover-foreground': '226deg 64% 88%',
        'accent-foreground': '226deg 64% 88%',
        'muted-foreground': '228deg 24% 72%',
      },
      css: {
        '#nd-sidebar': {
          '--secondary': '223deg 16% 83%',
          '--muted': '223deg 16% 83%',
        },
        '.dark #nd-sidebar': {
          '--secondary': '237deg 16% 23%',
          '--muted': '237deg 16% 23%',
        },
      },
    },
  })],
};
