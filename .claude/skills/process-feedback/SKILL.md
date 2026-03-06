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
3. `client/brief.md` -- Positionierung und Projektziele
4. `client/brand.md` -- Markenentscheidungen, Farbwelt, Tonalität
5. `progress/build-log.md` -- aktueller Projektstand

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

- Zielgruppe: Menschen in Paderborn und Umgebung, die Salsa/Bachata/Kizomba tanzen oder anfangen wollen. Überwiegend Smartphone-Nutzer, nicht techaffin. Feedback von Personen, die dieser Zielgruppe nahestehen, wiegt schwerer als Feedback von Designern oder Entwicklern.
- "Gefällt mir nicht" ohne Begründung ist kein Grund zum Ändern
- Wenn 3+ Leute unabhängig denselben Punkt nennen, ist es wahrscheinlich berechtigt
- Mobile-Feedback ist besonders relevant (Zielgruppe nutzt Smartphones)
- Nie die Positionierung verwässern weil jemand "es softer/anders" will
- Prüfe `progress/decisions.md` -- wenn etwas bewusst so entschieden wurde, nicht leichtfertig kippen

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
- Bei Unsicherheit: als SPÄTER markieren und Frage an Andy formulieren
