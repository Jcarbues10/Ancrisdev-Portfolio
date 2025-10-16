# 💼 Full-Stack Developer Portfolio

A modern, cyberpunk-themed portfolio website with dark purple aesthetics, stunning loading animations, and eye-catching scroll effects. Built with pure HTML, CSS, and JavaScript.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## 🚀 Live Demo

**[View Live Portfolio](https://yourusername.github.io/Portfolio/)** ← Replace with your GitHub Pages URL

## ✨ Key Features

### 🎬 Cyberpunk Loading Screen (8 seconds)
- Glowing "AncrisDev" logo with pulse effects
- 3 spinning purple rings with animations
- Glitch text effect "LOADING SYSTEM"
- Animated progress bar with gradient
- Hexagonal explosion reveal transition

### 🎯 Eye-Catching Scroll Animations
- Sections zoom in with bounce effects
- Headers flip with 3D rotation
- Cards slide and rotate on entrance
- Skills spin and pop (staggered)
- Projects flip like cards
- Stats scale up dramatically

## 🎨 Design Features

### Visual Aesthetics
- **Ultra-Premium Dark Theme** with luxury gold accents and sophisticated shadows
- **Enhanced Glassmorphism Effects** with multi-layer backdrop blur and shine animations
- **Gradient Luxury Accents** in gold, blue, and neon with glow effects
- **Professional Typography** using Poppins and Inter fonts with gradient text
- **Animated Gradient Orbs** floating in the background (optimized for performance)
- **Grid Overlay** for depth and dimension
- **Real Project Images** with zoom effects and professional overlay interactions
- **Premium Border Glow** effects on hover with multiple shadow layers
- **Expensive Visual Hierarchy** with gradient titles and luxury spacing

### Interactive Elements
- **Smooth Scrolling** with optimized animations
- **Fade-in Animations** for sections and cards
- **Premium Hover Effects** on buttons, cards, and skills with glow
- **Image Zoom Effects** on project cards
- **Magnetic Button Interactions** with glow effects
- **Ripple Effects** on button clicks
- **Toast Notifications** for user feedback
- **Shine Sweep Effects** on glass cards
- **Scale & Transform Animations** optimized for performance

## 🧩 Website Sections

### 1. **Home (Hero Section)**
- Professional profile icon with animated glow
- Bold headline: "Building Modern Digital Experiences"
- Subheadline highlighting tech stack (PHP, JavaScript, MySQL)
- CTA buttons: "Hire Me" and "View Projects"
- Animated scroll indicator
- Floating gradient orbs in the background

### 2. **About Me**
- Professional summary and biography
- Downloadable CV button
- **Tech Stack Grid** with 12 technologies:
  - HTML5, CSS3, JavaScript
  - PHP, MySQL, Git
  - Bootstrap, Tailwind CSS
  - REST APIs, jQuery
  - Responsive Design, GitHub
- **Statistics Cards** with animated counters:
  - 50+ Projects Completed
  - 30+ Happy Clients
  - 3+ Years Experience

### 3. **Projects / Portfolio Gallery**
Featured projects displayed in a responsive grid with real images:

1. **Food Advertisement** - High-end burger advertisement
2. **Car Advertisement** - Philippine automotive brands showcase
3. **iPhone Advertisement** - iPhone 16 Pro Max slider
4. **Rolex Landing Page** - Ultra-premium watch website
5. **Luxury Fashion Website** - Handbags, jewelry & accessories
6. **Skincare Advertisement** - MAC cosmetics style product
7. **Headphone Advertisement** - Premium audio product showcase
8. **Brand Website** - Professional brand landing page
9. **Lab Project 5** - Educational web development project

Each project card includes:
- Icon placeholder (ready for screenshots)
- Technology tags
- Description
- Hover overlay with "View Live" and "View Code" links

### 4. **Contact Section**
- **Contact Form** with animated inputs:
  - Name, Email, Subject, Message fields
  - Glowing submit button
  - Form validation
- **Contact Information**:
  - Email address
  - Phone number
  - Location
- **Social Media Links**:
  - GitHub, LinkedIn, Facebook, Twitter

### 5. **Footer**
- Minimalist design with logo
- "Built with ❤️" message
- Dynamic copyright year
- Clean typography

## ⚙️ Technology Stack

### Frontend
- **HTML5** - Semantic structure
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript (Vanilla)** - Interactive functionality
- **Google Fonts** - Poppins and Inter
- **Font Awesome 6** - Icon library

### Features Implemented
- Smooth scroll navigation
- Intersection Observer API for animations
- Custom cursor follower
- Animated counters
- Toast notifications
- Form handling
- Responsive hamburger menu
- Parallax effects
- 3D card transformations

### Performance Optimizations
- **Removed laggy features**: Custom cursor, 3D parallax, complex animations
- **Simplified gradient orbs**: Reduced blur and slower animation
- **Optimized hover effects**: Using CSS transforms only
- **Debounced scroll events** for better performance
- **Lazy loading support** for images
- **Efficient animations** with RequestAnimationFrame
- **Minimal DOM manipulation**
- **CSS transforms** for hardware acceleration
- **Result**: Smooth, fast, and responsive portfolio!

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (XAMPP, WAMP, or similar)

### Installation

1. **Clone or Download** the project to your local machine
   ```bash
   cd c:\xampp\htdocs\Portfolio
   ```

2. **Add Project Images** (IMPORTANT!)
   - Create an `images` folder inside Portfolio directory
   - Add screenshots of your projects as:
     * food.jpg, car.jpg, phone.jpg, rolex.jpg
     * luxury.jpg, skincare.jpg, headphone.jpg
     * brand.jpg, lab5.jpg
   - See `IMAGE_GUIDE.txt` for detailed instructions
   - Recommended size: 1600x900px, JPG format

3. **Start your local server** (e.g., XAMPP Apache)

4. **Open in browser**
   ```
   http://localhost/Portfolio/
   ```

### Customization

#### Update Personal Information
Edit `index.html` to change:
- Your name and title
- Profile description
- Project details
- Contact information
- Social media links

#### Customize Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --accent-gold: #d4af37;    /* Primary accent color */
    --accent-blue: #3b82f6;    /* Secondary accent color */
    --accent-neon: #00d4ff;    /* Tertiary accent color */
}
```

#### Add Your Projects
Replace the placeholder projects in `index.html` with your own:
- Update project titles and descriptions
- Add real project images
- Link to live demos and GitHub repos

#### Add Your CV
Upload your CV file and update the download link in `script.js`:
```javascript
window.location.href = 'path/to/your-cv.pdf';
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

