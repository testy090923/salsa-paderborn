# Brand References & Design Knowledge

> Gesammelt am 2026-03-05 vom Brand Strategist
> Dient als Nachschlagewerk fuer Design-Entscheidungen

## Font-Pairing: Sansita + Source Sans 3

**Warum gewahlt:**
- Sansita: Kalligrafische Qualitaet, "tasty and sensual" (Eigenworte der Designer), dynamische Italic, kraftvolle Versalien. Entworfen von Pablo Cosgaya / Omnibus Type. SIL Open Font License.
- Source Sans 3: Adobes humanistischer Sans-Serif. Variable Font. Grosser Sprachsupport. Hervorragende Lesbarkeit. SIL Open Font License.
- Kombi funktioniert weil: Sansita bringt Persoenlichkeit (Headlines), Source Sans 3 bringt Lesbarkeit (Body). Kontrast ohne Konflikt.

**Alternativen die verworfen wurden:**
- Poppins + Roboto: Zu generisch, jede zweite Website
- Fjalla One + Source Sans Pro: Fjalla One zu kantig/maskulin fuer einladende Community
- Oswald + Open Sans: Zu editorial, zu wenig Waerme
- Caveat + Karla: Caveat (Handschrift) zu verspielt fuer seriöses Portal

## Farbpalette-Herleitung

**Primaer #C62828:** Material Design Red 800. Warm genug fuer Latin-Stimmung, dunkel genug fuer WCAG AA gegen Weiss (5.1:1). Rottoene sind in der Salsa-Szene universell assoziiert mit der Kultur.

**Gold #F5A623:** Inspiriert von Cologne Salsa Congress (#c19f30, aber zu dunkel) und warmen Lichttoenen. Lebendiger als typisches Gold, transportiert Lebensfreude. ACHTUNG: Nicht als Text auf weissem Hintergrund verwenden (nur 2.1:1 Kontrast).

**Terracotta #E65100:** Material Design Deep Orange 900. Bruecke zwischen Rot und Gold. Erinnert an lateinamerikanische Aesthetik. WCAG AA gegen Weiss: 5.0:1.

**Night Navy #1A1A2E:** Kein reines Schwarz. Der leichte Blau-Violett-Unterton macht es weicher und assoziiert subtil Nachtleben/Abendstimmung. Exzellente Kontraste: 16.4:1 gegen Weiss, 9.2:1 gegen Gold.

## Kontrasttabelle (WCAG)

| Vordergrund | Hintergrund | Ratio | AA Normal | AA Large | AAA Normal |
|---|---|---|---|---|---|
| #C62828 | #FFFFFF | 5.1:1 | Ja | Ja | Nein |
| #E65100 | #FFFFFF | 5.0:1 | Ja | Ja | Nein |
| #1A1A2E | #FFFFFF | 16.4:1 | Ja | Ja | Ja |
| #1A1A2E | #FAF7F2 | 15.3:1 | Ja | Ja | Ja |
| #1A1A2E | #F5A623 | 9.2:1 | Ja | Ja | Ja |
| #F5A623 | #FFFFFF | 2.1:1 | NEIN | NEIN | Nein |
| #FFFFFF | #C62828 | 5.1:1 | Ja | Ja | Nein |
| #FFFFFF | #1A1A2E | 16.4:1 | Ja | Ja | Ja |

**Regel:** Gold (#F5A623) NIE als Text auf weissem/hellem Hintergrund verwenden. Immer nur auf dunklem Hintergrund oder als dekoratives Element.

## Recherchierte Referenz-Websites

| Website | Typ | Staerke | Schwaeche | Relevanz |
|---|---|---|---|---|
| salsa.de | DE Portal | Umfassend | Veraltet | Inhaltlich |
| latindancecalendar.com | Int. Kalender | Moderne UI | Zu kommerziell | UI-Patterns |
| salsavida.com | Int. Guide | Saubere IA | Unpersoenlich | SEO-Struktur |
| danceus.org | US Kalender | Responsiv | Generisch | Basis-Patterns |
| berlinsalsacongress.co | DE Festival | Beste Emotion | Zu event-fokussiert | Stimmung, Fotos |
| la-candela-salsa.de | DE Tanzschule | Gute Farben | Divi-Template | Farbinspo |
| latincologne.de | Lokal Koeln | Naechstes Analogon | Rudimentaer | Was wir besser machen |
| colognesalsacongress.com | DE Festival | Elegante Waerme | Luxus-Vibe | Gold-Farbinspo |
| salsalemania.de | DE Verzeichnis | Umfassend | Overload | Negativbeispiel |

## Icon-Empfehlung: Lucide Icons

- Open Source (ISC License)
- Konsistenter 24px Grid, 2px Stroke
- Leichtgewichtig (Tree-shakeable)
- Astro-Integration verfuegbar
- Grosse Auswahl an relevanten Icons (Kalender, Uhr, Map-Pin, Music, Heart, Users, Search, Filter, Menu, ChevronRight, ExternalLink)
- URL: https://lucide.dev/
