# Ahmad Bushairi - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a beautiful dark theme with smooth animations and elegant design.

## 🚀 Features

- **Modern Design**: Clean, professional dark theme with gradient accents
- **Fully Responsive**: Optimized for all devices and screen sizes
- **Smooth Animations**: Intersection Observer animations and hover effects
- **Performance Optimized**: Built with Next.js 14 for optimal performance
- **TypeScript**: Full type safety and better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid development

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Inter & Poppins (Google Fonts)
- **Icons**: Heroicons (SVG)
- **Deployment**: Vercel (recommended)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and animations
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects showcase
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer component
```

## 🎨 Design Features

### Color Scheme

- **Primary**: Indigo to Purple gradients
- **Background**: Dark gray (#0f0f23)
- **Text**: White and gray variations
- **Accents**: Pink and blue highlights

### Animations

- Fade-in animations on scroll
- Hover lift effects
- Gradient text animations
- Smooth transitions

### Components

- **Header**: Fixed navigation with mobile menu
- **Hero**: Animated background with CTA buttons
- **About**: Personal info with experience timeline
- **Skills**: Animated progress bars
- **Projects**: Filterable project cards
- **Contact**: Contact form with info cards
- **Footer**: Social links and quick navigation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd personal-landing-page
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Update the following files with your information:

- `src/app/layout.tsx` - Update metadata
- `src/components/Hero.tsx` - Update name, title, and description
- `src/components/About.tsx` - Update personal info and experience
- `src/components/Skills.tsx` - Update skills and proficiency levels
- `src/components/Projects.tsx` - Update project details
- `src/components/Contact.tsx` - Update contact information

### Styling

- Colors: Update CSS variables in `src/app/globals.css`
- Fonts: Change font imports in `src/app/layout.tsx`
- Animations: Modify animation classes in `src/app/globals.css`

### Content

- Replace placeholder images with your own
- Update social media links
- Add your own projects and skills
- Customize the contact form

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🎯 Performance

- Lighthouse score: 95+ (Performance, Accessibility, Best Practices, SEO)
- Optimized images and fonts
- Efficient animations
- Minimal bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first approach
- Heroicons for the beautiful icons
- Google Fonts for the typography

---

Built with ❤️ by Ahmad Bushairi
