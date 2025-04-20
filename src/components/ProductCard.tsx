import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  images: string[];
  description: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const displayImage = isHovered ? product.images[1] : product.images[0];

  return (
    <Card className="w-full md:w-80 shadow-lg rounded-3xl overflow-hidden transition-transform duration-300 hover:scale-105">
      <CardContent className="p-4">
        <Link href={`/product-details/${product.id}`} aria-label={`View details for ${product.name}`}>
          <div 
            className="relative aspect-[3/4]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="absolute top-2 left-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
              New
            </span>
            <Image 
              src={displayImage} 
              alt={product.name} 
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              className="object-cover rounded-xl hover:opacity-90 transition-opacity duration-300 cursor-pointer"
            />
          </div>
        </Link>

        <h3 className="text-xl font-semibold text-gray-800 text-center mb-2 mt-4">{product.name}</h3>

        <CardDescription className="text-sm text-gray-600 text-center">
          {product.description}
        </CardDescription>
      </CardContent>

      <CardFooter className="flex items-center justify-between p-4">
        <span className="text-pink-500 font-bold text-base flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c.828 0 1.5.672 1.5 1.5S12.828 11 12 11s-1.5-.672-1.5-1.5S11.172 8 12 8zm0 7c2.21 0 4-1.79 4-4S14.21 7 12 7s-4 1.79-4 4 1.79 4 4 4z" />
          </svg>
          ${product.price.toFixed(2)}
        </span>
        <Button 
          className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full transition duration-300 flex items-center gap-2"
          aria-label={`Add ${product.name} to cart`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.6 8M17 13l1.6 8M6 21h12" />
          </svg>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
