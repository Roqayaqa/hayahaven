// src/pages/api/products.ts
import { connectDB } from "@/lib/dbConnect";
import { Product } from "@/models/Product";

export async function handler(req, res) {
  await connectDB();

  const products = await Product.find();  // جلب جميع المنتجات
  res.status(200).json(products);
}

export default handler;
