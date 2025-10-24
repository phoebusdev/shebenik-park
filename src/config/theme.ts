/**
 * THEME CONFIGURATION
 * ===================
 * This file defines the complete visual design system.
 *
 * TO CHANGE THE SITE'S VISUAL APPEARANCE:
 * 1. Update colors below (primary, secondary, neutral)
 * 2. Modify logo icon
 * 3. Adjust card variant (rounded, square, sharp)
 * 4. Run `npm run build`
 *
 * All components automatically inherit these values.
 */

import { ThemeConfig } from './types';

export const theme: ThemeConfig = {
  // ============================================================================
  // BRAND IDENTITY
  // Change logo and brand name here
  // ============================================================================
  brand: {
    logo: {
      type: 'lucide',
      name: 'Church',  // Lucide icon name - see https://lucide.dev
    },
    name: 'Voskopojë',
    tagline: 'Byzantine Heritage',
  },

  // ============================================================================
  // COLOR SYSTEM
  // Edit these to change the entire site's color scheme
  // ============================================================================
  colors: {
    // Primary Brand Color - Warm Terracotta
    primary: {
      50: '#fdf4f1',
      100: '#fbe9e3',
      200: '#f7d2c6',
      300: '#f0b3a0',
      400: '#e68972',
      500: '#db6d4f',
      600: '#a45a3c',  // Main brand color
      700: '#8b4524',
      800: '#723920',
      900: '#5e311e',
      950: '#32170d',
    },

    // Secondary - Sage Green (heritage accent)
    secondary: {
      50: '#f4f6f3',
      100: '#e6ebe3',
      200: '#cfd7c9',
      300: '#adb9a5',
      400: '#8b9d7e',
      500: '#7a8d6e',  // Sage green
      600: '#5e6d55',
      700: '#4a5544',
      800: '#3d4538',
      900: '#333930',
      950: '#1a1d18',
    },

    // Neutral Colors - Warm charcoal tones
    neutral: {
      50: '#f9f9f8',
      100: '#f3f3f1',
      200: '#e6e5e2',
      300: '#d4d2cd',
      400: '#b9b5ae',
      500: '#a09c93',
      600: '#8b8680',
      700: '#72706b',
      800: '#5c5550',
      900: '#3e3631',  // Main text color
      950: '#2a2622',
    },

    // Success Color - Natural green
    success: {
      500: '#10b981',
      600: '#059669',
    },

    // Warning Color - Amber
    warning: {
      500: '#f59e0b',
      600: '#d97706',
    },

    // Error Color - Rose
    error: {
      500: '#ef4444',
      600: '#dc2626',
    },
  },

  // ============================================================================
  // TYPOGRAPHY
  // Change fonts here
  // ============================================================================
  typography: {
    fonts: {
      heading: 'var(--font-playfair)',  // Playfair Display for headings
      body: 'var(--font-lora)',         // Lora for body text
      mono: 'monospace',
    },
    scale: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
    },
  },

  // ============================================================================
  // DESIGN TOKENS
  // Spacing, shadows, transitions
  // ============================================================================
  tokens: {
    // Border Radius - CHANGE HERE TO MAKE CARDS SQUARE/ROUNDED
    borderRadius: {
      card: '1.5rem',    // 24px - rounded-3xl (change to '0' for square cards)
      button: '0.5rem',  // 8px - rounded-lg
      input: '0.5rem',   // 8px
    },

    // Shadows
    shadows: {
      card: '0 2px 4px rgba(62, 54, 49, 0.08), 0 8px 24px rgba(62, 54, 49, 0.08)',
      button: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      hover: '0 8px 16px rgba(62, 54, 49, 0.10), 0 20px 40px rgba(62, 54, 49, 0.12)',
    },

    // Transitions
    transitions: {
      default: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
      fast: '150ms cubic-bezier(0.4, 0, 0.2, 1)',
      slow: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },

  // ============================================================================
  // COMPONENT VARIANTS
  // Configure default styles for components
  // ============================================================================
  components: {
    // Card styling
    card: {
      variant: 'rounded',  // 'rounded' | 'square' | 'sharp' - CHANGE HERE FOR SQUARE CARDS
      shadow: 'md',        // 'sm' | 'md' | 'lg' | 'xl'
      border: true,        // Show border or not
    },

    // Button styling
    button: {
      variant: 'rounded',  // 'rounded' | 'square' | 'pill'
      size: 'md',          // 'sm' | 'md' | 'lg'
    },

    // Navigation styling
    navigation: {
      variant: 'solid',    // 'transparent' | 'solid' | 'gradient'
      sticky: true,        // Sticky positioning
    },
  },
} as const;

// Type export
export type Theme = typeof theme;
