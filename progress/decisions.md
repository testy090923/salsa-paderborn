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

### 2026-03-05 – Brand: Farbpalette Salsa-Rot + Warm Gold + Terracotta
**Entscheidung:** Primärfarbe #C62828 (warmes Rot), Sekundärfarben #F5A623 (Gold) und #E65100 (Terracotta), Neutral #1A1A2E (Night Navy) und #FAF7F2 (Warm White).
**Begründung:** Rot ist die universelle Salsa-Assoziation (Leidenschaft, Energie). Gold bringt Wärme und Lebensfreude. Terracotta verbindet beides. Night Navy als Textfarbe ist weicher als reines Schwarz und assoziiert subtil Abendstimmung. Warm White reduziert Bildschirm-Härte. Alle Kombinationen erfüllen WCAG AA (Gold nur auf dunklem Hintergrund). Basierend auf Research von 12 Referenz-Websites: Warme Farben sind in der Latin-Dance-Szene universell, blaue Paletten wirken deplatziert.
**Alternativen:** Blau-basierte Palette (verworfen: zu kalt, zu corporate, Latin Dance = Wärme), Orange-Teal wie La Candela (verworfen: zu weit weg von Salsa-Erwartung), Gold-primär wie Cologne Congress (verworfen: zu luxuriös/exklusiv für inklusives Community-Portal).

### 2026-03-05 – Brand: Typografie Sansita + Source Sans 3
**Entscheidung:** Sansita (Bold/SemiBold) für Headlines, Source Sans 3 (Regular/SemiBold/Light) für Body-Text. Beide self-hosted als Variable Fonts.
**Begründung:** Sansita hat kalligrafische Qualität und Bewegung – passt zu Tanz und Latin-Kultur, ohne unleserlich zu sein. Source Sans 3 ist ein humanistischer Sans-Serif mit exzellenter Lesbarkeit auf allen Screengrößen. Beide SIL Open Font License (kostenlos). Self-Hosting für DSGVO-Konformität.
**Alternativen:** Poppins + Roboto (verworfen: zu generisch, null Wiedererkennung), Fjalla One + Source Sans Pro (verworfen: Fjalla One zu kantig/maskulin), Oswald + Open Sans (verworfen: zu editorial, zu wenig Wärme).

### 2026-03-05 – Brand: Positionierung als Community-Portal
**Entscheidung:** Positionierung: "Salsa Paderborn zeigt dir, was diese Woche in deiner Stadt getanzt wird – und macht dir Lust, dabei zu sein." Ton: einladend, energetisch, unkompliziert, community-orientiert, lokal-stolz. Konsequentes Duzen.
**Begründung:** Die Zielgruppe sind Neugierige und Anfänger, die "Salsa Paderborn" googeln. Der Ton muss die Schwellenangst nehmen, nicht verstärken. Alle deutschen Salsa-Portale aus dem Research sind entweder veraltet, informations-überladen oder unpersönlich – Salsa Paderborn differenziert sich durch modernes Design, klare Sprache und echtes Community-Gefühl.
**Alternativen:** Professionell-distanzierter Ton (verworfen: schreckt Anfänger ab), Englischer Ton (verworfen: lokales Portal in Paderborn, Zielgruppe googelt deutsch).

### 2026-03-05 – Brand: Icons via Lucide
**Entscheidung:** Lucide Icons als Icon-System. Line Icons, 2px Stroke, konsistenter Stil.
**Begründung:** Open Source (ISC License), konsistentes 24px Grid, Tree-shakeable (Performance), Astro-Integration verfügbar, große Auswahl relevanter Icons.
**Alternativen:** Heroicons (verworfen: weniger Auswahl), Font Awesome (verworfen: größeres Bundle, kommerzielle Lizenz für vollen Umfang), Custom Icons (verworfen: unnötiger Aufwand für Phase 1).
