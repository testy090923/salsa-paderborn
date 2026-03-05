# QA-Report -- Salsa Paderborn Website

> Erstellt am 2026-03-05 vom QA Reviewer
> Geprueft gegen: Brand Guide, Sitemap, Build-Log, alle Astro-Dateien in src/
> Build-Status: npm run build erfolgreich (0 Errors, 2 Warnings)

---

## Zusammenfassung

Die Website ist technisch solide gebaut und hat eine klare Struktur. Das Redesign nach Brand Guide ist sichtbar umgesetzt: Farben, Typografie, Card-Designs und Spacing passen. Es gibt aber **mehrere kritische und wichtige Issues**, die vor einem Live-Gang gefixt werden muessen -- insbesondere im Bereich Accessibility, rechtliche Pflichten und fehlende Seiten.

**Gesamtbewertung: Noch nicht live-faehig.** Die kritischen Issues (Impressum, Skip-Link, Focus-States, 404-Seite, Favicon) sind Blocker.

---

## Kritische Issues (muessen vor Live-Gang gefixt werden)

### [Critical] -- Impressum und Datenschutz-Seiten fehlen komplett
- **Wo:** `/src/pages/` -- es existieren weder `impressum.astro` noch `datenschutz.astro`
- **Was:** Der Footer verlinkt auf `/impressum` und `/datenschutz`, aber diese Seiten existieren nicht. Der Klick fuehrt ins Nichts (Astro default 404).
- **Warum wichtig:** Rechtliches Risiko. In Deutschland ist ein Impressum Pflicht (TMG SS5). Ohne Impressum und Datenschutzerklaerung drohen Abmahnungen. Das ist ein absoluter Blocker fuer den Live-Gang.
- **Fix:** Mindestens Platzhalter-Seiten erstellen mit dem Hinweis "In Bearbeitung -- wir ergaenzen die Informationen in Kuerze." Besser: Nadia zeitnah um die noetigen Daten bitten (Adresse, Rechtsform) und echte Seiten bauen. Bis dahin: Links im Footer deaktivieren oder entfernen.

### [Critical] -- Kein Skip-Link vorhanden
- **Wo:** `src/layouts/BaseLayout.astro` -- kein Skip-Link im body-Anfang
- **Was:** Es gibt keinen "Zum Inhalt springen"-Link. Tastaturnutzer muessen bei jeder Seite durch die gesamte Navigation tabben, bevor sie zum Inhalt gelangen.
- **Warum wichtig:** WCAG 2.1 AA Kriterium 2.4.1 (Bypass Blocks). Das ist ein harter Accessibility-Verstoss.
- **Fix:** In `BaseLayout.astro` direkt nach dem oeffnenden `<body>`-Tag einfuegen:
  ```html
  <a href="#main-content" class="skip-link">Zum Inhalt springen</a>
  ```
  Und dem `<main>`-Tag die ID `id="main-content"` geben. CSS:
  ```css
  .skip-link {
    position: absolute;
    top: -100%;
    left: 0;
    padding: 8px 16px;
    background: var(--color-primary);
    color: white;
    z-index: 200;
    font-weight: 600;
  }
  .skip-link:focus {
    top: 0;
  }
  ```

### [Critical] -- Keine Focus-Styles definiert
- **Wo:** Gesamtes CSS -- kein einziger `:focus` oder `:focus-visible` Selektor vorhanden
- **Was:** Interaktive Elemente (Links, Buttons, FAQ-Details, Nav-Links) haben keinen sichtbaren Focus-Indikator. Tastaturnutzer koennen nicht erkennen, welches Element gerade fokussiert ist.
- **Warum wichtig:** WCAG 2.1 AA Kriterium 2.4.7 (Focus Visible). Ohne sichtbaren Focus ist die Seite fuer Tastaturnutzer unbenutzbar.
- **Fix:** In `BaseLayout.astro` globale Focus-Styles ergaenzen:
  ```css
  :focus-visible {
    outline: 3px solid var(--color-secondary-gold);
    outline-offset: 2px;
  }
  a:focus-visible, .btn:focus-visible {
    outline: 3px solid var(--color-secondary-gold);
    outline-offset: 2px;
  }
  ```

