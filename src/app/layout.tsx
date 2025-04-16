import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {Menu} from 'lucide-react';
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
                 <SheetTrigger asChild className="md:hidden">
                   <Button variant="ghost" size="sm">
                     <Menu className="h-6 w-6" />
                   </Button>
                 </SheetTrigger>
                 <SheetContent side="left" className="w-full sm:w-64">
                   <nav className="grid gap-4 text-sm sm:text-lg font-semibold">
                     <Link href="/" className="flex items-center space-x-2">
                       <span>Home</span>
                     </Link>
                     <Link href="/shop" className="flex items-center space-x-2">
                       <span>Shop All</span>
                     </Link>
                     <Link href="/collections" className="flex items-center space-x-2">
                       <span>Collections</span>
                      </Link>
                     <Link href="/new-arrivals" className="flex items-center space-x-2">
                       <span>New Arrivals</span>
                      </Link>
                     <Link href="/bestsellers" className="flex items-center space-x-2">
                       <span>Bestsellers</span>
                     </Link>
                     <Link href="/on-sale" className="flex items-center space-x-2">
                       <span>On Sale</span>
                     </Link>
                     <Link href="/track-order" className="flex items-center space-x-2">
                       <span>Track My Order</span>
                     </Link>
                     <Link href="/contact" className="flex items-center space-x-2">
                       <span>Contact Us</span>
                     </Link>
                     <Link href="/about" className="flex items-center space-x-2">
                       <span>About Us</span>
                     </Link>
                   </nav>
                 </SheetContent>
               </Sheet>
              <a href="/" className="text-xl font-semibold">
                Haya Haven
              </a>
              <nav className="hidden md:flex justify-center space-x-6 ml-auto">
                 <Link href="/" className="hover:text-primary transition-colors duration-200">
                  Home
                </Link>
                 <Link href="/shop" className="hover:text-primary transition-colors duration-200">
                  Shop All
                </Link>
                 <Link href="/collections" className="hover:text-primary transition-colors duration-200">
                  Collections
                </Link>
                 <Link href="/new-arrivals" className="hover:text-primary transition-colors duration-200">
                  New Arrivals
                </Link>
                  <Link href="/bestsellers" className="hover:text-primary transition-colors duration-200">
                   Bestsellers
                 </Link>
                  <Link href="/on-sale" className="hover:text-primary transition-colors duration-200">
                  On Sale
                 </Link>
                 <Link href="/track-order" className="hover:text-primary transition-colors duration-200">
                   Track My Order
                 </Link>
                <Link href="/contact" className="hover:text-primary transition-colors duration-200">
                  Contact Us
                </Link>
                 <Link href="/about" className="hover:text-primary transition-colors duration-200">
                   About Us
                 </Link>
              </nav>
            </div>
          </header>
            
              
                
                 
                   Find the perfect hijab to express your style and faith.
                 
                 Shop Now
                
              
            
             {children}
           
        </body>
      </html>
    );
  }

