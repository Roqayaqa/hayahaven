import { connectDB } from "@/lib/dbConnect";

import { Product }  from "@/models/Product";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  await connectDB();
  const product = await Product.findById(params.id);
  if (!product) return NextResponse.json({ message: "لم يتم العثور على المنتج" }, { status: 404 });
  return NextResponse.json(product);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  await connectDB();
  const data = await req.json();

  const updated = await Product.findByIdAndUpdate(params.id, data, { new: true });
  if (!updated) return NextResponse.json({ message: "فشل التحديث" }, { status: 404 });
  return NextResponse.json(updated);
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  await connectDB();
  const deleted = await Product.findByIdAndDelete(params.id);
  if (!deleted) return NextResponse.json({ message: "فشل الحذف" }, { status: 404 });
  return NextResponse.json({ message: "تم حذف المنتج" });
}
