# Build-Log

> Wird nach jeder Session aktualisiert. Zeigt den aktuellen Stand des Projekts.

## Aktueller Stand
- [x] Projekt-Setup (Astro + Netlify)
- [x] Brand Guide erstellt (Draft – wartet auf Nadia-Feedback)
- [x] Sitemap & Content-Plan
- [x] BaseLayout + globale Styles
- [x] Header + Navigation (inkl. News-Link)
- [x] Footer (inkl. News-Link)
- [x] Startseite (Sanity-Daten)
- [x] Event-System (Listing + Detail + Sanity)
- [x] Kursübersicht (Listing + Detail + Sanity)
- [x] Lehrer:innen-Profile (Listing + Detail + Sanity)
- [x] Tanzschulen (Listing + Detail + Sanity)
- [x] News/Blog (Listing + Detail + Sanity)
- [x] Kontaktseite (statisch)
- [x] Sanity CMS Integration (5 Schemas, Client, Queries, Studio)
- [x] Wiederverwendbare Komponenten (EventCard, CourseCard, TeacherCard, SchoolCard, BlogCard, SanityImage)
- [x] Sanity-Projekt angelegt (Project ID: ne69pi1u)
- [x] Sanity Studio läuft unter /studio
- [x] Demo-Content per Seed-Script eingespielt
- [ ] Impressum + Datenschutz
- [ ] SEO-Optimierung (Meta-Tags, Open Graph, strukturierte Daten)
- [x] Brand Guide (Farben, Typo, Logo) – Draft, wartet auf Feedback
- [ ] QA + Feinschliff (Accessibility, Mobile, Performance)
- [ ] Fotogalerie (Phase 2?)
- [x] Deployment auf Netlify – LIVE
- [ ] Sanity Webhook → Netlify Build Hook
- [ ] Nadia onboarden (Sanity-Zugang, Kurzanleitung) – Einladung verschickt

## Offene Blocker
- **Impressum:** Nadia muss Adressfrage klären (virtuelle Geschäftsadresse)
- **Fotos:** Kein Bildmaterial vorhanden – Nadia muss beim nächsten Event fotografieren lassen
- **Brand-Feedback:** Nadia muss Brand Guide reviewen

## Technische Details (für nächste Session)
- **Dev-Server:** `npm run dev` → `http://localhost:4510`
- **Studio:** `http://localhost:4510/studio`
- **Sanity Project ID:** ne69pi1u (in `.env`)
- **Sanity Write Token:** in `.env` als `SANITY_WRITE_TOKEN` (für Seed-Scripts)
- **Seed-Script:** `node --env-file=.env scripts/seed.mjs`
- **Build:** `npm run build` – läuft fehlerfrei durch
- **Type-Check:** `npx astro check` – 0 Errors, 0 Warnings, 2 Hints (showHero unused, imageUrlBuilder deprecated)
- **CORS:** `http://localhost:4510` (ohne Credentials) + Netlify-URL (mit Credentials)
- **React Integration:** Installiert für Sanity Studio Rendering
- **Astro Output:** `static` (nicht hybrid – wurde in Astro 5 entfernt)
- **GitHub Repo:** https://github.com/testy090923/salsa-paderborn.git
- **Netlify:** Verbunden mit GitHub, Auto-Deploy bei Push
- **Netlify Env Vars:** PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET
- **netlify.toml:** Build-Command, Publish-Dir, Node 20

## Dateistruktur (nach Sanity-Integration)
```
sanity/schemas/          – 5 Schemas + index.ts
src/lib/sanity.ts        – Client + urlFor Helper
src/lib/queries.ts       – 11 GROQ Queries
src/components/          – 6 Card-Komponenten + SanityImage + Nav + Footer
src/pages/               – 12 Pages (5 Listings, 5 [slug] Details, kontakt, index)
src/pages/events/        – index.astro + [slug].astro
src/pages/kurse/         – index.astro + [slug].astro
src/pages/lehrer/        – index.astro + [slug].astro
src/pages/tanzschulen/   – index.astro + [slug].astro
src/pages/news/          – index.astro + [slug].astro
scripts/seed.mjs         – Demo-Content Seed-Script
sanity.config.ts         – Studio-Config (Root)
sanity.cli.ts            – CLI-Config (Root)
```

