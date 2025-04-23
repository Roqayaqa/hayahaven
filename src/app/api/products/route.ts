import { connectDB } from "@/lib/dbConnect";

import { Product }  from "@/models/Product";


import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();
    const { name, price, category, description, images } = await req.json();

    if (!name || !price || !category || !images || !Array.isArray(images)) {
      return NextResponse.json({ message: "بيانات غير مكتملة" }, { status: 400 });
    }

    const newProduct = new Product({
      name,
      price,
      category,
      description,
      images,
    });

    await newProduct.save();
    return NextResponse.json({ message: "تم إضافة المنتج بنجاح" }, { status: 201 });
  } catch (error) {
    console.error("خطأ أثناء حفظ المنتج:", error);
    return NextResponse.json({ message: "فشل حفظ المنتج" }, { status: 500 });
  }
}
