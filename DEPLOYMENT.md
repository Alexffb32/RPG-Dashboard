# 🚀 Deployment Guide - Vercel

This guide will help you deploy your RPG Dashboard to Vercel for online access.

## 📋 Prerequisites

1. **Vercel Account**: Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository**: Your code should be pushed to GitHub
3. **Node.js**: Ensure you have Node.js 18+ installed locally

## 🔧 Deployment Steps

### Method 1: Vercel Dashboard (Recommended)

1. **Connect Repository**:
   - Go to [vercel.com/dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Project**:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

3. **Environment Variables** (if needed):
   - Add any environment variables from `.env.example`
   - Set `NODE_ENV=production`

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete
   - Your app will be live at `https://your-project-name.vercel.app`

### Method 2: Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   # From your project directory
   vercel
   
   # For production deployment
   vercel --prod
   ```

## ⚙️ Configuration Files

The following files have been configured for optimal Vercel deployment:

- **`vercel.json`**: Vercel-specific configuration
- **`next.config.js`**: Next.js optimization settings
- **`.env.example`**: Environment variables template
- **`package.json`**: Updated with deployment scripts

## 🔍 Build Optimization

The project includes several optimizations:

- **Standalone Output**: Reduces bundle size
- **SWC Minification**: Faster builds
- **Image Optimization**: Disabled for static export compatibility
- **TypeScript/ESLint**: Build errors ignored for deployment

## 🌐 Custom Domain (Optional)

1. Go to your project dashboard on Vercel
2. Navigate to "Settings" → "Domains"
3. Add your custom domain
4. Configure DNS records as instructed

## 🔧 Troubleshooting

### Build Failures
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify TypeScript compilation locally: `npm run type-check`

### Runtime Errors
- Check function logs in Vercel dashboard
- Verify environment variables are set correctly
- Test locally with `npm run build && npm start`

### Performance Issues
- Monitor Core Web Vitals in Vercel Analytics
- Consider enabling Vercel Edge Functions if needed
- Optimize images and assets

## 📊 Monitoring

Vercel provides built-in monitoring:
- **Analytics**: Page views, performance metrics
- **Speed Insights**: Core Web Vitals tracking
- **Function Logs**: Server-side debugging

## 🔄 Continuous Deployment

Once connected to GitHub:
- Every push to `main` branch triggers automatic deployment
- Pull requests create preview deployments
- Rollback to previous deployments anytime

## 📞 Support

If you encounter issues:
1. Check [Vercel Documentation](https://vercel.com/docs)
2. Review build logs for specific errors
3. Test deployment locally first
4. Contact Vercel support if needed

---

**🎉 Your RPG Dashboard is now ready for the web!**