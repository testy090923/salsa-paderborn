import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'course',
  title: 'Kurs',
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
      name: 'category',
      title: 'Kategorie',
      type: 'string',
      options: {
        list: [
          { title: 'Kurs', value: 'Kurs' },
          { title: 'Workshop', value: 'Workshop' },
          { title: 'Bootcamp', value: 'Bootcamp' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'string',
      options: {
        list: [
          { title: 'Anfaenger', value: 'Anfänger' },
          { title: 'Mittelstufe', value: 'Mittelstufe' },
          { title: 'Fortgeschritten', value: 'Fortgeschritten' },
          { title: 'Alle', value: 'Alle' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'style',
      title: 'Tanzstil',
      type: 'string',
      options: {
        list: [
          { title: 'Salsa', value: 'Salsa' },
          { title: 'Bachata', value: 'Bachata' },
          { title: 'Kizomba', value: 'Kizomba' },
          { title: 'Sonstiges', value: 'Sonstiges' },
        ],
        layout: 'radio',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'schedule',
      title: 'Zeitplan',
      type: 'string',
      description: 'z.B. "Dienstags, 19:00"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Startdatum',
      type: 'date',
      description: 'Optional, fuer Kurse mit festem Start',
    }),
    defineField({
      name: 'location',
      title: 'Ort',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'teacher',
      title: 'Lehrer/in',
      type: 'reference',
      to: [{ type: 'teacher' }],
    }),
    defineField({
      name: 'school',
      title: 'Tanzschule',
      type: 'reference',
      to: [{ type: 'danceSchool' }],
    }),
    defineField({
      name: 'description',
      title: 'Beschreibung',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'partnerRequired',
      title: 'Tanzpartner erforderlich',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'image',
      title: 'Bild',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      level: 'level',
      style: 'style',
      media: 'image',
    },
    prepare({ title, level, style, media }) {
      return {
        title,
        subtitle: `${style || 'Kein Stil'} - ${level || 'Kein Level'}`,
        media,
      };
    },
  },
});
