# 💰 MoneyFlow

> A beautiful, iOS 26-inspired personal budget tracker — no accounts, no servers, no tracking. Just you and your money.

🌐 **Live App → [https://infuocato.github.io/app/](https://infuocato.github.io/app/)**

---

## What is MoneyFlow?

MoneyFlow is a lightweight progressive web app (PWA) built with pure HTML, CSS, and JavaScript. It runs entirely in your browser — all data is stored locally on your device using `localStorage`. Nothing is ever sent to a server.

The design is inspired by **iOS 26 Liquid Glass** — deep blur, translucent cards, soft gradients, and fluid animations.

---

## Features

### 💳 Budget & Tracking
- Set a monthly budget and track spending in real time
- Animated circular progress ring that changes color as you approach your limit
- Live projection of end-of-month spending based on your daily average
- Customizable warning threshold (40%–95%) — you choose when to get alerted

### 🗂️ Categories
- 5 built-in categories: 🛒 Groceries · 🚌 Transport · 🏠 Home · 🎮 Entertainment · 📦 Other
- Custom description field for "Other" expenses
- Color-coded icons throughout the app

### 🔁 Recurring Expenses
- Mark any expense as recurring — it gets added automatically at the start of each month
- Manage and delete recurring expenses from Settings

### 📊 Stats & History
- Bar chart breakdown by category on the Home screen
- Full transaction history with month-by-month navigation
- Donut chart with category distribution
- Monthly spending trend over the last 6 months
- Filter history by category

### ✏️ Edit & Delete
- Edit any expense amount (and description for "Other") via a bottom sheet
- Delete individual expenses with a dedicated button
- Full data wipe available in Settings

### 📤 Export
- Export all your expenses across all months as a `.csv` file with one tap

---

## How to Install (Add to Home Screen)

MoneyFlow works best when installed as an app on your device — no App Store required.

### On iPhone — Safari
1. Open [https://infuocato.github.io/app/](https://infuocato.github.io/app/) in **Safari**
2. Tap the **Share** button (↑) at the bottom of the screen
3. Scroll down and tap **"Add to Home Screen"**
4. Tap **"Add"** — done!

> The app will open full screen, without Safari's browser bar, just like a native app.

### On Android — Chrome
1. Open [https://infuocato.github.io/app/](https://infuocato.github.io/app/) in **Chrome**
2. Tap the **three dots (⋮)** in the top-right corner
3. Tap **"Add to Home Screen"** or **"Install App"**
4. Confirm by tapping **"Add"**

> On Android, MoneyFlow installs as a PWA with its own icon and splash screen.

---

## Privacy

- **No account required** — ever
- **No data leaves your device** — everything is stored in your browser's `localStorage`
- **No analytics, no ads, no tracking** of any kind
- Clearing your browser data will erase your expenses — export a CSV backup regularly

---

## Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5 |
| Styling | CSS3 — Liquid Glass design, `backdrop-filter`, CSS custom properties |
| Logic | Vanilla JavaScript (ES6+) |
| Storage | `localStorage` |
| Icons | [Font Awesome 6](https://fontawesome.com/) |
| Hosting | GitHub Pages |

No frameworks. No dependencies. No build step.

---

## License

MIT — free to use, but not distribute without my permission.

---

Made by [@infuocato](https://github.com/infuocato)
