# Using the Tourism Website Template with Claude CLI

This guide shows you how to use the tourism website template with Claude Code (claude.ai/code) to build a new tourism site.

## Prerequisites

1. **Claude Code CLI** installed and authenticated
2. **Node.js 20+** and **npm** installed
3. **Git** installed
4. Basic familiarity with terminal/command line

## Method 1: Quick Start (Recommended)

### Step 1: Create New Project

```bash
# Create a new Next.js project
npx create-next-app@latest my-tourism-site --typescript --tailwind --app --turbopack

cd my-tourism-site
```

### Step 2: Initialize Git (if not already done)

```bash
git init
git add .
git commit -m "Initial Next.js setup"
```

### Step 3: Copy Template Spec

```bash
# Create .specify directory
mkdir -p .specify/templates

# Copy the tourism template to your project
curl -o .specify/templates/TOURISM-WEBSITE-TEMPLATE.md \
  https://raw.githubusercontent.com/[your-repo]/shebenik-park/preview-polished-template/.specify/templates/TOURISM-WEBSITE-TEMPLATE.md

# OR manually copy from the Shebenik Park repo
cp /path/to/shebenik-park-template/.specify/templates/TOURISM-WEBSITE-TEMPLATE.md \
   .specify/templates/
```

### Step 4: Start Claude Code

```bash
claude
```

### Step 5: Give Claude the Context

In Claude Code, paste this prompt:

```
I'm building a tourism website for [YOUR ATTRACTION/CITY NAME].

Please read the template at .specify/templates/TOURISM-WEBSITE-TEMPLATE.md
and help me implement it for my site.

Key information about my site:
- Name: [e.g., "Mount Hood National Forest"]
- Type: [e.g., "National Forest", "City Tourism", "Historic Site"]
- Location: [e.g., "Oregon, USA"]
- Coordinates: [lat, lon] (if known)
- Main color theme: [e.g., "forest green", "ocean blue"]
- Target audience: [e.g., "Hikers, families, photographers"]

Please start by:
1. Reading the template
2. Setting up the basic structure
3. Customizing it for my specific attraction
```

Claude will:
- Read the template
- Ask clarifying questions about your site
- Set up the directory structure
- Create customized pages with your content
- Implement all SEO optimizations
- Apply the visual design system

## Method 2: Step-by-Step Guided Implementation

### Phase 1: Project Setup

**Prompt for Claude:**
```
Read .specify/templates/TOURISM-WEBSITE-TEMPLATE.md Phase 1 (Foundation & Structure).

Set up the project according to the template:
1. Create the required directory structure
2. Install necessary dependencies
3. Set up configuration files (.env.example, next.config.ts)

My site details:
- Name: [Your Site Name]
- Domain: [your-domain.com]
- Primary location: [City, Country]
```

### Phase 2: SEO Implementation

**Prompt for Claude:**
```
Implement Phase 2 (SEO Optimization) from the template:

1. Set up root layout with @graph structured data
2. Create dynamic sitemap.ts and robots.ts
3. Implement breadcrumb component
4. Set up analytics component

Update placeholders with:
- Site URL: [your URL]
- Organization name: [your org name]
- Geo coordinates: [lat, lon]
- Region: [your region]
```

### Phase 3: Visual Design

**Prompt for Claude:**
```
Implement Phase 3 (Visual Design System):

1. Set up global typography in globals.css
2. Create component patterns (heroes, cards, icons)
3. Customize navigation and footer

My design preferences:
- Primary color: [color hex code]
- Font: [font name, or keep Inter]
- Style: [minimalist/modern/traditional]
```

### Phase 4: Content Pages

**Prompt for Claude:**
```
Create the content pages from Phase 4:

Core pages needed:
- [x] Homepage
- [x] About/History
- [x] Visit/Plan Your Trip
- [ ] Activities (customize for [your activities])
- [ ] Gallery
- [ ] FAQ
- [ ] Contact

Add location-based pages:
- /visit/from-[nearest major city]
- /visit/nearby

Use the template patterns but customize content for [your attraction].
```

### Phase 5: Content & Customization

**Prompt for Claude:**
```
Help me customize the content:

1. Update all metadata (titles, descriptions)
2. Replace placeholder text with information about [your site]
3. Add FAQs specific to [your attraction type]
4. Create HowTo schemas for [main activities]

I'll provide the specific content as we go through each page.
```

### Phase 6: Final Polish

**Prompt for Claude:**
```
Final checks from Phase 6 (Deployment):

1. Run through pre-deployment checklist
2. Verify all SEO elements are in place
3. Test build with `npm run build`
4. Generate favicon package
5. Validate structured data

Help me identify any remaining issues or missing pieces.
```

## Method 3: Iterative Development

