/**
 * Configuration Type Definitions
 *
 * This file defines all TypeScript interfaces for the configuration system.
 * These types ensure type safety and provide IntelliSense for AI agents and developers.
 */

// ============================================================================
// ICON SYSTEM
// ============================================================================

/**
 * Icon configuration supporting multiple icon types
 * - Lucide icons: Pass icon name as string
 * - Custom images: Pass image path
 * - Emoji: Pass emoji character
 */
export type IconConfig =
  | { type: 'lucide'; name: string; className?: string }
  | { type: 'image'; src: string; alt: string; width?: number; height?: number }
  | { type: 'emoji'; emoji: string; className?: string };

// ============================================================================
// ASSET MANAGEMENT
// ============================================================================

/**
 * Asset keys use dot notation for semantic organization
 * Examples: 'hero.home', 'gallery.wildlife.lynx', 'icons.logo'
 */
export type AssetKey = string;

/**
 * Asset configuration with all necessary image metadata
 */
export interface AssetConfig {
  src: string;           // URL or path to image
  alt: string;           // Alt text for accessibility
  width?: number;        // Image width (for Next.js Image optimization)
  height?: number;       // Image height
  priority?: boolean;    // Load immediately (for above-fold images)
  quality?: number;      // Image quality (1-100)
}

// ============================================================================
// COLOR SYSTEM
// ============================================================================

/**
 * Color shades following Tailwind convention (50-950)
 * Only 500 and 600 are required (base and interactive states)
 */
export interface ColorShades {
  50?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500: string;   // Base color (required)
  600: string;   // Primary interactive state (required)
  700?: string;
  800?: string;
  900?: string;
  950?: string;
}

/**
 * Complete color palette for the site
 * Primary is required, others are optional
 */
export interface ColorPalette {
  primary: ColorShades;      // Main brand color
  secondary?: ColorShades;   // Accent color
  accent?: ColorShades;      // Additional accent
  neutral: ColorShades;      // Grays
  success?: ColorShades;     // Success states
  warning?: ColorShades;     // Warning states
  error?: ColorShades;       // Error states
}

// ============================================================================
// DESIGN TOKENS
// ============================================================================

/**
 * Design tokens for consistent styling
 */
export interface DesignTokens {
  borderRadius: {
    card: string;      // Card border radius
    button: string;    // Button border radius
    input: string;     // Input border radius
  };
  shadows: {
    card: string;      // Card shadow
    button: string;    // Button shadow
    hover: string;     // Hover state shadow
  };
  transitions: {
    default: string;   // Default transition timing
    fast: string;      // Fast transitions
    slow: string;      // Slow transitions
  };
}

// ============================================================================
// TYPOGRAPHY
// ============================================================================

/**
 * Typography configuration
 */
export interface Typography {
  fonts: {
    heading: string;   // Headings font family
    body: string;      // Body text font family
    mono?: string;     // Monospace font (optional)
  };
  scale: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
  };
}

// ============================================================================
// COMPONENT VARIANTS
// ============================================================================

/**
 * Card component configuration
 */
export interface CardConfig {
  variant: 'rounded' | 'square' | 'sharp';  // Border radius style
  shadow: 'sm' | 'md' | 'lg' | 'xl';        // Shadow intensity
  border: boolean;                           // Show border or not
}

/**
 * Button component configuration
 */
export interface ButtonConfig {
  variant: 'rounded' | 'square' | 'pill';   // Border radius style
  size: 'sm' | 'md' | 'lg';                 // Default size
}

/**
 * Navigation component configuration
 */
export interface NavigationConfig {
  variant: 'transparent' | 'solid' | 'gradient';  // Background style
  sticky: boolean;                                 // Sticky positioning
}

// ============================================================================
// THEME CONFIGURATION
// ============================================================================

/**
 * Complete theme configuration interface
 */
export interface ThemeConfig {
  // Brand identity
  brand: {
    logo: IconConfig;
    name: string;
    tagline?: string;
  };

  // Color system
  colors: ColorPalette;

  // Typography
  typography: Typography;

  // Design tokens
  tokens: DesignTokens;

  // Component variants
  components: {
    card: CardConfig;
    button: ButtonConfig;
    navigation: NavigationConfig;
  };
}

