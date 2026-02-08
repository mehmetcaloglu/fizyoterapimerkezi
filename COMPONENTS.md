# FizikEND Component Library

Complete guide to all reusable components in the project.

---

## 📐 Layout Components

### Navbar
**Location**: `components/Navbar.tsx`

Sticky navigation bar with glassmorphism effect.

**Features:**
- Floating/sticky behavior
- Backdrop blur effect
- Mobile hamburger menu
- Smooth scroll navigation
- Dark mode compatible

**Props**: None (uses data from `mockData.ts`)

**Usage:**
```tsx
import Navbar from "@/components/Navbar";

<Navbar />
```

**Customization:**
- Modify links in `data/mockData.ts` → `navLinks`
- Adjust blur in Tailwind class: `backdrop-blur-xl`
- Change scroll trigger: `setIsScrolled(window.scrollY > 50)`

---

### Footer
**Location**: `components/Footer.tsx`

Multi-column footer with contact info and links.

**Features:**
- 4-column responsive layout
- Social media links
- Contact information
- Working hours
- Newsletter signup area

**Props**: None (uses data from `mockData.ts`)

**Usage:**
```tsx
import Footer from "@/components/Footer";

<Footer />
```

**Customization:**
- Update contact info in `data/mockData.ts` → `contactInfo`
- Modify social links in Footer component
- Adjust column layout: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`

---

## 🎯 Feature Components

### PainMap
**Location**: `components/PainMap.tsx`

Interactive human body diagram with clickable pain points.

**Features:**
- SVG-based body silhouette
- Front/Back view toggle
- Animated hotspots with pulse effect
- Modal detail view
- Smooth animations

**Props**: None (uses data from `mockData.ts`)

**Data Structure:**
```typescript
interface PainPoint {
  id: string;
  label: string;
  position: { x: number; y: number }; // Percentage-based
  view: "front" | "back";
  condition: string;
  description: string;
  recommendedTherapy: string;
  duration: string;
}
```

**Usage:**
```tsx
import PainMap from "@/components/PainMap";

<PainMap />
```

**Adding New Pain Points:**
```typescript
// In data/mockData.ts
{
  id: "elbow",
  label: "Dirsek",
  position: { x: 30, y: 35 }, // Position on SVG (0-100)
  view: "front",
  condition: "Tenisçi Dirseği",
  description: "Dirsek çevresinde ağrı...",
  recommendedTherapy: "Manuel terapi ve egzersiz",
  duration: "6-8 hafta"
}
```

**Customizing SVG Body:**
Edit the `BodySilhouette` component within `PainMap.tsx`. The SVG uses a 200x400 viewBox with percentage-based positioning.

---

### DarkModeToggle
**Location**: `components/DarkModeToggle.tsx`

Floating button to switch between light and dark themes.

**Features:**
- Fixed position (bottom-right)
- localStorage persistence
- Respects system preference
- Animated icon rotation

**Props**: None

**Usage:**
```tsx
import DarkModeToggle from "@/components/DarkModeToggle";

<DarkModeToggle />
```

**Customization:**
- Position: Change `bottom-8 right-8` classes
- Icons: Import different icons from `lucide-react`
- Animation: Modify `animate={{ rotate }}` values

---

## 🎨 Animation Patterns

### Scroll Reveal (Standard)
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Stagger Effect
```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    {item.content}
  </motion.div>
))}
```

### Hover Lift
```tsx
<motion.div
  whileHover={{ y: -10, scale: 1.02 }}
  transition={{ duration: 0.3 }}
  className="..."
>
  Card Content
