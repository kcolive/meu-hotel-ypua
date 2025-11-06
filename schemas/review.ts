import { defineField } from 'sanity';

const review = {
  name: 'review',
  title: 'Avaliações',
  type: 'document',
  fields: [
    defineField({
      name: 'user',
      title: 'Usuário',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'hotelRoom',
      title: 'Acomodação',
      type: 'reference',
      to: [{ type: 'hotelRoom' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Avaliação textual',
      type: 'text',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'userRating',
      title: 'Avaliação do usuário',
      type: 'number',
      validation: Rule =>
        Rule.required().min(1).max(5).error('A avaliação deverá estar entre 1 e 5'),
    }),
  ],
};

export default review;
