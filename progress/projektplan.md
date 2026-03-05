# Projektplan – salsa-paderborn.de

> Erstellt: 2026-03-03 | Letzte Aktualisierung: 2026-03-05 | Ziel: Live bis Mai 2026

## Projekt-Kontext (für neue Sessions)

**Was ist das?** Ein lokales Community-Portal für die Salsa-Szene in Paderborn und Umgebung. NICHT eine Vereinswebsite für Salsa Pasión e.V. – sondern eine neutrale Plattform für ALLE Tanzschulen, Lehrer:innen und Events der Region.

**Wer ist beteiligt?**
- **Nadia** – Projektinitiatorin, Vorstand Salsa Pasión e.V., erste Tanzlehrerin auf der Plattform. Technisch nicht versiert. Muss niederschwellig an Themen herangeführt werden.
- **Andy** – Coach und Berater für Nadia. Kennt sie persönlich seit langem, ist selbst Tänzer in der Szene. Führt das Projekt mit Claude als Agentur-Partner.
- **Pflege-Person** – Noch nicht bestimmt. Nadia hat Kandidaten, ist aber noch nicht fix. Soll Events und Inhalte pflegen.

**Beziehungsdynamik:** Andy und Nadia kennen sich gut. Kein Agentur-Klient-Verhältnis im klassischen Sinne, eher freundschaftliche Beratung. Andy berät strategisch (Branding, Positionierung, Technik), Nadia entscheidet. Andy handelt technisch eigenständig.

**Domain:** salsa-paderborn.de (gesichert)
**Technik:** Astro + Sanity CMS + Netlify
**Bezahlung:** Noch ungeklärt

---

## Wo wir stehen (Stand: 2026-03-05)

### ✅ Erledigt
- Meeting 1 mit Nadia (2026-03-03): Briefing, Scope, Zielgruppen definiert
- Astro-Projekt aufgesetzt mit allen Seiten
- **Sanity CMS komplett integriert** (5 Content-Typen, Studio unter /studio, Seed-Script)
- 12 Seiten gebaut (Homepage, Events, Kurse, Lehrer, Tanzschulen, News, Kontakt – je Listing + Detail)
- Wiederverwendbare Komponenten (6 Cards + SanityImage)
- Demo-Content in Sanity (1 Schule, 1 Lehrerin, 4 Events, 3 Kurse, 1 Blog-Post)
- Dev-Server läuft lokal auf Port 4510

### 🔲 Offen – Nächste Schritte
1. **Brand Guide** – Farben, Typo, Logo, Tonalität. Aktuell Prototyp-Design. Muss VOR dem nächsten Nadia-Termin stehen.
2. **Neues Prototyp-Design** – Nadia soll beim nächsten Meeting etwas sehen, das "echt" wirkt, nicht wie ein Wireframe.
3. **Impressum + Datenschutz** – Blockiert durch Nadias Adressfrage und Steuerberater-Klärung.
4. **SEO-Grundlagen** – Meta-Tags, Open Graph, strukturierte Daten (Schema.org).
5. **Deployment auf Netlify** – Domain verbinden, Build Hook + Sanity Webhook.
6. **QA** – Accessibility, Mobile, Performance, Lighthouse.
7. **Nadia onboarden** – Sanity-Zugang geben, Kurzanleitung schreiben.

### 🚫 Blockiert durch Nadia
- **Impressum-Adresse:** Will keine Privatadresse. Muss virtuelle Geschäftsadresse finden.
- **Rechtsform:** Wer betreibt salsa-paderborn.de? Empfehlung: Nadia als Freiberuflerin. Muss mit Steuerberater klären.
- **Steuerliche Frage:** Website bewirbt indirekt Nadias Kurse. Relevant als Freiberufler-Werbung?
- **Pflege-Person:** Wer macht das? Kandidaten vorhanden, nicht fix.
- **Foto-/Bildmaterial:** Woher nehmen? Stockfotos, eigene, AI?

---

## Nächster Meilenstein: Meeting 17.03.2026 (vor Ort im Café)

### Was Nadia liefern soll:
- [ ] Referenz-Websites (Design-Inspiration)
- [ ] Eigenes Profil: Foto, Bio, Kursangebot
- [ ] Daten zu Salsa Pasión als Tanzschule
- [ ] Erste echte Events als Probe-Daten
- [ ] 2-3 andere Tanzlehrer:innen aus der Region + deren Infos

