# Customization Guide

This guide will help you customize your personal portfolio website to match your brand and preferences.

## 🎨 Personal Information

### 1. Update Basic Info

**File: `src/app/layout.tsx`**

```typescript
export const metadata: Metadata = {
  title: "Your Name - Personal Portfolio", // Change this
  description: "Your personal description here", // Change this
  keywords: ["your", "keywords", "here"], // Update keywords
  authors: [{ name: "Your Name" }], // Change this
}
```

**File: `src/components/Hero.tsx`**

```typescript
// Update these lines
<p className="text-lg md:text-xl text-gray-300 mb-4 animate-fade-in">
  Hello, I'm
</p>

<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-in-left">
  <span className="gradient-text">Your Name</span> // Change this
</h1>

<h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-8 animate-slide-in-right">
  Your Title Here // Change this
</h2>

<p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in">
  Your description here // Change this
</p>
```

### 2. Update About Section

**File: `src/components/About.tsx`**

```typescript
// Update personal description
<p className="text-gray-300 leading-relaxed mb-6">
  Your personal story here // Change this
</p>

// Update experience data
const experiences = [
  {
    year: '2023 - Present',
    title: 'Your Job Title', // Change this
    company: 'Your Company', // Change this
    description: 'Your job description' // Change this
  },
  // Add more experiences...
];

// Update stats
<div className="text-2xl font-bold gradient-text">4+</div>
<div className="text-sm text-gray-400">Years Experience</div>
```

### 3. Update Skills

**File: `src/components/Skills.tsx`**

```typescript
const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "Your Skill", level: 95, color: "from-blue-500 to-cyan-500" },
      // Add your skills...
    ],
  },
  // Add more categories...
]
```

### 4. Update Projects

**File: `src/components/Projects.tsx`**

```typescript
const projects = [
  {
    id: 1,
    title: "Your Project Name", // Change this
    description: "Your project description", // Change this
    category: "frontend", // or 'backend', 'fullstack'
    technologies: ["Your", "Technologies"], // Change this
    liveUrl: "https://your-project.com", // Change this
    githubUrl: "https://github.com/your-repo", // Change this
    featured: true,
  },
  // Add more projects...
]
```

### 5. Update Contact Information

**File: `src/components/Contact.tsx`**

```typescript
// Update contact info
<a href="mailto:your@email.com" className="text-gray-300 hover:text-indigo-400 transition-colors duration-200">
  your@email.com // Change this
</a>

<p className="text-gray-300">Your Location</p> // Change this
```

**File: `src/components/Footer.tsx`**

```typescript
// Update social links
{[
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: '...' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername', icon: '...' },
  { name: 'Twitter', url: 'https://twitter.com/yourusername', icon: '...' }
].map((social) => (
  // ...
))}

// Update contact info
<p>Email: your@email.com</p> // Change this
<p>Location: Your Location</p> // Change this
```

## 🎨 Styling Customization

### 1. Color Scheme

**File: `src/app/globals.css`**

```css
:root {
  --background: #0f0f23; /* Change background color */
  --foreground: #ffffff; /* Change text color */
  --primary: #6366f1; /* Change primary color */
  --secondary: #1e1e2e; /* Change secondary color */
  --accent: #8b5cf6; /* Change accent color */
  /* Add more custom colors */
}
```

### 2. Gradient Colors

**File: `src/app/globals.css`**

```css
.gradient-text {
  background: linear-gradient(
    135deg,
    #6366f1,
    #8b5cf6,
    #ec4899
  ); /* Change gradient colors */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### 3. Fonts

**File: `src/app/layout.tsx`**

```typescript
import { Inter, Poppins } from "next/font/google" // Change fonts

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Adjust font weights
})
```

### 4. Animations

**File: `src/app/globals.css`**

```css
/* Customize animation durations */
.animate-fade-in {
  animation: fadeIn 0.6s ease-out; /* Change duration */
}

/* Customize hover effects */
.hover-lift:hover {
  transform: translateY(-4px); /* Change lift amount */
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3); /* Change shadow */
}
```

## 🖼️ Images and Media

### 1. Profile Picture

1. Add your profile picture to `public/` folder
2. Update the Hero component to use your image
3. Optimize the image for web (recommended: 400x400px)

### 2. Project Images

1. Add project screenshots to `public/projects/` folder
2. Update project data to reference your images
3. Use Next.js Image component for optimization

### 3. Favicon

1. Replace `public/favicon.ico` with your own
2. Update favicon in `src/app/layout.tsx`

## 📱 Responsive Design

### Mobile Optimization

**File: `src/components/Header.tsx`**

```typescript
// Adjust mobile menu breakpoint
<nav className="hidden md:flex space-x-8"> // Change 'md' to 'lg' if needed
```

### Tablet Optimization

**File: `src/components/Hero.tsx`**

```typescript
// Adjust text sizes for different screens
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
  // Adjust these breakpoints as needed
</h1>
```

## 🔧 Advanced Customization

### 1. Add New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Update navigation in `src/components/Header.tsx`

### 2. Custom Animations

**File: `src/app/globals.css`**

```css
@keyframes yourAnimation {
  from {
    /* Your animation start */
  }
  to {
    /* Your animation end */
  }
}

.your-animation-class {
  animation: yourAnimation 1s ease-out;
}
```

### 3. Add Interactive Features

1. **Dark/Light Mode Toggle**
2. **Language Switcher**
3. **Blog Section**
4. **Testimonials**
5. **Resume Download**

### 4. SEO Optimization

**File: `src/app/layout.tsx`**

```typescript
export const metadata: Metadata = {
  // Add more meta tags
  openGraph: {
    title: "Your Name - Portfolio",
    description: "Your description",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name - Portfolio",
    description: "Your description",
    images: ["/og-image.jpg"],
  },
}
```

## 🚀 Performance Optimization

### 1. Image Optimization

```typescript
import Image from "next/image"

;<Image
  src="/your-image.jpg"
  alt="Description"
  width={400}
  height={300}
  priority // For above-the-fold images
/>
```

### 2. Code Splitting

```typescript
import dynamic from "next/dynamic"

const DynamicComponent = dynamic(() => import("./Component"), {
  loading: () => <p>Loading...</p>,
})
```

### 3. Bundle Analysis

```bash
npm install @next/bundle-analyzer
```

## 📝 Content Management

### 1. Create a Content File

**File: `src/data/content.ts`**

```typescript
export const content = {
  name: "Your Name",
  title: "Your Title",
  description: "Your description",
  skills: [
    // Your skills
  ],
  projects: [
    // Your projects
  ],
  // ... more content
}
```

### 2. Use Content in Components

```typescript
import { content } from "@/data/content"

// In your component
;<h1>{content.name}</h1>
```

## 🎯 Testing Your Changes

### 1. Development Testing

```bash
npm run dev
# Open http://localhost:3000
```

### 2. Build Testing

```bash
npm run build
npm start
```

### 3. Performance Testing

```bash
npm run build
npm run start
# Run Lighthouse audit
```

## 📞 Need Help?

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Tailwind CSS docs](https://tailwindcss.com/docs)
3. Look at the component files for examples
4. Create an issue if you need help

---

Happy customizing! 🎨
