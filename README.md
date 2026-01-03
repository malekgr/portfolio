# Malek Garrach - Portfolio Website

A modern, responsive portfolio website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- 🌙 **Dark Blue Theme** - Professional and modern design
- 🎬 **Smooth Animations** - Powered by Framer Motion
- 📱 **Fully Responsive** - Looks great on all devices
- ⚡ **Fast Performance** - Optimized with Next.js
- 🚀 **GCP Ready** - Configured for Google Cloud Run deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Google Cloud Run

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles and theme
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main page component
├── components/
│   ├── About.tsx        # About section
│   ├── Contact.tsx      # Contact form section
│   ├── Experience.tsx   # Work experience timeline
│   ├── Footer.tsx       # Footer component
│   ├── Hero.tsx         # Hero section with profile
│   ├── Navbar.tsx       # Navigation bar
│   ├── Projects.tsx     # Projects showcase
│   └── Skills.tsx       # Technical skills
└── data/
    └── resume.ts        # Your resume data (UPDATE THIS!)
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. **Update your resume data**:
   - Edit `src/data/resume.ts` with your personal information
   - Replace placeholder text with your actual experience, skills, and projects

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🌐 Deployment to Google Cloud Platform

### Option 1: Using Cloud Build (Recommended)

1. Install and configure the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install)

2. Authenticate with GCP:
```bash
gcloud auth login
gcloud config set project YOUR_PROJECT_ID
```

3. Enable required APIs:
```bash
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable containerregistry.googleapis.com
```

4. Deploy using Cloud Build:
```bash
gcloud builds submit --config cloudbuild.yaml
```

### Option 2: Manual Deployment

1. Build and push the Docker image:
```bash
# Build the image
docker build -t gcr.io/YOUR_PROJECT_ID/portfolio .

# Push to Container Registry
docker push gcr.io/YOUR_PROJECT_ID/portfolio
```

2. Deploy to Cloud Run:
```bash
gcloud run deploy portfolio \
  --image gcr.io/YOUR_PROJECT_ID/portfolio \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

### Option 3: Firebase Hosting (Static Export)

1. Add to `next.config.ts`:
```typescript
output: 'export',
```

2. Build and deploy:
```bash
npm run build
firebase init hosting
firebase deploy
```

## 📝 Customization

### Update Resume Data

Edit `src/data/resume.ts` to add your:
- Personal information (name, title, email, etc.)
- Work experience
- Education
- Skills
- Projects
- Certifications

### Update Profile Picture

Replace `public/malekPic.jpg` with your own photo.

### Update Colors

Modify the CSS variables in `src/app/globals.css`:
```css
:root {
  --background: #0a0e1a;
  --primary: #3b82f6;
  /* ... other colors */
}
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

---

Built with ❤️ by Malek Garrach