If you prefer to build iteratively, use these prompts:

### Navigation First

```
Let's start with navigation and layout.

Read the template and create:
1. Navigation component with my logo and links
2. Footer component with my information
3. Basic layout.tsx with SEO setup

Site info:
[Your details]
```

### Page by Page

```
Now let's create the [PAGE NAME] page.

Follow the template pattern for [about/activities/visit] pages:
1. Proper metadata
2. Breadcrumbs
3. Hero section
4. Content sections with [specify your sections]
5. Relevant structured data schema
```

### SEO Enhancement

```
Let's add all SEO optimizations from the template:

1. Create sitemap.ts
2. Create robots.ts
3. Add remaining structured data
4. Set up analytics
5. Verify all meta tags
```

## Common Customization Requests

### Changing Colors

```
Update the color scheme to [your color]:

1. Replace all green-* classes with [your-color-*]
2. Update gradient definitions
3. Update theme color in layout
4. Ensure consistent usage throughout
```

### Adding Custom Page Types

```
I need a custom page type not in the template: [page type]

Example: "Conservation Projects", "Event Calendar", "Volunteer"

Help me:
1. Design the page structure
2. Add appropriate metadata
3. Include relevant schema.org markup
4. Match the site's visual style
```

### Multi-Language Support

```
I need to add [language] support to the site.

Following the template structure:
1. Set up language routing
2. Duplicate key pages
3. Update metadata for each language
4. Implement language switcher
```

## Tips for Working with Claude

### Be Specific

❌ "Make it look better"
✅ "Update the hero section to use py-32 lg:py-40 padding like the template shows"

### Provide Context

```
I'm working on a city tourism site for [City Name].
The template is designed for nature attractions, but I need:
- Museums instead of wildlife
- Urban photos instead of landscapes
- Historical sites instead of trails

Help me adapt section [X] for an urban setting.
```

### Iterate

```
That's great! Now let's refine:
1. Make the heading font-weight 200 (extralight)
2. Increase padding to py-32
3. Add the gradient-primary background
```

### Reference the Template

```
Following the template's "Hero Sections" pattern in Phase 3,
create a hero for my [page name] page with [specific content].
```

## Troubleshooting

### Claude Can't Find the Template

**Solution**: Verify the file path
```bash
ls -la .specify/templates/TOURISM-WEBSITE-TEMPLATE.md
```

If missing, copy it again or provide the content directly to Claude.

### Build Errors

**Prompt:**
```
I'm getting this build error:
[paste error]

The template suggests [reference relevant section].
Help me fix this.
```

### Styling Doesn't Match Template

**Prompt:**
```
The [component] doesn't look like the template example.

Template shows: [describe expected]
My version shows: [describe actual]

Help me match the template's styling.
```

## Advanced Usage

### Creating a Project CONSTITUTION

```
Help me create a .specify/memory/constitution.md for this project.

Based on the Tourism Website Template, our key principles are:
1. SEO-first development (2025 standards)
2. Premium, minimalist design
3. Mobile-first responsive
4. Accessibility compliance
5. [Add your specific principles]

Use the spec-kit format.
```

### Adding Custom Features

```
I want to add [feature] to the site:
[Describe feature]

This isn't in the template. Help me:
1. Design it to match the template's patterns
2. Ensure SEO best practices
3. Maintain visual consistency
4. Add appropriate schema markup
```

## Example Session

Here's a complete example conversation:

```
User: I'm building a tourism site for Yellowstone National Park using your
tourism template. Let's start by reading the template and setting up the
basic structure.

Claude: [Reads template, sets up structure]

User: Great! Now customize the homepage hero for Yellowstone with:
- Title: "Yellowstone National Park"
- Tagline: "America's First National Park"
- Background: geothermal features

Claude: [Creates customized homepage]

User: Perfect. Now create the about page with Yellowstone's history
following the template patterns.

Claude: [Creates about page with proper SEO, breadcrumbs, structured data]

User: Now let's add location pages:
- /visit/from-denver
- /visit/from-salt-lake-city
using the template's HowTo schema pattern

Claude: [Creates location pages with directions and schemas]

[Continue for other pages...]
```

## Resources

- **Template Location**: `.specify/templates/TOURISM-WEBSITE-TEMPLATE.md`
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Schema.org**: https://schema.org/TouristAttraction

## Getting Help

If you get stuck:

1. **Reference the template**: "Looking at Phase [X] of the template..."
2. **Show your current state**: "Here's what I have now: [code/description]"
3. **Describe desired outcome**: "I want it to look/work like [description]"
4. **Ask specific questions**: Not "How do I make it better?" but "How do I add breadcrumbs to this page?"

---

**Version**: 1.0.0
**Last Updated**: October 2025
**For**: Claude Code (claude.ai/code)
