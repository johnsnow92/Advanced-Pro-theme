# Advanced Pro Theme Collection

A comprehensive collection of HubSpot CMS themes and modules for enterprise-level website development.

## Repository Contents

This repository contains **27 theme packages** totaling **2,784 files (84MB)** organized into the following categories:

### Core Theme Packages (5)

Professional base themes with comprehensive feature sets:

- **advanced-pro-core** - Core theme foundation with base templates and components
- **advanced-pro-enterprise** - Enterprise-grade theme with advanced features
- **advanced-pro-plus** - Enhanced theme with premium components
- **advanced-pro-theme-files** - Shared theme resources and assets
- **advanced-pro-theme-validation** - Theme validation and testing utilities

### Custom Client Implementations (6)

Production-ready custom themes for specific clients:

- **Matter** - Primary custom theme (64MB) with extensive design system
- **Kore_Theme_v1** - Kore client custom theme implementation
- **Surgepathsales_2024** - SurgePathSales 2024 custom theme
- **DynamicsGroup_Aug2023** - Dynamics Group August 2023 theme
- **growth-customized** - Growth-optimized custom theme
- **custom-pro-theme-files** - Custom theme shared resources

### Development Variants (3)

- **Surge flow copy** - Surge workflow variation
- **Custom** - Custom development files
- **Coded files** - Manually coded components

### HubSpot Modules (13)

Reusable HubL modules for theme composition:

- `accordion-menu.module` - Collapsible accordion navigation
- `blog-grid-cards.module` - Blog post grid layout
- `breadcrumb.module` - Breadcrumb navigation
- `contact-form.module` - Contact form component
- `content-sidebar.module` - Content with sidebar layout
- `cta-banner.module` - Call-to-action banner
- `faq.module` - FAQ accordion component
- `hero-slider.module` - Hero image slider
- `icon-text.module` - Icon with text component
- `image-text.module` - Image and text layout
- `pricing-group.module` - Pricing table component
- `testimonial-scroller.module` - Testimonial carousel
- `video-embed.module` - Video embed component

## Theme Structure

Each theme follows HubSpot's standard theme structure:

```
theme-name/
├── assets/          # JavaScript, images, and static assets
├── partials/        # Reusable HubL partials (header, footer, etc.)
├── sections/        # Page sections
├── styles/          # CSS files
├── templates/       # Page templates
├── cms-assets.json  # CMS asset configuration
├── fields.json      # Theme field definitions
└── theme.json       # Theme metadata
```

## Technology Stack

- **HubSpot CMS**: HubL templating language
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: CSS with custom properties
- **Components**: Modular HubL components
- **Assets**: Optimized images, fonts, and scripts

## Usage

### HubSpot Design Manager Upload

1. Navigate to **Marketing > Files and Templates > Design Tools**
2. Create a new theme or select existing
3. Upload theme folders via drag-and-drop or file manager
4. Publish theme to make available for pages

### Local Development

For local theme development with HubSpot CLI:

```bash
# Install HubSpot CLI
npm install -g @hubspot/cli

# Authenticate
hs auth

# Upload theme
hs upload [theme-folder] [dest-path]

# Watch for changes
hs watch [theme-folder] [dest-path]
```

## Version Management

This repository uses **Git tags + GitHub Releases** for version control and snapshots.

### Current Version

- **Version**: 2.0.0
- **Tag**: `v2.0.0`
- **Release**: [GitHub Releases](https://github.com/johnsnow92/Advanced-Pro-theme/releases)

### Versioning Workflow

When making changes to the theme:

```bash
# 1. Make changes locally
# 2. Test in HubSpot
hs upload . advanced-pro-enterprise --account 50730820

# 3. Commit changes
git add .
git commit -m "Description of changes"

# 4. Update CHANGELOG.md with changes

# 5. Bump version in theme.json

# 6. Create version tag
git tag -a vX.X.X -m "Version description"

# 7. Push changes and tag
git push origin main
git push origin vX.X.X

# 8. Create GitHub Release from the tag
```

### Deploying a Specific Version

To deploy a previous version:

```bash
# List available versions
git tag -l

# Checkout specific version
git checkout v2.0.0

# Upload to HubSpot
hs upload . advanced-pro-enterprise --account 50730820

# Return to latest
git checkout main
```

### Changelog

See [CHANGELOG.md](./CHANGELOG.md) for detailed version history.

---

## Module Integration

Individual modules can be used across different themes:

1. Upload module folder to Design Manager
2. Insert module into templates via module editor
3. Configure module fields in page editor
4. Reuse across multiple pages and templates

## File Statistics

- **Total Files**: 2,784
- **Total Size**: 84MB
- **Largest Theme**: Matter (64MB)
- **File Types**: .hubl.html, .css, .js, .json, .png, .jpg, .svg

## Cloning This Repository

To download this theme collection on another computer:

```bash
# Clone the repository
git clone https://github.com/johnsnow92/Advanced-Pro-theme.git

# Navigate to directory
cd Advanced-Pro-theme

# All 27 theme folders are now available locally
```

## License

Proprietary - All rights reserved

## Contact

For theme support and customization requests:

- **Email**: j.tamm@dynamics-group.com
- **Organization**: Dynamics Group

---

**Last Updated**: December 2025