## Demo-Content in Sanity
- 1 Tanzschule: Salsa Pasión e.V.
- 1 Lehrerin: Nadia (verknüpft mit Salsa Pasión)
- 4 Events: Salsa Night, Bachata Social, Latin Vibes Festival, Kizomba Friday
- 3 Kurse: Salsa Anfänger, Salsa On2 Intermediate, Bachata Sensual Weekend
- 1 Blog-Post: "Salsa Paderborn geht online!"
- Plus 1 manuell erstelltes Test-Event von Andy

## Session-Log

### 2026-03-03 – Session 1: Projekt-Kickoff
- Meeting mit Nadia → Brief erstellt
- Projektstruktur angelegt
- Astro-Projekt initialisiert
- Alle 8 Seiten mit Dummy-Daten gebaut (Events, Kurse, Lehrer, Tanzschulen, Kontakt, Homepage)
- BaseLayout, Nav, Footer erstellt

### 2026-03-04 – Session 2: Sanity CMS Integration (Code)
- Sanity als CMS gewählt und Plan erstellt (`progress/sanity-plan.md`)
- Packages installiert: @sanity/astro, @sanity/client, @sanity/image-url, astro-portabletext, @astrojs/netlify, @astrojs/react
- Astro-Config: output=static, Netlify adapter, Sanity integration mit Studio unter /studio, Port 4510
- 5 Sanity-Schemas erstellt: Event, Kurs, Lehrer:in, Tanzschule, Blog-Post
- Sanity Client + Image URL Helper + 11 GROQ Queries
- 6 wiederverwendbare Komponenten gebaut (EventCard, CourseCard, TeacherCard, SchoolCard, BlogCard, SanityImage)
- Alle Seiten von Hardcoded-Daten auf Sanity-Queries umgestellt
- Dynamische [slug]-Routes für alle Content-Typen
- Neue Seite: /news (Blog/News)
- Nav + Footer um News-Link erweitert
- .gitignore erstellt, .env.example angelegt
- Bug gefixt: `import.meta.env` in astro.config.mjs → `loadEnv` von Vite
- Bug gefixt: Level-Werte in GROQ Queries an Schema-Werte angepasst (Großschreibung + Umlaute)
- Bug gefixt: SchoolCard description als Portable Text statt String behandeln
- React-Integration hinzugefügt (nötig für Sanity Studio Rendering)

### 2026-03-05 – Session 3: Sanity-Projekt verbinden + Demo-Content
- Andy hat Sanity-Projekt erstellt (ne69pi1u)
- .env angelegt mit Project ID + Write Token
- CORS für localhost:4510 eingerichtet
- Sanity Studio erfolgreich verbunden (Development Host)
- Seed-Script geschrieben und ausgeführt (1 Schule, 1 Lehrerin, 4 Events, 3 Kurse, 1 Blog-Post)
- Verifiziert: Alle Seiten zeigen Live-Daten aus Sanity
- Sanity Free Plan geprüft: 20 Seats, 2 Roles, public datasets – reicht locker
- Alles committed: `feat: integrate Sanity CMS with 5 content types and dynamic pages`

### 2026-03-05 – Session 4: Brand Guide + Redesign + Deployment
- Brand Research: 12 Referenz-Websites analysiert (salsa.de, latindancecalendar.com, berlinsalsacongress.co, latincologne.de etc.)
- Brand Guide Draft erstellt: Salsa-Rot #C62828, Gold #F5A623, Terracotta #E65100, Night Navy #1A1A2E, Warm White #FAF7F2
- Fonts: Sansita (Headlines) + Source Sans 3 (Body), 6 WOFF2 self-hosted
- Sitemap überarbeitet: Navigation von 7 auf 5 Punkte, neue /szene Hub-Seite
- Komplettes visuelles Redesign: Hero mit Gradient, Counter-Section, Einstiegs-Weiche, alle Cards
- FAQ-Block auf Kurse-Seite (native details/summary)
- CSS Design-Token-System (Custom Properties für Farben, Spacing, Shadows)
- Umlaut-Bug gefixt (Sub-Agent schrieb ae/oe/ue statt ä/ö/ü)
- GitHub Repo eingerichtet (testy090923/salsa-paderborn, Nadias Test-Account)
- netlify.toml erstellt (Build-Config, Node 20)
- Netlify Deployment erfolgreich – Website ist LIVE
- Sanity Studio funktioniert online (CORS mit Credentials)
- Nadia als Editor in Sanity eingeladen
