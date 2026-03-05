# Sitemap & Informationsarchitektur -- Salsa Paderborn

> Erstellt am 2026-03-05 vom Content Architect
> Basierend auf: Kundenbriefing, Brand Guide, Research von 12 Referenz-Websites, bestehende Code-Struktur
> Status: Empfehlung -- zur Abstimmung mit Andy

---

## 1. Navigation

### Hauptnavigation (Header)

```
[Logo: Salsa Paderborn]    Events    Kurse    Szene    News    Kontakt
```

**5 Punkte statt 7.** Das ist die zentrale Aenderung gegenueber dem Status Quo.

| Aktuell (7 Punkte) | Empfehlung (5 Punkte) | Begruendung |
|---|---|---|
| Start | *entfaellt* | Logo fuehrt zur Startseite. "Start" als Nav-Punkt ist Platzverschwendung. |
| Events | **Events** | Bleibt. Wichtigster Inhalt fuer beide Hauptzielgruppen. |
| Kurse | **Kurse** | Bleibt. Zweitwichtigster Inhalt fuer Neugierige. |
| Lehrer:innen | *unter "Szene"* | Eigenstaendiger Nav-Punkt ist fuer Phase 1 zu prominent (aktuell 1 Lehrerin). |
| Tanzschulen | *unter "Szene"* | Gleiches Problem -- aktuell 1 Tanzschule. Zusammen mit Lehrer:innen unter "Szene". |
| News | **News** | Bleibt. SEO-Wert, Community-Building. |
| Kontakt | **Kontakt** | Bleibt. Anlaufstelle fuer Anbieter und Neugierige. |
| -- | **Szene** (neu) | Fasst Lehrer:innen, Tanzschulen und eine neue "Ueber uns"-Sektion zusammen. |

**Warum "Szene" statt "Ueber uns"?**
"Ueber uns" klingt nach Vereinswebsite. "Szene" kommuniziert: Hier geht es um die Community, nicht um eine Organisation. Es ist ein Portal -- kein Absender. Ausserdem passt "Die Szene" zur Positionierung "Deine Anlaufstelle fuer die Salsa-Szene in Paderborn".

### Mobile Navigation (Hamburger-Menu)

