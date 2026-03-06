# Stack-Anleitung: Astro + Sanity + Netlify + GitHub

> Referenz-Anleitung für Agent-Teams, die eine statische Website mit CMS aufbauen sollen.
> Basiert auf dem Salsa-Paderborn-Projekt (März 2026).

---

## 1. Stack-Überblick

| Komponente | Rolle | Warum |
|---|---|---|
| **Astro 5** | Static Site Generator | Schnell, einfach, kein JS im Client nötig. Perfekt für Content-Websites. |
| **Sanity CMS** | Headless CMS | Flexibles Schema, gehostetes Studio, großzügiger Free Plan (20 Seats). |
| **Netlify** | Hosting + CDN | Auto-Deploy bei Git Push, Free Tier reicht für kleine Projekte. |
| **GitHub** | Code-Repo | Verbunden mit Netlify für Auto-Deploy. |

**Datenfluss:**
```
Sanity CMS (Content) → Astro (Build) → Netlify (Hosting)
                           ↑
                     GitHub (Code)
```

Astro holt bei jedem Build die Daten aus Sanity via GROQ-Queries. Die Seite ist **rein statisch** – kein Server nötig.

---

## 2. Projekt initialisieren

### 2.1 Astro-Projekt erstellen

```bash
npm create astro@latest projektname
cd projektname
```

### 2.2 Abhängigkeiten installieren

```bash
# Astro-Integrationen
npm install @astrojs/netlify @astrojs/sitemap @astrojs/react

# Sanity
npm install @sanity/astro @sanity/client @sanity/image-url astro-portabletext

# React (nötig für Sanity Studio Rendering)
npm install react react-dom @types/react @types/react-dom

# Sanity CLI + GROQ (devDependencies)
npm install -D sanity groq
```

### 2.3 Astro-Konfiguration (`astro.config.mjs`)

```js
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import sanity from '@sanity/astro';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';

// WICHTIG: loadEnv statt import.meta.env, weil Config vor Astro läuft
const env = loadEnv(import.meta.env.MODE, process.cwd(), '');

export default defineConfig({
  site: 'https://deine-domain.de',
  server: { port: 4510 },
  output: 'static',
  adapter: netlify(),
  integrations: [
    sanity({
      projectId: env.PUBLIC_SANITY_PROJECT_ID,
      dataset: env.PUBLIC_SANITY_DATASET || 'production',
      useCdn: true,
      studioBasePath: '/studio',
    }),
    react(),
    sitemap(),
  ],
});
```

**Fallstrick `loadEnv`:** In `astro.config.mjs` funktioniert `import.meta.env` NICHT, weil die Config außerhalb von Astros Runtime läuft. Verwende `loadEnv` von Vite. Env-Variablen müssen mit `PUBLIC_` prefixed sein.

### 2.4 Environment Variables (`.env`)

```env
PUBLIC_SANITY_PROJECT_ID=dein-project-id
PUBLIC_SANITY_DATASET=production
```

Erstelle auch eine `.env.example` ohne echte Werte. Die `.env` gehört in `.gitignore`.

---

## 3. Sanity CMS einrichten

### 3.1 Sanity-Projekt erstellen

1. Gehe zu https://sanity.io/manage
2. "Create Project" → Name vergeben
3. Project ID notieren → in `.env` eintragen
4. Dataset "production" anlegen (ist oft schon da)

### 3.2 CORS konfigurieren

Unter sanity.io/manage → Projekt → API → CORS Origins:

| Origin | Credentials |
|---|---|
| `http://localhost:4510` | Nein |
| `https://deine-netlify-url.netlify.app` | Ja |
| `https://deine-domain.de` | Ja |

**Ohne CORS funktioniert das Studio nicht!** Das ist ein häufiger Blocker.

### 3.3 Studio-Konfiguration (`sanity.config.ts` im Root)

```ts
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemas';

export default defineConfig({
  name: 'projekt-name',
  title: 'Projekt-Titel',
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
```

### 3.4 Schemas definieren (`sanity/schemas/`)

Jeder Content-Typ bekommt eine eigene Datei. Beispiel-Struktur:

```
sanity/schemas/
├── index.ts          ← Exportiert alle Schemas als Array
├── event.ts
├── course.ts
├── teacher.ts
├── danceSchool.ts
└── blogPost.ts
```

**Schema-Muster (`sanity/schemas/example.ts`):**

