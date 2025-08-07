'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 overflow-x-hidden ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-green-100'
            : 'bg-gradient-to-b from-green-50/80 to-transparent backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 py-3 flex items-center justify-between max-w-full mx-4 sm:mx-6 lg:mx-8">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src="/green.png" 
              alt="Logo Inesa" 
              className="h-8 w-auto sm:h-9 lg:h-10"
              loading="lazy"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 mx-auto">
            <Link
              href="#home"
              className="font-medium text-green-800 hover:text-green-900 transition-colors duration-200 text-base"
            >
              Beranda
            </Link>
            <Link
              href="#about"
              className="font-medium text-green-800 hover:text-green-900 transition-colors duration-200 text-base"
            >
              Upaya
            </Link>
            <Link 
              href="#desa"
              className="font-medium text-green-800 hover:text-green-900 transition-colors duration-200 text-base"
            >
              Desa Digital
            </Link>
            <Link
              href="/blog"
              className="font-medium text-green-800 hover:text-green-900 transition-colors duration-200 text-base"
            >
              Blog
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex flex-shrink-0">
            <Link
              href="#contact"
              className="font-semibold text-white bg-green-600 hover:bg-green-700 px-5 py-2 sm:px-6 sm:py-2.5 rounded-lg transition-all duration-300 text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-green-800 hover:text-green-900 hover:bg-green-50 rounded-lg transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
            onClick={closeMenu}
          />
          
          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-out overflow-x-hidden">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <img 
                src="/green.png" 
                alt="Logo Inesa" 
                className="h-8 w-auto"
                loading="lazy"
              />
              <button
                onClick={closeMenu}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col p-6 space-y-1">
              <Link
                href="#home"
                className="font-medium text-gray-800 hover:text-green-600 hover:bg-green-50 px-4 py-3 rounded-lg transition-colors duration-200 text-lg"
                onClick={closeMenu}
              >
                Beranda
              </Link>
              <Link
                href="#about"
                className="font-medium text-gray-800 hover:text-green-600 hover:bg-green-50 px-4 py-3 rounded-lg transition-colors duration-200 text-lg"
                onClick={closeMenu}
              >
                Upaya
              </Link>
              <Link
                href="#desa"
                className="font-medium text-gray-800 hover:text-green-600 hover:bg-green-50 px-4 py-3 rounded-lg transition-colors duration-200 text-lg"
                onClick={closeMenu}
              >
                Desa Digital
              </Link>
              <Link
                href="/blog"
                className="font-medium text-gray-800 hover:text-green-600 hover:bg-green-50 px-4 py-3 rounded-lg transition-colors duration-200 text-lg"
                onClick={closeMenu}
              >
                Blog
              </Link>
              
              {/* Mobile CTA Button */}
              <div className="pt-6 mt-6 border-t border-gray-100">
                <Link
                  href="#contact"
                  className="block w-full font-semibold text-center text-white bg-green-600 hover:bg-green-700 px-5 py-3 sm:px-6 sm:py-4 rounded-lg transition-colors duration-200 text-lg shadow-md"
                  onClick={closeMenu}
                >
                  Hubungi Kami
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
}