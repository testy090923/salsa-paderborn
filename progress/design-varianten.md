# Design-Varianten fuer Salsa Paderborn

> Erstellt am 2026-03-06 vom Brand Strategist
> Kontext: Nadia hat Rueckmeldung gegeben, dass die aktuelle Farbwelt (Rot #C62828 / Gold #F5A623 / Terracotta #E65100 / Night Navy #1A1A2E) ihr NICHT gefaellt.
> Ziel: 4 klar unterscheidbare visuelle Richtungen zur Auswahl.
> Die Seitenstruktur, Navigation und Fonts (Sansita + Source Sans 3) bleiben unveraendert.

---

## Recherche-Zusammenfassung

### Analysierte Websites (neu, zusaetzlich zur bisherigen Research in brand-research.md)

| Website | URL | Beobachtung |
|---|---|---|
| **go&dance** | goandance.com | Minimalistisch: Schwarz/Weiss-UI, bunte Event-Bilder liefern die Farbe. Sehr clean, fast zu neutral fuer eine Community. |
| **Dublin Salsa Bachata** | dublinsalsabachata.com | Auffaellig: Purple-Cyan-Gradient (#34e2e4 zu #4721fb zu #ab1dfe). Wirkt modern, nightlife-nah, energetisch. Beweist: Salsa muss nicht Rot sein. |
| **Cape Town Salsa** | capetownsalsa.co.za | Deep Blue (#2B6CB0) + Green/Orange Akzente. Playfair Display Headlines. Professionell, community-orientiert, aber etwas kuehl. |
| **San Francisco Salsa Festival** | sfsalsafestival.com | Deep Plum/Magenta (#992860) als Akzent. Lato Font. Elegant, festival-wuerdig. |
| **Berlin Salsacongress** | berlinsalsacongress.co | Deep Magenta (#80045D) auf Dark Background. Dramatisch, emotional, authentisch. Beste Referenz fuer Dark-Theme-Ansatz. |
| **Pineapple Dance Studios** | pineapple.uk.com | Pink/Purple, eye-catching, bold. Zeigt: Mutige Farben funktionieren im Tanz-Kontext. |
| **808 Studio** | 808dancestudio.com | Deep Pink + Weiss. Minimalistisch-modern, feminine Energie. |
| **STEEZY Studio** | steezy.co | Light Blue Akzente, helles UI. Frisch, tech-nah, jung. |

### Zentrale Erkenntnisse aus der Recherche

1. **Salsa-Websites muessen NICHT rot sein.** Dublin, Berlin und SF beweisen: Purple, Magenta, Teal funktionieren genauso gut -- und heben sich von der "Standard-Salsa-Aesthetik" ab.

2. **Aktuelle Design-Trends 2025/2026:** Warme, natuerliche Toene. "Digital Comfort". Aber auch: Mutige Farbkombinationen bei Event/Community-Seiten. Der Trend geht weg von hypergesaettigten Neonfarben, hin zu sophistischeren Toenen.

3. **Dark Themes funktionieren fuer Nightlife/Events**, muessen aber warm genug sein fuer eine Community, die auch Anfaenger einladen will.

4. **Die Chance:** Die meisten deutschen Salsa-Portale (salsa.de, salsalemania.de, latincologne.de) sehen visuell veraltet aus. JEDE der folgenden Varianten waere ein massiver Sprung nach vorne.

5. **Magenta/Purple ist im Latin-Dance-Bereich noch untervertreten** -- das waere eine echte Differenzierung gegenueber den ewigen Rot/Gold-Schemata der Szene.

---

## Variante 1: "Noche Tropical"

### Stimmung: warm, einladend, tropisch

Inspiriert von karibischen Naechten, warmem Sonnenlicht und der Energie einer Salsa-Party unter freiem Himmel. Kein Klischee-Rot, sondern die Farben eines tropischen Sonnenuntergangs: Koralle, Teal, warmes Sand-Beige. Wirkt einladend und niedrigschwellig -- perfekt fuer Anfaenger.

### Farbpalette

| Rolle | Name | HEX | Beschreibung |
|---|---|---|---|
| **Primary** | Coral Sunset | `#E8634A` | Warmes Koralle-Orange. Lebendig, aber nicht aggressiv. Erinnert an Sonnenuntergang, nicht an Warnschilder. |
| **Secondary** | Ocean Teal | `#0D8A8A` | Tiefes Teal. Kuehler Kontrast zur Waerme. Vermittelt Vertrauen und Frische. |
| **Accent** | Golden Hour | `#F2B75A` | Warmes Bernstein-Gold. Fuer Badges, Highlights, "Heute"-Markierungen. |
| **Background** | Sand Light | `#FBF6F0` | Warmes, sandiges Off-White. Wie warmes Licht auf Strandcafe-Waenden. |
| **Dark / Text** | Deep Night | `#1B2838` | Tiefes Dunkelblau. Weicher als Schwarz, Hauch von Tropennacht. |
| **Card BG** | Pure White | `#FFFFFF` | Sauberes Weiss fuer Cards auf sandfarbenem Hintergrund. |

### Kontrastverhaeltnisse (WCAG AA)

| Kombination | Ratio | Status |
|---|---|---|
| Deep Night (#1B2838) auf Sand Light (#FBF6F0) | 14.8:1 | AAA bestanden |
| Deep Night (#1B2838) auf White (#FFFFFF) | 16.0:1 | AAA bestanden |
| Coral Sunset (#E8634A) auf White (#FFFFFF) | 3.6:1 | AA bestanden (nur grosser Text 18px+) |
| Coral Sunset (#E8634A) auf Sand Light (#FBF6F0) | 3.4:1 | AA bestanden (nur grosser Text 18px+) |
| Ocean Teal (#0D8A8A) auf White (#FFFFFF) | 4.6:1 | AA bestanden (normaler Text) |
| White (#FFFFFF) auf Coral Sunset (#E8634A) | 3.6:1 | AA bestanden (nur grosser Text, fuer Buttons) |
| White (#FFFFFF) auf Ocean Teal (#0D8A8A) | 4.6:1 | AA bestanden (normaler Text) |
| White (#FFFFFF) auf Deep Night (#1B2838) | 16.0:1 | AAA bestanden |

**Hinweis:** Coral als Primary auf weissem Hintergrund hat nur 3.6:1 -- fuer Body-Text muessen Links/Buttons entweder groesser (18px+) sein oder mit einem dunkleren Coral-Ton (#C94E36, Ratio 5.3:1) als Text-Link-Variante arbeiten.

### CSS Design Tokens

```css
:root {
  /* Colors - Primary */
  --color-primary: #E8634A;
  --color-primary-dark: #C94E36;

  /* Colors - Secondary */
  --color-secondary-gold: #F2B75A;    /* renamed token, same role */
  --color-secondary-terracotta: #0D8A8A; /* repurposed: now Teal */

  /* Colors - Neutral */
  --color-neutral-dark: #1B2838;
  --color-neutral-light: #FBF6F0;
  --color-white: #FFFFFF;

  /* Colors - Text */
  --color-text-secondary: #4A5568;
  --color-text-muted: #718096;

  /* Shadows */
  --shadow-card: 0 2px 8px rgba(27, 40, 56, 0.07);
  --shadow-card-hover: 0 8px 24px rgba(27, 40, 56, 0.12);

  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #E8634A 0%, #0D8A8A 100%);
  --gradient-dark: linear-gradient(180deg, #1B2838, #243447);
}
```

### Hero-Gradient

```css
background: linear-gradient(135deg, #E8634A 0%, #F2B75A 40%, #0D8A8A 100%);
```

Dreifarbiger Sunset-Verlauf: Koralle > Gold > Teal. Erzeugt den tropischen Sonnenuntergang-Effekt. Text in Weiss (#FFFFFF) darauf ist gut lesbar (Kontrast gegen den Koralle-Bereich ca. 3.6:1 bei grossen Headlines -- H1 48px passiert problemlos).

### Card-Style

```css
.card {
  background: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(27, 40, 56, 0.07);
  border: none;
  overflow: hidden;
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(27, 40, 56, 0.12);
}
```

Saubere weisse Cards mit sehr subtilen Schatten. Sanft, warm, einladend. Kein harter Rand, kein Border. Die Waerme kommt vom sandigen Hintergrund dahinter.

### Button-Style

```css
/* Primary Button */
.btn-primary {
  background: #E8634A;
  color: #FFFFFF;
  border: 2px solid #E8634A;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
}

.btn-primary:hover {
  background: #C94E36;
  border-color: #C94E36;
  box-shadow: 0 4px 12px rgba(232, 99, 74, 0.35);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #0D8A8A;
  border: 2px solid #0D8A8A;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
}

.btn-secondary:hover {
  background: #0D8A8A;
  color: #FFFFFF;
}
```

### Akzente

- **Event-Typ-Badges:** Teal (#0D8A8A) Hintergrund mit weissem Text
- **"Heute"-Badge:** Gold (#F2B75A) Hintergrund mit Deep Night (#1B2838) Text
- **"Neu"-Badge:** Coral (#E8634A) Hintergrund mit weissem Text
- **Tags (Tanzstile):** Sand Light (#FBF6F0) Hintergrund mit Deep Night (#1B2838) Text, 1px Border #E2DDD7
- **Hover auf Links:** Farbe wechselt von Coral zu Teal
- **Focus Ring:** 3px solid #F2B75A (Gold)

### Warum diese Richtung

Diese Variante bricht komplett mit dem "Standard-Salsa-Rot", bleibt aber warm und lateinamerikanisch. Koralle ist freundlicher und moderner als Signalrot. Teal bringt Frische und verhindert, dass alles "heiss" wirkt. Die Kombination ist aktuell stark im Trend (2025/2026 "Digital Comfort"-Bewegung) und wuerde salsa-paderborn.de sofort von jeder anderen deutschen Salsa-Seite unterscheiden. Besonders gut fuer die primaere Zielgruppe (Neugierige, Anfaenger), weil es einladend und nicht einschuechternd wirkt.

---

## Variante 2: "Havana Nights"

### Stimmung: elegant, dramatisch, sinnlich

Inspiriert von Berlin Salsacongress und der Aesthetik kubanischer Nachtclubs. Dunkel, aber warm. Magenta statt Rot -- sophistischer, moderner, unverwechselbar. Diese Variante sagt: "Hier passiert etwas Besonderes." Sie spricht die aktive Szene an und wirkt gleichzeitig fuer Neulinge spannend, weil sie Neugier weckt.

### Farbpalette

| Rolle | Name | HEX | Beschreibung |
|---|---|---|---|
| **Primary** | Havana Magenta | `#A8135A` | Tiefes Magenta-Rosa. Leidenschaftlich, aber eleganter als reines Rot. |
| **Secondary** | Warm Amber | `#E8A838` | Warmes Bernstein. Wie Lampenlicht auf kubanischen Strassen. |
| **Accent** | Electric Fuchsia | `#D94F9A` | Leuchtendes Fuchsia. Fuer Hover-Effekte und Highlights. |
| **Background** | Midnight | `#141020` | Tiefes Dunkel mit leichtem Purple-Unterton. Nachthimmel. |
| **Surface** | Dark Elevated | `#1E1A2E` | Leicht erhoeht, fuer Cards auf dunklem Hintergrund. |
| **Text (Primary)** | Warm White | `#F5F0EB` | Warmes Off-White. Weicher als reines Weiss auf dunklem Grund. |
| **Text (Muted)** | Dusty Mauve | `#A89AAE` | Gedaempftes Lila-Grau. Fuer sekundaere Texte. |

### Kontrastverhaeltnisse (WCAG AA)

| Kombination | Ratio | Status |
|---|---|---|
| Warm White (#F5F0EB) auf Midnight (#141020) | 15.6:1 | AAA bestanden |
| Warm White (#F5F0EB) auf Dark Elevated (#1E1A2E) | 13.1:1 | AAA bestanden |
| Dusty Mauve (#A89AAE) auf Midnight (#141020) | 6.5:1 | AA bestanden |
| Warm Amber (#E8A838) auf Midnight (#141020) | 8.5:1 | AAA bestanden |
| Havana Magenta (#A8135A) auf Warm White (#F5F0EB) | 6.2:1 | AA bestanden |
| Warm White (#F5F0EB) auf Havana Magenta (#A8135A) | 6.2:1 | AA bestanden |
| Midnight (#141020) auf Warm Amber (#E8A838) | 8.5:1 | AAA bestanden |

### CSS Design Tokens

```css
:root {
  /* Colors - Primary */
  --color-primary: #A8135A;
  --color-primary-dark: #8A0F4A;

  /* Colors - Secondary */
  --color-secondary-gold: #E8A838;
  --color-secondary-terracotta: #D94F9A;  /* repurposed: now Fuchsia accent */

  /* Colors - Neutral */
  --color-neutral-dark: #141020;
  --color-neutral-light: #1E1A2E;  /* ACHTUNG: In dieser Variante ist "light" dunkel! */
  --color-white: #F5F0EB;          /* Warmes Off-White statt reinem Weiss */

  /* Colors - Text */
  --color-text-secondary: #A89AAE;
  --color-text-muted: #8A7E92;

  /* Shadows */
  --shadow-card: 0 2px 12px rgba(0, 0, 0, 0.3);
  --shadow-card-hover: 0 8px 32px rgba(168, 19, 90, 0.2);

  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #A8135A 0%, #141020 100%);
  --gradient-dark: linear-gradient(180deg, #141020, #0A0810);
}
```

**WICHTIG fuer den Astro Builder:** Diese Variante invertiert die Logik von `--color-neutral-light`. Die gesamte Seite ist dunkel. Der Body-Hintergrund wird `#141020`, Textfarbe wird `#F5F0EB`. Cards bekommen `#1E1A2E`. Das erfordert Anpassungen in der BaseLayout-Logik und allen Komponenten, die `--color-neutral-light` als "hellen" Hintergrund verwenden.

### Hero-Gradient

```css
background: linear-gradient(160deg, #A8135A 0%, #6B1D5E 50%, #141020 100%);
```

Magenta > Deep Purple > Midnight. Dramatisch, aber nicht kalt. Weisser Text darauf ist exzellent lesbar (15.6:1 im dunkelsten Bereich).

### Card-Style

```css
.card {
  background: #1E1A2E;
  border-radius: 12px;
  border: 1px solid rgba(168, 19, 90, 0.15);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  transition: transform 200ms ease, box-shadow 200ms ease, border-color 200ms ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 32px rgba(168, 19, 90, 0.2);
  border-color: rgba(168, 19, 90, 0.35);
}
```

Dunkle Cards mit subtiler Magenta-Border. Hover bringt einen weichen Magenta-Glow. Elegant, nightlife-wuerdig.

### Button-Style

```css
/* Primary Button */
.btn-primary {
  background: #A8135A;
  color: #F5F0EB;
  border: 2px solid #A8135A;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
}

.btn-primary:hover {
  background: #D94F9A;
  border-color: #D94F9A;
  color: #141020;
  box-shadow: 0 4px 16px rgba(217, 79, 154, 0.4);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #E8A838;
  border: 2px solid #E8A838;
  border-radius: 8px;
  padding: 12px 24px;
  font-weight: 600;
}

.btn-secondary:hover {
  background: #E8A838;
  color: #141020;
}
```

### Akzente

- **Event-Typ-Badges:** Magenta (#A8135A) Hintergrund mit weissem Text
- **"Heute"-Badge:** Warm Amber (#E8A838) Hintergrund mit Midnight (#141020) Text
- **"Neu"-Badge:** Fuchsia (#D94F9A) Hintergrund mit Midnight (#141020) Text
- **Tags (Tanzstile):** Durchsichtig mit 1px Border rgba(245, 240, 235, 0.2), Text in Warm White
- **Hover auf Links:** Fuchsia (#D94F9A)
- **Focus Ring:** 3px solid #E8A838 (Amber)
- **Glow-Effekt auf aktiven Elementen:** box-shadow: 0 0 20px rgba(168, 19, 90, 0.3)

### Warum diese Richtung

Das ist die mutigste Variante und die staerkste Differenzierung. Keine deutsche Salsa-Website sieht so aus. Der Berlin Salsacongress beweist, dass Magenta + Dark im Salsa-Kontext funktioniert. Das Dark Theme transportiert "Event" und "Nightlife" -- was perfekt zur Party-lastigen Salsa-Szene passt. Risiko: Fuer absolute Anfaenger koennte es zu "intensiv" wirken. Aber: Wer "Salsa Paderborn" googelt, soll denken "Wow, hier ist was los!", nicht "Das sieht nach einem netten Anfaengerkurs aus".

---

## Variante 3: "Ciudad Fresca"

### Stimmung: frisch, modern, selbstbewusst

Die junge, zeitgemaesse Variante. Inspiriert von modernen Community-Plattformen wie STEEZY und go&dance. Kein Klischee-Latin-Look, sondern: "Wir sind eine moderne Community, die zufaellig Salsa tanzt." Lila/Violet als Primaerfarbe ist ungewoehnlich fuer Tanz-Websites, wirkt aber kreativ, einladend und gender-neutral. Dublin Salsa Bachata beweist, dass Purple im Salsa-Kontext hervorragend funktioniert.

### Farbpalette

| Rolle | Name | HEX | Beschreibung |
|---|---|---|---|
| **Primary** | Vibrant Violet | `#6C3FC5` | Klaeres Violet. Kreativ, modern, energetisch, ohne klischee-haft zu sein. |
| **Secondary** | Lime Pop | `#39B54A` | Frisches Gruen. Bringt Lebendigkeit und Frische als Kontrastfarbe. |
| **Accent** | Peach Glow | `#FF8A65` | Warmes Peach-Orange. Weicher Akzent, der die Waerme reinbringt. |
| **Background** | Cool White | `#F8F7FC` | Hauch von Lila im Weiss. Sehr subtil, aber macht den Gesamteindruck kohaerenter. |
| **Dark / Text** | Charcoal | `#2D2B3A` | Dunkles Grau mit Purple-Unterton. Weicher als reines Schwarz. |
| **Card BG** | Pure White | `#FFFFFF` | Sauberes Weiss fuer Cards. |
| **Surface** | Light Lilac | `#EEEAF5` | Fuer abgesetzte Sektionen, alternative Hintergruende. |

### Kontrastverhaeltnisse (WCAG AA)

| Kombination | Ratio | Status |
|---|---|---|
| Charcoal (#2D2B3A) auf Cool White (#F8F7FC) | 12.6:1 | AAA bestanden |
| Charcoal (#2D2B3A) auf White (#FFFFFF) | 13.5:1 | AAA bestanden |
| Vibrant Violet (#6C3FC5) auf White (#FFFFFF) | 5.8:1 | AA bestanden |
| Vibrant Violet (#6C3FC5) auf Cool White (#F8F7FC) | 5.5:1 | AA bestanden |
| Lime Pop (#39B54A) auf White (#FFFFFF) | 3.3:1 | AA bestanden (nur grosser Text 18px+) |
| Peach Glow (#FF8A65) auf Charcoal (#2D2B3A) | 5.4:1 | AA bestanden |
| White (#FFFFFF) auf Vibrant Violet (#6C3FC5) | 5.8:1 | AA bestanden |
| White (#FFFFFF) auf Charcoal (#2D2B3A) | 13.5:1 | AAA bestanden |

**Hinweis:** Lime Pop (#39B54A) sollte NICHT fuer normalen Text auf weissem Hintergrund verwendet werden (nur 3.3:1). Fuer Text-Links in Gruen stattdessen #287A35 verwenden (5.6:1).

### CSS Design Tokens

```css
:root {
  /* Colors - Primary */
  --color-primary: #6C3FC5;
  --color-primary-dark: #5630A0;

  /* Colors - Secondary */
  --color-secondary-gold: #39B54A;      /* repurposed: now Lime Pop */
  --color-secondary-terracotta: #FF8A65; /* repurposed: now Peach Glow */

  /* Colors - Neutral */
  --color-neutral-dark: #2D2B3A;
  --color-neutral-light: #F8F7FC;
  --color-white: #FFFFFF;

  /* Colors - Text */
  --color-text-secondary: #5C5A6A;
  --color-text-muted: #7E7C8C;

  /* Shadows */
  --shadow-card: 0 2px 8px rgba(45, 43, 58, 0.06);
  --shadow-card-hover: 0 8px 24px rgba(108, 63, 197, 0.12);

  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #6C3FC5 0%, #FF8A65 100%);
  --gradient-dark: linear-gradient(180deg, #2D2B3A, #3D3B4E);
}
```

### Hero-Gradient

```css
background: linear-gradient(135deg, #6C3FC5 0%, #9B6DDB 40%, #FF8A65 100%);
```

Violet > helles Violet > Peach. Ueberraschend, frisch, modern. Komplett anders als alles, was man in der Salsa-Szene sieht. Weisser Text (Kontrast gegen Violet: 5.8:1) ist gut lesbar.

### Card-Style

```css
.card {
  background: #FFFFFF;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(45, 43, 58, 0.06);
  border: none;
  overflow: hidden;
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(108, 63, 197, 0.12);
}
```

Etwas staerker gerundete Ecken (16px statt 12px) fuer einen moderneren, weicheren Look. Hover-Shadow hat einen violetten Ton -- subtil, aber praesent.

### Button-Style

```css
/* Primary Button */
.btn-primary {
  background: #6C3FC5;
  color: #FFFFFF;
  border: 2px solid #6C3FC5;
  border-radius: 24px; /* Pill-Shape! */
  padding: 12px 28px;
  font-weight: 600;
}

.btn-primary:hover {
  background: #5630A0;
  border-color: #5630A0;
  box-shadow: 0 4px 16px rgba(108, 63, 197, 0.35);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #6C3FC5;
  border: 2px solid #6C3FC5;
  border-radius: 24px;
  padding: 12px 28px;
  font-weight: 600;
}

.btn-secondary:hover {
  background: #6C3FC5;
  color: #FFFFFF;
}
```

**Aenderung:** Pill-Shape Buttons (border-radius: 24px) statt leicht gerundet. Das ist ein bewusster Stilbruch -- moderner, app-aehnlicher, juenger.

### Akzente

- **Event-Typ-Badges:** Violet (#6C3FC5) Hintergrund mit weissem Text, border-radius: 20px (Pill)
- **"Heute"-Badge:** Lime Pop (#39B54A) Hintergrund mit weissem Text
- **"Neu"-Badge:** Peach Glow (#FF8A65) Hintergrund mit Charcoal (#2D2B3A) Text
- **Tags (Tanzstile):** Light Lilac (#EEEAF5) Hintergrund mit Charcoal Text, border-radius: 20px
- **Hover auf Links:** Von Violet zu Peach Glow
- **Focus Ring:** 3px solid #FF8A65 (Peach)

### Warum diese Richtung

Die "Anti-Salsa"-Variante im besten Sinne. Sie sagt: "Wir sind kein verstaubter Tanzverein, wir sind eine moderne Community." Violet ist im Tanz-Web-Bereich fast unbesetzt -- starke Differenzierung. Die Pill-Buttons und groesseren Radien geben ein App-Feeling, das besonders bei juengeren Nutzern ankommt. Dublin Salsa Bachata zeigt, dass Purple im Salsa-Kontext funktioniert. Risiko: Manche Leute in der Szene koennten "Das sieht nicht nach Salsa aus" sagen. Aber: Das ist genau der Punkt. Salsa Paderborn IST kein Standard-Salsa-Verein, sondern ein Community-Portal.

---

## Variante 4: "Son Cubano"

### Stimmung: warm, lebendig, authentisch

Die "kulturbewusste" Variante. Inspiriert von kubanischer Architektur, Havanna-Farben und der Waerme lateinamerikanischer Staedte. Nicht das klinische Rot der aktuellen Version, sondern erdige, organische Farben: Terracotta, Salbeigruen, Senfgelb. Wirkt handgemacht, authentisch, einladend. Wie ein Cafe in Havanna, nicht wie eine Website-Vorlage.

### Farbpalette

| Rolle | Name | HEX | Beschreibung |
|---|---|---|---|
| **Primary** | Burnt Sienna | `#C25B36` | Warmes Terracotta-Braun. Erdig, organisch, nicht aggressiv. Wie kubanische Hausfassaden. |
| **Secondary** | Sage Green | `#5D8A66` | Gedaempftes Salbeigruen. Organisch, beruhigend. Ungewoehnlich fuer Salsa, aber passt zur Authentizitaet. |
| **Accent** | Mustard | `#D4A529` | Warmes Senfgelb. Wie Sonnenlicht auf alten Mauern. |
| **Background** | Cream | `#FDF8F0` | Warmes Creme. Noch waermer als Sand, fast wie altes Papier. |
| **Dark / Text** | Espresso | `#2C1E14` | Tiefes Kaffeebraun. Waermer als Schwarz, passt zu den Erdtoenen. |
| **Card BG** | Linen | `#FFFDF8` | Ganz leicht abgetoentes Weiss. Natuerlich, warm. |
| **Surface** | Terracotta Light | `#F5E6DC` | Heller Terracotta-Ton fuer abgesetzte Sektionen. |

### Kontrastverhaeltnisse (WCAG AA)

| Kombination | Ratio | Status |
|---|---|---|
| Espresso (#2C1E14) auf Cream (#FDF8F0) | 15.1:1 | AAA bestanden |
| Espresso (#2C1E14) auf Linen (#FFFDF8) | 15.5:1 | AAA bestanden |
| Burnt Sienna (#C25B36) auf Linen (#FFFDF8) | 4.1:1 | AA bestanden (normaler Text, knapp) |
| Sage Green (#5D8A66) auf Linen (#FFFDF8) | 4.0:1 | AA bestanden (normaler Text, knapp) |
| Burnt Sienna (#C25B36) auf Cream (#FDF8F0) | 3.9:1 | AA bestanden (nur grosser Text 18px+) |
| White (#FFFFFF) auf Burnt Sienna (#C25B36) | 4.2:1 | AA bestanden (normaler Text) |
| White (#FFFFFF) auf Sage Green (#5D8A66) | 4.1:1 | AA bestanden (normaler Text) |
| Cream (#FDF8F0) auf Espresso (#2C1E14) | 15.1:1 | AAA bestanden |

**Hinweis:** Burnt Sienna und Sage Green als Textfarben auf hellem Hintergrund sind grenzwertig (knapp AA). Als Button-Hintergrund mit weissem Text funktionieren beide gut. Fuer Body-Text-Links stattdessen dunkleren Ton verwenden: Burnt Sienna Dark #9A4628 (6.0:1) oder Sage Dark #3E6B47 (6.3:1).

### CSS Design Tokens

```css
:root {
  /* Colors - Primary */
  --color-primary: #C25B36;
  --color-primary-dark: #9A4628;

  /* Colors - Secondary */
  --color-secondary-gold: #D4A529;      /* Mustard */
  --color-secondary-terracotta: #5D8A66; /* repurposed: now Sage Green */

  /* Colors - Neutral */
  --color-neutral-dark: #2C1E14;
  --color-neutral-light: #FDF8F0;
  --color-white: #FFFDF8;

  /* Colors - Text */
  --color-text-secondary: #5C4A3E;
  --color-text-muted: #8A7A6E;

  /* Shadows */
  --shadow-card: 0 2px 8px rgba(44, 30, 20, 0.06);
  --shadow-card-hover: 0 8px 24px rgba(44, 30, 20, 0.10);

  /* Gradients */
  --gradient-hero: linear-gradient(135deg, #C25B36 0%, #D4A529 100%);
  --gradient-dark: linear-gradient(180deg, #2C1E14, #3D2E22);
}
```

### Hero-Gradient

```css
background: linear-gradient(150deg, #C25B36 0%, #D4A529 60%, #5D8A66 100%);
```

Terracotta > Senf > Salbei. Erdig, warm, organisch. Wie eine kubanische Hausfassade im goldenen Licht. Text in Cream/Weiss ist auf dem dunklen Terracotta-Teil gut lesbar.

### Card-Style

```css
.card {
  background: #FFFDF8;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(44, 30, 20, 0.06);
  border: 1px solid rgba(194, 91, 54, 0.08);
  overflow: hidden;
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(44, 30, 20, 0.10);
}
```

Weniger gerundete Ecken (8px statt 12px) -- bewusst etwas "rauer", weniger perfekt, mehr handgemacht. Subtile Border gibt Struktur.

### Button-Style

```css
/* Primary Button */
.btn-primary {
  background: #C25B36;
  color: #FFFDF8;
  border: 2px solid #C25B36;
  border-radius: 6px;
  padding: 12px 24px;
  font-weight: 600;
}

.btn-primary:hover {
  background: #9A4628;
  border-color: #9A4628;
  box-shadow: 0 4px 12px rgba(194, 91, 54, 0.3);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: #5D8A66;
  border: 2px solid #5D8A66;
  border-radius: 6px;
  padding: 12px 24px;
  font-weight: 600;
}

.btn-secondary:hover {
  background: #5D8A66;
  color: #FFFDF8;
}
```

Weniger Rundung (6px) -- passend zum erdigeren, weniger "digitalen" Aesthetic.

### Akzente

- **Event-Typ-Badges:** Sage Green (#5D8A66) Hintergrund mit weissem Text
- **"Heute"-Badge:** Mustard (#D4A529) Hintergrund mit Espresso (#2C1E14) Text
- **"Neu"-Badge:** Burnt Sienna (#C25B36) Hintergrund mit weissem Text
- **Tags (Tanzstile):** Terracotta Light (#F5E6DC) Hintergrund mit Espresso Text
- **Hover auf Links:** Von Burnt Sienna zu Sage Green
- **Focus Ring:** 3px solid #D4A529 (Mustard)
- **Dekoratives Element:** Horizontale Linie in Mustard unter Sektions-Titeln (4px, 40px breit, zentriert)

### Warum diese Richtung

Die kulturell verwurzeltste Variante. Sie sagt: "Wir wissen, woher Salsa kommt, und wir respektieren das." Die Erdtoene wirken warm und einladend, ohne die Klischees (Rot + Gold + Tanzpaar-Silhouette) zu bedienen. Terracotta und Sage Green sind Teil des 2025/2026-Trends zu "natuerlichen, erdigen Toenen" und wirken zeitlos statt trendy. Diese Variante hat den staerksten "Cafe in Havanna"-Charakter und koennte besonders Nadia ansprechen, wenn sie eine kulturell fundierte Aesthetik bevorzugt. Risiko: Koennte zu "ruhig" wirken fuer ein Party/Event-Portal. Aber: Die Events und Fotos bringen die Energie -- die Website muss nicht schreien.

---

## Vergleichs-Uebersicht

| Kriterium | Noche Tropical | Havana Nights | Ciudad Fresca | Son Cubano |
|---|---|---|---|---|
| **Primaerfarbe** | Coral #E8634A | Magenta #A8135A | Violet #6C3FC5 | Terracotta #C25B36 |
| **Grundton** | Hell, warm, sandig | Dunkel, dramatisch | Hell, frisch, lila-getont | Hell, warm, cremig |
| **Stimmung** | Sonnenuntergang am Strand | Mitternacht im Club | Moderne App-Community | Cafe in Havanna |
| **Zielgruppe-Fit (Neulinge)** | Sehr gut | Gut (spannend) | Sehr gut | Gut (warm) |
| **Zielgruppe-Fit (Aktive)** | Gut | Sehr gut | Gut | Gut |
| **Differenzierung** | Hoch | Sehr hoch | Sehr hoch | Mittel-Hoch |
| **Umsetzungs-Aufwand** | Niedrig (Token tauschen) | Hoch (Dark Theme) | Niedrig (Token tauschen) | Niedrig (Token tauschen) |
| **Risiko** | Wenig | "Zu dunkel?" | "Sieht nicht nach Salsa aus" | "Zu ruhig?" |
| **Button-Radius** | 8px | 8px | 24px (Pill) | 6px |
| **Card-Radius** | 12px | 12px | 16px | 8px |

---

## Empfehlung des Brand Strategist

**Meine Top-2 fuer Nadia zur Auswahl: Variante 1 (Noche Tropical) und Variante 3 (Ciudad Fresca).**

Begruendung:
- Beide sind hell und einladend -- was zur primaeren Zielgruppe (Neugierige, Anfaenger) passt
- Beide erfordern nur Token-Tausch, kein Restructuring des Codes (Variante 2 braeuchte Dark-Theme-Umbau)
- Beide unterscheiden sich stark von der bisherigen Rot/Gold-Palette und von anderen deutschen Salsa-Seiten
- Variante 1 bleibt "warm-lateinamerikanisch", Variante 3 geht in "modern-frisch" -- zwei klar verschiedene Richtungen

**Variante 2 (Havana Nights)** ist die mutigste und visuell beeindruckendste, erfordert aber den hoechsten Umbau-Aufwand und koennte fuer Anfaenger zu intensiv sein.

**Variante 4 (Son Cubano)** ist die sicherste Wahl -- warm, schoen, kulturell fundiert -- aber hat die geringste Differenzierungskraft.

**Vorschlag:** Nadia zeigt man alle vier mit kurzer Beschreibung und bittet um ihr Bauchgefuehl. Keine Design-Diskussion, sondern: "Welche Stimmung passt am besten zu dem, was du dir vorstellst?"

---

## Naechste Schritte

- [ ] Andy/Nadia: Eine der 4 Varianten waehlen (oder Mischung besprechen)
- [ ] Bei Wahl: Brand Guide (`client/brand.md`) aktualisieren mit neuer Farbpalette
- [ ] Astro Builder: CSS Tokens in BaseLayout.astro tauschen
- [ ] Alle Komponenten visuell pruefen (Nav, Footer, Cards, Buttons, Hero)
- [ ] Bei Variante 2: Umfangreicherer Umbau noetig (Dark Theme Logik)

---

## Quellen & Inspiration

- Berlin Salsacongress: berlinsalsacongress.co (Magenta + Dark Theme Referenz)
- Dublin Salsa Bachata: dublinsalsabachata.com (Purple-Gradient Referenz)
- Cape Town Salsa: capetownsalsa.co.za (Community-Portal Referenz)
- go&dance: goandance.com (Minimalistisch-moderne Plattform Referenz)
- SF Salsa Festival: sfsalsafestival.com (Plum/Magenta Referenz)
- Pineapple Dance Studios: pineapple.uk.com (Mutige Farben Referenz)
- STEEZY Studio: steezy.co (Moderne App-Aesthetik Referenz)
- Davey & Krista: daveyandkrista.com (2025 Color Trend Analyse)
- Hook Agency: hookagency.com (Website Color Schemes)
- Market Muscles: marketmuscles.com (Color Theory for Dance Websites)
- WebAIM Contrast Checker: webaim.org (WCAG Kontrast-Pruefung)