```ts
import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'example',
  title: 'Beispiel',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'body',
      title: 'Inhalt',
      type: 'array',
      of: [{ type: 'block' }], // Portable Text (Rich Text)
    }),
    // Referenz auf anderen Typ:
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: [{ type: 'teacher' }],
    }),
  ],
  // Preview im Studio:
  preview: {
    select: { title: 'title', media: 'image' },
  },
});
```

**`sanity/schemas/index.ts`:**

```ts
import event from './event';
import course from './course';
// ...weitere imports
export const schemaTypes = [event, course /* ... */];
```

### 3.5 Field-Typen Referenz

| Sanity Type | Verwendung |
|---|---|
| `string` | Kurzer Text, Titel |
| `text` | Mehrzeiliger Text (mit `rows: 3`) |
| `slug` | URL-Slug (mit `options: { source: 'title' }`) |
| `datetime` | Datum + Uhrzeit |
| `image` | Bild mit optionalem Hotspot |
| `url` | Externe Links |
| `array` of `block` | Rich Text (Portable Text) |
| `reference` | Verknüpfung zu anderem Dokument |
| `string` mit `options.list` | Dropdown/Radio-Auswahl |

---

## 4. Sanity-Client + Queries

### 4.1 Client (`src/lib/sanity.ts`)

```ts
import { sanityClient } from 'sanity:client';
import imageUrlBuilder from '@sanity/image-url';

export { sanityClient };

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  if (!source) return undefined;
  return builder.image(source);
}
```

**Beachte:** Der Import `sanity:client` kommt aus dem `@sanity/astro` Plugin – NICHT manuell einen Client erstellen.

### 4.2 GROQ-Queries (`src/lib/queries.ts`)

Alle Queries zentral in einer Datei. Muster:

```ts
// Alle Einträge eines Typs (Listing)
export const allEventsQuery = `
  *[_type == "event" && date >= now()] | order(date asc) {
    _id, title, slug, date, category, location, city,
    description, price, image,
    organizer->{name, slug}
  }
`;

// Einzelner Eintrag per Slug (Detail)
export const eventBySlugQuery = `
  *[_type == "event" && slug.current == $slug][0] {
    _id, title, slug, date, endDate, category,
    location, city, description, details,
    price, image, link,
    organizer->{name, slug, location}
  }
`;

// Reverse-Referenz (alle Kurse eines Lehrers)
export const teacherBySlugQuery = `
  *[_type == "teacher" && slug.current == $slug][0] {
    _id, name, slug, photo, styles, bio,
    "courses": *[_type == "course" && teacher._ref == ^._id] | order(title asc) {
      _id, title, slug, level, schedule
    }
  }
`;

// Multi-Query für Startseite (alles in einem Request)
export const homepageQuery = `
  {
    "events": *[_type == "event" && date >= now()] | order(date asc) [0...3] { ... },
    "courses": *[_type == "course"] | order(title asc) [0...2] { ... },
    "totalEvents": count(*[_type == "event" && date >= now()])
  }
`;
```

**GROQ-Tipps:**
- `->` löst Referenzen auf: `author->{name, slug}`
- `^._id` referenziert das Parent-Dokument (für Reverse-Lookups)
- `now()` gibt den Build-Zeitpunkt zurück (statische Seite!)
- `[0...3]` = erste 3 Ergebnisse (Slice)
- `count(...)` für Aggregationen

### 4.3 Daten in Pages verwenden

```astro
---
import { sanityClient } from '../lib/sanity';
import { allEventsQuery } from '../lib/queries';

const events = await sanityClient.fetch(allEventsQuery);
---

{events.map((event) => (
  <h2>{event.title}</h2>
))}
```

---

## 5. Astro-Seiten-Patterns

### 5.1 Listing-Seite (`src/pages/events/index.astro`)

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import { sanityClient } from '../../lib/sanity';
import { allEventsQuery } from '../../lib/queries';

const events = await sanityClient.fetch(allEventsQuery);
---

<BaseLayout title="Events">
  {events.length > 0 ? (
    events.map((event) => (
      <a href={`/events/${event.slug?.current}`}>{event.title}</a>
    ))
  ) : (
    <p>Aktuell keine Events geplant.</p>
  )}