Features adapt accordingly:
- Hamburger menu on mobile
- Stacked layouts on smaller screens
- Touch-friendly interactions
- Optimized font sizes
- Hidden cursor follower on mobile

## ✨ Special Features

### Easter Egg
Try the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A

### Keyboard Navigation
Full keyboard accessibility with Tab navigation and focus indicators

### Console Messages
Open browser DevTools to see developer messages

### Animated Statistics
Counters animate when scrolled into view

### Form Validation
Client-side validation with helpful error messages

## 🎯 Use Cases

Perfect for:
- **Full-Stack Developers** showcasing their work
- **Freelancers** building their personal brand
- **Students** creating a professional online presence
- **Job Seekers** impressing potential employers
- **Agencies** demonstrating capabilities

## 📄 File Structure

```
Portfolio/
│
├── images/             # Project screenshots folder
│   ├── food.jpg
│   ├── car.jpg
│   ├── phone.jpg
│   ├── rolex.jpg
│   ├── luxury.jpg
│   ├── skincare.jpg
│   ├── headphone.jpg
│   ├── brand.jpg
│   └── lab5.jpg
├── index.html          # Main HTML structure
├── styles.css          # Premium CSS with luxury styling
├── script.js           # Optimized JavaScript functionality
├── README.md           # Documentation
└── IMAGE_GUIDE.txt     # Image setup instructions
```

## 🌐 Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. **Go to GitHub** (https://github.com)
2. **Click** the `+` icon → **New repository**
3. **Repository name**: `Portfolio` (or your preferred name)
4. **Description**: "My professional portfolio website"
5. **Set to Public**
6. **Don't** initialize with README (you already have one)
7. **Click** "Create repository"

### Step 2: Push Your Code to GitHub

Open **Git Bash** or **Command Prompt** in your portfolio folder:

```bash
# Navigate to your portfolio folder
cd c:\xampp\htdocs\Portfolio

# Initialize Git repository
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Cyberpunk portfolio with animations"

# Add your GitHub repository as remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/Portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click** "Settings" tab
3. **Scroll down** to "Pages" section (left sidebar)
4. Under **"Source"**:
   - Select branch: `main`
   - Select folder: `/ (root)`
5. **Click** "Save"
6. **Wait 2-3 minutes** for deployment
7. **Your site will be live at**: `https://YOUR_USERNAME.github.io/Portfolio/`

### Step 4: Update README with Live URL

After deployment, update line 12 in README.md:
```markdown
**[View Live Portfolio](https://YOUR_USERNAME.github.io/Portfolio/)**
```

Push the update:
```bash
git add README.md
git commit -m "Update live demo URL"
git push
```

### 🎯 Quick Deploy Commands (After Initial Setup)

For future updates:
```bash
# Make your changes, then:
git add .
git commit -m "Description of changes"
git push
```

Your site updates automatically in 1-2 minutes! ⚡

### 📋 Pre-Deployment Checklist

✅ Update personal information in `index.html`  
✅ Add your project images to `images/` folder  
✅ Test loading animation (8 seconds)  
✅ Test all scroll animations  
✅ Update social media links  
✅ Test on mobile devices  
✅ Update contact information  
✅ Add your CV file (optional)  

### 🔗 Custom Domain (Optional)

To use a custom domain:
1. **Buy a domain** (e.g., yourname.com)
2. In your repository → **Settings** → **Pages**
3. Under **"Custom domain"**, enter your domain
4. Add DNS records at your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```
5. GitHub will generate SSL certificate automatically 🔒

## 🔧 Future Enhancements

Potential additions:
- [ ] Blog section for articles
- [ ] Dark/Light theme toggle
- [ ] Backend integration for contact form
- [ ] Project filtering by technology
- [ ] Testimonials carousel
- [ ] Skills proficiency bars
- [ ] Animated timeline for experience
- [ ] Multi-language support
- [ ] Real-time form validation with backend

## 🌐 Browser Compatibility

Tested and working on:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Opera 76+

## 📝 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you create something awesome, share it!

## 📧 Contact

For questions or suggestions, reach out via:
- **Email**: developer@example.com
- **GitHub**: [Your GitHub Profile]
- **LinkedIn**: [Your LinkedIn Profile]

---

**Built with passion by a Full-Stack Developer** 💻✨

### Technologies & Skills Highlighted:
🔹 PHP - Backend Development  
🔹 JavaScript - Interactive Frontend  
🔹 MySQL - Database Management  
🔹 HTML5 & CSS3 - Modern Web Standards  
🔹 Bootstrap & Tailwind - CSS Frameworks  
🔹 Git & GitHub - Version Control  
🔹 REST APIs - Integration  
🔹 Responsive Design - Mobile-First  

---

⭐ **Star this repo if you found it helpful!**
