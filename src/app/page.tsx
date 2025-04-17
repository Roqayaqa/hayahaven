'use client';
 
 import ProductList from '@/components/ProductList';
-import { Toaster } from '@/components/ui/toaster';
 import { Swiper, SwiperSlide } from 'swiper/react';
 import { Navigation, Pagination, Autoplay } from 'swiper/modules';
 import 'swiper/css';
@@ -103,10 +75,10 @@
 import 'swiper/css/pagination';
 import Image from 'next/image';
 import Link from 'next/link';
-import { Button } from '@/components/ui/button';
 import 'aos/dist/aos.css';
 import AOS from 'aos';
 import { useEffect } from 'react';
+import { Button } from '@/components/ui/button';
 import { useState } from 'react';
 
 const slides = [
@@ -139,10 +111,6 @@
     AOS.init({ duration: 1000, once: true });
   }, []);
 
-  const [isChatOpen, setIsChatOpen] = useState(false);
-
-  const toggleChat = () => {
-    setIsChatOpen(!isChatOpen);
-  };
 
   return (
     <div className="mx-auto py-10 relative">
@@ -385,24 +353,6 @@
           </div>
         </div>
       </section>
-
-      {/* AI Chat Widget */}
-      <div className="fixed bottom-4 right-4">
-        <button
-          onClick={toggleChat}
-          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-full shadow-lg transition duration-300"
-        >
-          {isChatOpen ? 'Close Chat' : 'Chat with AI'}
-        </button>
-        {isChatOpen && (
-          <div className="mt-2 w-80 h-64 bg-white rounded-lg shadow-lg overflow-hidden">
-            {/* Implement your AI chat interface here */}
-            <iframe
-              src="https://www.example.com/ai-chat" // Replace with your AI chat URL
-              title="AI Chat"
-              width="100%"
-              height="100%"
-            />
-          </div>
-        )}
-      </div>
     </div>
   );
 }
