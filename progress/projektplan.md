# Projektplan – salsa-paderborn.de

> Erstellt: 2026-03-03 | Ziel: Live bis Mai 2026

## Arbeitsweise
- **Andy** macht fast alles (mit Agents), Nadia gibt Feedback
- **Kommunikation:** Mix aus Treffen + async Feedback
- **Technik:** Andy handelt alles eigenständig (inkl. Domain/DNS)
- **Bezahlung:** Wird noch geklärt

---

## Nächster Meilenstein: Meeting 17.03.2026
Nadia soll bis dahin: Referenz-Websites, Profil-Daten, Tanzschul-Daten, erste Events, evtl. 2-3 weitere Lehrer:innen.
Andy soll bis dahin: CMS/Datenbank-Lösung konzipiert, neues Prototyp-Design steht.

---

## Phase 1: Fundament (KW 10-11 · März)
> Ziel: Marke steht, Struktur steht, Nadia hat einmal "Ja" gesagt

| # | Aufgabe | Wer | Nadia-Involvement | Status |
|---|---------|-----|-------------------|--------|
| 1.1 | Brand Guide: Farben, Typo, Tonalität, Logo-Richtung | Andy + Brand Strategist | Feedback & Freigabe | offen |
| 1.2 | Seitenstruktur & Navigation finalisieren | Andy + Content Architect | Feedback | offen |
| 1.3 | Customer Journeys definieren (tanzen gehen vs. lernen) | Andy + Content Architect | Feedback | offen |
| 1.4 | Design-Mockup Startseite (im Browser, nicht Figma) | Andy + Builder | Freigabe | offen |

**Meilenstein:** Nadia sieht die Startseite im Browser und sagt "Ja, so soll das aussehen."

**Nadia-Termin nötig:** 1x Feedback-Runde zum Brand Guide + Design

---

## Phase 2: Grundgerüst (KW 12-14 · März/April)
> Ziel: Alle Seiten existieren, Events können eingepflegt werden

| # | Aufgabe | Wer | Nadia-Involvement | Status |
|---|---------|-----|-------------------|--------|
| 2.1 | Astro-Projekt sauber aufsetzen (Layouts, Komponenten, Styles) | Andy + Builder | Keine | offen |
| 2.2 | Event-System bauen (Content Collections, Event-Karten) | Andy + Builder | Keine | offen |
| 2.3 | Kurs-/Workshop-System bauen | Andy + Builder | Keine | offen |
| 2.4 | LehrerInnen-Profil-Template bauen | Andy + Builder | Keine | offen |
| 2.5 | Alle Seiten anlegen (Startseite, Events, Kurse, LehrerInnen, Kontakt) | Andy + Builder | Keine | offen |
| 2.6 | Navigation & Footer | Andy + Builder | Keine | offen |
| 2.7 | Responsive / Mobile First | Andy + Builder | Keine | offen |

**Meilenstein:** Website funktioniert technisch komplett, aber mit Platzhalter-Content.

**Nadia-Termin nötig:** Keiner – Andy baut durch.

---

## Phase 3: Content & Profile (KW 15-16 · April)
> Ziel: Echte Inhalte drin, Nadia als erste Lehrerin präsentiert

| # | Aufgabe | Wer | Nadia-Involvement | Status |
|---|---------|-----|-------------------|--------|
| 3.1 | Texte schreiben: Startseite, Über uns, etc. | Andy + Content Architect | Feedback | offen |
| 3.2 | Nadias LehrerInnen-Profil erstellen | Andy | Nadia liefert: Foto, Bio-Infos, Kursangebot | offen |
| 3.3 | Erste echte Events einpflegen | Andy | Nadia hilft: Welche Events laufen? | offen |
| 3.4 | Bildkonzept umsetzen (Stockfotos / eigene Fotos / Platzhalter) | Andy | Nadia: eigene Fotos falls vorhanden | offen |
| 3.5 | SEO-Grundlagen: Meta-Tags, strukturierte Daten, semantisches HTML | Andy + Builder | Keine | offen |

**Meilenstein:** Die Website sieht "echt" aus – nicht mehr wie ein Prototyp.

**Nadia-Termin nötig:** 1x für Profil-Infos + Content-Feedback. Plus: Klärung Fotomaterial.

---

## Phase 4: Feinschliff & Go-Live (KW 17-18 · Ende April/Mai)
> Ziel: Live auf salsa-paderborn.de

| # | Aufgabe | Wer | Nadia-Involvement | Status |
|---|---------|-----|-------------------|--------|
| 4.1 | QA: Accessibility, Performance, Mobile, Lighthouse | Andy + QA Reviewer | Keine | offen |
| 4.2 | Impressum & Datenschutz | Andy | Nadia: Adresse, Rechtsform (Steuerberater!) | offen |
| 4.3 | Domain verbinden (DNS → Netlify) | Andy | Nadia: Domain-Provider-Zugang | offen |
| 4.4 | Netlify Deployment einrichten | Andy + Builder | Keine | offen |
| 4.5 | Finale Freigabe durch Nadia | Andy | GO/NO-GO Entscheidung | offen |
| 4.6 | Go-Live | Andy | 🎉 | offen |

**Meilenstein:** salsa-paderborn.de ist live.

**Nadia-Termin nötig:** 1x finale Freigabe. Plus: Impressum-Daten + Domain-Zugang.

---

## Nadia-Abhängigkeiten (was sie liefern MUSS)

| Was | Wann nötig | Blockiert |
|-----|-----------|-----------|
| Feedback Brand Guide | Phase 1 | Alles danach |
| Feedback Design-Mockup | Phase 1 | Phase 2 |
| Foto + Bio für ihr Profil | Phase 3 | Ihr LehrerInnen-Profil |
| Liste aktuelle Events in PB | Phase 3 | Echte Inhalte |
| Eigene Fotos (falls vorhanden) | Phase 3 | Bildkonzept |
| Steuerberater-Klärung (Rechtsform, Impressum) | Phase 4 | Impressum, Go-Live |
| Domain-Provider-Zugangsdaten | Phase 4 | Go-Live |
| Finale Freigabe | Phase 4 | Go-Live |

---

## Offene Entscheidungen (für Andy)

1. **Logo:** Selbst gestalten (mit Agents) oder extern vergeben?
2. **Fotos:** Stockfotos, AI-generiert, eigenes Material, oder Mix?
3. **Content-Pflege nach Go-Live:** Wie pflegt die Pflege-Person Events ein? Direkt in Markdown/Git? Oder brauchen wir ein CMS?
4. **Hosting:** Netlify Free Tier reicht vermutlich – bestätigen.

---

## Zeitstrahl

```
März          April              Mai
|-- Phase 1 --|-- Phase 2 -------|
               |-- Phase 3 ------|
                          |-- Phase 4 --|
                                     🚀 LIVE
```
