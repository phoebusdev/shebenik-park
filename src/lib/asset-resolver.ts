/**
 * Asset Resolver Utilities
 * 
 * Resolves asset keys to full AssetConfig objects
 * Provides helpers for Next.js Image component integration
 */

import { content } from '@/config';
import type { AssetConfig } from '@/config/types';

const FALLBACK_IMAGE: AssetConfig = {
  src: '/images/fallback.jpg',
  alt: 'Image not found',
  width: 800,
  height: 600,
};

/**
 * Resolve asset key to full AssetConfig
 * Returns fallback if key not found
 */
export function resolveAsset(key: string): AssetConfig {
  const asset = content.assets[key];

  if (!asset) {
    console.warn(`Asset key "${key}" not found in manifest, using fallback`);
    return FALLBACK_IMAGE;
  }

  return asset;
}

/**
 * Get just the URL for an asset
 */
export function getAssetUrl(key: string): string {
  return resolveAsset(key).src;
}

/**
 * Get props object ready for Next.js Image component
 * 
 * Usage:
 * <Image {...getAssetProps('hero.home')} />
 */
export function getAssetProps(key: string) {
  const asset = resolveAsset(key);
  
  return {
    src: asset.src,
    alt: asset.alt,
    width: asset.width,
    height: asset.height,
    priority: asset.priority,
    quality: asset.quality,
  };
}

/**
 * Get all assets for a category (by key prefix)
 * 
 * Example: getAssetsByCategory('churches') returns all 'churches.*' assets
 */
export function getAssetsByCategory(prefix: string): Record<string, AssetConfig> {
  const categoryAssets: Record<string, AssetConfig> = {};
  
  Object.entries(content.assets).forEach(([key, asset]) => {
    if (key.startsWith(prefix + '.')) {
      categoryAssets[key] = asset;
    }
  });
  
  return categoryAssets;
}
