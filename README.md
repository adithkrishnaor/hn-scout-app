# 🔍 HN Scout

A modern, quality-focused Hacker News explorer built with Next.js 15+, featuring intelligent post ranking and a clean, responsive interface.

**[Live Demo](https://hn-scout-app.vercel.app)** • **[GitHub Repository](https://github.com/adithkrishnaor/hn-scout-app)**

---

## 📸 Screenshots


<img width="1889" height="945" alt="image" src="https://github.com/user-attachments/assets/f53812a7-75f2-4507-8601-ab89e4c4a47c" />

<img width="1877" height="951" alt="image" src="https://github.com/user-attachments/assets/4721830c-3024-4310-b970-b8598d5aea9d" />

---

## ✨ Features

✅ **Server-Side Rendering** - Fast, SEO-friendly page loads with Next.js App Router  
✅ **Pagination** - 20 posts per page with Previous/Next navigation  
✅ **Quality Scoring** - Custom algorithm  
✅ **Per-Page Ranking** - Posts sorted by quality score on each page  
✅ **Detailed Post View** - Full post info with latest 5 comments  
✅ **Responsive Design** - Mobile-first, works seamlessly on all devices  

---

## 📦 Packages Used

| Package | Purpose | Why This Choice? |
|---------|---------|------------------|
| **tailwind** | Styling | Utility-first, rapid development, small bundle |
| **lucide-react** | Icons | Beautiful, consistent, optimized SVGs |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm/yarn/pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/hn-scout.git
cd hn-scout

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create optimized build
npm run build

# Start production server
npm start
```

---

## 🌐 Deployment

This project is optimized for Vercel deployment:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

## 📋 Project Structure

```
hn-scout/
├── app/
│   ├── [page]/
│   │   └── page.tsx          # Main post list
│   ├── item/[id]/
│   │   └── page.tsx          # Post detail page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Redirect to page
│   └── globals.css           # Global styles
└── lib/
    ├── api.ts                # API functions
    └── types.ts              # TypeScript definitions
```

---

## 🌟 Beyond Requirements

Extra features and polish added to the project:

1. **TypeScript Strict Mode** - Maximum type safety throughout
2. **Next.js 15 Features** - Async params, native loading.tsx, fetch caching
3. **Smooth Transitions** - Hover effects and shadow animations

---

## 🤖 AI Tools Used

### Claude AI 
Used strategically in development:

- Discussed trade-offs between different ranking approaches
- Structured README sections for clarity

---

## 🙏 Acknowledgments

- **Hacker News** - For the Algolia API
- **Vercel** - For seamless Next.js hosting
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the beautiful icon set

---

## 👨‍💻 Author

**Adith**  
Recent MCA Graduate | Full-Stack Developer

- 💼 LinkedIn: [linkedin.com/in/adith-krishna-o-r](https://linkedin.com/in/adith-krishna-o-r)
- 🐙 GitHub: [@adithkrishnaor](https://github.com/adithkrishnaor)
- 📧 Email: adthkrshna@example.com

**Tech Stack**: Next.js • React Native • Firebase • MERN
**Currently**: Open to full-time opportunities and freelance projects

