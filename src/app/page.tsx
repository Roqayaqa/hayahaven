import ProductList from '@/components/ProductList';
import { Toaster } from '@/components/ui/toaster';

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-semibold mb-5">Featured Hijabs</h1>
      <ProductList />
      <Toaster />
    </div>
  );
}

