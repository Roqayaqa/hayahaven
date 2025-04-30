import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#fdf2f8] border-t border-pink-200 text-gray-700 py-12 mt-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <Image src="/images/logo.png" alt="Haya Haven Logo" width={160} height={56} className="h-16 w-auto mb-4" />
          <p className="text-sm leading-relaxed">
            At <strong>Haya Haven</strong>, we celebrate modesty and style with a curated collection of elegant hijabs for every woman. Explore timeless beauty, comfort, and confidence—wrapped in fabric.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-pink-600 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/products">🛍️ Shop Now</Link></li>
            <li><Link href="/collections">🌸 Collections</Link></li>
            <li><Link href="/on-sale">💸 On Sale</Link></li>
            <li><Link href="/privacy-policy">🔒 Privacy Policy</Link></li>
            <li><Link href="/terms-and-conditions">⚖️ Terms & Conditions</Link></li>
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
            <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-500 transition">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="https://www.youtube.com" aria-label="Youtube" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition">
              <Youtube className="h-6 w-6" />
            </a>
          </div>
          <p className="text-sm mb-2">Subscribe to our newsletter</p>
          <form className="flex space-x-2">
            <input type="email" required placeholder="Enter your email" className="px-3 py-2 text-sm rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-300" />
            <button type="submit" className="px-4 py-2 bg-pink-500 text-white text-sm font-medium rounded-md hover:bg-pink-600 transition duration-300">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-10">
        <p className="hover:text-pink-500 transition-colors duration-300">
          © {new Date().getFullYear()} Haya Haven — All rights reserved. Designed with 🌸 by Haya Team.
        </p>
      </div>
    </footer>
  );
}
