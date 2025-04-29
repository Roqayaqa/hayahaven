import React, { useEffect, useState } from "react";
import { Sparkles, Heart, ShieldCheck } from "lucide-react";
import Layout from "../app/layout";

const About: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true); // تأجيل تحميل المحتوى بعد تحميل الصفحة
  }, []);

  if (!isMounted) {
    return null; // إذا لم تكن الصفحة قد تم تحميلها على العميل، لا تعرض شيء
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16 px-6 lg:px-24 text-gray-800">
        
        {/* Hero Section */}
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Our Story
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We are more than just a hijab store. Haya is a movement of grace, strength, and modest elegance. Our vision is to redefine the concept of modest fashion by blending it with modern style and comfort.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              Founded by women, for women — our journey began with a vision to create a space where modesty meets modern style. We believe that every woman deserves to feel confident, comfortable, and beautiful while staying true to her values.
            </p>
            <p>
              Our hijabs are thoughtfully curated using premium fabrics and crafted to inspire effortless elegance. Whether it's for daily wear or special occasions, we have something for every moment. From everyday essentials to chic statement pieces, we strive to meet the needs of every woman.
            </p>
            <p>
              At Haya, we’re committed to quality, authenticity, and empowering women through fashion that reflects their values. We collaborate with artisans and designers to create styles that empower and inspire.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src="/images/about/about-cover.png"
              alt="About Haya"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Our Core Values</h2>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-105 duration-300">
              <Sparkles className="mx-auto text-pink-500 w-12 h-12 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Elegance</h3>
              <p className="text-gray-600 text-sm">
                Every piece is designed to reflect timeless beauty with a modern touch. Our designs seamlessly blend modesty with sophistication, offering an elegant solution for every occasion.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-105 duration-300">
              <Heart className="mx-auto text-red-400 w-12 h-12 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Empowerment</h3>
              <p className="text-gray-600 text-sm">
                We aim to inspire confidence through modest fashion rooted in self-respect. Our goal is to provide women with the tools to express their style with dignity and grace.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:scale-105 duration-300">
              <ShieldCheck className="mx-auto text-green-500 w-12 h-12 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Integrity</h3>
              <p className="text-gray-600 text-sm">
                From materials to mission, we stay true to our promise of quality and ethics. Our commitment to ethical production processes ensures that every piece is made with care and respect.
              </p>
            </div>
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="mt-24 bg-gray-100 py-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Vision & Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Haya, we envision a world where women are free to express themselves through fashion that aligns with their values. We believe that modest fashion can be stylish, empowering, and comfortable all at once. Our mission is to continue innovating and offering quality products that celebrate both modesty and modernity.
          </p>
        </div>

        {/* Testimonial Section */}
        <div className="mt-24 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">What Our Customers Say</h2>
          <div className="flex justify-center gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md max-w-xs">
              <p className="text-gray-600 text-sm italic mb-4">"I love the quality of the hijabs! They are not only stylish but also comfortable to wear every day. The designs are so unique, and I feel confident wearing them." - Sara M.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md max-w-xs">
              <p className="text-gray-600 text-sm italic mb-4">"The elegance of the hijabs is unparalleled! I wear them for work and special events, and I always feel beautiful and modest." - Amina K.</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-24 bg-pink-500 text-white py-12 text-center rounded-3xl">
          <h2 className="text-3xl font-semibold mb-6">Join the Haya Movement</h2>
          <p className="text-lg mb-8">Become part of a community of empowered women who are redefining modest fashion. Shop now and discover your new favorite hijab.</p>
          <a href="/shop" className="bg-white text-pink-500 py-3 px-8 rounded-full text-lg font-semibold hover:bg-pink-100 transition">
            Shop Now
          </a>
        </div>

      </div>
    </Layout>
  );
};

export default About;
