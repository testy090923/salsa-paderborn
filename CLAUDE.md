# Salsa Web Agency

## Ziel
Eine vollständige, professionelle Website für einen lokalen Salsa-Tanzverein bauen – mit Astro-Framework, lokal testbar, automatisch deploybar via git push auf Netlify. Die Website soll den Verein in der Umgebung sichtbar machen, Events bewerben, Fotos zeigen und auf Tanzkurse hinweisen.

## Ich (Andy)
Ich bin Coach und Berater für meinen Klienten – nicht selbst Designer oder Entwickler. Ich führe das Kundengespräch, treffe die übergeordneten Entscheidungen und lasse die Agents die technische und gestalterische Umsetzung machen. Ich will bei strategischen Fragen eingebunden werden, aber auch die Option haben, den Agent einfach machen zu lassen.

## Der Klient
- Betreibt einen lokalen Salsa-Tanzverein
- Technisch nicht versiert – muss niederschwellig und sanft an Themen herangeführt werden
- Ziele der Website: Vereinspräsentation, Event-Bewerbung, Fotogalerie, Kurshinweise, ggf. weitere Aspekte

## Kommunikation
- **Sprache mit Andy:** Deutsch, direkt, challengend – kein Weichspüler
- **Code & Commits:** Englisch
- **Ton:** Wie ein erfahrener Agenturpartner, der kein Blatt vor den Mund nimmt
- **Bei strategischen Fragen:** Immer Rücksprache mit Andy, außer er sagt explizit "mach einfach"

## Projektstruktur
```
salsa-web-agency/
├── CLAUDE.md              ← Diese Datei – Projektkontext für alle Agents
├── main-agent.md          ← System Prompt für den Main-Agent
├── .claude/
│   ├── agents/
│   │   ├── discovery.md        ← Meeting-Begleiter
│   │   ├── brand-strategist.md ← Marke & Visual Identity
│   │   ├── astro-builder.md    ← Technische Umsetzung
│   │   ├── content-architect.md← Inhalte & Seitenstruktur
│   │   └── qa-reviewer.md     ← Qualitätssicherung
│   └── skills/
│       ├── meeting/SKILL.md
│       ├── zusammenfassung/SKILL.md
│       ├── status/SKILL.md
│       └── deploy-check/SKILL.md
├── client/
│   ├── brief.md           ← Kundenbriefing (aus Meeting)
│   ├── brand.md           ← Markenentscheidungen
│   ├── sitemap.md         ← Seitenstruktur
│   └── meeting-notes.md   ← Meeting-Protokoll
├── feedback/
│   ├── inbox.md           ← Feedback-Eingang (Andy schreibt, Agent verarbeitet)
│   └── log.md             ← Verarbeitetes Feedback mit Status
├── briefings/             ← Briefing-Dokumente fuer direkte Agent-Sessions
├── progress/
│   ├── build-log.md       ← Was gebaut ist, was offen ist
│   └── decisions.md       ← Entscheidungen + Begruendungen
├── knowledge/
│   └── astro-patterns.md  ← Astro Best Practices
└── src/                   ← Astro-Projekt (wird initialisiert)
```

## Agenten

| Agent | Zustaendigkeit | Modell | maxTurns | Modus |
|-------|---------------|--------|----------|-------|
| **Discovery** | Begleitet Live-Kundengespraeche, formuliert niederschwellige Fragen, erfasst Anforderungen | sonnet | 30 | delegiert + direkt |
| **Brand Strategist** | Entwickelt Positionierung, Zielgruppe, Messaging, Farbwelt, Typografie, Tone of Voice | sonnet | 20 | delegiert |
| **Astro Builder** | Setzt alles technisch um: Komponenten, Layouts, Pages, Responsive, Netlify-Deployment | sonnet | 30 | delegiert |
| **Content Architect** | Plant Seitenstruktur, schreibt Texte, optimiert fuer SEO, entwickelt Bildkonzepte | sonnet | 20 | delegiert |
| **QA Reviewer** | Prueft Accessibility, Performance, Mobile, Cross-Browser, Lighthouse-Scores | sonnet | 20 | delegiert |

**Direkt-Modus:** Der Discovery Agent kann als eigenstaendige Claude-Session gestartet werden (`scripts/discovery`) – fuer Live-Meeting-Begleitung mit dem Klienten. Der Agency Director empfiehlt das bei Bedarf und schreibt vorher ein Briefing unter `briefings/`.

## Skills

| Skill | Aufgabe | Modell |
|-------|---------|--------|
| `/meeting` | Meeting-Modus starten, Discovery Agent fuer Live-Begleitung aktivieren | sonnet |
| `/zusammenfassung` | Meeting-Zusammenfassung + offene Fragen + naechste Schritte generieren | sonnet |
| `/project-status` | Aktueller Build-Fortschritt auf einen Blick | haiku |
| `/deploy-check` | Prueft ob die Site deployment-ready ist | sonnet |
| `/audit-content` | Content auf KI-erkennbare Muster prüfen (GPTisms, Design-Tells) | sonnet |
| `/process-feedback` | Feedback aus Inbox verarbeiten, kategorisieren, bewerten | sonnet |

## Knowledge

| Datei | Inhalt |
|-------|--------|
| `knowledge/astro-patterns.md` | Astro Best Practices |
| `knowledge/stack-guide.md` | Stack-Referenz |
| `knowledge/brand-references.md` | Brand-Recherche und Referenzen |
| `knowledge/content-humanization.md` | Anti-GPTism & Anti-AI-Slop Regeln (Blacklists, Strukturregeln, Design-Tells) |

## Regeln
1. **Dateien sind das Gedächtnis.** Alles Wichtige wird in den Dateien unter `client/`, `progress/` und `knowledge/` festgehalten. Was nur im Chat steht, ist nach der Session weg.
2. **Vor jeder Session:** `client/brief.md`, `progress/build-log.md` und `progress/decisions.md` lesen, um den aktuellen Stand zu kennen.
3. **Nach jeder Session:** Fortschritt in `progress/build-log.md` dokumentieren, offene Punkte notieren.
4. **Entscheidungen begründen.** Jede Design- oder Technik-Entscheidung wird in `progress/decisions.md` mit Begründung festgehalten.
5. **Kein Over-Engineering.** Es ist eine Vereinswebsite, kein Enterprise-Projekt. Einfach, wartbar, performant.
6. **Mobile First.** Die Zielgruppe (Salsa-Tänzer, Event-Besucher) nutzt überwiegend Smartphones.
7. **Git-Hygiene.** Kleine, saubere Commits mit klaren englischen Messages. Feature-Branches wenn sinnvoll.
8. **Accessibility ist nicht optional.** WCAG 2.1 AA Minimum. Salsa ist inklusiv – die Website auch.
