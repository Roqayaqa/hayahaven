import ProductList from '@/components/ProductList';
import { Toaster } from '@/components/ui/toaster';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

export default function Home() {
  return (
    <div className="mx-auto py-10">
     <section className="relative h-64 md:h-96 bg-primary rounded-lg overflow-hidden">
              <img
                 src="https://picsum.photos/id/1067/800/400"
                  alt="Elegant Islamic Hijabs"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 transform scale-105 hover:scale-100"
                 />
               <div className="absolute inset-0 bg-black opacity-20"></div>
                 <div className="relative z-10 flex flex-col items-center justify-center text-center h-full text-white">
                  <h1 className="text-2xl md:text-4xl font-semibold mb-4">
                    Find the perfect hijab to express your style and faith.
                  </h1>
                  <p className="text-md md:text-lg mb-8 px-4 md:px-0">
                    Explore our curated collection of elegant Islamic hijabs.
                  </p>
                  <Button>Shop Now</Button>
                 </div>
             </section>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-5">Featured Hijabs</h2>
        <ProductList />
      </section>
    </div>
  );
}

