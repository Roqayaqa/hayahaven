import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="w-full md:w-80 shadow-md rounded-lg overflow-hidden">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
       <Link href="/product-details">
         <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
       </Link>
        <CardDescription>{product.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4">
        <span>${product.price.toFixed(2)}</span>
        <Button>Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

