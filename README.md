# FizikEND - Premium Physiotherapy Website

A modern, high-conversion website for FizikEND physiotherapy center in Antalya. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🎯 Project Overview

This is **Plan 1** - a visually stunning, motion-heavy website that feels like "Modern Human Engineering". Designed to stand out from traditional medical websites with bold animations, interactive elements, and a premium aesthetic.

## 🚀 Features

### Core Features
- ✅ **Interactive Pain Map**: SVG-based human body with clickable hotspots showing pain points and recommended therapies
- ✅ **Glassmorphism Navigation**: Floating navbar with backdrop blur effect
- ✅ **Motion-Heavy Animations**: Powered by Framer Motion for smooth, professional animations
- ✅ **Dark Mode Support**: Manual dark mode toggle with localStorage persistence
- ✅ **Fully Responsive**: Mobile-first design that works on all devices
- ✅ **CMS-Ready Architecture**: All content stored in `data/mockData.ts` for easy CMS integration

### Design System
- **Primary Orange**: `#d63503` (Action buttons, CTAs)
- **Secondary Orange**: `#e14709` (Hover states)
- **Light Orange**: `#e9926f` (Accents)
- **Primary Blue**: `#0c1d4f` (Text, Dark backgrounds)
- **Muted Blue**: `#434e75` (Secondary text)
- **Off-White**: `#fdfefe` (Light backgrounds)

### Typography
- **Display Font**: Plus Jakarta Sans (Professional, clean headings)
- **Body Font**: DM Sans (Highly readable, medical-appropriate)

## 📁 Project Structure

```
fizikend-website/
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind directives
├── components/
│   ├── Navbar.tsx          # Floating glassmorphism navbar
│   ├── Footer.tsx          # Footer with contact info
│   ├── PainMap.tsx         # Interactive pain map component
│   └── DarkModeToggle.tsx  # Dark mode switcher
├── data/
│   └── mockData.ts         # All content data (CMS-ready)
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.mjs         # Next.js configuration
├── package.json            # Dependencies
└── README.md               # This file
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Step 1: Install Dependencies
```bash
npm install
# or
yarn install
```

### Step 2: Run Development Server
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3: Build for Production
```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 🎨 Customization Guide

### Changing Content

All content is stored in `data/mockData.ts`. Simply edit this file to update:
- Hero section text
- Service descriptions
- Pain map points
- Testimonials
- Contact information
- Statistics

**Example:**
```typescript
// data/mockData.ts
export const heroContent: HeroContent = {
  title: "Your New Title Here",
  subtitle: "Your new subtitle",
  // ... rest of the content
};
```

### Changing Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    orange: "#your-color",
    "orange-hover": "#your-hover-color",
  },
  // ...
}
```

### Adding New Services

Add to the `services` array in `data/mockData.ts`:
```typescript
{
  id: "new-service",
  icon: "Activity", // Must be a Lucide icon name
  title: "Service Name",
  description: "Service description",
  features: ["Feature 1", "Feature 2"]
}
```

### Modifying Pain Map Points

Edit `painPoints` array in `data/mockData.ts`:
```typescript
{
  id: "new-point",
  label: "Area Name",
  position: { x: 50, y: 30 }, // Percentage-based coordinates
  view: "front", // or "back"
  condition: "Medical Condition",
  description: "Description",
  recommendedTherapy: "Treatment",
  duration: "8-10 weeks"
}
```

## 🔌 CMS Integration (Future)

The project is architected for easy CMS integration:

1. Replace `data/mockData.ts` imports with CMS API calls
2. Use the same TypeScript interfaces for type safety
3. Recommended CMS options:
   - **Strapi** (Open-source, Node.js)
   - **Sanity** (Structured content, real-time)
   - **Contentful** (Enterprise-grade)
   - **WordPress REST API** (If already using WordPress)

**Example integration:**
```typescript
// Instead of:
import { services } from "@/data/mockData";

// Use:
const services = await fetch('/api/services').then(r => r.json());
```

## 🎭 Animation System

The site uses Framer Motion for all animations. Common patterns:

### Scroll Reveal
```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Hover Effects
```typescript
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click Me
</motion.button>
```

### Stagger Children
```typescript
{items.map((item, index) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
  >
    {item}
  </motion.div>
))}
```

## 🌗 Dark Mode

Dark mode is implemented using Tailwind's class strategy:
- Toggle component: `components/DarkModeToggle.tsx`
- Persists preference in localStorage
- Respects system preference on first visit

**Usage in components:**
```typescript
<div className="bg-white dark:bg-secondary-blue">
  <p className="text-secondary-blue dark:text-white">Text</p>
</div>
```

## 📱 Responsive Design

Mobile-first approach with Tailwind breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

**Example:**
```typescript
<div className="text-4xl md:text-6xl lg:text-8xl">
  Responsive Text
</div>
```

## 🧪 Key Components Explained

### PainMap Component
- SVG-based human body silhouette
- Clickable hotspots with pulse animation
- Modal detail view with therapy recommendations
- Front/back view toggle

### Navbar Component
- Sticky positioning with scroll-based styling
- Glassmorphism effect (backdrop-blur)
- Mobile menu with slide-in animation
- Smooth scroll to sections

### Footer Component
- Four-column layout (responsive)
- Social media links
- Contact information
- Working hours

## 🚀 Performance Optimization

- Next.js 14 App Router for optimal performance
- Image optimization via next/image (configure in next.config.mjs)
- Font optimization with next/font
- CSS-in-JS with Tailwind (zero runtime)
- Framer Motion lazy loading

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

This is a client project template. For modifications:
1. Edit content in `data/mockData.ts`
2. Test on multiple devices
3. Ensure dark mode compatibility
4. Maintain animation consistency

## 📄 License

Proprietary - FizikEND Physiotherapy Center

## 🆘 Support

For technical issues or questions:
- Check the component files for inline comments
- Review Tailwind CSS documentation
- Review Framer Motion documentation
- Review Next.js 14 documentation

## 🎯 Future Enhancements (Plan 2+)

- [ ] Headless CMS integration
- [ ] Online booking system
- [ ] Patient portal login
- [ ] Blog section
- [ ] Video testimonials
- [ ] Before/After photo galleries
- [ ] Multi-language support (Turkish/English)
- [ ] SEO optimization
- [ ] Google Analytics integration
- [ ] WhatsApp chat widget
- [ ] Email newsletter signup

---

**Built with ❤️ for FizikEND - Modern Human Engineering**
