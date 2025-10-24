/**
 * Configuration Barrel Export
 *
 * Unified import point for all configuration modules
 *
 * Usage:
 * import { theme, siteConfig, content } from '@/config'
 */

// Re-export all types
export * from './types';

// Import configurations for use in this file
import { theme } from './theme';
import { content } from './content';

// Re-export configurations
export { theme } from './theme';
export { siteConfig } from './site';
export { content } from './content';

// Validation function (runs in development)
export function validateConfig() {
  const errors: string[] = [];

  // Validate theme
  if (!theme.colors.primary[500] || !theme.colors.primary[600]) {
    errors.push('Theme must define primary colors 500 and 600');
  }

  // Validate asset references in content
  const assetKeys = Object.keys(content.assets);
  
  // Check home page hero image exists
  if (content.pages.home.hero.image && !assetKeys.includes(content.pages.home.hero.image)) {
    errors.push('Home hero image key not found in assets');
  }

  if (errors.length > 0) {
    console.error('Config validation errors:', errors);
  }

  return errors.length === 0;
}

// Helper function to get asset by key
export function getAsset(key: string) {
  return content.assets[key];
}

// Helper function to get page content
export function getPageContent(page: keyof typeof content.pages) {
  return content.pages[page];
}

// Run validation in development
if (process.env.NODE_ENV === 'development') {
  validateConfig();
}
