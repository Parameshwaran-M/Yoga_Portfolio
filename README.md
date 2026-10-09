# Yoganathan A. — Developer Portfolio Website

A modern, responsive, high-performance personal developer portfolio built for **Yoganathan A.**, an Information Technology college student aspiring to become a software developer.

Designed with a sleek midnight navy and electric blue theme, clean typography, smooth transitions, interactive modals, accessible markup, and zero heavy dependencies.

---

## 🚀 Live Preview & Quick Start

Because this project is built entirely with standard **HTML5, CSS3, and Vanilla JavaScript**, no build step or node package manager is required.

### Option 1: Open Directly in Browser
Double-click `index.html` or right-click and select **Open with Browser** (Google Chrome, Microsoft Edge, Firefox, Brave, Safari).

### Option 2: Run with Local HTTP Server (Recommended)
Running through an HTTP server ensures correct SVG rendering, relative link resolution, and clean CORS handling.

**Using Python:**
```bash
# In the project directory (d:\portfilo):
python -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000) in your web browser.

**Using VS Code Live Server:**
If using Visual Studio Code, right-click `index.html` and click **"Open with Live Server"**.

---

## 📁 Project Structure

```text
d:\portfilo/
├── index.html                   # Main semantic HTML5 webpage
├── style.css                    # Design system, CSS variables, dark theme & responsive styles
├── script.js                    # Mobile menu, active scrollspy, modals & form logic
├── assets/
│   ├── certificates/
│   │   ├── scaler-cpp-essentials.svg        # C++ Scaler Topics certificate template
│   │   ├── simplilearn-python.svg           # Python Simplilearn SkillUp certificate template
│   │   └── rotary-student-award-2025.svg    # Rotary Club Best Student Award 2025 template
│   ├── images/
│   │   ├── avatar.svg                       # Modern developer portrait avatar
│   │   ├── favicon.svg                      # Custom vector site favicon
│   │   ├── project-votingpro.svg            # VotingPro UI preview graphic
│   │   ├── project-web-portal.svg           # Web portal UI preview graphic
│   │   ├── project-database.svg             # Relational database schema preview
│   │   └── project-algorithms.svg           # C++/Java algorithms benchmark preview
│   └── resume/
│       └── Yoganathan_A_Resume.pdf          # Placeholder resume PDF
└── README.md                    # Setup, customization & deployment guide
```

---

## ✏️ How to Customize Your Portfolio

All configurable items are clearly commented in `index.html`. Here is a quick guide to make it completely your own:

### 1. Update Contact Information & Social Media Links
In `index.html`, locate the social links in the Hero section (`#hero`) and Contact section (`#contact`):
- **Email:** Search for `yoganathan.dev@example.com` and replace with your active email address.
- **GitHub:** Search for `https://github.com/your-username` and replace with your actual GitHub username.
- **LinkedIn:** Search for `https://linkedin.com/in/your-username` and replace with your actual LinkedIn profile link.

### 2. Replace the Resume PDF
1. Export your official resume as a PDF named `Yoganathan_A_Resume.pdf`.
2. Copy it into the folder `assets/resume/`, replacing the existing placeholder file.
3. The **"Download Resume"** buttons in the navigation bar and hero section will immediately serve your resume.

### 3. Replace Certificate Files with Your Actual Certificates
1. Place your certificate files (PNG, JPG, or PDF) into `assets/certificates/`:
   - e.g., `scaler-cpp.png`
   - e.g., `simplilearn-python.png`
   - e.g., `rotary-award.png`
2. In `index.html` (under section `#certifications`), update the `src` attribute of each `<img>` and the `data-cert-src` attribute of the preview buttons to your filenames:
```html
<img src="assets/certificates/scaler-cpp.png" alt="C++ Certificate" class="cert-thumb-img">
<button class="btn-cert-preview" data-cert-src="assets/certificates/scaler-cpp.png" ...>
```

### 4. Update Education Details
In `index.html` (under section `#education`), customize:
- College / University Name: Replace `[Your College / University Name]` with your actual institution.
- Degree: Adjust `Bachelor of Technology / Science in Information Technology`.
- Study Period: Adjust `[Study Period: e.g., 2023 – Present]` with your academic years (e.g., `2023 – 2027`).

### 5. Update or Add Projects
In `index.html` (under section `#projects`):
- **VotingPro Project:** When your repository is on GitHub, update the repository link `href="https://github.com/your-username/votingpro"`.
- **Other Projects:** Replace the placeholder titles, descriptions, and tags with other projects you build in Python, Java, C++, PHP, or Web development.

---

## 📬 Connecting the Contact Form to Real Emails

The portfolio includes client-side validation and simulated submission with an instant **"Open via Mailto"** fallback. To receive messages in your email inbox without running your own backend:

### Option A: Formspree (Free & Takes 2 Minutes)
1. Sign up for a free account at [Formspree.io](https://formspree.io).
2. Create a new form and copy your endpoint URL (e.g., `https://formspree.io/f/xyzabkld`).
3. In `index.html`, set the form `action` attribute:
```html
<form id="contact-form" action="https://formspree.io/f/xyzabkld" method="POST">
```

### Option B: Netlify Forms (If deploying to Netlify)
Simply add `data-netlify="true"` to `<form id="contact-form">`. Netlify handles submissions automatically.

---

## 🌐 Free Deployment Instructions

### Method 1: Deploy on GitHub Pages (Recommended)
1. Create a new public repository on GitHub (e.g., `portfolio` or `yoganathan-portfolio`).
2. Push your project files to the `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Yoganathan A developer portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. In your GitHub repository:
   - Go to **Settings** > **Pages** (under Code and automation).
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select branch `main` and folder `/ (root)`.
   - Click **Save**.
4. Your portfolio will be live at `https://<your-username>.github.io/<repo-name>/` in 1–2 minutes!

### Method 2: Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **"Add New Project"** and import your portfolio repository.
3. Click **"Deploy"** (no build settings required).
4. You get an instant custom `.vercel.app` URL with automatic SSL.

---

## 🛡️ Best Practices & Quality Checklist
- **Semantic HTML5:** `<header>`, `<main>`, `<section>`, `<article>`, `<footer>` elements used throughout.
- **Accessibility:** Screen-reader friendly labels (`aria-label`, `aria-hidden`), keyboard-accessible modals with `Escape` key close.
- **Responsive Layout:** Tested on mobile (360px+), tablet (768px+), and desktop screens (1080p, 2K).
- **Zero Heavy Dependencies:** High-speed performance, clean vanilla CSS & JS.
