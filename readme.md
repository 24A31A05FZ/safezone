# 🛡️ SafeZone — Discover Safe Places Around You

---

## 1. Project Title

**SafeZone** — AI-Powered Safety & Locality Recommendation Platform

---

## 2. Project Description

SafeZone is a fully client-side, single-page web application that helps travellers and local residents discover verified safe places across major Indian cities. It provides real-time safety ratings, distance information, and intelligent place recommendations — all without requiring any backend, server, or installation. Simply open the file in a browser and start exploring.

---

## 3. Problem Statement

Travelling to a new city or navigating unfamiliar neighbourhoods can be stressful, especially when trying to identify safe hospitals, reliable transport, trustworthy banks, or family-friendly restaurants. There is no single, lightweight platform that consolidates safety-focused local recommendations for Indian cities without requiring app downloads, logins to third-party services, or an internet-dependent backend.

**SafeZone solves this:** a zero-dependency, offline-capable web app that gives users instant, filtered, and safety-rated locality recommendations — right from their browser.

---

## 4. Features

| Feature | Description |
|---|---|
| 🏠 Landing Page | Hero section, feature highlights, about stats, call-to-action |
| 🔐 Auth System | Register & Login with localStorage (no backend needed) |
| 📊 Personal Dashboard | Personalised greeting, weather card, tourist guide card, top info cards |
| 📍 Locality Recommendation | 4-step wizard: City → Category → Preferences → Results |
| 🏙️ 6 Indian Cities | Rajahmundry, Kakinada, Hyderabad, Bangalore, Delhi, Mumbai |
| 🏷️ 6 Place Categories | Hospitals, Restaurants, Banks, Police Stations, Transport Hubs, Tourist Spots |
| 🔍 Smart Filters | Filter by safety level, minimum rating, budget range, ambience & purpose |
| ⭐ Sort Results | Sort places by rating, distance, or safety level |
| 💾 Save Places | Bookmark favourite places; view & remove in Profile section |
| 🌙 Dark / Light Mode | Theme toggle persisted to localStorage |
| 🌐 Multi-Language Support | 30 languages via built-in translation map |
| 📞 Helplines Modal | 20 national emergency numbers in one place |
| 🚨 SOS Button | One-tap emergency overlay with dispatch confirmation |
| 👤 Profile Management | View & edit name, phone number, city; manage saved places |
| 👁️ Password Visibility Toggle | Eye icon to show/hide password on login & register forms |
| 📱 Responsive Design | Mobile-first layout, hamburger nav, works on all screen sizes |
| ↩️ Back-Gesture Guard | Prevents blank page on mobile swipe-back gesture |

---

## 5. Technologies Used

| Layer | Technology |
|---|---|
| Markup | HTML5 (Semantic elements, single-page structure) |
| Styling | Vanilla CSS (CSS Variables, Flexbox, Grid, Animations) |
| Logic | Vanilla JavaScript (ES6+, DOM API, localStorage API) |
| Icons | Font Awesome 6.5 (via CDN) |
| Fonts | Google Fonts — Cormorant Garamond (headings) · Inter (body) |
| Images | Unsplash (CDN-hosted photo URLs) |
| Routing | Custom SPA router in `navigation.js` (History API) |
| Storage | Browser `localStorage` (users, session, saved places, theme) |
| Deployment | Netlify (with `_redirects` for SPA routing) |

---

## 6. Project Structure

```
safezone/
├── index.html        # Full app — HTML + CSS + JS in one file (SPA)
├── navigation.js     # Standalone SPA router (History API, back-gesture guard)
├── images/           # Local image assets
├── _redirects        # Netlify SPA routing config (/* → /index.html 200)
└── README.md         # Project documentation (this file)
```

> All core logic, styles, and data live inside `index.html` as inline `<style>` and `<script>` blocks. The app runs directly from the file system — no build step, no npm, no server required.

### Internal Page / Section Map

