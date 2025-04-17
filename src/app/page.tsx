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
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';
import { useState } from 'react';

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
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className="mx-auto py-10 relative">
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
                  fill
                  style={{ objectFit: 'cover' }}
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

      {/* // قسم المميزات  */}
      <section className="py-28 bg-gradient-to-br from-pink-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/decor/leaf-pattern.svg')] bg-no-repeat bg-center opacity-20 pointer-events-none"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2
            className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-20 tracking-wide transform transition-all duration-500 hover:scale-105"
            data-aos="zoom-in"
          >
            Why <span className="text-pink-500">Haya Haven?</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {/* Feature 1 */}
            <div
              className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 transform hover:scale-105"
              data-aos="fade-up"
            >
              <Image
                src="/images/features/fast-shipping.png"
                alt="Fast Shipping"
                width={80}
                height={80}
                className="object-cover rounded-full mx-auto mb-6 ring-4 ring-pink-300 transform transition-all duration-500 hover:scale-110"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Shipping</h3>
              <p className="text-gray-600 text-base">
                Get your hijabs quickly and safely delivered to your door.
              </p>
            </div>

            {/* Feature 2 */}
            <div
              className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <Image
                src="/images/features/quality.png"
                alt="Premium Quality"
                width={80}
                height={80}
                className="object-cover rounded-full mx-auto mb-6 ring-4 ring-pink-300 transform transition-all duration-500 hover:scale-110"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-base">
                Luxurious fabrics carefully selected for elegance and comfort.
              </p>
            </div>

            {/* Feature 3 */}
            <div
              className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Image
                src="/images/features/support.png"
                alt="Support"
                width={80}
                height={80}
                className="object-cover rounded-full mx-auto mb-6 ring-4 ring-pink-300 transform transition-all duration-500 hover:scale-110"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Exceptional Support</h3>
              <p className="text-gray-600 text-base">
                Friendly, fast, and always ready to help you with a smile.
              </p>
            </div>

            {/* Feature 4 */}
            <div
              className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Image
                src="/images/features/customer.png"
                alt="Happy Customers"
                width={80}
                height={80}
                className="object-cover rounded-full mx-auto mb-6 ring-4 ring-pink-300 transform transition-all duration-500 hover:scale-110"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Loved by Thousands</h3>
              <p className="text-gray-600 text-base">
                Join a growing community of confident and modest women worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* // انتهاء قسم المميزات */}

      {/* Featured Hijabs Section */}
      <section className="mt-16 px-4 md:px-8">
        <h2 className="text-2xl font-semibold mb-5">Featured Hijabs</h2>
        <ProductList />
      </section>

      {/* تجربة العملاء  */}
      <section className="my-16 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-12 tracking-wide" data-aos="fade-up">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div
            className="p-6 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <Image
              src="/images/customers/sarah.jpg" // قم بتغيير المسار إلى المسار الصحيح للصورة
              alt="Sarah A."
              width={112}
              height={112}
              className="rounded-full mx-auto mb-4 border-4 border-pink-300"
            />
            <p className="text-gray-700 italic text-lg">
              "Loved the quality and design, will order again!"
            </p>
            <p className="mt-4 font-semibold text-gray-800">— Sarah A.</p>
          </div>

          {/* Review 2 */}
          <div
            className="p-6 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Image
              src="/images/customers/fatima.jpg" // قم بتغيير المسار إلى المسار الصحيح للصورة
              alt="Fatima Z."
              width={112}
              height={112}
              className="rounded-full mx-auto mb-4 border-4 border-pink-300"
            />
            <p className="text-gray-700 italic text-lg">
              "Delivery was super fast and packaging was perfect!"
            </p>
            <p className="mt-4 font-semibold text-gray-800">— Fatima Z.</p>
          </div>

          {/* Review 3 */}
          <div
            className="p-6 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Image
              src="/images/customers/lina.jpg" // قم بتغيير المسار إلى المسار الصحيح للصورة
              alt="Lina M."
              width={112}
              height={112}
              className="rounded-full mx-auto mb-4 border-4 border-pink-300"
            />
            <p className="text-gray-700 italic text-lg">
              "The hijab is even better in real life than the photos!"
            </p>
            <p className="mt-4 font-semibold text-gray-800">— Lina M.</p>
          </div>
        </div>
      </section>

      {/* قسم call to action */}
      <section className="bg-pink-50 py-20 px-6 text-center rounded-3xl mt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
            Ready to Elevate Your Style? 💫
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Explore our latest collection of elegant, comfortable hijabs and step into your confidence.
          </p>
          <Link
            href="/products"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white text-lg font-medium py-3 px-8 rounded-full transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </section>

      {/* قسم الاسئلة الشائعه */}
      <section className="py-20 bg-white px-6" id="faq">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6 text-left">
            {/* Question 1 */}
            <details className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <summary className="cursor-pointer font-semibold text-pink-600 text-lg">
                How can I place an order?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Simply select your favorite product, add it to your cart, and proceed to checkout with easy steps.
              </p>
            </details>

            {/* Question 2 */}
            <details className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <summary className="cursor-pointer font-semibold text-pink-600 text-lg">
                How long does shipping take?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We typically deliver within 2-5 business days, and you’ll receive updates along the way.
              </p>
            </details>

            {/* Question 3 */}
            <details className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <summary className="cursor-pointer font-semibold text-pink-600 text-lg">
                Can I return or exchange a product?
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Yes! You can return or exchange within 7 days of receiving your item, as long as it’s unused and in original condition.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* AI Chat Widget */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleChat}
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition duration-300"
        >
          {isChatOpen ? 'Close Chat' : 'Chat with AI'}
        </button>
        {isChatOpen && (
          <div className="mt-2 w-80 h-64 bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Implement your AI chat interface here */}
            <iframe
              src="https://www.example.com/ai-chat" // Replace with your AI chat URL
              title="AI Chat"
              width="100%"
              height="100%"
            />
          </div>
        )}
      </div>
    </div>
  );
}
