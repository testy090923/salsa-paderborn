import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'teacher',
  title: 'Lehrer/in',
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
      name: 'photo',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'styles',
      title: 'Tanzstile',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'z.B. Salsa, Bachata, Kizomba',
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'bio',
      title: 'Biografie',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'school',
      title: 'Tanzschule',
      type: 'reference',
      to: [{ type: 'danceSchool' }],
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
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'string',
          description: 'Instagram-Handle ohne @',
        }),
      ],
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'photo',
    },
    prepare({ title, media }) {
      return {
        title,
        media,
      };
    },
  },
});
