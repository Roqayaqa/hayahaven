'use client';
 
 import { Geist, Geist_Mono } from 'next/font/google';
 import './globals.css';
 import { ThemeProvider } from '@/components/ThemeProvider';
 import { Button } from "@/components/ui/button";
 import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
-import Link from 'next/link';
+import { Instagram, Facebook, TikTok } from 'lucide-react';
+import Link from 'next/link';
 import { useState, useEffect } from 'react';
 import Image from 'next/image';
-import { Instagram, Facebook, TikTok } from 'lucide-react';
 import Footer from '@/components/Footer';
 
 