</BaseLayout>
```

### 5.2 Dynamische Detail-Seite (`src/pages/events/[slug].astro`)

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import { sanityClient } from '../../lib/sanity';
import { eventBySlugQuery } from '../../lib/queries';

export async function getStaticPaths() {
  const events = await sanityClient.fetch(`*[_type == "event"]{ slug }`);
  return events
    .filter((item: any) => item.slug?.current)
    .map((item: any) => ({
      params: { slug: item.slug.current },
    }));
}

const { slug } = Astro.params;
const event = await sanityClient.fetch(eventBySlugQuery, { slug });

if (!event) {
  return Astro.redirect('/events');
}
---

<BaseLayout title={event.title}>
  <h1>{event.title}</h1>
</BaseLayout>
```

**Wichtig:** `getStaticPaths()` ist Pflicht bei `output: 'static'`. Ohne das weiß Astro nicht, welche Seiten es generieren soll.

### 5.3 Portable Text rendern

```astro
---
import { PortableText } from 'astro-portabletext';
---

{post.body && (
  <div class="article-body">
    <PortableText value={post.body} />
  </div>
)}
```

### 5.4 Sanity-Bilder

**Komponente (`src/components/SanityImage.astro`):**

```astro
---
import { urlFor } from '../lib/sanity';

interface Props {
  source: any;
  alt: string;
  width?: number;
  height?: number;
  class?: string;
}

const { source, alt, width, height, class: className } = Astro.props;
const imageUrl = urlFor(source)?.width(width || 800).auto('format').url();
---

{imageUrl && (
  <img
    src={imageUrl}
    alt={alt}
    width={width}
    height={height}
    class={className}
    loading="lazy"
  />
)}
```

### 5.5 Schema.org JSON-LD

Head-Slot im BaseLayout definieren:

```astro
<!-- BaseLayout.astro, im <head> -->
<slot name="head" />
```

In Pages verwenden:

```astro
---
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: event.title,
  startDate: event.date,
  // ...
};
---

<BaseLayout title={event.title}>
  <script type="application/ld+json" set:html={JSON.stringify(jsonLd)} slot="head" />
  <!-- Page content -->
</BaseLayout>
```

---

## 6. Netlify Deployment

### 6.1 `netlify.toml`

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"
```

### 6.2 Netlify einrichten

1. Netlify Dashboard → "Add new site" → "Import from Git"
2. GitHub-Repo verbinden
3. Build-Einstellungen werden aus `netlify.toml` gelesen
4. **Environment Variables setzen:**
   - `PUBLIC_SANITY_PROJECT_ID` = deine Project ID
   - `PUBLIC_SANITY_DATASET` = `production`

**ACHTUNG:** Die Env-Variablen müssen exakt `PUBLIC_SANITY_PROJECT_ID` heißen, NICHT `SANITY_PROJECT_ID`. Das liegt an `loadEnv` in der Astro-Config, das nur Variablen mit dem `PUBLIC_`-Prefix lädt.

### 6.3 Scheduled Deploys (`.github/workflows/scheduled-deploy.yml`)

Da Astro eine statische Seite baut, werden Sanity-Änderungen erst nach einem Rebuild sichtbar. Statt bei jedem CMS-Edit ein Build zu triggern (frisst Free-Plan-Minutes), nutze einen Cron-Job:

```yaml
name: Scheduled Netlify Deploy

on:
  schedule:
    - cron: '0 6 * * *'   # 06:00 UTC
    - cron: '0 18 * * *'  # 18:00 UTC
  workflow_dispatch:       # Manueller Trigger möglich

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Netlify Build
        run: curl -X POST -d {} "${{ secrets.NETLIFY_BUILD_HOOK }}"
```

**Setup:**
1. Netlify → Site → Build hooks → "Add build hook" → URL kopieren
2. GitHub → Repo → Settings → Secrets → `NETLIFY_BUILD_HOOK` = die URL
3. GitHub PAT braucht `workflow`-Scope, um `.github/workflows/`-Dateien zu pushen

---

## 7. Projektstruktur (Referenz)

```
projekt/
├── astro.config.mjs
├── sanity.config.ts
├── sanity.cli.ts
├── netlify.toml
├── .env                    ← NICHT committen
├── .env.example
├── .github/workflows/
│   └── scheduled-deploy.yml
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── fonts/              ← Self-hosted Fonts (DSGVO!)
├── sanity/schemas/
│   ├── index.ts
│   ├── event.ts
│   ├── course.ts
│   └── ...
└── src/
    ├── layouts/
    │   └── BaseLayout.astro
    ├── components/
    │   ├── Nav.astro
    │   ├── Footer.astro
    │   ├── SanityImage.astro
    │   └── ...Card.astro
    ├── lib/
    │   ├── sanity.ts       ← Client + urlFor
    │   └── queries.ts      ← Alle GROQ-Queries
    └── pages/
        ├── index.astro
        ├── 404.astro
        ├── events/
        │   ├── index.astro
        │   └── [slug].astro
        └── ...
