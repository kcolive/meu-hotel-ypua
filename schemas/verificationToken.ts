import { defineField } from 'sanity';

const verificationToken = {
  name: 'verification-token',
  title: 'Verificação de Token',
  type: 'document',
  fields: [
    defineField({
      name: 'identifier',
      title: 'Identificador',
      type: 'string',
    }),
    defineField({
      name: 'token',
      title: 'Token',
      type: 'string',
    }),
    defineField({
      name: 'expires',
      title: 'Expira em',
      type: 'datetime',
    }),
  ],
};

export default verificationToken;
