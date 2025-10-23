# Ben Imberman Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Website

- **Primary URL:** https://benimberman.com
- **Alternative URL:** https://www.benimberman.com

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS
- **Icons:** React Icons, Custom SVG components
- **Routing:** React Router DOM
- **Hosting:** AWS S3 + CloudFront
- **DNS:** AWS Route 53

## 🏗️ Architecture

```
Internet → CloudFront CDN → S3 Bucket (Static Files)
```

## 🚀 Deployment

### Prerequisites

- Node.js 20+
- AWS CLI configured
- AWS account with appropriate permissions

### Deploy to Production

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to S3:**
   ```bash
   aws s3 sync dist/ s3://benimberman-portfolio-1761255859 --delete
   ```

3. **CloudFront will automatically serve the updated files**

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── assets/             # Static assets and icons
├── context/            # React context providers
├── data/               # Static data and configurations
├── styles/             # Global styles
└── types/              # TypeScript type definitions
```

## 🔧 AWS Resources

- **S3 Bucket:** `benimberman-portfolio-1761255859`
- **CloudFront Distribution:** `E2OF631MGGQKE8`
- **Route 53 Hosted Zone:** `Z019734412JY0S0TN22CV`
- **Domain:** `benimberman.com` (with www subdomain)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Features

- Responsive design
- Dark/Light theme toggle
- Smooth animations
- Project showcase with image carousels
- Contact form
- SEO optimized
- Fast loading with CloudFront CDN

## 🏗️ Deployment Architecture

This project uses **S3 + CloudFront** for optimal performance and cost efficiency:

- **S3 Bucket** - Hosts static website files
- **CloudFront CDN** - Global content delivery with caching
- **Route 53** - DNS management for custom domain
- **Automated deployment** - Simple script-based deployment

### Why This Architecture?

- ✅ **Cost-effective** - ~$1-5/month vs $15-20/month for alternatives
- ✅ **High performance** - Global CDN with edge caching
- ✅ **Simple maintenance** - No servers to manage
- ✅ **Reliable** - AWS managed infrastructure
- ✅ **Scalable** - Handles traffic spikes automatically
