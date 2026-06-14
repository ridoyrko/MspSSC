# MSP Influencer Sponsor Success Center (SSC)

[![React](https://img.shields.io/badge/React-18.3-blue.svg?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF.svg?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6.svg?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC.svg?logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern, high-performance web application designed for the **MSP Influencer Sponsor Success Center**. This platform serves as a hub for managing and reviewing sponsorship engagement metrics, campaign assets, bimonthly performance reports, and educational material.

---

## 🚀 Key Features

- **📊 Bi-Monthly Performance Reporting**: Real-time access to the latest program reports tracking visibility, engagement, and declared interest over time.
- **📂 Campaign Assets Hub**: High-converting creative assets including ad banners, copy templates, and brand assets ready for sponsor distribution.
- **🎓 Education Center**: Structured resources to help sponsors maximize their reach and understand modern audience development.
- **📖 Playbooks & Case Studies**: Actionable playbooks covering campaign optimization, audience matching, and message crafting.
- **🎙️ Podcast Network Integration**: Overview and links to recent podcasts and media appearances related to MSP systems.
- **✨ Responsive & Dynamic Design**: Tailored HSL color system (Navy & Brand Green), modern typography (Inter), glassmorphism effects, smooth-scrolling navigation, and micro-interactions.

---

## 🛠️ Tech Stack

- **Frontend Framework**: [React 18](https://react.dev/) (TypeScript)
- **Build Tool**: [Vite 5](https://vite.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Quality Assurance**: [ESLint](https://eslint.org/) & [TypeScript compiler (tsc)](https://www.typescriptlang.org/)

---

## 📂 Project Structure

```text
msp-ssc/
├── .bolt/                  # Bolt development configuration
├── src/
│   ├── assets/             # Brand logos and high-quality illustrations/images
│   ├── components/         # Modular, reusable React components
│   │   ├── BiMonthlyReports.tsx
│   │   ├── CampaignAssets.tsx
│   │   ├── EducationCenter.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── Footer.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LifetimeMomentum.tsx
│   │   ├── Navigation.tsx
│   │   ├── Playbooks.tsx
│   │   ├── PodcastNetwork.tsx
│   │   └── YourPartnership.tsx
│   ├── App.tsx             # Main App layout & routing structure
│   ├── index.css           # Global styles and Tailwind custom utilities
│   ├── main.tsx            # React entrypoint
│   └── vite-env.d.ts       # Global TypeScript type declarations for Vite
├── index.html              # HTML shell
├── package.json            # Scripts and dependency declarations
├── tailwind.config.js      # Custom styles and theme extensions
├── tsconfig.json           # TS base configurations
└── vite.config.ts          # Vite configuration options
```

---

## ⚡ Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (version 18.x or higher is recommended) along with `npm` (packaged automatically with Node.js).

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ridoyrko/MspSSC.git
   cd msp-ssc
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

### Development Scripts

During development, use the following commands in the project directory:

- **Run Dev Server**: Launches the application locally at `http://localhost:5173`.
  ```bash
  npm run dev
  ```

- **Build for Production**: Compiles the source files and outputs optimized static files in the `dist/` directory.
  ```bash
  npm run build
  ```

- **Type Check**: Audits the TypeScript codebase for any compilation errors without writing build outputs.
  ```bash
  npm run typecheck
  ```

- **Lint Codebase**: Evaluates code quality and style standards based on ESLint rules.
  ```bash
  npm run lint
  ```

- **Preview Production Build**: Runs the compiled bundle locally for final validation.
  ```bash
  npm run preview
  ```

---

## 🎨 Theme & Customization

The design utilizes a tailored CSS color palette integrated with Tailwind CSS in `tailwind.config.js`:
- **Navy Palette**: Sleek and premium dark tones (`#0a192f` variants) for visual structure and typography.
- **Brand Green**: Highlights and accent colors (`#10b981`) for call-to-actions (CTAs) and active badge highlights.
- **Typography**: Inter Sans-Serif font face for maximum readability across all devices.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
