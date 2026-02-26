# 🏏 Eura Gaming — Cricket Quiz Platform

India's premier cricket quiz platform. Test your knowledge, compete globally, and celebrate the beautiful game.

## Features

- **CAPTCHA Security** — Drag-to-verify slider on first page load
- **Welcome Modal** — Smooth onboarding overlay after verification
- **30-Question Cricket Quiz** — Multiple choice with timer, progress, and explanations
- **Global Leaderboard** — Real-time rankings with sort and search
- **User Dashboard** — Profile, stats, quiz history, and settings
- **Authentication** — Register, Login, Forgot Password (localStorage-based)
- **Responsive Design** — Works on mobile and desktop
- **About / Contact / FAQ Pages** — Full informational pages

## Tech Stack

- **Framework**: Next.js 14.2.28 (App Router)
- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS 3.4
- **Auth**: Client-side localStorage (no external database required)
- **Deployment**: Vercel

## Getting Started

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Demo Accounts

| Email | Password |
|-------|----------|
| sachin@demo.com | demo123 |
| master@demo.com | demo123 |
| virat@demo.com | demo123 |

## Deployment on Vercel

1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Vercel will auto-detect Next.js and deploy

No environment variables are required — the app runs entirely client-side.

## Project Structure

```
eura-gaming/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage (CAPTCHA + Welcome + Home)
│   ├── globals.css         # Global styles
│   ├── not-found.tsx       # 404 page
│   ├── login/page.tsx
│   ├── register/page.tsx
│   ├── forgot-password/page.tsx
│   ├── dashboard/page.tsx
│   ├── quiz/page.tsx
│   ├── leaderboard/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   └── faq/page.tsx
├── components/
│   ├── Navigation.tsx
│   └── Footer.tsx
├── lib/
│   ├── auth.ts             # Auth utilities (localStorage)
│   └── questions.ts        # 30 cricket questions
├── vercel.json
└── package.json
```

## License

© 2025 Eura Gaming. All rights reserved.