</motion.div>
```

### Pulse Animation (Hotspots)
```tsx
<motion.div
  animate={{
    scale: [1, 1.5, 1],
    opacity: [0.5, 0, 0.5],
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="absolute rounded-full bg-primary-orange"
/>
```

### Modal/Overlay Entry
```tsx
<AnimatePresence>
  {isOpen && (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/60"
      />
      
      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", duration: 0.5 }}
        className="fixed ..."
      >
        Content
      </motion.div>
    </>
  )}
</AnimatePresence>
```

---

## 🎨 Design Tokens

### Colors
```typescript
// Tailwind classes
bg-primary-orange          // #d63503
bg-primary-orange-hover    // #e14709
bg-primary-orange-light    // #e9926f
bg-secondary-blue          // #0c1d4f
bg-secondary-blue-muted    // #434e75
bg-background-light        // #fdfefe
bg-background-dark         // #0c1d4f (same as secondary-blue)
```

### Typography
```typescript
// Headings
className="font-display text-6xl font-bold"

// Body text
className="font-body text-base"

// Responsive sizing
className="text-4xl md:text-6xl lg:text-8xl"
```

### Spacing
```typescript
// Section padding
className="py-24"

// Container
className="container mx-auto px-4"

// Card spacing
className="p-8"
```

### Shadows
```typescript
// Standard
className="shadow-lg"

// Hover
className="hover:shadow-2xl"

// Glow effect
className="shadow-lg hover:shadow-primary-orange/20"
```

### Borders
```typescript
// Rounded corners
className="rounded-3xl"   // Cards
className="rounded-full"  // Buttons

// Border colors
className="border border-gray-200 dark:border-primary-orange/20"
```

---

## 📱 Responsive Patterns

### Grid Layouts
```tsx
{/* 1 column mobile, 2 tablet, 3 desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

### Flex Layouts
```tsx
{/* Stack on mobile, row on desktop */}
<div className="flex flex-col lg:flex-row gap-4">
  <div>Left</div>
  <div>Right</div>
</div>
```

### Text Sizing
```tsx
<h1 className="text-4xl md:text-6xl lg:text-8xl">
  Responsive Heading
</h1>
```

### Show/Hide Elements
```tsx
{/* Hide on mobile, show on desktop */}
<div className="hidden lg:block">Desktop Only</div>

{/* Show on mobile, hide on desktop */}
<div className="lg:hidden">Mobile Only</div>
```

---

## 🎯 Common UI Patterns

### CTA Button (Primary)
```tsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="bg-primary-orange hover:bg-primary-orange-hover text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
>
  Randevu Al
</motion.button>
```

### CTA Button (Outline)
```tsx
<button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-secondary-blue font-semibold px-8 py-4 rounded-full transition-all duration-300">
  Hizmetlerimiz
</button>
```

### Service Card
```tsx
<motion.div
  whileHover={{ y: -10 }}
  className="group bg-white dark:bg-secondary-blue/50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
>
  {/* Icon */}
  <div className="w-16 h-16 rounded-2xl bg-primary-orange/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
    <Icon className="w-8 h-8 text-primary-orange" />
  </div>
  
  {/* Content */}
  <h3 className="text-2xl font-display font-bold mb-4">Title</h3>
  <p className="text-secondary-blue-muted dark:text-gray-300">Description</p>
</motion.div>
```

### Testimonial Card
```tsx
<div className="bg-white dark:bg-secondary-blue/50 rounded-3xl p-8 shadow-xl">
  {/* Stars */}
  <div className="flex gap-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-5 h-5 fill-primary-orange text-primary-orange" />
    ))}
  </div>
  
  {/* Quote */}
  <p className="italic mb-6">"{text}"</p>
  
  {/* Author */}
  <div className="flex items-center gap-4">
    <img src={avatar} className="w-12 h-12 rounded-full" />
    <div>
      <div className="font-semibold">{name}</div>
      <div className="text-sm text-primary-orange">{condition}</div>
    </div>
  </div>
</div>
```

### Section Header
```tsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="text-center mb-16"
>
  <h2 className="text-5xl md:text-6xl font-display font-bold text-secondary-blue dark:text-white mb-4">
    Section Title
  </h2>
  <p className="text-xl text-secondary-blue-muted dark:text-gray-300 max-w-2xl mx-auto">
    Section description
  </p>
</motion.div>
```

---

## 🔧 Utility Classes

### Glassmorphism
```tsx
className="bg-white/80 dark:bg-secondary-blue/80 backdrop-blur-xl"
```

### Gradient Overlays
```tsx
className="bg-gradient-to-br from-secondary-blue/95 via-secondary-blue/85 to-transparent"
```

### Text Gradients
```tsx
className="bg-gradient-to-r from-primary-orange to-primary-orange-hover bg-clip-text text-transparent"
```

### Smooth Transitions
```tsx
className="transition-all duration-300"
```

---

## 🎨 Dark Mode Utilities

### Background Colors
```tsx
className="bg-white dark:bg-secondary-blue"
```

### Text Colors
```tsx
className="text-secondary-blue dark:text-white"
className="text-secondary-blue-muted dark:text-gray-300"
```

### Borders
```tsx
className="border-gray-200 dark:border-white/10"
```

### Shadows
```tsx
className="shadow-lg dark:shadow-primary-orange/20"
```

---

## 📊 Performance Tips

1. **Use `viewport={{ once: true }}`** for scroll animations to prevent re-triggering
2. **Lazy load images** with next/image
3. **Minimize animation complexity** on mobile
4. **Use CSS transforms** (translateY) instead of margin/padding for animations
5. **Debounce scroll listeners** in custom hooks

---

**Questions?** Reference the component source code or check the main README.md