### [Critical] -- Keine 404-Seite vorhanden
- **Wo:** `src/pages/` -- keine `404.astro` Datei
- **Was:** Wer eine ungueltige URL aufruft, sieht entweder den Astro-Default oder eine leere Seite. Das wirkt unprofessionell und lsst Besucher ohne Orientierung.
- **Warum wichtig:** User Experience. Besucher die auf toten Links landen (z.B. die verlinkten /impressum und /datenschutz) sehen keine hilfreiche Seite.
- **Fix:** `src/pages/404.astro` erstellen mit einer freundlichen Nachricht und Links zurueck zur Startseite und zu den wichtigsten Bereichen.

### [Critical] -- Kein Favicon vorhanden
- **Wo:** `public/` Verzeichnis -- keine Favicon-Dateien
- **Was:** Die Website hat kein Favicon. Im Browser-Tab erscheint das Standard-Icon.
- **Warum wichtig:** Professioneller Eindruck. Ohne Favicon sieht die Seite unfertig aus. Browser-Tabs, Lesezeichen und mobile Homescreen-Icons zeigen ein generisches Symbol.
- **Fix:** Ein einfaches Favicon erstellen -- z.B. ein "S" in Sansita Bold auf rotem Hintergrund (#C62828). Benoetigt: `favicon.ico` (32x32), `favicon.svg` (skalierbar), `apple-touch-icon.png` (180x180). In BaseLayout im `<head>` verlinken.

---

## Wichtige Issues (sollten gefixt werden)

### [High] -- Kontakt-E-Mails sind nicht als Links klickbar
- **Wo:** `src/pages/kontakt.astro`, Zeilen 19/26/33/40
- **Was:** Die E-Mail-Adressen (info@salsa-paderborn.de, events@salsa-paderborn.de etc.) werden als reiner Text in `<p class="contact-detail">` dargestellt, nicht als `<a href="mailto:...">` Links.
- **Warum wichtig:** Auf Mobilgeraeten kann man die E-Mail-Adressen nicht antippen, um direkt eine Mail zu oeffnen. Die Kontaktseite verfehlt damit ihren Hauptzweck: niederschwelligen Kontakt ermoeglichen.
- **Fix:** Alle E-Mail-Adressen in `<a href="mailto:info@salsa-paderborn.de">` Tags wrappen.

### [High] -- Keine Open Graph / Social Media Meta-Tags
- **Wo:** `src/layouts/BaseLayout.astro` -- nur `<title>` und `<meta name="description">` vorhanden
- **Was:** Es fehlen `og:title`, `og:description`, `og:image`, `og:type`, `og:url` sowie `twitter:card` Tags.
- **Warum wichtig:** Wenn jemand die Seite auf WhatsApp, Facebook, Instagram oder Twitter teilt, wird kein Vorschaubild und keine Beschreibung angezeigt. Gerade fuer eine Community-Plattform, die ueber soziale Kanaele waechst, ist das ein Problem.
- **Fix:** In BaseLayout.astro im `<head>` OG-Tags ergaenzen. Dafuer die Props um `image` und `url` erweitern.

### [High] -- Keine robots.txt und keine sitemap.xml
- **Wo:** `public/` Verzeichnis und Astro-Config
- **Was:** Weder robots.txt noch sitemap.xml sind vorhanden. Suchmaschinen bekommen keine Orientierung.
- **Warum wichtig:** SEO-Grundlage. Ohne Sitemap dauert das Indexieren laenger und einige Unterseiten werden moeglicherweise nicht gefunden. Die lokale Suchbarkeit ("Salsa Paderborn") ist ein Kernziel.
- **Fix:** In `astro.config.mjs` die Astro Sitemap Integration hinzufuegen (`@astrojs/sitemap`). Eine `public/robots.txt` mit Verweis auf die Sitemap erstellen. Die `site`-Property in der Astro-Config setzen.

### [High] -- Umlaut-Bug in CourseCard: "noetig" statt "noetig"
- **Wo:** `src/components/CourseCard.astro`, Zeile 71
- **Was:** Dort steht `Kein Partner noetig` (mit "oe" statt "ö"). Der Build-Log erwaehnt, dass ein Umlaut-Bug gefixt wurde, aber dieser Fall wurde uebersehen.
- **Warum wichtig:** Content-Qualitaet. Deutsche Texte mit "oe" statt korrektem Umlaut wirken unprofessionell.
- **Fix:** In Zeile 71 von CourseCard.astro den Text `Kein Partner noetig` durch `Kein Partner nötig` ersetzen.

### [High] -- Kontrastprobleme bei grau-auf-warm-white Texten
- **Wo:** Gesamte Website -- 71 Vorkommen von Hardcoded-Graufarben (#666, #888, #999, #aaa)
- **Was:** Insbesondere `#888` und `#999` auf dem warmen Hintergrund `#FAF7F2` haben zu wenig Kontrast:
  - `#888` auf `#FAF7F2`: ca. 3.3:1 -- FAELLT unter WCAG AA fuer normalen Text (4.5:1 noetig)
  - `#999` auf `#FAF7F2`: ca. 2.7:1 -- FAELLT deutlich unter WCAG AA
  - `#aaa` auf `#FAF7F2`: ca. 2.2:1 -- FAELLT deutlich unter WCAG AA
  - Betrifft: Counter-Labels, Event-Zeiten, Location-Texte, Meta-Infos, Footer-Texte, Organizer-Texte, Kurs-Schedule
- **Warum wichtig:** WCAG 2.1 AA Kriterium 1.4.3 (Contrast Minimum). Diese Texte sind fuer Menschen mit Sehbeeintraechtigungen schwer lesbar.
- **Fix:** Alle `#888`, `#999`, `#aaa` Farben auf mindestens `#666` (fuer sekundaere Texte) bzw. `#555` (fuer wichtige Meta-Infos) anheben. Am besten als CSS Custom Properties definieren, z.B. `--color-text-secondary: #666;` und `--color-text-muted: #555;`. NICHT `#888` auf dem warmen Hintergrund verwenden.

### [High] -- Footer-Links fuer Impressum/Datenschutz fuehren auf 404
- **Wo:** `src/components/Footer.astro`, Zeilen 23-25
- **Was:** Die Links `/impressum` und `/datenschutz` sind vorhanden, fuehren aber ins Nichts, da die Seiten nicht existieren.
- **Warum wichtig:** Tote Links schaedigen das Vertrauen und die SEO.
- **Fix:** Entweder Seiten erstellen (siehe Critical Issue oben) oder die Links vorlaeufig entfernen/deaktivieren.

### [High] -- Test-Content in Live-Daten sichtbar
- **Wo:** Startseite, Events-Uebersicht
- **Was:** Im Build-Output erscheint ein Event namens "test evenet" mit den Daten "dsa, das". Das ist offensichtlich ein Test-Eintrag, der von Andy beim Testen des CMS erstellt wurde.
- **Warum wichtig:** Wirkt hochgradig unprofessionell. Besucher sehen sofort: Diese Seite ist nicht fertig.
- **Fix:** Das Test-Event in Sanity Studio loeschen. Generell vor dem Live-Gang alle Sanity-Inhalte auf Platzhalter und Test-Eintraege pruefen.

### [High] -- Hamburger-Menu schliesst sich nicht nach Linkklick
- **Wo:** `src/components/Nav.astro` -- checkbox-basiertes Mobile-Menu
- **Was:** Das Mobile-Menu verwendet eine CSS-only Checkbox-Loesung. Wenn der Benutzer auf einen Link im Menu klickt, schliesst sich das Menu nicht -- die Checkbox bleibt gecheckt. Erst beim naechsten Klick auf den Hamburger schliesst es sich.
- **Warum wichtig:** Mobile UX. Die primaere Zielgruppe nutzt Smartphones. Ein Menu, das sich nach dem Navigieren nicht schliesst, fuehlt sich kaputt an.
- **Fix:** Minimales JavaScript hinzufuegen (Astro Island nicht noetig, ein inline `<script>` reicht):
  ```html
  <script>
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        document.getElementById('nav-toggle').checked = false;
      });
    });
  </script>
  ```

---

## Mittlere Issues (sollten gefixt werden)

### [Medium] -- Sansita nur in 400 und 700 geladen, Brand Guide erwartet 600
- **Wo:** `src/layouts/BaseLayout.astro` Font-Deklaration, `public/fonts/`
- **Was:** Die Sansita-Fonts werden in Regular (400) und Bold (700) geladen. Der Brand Guide spezifiziert aber auch SemiBold (600) fuer H3/H4. Aktuell fallen H3/H4 auf `font-weight: 700` zurueck, was korrekt aussieht aber nicht dem Brand Guide entspricht.
- **Warum wichtig:** Brand-Konsistenz. Die Unterscheidung zwischen H1/H2 (Bold) und H3/H4 (SemiBold) fehlt visuell.
- **Fix:** Entweder eine Sansita Variable Font laden (die alle Gewichte abdeckt) oder bewusst entscheiden, dass 700 fuer alle Headlines reicht und den Brand Guide entsprechend anpassen. Aktuell ist es eine Inkonsistenz.

### [Medium] -- Globale Styles verwenden Hardcoded Farben statt CSS Custom Properties
- **Wo:** Viele Komponenten und Seiten
- **Was:** `#666`, `#888`, `#999`, `#555`, `#444`, `#333` werden direkt in CSS verwendet, statt ueber Custom Properties. Das macht es unmoeglich, die Farben zentral zu aendern.
- **Warum wichtig:** Wartbarkeit. Wenn jemand spaeter die Graufarben anpassen will (z.B. fuer besseren Kontrast), muss in 71 Stellen geaendert werden.
- **Fix:** In den `:root` Block Custom Properties einfuegen:
  ```css
  --color-text-primary: #1A1A2E;
  --color-text-secondary: #555;
  --color-text-muted: #666;
  --color-text-light: #888; /* ACHTUNG: nur auf weissem Hintergrund verwenden */
  ```
  Und alle Hardcoded-Werte ersetzen.

### [Medium] -- Homepage Hero: kein semantisches `<header>` Landmark
- **Wo:** `src/pages/index.astro`, Zeile 47
- **Was:** Die Hero-Section ist als `<header>` gerendert. Das ist semantisch korrekt fuer den Page-Banner, ABER `<header>` innerhalb von `<main>` kann von Screenreadern als Landmark interpretiert werden. In Kombination mit dem `<nav>`-Landmark in der Navbar und dem `<footer>`-Landmark gibt es jetzt zwei Header-Landmarks ohne Beschriftung.
- **Warum wichtig:** Screenreader-Navigation. Nutzer die per Landmarks navigieren koennten verwirrt werden.
- **Fix:** Entweder den Hero-`<header>` in ein `<section>` mit `aria-label="Hero"` umwandeln, oder ein `aria-label="Seiteninhalt"` hinzufuegen.

### [Medium] -- Kontaktseite: E-Mail-Adressen sind moeglicherweise fiktiv
- **Wo:** `src/pages/kontakt.astro`
- **Was:** Die E-Mail-Adressen info@salsa-paderborn.de, events@salsa-paderborn.de, lehrer@salsa-paderborn.de, partner@salsa-paderborn.de sind eingetragen. Es ist unklar, ob diese tatsaechlich eingerichtet sind.
- **Warum wichtig:** Wenn Besucher an nicht existierende Adressen schreiben, bekommen sie Bounce-Mails und das Vertrauen ist weg.
- **Fix:** Mit Nadia klaeren, ob die Domain salsa-paderborn.de existiert und die E-Mail-Adressen eingerichtet sind. Sonst durch eine funktionierende Adresse ersetzen.

### [Medium] -- Keine `<time>`-Elemente fuer Daten
- **Wo:** Event-Cards, Blog-Cards, Detail-Seiten
- **Was:** Datumsangaben werden als `<span>` dargestellt, nicht als `<time datetime="...">`. Nur auf der Blog-Detailseite (`news/[slug].astro`) wird `<time>` korrekt verwendet.
- **Warum wichtig:** SEO und Accessibility. Suchmaschinen koennen `<time>` Elemente besser parsen. Screenreader koennen Datumsangaben korrekt vorlesen.
- **Fix:** Alle Datumsausgaben in `<time datetime="2026-03-14T22:00">Sa., 14. Maerz</time>` wrappen.

### [Medium] -- Kein Schema.org Markup
- **Wo:** Alle Seiten
- **Was:** Es fehlen strukturierte Daten (JSON-LD) fuer Events, Kurse, Personen und die Organisation. Google kann keine Rich Snippets generieren.
- **Warum wichtig:** SEO-Impact. Bei der Suche nach "Salsa Party Paderborn Samstag" wuerde ein Rich Snippet mit Datum und Ort die Klickrate deutlich erhoehen.
- **Fix:** JSON-LD Bloecke in Detail-Seiten einfuegen, mindestens `schema.org/Event` fuer Events und `schema.org/Course` fuer Kurse. Kann als Phase-1b umgesetzt werden, sollte aber nicht vergessen werden.

### [Medium] -- Sansita wird nicht als Variable Font geladen
- **Wo:** `public/fonts/` -- 4 separate Sansita-Dateien statt 1 Variable Font
- **Was:** Der Brand Guide empfiehlt Variable Fonts fuer Performance. Sansita wird aber in 4 separaten Dateien geladen (400 latin, 400 latin-ext, 700 latin, 700 latin-ext = 85 KB), waehrend Source Sans 3 korrekt als Variable Font geladen wird (2 Dateien = 89 KB).
- **Warum wichtig:** Performance. 4 Font-Requests statt 2 bedeuten mehr Latenz. Auf mobilem Internet zaehlt jede Anfrage.
- **Fix:** Sansita als Variable Font laden (wenn als WOFF2 verfuegbar) oder akzeptieren, dass die 4 Files insgesamt nur 85 KB sind und der Impact gering ist. Kein Blocker, aber eine Inkonsistenz zum Brand Guide.

### [Medium] -- Kontaktseite enthaelt noch "Ueber Salsa Paderborn" Block
- **Wo:** `src/pages/kontakt.astro`, Zeilen 47-55
- **Was:** Die Kontaktseite hat noch einen "Ueber Salsa Paderborn" Block. Laut Sitemap-Empfehlung soll dieser Content auf `/szene` verschoben werden, und die Kontaktseite rein funktional bleiben.
- **Warum wichtig:** Content-Konsistenz. Der gleiche Text steht jetzt doppelt (auf /kontakt und auf /szene).
- **Fix:** Den About-Block von der Kontaktseite entfernen, da er auf `/szene` bereits besser platziert ist. Oder bewusst entscheiden, ihn auf beiden Seiten zu belassen.

---

## Kleinigkeiten (Nice to Have)

### [Low] -- Event-Badges: "Festival" Badge hat weissen Text auf Gold
- **Wo:** `src/pages/index.astro`, Zeile 121 -- Homepage-Event-Cards
- **Was:** Auf der Homepage werden Event-Tags mit weissem Text auf Gold-Hintergrund (#F5A623) dargestellt. Kontrast: ca. 2.1:1 -- FAELLT unter WCAG AA. In der EventCard-Komponente wurde das korrekt gefixt (Zeile 46: `tagTextColor` prueft auf "Festival"), aber auf der Homepage nicht.
- **Fix:** Auf der Homepage die gleiche Logik wie in EventCard.astro implementieren: Bei Festival-Events dunklen Text verwenden.

### [Low] -- Counter-Section: "Akteure" ist ein unklarer Begriff
- **Wo:** `src/pages/index.astro`, Zeile 74
- **Was:** Der dritte Counter zeigt `totalTeachers + totalSchools` als "Akteure". Fuer Neulinge ist "Akteure" mehrdeutig.
- **Fix:** Bessere Formulierung: "Lehrer:innen & Schulen" oder den Counter aufteilen.

### [Low] -- Blog News Grid kann bei einer einzelnen Card zu breit werden
- **Wo:** `src/pages/news/index.astro`
- **Was:** `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))` -- bei nur einem Blog-Post (aktueller Stand) nimmt die Card die volle Breite ein. Das sieht auf Desktop ueberdehnt aus.
- **Fix:** `max-width: 600px` fuer den Fall setzen, dass nur ein Post vorhanden ist, oder `auto-fill` statt `auto-fit` verwenden.

### [Low] -- `aspect-ratio: 16 / 9` hat keinen Fallback fuer aeltere Browser
- **Wo:** `src/components/BlogCard.astro`, Zeile 97
- **Was:** `aspect-ratio` wird von Safari < 15 (iOS 14.x) nicht unterstuetzt. Laut caniuse sind ca. 2% der Nutzer betroffen.
- **Fix:** Padding-Hack als Fallback oder akzeptieren, dass die geringe Nutzerbasis das Problem nicht rechtfertigt.

### [Low] -- Inkonsistente Breakpoints
- **Wo:** Verschiedene Dateien
- **Was:** Es werden `max-width: 640px`, `max-width: 600px`, `max-width: 768px` und `min-width: 640px` gemischt. Kein einheitliches Breakpoint-System.
- **Fix:** Einheitliche Breakpoints definieren und ueberall verwenden: `640px` (Mobile), `768px` (Tablet), `1024px` (Desktop). Die `max-width: 600px` in Detail-Seiten auf `max-width: 640px` vereinheitlichen.

### [Low] -- Kontaktseite: Icons sind Emojis statt Lucide Icons
- **Wo:** `src/pages/kontakt.astro`, Zeilen 16/23/30/37
- **Was:** Die Kontakt-Cards verwenden Emojis als Icons. Der Brand Guide empfiehlt Lucide Icons (Line Icons, 2px Stroke). Emojis sehen auf verschiedenen Betriebssystemen unterschiedlich aus.
- **Fix:** Emojis durch inline SVG Icons (Lucide) ersetzen. Kein Blocker, aber eine Brand-Inkonsistenz.

### [Low] -- Heading-Hierarchie-Sprung auf Lehrer-Listing
- **Wo:** `src/pages/lehrer/index.astro`, Zeile 34
- **Was:** Der CTA-Block verwendet `<h2>` ("Werde Teil der Community"), aber es gibt davor keinen `<h2>`. Die Hierarchie springt von `<h1>` direkt zu `<h2>` (korrekt), aber der CTA-H2 kommt nach der Liste ohne eigene Section. Das ist semantisch in Ordnung, aber auf der Tanzschulen-Seite wird der gleiche CTA-Block mit `<h2 class="section-title">` umgesetzt -- Inkonsistenz.
- **Fix:** Konsistente Heading-Struktur fuer CTAs ueber alle Seiten hinweg.

### [Low] -- Build-Warnings
- **Wo:** Build-Output
- **Was:** Zwei Warnings: (1) getStaticPaths() in Sanity Studio Route, (2) Chunk size warning von Vite.
- **Fix:** Die Sanity Studio Warning ist harmlos (kommt vom @sanity/astro Package). Die Chunk-Size-Warning kommt von der Studio-Bundlegroesse -- kann mit `build.chunkSizeWarningLimit` in vite.config unterdrueckt werden, ist aber nicht kritisch.

---

## Was gut funktioniert

1. **Semantisches HTML:** Korrektes `lang="de"`, `<nav>` mit `aria-label`, `<main>`-Landmark, `<article>` fuer Cards, `<footer>` mit eigenem `aria-label`. Die Grundstruktur ist sauber.

2. **Font-Loading:** Self-hosted (DSGVO-konform!), `font-display: swap`, Preload fuer die wichtigsten Font-Dateien. Korrekt umgesetzt.

3. **Heading-Hierarchie:** Auf den meisten Seiten sauber: H1 pro Seite, H2 fuer Sektionen, H3 fuer Cards. Keine Spruenge von H1 zu H3.

4. **Brand-Farben:** Die CSS Custom Properties sind sauber definiert und werden konsistent in Buttons, Tags, Highlights und Cards verwendet. Das Farbsystem funktioniert.

5. **Mobile Layout:** Die Grundstruktur ist Mobile-First. Grid-Layouts fallen korrekt auf eine Spalte zurueck. Cards stapeln sich korrekt. Die Hero-Section skaliert.

6. **Responsive Text:** Body-Text 16px (korrekt), Headlines skalieren per Media Query. Kein zu kleiner Text auf Mobile.

7. **Sanity-Integration:** Sauber implementiert mit zentralen GROQ-Queries, wiederverwendbaren Komponenten und korrekter Slug-basierter Navigation. Die Trennung zwischen Datenschicht und Darstellung ist gut.

8. **SanityImage-Komponente:** Lazy Loading (`loading="lazy"`), `decoding="async"`, Auto-Format (WebP wenn unterstuetzt), Placeholder-Fallback mit `role="img"` und `aria-label`. Gut gemacht.

9. **Card-Design:** Konsistentes Shadow-System, Hover-Effekte mit Transition, korrekte Typografie-Hierarchie innerhalb der Cards.

10. **FAQ-Block auf Kurse-Seite:** Native `<details>`/`<summary>` mit Custom-Styling. Keine JS-Abhaengigkeit, guter Browser-Support, Accessibility eingebaut.

11. **Navigation:** 5 Punkte wie im Sitemap-Plan, aktiver State per `aria-current="page"`, Logo verlinkt korrekt zur Startseite. Solide Arbeit.

---

## Priorisierte Umsetzungsreihenfolge

**Sofort (vor jedem Deploy):**
1. Skip-Link einfuegen (BaseLayout.astro)
2. Focus-Styles global definieren (BaseLayout.astro)
3. 404-Seite erstellen (pages/404.astro)
4. Favicon erstellen und einbinden
5. Test-Event aus Sanity loeschen
6. Umlaut-Bug "noetig" fixen (CourseCard.astro)

**Vor Live-Gang:**
7. Impressum/Datenschutz Platzhalter-Seiten erstellen
8. Kontakt-E-Mails als mailto-Links
9. robots.txt + Sitemap einrichten
10. Farbkontraste der Graufarben anheben
11. Open Graph Meta-Tags ergaenzen
12. Hamburger-Menu Auto-Close JS hinzufuegen

**Phase 1b:**
13. Schema.org JSON-LD Markup
14. CSS Custom Properties fuer alle Graufarben
15. Emojis durch Lucide Icons ersetzen
16. Breakpoints vereinheitlichen
