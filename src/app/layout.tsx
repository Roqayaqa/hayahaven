'use client';
 
 import { Geist, Geist_Mono } from 'next/font/google';
 import './globals.css';
-@@ -6,7 +6,7 @@
 import { Button } from "@/components/ui/button";
 import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
 import Link from 'next/link';
 import { useState, useEffect } from 'react';
 import Image from 'next/image';
 import Footer from '@/components/Footer';
+import { Instagram, Facebook, TikTok } from 'lucide-react';
 
 
 const geistSans = Geist({
