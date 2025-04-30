"use client";

import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import Image from 'next/image';

const links = [
  ['/', 'Home'],
  ['/products', 'Shop All'],
  ['/collections', 'Collections'],
  ['/contact', 'Contact'],
  ['/about', 'About'],
  ['/faqs', 'FAQs'],
  ['/my-account', 'My Account'],
  ['/shopping-cart', 'Shopping Cart'],
  ['/track-order', 'Track Order'],
  ['/shipping-payments', 'Shipping & Payments'],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="bg-gradient-to-r from-pink-100 via-pink-200 to-pink-100 text-pink-800 text-sm font-medium overflow-hidden border-b border-pink-300 h-9 flex items-center">
        <div className="marquee">
          <span className="mx-8 text-shadow">🎉 Free Shipping on Orders Over $50!</span>
          <span className="mx-8 text-shadow">✨ Get 10% Off Your First Purchase!</span>
          <span className="mx-8 text-shadow">🌸 New Arrivals are Here — Check Them Out!</span>
          <span className="mx-8 text-shadow">💖 Modesty Meets Style in Every Hijab!</span>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-lg shadow-sm mt-0">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="Haya Haven Logo" width={150} height={56} className="h-14 w-auto" priority />
          </Link>

          <div className="hidden md:flex flex-1 max-w-md mx-6 relative">
            <input type="text" placeholder="Search products..." className="w-full border border-gray-300 rounded-full px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
            </svg>
          </div>

          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            {links.map(([href, label]) => (
              <Link href={href} key={href} className="hover:text-pink-600 transition duration-300">{label}</Link>
            ))}
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(!open)}
              className={`text-pink-600 transition-all duration-300 transform ${open ? 'rotate-90' : ''}`}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {open && (
            <div className="fixed inset-0 z-[9999] bg-pink-500/95 backdrop-blur-lg flex flex-col items-center justify-between text-white text-xl font-semibold px-6 py-10 min-h-screen transform transition-all duration-500 ease-in-out">
              <button onClick={() => setOpen(false)} className="absolute top-6 right-6 text-white text-3xl hover:text-pink-200 transition duration-300 ease-in-out" aria-label="Close Menu">✕</button>
              <div className="flex flex-col space-y-4 flex-grow">
                {links.map(([href, label]) => (
                  <Link href={href} key={href} onClick={() => setOpen(false)} className="hover:text-white/80 transition-all duration-300">{label}</Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
