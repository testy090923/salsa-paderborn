# Feedback-Workflow einrichten -- Anleitung für andere Projekte

Diese Anleitung beschreibt, wie du den Feedback-Workflow aus ki-website in ein anderes Website-Projekt überträgst. Gib sie deinem Agent und er baut es für sein Projekt nach.

## Was der Workflow tut

1. Du (Andi) sammelst Feedback von Testern in einer Inbox-Datei
2. Ein Skill (`/process-feedback`) verarbeitet es automatisch: kategorisieren, gegen die Positionierung bewerten, Status setzen
3. Verarbeitetes Feedback landet in einem Log mit Status (UMSETZEN / SPÄTER / VERWORFEN / ERLEDIGT)
4. Die Inbox wird geleert

## Was du brauchst (4 Teile)

### 1. Feedback-Verzeichnis anlegen

Erstelle `feedback/inbox.md`:

```markdown
# Feedback-Inbox

Hier Feedback reinwerfen. Keine Formatierung nötig -- einfach reinkippen.

Pro Eintrag nur zwei Dinge:
1. **Wer** (Name oder "anonym" -- hilft bei der Einordnung)
2. **Was** (wörtlich oder sinngemäß, was die Person gesagt hat)

Beispiel:

### Marco
Die Navigation ist verwirrend, ich finde die Preise nicht.

### Lisa (Designerin)
Farben passen gut, aber die Schrift ist zu klein auf Mobile.

Ich (Director) verarbeite alles beim nächsten Sessionstart und räume die Inbox leer.

---

```

Erstelle `feedback/log.md`:

```markdown
# Feedback-Log

Verarbeitetes Feedback -- kategorisiert, bewertet, mit Status.

## Status-Legende

| Status | Bedeutung |
|--------|-----------|
| UMSETZEN | Berechtigt, wird gemacht |
| SPÄTER | Guter Punkt, aber nicht jetzt |
| VERWORFEN | Bewusst anders entschieden (Begründung steht dabei) |
| ERLEDIGT | Umgesetzt und live |

## Kategorien

- **Design** -- Farben, Layout, Whitespace, Fotos, Typografie
- **Content** -- Texte, Tonalität, Verständlichkeit, Länge
- **UX** -- Navigation, CTAs, Mobile, Ladezeit, Interaktion
- **Strategie** -- Positionierung, Zielgruppe, was fehlt, was irritiert

---

<!-- Einträge werden hier chronologisch ergänzt, neueste oben -->
```

### 2. Skill anlegen

Erstelle `.claude/skills/process-feedback/SKILL.md`.

Kopiere die Struktur unten und passe die **markierten Stellen** an dein Projekt an:

```markdown
---
name: process-feedback
description: Verarbeitet neues Feedback aus der Inbox -- kategorisiert, bewertet, setzt Status, schreibt ins Log.
context: fork
model: sonnet
---

## Aufgabe

Lies `feedback/inbox.md` und verarbeite jedes Feedback-Item.

Wenn die Inbox leer ist (keine Einträge unter der Trennlinie `---`), melde das kurz und beende.

## Kontext laden

Lies diese Dateien, um Feedback bewerten zu können:

1. `feedback/inbox.md` -- die neuen Einträge
2. `feedback/log.md` -- bisheriges Feedback (damit du nicht doppelt einträgst)
3. [ANPASSEN: Pfad zur Positionierung / Briefing / Strategie-Datei des Projekts]
4. [ANPASSEN: Pfad zum Style Guide oder Design-Richtlinien]
5. [ANPASSEN: Pfad zum Projektstatus, falls vorhanden]

## Pro Feedback-Item

1. **Quelle notieren** -- Wer hat es gesagt?
2. **Kategorisieren** -- Design | Content | UX | Strategie
3. **Bewerten** -- Ist das Feedback berechtigt? Passt es zur Positionierung? Widerspricht es bewussten Entscheidungen? Echtes Problem oder persönlicher Geschmack?
4. **Status setzen:**
   - **UMSETZEN** -- Berechtigt, konkreter Fix möglich
   - **SPÄTER** -- Guter Punkt, aber nicht jetzt
   - **VERWORFEN** -- Bewusst anders entschieden (Begründung immer angeben)
5. **Begründung** -- Kurz (1-2 Sätze) warum dieser Status

## Bewertungs-Leitlinien

- [ANPASSEN: Wer ist die Zielgruppe? Feedback von Zielgruppen-nahen Personen wiegt schwerer]
- "Gefällt mir nicht" ohne Begründung ist kein Grund zum Ändern
- Wenn 3+ Leute unabhängig denselben Punkt nennen, ist es wahrscheinlich berechtigt
- Mobile-Feedback ist besonders relevant
- Nie die Positionierung verwässern weil jemand "es softer/anders" will

## Output

### 1. In `feedback/log.md` schreiben

Neue Einträge oben einfügen (unter dem Kommentar), im Format:

### [Kategorie] [Quelle]: "[Kernaussage]"
**Status:** UMSETZEN | SPÄTER | VERWORFEN
**Begründung:** [1-2 Sätze]
**Aktion:** [Was konkret zu tun ist, falls UMSETZEN]

### 2. `feedback/inbox.md` leeren

Verarbeitete Einträge entfernen (Anleitung und Beispiel stehen lassen).

### 3. Zusammenfassung ausgeben

- Wie viele Items verarbeitet
- Wie viele UMSETZEN / SPÄTER / VERWORFEN
- Die wichtigsten 1-2 Aktionspunkte

## Regeln

- Deutsch. Direkt.
- Umlaute: ä, ö, ü (nicht ae, oe, ue)
- Bewerte ehrlich -- nicht alles muss umgesetzt werden
- Bei Unsicherheit: als SPÄTER markieren und Frage an Andi formulieren
```

### 3. CLAUDE.md ergänzen

Füge in der Projektstruktur-Tabelle hinzu:

```
| `feedback/inbox.md` | Feedback-Eingang (Andi schreibt, Agent verarbeitet) |
| `feedback/log.md` | Verarbeitetes Feedback mit Status (UMSETZEN/SPÄTER/VERWORFEN/ERLEDIGT) |
```

Und in der Skills-Tabelle:

```
| `/process-feedback` | Feedback aus Inbox verarbeiten, kategorisieren, bewerten | sonnet | fork |
```

### 4. Sessionstart-Instruktion

Füge in deinem Agent-Prompt (System Prompt / Director Prompt) bei den Sessionstart-Aufgaben hinzu:

```
- Prüfe `feedback/inbox.md` -- neues Feedback? Dann `/process-feedback` laufen lassen.
```

## Was du anpassen MUSST

| Stelle | Was anpassen | Warum |
|--------|-------------|-------|
| Skill: Kontext-Dateien | Pfade zu Positionierung, Style Guide, Projektstatus | Jedes Projekt hat andere Quelldateien |
| Skill: Bewertungs-Leitlinien | Zielgruppe beschreiben | Feedback wird gegen die Zielgruppe bewertet |
| Inbox: Beispiel | Projektrelevantes Beispiel | Damit klar ist, was reinsoll |

## Was du 1:1 übernehmen kannst

- Log-Struktur (Status-Legende, Kategorien, Format)
- Bewertungslogik (3+ Leute = berechtigt, kein Geschmacks-Overrule, Positionierung schützen)
- Inbox-Anleitung (Wer + Was, sonst nichts)
