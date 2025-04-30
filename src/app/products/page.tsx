"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Star } from "lucide-react";

const categories = ["All", "Shawls", "Accessories", "Hijabs", "Burkini"];

const products = [
  {
    id: 1,
    name: "Elegant Hijab",
    price: "€25.00",
    category: "Hijabs",
    images: ["/images/products/product1.png", "/images/products/product1-hover.png"],
    description: "A beautiful elegant hijab made from high-quality fabric.",
    colors: ["Red", "Blue", "Black"],
    isNew: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Silk Hijab",
    price: "€30.00",
    category: "Hijabs",
    images: ["/images/products/product2.png", "/images/products/product2-hover.png"],
    description: "Soft and luxurious silk hijab for elegant looks.",
    colors: ["White", "Pink", "Beige"],
    isNew: false,
    rating: 4.0,
  },
  {
    id: 3,
    name: "Chiffon Hijab",
    price: "€20.00",
    category: "Hijabs",
    images: ["/images/products/product3.png", "/images/products/product3-hover.png"],
    description: "Lightweight chiffon hijab for daily wear.",
    colors: ["Black", "Gray", "Maroon"],
    isNew: false,
    rating: 4.2,
  },
  {
    id: 4,
    name: "Cotton Hijab",
    price: "€18.00",
    category: "Shawls",
    images: ["/images/products/product4.png", "/images/products/product4-hover.png"],
    description: "Comfortable and breathable cotton hijab.",
    colors: ["Green", "Brown", "Navy"],
    isNew: true,
    rating: 3.8,
  },
];

export default function ProductsPage() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 1 },
    drag: true,
  });

  const router = useRouter();

  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [showQuickView, setShowQuickView] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleQuickView = (product) => {
    setCurrentProduct(product);
    setSelectedColor(null);
    setShowQuickView(true);
  };

  const closeQuickView = () => {
    setShowQuickView(false);
    setCurrentProduct(null);
  };

  const [addedToBag, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 py-14 px-6 lg:px-20">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-4 tracking-tight">
        Explore Our Collection
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
        Discover premium hijabs crafted with care and style. Designed for elegance and everyday comfort.
      </p>

      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full text-sm transition ${
              selectedCategory === cat ? "bg-pink-500 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-3xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-2 duration-300 p-4 cursor-pointer group"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
            onClick={() => router.push(`/product-details/${product.id}`)}
          >
            {product.isNew && (
              <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                NEW
              </span>
            )}
            <div className="relative w-full h-72 rounded-2xl overflow-hidden mb-4">
              <Image
                src={hoveredProduct === product.id ? product.images[1] : product.images[0]}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="transition-all duration-500"
              />
            </div>
            <div className="px-2">
              <h2 className="text-lg font-semibold text-gray-700 group-hover:text-black transition">
                {product.name}
              </h2>
              <div className="flex items-center gap-1 text-yellow-400 mt-1">
                {[...Array(Math.floor(product.rating))].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
                {product.rating % 1 >= 0.5 && <Star size={16} fill="currentColor" className="opacity-50" />}
              </div>
              <p className="text-gray-500 mt-1">{product.price}</p>
              <button
                className="mt-4 w-full bg-pink-500 hover:bg-gray-900 text-white py-2 rounded-full transition-all duration-300"
                onClick={(e) => {
                  e.stopPropagation();
                  handleQuickView(product);
                }}
              >
                Quick View
              </button>
            </div>
          </div>
        ))}
      </div>

      {showQuickView && currentProduct && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          onClick={closeQuickView}
        >
          <div
            className="bg-white rounded-2xl p-4 md:p-8 max-w-3xl w-full relative flex flex-col md:flex-row shadow-2xl overflow-y-auto max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeQuickView}
              className="absolute top-4 right-4 text-gray-600 text-2xl font-bold"
            >
              ×
            </button>

            <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-6 relative">
              <button onClick={() => instanceRef.current?.prev()} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10">
                ‹
              </button>
              <button onClick={() => instanceRef.current?.next()} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10">
                ›
              </button>
              <div ref={sliderRef} className="keen-slider w-full h-52 md:h-64 rounded-xl overflow-hidden">
                {currentProduct.images.map((img, idx) => (
                  <div key={idx} className="keen-slider__slide flex justify-center items-center bg-white group">
                    <Image
                      src={img}
                      alt={currentProduct.name}
                      width={300}
                      height={300}
                      className="object-contain max-h-52 md:max-h-64 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{currentProduct.name}</h2>
              <p className="text-gray-700 mb-4">{currentProduct.description}</p>
              <p className="text-xl font-semibold text-gray-900 mb-4">{currentProduct.price}</p>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-700">Colors:</h3>
                <div className="flex space-x-3 mt-2">
                  {currentProduct.colors.map((color, index) => {
                    const colorCode = color.toLowerCase();
                    const isSelected = selectedColor === colorCode;
                    return (
                      <div
                        key={index}
                        onClick={() => setSelectedColor(colorCode)}
                        className={`w-8 h-8 rounded-full border-2 cursor-pointer transition duration-300 ${
                          isSelected ? "border-pink-500 scale-110" : "border-gray-300"
                        }`}
                        style={{ backgroundColor: colorCode }}
                      ></div>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className={`w-full py-3 rounded-full transition font-semibold text-white ${
                  addedToBag ? "bg-green-600" : "bg-pink-600 hover:bg-pink-700"
                }`}
              >
                {addedToBag ? "Added!" : "ADD TO BAG"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
