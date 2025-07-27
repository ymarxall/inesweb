"use client";
/* Komponen: Header dengan logo, navigasi, dan efek transparansi serta blur saat scroll */
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-20 transition-colors duration-300 ${
        isScrolled ? 'bg-gradient-to-b from-green-200 to-transparent' : 'bg-gradient-to-b from-green-200 to-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/green.png" alt="Logo Inesa" className="h-8 mr-8" />
        </div>
        <nav className="flex space-x-8 mx-auto">
          <Link
            href="#home"
            className="font-semibold text-green-800 hover:text-green-900"
          >
            Beranda
          </Link>
          <Link
            href="#about"
            className="font-semibold text-green-800 hover:text-green-900"
          >
            Upaya
          </Link>
          <Link
            href="#services"
            className="font-semibold text-green-800 hover:text-green-900"
          >
            Desa Digital
          </Link>
          <Link
            href="#contact"
            className="font-semibold text-green-800 hover:text-green-900"
          >
            Publikasi
          </Link>
        </nav>
        <div>
          <Link
            href="#contact"
            className="font-semibold text-white bg-green-600 px-6 py-2 rounded hover:bg-green-700 transition"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </header>
  );
}