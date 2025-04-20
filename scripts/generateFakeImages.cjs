// scripts/generateFakeImages.ts
import * as fs from "fs";
import * as path from "path";
import * as sharp from "sharp";  // مكتبة لتحرير الصور (يمكنك تثبيتها إذا لم تكن موجودة)

// مسار المجلد الذي سنقوم بإنشاء الصور فيه
const imagesFolder = path.join(__dirname, "../public/images/products");

// إنشاء المجلد إذا لم يكن موجودًا
if (!fs.existsSync(imagesFolder)) {
  fs.mkdirSync(imagesFolder, { recursive: true });
}

// صورة وهمية باللون الأبيض
const fakeImagePath = path.join(imagesFolder, "fake-image.png");

// توليد صورة وهمية بيضاء بحجم 200x200
sharp({
  create: {
    width: 200,
    height: 200,
    channels: 3,
    background: { r: 255, g: 255, b: 255 },  // اللون الأبيض
  },
})
  .png()
  .toFile(fakeImagePath)
  .then(() => {
    console.log("✅ تم إنشاء الصورة الوهمية!");

    // الآن نقوم بتوليد الصور الوهمية بأسماء مختلفة
    const imageNames = [
   
     "product2-color2-1.png", "product2-color2-2.png", 
      "product2-color3-1.png", "product2-color3-2.png",
    "product3-color2-1.png", "product3-color2-2.png", 
      "product3-color3-1.png", "product3-color3-2.png",
     "product4-color2-1.png", "product4-color2-2.png", 
      "product4-color3-1.png", "product4-color3-2.png",
      "product5-color2-1.png", "product5-color2-2.png", 
      "product5-color3-1.png", "product5-color3-2.png",
       "product6-color2-1.png", "product6-color2-2.png", 
      "product6-color3-1.png", "product6-color3-2.png",
    ];

    // نسخ الصورة الوهمية إلى المسارات المطلوبة
    imageNames.forEach((imageName) => {
      fs.copyFileSync(fakeImagePath, path.join(imagesFolder, imageName));
    });

    console.log("✅ تم إنشاء جميع الصور الوهمية بأسماء مختلفة!");
  })
  .catch((error) => {
    console.error("❌ خطأ أثناء توليد الصورة الوهمية:", error);
  });
