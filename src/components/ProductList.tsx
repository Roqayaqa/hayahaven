import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: "1",
    name: "Elegant Chiffon Hijab",
    imageUrl: "https://picsum.photos/id/1/400/300", // Placeholder image
    description: "A lightweight and breathable chiffon hijab for everyday wear.",
    price: 25.00,
  },
  {
    id: "2",
    name: "Premium Jersey Hijab",
    imageUrl: "https://picsum.photos/id/2/400/300", // Placeholder image
    description: "A soft and comfortable jersey hijab perfect for any occasion.",
    price: 30.00,
  },
  {
    id: "3",
    name: "Luxury Silk Hijab",
    imageUrl: "https://picsum.photos/id/3/400/300", // Placeholder image
    description: "An exquisite silk hijab that adds a touch of elegance to your look.",
    price: 45.00,
  },
  {
    id: "4",
    name: "Printed Cotton Hijab",
    imageUrl: "https://picsum.photos/id/4/400/300", // Placeholder image
    description: "A vibrant printed cotton hijab, perfect for adding a pop of color to your wardrobe.",
    price: 28.00,
  },
  {
    id: "5",
    name: "Embroidered Modal Hijab",
    imageUrl: "https://picsum.photos/id/5/400/300", // Placeholder image
    description: "A beautifully embroidered modal hijab, adding a touch of sophistication to your ensemble.",
    price: 38.00,
  },
  {
    id: "6",
    name: "Classic Black Abaya",
    imageUrl: "https://picsum.photos/id/6/400/300", // Placeholder image
    description: "A timeless classic black abaya, essential for every modest wardrobe.",
    price: 55.00,
  },
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
