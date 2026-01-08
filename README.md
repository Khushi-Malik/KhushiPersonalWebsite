# Khushi Malik - Personal Portfolio Website

A modern, responsive portfolio website showcasing my projects, experiences, achievements, and writing.

🔗 **Live Site**: [khushi-malik.vercel.app](https://khushi-malik.vercel.app)

## 📋 Features

- **Home**: Interactive 3D experience with Three.js with 3d elements downloaded from SketchFab and some animations from Mixamo.
- **About**: Skills showcase, work experience, research, volunteering, and publications
- **Projects**: Personal and academic projects with filtering
- **Achievements**: Milestone highlights with rainbow accents
- **Blog**: Easy to use markdown blogs for Personal writing, educational content, and research paper reviews
- **Contact**: Get in touch form again with Three.js 3d elements.

## 🛠️ Tech Stack

- **Frontend**: React.js, React Router
- **Styling**: Tailwind CSS
- **3D Graphics**: Three.js, Sketchfab, Mixamo
- **Markdown**: react-markdown (for blog posts)
- **Deployment**: Vercel

## 📁 Project Structure
```
├── public/
│   └── blogs/              # Markdown blog posts
├── src/
│   ├── assets/             # Images and icons
│   ├── components/         # Reusable components
│   ├── constants/          # Data constants
│   ├── pages/              # Main pages
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Achievement.jsx
│   │   ├── Blog.jsx
│   │   ├── BlogPost.jsx
│   │   └── Contact.jsx
│   ├── blogs/              # Blog metadata
│   └── App.jsx             # Main app component
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Khushi-Malik/KhushiPersonalWebsite.git
cd KhushiPersonalWebsite
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production
```bash
npm run build
```

## 📝 Adding New Blog Posts

1. Create a new markdown file in `public/blogs/` (e.g., `my-new-post.md`)
2. Add the blog metadata to `src/blogs/index.js`:
```javascript
{
  id: 2,
  title: "Your Blog Title",
  excerpt: "Brief description...",
  date: "2025-01-08",
  readTime: "5 min read",
  tags: ["Tag1", "Tag2"],
  category: "personal", // or "educational" or "research"
  contentFile: "my-new-post.md"
}
```

3. Write your content in markdown with proper formatting

## 🎨 Design Philosophy

- **Minimal & Clean**: Simplistic design that feels personal
- **Simple Navigation**: Easy to find content
- **Responsive**: Works on all devices (Mobile device compatibility WIP)
- **Accessible**: Semantic HTML and keyboard navigation

## 📦 Dependencies

- react
- react-dom
- react-router-dom
- react-markdown
- three
- @react-three/fiber
- @react-three/drei
- tailwindcss
- @tailwindcss/typography

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome! Feel free to open an issue.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## Credits

Inspired by [JavaScript Mastery](https://www.youtube.com/watch?v=FkowOdMjvYo&list=PL6QREj8te1P7rEwj_IzsoLzQ-FBbZ6lqP)
