import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  token: process.env.SANITY_API_TOKEN,
  // MUDANÇA CRUCIAL:
  useCdn: false, // Força a API a não usar o CDN, permitindo a autenticação do token
  apiVersion: '2025-01-01',
});