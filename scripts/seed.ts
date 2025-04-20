// scripts/seed.ts

// import { connectDB } from "@/lib/dbConnect";
// import { Product } from "@/models/Product";
const { Product } = require("../src/models/Product");
const { connectDB } = require("../src/lib/dbConnect");

async function seed() {
  await connectDB();

  const products = [
    {
      name: "Elegant Chiffon Hijab",
      description: "A lightweight and breathable chiffon hijab.",
      price: 25.0,
      images: ["/images/products/product1.png", "/images/products/product1-hover.png"],
      colors: ["#046941", "#873260", "#002147"],
      colorImages: {
        "#046941": ["/images/products/product1.png", "/images/products/product1-hover.png"],
        "#873260": ["/images/products/product1-color2-1.png", "/images/products/product1-color2-2.png"],
        "#002147": ["/images/products/product1-color3-1.png", "/images/products/product1-color3-2.png"]
      }
    },
    {
      name: "Premium Jersey Hijab",
      description: "A soft and comfortable jersey hijab.",
      price: 30.0,
      images: ["/images/products/product2.png", "/images/products/product2-hover.png"],
      colors: ["#D6D2CD", "#BAA5A0", "#6C4A4A"],
      colorImages: {
        "#D6D2CD": ["/images/products/product2.png", "/images/products/product2-hover.png"],
        "#BAA5A0": ["/images/products/product2-color2-1.png", "/images/products/product2-color2-2.png"],
        "#6C4A4A": ["/images/products/product2-color3-1.png", "/images/products/product2-color3-2.png"]
      }
    },
    {
      name: "Luxury Silk Hijab",
      description: "An exquisite silk hijab for elegant looks.",
      price: 45.0,
      images: ["/images/products/product3.png", "/images/products/product3-hover.png"],
      colors: ["#EEE1D3", "#D7BFAE", "#926D57"],
      colorImages: {
        "#EEE1D3": ["/images/products/product3.png", "/images/products/product3-hover.png"],
        "#D7BFAE": ["/images/products/product3-color2-1.png", "/images/products/product3-color2-2.png"],
        "#926D57": ["/images/products/product3-color3-1.png", "/images/products/product3-color3-2.png"]
      }
    },
    {
      name: "Printed Cotton Hijab",
      description: "A vibrant printed cotton hijab.",
      price: 28.0,
      images: ["/images/products/product4.png", "/images/products/product4-hover.png"],
      colors: ["#E6D2B5", "#BC9270", "#6A3D2D"],
      colorImages: {
        "#E6D2B5": ["/images/products/product4.png", "/images/products/product4-hover.png"],
        "#BC9270": ["/images/products/product4-color2-1.png", "/images/products/product4-color2-2.png"],
        "#6A3D2D": ["/images/products/product4-color3-1.png", "/images/products/product4-color3-2.png"]
      }
    },
    {
      name: "Embroidered Modal Hijab",
      description: "A beautifully embroidered modal hijab.",
      price: 38.0,
      images: ["/images/products/product5.png", "/images/products/product5-hover.png"],
      colors: ["#F3E7D3", "#D1A47A", "#805D3B"],
      colorImages: {
        "#F3E7D3": ["/images/products/product5.png", "/images/products/product5-hover.png"],
        "#D1A47A": ["/images/products/product5-color2-1.png", "/images/products/product5-color2-2.png"],
        "#805D3B": ["/images/products/product5-color3-1.png", "/images/products/product5-color3-2.png"]
      }
    },
    {
      name: "Classic Black Abaya",
      description: "A timeless classic black abaya.",
      price: 55.0,
      images: ["/images/products/product6.png", "/images/products/product6-hover.png"],
      colors: ["#000000", "#333333", "#4D4D4D"],
      colorImages: {
        "#000000": ["/images/products/product6.png", "/images/products/product6-hover.png"],
        "#333333": ["/images/products/product6-color2-1.png", "/images/products/product6-color2-2.png"],
        "#4D4D4D": ["/images/products/product6-color3-1.png", "/images/products/product6-color3-2.png"]
      }
    }
  ];

  try {
    await Product.deleteMany(); // لحذف أي بيانات قديمة
    await Product.insertMany(products);
    console.log("✅ تم إدخال البيانات بنجاح إلى قاعدة البيانات!");
  } catch (error) {
    console.error("❌ خطأ أثناء إدخال البيانات:", error);
  } finally {
    process.exit();
  }
}

seed();
