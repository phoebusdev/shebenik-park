# Tourism Website Template - READ THIS FIRST

## What Claude Should Know

This is a **FULLY FUNCTIONAL** tourism website template. All code, components, and functionality are COMPLETE and WORKING. DO NOT modify the structure, components, or core functionality.

## What Claude Should Do

**ONLY update content** for the new location. This means:
- Replace location names and details
- Update wildlife/activities for the new destination  
- Change contact information
- Swap image URLs (from Wikimedia Commons or provided sources)
- Modify SEO metadata for the new location

## What Claude Should NEVER Do

- ❌ Refactor or "improve" the code structure
- ❌ Change component architecture
- ❌ Modify the navigation or footer structure
- ❌ Alter the Tailwind CSS setup
- ❌ Change the file organization
- ❌ Update dependencies or packages
- ❌ Modify any files in /src/components/ui/
- ❌ Change /src/lib/utils.ts
- ❌ Alter layout.tsx structure (except metadata)

## Files That Should Be Modified

### 1. Content Files (Create these as JSON for easy updates)
- `content/location-details.json` - Basic location info
- `content/wildlife.json` - Wildlife species data
- `content/activities.json` - Available activities
- `content/accommodations.json` - Places to stay
- `content/images.json` - Image URLs and metadata

### 2. Page Content (Update text only)
All files in `/src/app/*/page.tsx` - Update:
- Text content
- Metadata (title, description, keywords)
- Image URLs
- Contact details

### 3. Shared Components (Update content only)
- `/src/components/footer.tsx` - Contact info, links
- `/src/components/navigation.tsx` - Site name (keep navigation structure)

## How to Use This Template

1. Claude reads this file FIRST
2. User provides new location details
3. Claude updates ONLY the content files and page text
4. Claude preserves all functionality and structure
5. Claude provides a summary of changes made

## Content Replacement Strategy

Use find-and-replace for consistent terms:
- "Shebenik National Park" → [New Location Name]
- "Albania" → [New Country]
- All coordinates and measurements
- All contact information
- All image URLs

## Image Guidelines

- Use Wikimedia Commons for authentic images
- Verify image URLs exist before using
- Maintain same image structure (hero, gallery, etc.)
- Keep alt text descriptive and SEO-friendly
