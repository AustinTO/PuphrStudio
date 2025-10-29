# Puphr - IT and Cybersecurity Services Platform

## Overview

Puphr is a modern IT and cybersecurity services website targeting small and medium businesses. The platform provides information about security services including vulnerability scanning, Active Directory attack path mapping, anti-phishing training, MFA implementation, password management, and security consulting. The site features a unique "digital reef" aesthetic with an animated parallax background and a friendly puffer fish mascot to make IT and cybersecurity more approachable.

The site is designed as a fully static website for deployment to puphr.com with a contact form that posts to an external Cloudflare Worker API endpoint.

## Recent Changes

**October 29, 2025:**
- Updated branding from "cybersecurity" to "IT and Cybersecurity" throughout the site
- Replaced favicon.png with new user-provided icon
- Updated HTML meta title and description to reflect new branding
- Rebuilt static site with all changes verified in dist/puphr-static-site.tar.gz

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side navigation
- **UI Components**: Radix UI primitives with shadcn/ui component library (New York style)
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **State Management**: TanStack Query (React Query) for server state
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers

**Design Approach:**
- Custom SaaS-oriented design with a unique "digital reef" aesthetic
- Animated parallax background using three reef images that transition as users scroll
- Color scheme based on dark ocean/reef theme (primary background: `hsl(200 25% 8%)`)
- Typography uses Inter/DM Sans as primary font and Space Grotesk for technical terms
- Component-based architecture with reusable UI elements

**Key Architectural Decisions:**
- Single Page Application (SPA) with client-side routing
- Static marketing pages (no user authentication in current implementation)
- Parallax scrolling effects for visual engagement using CSS transforms and scroll event handlers
- Responsive design with Tailwind breakpoints (mobile-first approach)
- Accessibility-focused with Radix UI primitives providing ARIA support
- Six detailed service pages with professional content (Vulnerability Scans, AD Attack Path Mapping, Anti-Phishing Training, MFA Implementation, Password Manager Setup, Security Consulting)
- Contact form with smooth scrolling integration and spam prevention

### Backend Architecture

**Server Framework:**
- Express.js (Node.js) with TypeScript
- ESM module system throughout the application

**Development Setup:**
- Vite development server integrated with Express in middleware mode
- Hot Module Replacement (HMR) for development
- Custom logging middleware for API request tracking
- Request body parsing with JSON verification hook for potential webhook integration

**Current State:**
- Minimal backend implementation with development-only contact form endpoint
- Contact form POST /api/contact route responds with { ok: true } for testing
- In production (static deployment), contact form posts to puphr.com/api/contact/ Cloudflare Worker
- In-memory storage interface defined but not actively used

**Architectural Decisions:**
- Monorepo structure with shared schema/types between client and server
- API routes prefixed with `/api` for clear separation
- Modular route registration pattern for scalability
- Development and production build processes separated

### Data Storage

**Current Implementation:**
- In-memory storage implementation (`MemStorage` class)
- Storage interface defined with CRUD operations for users
- User schema defined with Drizzle ORM

**Database Configuration:**
- Drizzle ORM configured for PostgreSQL (via `@neondatabase/serverless`)
- Schema located in `shared/schema.ts` for type sharing
- Migration system configured via drizzle-kit
- Database connection expects `DATABASE_URL` environment variable

**Schema Design:**
- Users table with UUID primary keys (auto-generated)
- Username and password fields (basic authentication scaffold)
- Zod validation schemas derived from Drizzle schema using drizzle-zod

**Architectural Rationale:**
- Drizzle ORM chosen for type-safe database operations
- PostgreSQL for production reliability and scalability
- Shared schema approach eliminates type duplication between frontend and backend
- Environment-based configuration for database credentials

### Authentication & Authorization

**Current State:**
- Basic user schema defined but no active authentication system
- No session management or JWT implementation present
- Storage interface includes user lookup methods (by ID and username)

**Prepared Infrastructure:**
- `connect-pg-simple` dependency suggests future PostgreSQL session store
- Schema includes password field (requires hashing implementation)

## External Dependencies

### UI Component Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives
- **shadcn/ui**: Pre-styled component library built on Radix UI
- **Lucide React**: Icon library for consistent iconography
- **class-variance-authority**: Utility for managing component variants
- **cmdk**: Command palette component
- **embla-carousel-react**: Carousel/slider functionality

### Styling & Design
- **Tailwind CSS**: Utility-first CSS framework
- **clsx & tailwind-merge**: Utility functions for conditional class merging
- **PostCSS & Autoprefixer**: CSS processing pipeline

### Database & ORM
- **Drizzle ORM**: Type-safe SQL ORM for TypeScript
- **@neondatabase/serverless**: PostgreSQL client for serverless environments
- **drizzle-zod**: Generate Zod schemas from Drizzle tables
- **connect-pg-simple**: PostgreSQL session store for Express

### Form Management
- **React Hook Form**: Performant form state management
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Integrates Zod with React Hook Form

### Development Tools
- **Vite**: Fast build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: JavaScript bundler for production builds
- **Replit Plugins**: Runtime error modal, cartographer, dev banner

### Fonts
- **Google Fonts**: Inter, DM Sans, Space Grotesk (loaded via CDN)

### Routing & Navigation
- **Wouter**: Lightweight routing library for React

## Site Features

### Service Pages
- **Vulnerability Scanning**: Details about Greenbone, credentialed vs unauthenticated scans, comprehensive reporting
- **AD Attack Path Mapping**: BloodHound usage, ransomware prevention, common attack paths, remediation guidance
- **Anti-Phishing Training**: Modern threats (ClickFix), Group Policy hardening, phishing simulations
- **MFA Implementation**: NIST 800-63B compliance, modern vs outdated password policies
- **Password Manager Setup**: Bitwarden/NordPass deployment, productivity gains, security improvements
- **Security Consulting**: AI security services (implementation guidance and red-teaming), traditional consulting

### Contact Form
- Located in ContactSection component on homepage
- Collects: name, email, message
- Includes hidden honeypot field "company" for spam prevention
- Submits POST request to /api/contact with JSON payload
- In development: Posts to local Express endpoint
- In production: Posts to puphr.com/api/contact/ (Cloudflare Worker)
- Success/error handling with toast notifications
- Form resets on successful submission
- Smooth scrolling from "Contact Us" button in hero section

### Design Elements
- Hero section highlights AI security, proven tools, and SMB focus
- Smooth parallax scrolling background (3 reef images at 0.3x, 0.5x, 0.7x speeds)
- Consistent navy card backgrounds (#1a2332) with orange accents (#FF6B4A)
- Larger swimming/bobbing Puphr mascot (512px on desktop)
- Dark overlay on background for text readability

### State Management
- **TanStack Query**: Server state management and caching

### Utility Libraries
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation