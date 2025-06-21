# Deployment Guide

This guide will help you deploy your personal portfolio website to various platforms.

## 🚀 Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Steps:

1. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**

   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect Next.js settings

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

### Custom Domain (Optional)

- In your Vercel dashboard, go to Settings → Domains
- Add your custom domain
- Update DNS records as instructed

## 🌐 Netlify

### Steps:

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: None required

### Manual Deployment:

```bash
npm run build
# Upload the .next folder to Netlify
```

## 🐳 Docker

### Create Dockerfile:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

### Build and Run:

```bash
docker build -t personal-portfolio .
docker run -p 3000:3000 personal-portfolio
```

## ☁️ AWS Amplify

### Steps:

1. **Connect Repository**

   - Go to AWS Amplify Console
   - Connect your GitHub repository
   - Select the main branch

2. **Build Settings**

   - Build command: `npm run build`
   - Output directory: `.next`

3. **Deploy**
   - Amplify will automatically deploy on every push

## 🚢 Railway

### Steps:

1. **Connect Repository**

   - Go to [railway.app](https://railway.app)
   - Connect your GitHub repository
   - Railway will auto-detect Next.js

2. **Environment Variables**

   - No additional variables needed

3. **Deploy**
   - Railway will automatically deploy

## 📱 Mobile Optimization

### Testing:

- Use Chrome DevTools device simulation
- Test on actual mobile devices
- Check Core Web Vitals

### Performance Tips:

- Optimize images
- Minimize bundle size
- Use Next.js Image component
- Enable compression

## 🔧 Environment Variables

### Development:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Production:

```bash
# Vercel/Netlify environment variables
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📊 Analytics (Optional)

### Google Analytics:

1. Create GA4 property
2. Add tracking code to `layout.tsx`
3. Update privacy policy

### Vercel Analytics:

- Enable in Vercel dashboard
- No code changes needed

## 🔒 Security

### Headers:

```javascript
// next.config.ts
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ]
  },
}
```

## 📈 SEO Optimization

### Meta Tags:

- Update metadata in `layout.tsx`
- Add Open Graph tags
- Include Twitter cards

### Sitemap:

```bash
npm install next-sitemap
```

### robots.txt:

```txt
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

## 🎯 Performance Monitoring

### Lighthouse:

- Run Lighthouse audits
- Aim for 90+ scores
- Monitor Core Web Vitals

### Real User Monitoring:

- Vercel Analytics
- Google Analytics
- Sentry (error tracking)

## 🔄 Continuous Deployment

### GitHub Actions:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: "18"
      - run: npm ci
      - run: npm run build
```

## 🆘 Troubleshooting

### Common Issues:

1. **Build Fails**

   - Check Node.js version (18+)
   - Clear `.next` folder
   - Update dependencies

2. **Images Not Loading**

   - Check image paths
   - Use Next.js Image component
   - Optimize image sizes

3. **Styling Issues**

   - Clear browser cache
   - Check Tailwind CSS config
   - Verify CSS imports

4. **Performance Issues**
   - Optimize images
   - Minimize bundle size
   - Use dynamic imports

## 📞 Support

If you encounter issues:

1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [Tailwind CSS docs](https://tailwindcss.com/docs)
3. Search GitHub issues
4. Create a new issue with details

---

Happy deploying! 🚀
