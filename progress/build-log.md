# Build-Log

> Wird nach jeder Session aktualisiert. Zeigt den aktuellen Stand des Projekts.

## Aktueller Stand
- [x] Projekt-Setup (Astro + Netlify)
- [ ] Brand Guide erstellt
- [ ] Sitemap & Content-Plan
- [x] BaseLayout + globale Styles
- [x] Header + Navigation (inkl. News-Link)
- [x] Footer (inkl. News-Link)
- [x] Startseite (Sanity-Daten)
- [x] Event-System (Listing + Detail + Sanity)
- [x] Kursübersicht (Listing + Detail + Sanity)
- [x] Lehrer:innen-Profile (Listing + Detail + Sanity)
- [x] Tanzschulen (Listing + Detail + Sanity)
- [x] News/Blog (Listing + Detail + Sanity) – NEU
- [x] Kontaktseite (statisch)
- [x] Sanity CMS Integration (5 Schemas, Client, Queries, Studio)
- [x] Wiederverwendbare Komponenten (EventCard, CourseCard, TeacherCard, SchoolCard, BlogCard, SanityImage)
- [ ] Impressum + Datenschutz
- [ ] SEO-Optimierung
- [ ] QA + Feinschliff
- [ ] Fotogalerie (Phase 2?)
- [ ] Deployment auf Netlify
- [ ] Sanity Webhook → Netlify Build Hook

## Offene Blocker
- **Sanity Project ID fehlt:** Andy muss auf sanity.io ein Projekt erstellen und `.env` mit `PUBLIC_SANITY_PROJECT_ID` füllen
- **Impressum:** Nadia muss Adressfrage klären (virtuelle Geschäftsadresse)
- **Brand Guide:** Noch nicht erstellt – Farben/Typo sind aktuell aus dem Prototyp

## Session-Log

### 2026-03-03 – Session 1: Projekt-Kickoff
- Meeting mit Nadia → Brief erstellt
- Projektstruktur angelegt
- Astro-Projekt initialisiert
- Alle 8 Seiten mit Dummy-Daten gebaut (Events, Kurse, Lehrer, Tanzschulen, Kontakt, Homepage)
- BaseLayout, Nav, Footer erstellt

### 2026-03-04 – Session 2: Sanity CMS Integration
- Sanity als CMS gewählt und Plan erstellt (`progress/sanity-plan.md`)
- Packages installiert: @sanity/astro, @sanity/client, @sanity/image-url, astro-portabletext, @astrojs/netlify, sanity, groq
- Astro-Config: output=static, Netlify adapter, Sanity integration mit Studio unter /studio
- 5 Sanity-Schemas erstellt: Event, Kurs, Lehrer:in, Tanzschule, Blog-Post
- Sanity Client + Image URL Helper + 11 GROQ Queries
- 6 wiederverwendbare Komponenten gebaut (EventCard, CourseCard, TeacherCard, SchoolCard, BlogCard, SanityImage)
- Alle Seiten von Hardcoded-Daten auf Sanity-Queries umgestellt
- Dynamische [slug]-Routes für alle Content-Typen
- Neue Seite: /news (Blog/News)
- Nav + Footer um News-Link erweitert
- .gitignore erstellt, .env.example angelegt
