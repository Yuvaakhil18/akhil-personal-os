# Akhil Personal OS

An interactive personal portfolio operating system for C. Yuva Akhil—a Computer Science student building software, AI experiments, and creative web experiences.

Instead of presenting the portfolio as a conventional scrolling résumé, this project treats the website as a small desktop environment. Visitors can open applications, inspect projects, browse a personal gallery, play local games, write private notes, change the visual theme, and interact with a draggable companion.

## Project goals

- Present Akhil's projects and technical interests in a memorable, interactive format.
- Keep project claims, statuses, metrics, and disclosures honest.
- Combine editorial typography with a pixel-art operating-system interface.
- Make the experience responsive on desktop, tablet, and mobile.
- Keep the site frontend-first, dependency-light, privacy-conscious, and easy to host as static files.

## Main features

### Desktop-style portfolio interface

- Akhil OS boot/loading screen with terminal-style initialization messages.
- Animated wallpaper system with rotating visual scenes and crossfade transitions.
- Pixel-art application icons for Projects, Systems, Proof, Journey, AI Field Notes, Whiteboard, Browser, Games, Contact, Case Files, Experiments, and Founder.txt.
- Hidden macOS-inspired dock that appears near the bottom edge and magnifies icons on hover.
- Draggable desktop application icons.
- Draggable application windows with focus/z-index management.
- Window controls for closing, minimizing, maximizing, and resizing from the bottom-right corner.
- Smooth open/close transitions and Escape-to-close behavior.
- Responsive layouts and reduced-motion support.

### Portfolio content applications

- **Projects.exe** — selected software and AI projects with categories, statuses, descriptions, and technology tags.
- **Systems.log** — Akhil's hands-on problem-solving and prototyping approach.
- **Proof.app** — qualified achievements and project signals, including the documented Prompt Wars rank.
- **Journey.timeline** — education and project-building milestones.
- **AI Field Notes.md** — short public notes about AI, experimentation, and interface design.
- **Founder.txt** — adapted as a personal working-principles file for a student/developer identity.
- **Case Files.archive** — evidence-style summaries for selected projects and their limitations.
- **Gallery.archive** — outdoor, mirror, and temple photographs shown inside an OS window.
- **Experiments.lab** — small interaction, visual, and technical experiments.
- **Browser.app** — GitHub, professional profile, and direct-contact links.
- **Contact.link** — email-based contact flow for internships, placements, and collaboration.

### Local interactive tools

- **Whiteboard.canvas** — browser-local notes stored in `localStorage`; notes are not sent to a server.
- **Games.arcade** — opens the included games inside the portfolio window instead of redirecting visitors away.
- **Music deck** — optional local audio controls. Music does not autoplay; only tracks placed in the approved local music folder are referenced.
- **Companion** — draggable pixel-art Akhil character with a status indicator and menu-based position reset.
- **Theme switcher** — Day, Night, and Dark modes while keeping application labels readable across themes.
- Custom pixel cursor and hover/click feedback.

## Technical architecture

This is a dependency-free static frontend. There is no framework, build pipeline, database, server API, analytics layer, or authentication system required for the portfolio surface.

### Important files

| File | Purpose |
| --- | --- |
| `index.html` | Boot screen, desktop shell, application cards, dock, companion, window template, and favicon reference. |
| `app.js` | Application data rendering, themes, window creation, search, games, notes, companion movement, and core interactions. |
| `layout-overrides.js` | Visual refinement layer, icon mapping, wallpaper transitions, motion behavior, window controls, gallery, music deck, and responsive interaction improvements. |
| `styles.css` | Base design tokens, typography, layout, component styles, window content, and responsive rules. |
| `content/owner-profile.js` | Identity, contact details, GitHub link, project descriptions, approved statuses, and claim-safe content. |
| `assets/` | Photos, pixel artwork, icons, wallpapers, game assets, music, and generated visuals. |
| `games/` | Self-contained browser games opened inside the portfolio window. |
| `CLAIM_LEDGER.md` | Reference for factual claims and qualifications. |

The visual system uses CSS custom properties for the paper, ink, wine, pink, lime, sky, muted, pixel, serif, and mono design tokens. Typography combines Instrument Serif for editorial display text, Silkscreen for pixel labels, and DM Mono for technical metadata.

## Run locally

Serve the repository root with any static file server. For example, with Python:

```bash
python -m http.server 4173
```

Then open `http://localhost:4173`.

The project can also be served by a simple Node static server or deployed directly to a static hosting provider. No package installation is required for the main portfolio.

## Customization

1. Update identity, project descriptions, links, and approved claims in `content/owner-profile.js`.
2. Add approved photos to `assets/photos/` without overwriting protected originals.
3. Add approved local music files to `assets/music/` and update the music deck list in `layout-overrides.js`.
4. Add or edit application content in `app.js`.
5. Adjust design tokens and base layout in `styles.css`.
6. Use `layout-overrides.js` for optional visual effects and interaction enhancements.

Do not add private credentials, API keys, `.env` files, passwords, private screenshots, or unapproved personal information.

## Privacy and content integrity

- Whiteboard notes remain in the visitor's browser through `localStorage`.
- No visitor analytics or tracking is required by the current implementation.
- No voice agent or booking system is included.
- Contact is currently email-based.
- Yunetra remains labelled as in progress.
- Aura's stadium and crowd behavior is described as illustrative/simulated where applicable.
- Project benchmarks and README-reported numbers must remain qualified.
- Legal Assistant must never be represented as professional legal advice.
- Garuda Infra must remain described accurately as a family/company-related web project.
- Generated likeness assets should only use approved source photos.

## Asset and licensing notes

The outdoor photograph is the primary portrait, with the mirror and temple photographs used as secondary editorial images. Generated pixel artwork was created from approved Akhil reference images. Template structure and visual assets are retained only where they are owner-approved, licensed, or otherwise cleared for reuse. Previous-owner identity material is kept under `reference-only/` and should not be presented as Akhil's work.

Music is opt-in and local. Only use tracks you have permission to publish or have properly licensed; crediting a copyrighted song alone does not automatically grant publishing rights.

## Current project scope

This repository is the portfolio product itself. It is not a commercial services website and does not claim to be a production SaaS platform. The focus is on communicating Akhil's projects, learning process, technical interests, creative experimentation, and career readiness.

## Author

**C. Yuva Akhil**
Computer Science Student & Aspiring Software Developer
Visakhapatnam, India

- GitHub: [Yuvaakhil18](https://github.com/Yuvaakhil18)
- Email: `yuvaakhil2318@gmail.com`
