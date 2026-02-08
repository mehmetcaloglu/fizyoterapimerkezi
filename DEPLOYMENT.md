# FizikEND Deployment Guide

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

Vercel is made by the creators of Next.js and offers the best integration.

#### Steps:
1. Push your code to GitHub/GitLab/Bitbucket
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel will auto-detect Next.js settings
6. Add environment variables in Vercel dashboard
7. Click "Deploy"

**Custom Domain:**
- Go to Project Settings → Domains
- Add your custom domain (e.g., fizikend.com.tr)
- Update DNS records as instructed

**Environment Variables:**
```
NEXT_PUBLIC_SITE_URL=https://fizikend.com.tr
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
```

---

### Option 2: Netlify

1. Push code to Git repository
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import from Git"
4. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
5. Add environment variables
6. Deploy

---

### Option 3: Traditional Hosting (cPanel/Shared)

This requires Node.js support on your hosting.

#### Requirements:
- Node.js 18+ installed
- SSH access
- PM2 or similar process manager

#### Steps:
1. Build the project locally:
   ```bash
   npm run build
   ```

2. Upload these files to server:
   - `.next/` folder
   - `public/` folder
   - `package.json`
   - `next.config.mjs`
   - `node_modules/` (or run `npm install --production` on server)

3. Start the server:
   ```bash
   npm start
   # or with PM2
   pm2 start npm --name "fizikend" -- start
   ```

4. Configure reverse proxy (Nginx):
   ```nginx
   server {
       listen 80;
       server_name fizikend.com.tr;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

---

### Option 4: Docker Deployment

#### Create Dockerfile:
```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

#### Docker Compose:
```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - NEXT_PUBLIC_SITE_URL=https://fizikend.com.tr
    restart: unless-stopped
```

#### Deploy:
```bash
docker-compose up -d
```

---

## 🔒 SSL Certificate (HTTPS)

### Free SSL with Let's Encrypt:
```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Get certificate
sudo certbot --nginx -d fizikend.com.tr -d www.fizikend.com.tr

# Auto-renewal (runs every 12 hours)
sudo systemctl enable certbot.timer
```

---

## 📊 Performance Optimization

### Before Deployment:
1. **Optimize Images**: Use WebP format, compress images
2. **Enable Caching**: Configure cache headers
3. **Minify Code**: Next.js does this automatically
4. **Enable Compression**: Gzip/Brotli on server

### Vercel/Netlify (Auto-configured):
- ✅ CDN
- ✅ Automatic SSL
- ✅ Image optimization
- ✅ Compression
- ✅ Edge caching

---

## 🔍 SEO Checklist

Before going live:
- [ ] Add meta descriptions
- [ ] Configure robots.txt
- [ ] Add sitemap.xml
- [ ] Set up Google Search Console
- [ ] Configure canonical URLs
- [ ] Add Open Graph tags
- [ ] Test mobile-friendliness
- [ ] Check page load speed

---

## 📈 Analytics Setup

### Google Analytics 4:
1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to environment variables:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
4. Add tracking code to `app/layout.tsx`

---

## 🔄 Continuous Deployment

### GitHub Actions:
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID}}
          vercel-project-id: ${{ secrets.PROJECT_ID}}
          vercel-args: '--prod'
```

---

## 🐛 Troubleshooting

### Build Fails:
- Check Node.js version (18+)
- Clear `.next` folder and rebuild
- Check for TypeScript errors

### Images Not Loading:
- Update `next.config.mjs` with image domains
- Check file paths

### Dark Mode Not Working:
- Ensure `class` strategy in tailwind.config.ts
- Check localStorage in browser

### Performance Issues:
- Enable Next.js Image Optimization
- Use CDN for static assets
- Enable caching headers

---

## 📞 Post-Deployment

After successful deployment:
1. Test all pages on mobile and desktop
2. Verify contact forms work
3. Test dark mode toggle
4. Check pain map interactions
5. Verify analytics tracking
6. Set up monitoring (e.g., Sentry)
7. Configure backups

---

**Need Help?** Check Next.js deployment docs or contact your development team.
