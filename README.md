# 🍻 Boys' Night Out — Cebu City (Dec 18–20)

One-page Next.js site: RSVP form (name, yes/no, note), who's going list, hotel info, itinerary,
photo carousels, and background music with disco lights.

## Run it

```
npm install
npm run dev
```

Open http://localhost:3000

## Editing stuff

- **Hotel info**: the `hotel` object at the bottom of `lib/itinerary.ts`.
- **Itinerary**: same file, the `itinerary` array.
- **Photos**: drop images into `public/photos/`.
- **Music**: `public/music/shots.mp3`.
- **RSVPs** (local): saved in `data/rsvps.json`. Delete an entry there to remove someone.

## Deploying (Vercel)

No env files needed. RSVPs save to `data/rsvps.json` by default, which does **not** persist on Vercel.
On Vercel: Storage → Marketplace → Upstash for Redis → create (free) → connect to this project → redeploy.
Vercel injects the keys itself and the app switches to Redis automatically.
