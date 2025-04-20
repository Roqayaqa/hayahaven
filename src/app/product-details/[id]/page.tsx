"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { products } from "@/app/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Dialog } from "@headlessui/react";

const ProductDetailsPage = () => {
  const params = useParams();
  const productId = params?.id?.toString();
  const product = products.find((p) => p.id === productId);

  if (!product) return notFound();

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [addedToBag, setAddedToBag] = useState(false);

  const colorImages = product.colorImages?.[selectedColor] ?? product.images;

  const handleAddToBag = () => {
    setAddedToBag(true);
    setTimeout(() => setAddedToBag(false), 2000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* صور المنتج */}
      <div className="flex flex-wrap gap-4 justify-center">
        {colorImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`${product.name} - ${selectedColor}`}
            width={500}
            height={500}
            className="rounded-xl object-cover cursor-pointer"
            onClick={() => setSelectedImage(src)}
          />
        ))}
      </div>

      {/* التفاصيل */}
      <div>
        <h1 className="text-3xl font-semibold">{product.name}</h1>
        <p className="text-lg font-bold mb-4">${product.price.toFixed(2)} USD</p>
        <p className="text-sm text-gray-600 mb-6">{product.description}</p>

        {/* اختيار اللون */}
        <div className="mb-6">
          <h2 className="text-sm font-medium mb-2">Color</h2>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((color, i) => (
              <button
                key={i}
                onClick={() => setSelectedColor(color)}
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                  selectedColor === color ? "border-black" : "border-gray-300"
                }`}
                style={{ backgroundColor: color }}
              >
                {selectedColor === color && (
                  <span className="text-white text-xs font-bold">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* زر السلة */}
        <button
          onClick={handleAddToBag}
          className={`w-full py-3 rounded-full transition font-semibold ${
            addedToBag
              ? "bg-green-600 text-white"
              : "bg-black text-white hover:bg-gray-800"
          }`}
        >
          {addedToBag ? "Added!" : "ADD TO BAG"}
        </button>

        {/* وصف إضافي */}
        <div className="mt-8 border-t pt-6 text-sm text-gray-700 space-y-3">
          <p>A portion of all sales will support Muslim communities worldwide ♥︎</p>
          <p>Measurements: approx. 185 cm x 90 cm</p>
          <p>
            Our Everyday Crinkle Hijabs are made from ultra soft woven viscose
            material. With a chic crinkled texture, lightweight material and
            airy flow these hijabs stay in place with minimal effort. Our
            Everyday Crinkle Hijabs are perfect for every day wear and can be
            styled endlessly. Pair with our Cotton Undercaps and Magnet Pins for
            a stay-in-place all day hijab style.
          </p>
        </div>
      </div>

      {/* نافذة تكبير الصورة */}
      <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)} className="fixed z-50 inset-0">
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4 relative">
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Zoomed Image"
              width={800}
              height={800}
              className="rounded-xl object-contain max-h-[90vh]"
            />
          )}
          {/* زر إغلاق */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-3xl font-bold"
          >
            ×
          </button>
        </div>
      </Dialog>
    </div>
  );
};

export default ProductDetailsPage;
