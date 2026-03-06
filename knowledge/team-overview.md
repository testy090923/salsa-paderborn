# Agenten-Team & Skills – Übersicht für den Project Builder

> Stand: März 2026, basierend auf dem Salsa-Paderborn-Projekt (statische Website mit Astro + Sanity CMS für einen lokalen Verein).

---

## Main Agent: Agency Director

Der zentrale Orchestrator. Denkt strategisch mit, delegiert an Sub-Agents, prüft deren Output, challenget den Auftraggeber. Kein reiner Dispatcher – trifft eigenständig Entscheidungen und hält den roten Faden (Marke, Tonalität, Nutzererlebnis).

**Kommuniziert** auf Deutsch mit dem Auftraggeber, Code/Commits auf Englisch.

**Modus:** Standard = Rücksprache bei strategischen Fragen. Kann auf "Mach einfach" umgestellt werden.

---

## Sub-Agents

### 1. Discovery ("Der Kundenversteher")
- **Was:** Meeting-Begleitung, Anforderungserfassung, Fragenformulierung
- **Wann:** Kundengespräche vorbereiten/begleiten, Meeting-Notizen verarbeiten
- **Besonderheit:** Kann als eigenständige direkte Session laufen (für Live-Meetings). Der Director schreibt dafür ein Briefing und empfiehlt Andy, eine separate Session zu starten.
- **Erfahrung:** Formuliert gut für nicht-technische Klienten. Muss manchmal gepusht werden, auch unbequeme Fragen zu stellen.
- **Genutzt:** Ja, in Session 1 für das Erstgespräch mit der Klientin.

### 2. Brand Strategist ("Der Markenarchitekt")
- **Was:** Positionierung, Zielgruppe, Messaging, Farbwelt, Typografie, Tone of Voice, Logo
- **Wann:** Grundlegende Markenentscheidungen, visuelle Richtung definieren
- **Erfahrung:** Liefert durchdachte, praxisnahe Ergebnisse. Kann zu theoretisch werden – braucht klare Grenzen ("Es ist eine Vereinswebsite, kein Rebranding von Nike"). Hat auch Wettbewerber-Recherche gemacht.
- **Genutzt:** Ja, für Brand Guide, Wettbewerber-Analyse, Logo-Wordmark.

### 3. Astro Builder ("Der Baumeister")
- **Was:** Technische Umsetzung – Komponenten, Layouts, Pages, Responsive, CMS-Integration, Deployment-Config
- **Wann:** Alles Technische, vom Setup bis zum Feature-Bau
- **Erfahrung:** Das Arbeitstier des Teams. Liefert sauber und schnell. Kann over-engineeren – muss manchmal an die Einfachheit erinnert werden. Hat QA-Fixes, Schema.org JSON-LD, und das komplette Redesign umgesetzt.
- **Genutzt:** Ja, am häufigsten. Mehrfach pro Session.

### 4. Content Architect ("Der Geschichtenerzähler")
- **Was:** Seitenstruktur, Texte, SEO, Bildkonzepte, User Journeys
- **Wann:** Inhalte planen, schreiben, optimieren
- **Erfahrung:** Hat die Sitemap und Informationsarchitektur überarbeitet (z.B. Nav von 7 auf 5 Punkte reduziert, Szene-Hub-Seite konzipiert). Kann sich in Details verlieren.
- **Genutzt:** Ja, für Sitemap-Redesign und Content-Strategie.

### 5. QA Reviewer ("Der Qualitätsfanatiker")
- **Was:** Accessibility (WCAG), Performance, Mobile, Cross-Browser, Lighthouse, Content-Review
- **Wann:** Nach Meilensteinen, vor Deployment
- **Erfahrung:** Hat einen umfassenden Report mit 15+ Findings geliefert (Farbkontraste, fehlender Skip-Link, OG-Tags, etc.). Nützlich, aber Findings müssen priorisiert werden – nicht alles muss Lighthouse 100 sein.
- **Genutzt:** Ja, einmal vor dem ersten echten Deployment.

---

## Skills (User-Slash-Commands)

### `/meeting`
- Startet den Meeting-Modus für Live-Kundenbegleitung
- Liest bestehendes Briefing, lässt Discovery Agent Fragen vorbereiten, wechselt in Echtzeit-Modus
- **Erfahrung:** Funktioniert gut für strukturierte Erstgespräche.

### `/zusammenfassung`
- Verarbeitet Meeting-Notizen zu strukturiertem Briefing
- Schreibt Ergebnisse in `client/brief.md` und `client/meeting-notes.md`
- Liefert Top-Fragen, nächste Schritte, Einschätzung ob genug Info zum Starten da ist
- **Erfahrung:** Gut für Nachbereitung.

### `/status`
- Zeigt Build-Fortschritt: Was steht, was fehlt, was blockiert
- Gleicht `build-log.md` mit tatsächlichem Code ab
- **Erfahrung:** Nützlich bei Sessionstart und nach längeren Pausen.

### `/deploy-check`
- Vollständige Deployment-Readiness-Prüfung
- Build-Test, QA-Review, rechtliche Checks (Impressum/Datenschutz), Config-Prüfung
- **Erfahrung:** Noch nicht als Skill genutzt (QA wurde manuell getriggert), aber die Logik ist solide.

---

## Was gut funktioniert hat

- **Parallele Delegation:** Brand Strategist + Content Architect gleichzeitig arbeiten lassen, Builder wartet auf deren Output.
- **Director als Qualitätsfilter:** Agent-Output prüfen, bevor er übernommen wird. Umlaute, Tonalität, Konsistenz.
- **Dateien als Gedächtnis:** `client/brief.md`, `progress/build-log.md`, `progress/decisions.md` – alles Wichtige persistiert in Dateien, nicht nur im Chat.
- **Direkte Sessions für Discovery:** Bei Live-Meetings den Discovery Agent in einer eigenen Session laufen lassen, statt den Director-Kontext zu belasten.

## Was verbessert werden könnte

- **Umlaut-Problem:** Sub-Agents schreiben konsistent `ae/oe/ue` statt `ä/ö/ü`. Muss in jedem Briefing explizit erwähnt UND nach jedem Agent-Run geprüft werden.
- **Brand Strategist zu breit:** Hat teilweise Arbeit gemacht, die eher Content Architect wäre (Seitenstruktur). Klarere Grenzen setzen.
- **QA Reviewer könnte früher kommen:** Nicht erst vor Deployment, sondern schon nach dem ersten visuellen Meilenstein – spart Nacharbeit.
- **Deploy-Check Skill:** Wurde nie als `/deploy-check` genutzt – stattdessen manuell QA getriggert und Build getestet. Eventuell Skills enger an den tatsächlichen Workflow binden.
- **Content Architect untergenutzt:** Hat Struktur gemacht, aber keine Texte geschrieben. Könnte stärker für SEO-Texte, Microcopy, und CTA-Optimierung eingesetzt werden.
