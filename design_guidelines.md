# Puphr.com Design Guidelines

## Design Approach

**Selected Approach:** Custom design with modern SaaS principles, emphasizing the unique digital reef aesthetic while maintaining professional credibility for cybersecurity services.

**Core Philosophy:** Create a friendly, approachable cybersecurity brand that breaks industry stereotypes through the playful Puphr mascot and animated reef environment, while maintaining trust through clean information architecture and professional service presentation.

## Typography

**Primary Font:** Inter or DM Sans (Google Fonts)
- Hero Headline: 3.5rem (56px) / font-bold / leading-tight
- Section Headers: 2.5rem (40px) / font-bold / leading-tight
- Subsection Headers: 1.875rem (30px) / font-semibold
- Body Large: 1.25rem (20px) / font-normal / leading-relaxed
- Body Standard: 1rem (16px) / font-normal / leading-relaxed
- Small Text/Labels: 0.875rem (14px) / font-medium

**Secondary Font:** Space Grotesk or Outfit for technical terms and service highlights
- Service Titles: 1.5rem (24px) / font-semibold
- Feature Labels: 1.125rem (18px) / font-medium

## Layout System

**Spacing Units:** Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Section padding: py-20 (desktop) / py-12 (mobile)
- Component spacing: gap-8 between major elements, gap-4 for related items
- Container max-width: max-w-7xl with px-8 (desktop) / px-4 (mobile)

**Grid Structure:**
- Hero: Single column centered content
- Services Grid: 3 columns (lg) / 2 columns (md) / 1 column (mobile)
- Additional Services: 2 columns (lg) / 1 column (mobile)
- Trust Elements: 4 columns (lg) / 2 columns (mobile)

## Animated Digital Reef Background

**Implementation Strategy:**
- Three reef background images transition seamlessly using CSS animations and parallax scrolling
- Background layers scroll at different speeds (0.5x, 0.7x, 1x) for depth
- Smooth crossfade transitions between reef images as user scrolls through sections
- Subtle animated gradients overlay to enhance digital/tech aesthetic
- Background stays fixed while content scrolls over it for parallax effect
- Opacity adjustments ensure text readability over dynamic backgrounds

## Component Library

### Navigation Bar
- Transparent background with subtle backdrop-blur-md
- Puphr mascot logo (height: h-12) positioned left
- Horizontal navigation links (right-aligned on desktop, hamburger on mobile)
- Smooth scroll anchors to sections
- Sticky positioning (sticky top-0) with elevated z-index

### Hero Section (100vh)
- Full viewport height with centered content
- Large Puphr mascot logo featured prominently (w-32 h-32 or larger)
- Bold headline introducing Puphr's mission with friendly tone
- Subheadline explaining core value proposition for SMBs
- Primary CTA button: "Get Your Free Vulnerability Scan" with blurred background (backdrop-blur-lg bg-white/20)
- Secondary text highlighting "Free or Low Cost" services
- Reef background #1 as primary hero backdrop

### Core Services Section
- Section header: "Protect Your Business with Puphr"
- 3-column grid of service cards (rounded-xl cards with backdrop-blur-md bg-white/10)
- Each card includes:
  - Icon placeholder (<!-- CUSTOM ICON: service type -->)
  - Service name (font-semibold text-xl)
  - 2-3 sentence description
  - Key feature bullets (3-4 items with checkmarks)
- Services: Vulnerability Scans, AD Attack Path Mapping, Customized Remediation Plans
- Reef background #2 transitions in during scroll

### Modern Threats Defense Section
- Highlighted section with increased contrast (bg-white/15 backdrop-blur-lg)
- 2-column layout: Content left, visual element right
- Anti-Phishing Training details with emphasis on modern threats
- ClickFix defense capabilities highlighted
- Badge/pill elements for "Emerging Threats" and "Active Protection"

### Additional Services Section
- Section header: "Complete Cybersecurity Solutions"
- 2-column card grid with larger cards
- Services: Cybersecurity Consulting, MFA Implementation, Password Manager Setup
- Each card emphasizes NIST 800-63B compliance where relevant
- Supporting icons and brief implementation timelines
- Reef background #3 active in this region

### Trust & Social Proof Section
- 4-column statistics display
- Metrics like "X+ Businesses Protected", "X Vulnerabilities Found", "XX% Phishing Reduction"
- Industry compliance badges (if applicable)
- Friendly messaging reinforcing SMB focus

### Footer
- 3-column layout: About Puphr / Quick Links / Connect
- Puphr mascot mini-logo
- Brief brand statement with playful puffer fish personality
- Social media links
- Copyright and "Made with ❤️ for SMB Security"
- No contact form per requirements

## Content Areas & Readability

**Text Containers:** All text content sits in containers with backdrop-blur-lg and bg-white/10 to bg-white/20 for readability against animated reef backgrounds

**Card Treatments:** 
- Border: border border-white/20
- Rounded corners: rounded-xl or rounded-2xl
- Padding: p-8 for content cards, p-6 for smaller elements
- Hover effect: hover:bg-white/20 transition-all duration-300

## Images

**Primary Logo:** Puphr puffer fish mascot used in navigation and hero section

**Background Images:** Three digital reef images create morphing parallax effect:
1. Reef Background #1: Hero section backdrop
2. Reef Background #2: Services section backdrop  
3. Reef Background #3: Additional services/footer backdrop

**No additional images required** - the reef backgrounds and mascot logo provide all visual elements

## Animation & Transitions

**Scroll-Based Parallax:**
- Reef backgrounds transition smoothly using intersection observer
- Each section triggers next reef background with 1.5s crossfade
- Parallax speeds: background 0.5x, midground 0.7x, content 1x

**Element Animations:**
- Cards: Subtle scale on hover (hover:scale-105)
- Fade-in on scroll for service cards (stagger 100ms delay between cards)
- CTA buttons: Gentle pulse animation to draw attention
- Smooth scrolling: scroll-behavior: smooth for anchor navigation

**Performance:** Keep animations subtle and performant - reef transitions are the primary visual motion

## Responsive Breakpoints

- Mobile: < 768px (1 column, stacked layout, simplified backgrounds)
- Tablet: 768px - 1024px (2 columns where applicable)
- Desktop: > 1024px (Full multi-column layouts, enhanced parallax)

## Accessibility

- WCAG AA contrast ratios maintained with backdrop-blur containers
- Focus states: ring-2 ring-cyan-400 for keyboard navigation
- Semantic HTML throughout (nav, section, article tags)
- Alt text for Puphr mascot logo describing the friendly puffer fish
- Screen reader friendly service descriptions