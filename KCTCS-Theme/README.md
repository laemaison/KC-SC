# KCTCS Theme

This repository contains the theme files and college-specific customizations for the Kentucky Community & Technical College System (KCTCS) online stores.

## Directory Structure

```
KCTCS-Theme/
├── README.md
├── controllers.csv
├── variables.csv
├── college-store-specific/    # College-specific customizations
├── resources/                 # Build tools and source files
├── templates/                 # Template files
└── translations/              # Translation files
```

## College-Specific Customizations

The `college-store-specific/` directory contains individual folders for each of the 16 KCTCS colleges plus the main KCTCS site. Each college folder has a standardized structure:

### College Folders

- `ashland-community-and-technical-college/`
- `big-sandy-community-and-technical-college/`
- `bluegrass-community-and-technical-college/`
- `elizabethtown-community-and-technical-college/`
- `gateway-community-and-technical-college/`
- `hazard-community-and-technical-college/`
- `henderson-community-college/`
- `hopkinsville-community-college/`
- `jefferson-community-and-technical-college/`
- `kctcs/` (Main KCTCS site)
- `madisonville-community-college/`
- `maysville-community-and-technical-college/`
- `owensboro-community-and-technical-college/`
- `somerset-community-college/`
- `southcentral-kentucky-community-and-technical-college/`
- `southeast-kentucky-community-and-technical-college/`
- `west-kentucky-community-and-technical-college/`

### Folder Structure

Each college folder contains:

```
[college-name]/
├── HTML Head Content Block/
│   └── [College Name] Head Content Block.html
└── Store Style Block/
    └── [College Name] - Store Style Block.css
```

### Naming Conventions

#### CSS Files
- Format: `[College Name] - Store Style Block.css`
- Examples:
  - `Ashland - Store Style Block.css`
  - `Big Sandy - Store Style Block.css`
  - `West Kentucky - Store Style Block.css`

#### HTML Files
- Format: `[College Name] Head Content Block.html`
- Examples:
  - `Ashland Head Content Block.html`
  - `Big Sandy Head Content Block.html`
  - `West Kentucky Head Content Block.html`

**Note:** Big Sandy and West Kentucky use their full two-word names in file naming.

## File Contents

### HTML Head Content Block

All colleges share the same HTML head content which includes:
- Google Fonts preloading (Work Sans)
- KCTCS favicon
- Scroll reveal animation script

### Store Style Block CSS

#### Individual Colleges (16 colleges)
All individual college CSS files are based on the Bluegrass template and include:
- Custom navigation styling with blue (#00467f) and gold (#e7a514) color scheme
- Hero section with fade-in animations
- Product card hover effects
- Footer customizations
- Mobile responsive styles
- ADA compliance features

#### KCTCS Main Site
The KCTCS main site CSS is unique and includes additional features:
- Video banner support
- Interactive map styling
- College directory tiles
- Extended responsive design
- Custom animations for the main portal

## Color Palette

- Primary Blue: `#00467f` (var(--sc-color-primary))
- Secondary Gold: `#e7a514` (var(--sc-color-secondary))
- White: `#ffffff`
- Dark: `var(--sc-shade-darkest)`

## Key Features

1. **Responsive Design**: All styles are mobile-optimized with breakpoints at 768px
2. **Accessibility**: High contrast placeholders, screen reader utilities, keyboard navigation support
3. **Animations**: Smooth transitions and hover effects with reduced-motion support
4. **Consistent Branding**: Unified look across all college stores while maintaining KCTCS brand identity

## Build System

The `resources/` directory contains the build configuration:
- Webpack configuration
- Babel transpilation
- PostCSS processing
- Source scripts and styles in `src/`

## Usage

1. Each college's customizations are contained within their respective folders
2. The HTML Head Content Block should be included in the `<head>` section of each college's store
3. The Store Style Block CSS provides all styling overrides for the individual stores

## Maintenance

When updating styles:
1. Individual college styles (16 colleges) should remain consistent with each other
2. KCTCS main site styles can be updated independently
3. Always test responsive behavior and accessibility features
4. Maintain the color scheme for brand consistency