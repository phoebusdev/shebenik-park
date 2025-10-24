'use client';

/**
 * Theme Provider Component
 * 
 * Injects CSS variables from theme config into document root
 * This enables components to use theme values via CSS custom properties
 */

import { useEffect } from 'react';
import { theme } from '@/config';

function generateCSSVariables() {
  const vars: Record<string, string> = {};

  // Color variables - convert to CSS custom properties
  Object.entries(theme.colors).forEach(([colorName, shades]) => {
    Object.entries(shades).forEach(([shade, value]) => {
      if (value && typeof value === 'string') {
        vars[`--color-${colorName}-${shade}`] = value;
      }
    });
  });

  // Typography variables
  vars['--font-heading'] = theme.typography.fonts.heading;
  vars['--font-body'] = theme.typography.fonts.body;
  if (theme.typography.fonts.mono) {
    vars['--font-mono'] = theme.typography.fonts.mono;
  }

  Object.entries(theme.typography.scale).forEach(([size, value]) => {
    vars[`--text-${size}`] = value;
  });

  // Design token variables
  vars['--radius-card'] = theme.tokens.borderRadius.card;
  vars['--radius-button'] = theme.tokens.borderRadius.button;
  vars['--radius-input'] = theme.tokens.borderRadius.input;

  vars['--shadow-card'] = theme.tokens.shadows.card;
  vars['--shadow-button'] = theme.tokens.shadows.button;
  vars['--shadow-hover'] = theme.tokens.shadows.hover;

  vars['--transition-default'] = theme.tokens.transitions.default;
  vars['--transition-fast'] = theme.tokens.transitions.fast;
  vars['--transition-slow'] = theme.tokens.transitions.slow;

  return vars;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const vars = generateCSSVariables();
    const root = document.documentElement;

    // Set all CSS variables on the root element
    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });

    console.log('Theme CSS variables injected:', Object.keys(vars).length, 'variables');
  }, []);

  return <>{children}</>;
}
