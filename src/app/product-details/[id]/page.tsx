"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { products } from "@/app/data/products";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Dialog } from "@headlessui/react";
import Head from "next/head";

const ProductDetailsPage = () => {
  const params = useParams();
  const router = useRouter();
  const productId = params?.id?.toString();
  const product = products.find((p) => p.id.toString() === productId);

  if (!product) return notFound();

  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] ?? "");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [addedToBag, setAddedToBag] = useState(false);

  const colorImages = product.colorImages?.[selectedColor] ?? product.images ?? [];

  const handleAddToBag = () => {
    setAddedToBag(true);
    setTimeout(() => setAddedToBag(false), 2000);
  };

  return (
    <>
      <Head>
        <title>{product.name} - Hijab Store</title>
        <meta name="description" content={product.description} />
      </Head>

      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* زر الرجوع */}
        <div className="md:col-span-2 mb-6">
          <button
            onClick={() => router.back()}
            className="text-sm text-pink-600 hover:underline font-medium"
          >
            ← Back to products
          </button>
        </div>

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
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">{product.name}</h1>
          <p className="text-lg font-bold text-pink-600 mb-4">€{product.price.toFixed(2)} EUR</p>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">{product.description}</p>

          {/* اختيار اللون */}
          {product.colors && product.colors.length > 0 && (
            <div className="mb-6">
              <h2 className="text-sm font-medium mb-2">Color</h2>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      selectedColor === color ? "border-pink-600 scale-110" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.toLowerCase() }}
                  >
                    {selectedColor === color && (
                      <span className="text-white text-xs font-bold">✓</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* زر السلة */}
          <button
            onClick={handleAddToBag}
            className={`w-full py-3 rounded-full transition font-semibold text-white ${
              addedToBag ? "bg-green-600" : "bg-pink-600 hover:bg-pink-700"
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
          <div
            className="fixed inset-0 bg-black/70 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative p-4"
              onClick={(e) => e.stopPropagation()} // يمنع غلق النافذة عند الضغط على الصورة نفسها
            >
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
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default ProductDetailsPage;