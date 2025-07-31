# 🚀 Simpl Healthcare Website - Soft Launch Guide

## 🔐 Current Setup: Password Protection

Your website is now protected with a simple password system. Here's how it works:

### 📋 **Team Access Instructions**

1. **Website URL**: `http://localhost:3000` (or your deployed URL)
2. **Team Password**: `SimplTeam2024!`
3. **Access Duration**: 24 hours (automatically expires)

### 👥 **How Your Team Can Access**

1. Navigate to the website URL
2. Enter the password: `SimplTeam2024!`
3. Click "Access Website"
4. Browse the full website normally
5. The soft launch banner will appear at the top

### 🔧 **Customization Options**

#### Change the Password
Edit `app/auth/page.tsx`, line 17:
```javascript
const correctPassword = 'YourNewPassword123!'
```

#### Adjust Access Duration
Edit `app/auth/page.tsx`, line 21:
```javascript
document.cookie = 'simpl-auth=authenticated; path=/; max-age=172800' // 48 hours
```

#### Remove Soft Launch Banner
Delete or comment out the `<SoftLaunchBanner />` component in `app/layout.tsx`

---

## 🌐 **Deployment Options for Soft Launch**

### **Option 1: Vercel (Recommended)**

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Add soft launch protection"
   git push origin main
   ```

2. **Deploy to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically
   - Get a URL like: `https://simpl-healthcare.vercel.app`

3. **Share with Team**:
   - Send the Vercel URL + password `SimplTeam2024!`

### **Option 2: Netlify**

1. **Build the site**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Drag the `out` folder to netlify.com/drop
   - Get instant URL
   - Share URL + password with team

### **Option 3: GitHub Pages**

1. **Update `next.config.js`** for GitHub Pages:
   ```javascript
   assetPrefix: process.env.NODE_ENV === 'production' ? '/your-repo-name/' : '',
   basePath: process.env.NODE_ENV === 'production' ? '/your-repo-name' : '',
   ```

2. **Deploy**:
   ```bash
   npm run build
   git add out/
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

---

## 🔒 **Alternative Protection Methods**

### **Method 1: IP Whitelist** (More Secure)
Edit `middleware.ts`:
```javascript
const allowedIPs = ['192.168.1.100', '10.0.0.50'] // Your team's IPs
const clientIP = request.ip || request.headers.get('x-forwarded-for')
if (!allowedIPs.includes(clientIP)) {
  return NextResponse.redirect('/unauthorized')
}
```

### **Method 2: Basic Auth** (Browser-level)
```javascript
// In middleware.ts
const basicAuth = request.headers.get('authorization')
if (!basicAuth || !basicAuth.includes('Basic ')) {
  return new Response('Unauthorized', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Team Preview"' }
  })
}
```

### **Method 3: Environment-Based Access**
```javascript
// Only show auth page in production
if (process.env.NODE_ENV === 'production' && !authCookie) {
  return NextResponse.redirect('/auth')
}
```

---

## 📱 **Mobile Testing**

Your team can test on mobile devices using:
1. Same password protection works on all devices
2. QR code generator for easy mobile access
3. Test responsiveness across devices

---

## 🎯 **Ready for Public Launch?**

### **Remove Soft Launch Protection**:

1. **Delete these files**:
   - `middleware.ts`
   - `app/auth/page.tsx`
   - `components/SoftLaunchBanner.tsx`

2. **Update `app/layout.tsx`**:
   Remove the `<SoftLaunchBanner />` import and component

3. **Deploy normally** to your production domain

---

## 📊 **Analytics & Monitoring**

Consider adding during soft launch:
- Google Analytics (team access only)
- Hotjar for user behavior
- Simple feedback form for team members

---

## 💡 **Pro Tips**

1. **Team Feedback**: Set up a shared document for team feedback
2. **Mobile Priority**: Test extensively on mobile devices
3. **Performance**: Use Lighthouse to check performance scores
4. **SEO**: Keep `noindex` meta tag during soft launch
5. **Content Review**: Have team review all copy and images

---

## 🆘 **Support**

If you need to make changes:
1. Update the password in `app/auth/page.tsx`
2. Modify banner text in `components/SoftLaunchBanner.tsx`
3. Adjust protection logic in `middleware.ts`

**Current Status**: ✅ Soft Launch Ready with Password Protection 