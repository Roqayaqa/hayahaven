
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: "1",
    name: "Elegant Chiffon Hijab",
    imageUrl: "/images/products/product1.png",
    description: "A lightweight and breathable chiffon hijab.",
    price: 25.0,
    images: [
      "/images/products/product1.png",
      "/images/products/product1-hover.png"
    ],
    colors: ["#F2EFEA", "#E3C5A3", "#C7625D"]
  },
  {
    id: "2",
    name: "Premium Jersey Hijab",
    imageUrl: "/images/products/product2.png",
    description: "A soft and comfortable jersey hijab.",
    price: 30.0,
    images: [
      "/images/products/product2.png",
      "/images/products/product2-hover.png"
    ],
    colors: ["#D6D2CD", "#BAA5A0", "#6C4A4A"]
  },
  {
    id: "3",
    name: "Luxury Silk Hijab",
    imageUrl: "/images/products/product3.png",
    description: "An exquisite silk hijab for elegant looks.",
    price: 45.0,
    images: [
      "/images/products/product3.png",
      "/images/products/product3-hover.png"
    ],
    colors: ["#EEE1D3", "#D7BFAE", "#926D57"]
  },
  {
    id: "4",
    name: "Printed Cotton Hijab",
    imageUrl: "/images/products/product4.png",
    description: "A vibrant printed cotton hijab.",
    price: 28.0,
    images: [
      "/images/products/product4.png",
      "/images/products/product4-hover.png"
    ],
    colors: ["#E6D2B5", "#BC9270", "#6A3D2D"]
  },
  {
    id: "5",
    name: "Embroidered Modal Hijab",
    imageUrl: "/images/products/product5.png",
    description: "A beautifully embroidered modal hijab.",
    price: 38.0,
    images: [
      "/images/products/product5.png",
      "/images/products/product5-hover.png"
    ],
    colors: ["#F3E7D3", "#D1A47A", "#805D3B"]
  },
  {
    id: "6",
    name: "Classic Black Abaya",
    imageUrl: "/images/products/product6.png",
    description: "A timeless classic black abaya.",
    price: 55.0,
    images: [
      "/images/products/product6.png",
      "/images/products/product6-hover.png"
    ],
    colors: ["#000000", "#333333", "#4D4D4D"]
  }
];

export { products };

const ProductList = () => {
  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        🌸 Our Featured Collection 🌸
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
