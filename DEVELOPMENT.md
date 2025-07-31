# Development Guide - Simpl Healthcare Website

## 🏁 Quick Start

1. **Prerequisites**
   - Node.js 18+ 
   - npm or yarn
   - Git

2. **Setup**
   ```bash
   # Clone and setup
   git clone <repository-url>
   cd simpl-healthcare-website
   
   # Run the automated setup
   ./deploy.sh
   
   # Or manual setup
   npm install
   npm run dev
   ```

3. **Development Server**
   - Visit: http://localhost:3000
   - Hot reload enabled
   - Auto-refresh on file changes

## 📁 Project Architecture

### Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Static Export

### Key Directories
```
├── app/                    # Next.js app router pages
├── components/             # Reusable UI components
├── public/                # Static assets (images, favicon)
├── simpl-health.webflow/  # Original Webflow export (reference)
└── docs/                  # Documentation
```

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--simpl-green: #1aa484
--simpl-dark-green: #18b791
--simpl-blue: #0476a0
--simpl-dark-blue: #0376a0

/* Neutral Colors */
--simpl-black: #394152
--simpl-darkgrey: #333333
--simpl-dark-grey: #6c717b
--simpl-grey: #f8f8f8
--white: #ffffff
```

### Typography
- **Font Family**: Manrope (Google Fonts)
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
- **Hero Text**: 3rem (48px) with 3.498rem line height

### Spacing System
Using Tailwind's default spacing scale:
- xs: 4px, sm: 8px, md: 16px, lg: 24px, xl: 32px, 2xl: 40px

## 🧩 Component Guidelines

### Component Structure
```typescript
'use client' // Only if client-side features needed

import { ComponentProps } from 'react'

interface ComponentNameProps {
  // Props definition
}

const ComponentName = ({ ...props }: ComponentNameProps) => {
  return (
    <div className="component-classes">
      {/* Component content */}
    </div>
  )
}

export default ComponentName
```

### Styling Conventions
- Use Tailwind utility classes
- Custom utilities defined in `globals.css`
- Responsive design: mobile-first approach
- Consistent hover states: `hover:color-change transition-colors duration-200`

### Animation Guidelines
- Subtle transitions (300ms ease-in-out)
- Use `btn-hover` class for button interactions
- Framer Motion for complex animations
- CSS transitions for simple state changes

## 📱 Page Development

### Creating New Pages
1. **Add page file**: `app/new-page/page.tsx`
2. **Update navigation**: Add to `components/Navigation.tsx`
3. **Update footer**: Add to `components/Footer.tsx`
4. **Add metadata**: Include SEO information

### Page Structure Template
```typescript
import type { Metadata } from 'next'
import Navigation from '../../components/Navigation'
import Footer from '../../components/Footer'

export const metadata: Metadata = {
  title: 'Page Title - Simpl Healthcare',
  description: 'Page description for SEO',
}

export default function PageName() {
  return (
    <main>
      <Navigation />
      
      {/* Page Content */}
      <section className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Content */}
        </div>
      </section>
      
      <Footer />
    </main>
  )
}
```

## 🖼️ Asset Management

### Images
- **Location**: `public/` directory
- **Formats**: WebP preferred, PNG/JPG fallback
- **Optimization**: Use Next.js Image component when possible
- **Naming**: kebab-case (e.g., `hero-dashboard.webp`)

### Icons
- **Primary**: Lucide React icons
- **Custom**: SVG files in `public/icons/`
- **Usage**: Import from lucide-react

### Copying Original Assets
```bash
# Copy images from Webflow export
cp simpl-health.webflow/images/* public/

# Copy specific assets
cp simpl-health.webflow/images/favicon.png public/
cp simpl-health.webflow/images/logo-*.svg public/
```

## 🚀 Build & Deployment

### Development
```bash
npm run dev          # Start dev server
npm run lint         # Run ESLint
npm run build        # Build for production
```

### Production Build
```bash
npm run build        # Create production build
npm run start        # Start production server
npm run export       # Generate static export
```

### Deployment Options

#### 1. Vercel (Recommended)
- Connect GitHub repository
- Auto-deploy on push to main
- Automatic HTTPS and CDN

#### 2. Static Hosting
```bash
npm run export
# Upload ./out directory to hosting service
```

#### 3. Manual Server
```bash
npm run build
npm run start
# Runs on http://localhost:3000
```

## 🧪 Testing Strategy

### Manual Testing Checklist
- [ ] Navigation works on all screen sizes
- [ ] All CTAs functional
- [ ] Forms submit properly
- [ ] Images load correctly
- [ ] Page performance acceptable
- [ ] Mobile responsiveness
- [ ] Cross-browser compatibility

### Performance Targets
- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: 
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1

## 🔧 Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

#### TypeScript Errors
```bash
# Check types
npx tsc --noEmit
```

#### Styling Issues
```bash
# Rebuild Tailwind
npm run dev
# Check tailwind.config.js
```

### Environment Setup
```bash
# Node version
node --version  # Should be 18+

# Package installation
rm -rf node_modules package-lock.json
npm install
```

## 📚 References

### Original Webflow Structure
- **Pages**: 43 HTML files
- **Assets**: 200+ images, icons, fonts
- **Interactions**: JavaScript animations
- **Forms**: Contact, newsletter, demo booking

### External Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
- [Simpl Healthcare](https://www.simplhealthcare.com)

## 🤝 Contributing Guidelines

1. **Branch Naming**: `feature/description` or `fix/description`
2. **Commit Messages**: Conventional commits format
3. **Code Style**: ESLint + Prettier
4. **Testing**: Manual testing required
5. **Documentation**: Update README for major changes

## 📞 Support

For development questions or issues:
- Create GitHub issue
- Review existing documentation
- Check original Webflow export for reference

---

**Happy coding! 🚀** 