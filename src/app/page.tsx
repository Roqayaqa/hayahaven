import ProductList from '@/components/ProductList';
import { Toaster } from '@/components/ui/toaster';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const slides = [
  {
    imageUrl: "https://picsum.photos/id/1043/1600/600",
    headline: "Discover Our New Hijab Collection",
    description: "Explore the latest styles and express your unique beauty.",
    cta: "Shop Now",
  },
  {
    imageUrl: "https://picsum.photos/id/1067/1600/600",
    headline: "Elegant and Modest Fashion",
    description: "Find the perfect hijab to complement your style.",
    cta: "View Collection",
  },
  {
    imageUrl: "https://picsum.photos/id/1074/1600/600",
    headline: "Timeless Hijabs for Every Occasion",
    description: "Elevate your look with our premium quality hijabs.",
    cta: "Explore Styles",
  },
];

export default function Home() {
  return (
    <div className="mx-auto py-10">
      <section className="relative w-full overflow-hidden">
        <Carousel opts={{ loop: true }}>
          <CarouselContent>
            {slides.map((slide, index) => (
              <CarouselItem key={index} className="relative h-[60vh] md:h-[80vh] w-full">
                <Card className="w-full h-full border-none shadow-none relative">
                  <CardContent className="p-0 w-full h-full relative">
                    <img
                      src={slide.imageUrl}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover rounded-none"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-12 text-white animate-fade-in">
                      <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                        {slide.headline}
                      </h2>
                      <p className="text-lg md:text-xl mb-6 drop-shadow-md">
                        {slide.description}
                      </p>
                      <Link href="/shop">
                        <Button className="bg-white text-black hover:bg-gray-200 text-md font-semibold px-6 py-3 rounded-full shadow-md">
                          {slide.cta}
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>

      <section className="mt-16 px-4 md:px-8">
        <h2 className="text-2xl font-semibold mb-5">Featured Hijabs</h2>
        <ProductList />
       </section>
     </div>
   );
 }
