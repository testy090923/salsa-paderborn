# Sanity Integration Plan – salsa-paderborn.de

> Erstellt: 2026-03-04

## Architektur-Überblick

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│  Sanity Studio   │     │   Sanity Cloud    │     │    Netlify      │
│  /studio         │────▶│   (Content DB)    │────▶│   (Build +      │
│  (embedded)      │     │                  │     │    Hosting)     │
└─────────────────┘     └──────────────────┘     └─────────────────┘
                              │                         │
                              │ Webhook                 │
                              │ (bei Publish)           │
                              └────────────────────────▶│ Rebuild (~30s)
                                                        │
┌─────────────────┐                               ┌─────┴─────────┐
│  Andy (Git)      │──────────────────────────────▶│ Live Website   │
│  Code, Layouts,  │        git push               │ salsa-pader-   │
│  Styles          │                               │ born.de        │
└─────────────────┘                               └───────────────┘
```

**Prinzip:** Code lebt in Git, Content lebt in Sanity. Bei jedem Push oder Content-Publish wird die Site neu gebaut.

---

## Technischer Stack

### Packages
```bash
npm install @sanity/astro @sanity/client @sanity/image-url @portabletext/astro
npm install -D sanity groq @astrojs/netlify
```

### Astro-Konfiguration
- **Output:** `hybrid` (statische Seiten + embedded Studio als SSR-Route)
- **Adapter:** `@astrojs/netlify`
- **Studio:** Embedded unter `/studio` – Nadia loggt sich auf salsa-paderborn.de/studio ein

### Webhook-Setup
1. Netlify Build Hook erstellen (Netlify Dashboard → Build hooks)
2. Sanity Webhook konfigurieren → triggert nur bei publizierten Dokumenten (nicht Drafts)
3. Filter: `_type in ["event", "course", "teacher", "danceSchool", "blogPost"] && !(_id in path("drafts.**"))`

---

## Content-Modell (5 Typen)

### 1. Event
| Feld | Typ | Pflicht | Notizen |
|------|-----|---------|---------|
| title | String | ✅ | z.B. "Salsa Night Paderborn" |
| slug | Slug (auto) | ✅ | |
| date | DateTime | ✅ | Datum + Uhrzeit |
| endDate | DateTime | | Für mehrtägige Events |
| category | Auswahl | ✅ | Party, Social, Festival, Sonstiges |
| location | String | ✅ | |
| city | String | ✅ | z.B. "Paderborn", "Bielefeld" |
| description | Text | ✅ | Kurz, on point (1-2 Sätze) |
| details | Portable Text | | Längere Beschreibung |
| price | String | | z.B. "8€", "frei" |
| image | Image (hotspot) | | |
| link | URL | | Externer Link |
| organizer | Ref → Tanzschule | | |

### 2. Kurs
| Feld | Typ | Pflicht | Notizen |
|------|-----|---------|---------|
| title | String | ✅ | |
| slug | Slug (auto) | ✅ | |
| category | Auswahl | ✅ | Kurs, Workshop, Bootcamp |
| level | Auswahl | ✅ | Anfänger, Mittelstufe, Fortgeschritten, Alle |
| style | Auswahl | ✅ | Salsa, Bachata, Kizomba, Sonstiges |
| schedule | String | ✅ | z.B. "Dienstags, 19:00" |
| startDate | Date | | Kursbeginn |
| location | String | ✅ | |
| teacher | Ref → Lehrer:in | | |
| school | Ref → Tanzschule | | |
| description | Text | ✅ | |
| partnerRequired | Boolean | | Default: false |
| image | Image (hotspot) | | |

### 3. Lehrer:in
| Feld | Typ | Pflicht | Notizen |
|------|-----|---------|---------|
| name | String | ✅ | |
| slug | Slug (auto) | ✅ | |
| photo | Image (hotspot) | | |
| styles | Array of Strings | ✅ | |
| bio | Portable Text | ✅ | |
| school | Ref → Tanzschule | | |
| contact | Object | | email, phone, instagram |
| website | URL | | |

### 4. Tanzschule
| Feld | Typ | Pflicht | Notizen |
|------|-----|---------|---------|
| name | String | ✅ | |
| slug | Slug (auto) | ✅ | |
| logo | Image | | |
| focus | Array of Strings | ✅ | |
| location | String | ✅ | |
| description | Portable Text | ✅ | |
| angebot | Array of Strings | | |
| website | URL | | |
| contact | Object | | email, phone |

### 5. Blog-Post (News)
| Feld | Typ | Pflicht | Notizen |
|------|-----|---------|---------|
| title | String | ✅ | |
| slug | Slug (auto) | ✅ | |
| publishedAt | DateTime | ✅ | |
| author | Ref → Lehrer:in | | Oder freitext |
| excerpt | Text | ✅ | Vorschau-Text |
| body | Portable Text | ✅ | |
| image | Image (hotspot) | | |
| tags | Array of Strings | | z.B. "Szene-News", "Event-Bericht" |

### Referenzen (Verknüpfungen)
- Event → Tanzschule (Veranstalter)
- Kurs → Lehrer:in + Tanzschule
- Lehrer:in → Tanzschule
- Blog-Post → Lehrer:in (Autor)

→ Ermöglicht: "Nadias Kurse", "Events von Salsa Pasión", "Posts von Nadia" – alles automatisch.

---

## Projektstruktur (nach Umbau)

```
salsa-web-agency/
├── astro.config.mjs          # Astro + Sanity + Netlify
├── sanity.config.ts           # Studio-Konfiguration
├── sanity.cli.ts              # CLI-Config
├── sanity/
│   └── schemas/
│       ├── event.ts
│       ├── course.ts
│       ├── teacher.ts
│       ├── danceSchool.ts
│       ├── blogPost.ts
│       └── index.ts
├── src/
│   ├── lib/
│   │   ├── sanity.ts          # Client + Image URL Builder
│   │   └── queries.ts         # Alle GROQ-Queries zentral
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Footer.astro
│   │   ├── EventCard.astro
│   │   ├── CourseCard.astro
│   │   ├── TeacherCard.astro
│   │   ├── SchoolCard.astro
│   │   ├── BlogCard.astro
│   │   └── SanityImage.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── events/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── kurse/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── lehrer/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── tanzschulen/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── news/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── kontakt.astro
│   │   ├── impressum.astro
│   │   └── datenschutz.astro
│   └── styles/
│       └── global.css
└── public/
```

---

## Sanity Free Plan – Limits

| Feature | Free Plan | Unser Bedarf |
|---------|-----------|-------------|
| Dokumente | 100.000 | ~200 (massiv unter Limit) |
| API Requests (CDN) | 500.000/Monat | ~5.000 (nur bei Builds) |
| Asset Storage | 10 GB | < 1 GB |
| Users | **3** | **⚠️ Potenzielles Limit** |
| Webhooks | ✅ | ✅ |

**User-Limit:** 3 User kostenlos. Reicht für Nadia + Pflege-Person + Andy. Falls mehr Leute Content pflegen sollen, bräuchten wir den Team-Plan ($15/User/Monat) oder ein Shared-Login-Konzept.

---

## Umsetzungs-Reihenfolge

### Schritt 1: Sanity-Projekt erstellen
- Account auf sanity.io
- Projekt anlegen
- Schemas definieren
- Studio konfigurieren

### Schritt 2: Astro-Integration
- Packages installieren
- astro.config.mjs anpassen (hybrid, netlify adapter, sanity plugin)
- sanity.ts + queries.ts anlegen
- Bestehende Hardcoded-Daten durch Sanity-Queries ersetzen

### Schritt 3: Komponenten umbauen
- EventCard, CourseCard etc. auf Sanity-Daten umstellen
- SanityImage-Komponente bauen
- Portable Text Rendering einbauen
- Dynamische Routen ([slug].astro) mit getStaticPaths

### Schritt 4: Deployment
- Netlify-Deployment einrichten
- Domain verbinden
- Build Hook + Webhook konfigurieren
- CORS-Origins in Sanity freischalten

### Schritt 5: Nadia onboarden
- Demo-Content in Sanity eintragen
- Nadia Zugang geben
- Kurzanleitung schreiben: "So trägst du ein Event ein"

---

## Bekannte Fallstricke

1. **CORS:** Domain + localhost in Sanity freischalten
2. **Draft vs. Published:** Webhook nur bei Published feuern
3. **Rebuild-Verzögerung:** Nadia informieren – "Dauert 1-2 Min bis live"
4. **Bilder:** Sanity Image Pipeline nutzen, NICHT Astro's `<Image>`
5. **Statische Seiten:** Impressum, Datenschutz bleiben als Astro-Dateien (kein CMS nötig)
6. **TypeScript:** `/// <reference types="@sanity/astro/module" />` in env.d.ts