```

---

## 8. Bekannte Fallstricke

### Env-Variablen
- In `astro.config.mjs` → `loadEnv` von Vite verwenden, NICHT `import.meta.env`
- Variablen MÜSSEN `PUBLIC_` Prefix haben
- In Netlify Dashboard müssen sie exakt so heißen wie lokal

### Sanity CORS
- Jede Domain (localhost, Netlify-URL, Custom Domain) muss als CORS Origin eingetragen sein
- Studio auf der Live-Site braucht "Allow credentials" = aktiviert
- Ohne CORS → Studio zeigt "Connect this studio" Fehler

### Sanity Studio + React
- `@astrojs/react` muss installiert sein, sonst rendert das Studio nicht
- React ist nur für das Studio nötig, NICHT für die Website selbst

### Statische Seite = Build-Time-Daten
- `now()` in GROQ = Zeitpunkt des Builds, NICHT des Seitenaufrufs
- Neue CMS-Inhalte sind erst nach Rebuild sichtbar
- Lösung: Scheduled Deploys (Cron) oder manueller Trigger

### Fonts + DSGVO
- Google Fonts NICHT per CDN laden (DSGVO-Verstoß in Deutschland)
- Fonts als WOFF2 herunterladen, unter `public/fonts/` ablegen, per `@font-face` einbinden

### Bilder auf Detail-Seiten
- NICHT `max-height` + `object-fit: cover` verwenden (schneidet Bilder ab)
- Besser: `max-height: 85vh` + `width: auto` + `height: auto` → zeigt Originalproportion

### Sub-Agent Umlaut-Bug
- Sub-Agents schreiben gelegentlich `ae` statt `ä`, `oe` statt `ö`, `ue` statt `ü`, `--` statt `–`
- Nach jedem Agent-Run prüfen: `grep -r "ae\|oe\|ue" src/` (false positives filtern)
- Im Briefing explizit darauf hinweisen

### GitHub PAT Permissions
- Für normalen Push: Classic PAT mit `repo` Scope
- Für Workflow-Dateien: Zusätzlich `workflow` Scope nötig
- Fine-grained PATs haben oft nicht genug Rechte → Classic bevorzugen

---

## 9. Seed-Script (Demo-Content)

Optionales Script zum Befüllen von Sanity mit Testdaten (`scripts/seed.mjs`):

```js
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_WRITE_TOKEN, // Braucht Write-Token!
  useCdn: false,
  apiVersion: '2024-01-01',
});

// Dokument erstellen
const school = await client.create({
  _type: 'danceSchool',
  name: 'Beispiel Tanzschule',
  slug: { current: 'beispiel-tanzschule' },
  // ...
});

// Referenz nutzen
await client.create({
  _type: 'event',
  title: 'Test-Event',
  organizer: { _type: 'reference', _ref: school._id },
  // ...
});
```

Ausführen: `node --env-file=.env scripts/seed.mjs`

Braucht einen Write-Token aus sanity.io/manage → API → Tokens.

---

## 10. Checkliste vor Go-Live

- [ ] Alle Env-Variablen in Netlify gesetzt (`PUBLIC_SANITY_PROJECT_ID`, `PUBLIC_SANITY_DATASET`)
- [ ] Sanity CORS: Netlify-URL + Custom Domain eingetragen (mit Credentials)
- [ ] `netlify.toml` vorhanden mit Build-Command + Publish-Dir
- [ ] `robots.txt` mit Sitemap-Verweis
- [ ] `sitemap-index.xml` wird generiert (Astro Sitemap Integration)
- [ ] Favicon vorhanden
- [ ] 404-Seite erstellt
- [ ] Impressum + Datenschutz (rechtlich Pflicht in DE)
- [ ] Fonts self-hosted (DSGVO)
- [ ] Scheduled Deploy eingerichtet (Cron oder Webhook)
- [ ] OG Meta Tags für Social Sharing
- [ ] Schema.org JSON-LD auf relevanten Seiten
- [ ] WCAG 2.1 AA: Farbkontraste, Skip-Link, Focus-Styles, Alt-Texte
- [ ] Mobile getestet (die Zielgruppe nutzt Smartphones)
