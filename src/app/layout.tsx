
'use client';

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Menu, Instagram, Facebook, Youtube } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Widget } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';


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

  const handleNewUserMessage = async (newMessage: string) => {
    // Send the message to the backend API
    const response = await fetch('/api/getChatResponse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newMessage }),
    });

    const data = await response.json();

    // Add the AI response to the chat widget
    //addNewMessage(data.response);
  };

  useEffect(() => {
    console.log('useEffect called');
  }, []);


  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="bg-background sticky top-0 z-50">
          <div className="container mx-auto py-4 px-6 flex items-center justify-between">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full sm:w-64">
                <nav className="grid gap-4 text-sm sm:text-lg font-semibold">
                  <Link href="/" onClick={handleClose}>Home</Link>
                  <Link href="/shop" onClick={handleClose}>Shop All</Link>
                  <Link href="/collections" onClick={handleClose}>Collections</Link>
                  <Link href="/new-arrivals" onClick={handleClose}>New Arrivals</Link>
                  <Link href="/bestsellers" onClick={handleClose}>Bestsellers</Link>
                  <Link href="/on-sale" onClick={handleClose}>On Sale</Link>
                  <Link href="/track-order" onClick={handleClose}>Track My Order</Link>
                  <Link href="/contact" onClick={handleClose}>Contact Us</Link>
                  <Link href="/about" onClick={handleClose}>About Us</Link>
                </nav>
              </SheetContent>
            </Sheet>

            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/logo.png"
                alt="Haya Haven Logo"
                width={150}
                height={56}
                priority
                className="h-14 w-auto"
              />
            </Link>

            <nav className="hidden md:flex justify-center space-x-6 ml-auto">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop All</Link>
              <Link href="/collections">Collections</Link>
              <Link href="/new-arrivals">New Arrivals</Link>
              <Link href="/bestsellers">Bestsellers</Link>
              <Link href="/on-sale">On Sale</Link>
              <Link href="/track-order">Track My Order</Link>
              <Link href="/contact">Contact Us</Link>
              <Link href="/about">About Us</Link>
            </nav>
          </div>
        </header>

        <main className="container mx-auto py-10 px-6">
          {/* Hero Section */}
          <section className="relative h-screen w-full overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-75"
            >
              <source src="/videos/heroVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                Discover Your Signature Style
              </h1>
              <p className="text-white text-lg md:text-xl max-w-2xl mb-8 drop-shadow">
                Modest, elegant, and made just for you. Browse our premium hijab collections and express your beauty with confidence.
              </p>
              <a
                href="/products"
                className="bg-pink-500 hover:bg-pink-600 text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300"
              >
                Shop the Collection
              </a>
            </div>
          </section>

          {children}
        </main>

        <footer className="bg-gray-100 border-t py-10 mt-20">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start space-y-4">
              <Image
                src="/images/logo.png"
                alt="Haya Haven Logo"
                width={150}
                height={56}
                className="h-14 w-auto"
              />
              <p className="text-gray-600 text-sm">
                Discover a curated collection of elegant Islamic hijabs for every occasion.
              </p>
            </div>
            <div>
              <h4 className="text-gray-800 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li><Link href="/shop">Shop All</Link></li>
                <li><Link href="/collections">Collections</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/track-order">Track Order</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gray-800 font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
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
             </div>
          </div>
          <div className="text-center text-xs text-gray-500 mt-10">
            © {new Date().getFullYear()} Haya Haven. All rights reserved.
          </div>
        </footer>
         <Widget
          handleNewUserMessage={handleNewUserMessage}
          title="Chat with AI"
          subtitle="Ask me anything about our products!"
        />
      </body>
     
    </html>
  );
}
