'use client';

import ProductList from '@/components/ProductList';
import { Toaster } from '@/components/ui/toaster';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const slides = [
  {
    imageUrl: "/images/hijab1.webp", // استخدام المسار المحلي
    headline: "Discover Our New Hijab Collection",
    description: "Explore the latest styles and express your unique beauty.",
    cta: "Shop Now",
  },
  {
    imageUrl: "/images/hijab2.webp", // استخدام المسار المحلي
    headline: "Elegant and Modest Fashion",
    description: "Find the perfect hijab to complement your style.",
    cta: "View Collection",
  },
  {
    imageUrl: "/images/hijab3.webp", // استخدام المسار المحلي
    headline: "Timeless Hijabs for Every Occasion",
    description: "Elevate your look with our premium quality hijabs.",
    cta: "Explore Styles",
  },
];

export default function Home() {
  return (
    <div className="mx-auto py-10">
      
      {/* Hero Section (Slideshow) */}
      <section className="relative w-full h-[80vh]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                <Image
                  src={slide.imageUrl} // تحميل الصورة من المسار المحلي
                  alt={`Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="brightness-75"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
                  <h2 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">{slide.headline}</h2>
                  <p className="text-lg md:text-2xl mb-6 drop-shadow">{slide.description}</p>
                  <Link href="/shop">
                    <Button className="bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100">
                      {slide.cta}
                    </Button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Featured Hijabs Section */}
      <section className="mt-16 px-4 md:px-8">
        <h2 className="text-2xl font-semibold mb-5">Featured Hijabs</h2>
        <ProductList />
      </section>
    </div>
  );
}
