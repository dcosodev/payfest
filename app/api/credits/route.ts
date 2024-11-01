import { NextResponse } from 'next/server';
import { db } from '@/db';
import { credits } from '@/db/schema';
import { randomUUID } from 'crypto';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]/route';

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    const { amount } = await request.json();

    const newCredit = await db.insert(credits).values({
      id: randomUUID(),
      userId: session.user.id,
      amount
    }).returning();

    return NextResponse.json(newCredit[0], { status: 201 });
  } catch (error) {
    console.error('Error al agregar créditos:', error);
    return NextResponse.json(
      { error: 'Error al procesar la transacción' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'No autorizado' },
        { status: 401 }
      );
    }

    const userCredits = await db.query.credits.findMany({
      where: eq(credits.userId, session.user.id)
    });

    const total = userCredits.reduce((sum, credit) => sum + credit.amount, 0);

    return NextResponse.json({ total, history: userCredits });
  } catch (error) {
    console.error('Error al obtener créditos:', error);
    return NextResponse.json(
      { error: 'Error al obtener los créditos' },
      { status: 500 }
    );
  }
}