```
index.html
 ├── #page-landing      →  Hero, Features, About, App CTA, Footer
 ├── #page-login        →  Sign-in form with validation
 ├── #page-register     →  Registration form with validation
 └── #page-dashboard    →  Sidebar SPA shell
       ├── #section-overview   →  Top cards, Emergency contacts, Assistant grid, Activity log
       ├── #section-locality   →  City → Category → Preferences → Results wizard
       └── #section-profile    →  Avatar, edit form, saved/bookmarked places
```

---

## 7. Installation / Setup

No installation required. This is a zero-dependency, browser-based application.

### Option A — Open Locally
1. Download or clone the repository
2. Double-click `index.html` **or** drag it into Chrome / Edge / Firefox
3. The app loads instantly — no server, no npm, no build step

### Option B — Live Server (VS Code)
1. Install the **Live Server** extension in VS Code
2. Right-click `index.html` → **Open with Live Server**
3. Access at `http://127.0.0.1:5500`

### Option C — Deployed on Netlify
1. Push the folder to a GitHub repository
2. Connect the repo to [Netlify](https://netlify.com)
3. Set publish directory to `/` (root)
4. The `_redirects` file handles SPA routing automatically

---

## 8. Usage

1. **Open** `index.html` in any modern browser
2. **Register** a new account (name, email, phone, city, password)
3. **Sign in** with your credentials
4. On the **Dashboard**:
   - View your location, weather, and tourist guide cards
   - Use **Emergency Contacts** to quickly call police, ambulance, fire brigade, or women helpline
   - Use **Assistant** tools: Helplines modal, Language Assist, Booking Assist, Route Planner
5. Go to **Locality Recommendation**:
   - **Step 1** — Select a city (Rajahmundry, Kakinada, Hyderabad, Bangalore, Delhi, Mumbai)
   - **Step 2** — Choose a category (Hospitals, Restaurants, Banks, Police, Transport, Tourist)
   - **Step 3** — Set preferences (safety level, rating, budget, ambience, purpose)
   - **Step 4** — Browse results, sort them, and save favourites
6. Visit **Profile** to edit your details and manage saved places
7. Toggle **Dark / Light mode** from the sidebar or navbar

---

## 9. Sample Output

### Dashboard Overview
- Greeting: *"Good morning, Shaik 👋"*
- Top cards: Current Location · Weather · Tourist Guide

### Locality Recommendation — Example Query
- **City:** Hyderabad | **Category:** Restaurants | **Safety:** High | **Rating:** 4+ | **Budget:** ₹500
- **Result:** 10 filtered restaurants including *Shadab Hotel*, *Paradise Biryani*, *Chutneys* — sorted by rating, with distance and safety badge

### SOS Alert
- Clicking SOS shows: *"Your SOS emergency alert has been dispatched to your emergency contacts and local authorities."*

---

## 10. Future Improvements

- [ ] **Real GPS Integration** — Use the Geolocation API to auto-detect user location and calculate live distances
- [ ] **Backend & Database** — Replace localStorage with a real server (Node.js + MongoDB or Firebase) for persistent multi-device data
- [ ] **Encrypted Passwords** — Hash passwords with bcrypt instead of plain-text localStorage storage
- [ ] **Live Safety Data** — Integrate crime/safety APIs (e.g., government open data) for real-time scores
- [ ] **Real Weather API** — Connect to OpenWeather API for accurate, location-based weather
- [ ] **Map View** — Embed Google Maps or Leaflet.js to show results on an interactive map
- [ ] **PWA Support** — Add a service worker and manifest to make the app installable and offline-capable
- [ ] **More Cities** — Expand the dataset to all major Indian cities and towns
- [ ] **User Reviews** — Allow users to rate and review places they've visited
- [ ] **AI Chatbot** — Integrate an LLM-powered assistant for natural language safety queries

---

## 11. Author

| Field | Details |
|---|---|
| **Name** | *(Your Name)* |
| **Role** | *(e.g., Full Stack Developer / Student / Frontend Developer)* |
| **LinkedIn** | *(https://www.linkedin.com/in/your-profile)* |

---

> 📄 **License:** This project is a student / portfolio demo. Feel free to use and modify it for learning purposes.
