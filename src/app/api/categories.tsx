import { connectDB } from "@/lib/dbConnect";

import Category from "@/db/models/category";

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // الاتصال بقاعدة البيانات
    await connectDB();

    // استخراج البيانات من الطلب
    const { name } = await req.json();

    // التحقق من أن الاسم موجود
    if (!name) {
      return NextResponse.json({ message: "اسم الفئة مطلوب" }, { status: 400 });
    }

    // إنشاء الفئة الجديدة
    const newCategory = new Category({ name });
    await newCategory.save();

    return NextResponse.json({ message: "تمت إضافة الفئة بنجاح" }, { status: 201 });
  } catch (error) {
    console.error("خطأ أثناء إنشاء الفئة:", error);
    return NextResponse.json(
      { message: "حدث خطأ أثناء إنشاء الفئة" },
      { status: 500 }
    );
  }
}
