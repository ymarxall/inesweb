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
        isScrolled ? 'bg-green-600/80 backdrop-blur-sm shadow-lg' : 'bg-white shadow-none'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={isScrolled ? "/white.png" : "/green.png"} alt="Logo Inesa" className="h-8" />
        </div>
        <nav className="space-x-8">
          <Link
            href="#home"
            className={`font-semibold ${
              isScrolled ? 'text-white hover:text-gray-200' : 'text-green-600 hover:text-green-800'
            }`}
          >
            Beranda
          </Link>
          <Link
            href="#about"
            className={`font-semibold ${
              isScrolled ? 'text-white hover:text-gray-200' : 'text-green-600 hover:text-green-800'
            }`}
          >
            Tentang
          </Link>
          <Link
            href="#services"
            className={`font-semibold ${
              isScrolled ? 'text-white hover:text-gray-200' : 'text-green-600 hover:text-green-800'
            }`}
          >
            Layanan
          </Link>
          <Link
            href="#contact"
            className={`font-semibold ${
              isScrolled ? 'text-white hover:text-gray-200' : 'text-green-600 hover:text-green-800'
            }`}
          >
            Kontak
          </Link>
        </nav>
      </div>
    </header>
  );
}