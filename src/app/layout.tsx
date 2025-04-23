'use client';

import { Geist, Geist_Mono } from 'next/font/google';
import '../../global.css';
import { Menu, Instagram, Facebook, Youtube } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const currentYear = new Date().getFullYear(); // لا حاجة لـ useEffect هنا

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* شريط متحرك */}
        <section className="fixed top-0 left-0 w-full bg-gradient-to-r from-pink-100 via-pink-200 to-pink-100 text-pink-800 text-sm font-medium overflow-hidden border-b border-pink-300 z-50 h-9 flex items-center">
        <div className="whitespace-nowrap inline-block animate-[marquee_40s_linear_infinite]">
            <span className="mx-8">🎉 Free Shipping on Orders Over $50!</span>
            <span className="mx-8">✨ Get 10% Off Your First Purchase!</span>
            <span className="mx-8">🌸 New Arrivals are Here — Check Them Out!</span>
            <span className="mx-8">💖 Modesty Meets Style in Every Hijab!</span>
          </div>
        </section>

        {/* Header */}
        <header className="bg-white/80 backdrop-blur-lg shadow-sm fixed top-9 z-40 w-full">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="Haya Haven Logo"
                width={150}
                height={56}
                className="h-14 w-auto"
                priority
              />
            </Link>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-6 relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full border border-gray-300 rounded-full px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
              <Link href="/" className="hover:text-pink-600 transition">Home</Link>
              <Link href="/shop" className="hover:text-pink-600 transition">Shop All</Link>
              <Link href="/collections" className="hover:text-pink-600 transition">Collections</Link>
              <Link href="/new-arrivals" className="hover:text-pink-600 transition">New Arrivals</Link>
              <Link href="/bestsellers" className="hover:text-pink-600 transition">Bestsellers</Link>
              <Link href="/on-sale" className="hover:text-pink-600 transition">On Sale</Link>
              <Link href="/track-order" className="hover:text-pink-600 transition">Track Order</Link>
              <Link href="/contact" className="hover:text-pink-600 transition">Contact</Link>
            </nav>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-gray-700" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full sm:w-64">
                <nav className="grid gap-4 text-base font-medium text-gray-800 mt-4">
                  <Link href="/" onClick={handleClose}>Home</Link>
                  <Link href="/shop" onClick={handleClose}>Shop All</Link>
                  <Link href="/collections" onClick={handleClose}>Collections</Link>
                  <Link href="/new-arrivals" onClick={handleClose}>New Arrivals</Link>
                  <Link href="/bestsellers" onClick={handleClose}>Bestsellers</Link>
                  <Link href="/on-sale" onClick={handleClose}>On Sale</Link>
                  <Link href="/track-order" onClick={handleClose}>Track Order</Link>
                  <Link href="/contact" onClick={handleClose}>Contact</Link>
                  <Link href="/about" onClick={handleClose}>About</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </header>

        <main className="container mx-auto py-10 px-6">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-[#fdf2f8] border-t border-pink-200 text-gray-700 py-12 mt-20">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <Image
                src="/images/logo.png"
                alt="Haya Haven Logo"
                width={160}
                height={56}
                className="h-16 w-auto mb-4"
              />
              <p className="text-sm leading-relaxed">
                At <strong>Haya Haven</strong>, we celebrate modesty and style with a curated collection of elegant hijabs for every woman. Explore timeless beauty, comfort, and confidence—wrapped in fabric.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-pink-600 mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/shop">🛍️ Shop All</Link></li>
                <li><Link href="/collections">🌸 Collections</Link></li>
                <li><Link href="/new-arrivals">🆕 New Arrivals</Link></li>
                <li><Link href="/bestsellers">🔥 Bestsellers</Link></li>
                <li><Link href="/on-sale">💸 On Sale</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-pink-600 mb-4">Customer Care</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/track-order">📦 Track My Order</Link></li>
                <li><Link href="/contact">📬 Contact Us</Link></li>
                <li><Link href="/about">👋 About Us</Link></li>
                <li><Link href="/faq">❓ FAQs</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-pink-600 mb-4">Stay Connected</h4>
              <div className="flex space-x-4 mb-4">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition">
                  <Youtube className="h-6 w-6" />
                </a>
              </div>
              <p className="text-sm mb-2">Subscribe to our newsletter</p>
              <form className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-pink-500 text-white text-sm font-medium rounded-md hover:bg-pink-600 transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="mt-10 border-t border-pink-200 pt-6 text-center text-xs text-gray-500">
            © {currentYear} Haya Haven — All rights reserved. Designed with 🌸 by Haya Team.
          </div>
        </footer>
      </body>
    </html>
  );
}
