// app/api/hello/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') || 'World';
  const response = { message: `Hello, ${name}!` };
  return NextResponse.json(response);
}
