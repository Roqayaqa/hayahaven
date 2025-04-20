const fs = require("fs");
const path = require("path");

const imagesFolder = path.join(__dirname, "../public/images/products");

// أسماء وهمية للصور اللي ممكن تكون مستخدمة
const imageNames = [
 
 
  "product2-color2-1.png",
  "product2-color2-2.png",
  "product2-color3-1.png",
  "product2-color3-2.png",

 
  "product3-color2-1.png",
  "product3-color2-2.png",
  "product3-color3-1.png",
  "product3-color3-2.png",

  "product4.png",
  "product4-hover.png",
  "product4-color2-1.png",
  "product4-color2-2.png",
  "product4-color3-1.png",
  "product4-color3-2.png",

 
  "product5-color2-1.png",
  "product5-color2-2.png",
  "product5-color3-1.png",
  "product5-color3-2.png",

 
  "product6-color2-1.png",
  "product6-color2-2.png",
  "product6-color3-1.png",
  "product6-color3-2.png"
];

// تأكدي من وجود مجلد الصور
if (!fs.existsSync(imagesFolder)) {
  fs.mkdirSync(imagesFolder, { recursive: true });
  console.log("📁 تم إنشاء مجلد الصور:", imagesFolder);
}

// إنشاء صور وهمية
imageNames.forEach((name) => {
  const imagePath = path.join(imagesFolder, name);
  if (!fs.existsSync(imagePath)) {
    fs.writeFileSync(imagePath, "FAKE_IMAGE_DATA");
    console.log(`✅ تم إنشاء صورة وهمية: ${name}`);
  } else {
    console.log(`ℹ️ الصورة موجودة بالفعل: ${name}`);
  }
});

console.log("🎉 تم إنشاء جميع الصور الوهمية بنجاح!");