### Was Andy liefern soll:
- [x] CMS-Lösung konzipiert und umgesetzt (Sanity) ✅
- [x] Seiten auf Datenbank-Lösung umgestellt ✅
- [ ] Brand Guide (Farben, Typo, Tonalität) – damit Design nicht mehr "Wireframe" wirkt
- [ ] Neues visuelles Design, das Nadia ein Gefühl für die fertige Seite gibt

---

## Phasenplan (aktualisiert)

### Phase 1: Fundament – KW 10-12 (bis ~20. März)
| Aufgabe | Status | Blockiert durch |
|---------|--------|----------------|
| Brand Guide: Farben, Typo, Tonalität | **Offen** | – |
| Seitenstruktur & Navigation | ✅ Done | – |
| Customer Journeys (tanzen gehen vs. lernen) | ✅ Done (in Seitenstruktur umgesetzt) | – |
| Design-Mockup Startseite (im Browser) | **Offen** (abhängig von Brand Guide) | Brand Guide |
| CMS-Lösung konzipieren + umsetzen | ✅ Done (Sanity) | – |

**Meilenstein:** Nadia sieht die Startseite im Browser und sagt "Ja, so soll das aussehen."

### Phase 2: Content & Profile – KW 13-16 (April)
| Aufgabe | Status | Blockiert durch |
|---------|--------|----------------|
| Texte schreiben (Startseite, Über uns, etc.) | Offen | Brand Guide (Tonalität) |
| Nadias Profil mit echten Daten | Offen | Nadia (Foto, Bio) |
| Echte Events einpflegen | Offen | Nadia (Eventdaten) |
| Bildkonzept umsetzen | Offen | Entscheidung Stockfotos/eigene/AI |
| SEO-Grundlagen | Offen | – |
| Weitere Lehrer:innen-Profile | Offen | Nadia (muss Leute gewinnen) |

### Phase 3: Feinschliff & Go-Live – KW 17-18 (Ende April/Mai)
| Aufgabe | Status | Blockiert durch |
|---------|--------|----------------|
| QA: Accessibility, Performance, Mobile | Offen | – |
| Impressum & Datenschutz | Offen | Nadia (Adresse, Rechtsform) |
| Domain verbinden (DNS → Netlify) | Offen | Nadia (Provider-Zugang) |
| Netlify Deployment + Webhook | Offen | – |
| Sanity-Onboarding für Nadia | Offen | – |
| Finale Freigabe | Offen | Nadia |
| Go-Live 🚀 | Offen | Alles oben |

---

## Nadia-Abhängigkeiten

| Was | Wann nötig | Blockiert | Status |
|-----|-----------|-----------|--------|
| Feedback Brand Guide | Phase 1 (vor 17.03.) | Design | Offen |
| Feedback Design-Mockup | Phase 1 (am 17.03.) | Phase 2 | Offen |
| Foto + Bio für ihr Profil | Phase 2 | Profil | Offen – angefragt für 17.03. |
| Liste aktuelle Events in PB | Phase 2 | Echte Inhalte | Offen – angefragt für 17.03. |
| Eigene Fotos (falls vorhanden) | Phase 2 | Bildkonzept | Offen |
| Steuerberater-Klärung (Rechtsform) | Phase 3 | Impressum | Offen |
| Virtuelle Geschäftsadresse | Phase 3 | Impressum | Offen |
| Domain-Provider-Zugangsdaten | Phase 3 | Go-Live | Offen |
| 2-3 weitere Lehrer:innen | Phase 2 | Plattform-Wachstum | Offen – angefragt für 17.03. |
| Finale Freigabe | Phase 3 | Go-Live | Offen |

---

## Offene strategische Fragen

1. **Logo:** Selbst gestalten (mit Agents) oder extern vergeben?
2. **Fotos:** Stockfotos, AI-generiert, eigenes Material, oder Mix?
3. **Gemeinnützigkeit:** Läuft die Seite über Salsa Pasión e.V. oder privat über Nadia? Steuerberater muss ran.
4. **Kooperationsmodell:** Wie genau werden andere Tanzschulen eingebunden? (Phase 2)
5. **Bestehende Salsa Pasión Website:** URL? Was ist drauf? Wie verlinken wir?
6. **Andere Veranstalter:** Wer ist noch aktiv in Paderborn? Einbinden?

---

## Zeitstrahl (aktualisiert)

```
März                    April                   Mai
|--- Phase 1 ----------|                        |
  Brand Guide, Design    |--- Phase 2 ---------|
  Meeting 17.03.           Content, Profile, SEO
                                    |--- Phase 3 --|
                                    QA, Deployment
                                                🚀 LIVE
```
