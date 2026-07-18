# Roam — Tour & Travel Website

A responsive React + Vite tour & travel site. Built for React Project 0
(component decomposition, props drilling, CSS in React).

## Stack
- React + Vite
- react-router-dom (Home / Destinations / Booking / Contact pages)
- CSS Modules (one `.module.css` per component)
- Data: hardcoded array in `src/data/destinations.js` (no API)

## Structure
```
src/
  components/   Navbar, Footer, Button, SectionHeading, Hero,
                DestinationCard, DestinationsGrid, BookingForm, ContactForm
  pages/        Home, Destinations, Booking, Contact
  data/         destinations.js (hardcoded data + category colors)
  App.jsx       owns selectedDestination state, drills props to pages
  main.jsx      router entry
```

## Props drilling in this app
`App` holds the destinations list and the currently selected destination
(for booking) as state, then passes them down as props:

`App` → `Destinations` page → `DestinationsGrid` → `DestinationCard`
(destination data + `onBook` handler drilled through 3 levels)

`App` → `Booking` page → `BookingForm` (selected id + setter drilled through)

## Run locally
```
npm install
npm run dev
```

## Build
```
npm run build
```
Outputs to `dist/`. `public/_redirects` (Netlify) and `vercel.json` (Vercel)
are included so client-side routing works after deploy.

## Deploy
**Vercel**: import the GitHub repo at vercel.com/new — it auto-detects Vite,
no config needed (build command `npm run build`, output dir `dist`).

**Netlify**: import the repo at app.netlify.com — build command `npm run
build`, publish directory `dist`.
