import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import {Menu} from 'lucide-react';

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
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
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
        <main className="container mx-auto py-10 px-6">
          {children}
        </main>
      </body>
    </html>
  );
}
