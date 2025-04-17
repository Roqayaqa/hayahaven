'use client';
 
 import { Geist, Geist_Mono } from 'next/font/google';
 import './globals.css';
 import { Menu, Instagram, Facebook, Youtube } from 'lucide-react';
 import { Button } from "@/components/ui/button";
 import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
-import Link from 'next/link';
 import Link from 'next/link';
 import { useState, useEffect } from 'react';
 import Image from 'next/image';
@@ -52,7 +52,7 @@
     <html lang="en">
       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
         
-          <header className="bg-background sticky top-0 z-50">
+          <header className="bg-background sticky top-0 z-40">
             <div className="container mx-auto py-4 px-6 flex items-center justify-between">
               <Button
                 variant="ghost"
@@ -162,5 +162,4 @@
     </html>
   );
 }
-
 'use client'
