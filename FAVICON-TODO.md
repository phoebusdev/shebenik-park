# Favicon Generation TODO

## Current Status
- ✅ Custom `icon.svg` created and working in browsers
- ⚠️ PNG favicon files referenced in `manifest.json` do not exist yet

## Files Needed
Based on `public/manifest.json`, the following files should be generated:

1. `/public/android-chrome-192x192.png` - For Android devices
2. `/public/android-chrome-512x512.png` - For Android devices (high-res)
3. `/public/apple-touch-icon.png` - For iOS devices (180x180)
4. `/public/favicon-32x32.png` - For modern browsers
5. `/public/favicon-16x16.png` - For legacy browsers
6. `/public/screenshot-wide.png` - PWA screenshot (1280x720)
7. `/public/screenshot-mobile.png` - PWA screenshot (375x812)

## How to Generate

### Option 1: Online Generator (Recommended)
1. Visit https://realfavicongenerator.net/
2. Upload `/src/app/icon.svg`
3. Configure settings for all platforms
4. Download generated package
5. Extract files to `/public` directory

### Option 2: Manual Generation with ImageMagick
```bash
# Install ImageMagick if not available
sudo apt-get install imagemagick

# Convert SVG to PNG files
convert -background none -resize 192x192 src/app/icon.svg public/android-chrome-192x192.png
convert -background none -resize 512x512 src/app/icon.svg public/android-chrome-512x512.png
convert -background none -resize 180x180 src/app/icon.svg public/apple-touch-icon.png
convert -background none -resize 32x32 src/app/icon.svg public/favicon-32x32.png
convert -background none -resize 16x16 src/app/icon.svg public/favicon-16x16.png
```

### Option 3: Use Sharp in Node.js
```javascript
// Add to package.json scripts
"generate-favicons": "node scripts/generate-favicons.js"
```

## Current Impact
- **Low priority**: `icon.svg` is already working for most modern browsers
- **No SEO impact**: Google doesn't use favicons for ranking
- **UX improvement**: Having proper icons for all devices improves brand consistency

## Action Required
Generate the PNG files before final production deployment for:
- Better cross-device compatibility
- PWA installation experience
- Professional polish
