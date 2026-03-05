# Entscheidungen

> Alle Design-, Technik- und Strategie-Entscheidungen mit Begründung.
> Wird laufend ergänzt.

### 2026-03-03 – Projekt-Pivot: Community-Portal statt Vereinswebsite
**Entscheidung:** Wir bauen salsa-paderborn.de als lokales Community-Portal, nicht eine Website für Salsa Pasión e.V.
**Begründung:** Nadia will eine neutrale Anlaufstelle für die gesamte Salsa-Szene in Paderborn. Salsa Pasión hat bereits eine eigene Website.
**Alternativen:** Vereinswebsite für Salsa Pasión – verworfen, weil das Ziel größer ist und die Domain bereits auf die Community ausgerichtet ist.

### 2026-03-03 – Phase 1 Scope: Latin-Szene only
**Entscheidung:** Phase 1 fokussiert auf Salsa, Bachata, Kizomba. Klassische Tanzschulen kommen frühestens in Phase 2.
**Begründung:** Die Domain heißt salsa-paderborn.de – ein zu breiter Scope verwässert die Positionierung und das SEO. Erst die Latin-Community aufbauen, dann erweitern.
**Alternativen:** Sofort alle Tanzstile einbeziehen – verworfen wegen Branding-Konflikt mit Domain und Positionierung.

### 2026-03-03 – LehrerInnen-Profile von Anfang an
**Entscheidung:** LehrerInnen-Profile werden architektonisch von Anfang an eingeplant (Collection/Template-System), auch wenn zunächst nur Nadia gelistet ist.
**Begründung:** Nadia will, dass es leicht ist, neue LehrerInnen einzupflegen. Nachträglicher Umbau wäre teurer als direkt richtig zu planen.
**Alternativen:** Erst Event-Hub bauen, Profile später – verworfen, weil Nadia es explizit als Priorität benannt hat.

### 2026-03-03 – SEO von Anfang an, rudimentär
**Entscheidung:** Google SEO und KI-SEO werden von Anfang an mitgedacht (strukturierte Daten, semantisches HTML, Meta-Tags), aber nicht überoptimiert.
**Begründung:** "Salsa Paderborn" ist eine lokale Nische mit machbarem Wettbewerb. Saubere Grundlagen reichen für Phase 1. Nadia hat SEO als Priorität benannt.
**Alternativen:** SEO erst in Phase 2 – verworfen, weil nachträgliches SEO immer teurer ist als von Anfang an sauber zu bauen.

### 2026-03-04 – CMS: Sanity als Headless CMS
**Entscheidung:** Sanity als Headless CMS für dynamische Inhalte (Events, Kurse, LehrerInnen-Profile, Tanzschulen).
**Begründung:** Content lebt getrennt vom Code (kein Git-Konflikt), kostenloser Tier reicht locker, hübsche Web-Oberfläche für nicht-technische Nutzer, erstklassige Astro-Integration. Rebuild via Webhook (~30 Sek.) ist für eine Community-Seite akzeptabel.
**Alternativen:** Decap CMS (verworfen: speichert in Git → Konfliktgefahr mit Code-Änderungen), echte Datenbank/Supabase (verworfen: Overkill, braucht SSR), Notion/Airtable (verworfen: Drittanbieter-Abhängigkeit, Rate Limits).

### 2026-03-04 – Astro Output-Mode: static statt hybrid
**Entscheidung:** `output: 'static'` statt `hybrid` in astro.config.mjs.
**Begründung:** Astro 5 hat `hybrid` entfernt. `static` ist der neue Default – alle Seiten werden statisch vorgebaut. Das Sanity Studio unter `/studio` wird automatisch per `@sanity/astro` Integration als SSR-Route konfiguriert, der Netlify-Adapter ist trotzdem nötig dafür.
**Alternativen:** `output: 'server'` – verworfen, weil alle Content-Seiten statisch sein sollen (Performance + CDN-Caching).

### 2026-03-04 – Portable Text: astro-portabletext statt @portabletext/astro
**Entscheidung:** `astro-portabletext` als Portable Text Renderer.
**Begründung:** `@portabletext/astro` existiert nicht (mehr). `astro-portabletext` ist das offizielle Community-Paket, aktiv gepflegt (letzte Version Jan 2026), von Sanity im Plugin-Directory gelistet.
**Alternativen:** Eigenen Renderer schreiben – verworfen, unnötiger Aufwand.

### 2026-03-04 – Blog/News-Seite von Anfang an
**Entscheidung:** `/news` als Blog/News-Bereich von Anfang an mitbauen.
**Begründung:** Guter SEO-Content, Nadia/Pflege-Person können Szene-Updates posten, stärkt die Community-Positionierung. Schema ist einfach (Titel, Text, Bild, Tags).
**Alternativen:** Blog erst in Phase 2 – verworfen, weil das Schema und die Pages minimal aufwändig sind und SEO-Wert haben.

### 2026-03-03 – Timeline: Mai 2026 als Ziel
**Entscheidung:** Website soll bis Mai 2026 mit Grundgerüst, ersten Inhalten und LehrerInnen-Profilen live sein.
**Begründung:** Nadias Wunsch. Realistisch machbar bei klarer Priorisierung.
**Alternativen:** Längere Timeline – nicht nötig bei fokussiertem Scope.
