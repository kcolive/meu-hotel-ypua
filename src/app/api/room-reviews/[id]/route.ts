import { getRoomReviews } from '@/libs/apis';
import { NextResponse } from 'next/server';

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const roomId = params.id;

  try {
    const roomReviews = await getRoomReviews(roomId);

    return NextResponse.json(roomReviews, {
      status: 200,
      statusText: 'Efetuado com sucesso',
    });
} catch (error) {
    console.log('Falha ao obter a avaliação', error);
    return new NextResponse('Não foi possível obter os dados', { status: 400 });
  }
}
