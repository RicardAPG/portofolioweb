# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a professional design with dark/light mode toggle, smooth animations, and optimized performance.

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Dark/Light Mode** - Custom theme toggle with persistent storage
- **Modern Tech Stack** - React 18, TypeScript, Tailwind CSS v4
- **Performance Optimized** - Fast loading with code splitting
- **SEO Friendly** - Proper meta tags and semantic HTML
- **Accessibility** - WCAG compliant with keyboard navigation

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS v4, Custom CSS Variables
- **Build Tool**: Vite
- **Deployment**: Vercel
- **UI Components**: Custom shadcn/ui components
- **Icons**: Lucide React
- **Animations**: Framer Motion

## 📁 Project Structure

```
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── figma/          # Figma-related components
│   └── *.tsx           # Page sections
├── styles/             # Global styles
├── public/             # Static assets
└── App.tsx            # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deployment to Vercel

### Method 1: Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts and your site will be deployed!

### Method 2: GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect the settings and deploy

### Method 3: Manual Deploy

1. Build the project:
```bash
npm run build
```

2. Drag and drop the `dist` folder to [vercel.com/new](https://vercel.com/new)

## 🔧 Configuration

### Environment Variables

If you need environment variables, create a `.env.local` file:

```env
VITE_SITE_URL=https://your-domain.vercel.app
```

### Custom Domain

1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings > Domains
4. Add your custom domain

## 📱 Customization

### Updating Content

1. **Personal Information**: Edit the content in each component file
2. **Projects**: Update the projects array in `components/Projects.tsx`
3. **Skills**: Modify the skills arrays in `components/Skills.tsx`
4. **Experience**: Update the experience data in `components/Experience.tsx`

### Styling

- **Colors**: Modify CSS variables in `styles/globals.css`
- **Typography**: Update the typography scale in the globals.css
- **Components**: Customize component styles in their respective files

### Adding New Sections

1. Create a new component in the `components/` directory
2. Import and add it to `App.tsx`
3. Add navigation link in `components/Navigation.tsx`

## 🎨 Design System

The project uses a custom design system with:

- **Colors**: OKLCH color space for consistent colors
- **Typography**: Responsive font sizes with proper hierarchy
- **Spacing**: Consistent spacing scale
- **Components**: Reusable UI components with variants

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading Speed**: Fast initial load with lazy loading
- **SEO**: Proper meta tags and semantic HTML

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Email**: 
- **LinkedIn**: 
- **GitHub**: 

---
