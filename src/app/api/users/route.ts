import prisma from "app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const user = await prisma.user.create({
      data,
    });

    return new NextResponse(JSON.stringify(user), {
      headers: { "Content-Type": "application/json" },
      status: 201,
    });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json({ data: users }, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