Gleiche 5 Punkte, vertikal gestapelt. Kein Unterschied zur Desktop-Navigation -- Einfachheit geht vor. Der aktive Punkt wird durch Salsa-Rot (#C62828) hervorgehoben.

### Footer-Navigation

```
Events  |  Kurse  |  Lehrer:innen  |  Tanzschulen  |  News  |  Kontakt
---
Impressum  |  Datenschutz
---
"Du veranstaltest Events oder unterrichtest? Melde dich bei uns."
```

Im Footer werden Lehrer:innen und Tanzschulen wieder als eigene Links aufgefuehrt -- hier ist Platz, und wer gezielt sucht, findet den Direktweg. Die "Szene"-Zusammenfassung gilt nur fuer die Hauptnavigation.

### CTA-Buttons (immer sichtbar)

Kein CTA-Button direkt in der Navigation. Der Hero auf der Startseite uebernimmt diese Rolle. Auf Unterseiten gibt es jeweils kontextbezogene CTAs innerhalb des Contents.

---

## 2. Seitenstruktur

### Uebersicht aller Seiten

```
/                      Startseite
/events                Events & Partys (Listing)
/events/[slug]         Event-Detailseite
/kurse                 Kurse & Workshops (Listing)
/kurse/[slug]          Kurs-Detailseite
/szene                 Die Szene (Uebersichtsseite mit Lehrer:innen + Tanzschulen + Ueber uns)
/lehrer                Alle Lehrer:innen (Listing)
/lehrer/[slug]         Lehrer:innen-Detailseite
/tanzschulen           Alle Tanzschulen (Listing)
/tanzschulen/[slug]    Tanzschulen-Detailseite
/news                  News & Stories (Listing)
/news/[slug]           News-Detailseite
/kontakt               Kontakt & Mitmachen
/impressum             Impressum (TODO: wartet auf Nadia)
/datenschutz           Datenschutzerklaerung (TODO: wartet auf Nadia)
```

**Neue Seite: `/szene`** -- Das ist die einzige strukturelle Ergaenzung. Die bestehenden `/lehrer` und `/tanzschulen` bleiben als eigenstaendige Listing-Seiten erhalten (SEO-Wert, Direktlinks), werden aber ueber `/szene` als Hub zusammengefasst.

**Keine neue Seite fuer FAQ.** Die haeufigsten Fragen ("Was ziehe ich an?", "Brauche ich einen Partner?", "Was kostet das?") gehoeren auf die Kurse-Seite, nicht auf eine eigene FAQ-Seite. Wer nach Kursen sucht, hat diese Fragen. Dort beantwortet, spart ein Klick.

**Keine eigene "Fuer Tanzlehrer"-Seite.** Die Kontaktseite hat bereits Karten fuer "Als Lehrer:in mitmachen" und "Tanzschule anmelden". Das reicht fuer Phase 1. Wenn mehr als 5 Tanzlehrer:innen auf der Plattform sind, lohnt sich eine dedizierte Seite -- vorher nicht.

---

## 3. Detaillierte Seitenbeschreibungen

### 3.1 Startseite (`/`)

**Zweck:** Erster Eindruck. In 5 Sekunden muss klar sein: Was ist das? Was kann ich hier? Warum sollte ich bleiben?
**Zielgruppe:** Primaer Neugierige ("Salsa Paderborn" gegoogelt), sekundaer Aktive (checken was laeuft).
**SEO-Title:** `Salsa Paderborn -- Partys, Kurse & Events fuer Salsa, Bachata & Kizomba`
**Meta-Description:** `Was laeuft diese Woche in Paderborn? Finde Salsa-Partys, Bachata-Kurse und Kizomba-Events in deiner Naehe. Dein Community-Portal fuer Latin Dance.` (158 Zeichen)

#### Sektionen (in dieser Reihenfolge):

**Sektion 1: Hero**
- Headline: "Salsa in Paderborn? Oh ja." (oder aequivalent -- kurz, selbstbewusst, ueberraschend)
- Subline: "Dein Community-Portal fuer Salsa, Bachata & Kizomba in Paderborn und Umgebung."
- Zwei CTA-Buttons: "Events entdecken" (primaer) + "Tanzen lernen" (sekundaer)
- Hintergrund: Foto oder Gradient (Phase 1: Gradient, spaeter echtes Foto)
- AENDERUNG: Die aktuelle Headline "Salsa Paderborn" als reiner Seitentitel ist verschenkt. Die Headline muss Emotion wecken, nicht nur den Seitennamen wiederholen. Der Seitenname steht bereits im Logo.

**Sektion 2: "Diese Woche"-Counter (NEU)**
- Drei Zaehler nebeneinander: "X Partys" / "X Kurstermine" / "X Events gesamt"
- Grosses Sansita-Zahlen in Salsa-Rot, Beschriftung darunter in Source Sans 3
- Technische Umsetzung: Zur Build-Zeit aus Sanity berechnet (Events mit Datum in der aktuellen Woche zaehlen). Statisch, wird bei jedem Build aktualisiert.
- WARUM: Die Research zeigt, dass Zahlen als Social Proof funktionieren. "3 Partys diese Woche" kommuniziert sofort: Hier ist was los. Das ist der wichtigste Beweis fuer Neugierige, dass die Szene lebt.
- HINWEIS: Wenn in einer Woche wenig los ist (0-1 Events), den Counter auf "Diesen Monat" umschalten oder die Sektion ausblenden. Leere Zaehler waeren kontraproduktiv.

**Sektion 3: Einstiegs-Weiche**
- Zwei Cards nebeneinander (Mobile: gestapelt):
  - "Ich will tanzen gehen" -- Link zu /events -- Bild/Icon: Party-Stimmung
  - "Ich will tanzen lernen" -- Link zu /kurse -- Bild/Icon: Kurs-Situation
- BESTEHT BEREITS, aber die aktuelle Umsetzung nutzt Emojis statt Bilder und hat zu generische Farben (Rosa/Gruen statt Brand-Farben). Empfehlung: Brand-Farben verwenden (Salsa-Rot fuer "tanzen gehen", Terracotta fuer "tanzen lernen"), spaeter echte Fotos ergaenzen.
- POSITION: Direkt nach dem Counter, nicht nach dem Hero. Der Counter beweist "hier ist was los", die Weiche leitet ins Handeln. Die Reihenfolge ist: Emotion (Hero) > Beweis (Counter) > Aktion (Weiche).

**Sektion 4: Naechste Events (Teaser)**
- 3 naechste Events als kompakte Karten (Datum, Titel, Ort, Kategorie-Badge)
- Link: "Alle Events anzeigen"
- BESTEHT BEREITS, funktioniert gut. Nur visuell an Brand Guide anpassen (Farben, Typografie, Card-Design laut Brand Guide Sektion 6).

**Sektion 5: Kurse (Teaser)**
- 2 naechste/empfohlene Kurse
- Link: "Alle Kurse & Workshops"
- Empfehlung: Anfaengerkurse bevorzugt anzeigen (Primaerzielgruppe = Neugierige)
- BESTEHT BEREITS, funktioniert gut. Query sortiert bereits Anfaenger zuerst -- korrekt.

**Sektion 6: Die Szene (Community-Teaser)**
- Ueberarbeitete Version der bestehenden "Community"-Sektion
- Statt drei generischen Karten (Lehrer, Tanzschulen, Mitmachen):
  - Kurzer Text: "X Tanzlehrer:innen und X Tanzschulen in Paderborn. Lerne die Szene kennen."
  - Link zu /szene
  - Optional: Kleiner Testimonial-Zitat von einem Taenzer (wenn vorhanden)
- WARUM AENDERUNG: Die aktuelle Version hat 3 Karten mit Emojis und generischen Texten. Das ist "Platzhalter-Content". Ein kurzer, konkreter Text mit echten Zahlen wirkt staerker.

**Was von der aktuellen Startseite ENTFAELLT:**
- Nichts wird entfernt, nur umgeordnet und ergaenzt. Die Einstiegs-Weiche und die Teaser bleiben. Der Counter kommt hinzu. Die Community-Sektion wird praegnanter.

---

### 3.2 Events (`/events`)

**Zweck:** Alle kommenden Events auf einen Blick. Schnell scannen: Was, wann, wo.
**Zielgruppe:** Aktive Taenzer (wiederkehrend) und Neugierige (via Startseite).
**SEO-Title:** `Salsa Events in Paderborn -- Partys, Festivals & Social Dances`
**Meta-Description:** `Alle Salsa-, Bachata- und Kizomba-Events in Paderborn und Umgebung. Partys, Social Dances, Festivals -- immer aktuell, auf einen Blick.` (149 Zeichen)

**Seitenstruktur:**
1. Page Header: "Events & Partys" + Beschreibung
2. Filter-Chips (NEU): "Alle | Partys | Workshops | Festivals" -- Client-Side JS, blendet Karten ein/aus
3. Event-Liste: Chronologisch, alle kommenden Events
4. CTA unten: "Du veranstaltest ein Event? Sag uns Bescheid." (Link zu /kontakt)

**Zu den Fragen aus dem Auftrag:**

**Sollen Events und Kurse zusammengelegt werden?**
NEIN. Die Trennung bleibt, und zwar aus drei Gruenden:

1. **Unterschiedliche Nutzerintention.** Wer eine Party sucht, will nicht durch Anfaengerkurse scrollen. Wer einen Kurs sucht, interessiert sich nicht fuer die Samstagsparty. Die Einstiegs-Weiche auf der Startseite macht diese Trennung zum Feature, nicht zum Bug.

2. **SEO.** Zwei separate Seiten ranken fuer zwei separate Suchintentionen: "Salsa Party Paderborn" vs. "Salsa Kurs Paderborn". Eine kombinierte Seite wuerde fuer keines von beiden optimal ranken.

3. **Technische Einfachheit.** Eine kombinierte Ansicht mit Filtern klingt elegant, erfordert aber entweder Client-Side JS fuer die gesamte Filterung (schlecht fuer SEO, da Google den ungefilterten Zustand sieht) oder viele statisch generierte Filterkombinationen (Build-Komplexitaet). Getrennte Seiten sind bei einer Static Site die sauberere Loesung.

**Aber:** Auf der Events-Seite empfehle ich einfache Client-Side Filter-Chips (Party / Workshop / Festival), die die bestehende Liste per CSS-Klassen ein-/ausblenden. Das ist technisch trivial (20 Zeilen JS), verbessert die UX fuer Stammbesucher, und schadet SEO nicht (alle Events bleiben im HTML). Gleiches Prinzip fuer die Kurse-Seite (Anfaenger / Mittelstufe / Fortgeschritten).

---

### 3.3 Kurse (`/kurse`)

**Zweck:** Neugierige zum Anfangen bewegen. Schwellenangst nehmen. Konkretes Angebot zeigen.
**Zielgruppe:** Primaer Neugierige und Anfaenger, sekundaer Aktive die neuen Kurs suchen.
**SEO-Title:** `Salsa Kurs Paderborn -- Anfaenger bis Fortgeschrittene | Bachata & Kizomba`
**Meta-Description:** `Salsa tanzen lernen in Paderborn. Anfaengerkurse, Workshops und Bootcamps fuer Salsa, Bachata und Kizomba. Kein Partner noetig. Jetzt Kurs finden!` (154 Zeichen)

**Seitenstruktur:**
1. Page Header: "Tanzen lernen in Paderborn" (nicht "Kurse & Workshops" -- spricht die Suchintention an)
2. FAQ-Block (NEU, oberhalb der Kursliste): 3-4 haeufige Fragen, kurz beantwortet
   - "Brauche ich einen Tanzpartner?" -- "Nein. Die meisten Kurse funktionieren ohne festen Partner."
   - "Was ziehe ich an?" -- "Bequeme Kleidung, saubere Schuhe. Tanzschuhe sind optional."
   - "Was kostet ein Kurs?" -- "Die meisten Kurse kosten X-Y Euro pro Monat. Preise stehen bei jedem Kurs."
   - Diese Fragen kommen GARANTIERT, wenn jemand "Salsa Kurs Paderborn" googelt. Hier beantwortet, spart eine separate FAQ-Seite und nimmt Schwellenangst.
3. Tanzstil-Erklaerung: Salsa / Bachata / Kizomba -- BESTEHT BEREITS, gut gemacht, bleibt.
4. Kursliste: Sortiert nach Level (Anfaenger zuerst -- BESTEHT BEREITS, korrekt)
5. Filter-Chips (optional): "Alle | Anfaenger | Mittelstufe | Fortgeschritten" -- analog zu Events

---

### 3.4 Szene (`/szene`) -- NEU

**Zweck:** Hub-Seite, die die Community vorstellt. Lehrer:innen, Tanzschulen, und was Salsa Paderborn als Portal ist.
**Zielgruppe:** Neugierige die wissen wollen "Was ist das hier?", Anbieter die sich praesentieren wollen.
**SEO-Title:** `Salsa Szene Paderborn -- Tanzlehrer:innen, Tanzschulen & Community`
**Meta-Description:** `Die Salsa-Szene in Paderborn: Tanzlehrer:innen, Tanzschulen und eine wachsende Community. Lerne die Menschen kennen, die Paderborn zum Tanzen bringen.` (155 Zeichen)

**Seitenstruktur:**
1. Page Header: "Die Szene in Paderborn"
2. Ueber uns: 2-3 kurze Absaetze, was Salsa Paderborn ist, warum es existiert, wer dahintersteht. Persoenlich, ehrlich, keine Marketing-Sprache. (Aktuell versteckt als kleiner Abschnitt auf der Kontaktseite -- verdient mehr Sichtbarkeit.)
3. Lehrer:innen-Teaser: Erste 3-4 Lehrer:innen als Cards, Link zu /lehrer
4. Tanzschulen-Teaser: Erste 2-3 Tanzschulen als Cards, Link zu /tanzschulen
5. CTA: "Du bist Teil der Szene? Werde sichtbar." (Link zu /kontakt)

**Warum eine Hub-Seite statt separater Nav-Punkte?**
- Aktuell haben wir 1 Lehrerin und 1 Tanzschule. Zwei separate Nav-Punkte fuer je eine Karte sind unverhältnismaessig.
- Wenn die Szene waechst (5+ Lehrer, 3+ Schulen), koennen die Listing-Seiten (/lehrer, /tanzschulen) spaeter wieder in die Hauptnavigation aufsteigen.
- Die Hub-Seite ist auch der natuerliche Ort fuer "Ueber uns"-Inhalte, ohne eine extra Seite zu brauchen.

---

### 3.5 Lehrer:innen (`/lehrer`) -- BLEIBT

Bleibt als eigenstaendige Listing-Seite erhalten. Wird ueber /szene und Footer verlinkt, aber nicht mehr in der Hauptnavigation. Inhalt und Struktur sind gut, nur visuell an Brand Guide anpassen.

### 3.6 Tanzschulen (`/tanzschulen`) -- BLEIBT

Gleiche Logik wie Lehrer:innen. Bleibt erhalten, wird ueber /szene und Footer verlinkt.

---

### 3.7 News (`/news`)

**Zweck:** SEO-Content, Community-Updates, Szene-Neuigkeiten.
**Zielgruppe:** Alle drei Zielgruppen, aber hauptsaechlich SEO-getrieben.
**SEO-Title:** `News aus der Salsa-Szene Paderborn -- Updates, Berichte & Tipps`
**Meta-Description:** `Neuigkeiten aus der Salsa-Szene in Paderborn. Event-Berichte, Szene-Updates und Tipps fuer Taenzer:innen. Immer aktuell.` (129 Zeichen)

Keine strukturelle Aenderung noetig. Funktioniert gut.

---

### 3.8 Kontakt (`/kontakt`)

**Zweck:** Niedrigschwelliger Erstkontakt fuer alle Zielgruppen. Besonders wichtig fuer Anbieter.
**Zielgruppe:** Neugierige mit Fragen, Anbieter die mitmachen wollen.
**SEO-Title:** `Kontakt -- Salsa Paderborn`
**Meta-Description:** `Fragen zur Salsa-Szene in Paderborn? Event eintragen, als Tanzlehrer:in mitmachen oder einfach Hallo sagen. Schreib uns!` (126 Zeichen)

**Aenderung:** Den "Ueber uns"-Block von der Kontaktseite auf /szene verschieben. Die Kontaktseite soll rein funktional sein: Wie erreiche ich wen, wofuer.

---

### 3.9 Impressum & Datenschutz

**Status:** Noch nicht gebaut. Wartet auf Nadia (Adresse, Rechtsform).
**Keine eigenen Nav-Punkte.** Nur im Footer verlinkt.

---

## 4. User Journeys

### Journey 1: "Die Neugierige" (Primaerzielgruppe)

**Szenario:** Lisa, 32, hat im Urlaub Salsa getanzt und googelt jetzt "Salsa Paderborn".

```
Google-Suche "Salsa Paderborn"
    |
    v
STARTSEITE
    |-- Sieht Hero: "Salsa in Paderborn? Oh ja."
    |-- Sieht Counter: "3 Partys, 5 Kurstermine diese Woche"
    |-- Denkt: "Da ist ja wirklich was los!"
    |
    v
EINSTIEGS-WEICHE
    |-- Klickt: "Ich will tanzen lernen"
    |
    v
/KURSE
    |-- Liest FAQ: "Brauche ich einen Partner? Nein."
    |-- Sieht Anfaengerkurs: "Salsa fuer Anfaenger, Mittwoch 19 Uhr"
    |-- Klickt auf den Kurs
    |
    v
/KURSE/[SLUG]
    |-- Sieht Details: Wann, wo, Lehrerin, Preis
    |-- Findet Link zur Tanzschule oder Kontakt der Lehrerin
    |
    v
AKTION: Meldet sich zum Kurs an (extern) oder schreibt eine E-Mail
```

**Klicks bis zur Aktion: 3** (Startseite > Kurse > Kurs-Detail)
**Kritischer Moment:** Der FAQ-Block auf /kurse. Wenn Lisa dort ihre Schwellenangst-Fragen beantwortet findet, bleibt sie. Wenn nicht, bounced sie.

---

### Journey 2: "Der Stammtaenzer" (Sekundaerzielgruppe)

**Szenario:** Marco, 28, tanzt seit 2 Jahren und checkt freitags, wo am Wochenende Party ist.

```
Direktaufruf salsa-paderborn.de (Lesezeichen)
    |
    v
STARTSEITE
    |-- Sieht Counter: "2 Partys dieses Wochenende"
    |-- Klickt: "Events entdecken" oder direkt "Events" in der Nav
    |
    v
/EVENTS
    |-- Scannt die Liste, sieht Samstag: "Salsa Night im Kulturwerk"
    |-- Klickt auf das Event
    |
    v
/EVENTS/[SLUG]
    |-- Sieht: 22 Uhr, DJ, Eintritt 8 Euro
    |
    v
AKTION: Weiss Bescheid, geht hin.
```

**Klicks bis zur Aktion: 2** (Startseite > Events oder Events > Detail)
**Kritischer Moment:** Die Event-Liste muss auf den ersten Blick scannbar sein. Datum, Titel, Ort -- mehr braucht Marco nicht. Badges (Party/Workshop/Festival) helfen beim schnellen Filtern.

---

### Journey 3: "Die Anbieterin" (Tertiaerzielgruppe)

**Szenario:** Sandra, Bachata-Lehrerin, hoert von der Plattform und will sich praesentieren.

```
Hoert von Salsa Paderborn (Mundpropaganda/Social Media)
    |
    v
STARTSEITE
    |-- Sieht: "Community-Portal" -- klar, keine Konkurrenz
    |-- Klickt "Szene" in der Navigation
    |
    v
/SZENE
    |-- Sieht bestehende Lehrer:innen und Tanzschulen
    |-- Sieht CTA: "Du bist Teil der Szene? Werde sichtbar."
    |-- Klickt auf "Kontakt"
    |
    v
/KONTAKT
    |-- Sieht Karte: "Als Lehrer:in mitmachen"
    |-- Schreibt E-Mail an lehrer@salsa-paderborn.de
    |
    v
AKTION: Nimmt Kontakt auf, wird eingetragen.
```

**Klicks bis zur Aktion: 3** (Startseite > Szene > Kontakt)
**Kritischer Moment:** Sandra muss sofort sehen, dass die Plattform neutral ist und sie als Anbieterin willkommen ist. Die Formulierung "Community-Portal" und der "Mitmachen"-CTA sind entscheidend.

---

### Journey 4: "Der Google-Sucher" (SEO-Journey)

**Szenario:** Jemand googelt "Salsa Party Paderborn Samstag".

```
Google-Suche "Salsa Party Paderborn Samstag"
    |
    v
/EVENTS (oder /events/[slug] bei spezifischem Treffer)
    |-- Google zeigt Rich Snippet mit Event-Datum und Ort (Schema.org/Event)
    |-- Nutzer sieht sofort: "Salsa Night, Sa 22 Uhr, Kulturwerk Paderborn"
    |-- Klickt auf das Ergebnis
    |
    v
/EVENTS oder /EVENTS/[SLUG]
    |-- Findet alle Infos
    |
    v
AKTION: Geht hin oder speichert die Seite.
```

**Kritisch:** Schema.org Event-Markup muss sauber implementiert sein, damit Google Rich Snippets anzeigt. Das ist noch offen (siehe Build-Log: "SEO-Optimierung" unchecked).

---

## 5. Aenderungen vs. Status Quo -- Zusammenfassung

### Was sich aendert:

| Bereich | Aktuell | Empfehlung | Aufwand | Prioritaet |
|---|---|---|---|---|
| **Navigation** | 7 Punkte inkl. "Start" | 5 Punkte, "Szene" statt Lehrer+Tanzschulen | Gering (Nav.astro anpassen) | Hoch |
| **Startseite: Counter** | Nicht vorhanden | "Diese Woche"-Counter als Social Proof | Mittel (Query + Komponente) | Hoch |
| **Startseite: Hero-Text** | "Salsa Paderborn" als Headline | Emotionaler Claim + Subline | Gering (Text aendern) | Hoch |
| **Startseite: Weiche** | Emojis + generische Farben | Brand-Farben, spaeter echte Fotos | Gering (CSS anpassen) | Mittel |
| **Neue Seite: /szene** | Nicht vorhanden | Hub fuer Lehrer + Tanzschulen + Ueber uns | Mittel (neue Page) | Mittel |
| **Kurse: FAQ-Block** | Nicht vorhanden | 3-4 Fragen oberhalb der Kursliste | Gering (statischer HTML-Block) | Hoch |
| **Events: Filter-Chips** | Nicht vorhanden | Client-Side Filter nach Kategorie | Gering (20 Zeilen JS) | Niedrig (Phase 1b) |
| **Kontakt: "Ueber uns" raus** | "Ueber uns"-Text auf Kontaktseite | Verschieben nach /szene | Gering (Text verschieben) | Niedrig |

### Was NICHT aendert:

- **Events und Kurse bleiben getrennt.** Keine zusammengelegte Kalender-Ansicht.
- **Alle bestehenden URLs bleiben erhalten.** /lehrer und /tanzschulen werden nicht entfernt, nur aus der Hauptnav genommen.
- **Die bestehenden Card-Komponenten bleiben.** EventCard, CourseCard, TeacherCard, SchoolCard, BlogCard -- funktionieren alle, brauchen nur visuelles Brand-Update.
- **Die Sanity-Schemas bleiben.** 5 Content-Typen (Event, Kurs, Lehrer:in, Tanzschule, Blog-Post) -- passt alles, keine Aenderung noetig.
- **Die GROQ-Queries bleiben.** Einzige Ergaenzung: Ein Query fuer den "Diese Woche"-Counter (Events mit Datum in der aktuellen Woche zaehlen).

### Was FEHLT (Eskalation an Andy):

1. **Texte fuer /szene brauchen Input von Nadia.** Die "Ueber uns"-Geschichte kann nicht frei erfunden werden. Wir brauchen: Wann hat die Szene angefangen? Wer sind die Kernmenschen? Was ist der Traum? Empfehlung: 3 Fragen an Nadia mailen, Antworten in eigenen Worten als Basis nehmen.

2. **FAQ-Antworten fuer die Kurse-Seite brauchen Recherche.** "Was kostet ein Kurs?" -- wir brauchen eine realistische Preisspanne aus der Paderborner Szene. Nadia kann das liefern.

3. **Fotos fehlen weiterhin.** Fuer den Hero, fuer die Einstiegs-Weiche, fuer Cards. Der Brand Guide beschreibt klar, welche Bildsprache gewuenscht ist. Aber ohne echte Fotos bleibt alles Platzhalter. Empfehlung: Nadia bitten, beim naechsten Event jemanden mit Smartphone zum Fotografieren zu schicken. 10 gute Handy-Fotos > 0 Stockfotos.

4. **Impressum und Datenschutz stehen noch aus.** Nadia muss virtuelle Geschaeftsadresse und Rechtsform klaeren. Ohne Impressum kein Live-Gang.

---

## 6. SEO-Grundlagen (fuer alle Seiten)

### Title-Tag-Schema

```
[Seitentitel] -- Salsa Paderborn
```

Beispiele:
- Startseite: `Salsa Paderborn -- Partys, Kurse & Events fuer Salsa, Bachata & Kizomba`
- Events: `Salsa Events in Paderborn -- Partys, Festivals & Social Dances`
- Kurse: `Salsa Kurs Paderborn -- Anfaenger bis Fortgeschrittene | Bachata & Kizomba`
- Szene: `Salsa Szene Paderborn -- Tanzlehrer:innen, Tanzschulen & Community`

### Strukturierte Daten (Schema.org)

- **Event-Detailseiten:** `schema.org/Event` mit name, startDate, endDate, location, description, offers
- **Kurs-Detailseiten:** `schema.org/Course` oder `schema.org/Event` (mit eventAttendanceMode)
- **Lehrer:innen-Detailseiten:** `schema.org/Person` mit jobTitle, worksFor
- **Tanzschulen:** `schema.org/LocalBusiness` mit address, telephone
- **Blog-Posts:** `schema.org/BlogPosting` mit author, datePublished
- **Alle Seiten:** `schema.org/WebSite` mit name und url auf der Startseite

### Open Graph (Social Media Shares)

Jede Seite braucht:
- `og:title` (gleich wie Title-Tag, ohne " -- Salsa Paderborn" Suffix)
- `og:description` (gleich wie Meta-Description)
- `og:image` (Default-Bild fuer Seiten ohne eigenes Bild, Eventbild fuer Event-Seiten)
- `og:type` ("website" fuer Hauptseiten, "article" fuer Blog)
- `og:url` (kanonische URL)

### Lokales SEO

- "Paderborn" in jeder H1 und jedem Title-Tag
- Google Business Profile fuer Salsa Paderborn anlegen (spaeter, wenn Adresse geklaert)
- Interne Verlinkung: Jede Seite verlinkt zurueck zur Startseite und zu verwandten Seiten

---

## 7. Bildkonzepte (pro Seite)

### Startseite

| Bild | Was zeigen | Wo | Format | Quelle Phase 1 |
|---|---|---|---|---|
| Hero-Hintergrund | Tanzpaar in Bewegung, warmes Licht, Social-Dance-Atmosphaere | Hero-Section, volle Breite | 16:9, min 1920px breit | Gradient als Platzhalter, spaeter echtes Foto |
| Einstiegs-Weiche links | Party-Stimmung: Tanzflaeche, Lichter, Menschen | Card-Bild | 4:3 | Unsplash-Platzhalter |
| Einstiegs-Weiche rechts | Kurs-Situation: Lehrer erklaert, Schueler lachen | Card-Bild | 4:3 | Unsplash-Platzhalter |

### Events

| Bild | Was zeigen | Wo | Format | Quelle Phase 1 |
|---|---|---|---|---|
| Event-Card-Bilder | Eventspezifisch (Flyer, Venue, DJ) | Oben in jeder Card | 16:9 | Aus Sanity (Eventveranstalter liefern) |
| Fallback wenn kein Bild | Generisches Party-/Tanz-Bild | Card-Platzhalter | 16:9 | 1 gutes Standardbild |

### Kurse

| Bild | Was zeigen | Wo | Format | Quelle Phase 1 |
|---|---|---|---|---|
| Kurs-Card-Bilder | Tanzstil-spezifisch (Salsa-Paar, Bachata-Paar etc.) | Card-Bild | 4:3 | Aus Sanity oder Platzhalter |

### Lehrer:innen

| Bild | Was zeigen | Wo | Format | Quelle Phase 1 |
|---|---|---|---|---|
| Portrait-Foto | Freundliches Portrait, kein gestelltes Businessfoto | Card + Detailseite | 1:1 quadratisch | Nadia liefert eigenes Foto, andere Lehrer:innen spaeter |

### Szene

| Bild | Was zeigen | Wo | Format | Quelle Phase 1 |
|---|---|---|---|---|
| Community-Bild | Gruppe von Taenzern, gemeinsames Lachen, Social-Atmosphere | Header oder Inline | 16:9 | Naechstes Event fotografieren |

---

## 8. Priorisierte Umsetzungsreihenfolge

Fuer den Astro Builder -- was zuerst, was spaeter:

**Sofort (vor Brand-Redesign):**
1. Navigation auf 5 Punkte reduzieren (Nav.astro)
2. Hero-Text auf der Startseite aendern (index.astro)
3. FAQ-Block auf der Kurse-Seite ergaenzen (kurse/index.astro)

**Mit Brand-Redesign:**
4. "Diese Woche"-Counter auf Startseite bauen (neuer Query + Komponente)
5. Einstiegs-Weiche visuell auf Brand-Farben umstellen
6. /szene-Seite erstellen
7. Alle Cards an Brand Guide anpassen (Farben, Typografie, Schatten)
8. Footer um Impressum/Datenschutz-Links ergaenzen

**Phase 1b (nach Live-Gang):**
9. Filter-Chips auf Events- und Kurse-Seiten
10. Schema.org strukturierte Daten fuer alle Content-Typen
11. Open Graph Tags
12. Echte Fotos einpflegen (wenn Nadia Material liefert)
