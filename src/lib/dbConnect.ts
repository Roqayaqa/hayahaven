// src/lib/dbConnect.ts
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://qoraia97:fpSueaodQDeSc8Rv@productcluster.ge0zccp.mongodb.net/hijab-store?retryWrites=true&w=majority&appName=productCluster";

export async function connectDB() {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(MONGODB_URI, {
    dbName: "hijab-store", // اسم قاعدة البيانات داخل الكلاستر
  });
}
