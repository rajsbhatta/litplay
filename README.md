# 🪶 LitPlay — Literary Word Games

A zero-cost Progressive Web App featuring four literary word games.
Fully installable on mobile and desktop. Hosted on GitHub Pages.

---

## 🎮 Games

| Game | Description |
|------|-------------|
| 📖 **WordCraft** | Daily Wordle-style puzzle — guess the 5-letter literary word in 6 tries |
| 🔤 **Unscramble** | Rearrange scrambled letters to find the hidden literary word |
| ✍️ **Fill the Blank** | Complete famous quotes from world literature (10 questions) |
| 📚 **Word Wise** | Match literary vocabulary words to their correct definitions (15 questions) |

---

## 🚀 Deploy to GitHub Pages (Free Hosting)

### Step 1 — Create a GitHub repository
1. Go to [github.com](https://github.com) and sign in
2. Click **New repository**
3. Name it `litplay` (or any name you like)
4. Set it to **Public**
5. Click **Create repository**

### Step 2 — Upload the files
Upload all 9 files to the root of the repository:
- `index.html`
- `style.css`
- `app.js`
- `games.js`
- `data.js`
- `manifest.json`
- `sw.js`
- `icon.svg`
- `README.md`

### Step 3 — Enable GitHub Pages
1. Go to your repository → **Settings**
2. Scroll to **Pages** in the left sidebar
3. Under **Source**, select: **Deploy from a branch**
4. Branch: `main` | Folder: `/ (root)`
5. Click **Save**

### Step 4 — Update start_url in manifest.json
If your repo is named `litplay`, edit `manifest.json` and update:
```json
"start_url": "/litplay/",
"scope": "/litplay/"
```
If you used a different repo name, replace `litplay` with your repo name.

Your app will be live at:
`https://YOUR-USERNAME.github.io/litplay/`

---

## 📱 Install the App

**Android (Chrome):**
Tap the **⋮ menu** → **Add to Home Screen** → **Install**

**iPhone / iPad (Safari):**
Tap the **Share** button → **Add to Home Screen**

**Desktop (Chrome / Edge):**
Look for the **install icon** (⊕) in the address bar and click it

---

## 📁 File Structure

```
litplay/
├── index.html      ← App shell & all screens
├── style.css       ← All styles (ink & parchment theme)
├── app.js          ← Routing, scoring, PWA install, modal
├── games.js        ← Four game implementations
├── data.js         ← All word lists, quotes & definitions
├── manifest.json   ← PWA manifest (makes it installable)
├── sw.js           ← Service worker (enables offline play)
├── icon.svg        ← App icon
└── README.md       ← This file
```

---

## ✏️ Customising Game Content

All game content lives in **`data.js`**:

- **`WORDLE_WORDS`** — Add any 5-letter words (all caps)
- **`ANAGRAM_WORDS`** — Add objects with `word`, `scrambled`, `hint`, `category`
- **`QUOTES`** — Add objects with `before`, `after`, `answer`, `options`, `source`, `full`
- **`DEFINITIONS`** — Add objects with `word`, `definition`, `options` (array of 4 strings, first must be the correct definition)

---

## 🔧 Optional: PNG Icons for better iOS support

For the best iOS experience, convert `icon.svg` to PNG:
1. Open `icon.svg` in a browser
2. Screenshot or use a tool like [svgtopng.com](https://svgtopng.com)
3. Save as `icon-192.png` (192×192 px) and `icon-512.png` (512×512 px)
4. Upload these alongside the other files

---

## 🛠 Tech Stack

- Vanilla HTML · CSS · JavaScript (no frameworks, no dependencies)
- PWA: Web App Manifest + Service Worker
- Storage: `localStorage` for scores and daily word state
- Hosting: GitHub Pages (free, zero maintenance)