// ============================================================================
// CONTENT CONFIGURATION
// ============================================================================

/**
 * Hero section content
 */
export interface HeroContent {
  title: string;
  subtitle?: string;
  description?: string;
  image: AssetKey;
  cta?: {
    text: string;
    href: string;
  };
}

/**
 * Page section content
 */
export interface PageSection {
  id: string;
  title: string;
  content: string;
  image?: AssetKey;
}

/**
 * Generic page content structure
 */
export interface PageContent {
  hero: HeroContent;
  sections?: PageSection[];
}

/**
 * Quick fact (for homepage stats)
 */
export interface QuickFact {
  label: string;
  value: string;
  icon?: IconConfig;
}

/**
 * Gallery category
 */
export interface GalleryCategory {
  id: string;
  title: string;
  description?: string;
  images: AssetKey[];  // Array of asset keys
}

/**
 * Testimonial
 */
export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  avatar?: AssetKey;
  date?: string;
}

/**
 * FAQ item
 */
export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

/**
 * Complete content configuration
 */
export interface ContentConfig {
  // Asset manifest - all images organized by semantic keys
  assets: Record<AssetKey, AssetConfig>;

  // Page-specific content
  pages: {
    home: PageContent & {
      stats?: QuickFact[];
    };
    about: PageContent;
    wildlife?: PageContent;
    activities?: PageContent;
    visit?: PageContent;
    accommodation?: PageContent;
    contact?: PageContent;
    gallery?: {
      title: string;
      description: string;
      categories: GalleryCategory[];
    };
  };

  // Reusable content blocks
  testimonials?: Testimonial[];
  faqs?: FAQItem[];
}

// ============================================================================
// SITE CONFIGURATION
// ============================================================================

/**
 * Navigation item
 */
export interface NavigationItem {
  name: string;
  href: string;
  description?: string;
  icon?: IconConfig;
}

/**
 * Geographic coordinates
 */
export interface Coordinates {
  lat: number;
  lng: number;
}

/**
 * Location information
 */
export interface Location {
  country: string;
  countryCode: string;
  region: string;
  municipality?: string;
  detailedLocation?: string;
  coordinates: Coordinates;
  timezone?: string;
}

/**
 * Contact information
 */
export interface Contact {
  email?: string;
  phone?: string;
  address?: string;
}

/**
 * Social media links
 */
export interface Social {
  facebook?: string;
  instagram?: string;
  twitter?: string;
  twitterHandle?: string;
  twitterCreator?: string;
  youtube?: string;
  linkedin?: string;
  googleSiteVerification?: string;
  bingVerification?: string;
}

/**
 * Site attributes (key facts)
 */
export interface SiteAttributes {
  established?: string;
  area?: string;
  elevation?: {
    min?: number;
    max?: number;
    unit: string;
  };
  [key: string]: string | number | boolean | { min?: number; max?: number; unit: string } | undefined;  // Allow custom attributes
}

/**
 * Complete site configuration
 */
export interface SiteConfig {
  // Core identity
  name: string;
  shortName?: string;
  tagline?: string;
  description: string;
  longDescription?: string;

  // Branding
  branding: {
    primaryColor: string;
    themeColor: string;
    logoIcon: string;
  };

  // Location & geography
  location: Location;

  // Contact
  contact: Contact;

  // Social media
  social: Social;

  // URLs
  url: string;
  baseUrl?: string;
  deploymentUrl?: string;

  // Images
  images: {
    og: string;
    hero: string;
  };

  // Site statistics
  stats: {
    size?: string;
    elevation?: string;
    established?: string;
    highlights: string[];
    quickFacts?: Array<{ label: string; value: string }>;
  };

  // Key features
  features?: string[];

  // Site attributes
  attributes?: SiteAttributes;

  // Navigation structure
  navigation: NavigationItem[];

  // SEO
  keywords: string[];

  // Organization info
  organization: {
    name: string;
    legalName?: string;
    email?: string;
  };

  // PWA settings
  pwa: {
    shortName: string;
    categories: string[];
  };

  // Copyright
  copyright: {
    year: number;
    holder: string;
    statement?: string;
    tagline?: string;
  };
}
