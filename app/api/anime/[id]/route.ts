import { NextResponse } from 'next/server';

export async function GET(request: any, { params }: any) {
    const id = params.id;
    const res = await fetch(
        `https://api.jikan.moe/v4/anime/?q=${id}&limit=5&order_by=popularity`
      );
      const data = await res.json();
      return NextResponse.json(data);
    }
  