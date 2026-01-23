# The Running Horse LLC - Corporate Website

A professional, corporate business website for The Running Horse LLC, a UAE-registered general trading company specializing in leather goods, clothing, cosmetics, and fashion products.

## Overview

This website serves as the company's official online presence for bank verification, compliance documentation, and B2B partner engagement. It demonstrates legitimate general trading operations in sourcing, importing, exporting, wholesale, and distribution of fashion and lifestyle products.

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Ready for Vercel, Netlify, or any Node.js hosting

## Project Structure

```
/home/user/saas/
├── app/                      # Next.js App Router pages
│   ├── about/               # About Us page
│   ├── services/            # Services page
│   ├── products/            # Products page
│   ├── how-we-work/         # How We Work page
│   ├── clients/             # Clients & Partners page
│   ├── compliance/          # Compliance & Certifications page
│   ├── contact/             # Contact Us page
│   ├── privacy/             # Privacy Policy page
│   ├── terms/               # Terms of Service page
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles with Tailwind
├── components/              # React components
│   ├── Header.tsx           # Navigation header
│   └── Footer.tsx           # Site footer
├── public/                  # Static assets
├── CLAUDE.md               # AI assistant guide
└── package.json            # Dependencies

```

## Pages Included

1. **Home** - Company introduction, services overview, product categories
2. **About Us** - Company background, mission, vision, values, ethical practices
3. **Services** - Detailed trading services (import/export, wholesale, sourcing, etc.)
4. **Products** - Four main categories: leather goods, clothing, cosmetics, accessories
5. **How We Work** - Step-by-step business process from inquiry to delivery
6. **Clients & Partners** - Target audience, geographic reach, partnership benefits
7. **Compliance & Certifications** - UAE licensing, regulatory compliance, quality standards
8. **Contact** - Contact form, business information, office details
9. **Privacy Policy** - Data protection and privacy practices
10. **Terms of Service** - Legal terms and conditions

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## Development

### File Structure

- **`app/`** - All pages using Next.js App Router
- **`components/`** - Reusable React components
- **`app/globals.css`** - Tailwind configuration and custom styles
- **`tailwind.config.ts`** - Tailwind CSS configuration with custom colors

### Styling

The project uses Tailwind CSS with custom utility classes:

- `.container-custom` - Responsive container with max-width
- `.section-padding` - Standard section padding (py-16 md:py-24)
- `.btn-primary`, `.btn-secondary`, `.btn-outline` - Button styles
- `.heading-xl`, `.heading-lg`, `.heading-md`, `.heading-sm` - Typography
- `.card` - Card component with hover effects
- `.input-field`, `.textarea-field` - Form input styles

### Color Scheme

- **Primary Blue**: Shades from 50-950 (primary-600 is main brand color)
- **Gold Accents**: Gold-400, 500, 600 for highlights
- **Neutral Grays**: Standard gray scale for text and backgrounds

## Customization

### Company Information

Update company details in:
- `components/Footer.tsx` - Footer contact information
- `app/contact/page.tsx` - Contact page details
- `app/layout.tsx` - Meta tags and SEO information

### Content

All page content is in the respective `page.tsx` files under `app/`. Each page is self-contained with its own metadata and content.

### Styling

Modify `tailwind.config.ts` for:
- Color scheme changes
- Font family updates
- Breakpoint adjustments

Update `app/globals.css` for:
- Custom component styles
- Global CSS variables
- Tailwind layer customizations

## SEO Optimization

Each page includes:
- Custom page titles
- Meta descriptions
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images

## Mobile Responsiveness

The entire website is fully responsive with:
- Mobile-first design approach
- Responsive navigation menu
- Flexible grid layouts
- Touch-friendly interactive elements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The project can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Traditional Node.js hosting

## Environment Variables

No environment variables required for basic deployment. For production:

```env
# Optional: Add analytics, forms, etc.
NEXT_PUBLIC_ANALYTICS_ID=your-id
```

## License

Copyright © 2026 The Running Horse LLC. All rights reserved.

## Support

For technical questions or customization requests, refer to the codebase or contact the development team.

## Future Enhancements

Potential additions:
- Backend API for contact form submission
- Content Management System (CMS) integration
- Multi-language support (Arabic/English toggle)
- Client portal with authentication
- Product catalog with search functionality
- Blog or news section
- Live chat integration
