# 🚀 Quick Start Guide - FFTO React App

## ⚠️ Prerequisites Setup

Since Node.js is not currently installed on your system, follow these steps:

### Step 1: Install Node.js

1. **Download Node.js**:
   - Go to https://nodejs.org/
   - Download the **LTS version** (Long Term Support) - recommended for most users
   - Download link: https://nodejs.org/dist/v20.10.0/node-v20.10.0-x64.msi (for Windows 64-bit)

2. **Install Node.js**:
   - Run the downloaded installer
   - Accept the license agreement
   - Use default installation settings
   - Make sure "Add to PATH" is checked ✅
   - Click "Install"
   - Restart your terminal/PowerShell after installation

3. **Verify Installation**:
   Open a new PowerShell window and run:
   ```powershell
   node --version
   npm --version
   ```
   You should see version numbers (e.g., v20.10.0 and 10.2.3)

### Step 2: Install Project Dependencies

1. **Navigate to the project**:
   ```powershell
   cd "C:\Users\pprakas8\Desktop\FFTO-Site\ffto-react"
   ```

2. **Install all dependencies** (this may take 2-5 minutes):
   ```powershell
   npm install
   ```

### Step 3: Copy Assets

Before running the app, copy your image assets:

1. **Create the assets directory structure**:
   ```powershell
   mkdir "public\assets\usecases-poster-img"
   ```

2. **Copy poster images**:
   ```powershell
   Copy-Item "..\activities\genai-factory-model\usecases-poster-img\*" "public\assets\usecases-poster-img\" -Recurse
   ```

3. **Copy architecture diagram**:
   ```powershell
   Copy-Item "..\activities\genai-factory-model\Conceptual Architecture Diagram.jpeg" "public\assets\"
   ```

### Step 4: Start the Development Server

```powershell
npm run dev
```

You should see output like:
```
  VITE v5.0.8  ready in 543 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

### Step 5: Open in Browser

- Open your web browser
- Navigate to **http://localhost:5173**
- Your React app is now running! 🎉

## 🎯 Quick Commands Reference

```powershell
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Stop the server
# Press Ctrl+C in the terminal
```

## 🔧 Alternative: Use npx (No Installation)

If you prefer not to install dependencies globally, you can use npx:

```powershell
# This will download and run vite temporarily
npx vite
```

## 📂 Project File Structure

```
ffto-react/
├── src/
│   ├── components/      # All React components
│   ├── pages/           # Page components (12 pages)
│   ├── data/            # JSON data files
│   └── styles/          # CSS files
├── public/
│   └── assets/          # Images and static files
├── package.json         # Project configuration
└── README.md            # Full documentation
```

## 🎨 What's Been Migrated

✅ All 12 HTML pages → React components
✅ Global CSS → CSS Modules
✅ Navigation → React Router
✅ Static content → JSON data files
✅ JavaScript modals → React Modal component
✅ Image gallery → React Poster Gallery component
✅ Placeholder pages for empty content

## 🆘 Need Help?

**Common Issues:**

1. **"npm not found"**:
   - Node.js not installed or PATH not updated
   - Restart your terminal after installing Node.js

2. **Port 5173 already in use**:
   - Vite will automatically try port 5174, 5175, etc.
   - Or specify: `npm run dev -- --port 3000`

3. **Images not showing**:
   - Make sure you copied assets to `public/assets/`
   - Check console for 404 errors

4. **Build errors**:
   - Delete `node_modules` folder
   - Run `npm install` again

## 🚀 Ready to Deploy?

Once everything works locally:

1. Build production version:
   ```powershell
   npm run build
   ```

2. The `dist/` folder contains your production-ready app

3. Deploy to:
   - **Vercel** (recommended): Connect GitHub repo or use Vercel CLI
   - **Netlify**: Drag `dist/` folder to Netlify
   - **Your hosting**: Upload `dist/` folder contents

## 📚 Next Steps

1. ✅ Install Node.js
2. ✅ Run `npm install`
3. ✅ Copy assets
4. ✅ Run `npm run dev`
5. ✅ Test all pages in browser
6. 🎉 Deploy when ready!

---

**Need the detailed documentation?** Check out the main `README.md` file in this directory.
