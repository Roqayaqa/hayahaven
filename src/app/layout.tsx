import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {Menu, Home, ShoppingBag, List, Sparkle, Star, Percent, Truck, Phone, User} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Haya Haven - Elegant Islamic Hijabs',
  description: 'Discover a curated collection of elegant Islamic hijabs. Shop the latest styles and find your perfect hijab at Haya Haven.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <header className="bg-background sticky top-0 z-50">
            <div className="container mx-auto py-4 px-6 flex items-center justify-between">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Menu className="h-4 w-4 mr-2" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full sm:w-64">
                  <nav className="grid gap-4 text-sm sm:text-lg font-semibold">
                    <Link href="/" className="flex items-center space-x-2">
                      <Home className="h-4 w-4" />
                      <span>Home</span>
                    </Link>
                    <Link href="/shop" className="flex items-center space-x-2">
                      <ShoppingBag className="h-4 w-4" />
                      <span>Shop All</span>
                    </Link>
                    <Link href="/collections" className="flex items-center space-x-2">
                      <List className="h-4 w-4" />
                      <span>Collections</span>
                    </Link>
                    <Link href="/new-arrivals" className="flex items-center space-x-2">
                      <Sparkle className="h-4 w-4" />
                      <span>New Arrivals</span>
                    </Link>
                    <Link href="/bestsellers" className="flex items-center space-x-2">
                      <Star className="h-4 w-4" />
                      <span>Bestsellers</span>
                    </Link>
                    <Link href="/on-sale" className="flex items-center space-x-2">
                      <Percent className="h-4 w-4" />
                      <span>On Sale</span>
                    </Link>
                    <Link href="/track-order" className="flex items-center space-x-2">
                      <Truck className="h-4 w-4" />
                      <span>Track My Order</span>
                    </Link>
                    <Link href="/contact" className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>Contact Us</span>
                    </Link>
                    <Link href="/about" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>About Us</span>
                    </Link>
                  </nav>
                </SheetContent>
              </Sheet>
              <a href="/" className="text-xl font-semibold">
                Haya Haven
              </a>
              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="hover:text-accent-foreground flex items-center space-x-2">
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </Link>
                 <Link href="/shop" className="hover:text-accent-foreground flex items-center space-x-2">
                  <ShoppingBag className="h-4 w-4" />
                  <span>Shop All</span>
                </Link>
                 <Link href="/collections" className="hover:text-accent-foreground flex items-center space-x-2">
                  <List className="h-4 w-4" />
                  <span>Collections</span>
                </Link>
                 <Link href="/new-arrivals" className="hover:text-accent-foreground flex items-center space-x-2">
                  <Sparkle className="h-4 w-4" />
                  <span>New Arrivals</span>
                </Link>
                  <Link href="/bestsellers" className="hover:text-accent-foreground flex items-center space-x-2">
                  <Star className="h-4 w-4" />
                  <span>Bestsellers</span>
                </Link>
                  <Link href="/on-sale" className="hover:text-accent-foreground flex items-center space-x-2">
                   <Percent className="h-4 w-4" />
                  <span>On Sale</span>
                </Link>
                 <Link href="/track-order" className="hover:text-accent-foreground flex items-center space-x-2">
                   <Truck className="h-4 w-4" />
                  <span>Track My Order</span>
                </Link>
                <Link href="/contact" className="hover:text-accent-foreground flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Contact Us</span>
                </Link>
                 <Link href="/about" className="hover:text-accent-foreground flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>About Us</span>
                </Link>
              </nav>
            </div>
          </header>
           <main className="container mx-auto py-10 px-6">
            <section className="relative h-64 md:h-96 bg-primary rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/id/4/1200/400"
                alt="Hero Banner"
                className="absolute w-full h-full object-cover"
                />
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
                <h2 className="text-4xl font-bold mb-4">Discover Our New Collection</h2>
                <p className="text-lg mb-8">Find the perfect hijab to express your style and faith.</p>
                <Button size="lg">Shop Now</Button>
              </div>
            </section>
            {children}
          </main>
       </body>
     </html>
   );
 }
