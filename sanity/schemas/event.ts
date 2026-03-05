import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Datum & Uhrzeit',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'Enddatum',
      type: 'datetime',
      description: 'Optional, fuer mehrtaegige Events',
    }),
    defineField({
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          { title: 'Party', value: 'Party' },
          { title: 'Social', value: 'Social' },
          { title: 'Festival', value: 'Festival' },
          { title: 'Sonstiges', value: 'Sonstiges' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'Stadt',
      type: 'string',
      description: 'z.B. "Paderborn", "Bielefeld"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Kurzbeschreibung',
      type: 'text',
      rows: 3,
      description: '1-2 Saetze als Vorschau',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'details',
      title: 'Details',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Ausfuehrliche Beschreibung (optional)',
    }),
    defineField({
      name: 'price',
      title: 'Preis',
      type: 'string',
      description: 'z.B. "8€", "frei"',
    }),
    defineField({
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'link',
      title: 'Externer Link',
      type: 'url',
    }),
    defineField({
      name: 'organizer',
      title: 'Veranstalter',
      type: 'reference',
      to: [{ type: 'danceSchool' }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      city: 'city',
      media: 'image',
    },
    prepare({ title, date, city, media }) {
      const formattedDate = date
        ? new Date(date).toLocaleDateString('de-DE', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })
        : 'Kein Datum';
      return {
        title,
        subtitle: `${formattedDate} - ${city || 'Kein Ort'}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: 'Datum (neueste zuerst)',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Datum (aelteste zuerst)',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
});
