// src/models/Product.ts
import mongoose from "mongoose";

// تعريف الـ Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: { type: [String], required: true },  // مصفوفة صور
  colors: { type: [String], required: true },  // مصفوفة ألوان
  colorImages: { type: Object, required: true } // قاموس لصور الألوان
});

// تصدير الـ Model
export const Product = mongoose.models.Product || mongoose.model("Product", productSchema);
