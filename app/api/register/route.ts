import { NextResponse } from 'next/server';
import { db } from '@/db';
import { users } from '@/db/schema';
import { randomUUID } from 'crypto';

export async function POST(request: Request) {
  try {
    const { email, password, name } = await request.json();

    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email)
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'El usuario ya existe' },
        { status: 400 }
      );
    }

    const newUser = await db.insert(users).values({
      id: randomUUID(),
      email,
      password, // In a real app, hash the password first!
      name
    }).returning();

    return NextResponse.json(
      { message: 'Usuario creado exitosamente' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    return NextResponse.json(
      { error: 'Error al crear usuario' },
      { status: 500 }
    );
  }
}