import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = Math.max(1, parseInt(searchParams.get('page') ?? '1', 10));
  const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') ?? '10', 10)));

  const items = Array.from({ length: limit }, (_, i) => ({
    id: (page - 1) * limit + i + 1,
    name: `Item ${(page - 1) * limit + i + 1}`,
    createdAt: new Date().toISOString(),
  }));

  return NextResponse.json({
    data: items,
    meta: { page, limit, total: 100 },
  });
}

export async function POST(request) {
  try {
    const body = await request.json();

    if (!body.name || typeof body.name !== 'string') {
      return NextResponse.json(
        { error: 'name is required and must be a string' },
        { status: 422 }
      );
    }

    const created = { id: Date.now(), ...body, createdAt: new Date().toISOString() };
    return NextResponse.json({ data: created }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }
}
