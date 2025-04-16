import ProductList from '@/components/ProductList';
import { Toaster } from '@/components/ui/toaster';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button"
import Link from 'next/link';
 
@@ -35,7 +34,7 @@
 
 export default function Home() {
   return (
-    <div className="container mx-auto py-10">
+    <div className="mx-auto py-10">
        <section className="relative rounded-lg overflow-hidden">
           <Carousel
              opts={{
@@ -49,11 +48,9 @@
                   <div className="p-1">
                     <Card className="border-none shadow-none">
                       <CardContent className="flex flex-col items-center justify-center p-0 relative">
-                        <AspectRatio ratio={800 / 400} className="w-full">
                           <img
                              src={slide.imageUrl}
                              alt={`Slide ${index + 1}`}
-                             className="object-cover w-full h-full rounded-md"
                              />
                           </AspectRatio>
                           <div className="absolute inset-0 bg-black opacity-20"></div>

