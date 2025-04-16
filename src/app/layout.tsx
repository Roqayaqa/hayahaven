import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {Menu} from 'lucide-react';
import { Button } from "@/components/ui/button";

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
              
                <Menu className="h-6 w-6" />
              
              <a href="/" className="text-xl font-semibold">
                Haya Haven
              </a>
              <nav className="hidden md:flex space-x-6">
                <a href="#" className="hover:text-accent-foreground">Chiffon</a>
                <a href="#" className="hover:text-accent-foreground">Jersey</a>
                <a href="#" className="hover:text-accent-foreground">Silk</a>
                <a href="#" className="hover:text-accent-foreground">Cotton</a>
              </nav>
            </div>
          </header>
          
            
              
                
                  Welcome to your Haya Haven dashboard.
                
              
              
                
                  
                    Home
                  
                
                
                  
                    Products
                  
                
                
                  
                    Orders
                  
                
                
                  
                    Account
                  
                
              
            
            
              
                
                  Documentation
                
              
            
          

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
