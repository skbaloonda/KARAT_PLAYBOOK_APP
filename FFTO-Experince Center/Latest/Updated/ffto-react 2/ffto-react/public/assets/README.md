# Logo Directory

## How to Add Your Logo

Place your logo file in this directory with the name `logo.png`

**Path:** `c:\Users\pprakas8\Desktop\FFTO-Site\ffto-react\public\assets\logo.png`

### Recommended Logo Specifications:
- **Format:** PNG (with transparent background recommended) or SVG
- **Dimensions:** Height: 50-100px (width will auto-scale)
- **File Size:** Keep under 200KB for optimal performance
- **Background:** Transparent or matching the navbar gradient

### Supported Formats:
- logo.png (recommended)
- logo.svg (for scalable vector graphics)
- logo.jpg (if transparency is not needed)

### Current Setup:
The logo will appear on the **right side** of the navigation bar and will:
- Scale proportionally (max height: 50px)
- Have a subtle hover effect (1.05x scale)
- Work responsively on mobile devices

---

**Note:** If your logo file has a different name or format, update the image source in:
`src/components/layout/Navbar.tsx` (line 73)

Change from: `src="/assets/logo.png"`
To: `src="/assets/your-logo-name.extension"`
