# Balaji Velu - XR Developer Portfolio

A modern, immersive portfolio website showcasing XR development and Mixed Reality research projects.

![Portfolio Preview](./public/hero_orb.jpg)

## 🚀 Live Demo

[View Live Portfolio](https://balajivelu.github.io)

## ✨ Features

- **Immersive Hero Section** with animated orb and cycling text
- **Scroll-triggered Animations** using GSAP ScrollTrigger
- **Project Showcase** with 8 featured projects
- **Experiments Section** for side projects and explorations
- **Responsive Design** optimized for all devices
- **Dark Theme** with neon green accent colors

## 🛠️ Tech Stack

- **Framework:** React + TypeScript + Vite
- **Styling:** Tailwind CSS
- **Animations:** GSAP + ScrollTrigger
- **UI Components:** shadcn/ui
- **Icons:** Lucide React

## 📁 Project Structure

```
├── public/              # Static assets (images)
├── src/
│   ├── components/      # Reusable UI components
│   ├── lib/            # Utility functions
│   ├── App.tsx         # Main application component
│   └── index.css       # Global styles
├── index.html          # Entry HTML file
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
├── vite.config.ts      # Vite configuration
└── tsconfig.json       # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/BalajiVelu/balajivelu.github.io.git
cd balajivelu.github.io
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📝 Customization

### Adding/Editing Projects

Projects are defined in `src/App.tsx` in the `projects` array:

```typescript
const projects = [
  {
    id: '01',
    title: 'Project Name',
    subtitle: 'Short description',
    cardImage: '/image_for_card.jpg',
    detailImage: '/image_for_detail.jpg',
    company: 'Company Name',
    fullTitle: 'Full Project Title',
    description: 'Project description',
    demoLink: 'https://youtube.com/...', // Optional
    details: 'Detailed project description'
  },
  // ... more projects
];
```

### Adding/Editing Experiments

Experiments are defined in the `experiments` array in the same file.

### Changing Colors

The color scheme uses CSS variables in `src/index.css`:

```css
:root {
  --background: 240 33% 3%;      /* Deep space black */
  --primary: 108 100% 54%;        /* Neon green */
  --foreground: 230 50% 97%;      /* Near-white text */
}
```

### Updating Personal Info

Update your information in the About section within `src/App.tsx`.

## 📦 Deployment to GitHub Pages

1. Push code to GitHub repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose "gh-pages" branch (created automatically by GitHub Actions)

Or manually deploy:

```bash
npm run build
# Copy dist folder contents to gh-pages branch
git checkout gh-pages
cp -r dist/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

## 🔗 Links

- **LinkedIn:** [Balaji Velu](https://www.linkedin.com/in/balaji-velu/)
- **GitHub:** [BalajiVelu](https://github.com/BalajiVelu)
- **Email:** balajivelu3097@gmail.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Balaji Velu
