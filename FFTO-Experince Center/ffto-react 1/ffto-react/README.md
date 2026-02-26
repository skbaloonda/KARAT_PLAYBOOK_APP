# FFTO React Application

A modern, component-based React application showcasing FFTO (GenAI) activities, resources, and services.

## 🚀 Technology Stack

- **React 18** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **React Router v6** - Client-side routing
- **CSS Modules** - Scoped component styling

## 📁 Project Structure

```
ffto-react/
├── public/              # Static assets
│   └── assets/         # Images and media files
├── src/
│   ├── components/     # Reusable React components
│   │   ├── layout/     # Layout components (Header, Footer)
│   │   ├── common/     # Common components (Cards, Sections, Modal)
│   │   └── features/   # Feature-specific components
│   ├── pages/          # Page components (routes)
│   ├── data/           # JSON data files
│   ├── styles/         # Global styles and variables
│   ├── types/          # TypeScript type definitions
│   ├── App.tsx         # Main app component with routing
│   └── main.tsx        # Application entry point
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 🛠️ Setup Instructions

### Prerequisites

- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

### Installation Steps

1. **Install Node.js** (if not already installed):
   - Download from https://nodejs.org/
   - Verify installation: `node --version` and `npm --version`

2. **Navigate to the project directory**:
   ```bash
   cd ffto-react
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Copy assets** (if needed):
   - Copy the `usecases-poster-img` folder to `public/assets/`
   - Copy the architecture diagram to `public/assets/`

5. **Start the development server**:
   ```bash
   npm run dev
   ```

6. **Open your browser**:
   - Navigate to `http://localhost:5173` (or the URL shown in terminal)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🎨 Features

### Implemented

✅ **Home Page** - Grid of activity cards with smooth animations
✅ **Dynamic Routing** - Clean URLs with React Router
✅ **Activity Pages** - GenAI Factory, Talent Readiness, Innovation Plan, etc.
✅ **Sub-Pages** - Copilot Adoption, Success Story, Use Cases Poster
✅ **Poster Gallery** - Interactive image gallery with modal viewer
✅ **Responsive Design** - Works on desktop, tablet, and mobile
✅ **TypeScript** - Full type safety throughout the app
✅ **CSS Modules** - Scoped styling to prevent conflicts
✅ **Placeholder Pages** - "Coming Soon" pages for content in development
✅ **External Links** - SharePoint document links preserved
✅ **Image Lazy Loading** - Optimized performance

### Architecture Highlights

- **Component-Based** - Reusable, maintainable components
- **Data-Driven** - Content stored in JSON for easy updates
- **Type-Safe** - TypeScript interfaces for all data structures
- **Modern React** - Hooks (useState, etc.) and functional components
- **Clean Routing** - Intuitive URL structure

## 🔧 Customization

### Adding New Content

1. **Add a new activity**:
   - Edit `src/data/activities.json`
   - Create a new page component in `src/pages/`
   - Add route in `src/App.tsx`

2. **Update existing content**:
   - Edit the corresponding JSON file in `src/data/`
   - No code changes needed!

3. **Add new images**:
   - Place images in `public/assets/`
   - Reference with `/assets/filename.ext`

### Styling

- **Global styles**: Edit `src/styles/global.css`
- **Component styles**: Edit the `.module.css` file next to each component
- **CSS Variables**: Modify colors, spacing in `src/styles/global.css` `:root` section

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

### Deploy to Vercel (Recommended)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts to deploy

Or connect your GitHub repo to Vercel for automatic deployments.

### Deploy to Netlify

1. Run: `npm run build`
2. Drag the `dist/` folder to https://app.netlify.com/drop

### Deploy to GitHub Pages

1. Install: `npm install gh-pages --save-dev`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run deploy`

## 📝 Migration Notes

This React application is a complete rewrite of the original static HTML site with the following improvements:

- ✅ Component reusability (no code duplication)
- ✅ Type safety with TypeScript
- ✅ Easier content management (JSON data files)
- ✅ Better performance (code splitting, lazy loading)
- ✅ Modern development experience
- ✅ Simplified deployment process

## 🐛 Troubleshooting

**Port already in use?**
- Vite will automatically try the next available port
- Or specify a port: `vite --port 3000`

**Assets not loading?**
- Ensure assets are in `public/assets/` folder
- Check file paths start with `/assets/`

**Build errors?**
- Clear node_modules: `rm -rf node_modules && npm install`
- Clear cache: `rm -rf dist && npm run build`

## 📚 Learn More

- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/guide/)
- [React Router](https://reactrouter.com/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 License

© 2025 FFTO. All rights reserved.
