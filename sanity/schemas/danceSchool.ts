import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'danceSchool',
  title: 'Tanzschule',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'focus',
      title: 'Schwerpunkte',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'z.B. Salsa, Bachata, Kizomba',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'location',
      title: 'Standort',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Beschreibung',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'angebot',
      title: 'Angebot',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'z.B. "Woechentliche Kurse", "Social Dances"',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'contact',
      title: 'Kontakt',
      type: 'object',
      fields: [
        defineField({
          name: 'email',
          title: 'E-Mail',
          type: 'string',
        }),
        defineField({
          name: 'phone',
          title: 'Telefon',
          type: 'string',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      location: 'location',
      media: 'logo',
    },
    prepare({ title, location, media }) {
      return {
        title,
        subtitle: location || 'Kein Standort',
        media,
      };
    },
  },
});
