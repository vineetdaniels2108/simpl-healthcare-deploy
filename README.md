# 🚀 Simpl Healthcare Website

A modern, responsive website for Simpl Healthcare built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Stack**: Next.js 14 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Performance Optimized**: Static site generation with excellent Lighthouse scores
- **Comprehensive Pages**: Complete website with all service pages and solutions
- **Soft Launch Ready**: Built-in password protection for team previews
- **SEO Optimized**: Meta tags, structured data, and keyword optimization

## 📁 Project Structure

```
simpl-healthcare-website/
├── app/                          # Next.js App Router pages
│   ├── (routes)/                 # Page routes
│   │   ├── cloud-ehr/           # Feature pages
│   │   ├── practice-management/
│   │   ├── interoperability/
│   │   ├── telehealth/
│   │   ├── charting/
│   │   ├── long-term-care/      # LTPAC pages
│   │   ├── assisted-living/
│   │   ├── skilled-nursing/
│   │   ├── home-health/
│   │   ├── family-medicine/     # Primary Care pages
│   │   ├── internal-medicine/
│   │   ├── pediatrics/
│   │   ├── urgent-care/
│   │   ├── health-plans/        # Payor pages
│   │   ├── medicare-advantage/
│   │   ├── medicaid-mcos/
│   │   ├── value-based-care/
│   │   └── book-demo/
│   ├── auth/                    # Soft launch authentication
│   ├── globals.css             # Global styles
│   └── layout.tsx             # Root layout
├── components/                 # Reusable React components
│   ├── Navigation.tsx         # Main navigation with dropdowns
│   ├── Footer.tsx            # Site footer
│   ├── HeroSection.tsx       # Homepage hero
│   ├── PageTemplate.tsx      # Reusable page template
│   └── SoftLaunchBanner.tsx  # Team preview banner
├── public/                    # Static assets
│   ├── images/               # Image assets
│   └── *.svg                # Logo and icon files
├── middleware.ts             # Auth middleware for soft launch
└── next.config.js           # Next.js configuration
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Manrope)
- **Deployment**: Vercel/Netlify ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/simpl-healthcare-website.git
   cd simpl-healthcare-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open the site**
   - Navigate to `http://localhost:3000`
   - Enter password: `SimplTeam2024!` (for soft launch)

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 🔐 Soft Launch Setup

The site includes password protection for team previews:

- **Password**: `SimplTeam2024!`
- **Duration**: 24 hours per login
- **Features**: Team banner, protected routes, branded login page

### Customizing Soft Launch

1. **Change Password**: Edit `app/auth/page.tsx` line 17
2. **Modify Duration**: Edit `app/auth/page.tsx` line 21
3. **Remove Protection**: Delete `middleware.ts` and auth components

## 📄 Page Structure

### 🏠 Main Pages
- **Homepage**: Hero section, features overview, stats
- **Features**: Cloud EHR, Practice Management, Charting, Interoperability, Telehealth

### 🏥 Healthcare Solutions
- **LTPAC**: Long-Term Care, Skilled Nursing, Assisted Living, Home Health
- **Primary Care**: Family Medicine, Internal Medicine, Pediatrics, Urgent Care
- **Payors**: Health Plans, Medicare Advantage, Medicaid MCOs, Value-Based Care

### 📋 Content Features
- **Dynamic Navigation**: Hover dropdowns with organized sections
- **Responsive Design**: Mobile-optimized across all pages
- **SEO Optimization**: Meta tags, structured data, keywords
- **Performance**: Optimized images, fonts, and loading

## 🎨 Design System

### Colors
- **Primary Green**: `#1aa484` (simpl-green)
- **Dark Green**: `#18b791` (simpl-dark-green)
- **Blue**: `#0476a0` (simpl-blue)
- **Dark Blue**: `#0376a0` (simpl-dark-blue)
- **Grey**: `#f8f8f8` (simpl-grey)
- **Dark Grey**: `#6c717b` (simpl-dark-grey)
- **Black**: `#394152` (simpl-black)

### Typography
- **Font**: Manrope (Google Fonts)
- **Weights**: 200, 300, 400, 500, 600, 700, 800
- **Optimization**: Font display swap, preload

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy via Vercel**
   - Connect your GitHub repository
   - Import and deploy automatically
   - Get instant URL

### Netlify

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Drag `out/` folder to netlify.com/drop
   - Get instant URL

### Environment Variables

For production deployment, consider adding:
```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **Mobile Optimized**: Responsive design with mobile-first approach
- **Image Optimization**: Next.js Image component with optimization
- **Font Loading**: Optimized Google Fonts loading with display swap

## 🔧 Customization

### Adding New Pages

1. Create page in `app/your-page/page.tsx`
2. Use `PageTemplate` component for consistency
3. Add navigation links in `components/Navigation.tsx`
4. Update footer links in `components/Footer.tsx`

### Modifying Styles

- **Global styles**: `app/globals.css`
- **Tailwind config**: `tailwind.config.js`
- **Component styles**: Use Tailwind classes

### Content Updates

- **Hero content**: `components/HeroSection.tsx`
- **Page content**: Individual page files in `app/`
- **Navigation**: `components/Navigation.tsx`

## 📝 Content Guidelines

- **Headlines**: Bold, benefit-focused, action-oriented
- **Copy**: Clear, concise, healthcare industry-focused
- **CTAs**: Strategic placement with conversion optimization
- **Images**: High-quality, professional, healthcare-themed

## 🛡️ Security

- **Password Protection**: Middleware-based authentication
- **Environment Variables**: Secure configuration management
- **Static Generation**: Reduced attack surface
- **HTTPS**: Enforced in production

## 📞 Support

For questions or issues:
1. Check the `SOFT_LAUNCH_GUIDE.md` for deployment instructions
2. Review component documentation in code comments
3. Check Next.js and Tailwind CSS documentation

## 📜 License

This project is proprietary to Simpl Healthcare.

---

**Built with ❤️ for Simpl Healthcare**

*Transforming healthcare through innovative technology solutions.* 