/**
 * Seed script – populates Sanity with demo content for salsa-paderborn.de
 *
 * Usage: node scripts/seed.mjs
 *
 * Creates: 1 Tanzschule, 1 Lehrerin, 4 Events, 3 Kurse, 1 Blog-Post
 */
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: 'ne69pi1u',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

// Helper: create document and return its ID
async function create(doc) {
  const result = await client.create(doc);
  console.log(`  ✓ ${doc._type}: ${doc.title || doc.name}`);
  return result._id;
}

// Helper: portable text block from plain string
function textBlock(text) {
  return [
    {
      _type: 'block',
      _key: Math.random().toString(36).slice(2, 10),
      style: 'normal',
      markDefs: [],
      children: [
        {
          _type: 'span',
          _key: Math.random().toString(36).slice(2, 10),
          text,
          marks: [],
        },
      ],
    },
  ];
}

function textBlocks(...paragraphs) {
  return paragraphs.map((text) => ({
    _type: 'block',
    _key: Math.random().toString(36).slice(2, 10),
    style: 'normal',
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: Math.random().toString(36).slice(2, 10),
        text,
        marks: [],
      },
    ],
  }));
}

async function seed() {
  console.log('\n🌱 Seeding Sanity with demo content...\n');

  // ─── Tanzschule ───
  console.log('Tanzschulen:');
  const schoolId = await create({
    _type: 'danceSchool',
    name: 'Salsa Pasión e.V.',
    slug: { _type: 'slug', current: 'salsa-pasion' },
    focus: ['Salsa', 'Bachata', 'Kizomba'],
    location: 'Paderborn',
    description: textBlocks(
      'Der Salsa-Verein in Paderborn – regelmäßige Kurse, Social Dances und eine lebendige Community.',
      'Gegründet aus Leidenschaft für Latin Dance, offen für alle. Egal ob Anfänger oder Fortgeschrittene – bei uns ist jeder willkommen.'
    ),
    angebot: ['Wöchentliche Kurse', 'Social Dances', 'Workshops', 'Community Events'],
    website: 'https://salsa-pasion.de',
    contact: {
      _type: 'object',
      email: 'info@salsa-pasion.de',
    },
  });

  // ─── Lehrerin ───
  console.log('\nLehrer:innen:');
  const nadiaId = await create({
    _type: 'teacher',
    name: 'Nadia',
    slug: { _type: 'slug', current: 'nadia' },
    styles: ['Salsa', 'Bachata', 'Kizomba'],
    bio: textBlocks(
      'Leidenschaftliche Tänzerin seit über 12 Jahren. Nadia unterrichtet mit Herz und Geduld – vom absoluten Anfänger bis zum fortgeschrittenen Tänzer.',
      'Als Gründerin und Vorstand von Salsa Pasión e.V. ist sie eine der treibenden Kräfte der Paderborner Salsa-Szene. Ihr Motto: Tanzen verbindet – egal woher du kommst.'
    ),
    school: { _type: 'reference', _ref: schoolId },
    contact: {
      _type: 'object',
      email: 'nadia@salsa-pasion.de',
    },
    website: 'https://salsa-pasion.de',
  });

  // ─── Events ───
  console.log('\nEvents:');

  await create({
    _type: 'event',
    title: 'Salsa Night Paderborn',
    slug: { _type: 'slug', current: 'salsa-night-paderborn-maerz' },
    date: '2026-03-14T21:00:00.000Z',
    category: 'Party',
    location: 'Kulturwerkstatt',
    city: 'Paderborn',
    description: 'DJ Carlos legt auf – Salsa, Bachata, Kizomba bis in die Nacht. Die monatliche Salsa Night ist zurück!',
    price: '8€',
    organizer: { _type: 'reference', _ref: schoolId },
  });

  await create({
    _type: 'event',
    title: 'Bachata Social Dance',
    slug: { _type: 'slug', current: 'bachata-social-dance-maerz' },
    date: '2026-03-15T20:00:00.000Z',
    category: 'Social',
    location: 'Salsa Pasión Studio',
    city: 'Paderborn',
    description: 'Offener Social Dance – alle Level willkommen. Einfach kommen und tanzen!',
    price: 'Frei',
    organizer: { _type: 'reference', _ref: schoolId },
  });

  await create({
    _type: 'event',
    title: 'Latin Vibes Festival',
    slug: { _type: 'slug', current: 'latin-vibes-festival-2026' },
    date: '2026-04-18T18:00:00.000Z',
    endDate: '2026-04-19T23:00:00.000Z',
    category: 'Festival',
    location: 'Stadthalle',
    city: 'Paderborn',
    description: 'Das große Latin-Event mit 3 Floors, internationalen DJs, Workshops und Shows. DAS Highlight des Frühjahrs!',
    details: textBlocks(
      'Samstag: Workshops ab 18 Uhr, Party ab 22 Uhr mit DJ Rosa (Berlin) und DJ Mambo King (Köln).',
      'Sonntag: Brunch Social ab 12 Uhr, Workshops bis 18 Uhr, Abschlussparty ab 21 Uhr.',
      'Tickets im Vorverkauf 35€, an der Abendkasse 45€. Early Bird bis 31. März: 25€!'
    ),
    price: 'ab 25€',
  });

  await create({
    _type: 'event',
    title: 'Kizomba Friday',
    slug: { _type: 'slug', current: 'kizomba-friday-bielefeld' },
    date: '2026-03-21T21:30:00.000Z',
    category: 'Party',
    location: 'La Bamba',
    city: 'Bielefeld',
    description: 'Kizomba & Semba Night in Bielefeld. 30min Taster-Workshop ab 21:00, danach Social bis 2 Uhr.',
    price: '6€',
  });

  // ─── Kurse ───
  console.log('\nKurse:');

  await create({
    _type: 'course',
    title: 'Salsa Anfänger – Neuer Kurs',
    slug: { _type: 'slug', current: 'salsa-anfaenger-fruehling-2026' },
    category: 'Kurs',
    level: 'Anfänger',
    style: 'Salsa',
    schedule: 'Dienstags, 19:00 Uhr',
    startDate: '2026-03-18',
    location: 'Salsa Pasión Studio, Paderborn',
    teacher: { _type: 'reference', _ref: nadiaId },
    school: { _type: 'reference', _ref: schoolId },
    description: 'Neuer Kurs für absolute Anfänger – kein Partner nötig, keine Vorkenntnisse. Lerne die Grundschritte, einfache Drehungen und vor allem: hab Spaß!',
    partnerRequired: false,
  });

  await create({
    _type: 'course',
    title: 'Salsa On2 – Intermediate',
    slug: { _type: 'slug', current: 'salsa-on2-intermediate' },
    category: 'Kurs',
    level: 'Mittelstufe',
    style: 'Salsa',
    schedule: 'Donnerstags, 20:00 Uhr',
    location: 'Salsa Pasión Studio, Paderborn',
    teacher: { _type: 'reference', _ref: nadiaId },
    school: { _type: 'reference', _ref: schoolId },
    description: 'Für Tänzer:innen mit Grundkenntnissen. Wir arbeiten an Musicality, Führung/Folgen und komplexeren Figuren. On2-Timing wird eingeführt.',
    partnerRequired: false,
  });

  await create({
    _type: 'course',
    title: 'Bachata Sensual Weekend',
    slug: { _type: 'slug', current: 'bachata-sensual-weekend-april' },
    category: 'Bootcamp',
    level: 'Mittelstufe',
    style: 'Bachata',
    schedule: 'Sa-So, 11:00–18:00 Uhr',
    startDate: '2026-04-04',
    location: 'Tanzraum PB, Paderborn',
    description: 'Intensiv-Wochenende Bachata Sensual mit Gastlehrer aus Köln. Body Movement, Musicality und Partnerwork auf neuem Level.',
    partnerRequired: true,
  });

  // ─── Blog Post ───
  console.log('\nBlog-Posts:');

  await create({
    _type: 'blogPost',
    title: 'Salsa Paderborn geht online!',
    slug: { _type: 'slug', current: 'salsa-paderborn-geht-online' },
    publishedAt: '2026-03-05T10:00:00.000Z',
    author: { _type: 'reference', _ref: nadiaId },
    excerpt: 'Endlich eine zentrale Anlaufstelle für die Salsa-Szene in Paderborn! Was euch hier erwartet und warum wir das machen.',
    body: textBlocks(
      'Es ist soweit – Salsa Paderborn ist online! Ab sofort findet ihr hier alles rund um Salsa, Bachata und Kizomba in Paderborn und Umgebung.',
      'Wir wollen eine zentrale Anlaufstelle schaffen: Wer "Salsa Paderborn" googelt, soll sofort sehen, was in der Szene los ist. Events, Kurse, Lehrer:innen, Tanzschulen – alles an einem Ort.',
      'Die Idee dafür trage ich schon lange mit mir herum. Als Gründerin von Salsa Pasión e.V. sehe ich jeden Tag, wie viele Menschen Salsa in Paderborn suchen – und wie schwer es ist, die richtigen Infos zu finden.',
      'Diese Plattform ist für alle da: für Neugierige, die ihren ersten Kurs suchen. Für erfahrene Tänzer, die wissen wollen, wo diese Woche die beste Party ist. Und für Lehrer:innen und Tanzschulen, die sich präsentieren wollen.',
      'Wir starten mit Events, Kursen und den ersten Lehrer:innen-Profilen. In den nächsten Wochen kommen mehr Inhalte dazu. Schaut regelmäßig vorbei – oder noch besser: meldet euch, wenn ihr Teil der Plattform werden wollt!'
    ),
    tags: ['Szene-News', 'Launch'],
  });

  console.log('\n✅ Seed complete! Demo content created.\n');
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err.message);
  process.exit(1);
});
