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

const slides = [
  {
    imageUrl: "/images/hijab1.webp",
    headline: "Discover Our New Hijab Collection",
    description: "Explore the latest styles and express your unique beauty.",
    cta: "Shop Now",
  },
  {
    imageUrl: "/images/hijab2.webp",
    headline: "Elegant and Modest Fashion",
    description: "Find the perfect hijab to complement your style.",
    cta: "View Collection",
  },
  {
    imageUrl: "/images/hijab3.webp",
    headline: "Timeless Hijabs for Every Occasion",
    description: "Elevate your look with our premium quality hijabs.",
    cta: "Explore Styles",
  },
];

export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="mx-auto py-10">



      <section className="relative h-screen w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-75"
        >
          <source src="/videos/heroVideo2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Discover Your Signature Style
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mb-8 drop-shadow">
            Modest, elegant, and made just for you. Browse our premium hijab collections and express your beauty with confidence.
          </p>
          <Link
            href="/products"
            className="bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      <section className="relative py-36 bg-gradient-to-br from-rose-100 via-pink-50 to-white overflow-hidden mt-[-60px]">
        {/* زخارف خلفية دائرية ناعمة */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-pink-200 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-100px] right-[-50px] w-96 h-96 bg-rose-300 opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute inset-0 bg-[url('/images/decor/soft-pattern.svg')] bg-center bg-no-repeat opacity-10 mix-blend-multiply"></div>

        {/* المحتوى */}
        <div data-aos="zoom-in" className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight drop-shadow-sm">
            Elegance That Speaks for Itself
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
            Find the perfect hijab that reflects your identity — subtle, luxurious, and full of soul.
          </p>
          <Link
            href="/collections"
            className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
          >
            Browse Collections
          </Link>
        </div>

        {/* فاصل الموجة بين الأقسام */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
          <svg viewBox="0 0 1440 320" className="w-full h-[100px]">
            <path fill="#fff" fillOpacity="1" d="M0,96L80,112C160,128,320,160,480,176C640,192,800,192,960,170.7C1120,149,1280,107,1360,85.3L1440,64V320H0Z"></path>
          </svg>
        </div>
      </section>
      {/* Hero Section (Slideshow) */}
      <section className="relative w-full h-[80vh]">
        <Swiper
          modules={[ Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full overflow-hidden">
                <div className="absolute inset-0 transform scale-105 hover:scale-110 transition duration-[6000ms] ease-in-out">
                  <Image
                    src={slide.imageUrl}
                    alt={`Slide ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="brightness-75"
                  />
                </div>

                <div className="absolute inset-0 flex items-center justify-center px-4">
                  <div
                    className="bg-gray-800 bg-opacity-50 p-6 md:p-10 rounded-xl text-center max-w-2xl mx-auto text-white"
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  >
                    <h2
                      className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-xl"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      {slide.headline}
                    </h2>
                    <p
                      className="text-base md:text-xl mb-6 drop-shadow"
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      {slide.description}
                    </p>
                    <div data-aos="fade-up" data-aos-delay="700">
                      <Link href="/shop">
                        <Button className="bg-pink-500 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-pink-600 transition duration-300 glow-button">
                          {slide.cta}
                        </Button>

                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>


      {/* Feature Section */}
      <section className="py-28 bg-gradient-to-br from-pink-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/decor/leaf-pattern.svg')] bg-no-repeat bg-center opacity-20 pointer-events-none"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-20 tracking-wide transform transition-all duration-500 hover:scale-105" data-aos="zoom-in">
            Why <span className="text-pink-500">Haya Haven?</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
            {/* Feature 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 transform" data-aos="fade-up">
              <img
                src="/images/features/fast-shipping.png"
                alt="Fast Shipping"
                className="w-20 h-20 object-cover rounded-full mx-auto mb-6 ring-4 ring-pink-300 transform transition-all duration-500 hover:scale-110"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Shipping</h3>
              <p className="text-gray-600 text-base">Get your hijabs quickly and safely delivered to your door.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 transform" data-aos="fade-up" data-aos-delay="100">
              <img
                src="/images/features/quality.png"
                alt="Premium Quality"
                className="w-20 h-20 object-cover rounded-full mx-auto mb-6 ring-4 ring-pink-300 transform transition-all duration-500 hover:scale-110"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-base">Luxurious fabrics carefully selected for elegance and comfort.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 transform" data-aos="fade-up" data-aos-delay="200">
              <img
                src="/images/features/support.png"
                alt="Support"
                className="w-20 h-20 object-cover rounded-full mx-auto mb-6 ring-4 ring-pink-300 transform transition-all duration-500 hover:scale-110"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Exceptional Support</h3>
              <p className="text-gray-600 text-base">Friendly, fast, and always ready to help you with a smile.</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 transform" data-aos="fade-up" data-aos-delay="300">
              <img
                src="/images/features/customer.png"
                alt="Happy Customers"
                className="w-20 h-20 object-cover rounded-full mx-auto mb-6 ring-4 ring-pink-300 transform transition-all duration-500 hover:scale-110"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Loved by Thousands</h3>
              <p className="text-gray-600 text-base">Join a growing community of confident and modest women worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hijabs Section */}
      <section className="mt-16 px-4 md:px-8">
        <ProductList />
      </section>

      {/* Customer Testimonials */}
      <section className="my-16 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-12 tracking-wide" data-aos="fade-up">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="p-6 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:scale-105" data-aos="fade-up" data-aos-delay="100">
            <img
              src="/images/customers/sarah.jpg"
              alt="Sarah A."
              className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-pink-300"
            />
            <p className="text-gray-700 italic text-lg">"Loved the quality and design, will order again!"</p>
            <p className="mt-4 font-semibold text-gray-800">— Sarah A.</p>
          </div>

          {/* Review 2 */}
          <div className="p-6 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:scale-105" data-aos="fade-up" data-aos-delay="200">
            <img
              src="/images/customers/fatima.jpg"
              alt="Fatima Z."
              className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-pink-300"
            />
            <p className="text-gray-700 italic text-lg">"Delivery was super fast and packaging was perfect!"</p>
            <p className="mt-4 font-semibold text-gray-800">— Fatima Z.</p>
          </div>

          {/* Review 3 */}
          <div className="p-6 border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:-translate-y-2 hover:scale-105" data-aos="fade-up" data-aos-delay="300">
            <img
              src="/images/customers/lina.jpg"
              alt="Lina M."
              className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-pink-300"
            />
            <p className="text-gray-700 italic text-lg">"The hijab is even better in real life than the photos!"</p>
            <p className="mt-4 font-semibold text-gray-800">— Lina M.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-pink-50 py-20 px-6 text-center rounded-3xl mt-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">Ready to Elevate Your Style? 💫</h2>
          <p className="text-gray-700 text-lg mb-8">Explore our latest collection of elegant, comfortable hijabs and step into your confidence.</p>
          <Link
            href="/products"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white text-lg font-medium py-3 px-8 rounded-full transition duration-300"
          >
            Shop Now
          </Link>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white px-6" id="faq">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6 text-left">
            {/* Question 1 */}
            <details className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <summary className="cursor-pointer font-semibold text-pink-600 text-lg">How can I place an order?</summary>
              <p className="mt-4 text-gray-700 leading-relaxed">Simply select your favorite product, add it to your cart, and proceed to checkout with easy steps.</p>
            </details>

            {/* Question 2 */}
            <details className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <summary className="cursor-pointer font-semibold text-pink-600 text-lg">How long does shipping take?</summary>
              <p className="mt-4 text-gray-700 leading-relaxed">We typically deliver within 2-5 business days, and you’ll receive updates along the way.</p>
            </details>

            {/* Question 3 */}
            <details className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition">
              <summary className="cursor-pointer font-semibold text-pink-600 text-lg">Can I return or exchange a product?</summary>
              <p className="mt-4 text-gray-700 leading-relaxed">Yes! You can return or exchange within 7 days of receiving your item, as long as it’s unused and in original condition.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
  );
}
