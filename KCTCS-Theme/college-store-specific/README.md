# College Store Specific Data

This directory lives inside the `KCTCS-Theme` package and houses data and assets that are unique to the KCTCS StoreConnect implementation. Use this space to store configuration files, content, and other resources that are specific to the KCTCS college store network.

## Directory Structure

Each college has its own subdirectory for organizing assets, along with a `kctcs` folder for resources shared with the main KCTCS site.

Every store folder includes an `HTML Head Content Block` subfolder where you can place the head content specific to that storefront (for example, Salesforce CMS exports or reusable snippets). Leave the provided `.gitkeep` files in place so the empty directories remain versioned until you add real content.

- `kctcs`
- `ashland-community-and-technical-college`
- `big-sandy-community-and-technical-college`
- `bluegrass-community-and-technical-college`
- `elizabethtown-community-and-technical-college`
- `gateway-community-and-technical-college`
- `hazard-community-and-technical-college`
- `henderson-community-college`
- `hopkinsville-community-college`
- `jefferson-community-and-technical-college`
- `madisonville-community-college`
- `maysville-community-and-technical-college`
- `owensboro-community-and-technical-college`
- `somerset-community-college`
- `southcentral-kentucky-community-and-technical-college`
- `southeast-kentucky-community-and-technical-college`
- `west-kentucky-community-and-technical-college`

Add additional files or folders inside each location as needed to support the respective storefront.

## Adding new stores

1. Create a new directory under `KCTCS-Theme/college-store-specific` using the college's URL-friendly slug.
2. Add an `HTML Head Content Block` subdirectory within the new folder.
3. Include a `.gitkeep` (or actual head content) inside the subfolder so Git tracks the structure.

These steps keep future store-specific assets consistent with the rest of the theme.
