<div align="center">

<img src="src/assets/logo.png" alt="AppHub Logo" width="80" />

# AppHub

### A modern app store platform — explore, install & manage your favourite apps

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-4-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=flat-square&logo=reactrouter)](https://reactrouter.com)

</div>

---

## 📖 About

**AppHub** is a fully responsive app store platform where users can browse trending applications, read detailed app information, and manage their personal installations. Built with React 19 and Vite, it delivers a fast, smooth experience with live search, persistent installs via localStorage, and dynamic routing — all styled with Tailwind CSS v4.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 **Live Search** | Case-insensitive real-time filtering with debounce |
| 📱 **Responsive Design** | Fully optimised for mobile, tablet, and desktop |
| 📊 **App Details** | Ratings chart, download stats, and full description |
| 📦 **Install / Uninstall** | One-click install with persistent localStorage tracking |
| 🗂️ **My Installations** | Dedicated page to manage all installed apps |
| 🔃 **Sort by Downloads** | High → Low and Low → High sorting on installations |
| ⏳ **Loading Animation** | Smooth spinner during page navigation and search |
| 🚫 **Error Pages** | Custom 404 and App Not Found pages |
| 🔔 **Toast Notifications** | Success and error feedback on install / uninstall |

---

## 🛠️ Tech Stack

- **[React 19](https://react.dev)** — UI library
- **[Vite 7](https://vitejs.dev)** — build tool & dev server
- **[React Router DOM v7](https://reactrouter.com)** — client-side routing
- **[Tailwind CSS v4](https://tailwindcss.com)** — utility-first styling
- **[Recharts](https://recharts.org)** — ratings bar chart
- **[React Hot Toast](https://react-hot-toast.com)** — toast notifications
- **[React Icons](https://react-icons.github.io/react-icons)** — icon library
- **[localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)** — persistent install state

---

## 📁 Project Structure

```
src/
├── assets/          # Images, icons, logo
├── components/      # Reusable UI components
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── StatsSection.jsx
│   ├── TrendingAppsSection.jsx
│   ├── AppNotFound.jsx
│   └── Loader.jsx
├── context/
│   └── InstallContext.jsx   # Global install state
├── data/
│   └── apps.json            # App data (20 apps)
├── layouts/
│   └── MainLayout.jsx
├── pages/
│   ├── Home.jsx
│   ├── AllApps.jsx
│   ├── AppDetails.jsx
│   ├── MyInstallations.jsx
│   └── ErrorPage.jsx
└── routes/
    └── Router.jsx
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js **v18+**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/SaikatKarar/mission-restart-a3.git

# 2. Enter the project directory
cd mission-restart-a3

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other Commands

```bash
npm run build     # Build for production
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

---

## 📸 Pages

| Page | Route | Description |
|---|---|---|
| Home | `/` | Banner, stats, and trending apps |
| All Apps | `/apps` | Full app grid with live search |
| App Details | `/apps/:id` | App info, ratings chart, install button |
| My Installations | `/my-installations` | Installed apps with sort & uninstall |
| 404 | `*` | Custom not found page |

---

## 📄 License

This project was built as part of a programming challenge. All rights reserved © 2025 AppHub.