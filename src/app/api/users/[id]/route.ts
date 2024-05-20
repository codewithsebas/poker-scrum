import prisma from "app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  id: string;
}

export async function GET(req: NextRequest, { params }: { params: Params }) {
  const id = parseInt(params.id);
  console.log(id);
  try {
    const user = await prisma.user.findFirst({
      where: { id: id },
    });
    if (!user) {
      return new NextResponse(`User with id ${id} not found`);
    }
    return NextResponse.json(user);
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Params }) {
  const id = parseInt(params.id);
  const user = await prisma.user.findFirst({
    where: { id: id },
  });
  if (!user) {
    return new NextResponse(`User with id ${id} not found`);
  }

  try {
    const user = await prisma.user.delete({
      where: { id: id },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Params }) {
  const id = parseInt(params.id);
  const data = await req.json();

  try {
    const res = await prisma.user.update({
      where: { id: id },
      data,
    });
    if (!res) {
      return new NextResponse(`User with id ${id} not found`, {
        status: 404,
      });
    }
    return NextResponse.json(res, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error.message, { status: 500 });
  }
}
