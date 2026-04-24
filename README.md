# 🌿 SpaGrow - Premium Spa Website Redesign Worldwide

> A premium, high-conversion minimalist landing page for spa and wellness businesses worldwide.

[![CI/CD - Deploy to GitHub Pages](https://github.com/sahedalomsumit/spa-burn/actions/workflows/deploy.yml/badge.svg)](https://sahedalomsumit.github.io/spa-burn/)

SpaGrow is a high-end, minimalist landing page for **spa and wellness businesses worldwide**. Built with a "Soft UI Evolution" and "Sage & Stone" design system, it converts passive visitors into active bookings through professional storytelling and strategic UX.

---

## ✨ Key Features

- ✨ **Soft UI Evolution**: A refined, minimalist aesthetic designed for luxury spa brands.
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
spa-grow/
├── .github/workflows/     # CI/CD Deployment pipeline
├── public/                # Static assets
├── src/
│   ├── assets/            # Images, icons, and blobs
│   ├── components/        # Reusable UI components
│   ├── App.jsx            # Main application entry
│   ├── App.css            # Styles for the main application
│   ├── index.css          # Design system and global styles
│   └── main.jsx           # React mounting point
├── vite.config.js         # Vite configuration
└── package.json           # Scripts and dependencies
```

---

## 📈 Marketing Strategy

The page follows a strategic conversion funnel:

1. **The Hook**: Targeted messaging for the global wellness market.
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
  <a
  href="https://sahedalomsumit.com"
  target="_blank"
  rel="noopener noreferrer"
  style="text-decoration: none"
>
  <div
    style="
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 0.875rem;
      color: #aaaaaa;
      font-weight: 500;
      cursor: pointer;
      transition: background-color 0.25s ease, color 0.25s ease;
    "
    onmouseover="this.style.color='#ddd'"
    onmouseout="this.style.color='#aaa'"
  >
    <span>Built with</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="#ef4444"
      stroke="#ef4444"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      style="
        transform-origin: center;
        flex-shrink: 0;
        animation: pulseHeart 1.2s infinite ease-in-out;
      "
      aria-hidden="true"
    >
      <path
        d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"
      ></path>
    </svg>

    <span>by</span>
    <span style="color: #ff8719 ; font-weight: 700">Sahed</span>

  </div>
</a>

<style>
@keyframes pulseHeart {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}
</style>

</p>
