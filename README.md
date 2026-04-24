# 🌿 SpaSwitzerland - Premium Spa Digital Transformation

[![CI/CD - Deploy to GitHub Pages](https://github.com/sahedalomsumit/spa-burn/actions/workflows/deploy.yml/badge.svg)](https://sahedalomsumit.github.io/spa-burn/)

SpaSwitzerland is a high-end, minimalist landing page designed for spa and wellness businesses across **Switzerland**. Built with a focus on "Soft UI Evolution" and a "Sage & Stone" design system, it aims to convert passive website visitors into active bookings through professional storytelling and strategic UX.

---

## ✨ Key Features

- 🌍 **Multilingual Support**: Fully localized in English, German, and Italian using `i18next`.
- 🎨 **Sage & Stone Design**: A curated, earthy palette with glassmorphism and modern typography for a premium feel.
- 🎭 **Smooth Animations**: Powered by `Framer Motion` for high-performance scroll reveals and micro-interactions.
- 📱 **Mobile-First UX**: Seamless browsing experience across all devices, prioritizing mobile booking.
- 📊 **Lead Engine**: Integrated lead generation form connected to **Google Sheets** via SheetDB API.
- 🚀 **Automated CI/CD**: Automatic builds and deployment to GitHub Pages using GitHub Actions.

---

## 🛠️ Technology Stack

| Category         | Technology                                                 |
| :--------------- | :--------------------------------------------------------- |
| **Framework**    | [React 19](https://react.dev/)                             |
| **Bundler**      | [Vite 8](https://vitejs.dev/)                              |
| **Styling**      | Vanilla CSS (Soft UI System)                               |
| **Animations**   | [Framer Motion](https://www.framer.com/motion/)            |
| **Icons**        | [Lucide React](https://lucide.dev/)                        |
| **Localization** | [i18next](https://www.i18next.com/)                        |
| **Storage**      | [SheetDB](https://sheetdb.io/) (Google Sheets Integration) |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sahedalomsumit/spa-burn.git
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env` file in the root directory:

   ```env
   VITE_SHEETDB_URL=your_sheetdb_api_endpoint
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```

### Building for Production

To generate a production-ready bundle in the `dist` folder:

```bash
npm run build
```

---

## 📂 Project Structure

```text
spa-switzerland/
├── .github/workflows/     # CI/CD Deployment pipeline
├── public/                # Static assets
├── src/
│   ├── assets/            # Images, icons, and blobs
│   ├── components/        # Reusable UI components
│   ├── i18n/              # Translation configuration (EN, DE, IT)
│   ├── App.jsx            # Main application entry
│   ├── AppDe.jsx          # German version
│   ├── index.css          # Design system and global styles
│   └── main.jsx           # React mounting point
├── vite.config.js         # Vite configuration
└── package.json           # Scripts and dependencies
```

---

## 📈 Marketing Strategy

The page follows a strategic conversion funnel:

1. **The Hook**: Targeted messaging for the Swiss wellness market.
2. **The Problem**: Identifying hidden customer loss on existing websites.
3. **The Solution**: Highlighting the "Passive Brochure vs. Active Booking Engine" transformation.
4. **The Offer**: Limited-time 25% discount for local businesses.
5. **The Proof**: Outcomes including instant trust and mobile independence.
6. **The Action**: Free Homepage Audit CTA.

---

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Developed with ❤️ by <a href="https://github.com/sahedalomsumit">Sahed Alom Sumit</a>
</p>
