# Inkwell - Blog Builder Platform

A modern, responsive blog platform built with Next.js 15, empowered by Inkwell platform. Create and share your content with the world - perfect for educators, writers, creators, and anyone who wants to share their knowledge and insights.

## 🚀 Tech Stack

### Core Framework

- **Next.js 15.3.1** - React framework with App Router
- **React 19** - Latest React with concurrent features
- **TypeScript 5** - Type-safe development

### Styling & UI

- **Tailwind CSS 4.1.5** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **shadcn/ui** - Pre-built component library
- **Lucide React** - Beautiful icon library
- **Motion** - Animation library

### Content & Data

- **Quill Delta to HTML** - Rich text rendering
- **DOMPurify** - HTML sanitization
- **HE** - HTML entity encoding/decoding
- **JWT** - Authentication tokens
- **Cookies Next** - Cookie management

### Development Tools

- **ESLint** - Code linting with Next.js config
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundling (dev mode)

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── about/                    # About page
│   │   ├── components/           # Page-specific components
│   │   ├── sections/             # Page sections
│   │   └── page.tsx             # About page
│   ├── articles/                 # Articles section
│   │   ├── [slug]/              # Dynamic article pages
│   │   ├── sections/            # Article sections
│   │   └── page.tsx             # Articles listing
│   ├── privacy-policy/          # Privacy policy page
│   ├── sections/                # Home page sections
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   └── not-found.tsx            # 404 page
├── entities/                     # Domain entities (Feature-Sliced Design)
│   ├── articles/                # Article domain
│   │   ├── api/                 # API functions
│   │   ├── type.ts              # TypeScript types
│   │   └── utils/               # Article utilities
│   ├── tags/                    # Tag domain
│   │   ├── api/                 # API functions
│   │   ├── type.ts              # TypeScript types
│   │   └── utils.ts             # Tag utilities
│   └── user/                    # User domain
│       ├── api/                 # API functions
│       ├── type.ts              # TypeScript types
│       └── validators/          # Zod schemas
├── hooks/                       # Custom React hooks
├── shared/                      # Shared resources
│   ├── api/                     # API configuration
│   ├── assets/                  # Static assets
│   ├── components/              # Reusable components
│   │   ├── Layout/              # Layout components
│   │   ├── ui/                  # UI components (shadcn/ui)
│   │   └── *.tsx                # Custom components
│   ├── constants/               # Application constants
│   ├── routes/                  # Route definitions
│   ├── styles/                  # Global styles
│   └── utils/                   # Utility functions
└── middleware.ts                # Next.js middleware
```

## 🏗️ Architecture

### Feature-Sliced Design (FSD)

The project follows FSD principles with clear separation of concerns:

- **Entities** - Core business logic and data models
- **Shared** - Reusable components, utilities, and configurations
- **App** - Application-specific pages and routing

### Domain-Driven Structure

Each entity (`articles`, `tags`, `user`) contains:

- **API layer** - Data fetching and external communication
- **Types** - TypeScript definitions and interfaces
- **Utils** - Domain-specific utilities and formatters
- **Validators** - Zod schemas for data validation

### Component Architecture

- **Layout Components** - Header, Footer, Navigation
- **UI Components** - Reusable shadcn/ui components
- **Feature Components** - Domain-specific components (ArticleCard, etc.)
- **Page Sections** - Composed page sections for better organization

## 🎨 Design System

### Color Palette

- **Primary**: `#8ab9f1` (Light Blue)
- **Primary Light**: `#cde4ff` (Very Light Blue)
- **Primary Dark**: `#4c82c2` (Dark Blue)
- **Background**: `#f8fbff` (Off White)
- **Text Primary**: `#003b81` (Dark Blue)

### Typography

- **Font Family**: Nunito (Google Fonts)
- **Responsive Typography**: Fluid scaling from mobile to desktop
- **Hierarchy**: Clear heading levels with consistent spacing

### Components

- **Cards**: Rounded corners with hover effects
- **Buttons**: Primary and secondary variants with animations
- **Navigation**: Responsive desktop and mobile navigation
- **Layout**: Container-based responsive design

## 🔧 Configuration

### Environment Variables

```env
NEXT_PUBLIC_BASE_URL=          # API base URL
NEXT_PUBLIC_GOOGLE_STORAGE_BUCKET=  # Image storage bucket
AUTHOR_ID=                    # Author identifier
```

### Next.js Configuration

- **Image Optimization**: Google Storage domain configuration
- **Turbopack**: Enabled for faster development builds
- **TypeScript**: Strict mode with path aliases

### Tailwind Configuration

- **Custom CSS Variables**: Theme-based color system
- **Component Classes**: Reusable utility classes
- **Responsive Design**: Mobile-first approach

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd inkwell_next

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration
```

### Development

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Format code
npm run format
```

## 📱 Features

### Core Functionality

- **Responsive Design** - Mobile-first, works on all devices
- **SEO Optimized** - Meta tags, structured data, Open Graph
- **Performance** - Image optimization, caching, lazy loading
- **Accessibility** - WCAG compliant, keyboard navigation
- **Rich Content** - Quill editor integration with sanitization

### Pages & Sections

- **Home Page** - Hero section, latest articles, about teacher, educational focus
- **Articles** - Paginated listing with category filtering
- **Article Detail** - Full article view with rich text rendering
- **About** - Teacher profile, experience, education, philosophy
- **Privacy Policy** - Legal compliance page

### Content Management

- **Dynamic Content** - Server-side rendering with caching
- **Image Handling** - Google Storage integration
- **Rich Text** - Quill Delta format with HTML sanitization
- **Categories** - Tag-based article organization

## 🔒 Security

### Data Protection

- **JWT Authentication** - Secure token-based auth
- **HTML Sanitization** - DOMPurify for XSS prevention
- **Input Validation** - Zod schemas for type safety
- **Environment Variables** - Sensitive data protection

### Best Practices

- **Type Safety** - Full TypeScript coverage
- **Error Handling** - Graceful error boundaries
- **Performance** - Optimized images and caching
- **SEO** - Structured data and meta tags

## 🚀 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** - For the amazing framework
- **Vercel** - For hosting and deployment platform
- **Radix UI** - For accessible component primitives
- **Tailwind CSS** - For the utility-first CSS framework
- **shadcn/ui** - For the component library

## 📞 Support

For support and questions:

- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ for creators and content builders**
