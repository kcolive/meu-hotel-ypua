import { signUpHandler } from 'next-auth-sanity';
import { client } from '../../../../libs/sanity';
export const POST = signUpHandler(client as any);