'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';

// Custom BlogHeader component
function BlogHeader() {
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
      <header id="blog"
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-green-100'
            : 'bg-gradient-to-b from-green-50/90 to-transparent backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/green.png" 
              alt="Logo Inesa" 
              className="h-8 w-auto sm:h-10"
              loading="lazy"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className="font-medium text-green-800 hover:text-green-900 transition-all duration-200 text-base hover:scale-105"
            >
              Beranda
            </Link>
            <Link
              href="/#services"
              className="font-medium text-green-800 hover:text-green-900 transition-all duration-200 text-base hover:scale-105"
            >
              Upaya
            </Link>
            <Link
              href="/#mitra"
              className="font-medium text-green-800 hover:text-green-900 transition-all duration-200 text-base hover:scale-105"
            >
              Mitra
            </Link>
            <Link
              href="/#blog"
              className="font-medium text-green-600 hover:text-green-700 transition-all duration-200 text-base hover:scale-105 bg-green-50 px-3 py-1 rounded-lg"
            >
              Blog
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex">
            <Link
              href="#contact"
              className="font-semibold text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-6 py-2.5 rounded-xl transition-all duration-300 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-green-800 hover:text-green-900 hover:bg-green-50 rounded-xl transition-all duration-200"
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
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
            onClick={closeMenu}
          />
          
          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-out">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-green-50 to-blue-50">
              <img 
                src="/green.png" 
                alt="Logo Inesa" 
                className="h-8 w-auto"
                loading="lazy"
              />
              <button
                onClick={closeMenu}
                className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Items */}
            <nav className="flex flex-col p-6 space-y-2">
              <Link
                href="/"
                className="font-medium text-gray-800 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 px-4 py-3 rounded-xl transition-all duration-200 text-lg"
                onClick={closeMenu}
              >
                Beranda
              </Link>
              <Link
                href="/#services"
                className="font-medium text-gray-800 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 px-4 py-3 rounded-xl transition-all duration-200 text-lg"
                onClick={closeMenu}
              >
                Upaya
              </Link>
              <Link
                href="/#mitra"
                className="font-medium text-gray-800 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 px-4 py-3 rounded-xl transition-all duration-200 text-lg"
                onClick={closeMenu}
              >
                Desa Digital
              </Link>
              <Link
                href="/#blog"
                className="font-medium text-green-600 bg-gradient-to-r from-green-50 to-blue-50 px-4 py-3 rounded-xl transition-all duration-200 text-lg"
                onClick={closeMenu}
              >
                Blog
              </Link>
              
              {/* Mobile CTA Button */}
              <div className="pt-6 mt-6 border-t border-gray-100">
                <Link
                  href="#contact"
                  className="block w-full font-semibold text-center text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-6 py-4 rounded-xl transition-all duration-300 text-lg shadow-lg hover:shadow-xl"
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

export default function BlogPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <BlogHeader />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 max-w-6xl">
        {/* Hero Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-green-500 rounded-full px-4 py-2 mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-800">Blog Terbaru</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent leading-tight">
            Cerita & Update
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ikuti perjalanan digitalisasi desa dan berbagai kegiatan komunitas dalam membangun Indonesia digital
          </p>
        </div>

        {/* Featured Article Card */}
        <div className={`max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Link href="/bontomanai">
            <article 
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-700 hover:-translate-y-1 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Image Container */}
              <div className="relative h-40 sm:h-56 lg:h-72 overflow-hidden">
                <img 
                  src="/des.png" 
                  alt="Coconut Computer Club di Desa Bontomanai" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/70"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-green-500/20 transition-all duration-500 group-hover:from-green-500/30 group-hover:to-green-500/30"></div>
                
                {/* Date Badge */}
                <div className="absolute top-3 left-3">
                  <div className="bg-white/90 backdrop-blur-sm rounded-md px-2.5 py-1 border border-white/50 transition-all duration-500 group-hover:bg-white group-hover:scale-105">
                    <div className="flex items-center gap-1 text-[0.65rem]">
                      <svg className="w-2.5 h-2.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                      </svg>
                      <time className="font-medium text-gray-800">8 Mei 2025</time>
                    </div>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute bottom-3 right-3">
                  <div className="bg-green-500 rounded-full px-2.5 py-1 transition-all duration-500 group-hover:bg-green-600 group-hover:scale-105">
                    <span className="text-white font-medium text-[0.65rem]">Kemitraan</span>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className={`absolute top-12 right-12 w-12 h-12 bg-white/10 rounded-full blur-xl transition-all duration-700 ${isHovered ? 'animate-pulse scale-150' : ''}`}></div>
                <div className={`absolute bottom-12 left-12 w-10 h-10 bg-green-500/20 rounded-full blur-lg transition-all duration-700 delay-300 ${isHovered ? 'animate-pulse scale-125' : ''}`}></div>
              </div>

              {/* Content */}
              <div className="p-3 sm:p-5 lg:p-7">
                <div className="flex items-center gap-2.5 mb-2.5 text-[0.65rem] text-gray-500">
                  <div className="flex items-center gap-1">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-[0.6rem]">CC</span>
                    </div>
                    <span className="font-medium">Coconut Computer Club</span>
                  </div>
                  <div className="flex items-center gap-0.5">
                    <svg className="w-2.5 h-2.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                    </svg>
                    <span>5 menit baca</span>
                  </div>
                </div>

                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2.5 leading-tight group-hover:text-green-700 transition-colors duration-300">
                  Coconut Computer Club Memperkenalkan INESA ke Desa Bontomanai
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-3 text-xs sm:text-sm">
                  Dalam misi memajukan digitalisasi desa di Indonesia, Coconut Computer Club mengunjungi 
                  Desa Bontomanai untuk memperkenalkan platform INESA sebagai solusi transformasi digital 
                  pemerintahan desa yang transparan dan efisien.
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {['Digitalisasi', 'Desa Bontomanai', 'INESA', 'Coconut Club'].map((tag, index) => (
                    <span 
                      key={index}
                      className="bg-green-100 text-green-500 px-1.5 py-0.5 rounded-full text-[0.65rem] font-medium transition-all duration-300 hover:bg-green-200"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <div className="flex items-center justify-end gap-1 text-green-500 font-medium group-hover:text-green-700 transition-colors duration-300">
                  <span>Baca Selengkapnya</span>
                  <svg 
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${isHovered ? 'translate-x-2' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-xl transition-all duration-500 pointer-events-none ${isHovered ? 'shadow-lg shadow-green-200/50' : ''}`}></div>
            </article>
          </Link>
        </div>

        {/* Coming Soon Section */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-green-50 to-green-500 rounded-2xl p-8 border border-green-100 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Artikel Lainnya Segera Hadir</h3>
            <p className="text-gray-600 mb-4">
              Kami sedang menyiapkan lebih banyak cerita menarik tentang digitalisasi desa dan kegiatan komunitas.
            </p>
            <div className="flex items-center justify-center gap-2 text-green-500">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}