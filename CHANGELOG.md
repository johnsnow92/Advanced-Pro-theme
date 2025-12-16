# Changelog

All notable changes to the Advanced Pro Enterprise Theme will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2025-12-15

### Added
- Complete theme structure with 77 total assets
- CJT Janitorial brand configuration
- GSAP 3.12.5 scroll animations integration
- Dark mode toggle support
- Lazy loading for images
- Scroll progress indicator
- Back to top button

### Theme Inventory
- **20 Section Templates**: Hero variants, CTAs, testimonials, pricing, team, FAQ, features
- **44 Page Templates**: Home variants, landing pages, blog, services, about, contact, etc.
- **4 Partials**: Header, footer, performance-head, schema-org
- **5 Assets**: main.js, gsap-animations.js, placeholder images
- **1 Stylesheet**: main.css with CSS custom properties

### Brand Configuration
- **Primary Color**: Navy #102a43
- **Secondary Color**: Teal #14b8a6
- **Accent Color**: Teal #0d9488
- **Heading Font**: Outfit
- **Body Font**: DM Sans

---

## Versioning Workflow

1. Make changes locally
2. Test in HubSpot: `hs upload . advanced-pro-enterprise --account 50730820`
3. Commit changes with descriptive message
4. Update this CHANGELOG.md
5. Bump version in `theme.json`
6. Create Git tag: `git tag -a vX.X.X -m "Description"`
7. Push: `git push origin vX.X.X`
8. Create GitHub Release
