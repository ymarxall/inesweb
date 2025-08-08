'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

// BlogHeader with updated navigation
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
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-green-100'
            : 'bg-gradient-to-b from-green-50/90 to-transparent backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/green.png" 
              alt="Logo Inesa" 
              className="h-8 w-auto sm:h-10"
              loading="lazy"
            />
          </div>

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
              className="font-medium text-green-600 hover:text-green-700 transition-all duration-200 text-base hover:scale-105 bg-green-50 px-3 py-1 rounded-lg"
            >
              Mitra
            </Link>
            <Link
              href="/blog"
              className="font-medium text-green-800 hover:text-green-900 transition-all duration-200 text-base hover:scale-105"
            >
              Blog
            </Link>
          </nav>

          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="font-semibold text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-6 py-2.5 rounded-xl transition-all duration-300 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105"
            >
              Hubungi Kami
            </Link>
          </div>

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

      {isMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
            onClick={closeMenu}
          />
          
          <div className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-out">
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
                className="font-medium text-green-600 bg-gradient-to-r from-green-50 to-blue-50 px-4 py-3 rounded-xl transition-all duration-200 text-lg"
                onClick={closeMenu}
              >
                Mitra
              </Link>
              <Link
                href="/#blog"
                className="font-medium text-gray-800 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 px-4 py-3 rounded-xl transition-all duration-200 text-lg"
                onClick={closeMenu}
              >
                Blog
              </Link>
              
              <div className="pt-6 mt-6 border-t border-gray-100">
                <Link
                  href="/contact"
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

// BlogFooter (reused from blog/page.js)
function BlogFooter() {
  return (
    <footer className="bg-green-600 text-white relative overflow-hidden min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px]">
      <div className="absolute inset-0 opacity-10 hidden sm:block">
        <svg className="absolute top-5 right-10 w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 lg:w-56 lg:h-28 xl:w-64 xl:h-32 2xl:w-72 2xl:h-36" viewBox="0 0 200 100">
          <path d="M20,80 Q100,20 180,60" stroke="white" strokeWidth="1" fill="none" />
        </svg>
        <svg className="absolute top-10 right-20 w-20 h-10 sm:w-24 sm:h-12 md:w-32 md:h-16 lg:w-40 lg:h-20 xl:w-48 xl:h-24 2xl:w-56 2xl:h-28" viewBox="0 0 150 80">
          <path d="M10,60 Q75,10 140,40" stroke="white" strokeWidth="1" fill="none" />
        </svg>
        <svg className="absolute bottom-10 right-5 w-40 h-24 sm:w-48 sm:h-28 md:w-56 sm:h-32 lg:w-64 lg:h-36 xl:w-72 xl:h-40 2xl:w-80 2xl:h-44" viewBox="0 0 220 120">
          <path d="M30,90 Q110,30 190,70" stroke="white" strokeWidth="1" fill="none" />
        </svg>
        <svg className="absolute bottom-20 right-14 w-24 h-12 sm:w-32 sm:h-16 md:w-40 md:h-20 lg:w-48 lg:h-24 xl:w-56 xl:h-28 2xl:w-64 2xl:h-32" viewBox="0 0 160 80">
          <path d="M15,60 Q80,20 145,50" stroke="white" strokeWidth="1" fill="none" />
        </svg>
        <svg className="absolute bottom-5 right-2 w-48 h-16 sm:w-56 sm:h-20 md:w-64 md:h-24 lg:w-72 lg:h-28 xl:w-80 xl:h-32 2xl:w-88 2xl:h-36" viewBox="0 0 250 100">
          <path d="M40,70 Q125,20 210,55" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="absolute inset-0 opacity-5 sm:hidden">
        <div className="absolute top-2 right-2 w-14 h-14 rounded-full border border-white"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 rounded-full border border-white"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 py-5 sm:py-7 md:py-9 lg:py-11 xl:py-13 2xl:py-15 relative z-10 max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-7 lg:p-9 mb-5 sm:mb-7 md:mb-9 lg:mb-11 xl:mb-13 2xl:mb-15 border border-white border-opacity-20 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2 sm:gap-3 md:gap-5 lg:gap-7 xl:gap-9 2xl:gap-11">
            <div className="flex-1 text-center lg:text-left">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-normal leading-relaxed text-white">
                Bergabunglah dengan desa-desa lain untuk menciptakan
                <span className="hidden sm:inline"><br /></span>
                <span className="sm:hidden"> </span>
                tata kelola desa yang modern dan transparan.
              </p>
            </div>
            <div className="flex-shrink-0 w-full sm:w-auto">
              <Link href="/contact">
                <button className="w-full sm:w-auto bg-white text-green-600 font-semibold px-4 sm:px-6 md:px-8 lg:px-10 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-xs sm:text-sm md:text-base lg:text-lg">
                  Bergabung
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-5 sm:mb-7 md:mb-9 lg:mb-11 xl:mb-13 2xl:mb-15">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-2 sm:mb-3 md:mb-5 lg:mb-7 text-white tracking-wide text-center sm:text-left">
            MENU LAINNYA
          </h3>
          
          <div className="hidden sm:flex flex-wrap gap-x-5 sm:gap-x-7 md:gap-x-9 lg:gap-x-11 xl:gap-x-13 2xl:gap-x-15 gap-y-1.5 justify-start">
            <a href="#beranda" className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg font-medium hover:text-green-200 transition-colors duration-300">
              Beranda
            </a>
            <a href="#upaya" className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg font-medium hover:text-green-200 transition-colors duration-300">
              Upaya
            </a>
            <a href="#mitra" className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg font-medium hover:text-green-200 transition-colors duration-300">
              Mitra
            </a>
            <a href="#blog" className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg font-medium hover:text-green-200 transition-colors duration-300">
              Blog
            </a>
          </div>

          <div className="flex flex-col gap-1.5 sm:hidden">
            <a href="#beranda" className="text-white text-[0.65rem] font-medium hover:text-green-200 transition-colors duration-300 bg-white bg-opacity-10 py-1 px-2 rounded-md text-left">
              Beranda
            </a>
            <a href="#upaya" className="text-white text-[0.65rem] font-medium hover:text-green-200 transition-colors duration-300 bg-white bg-opacity-10 py-1 px-2 rounded-md text-left">
              Upaya
            </a>
            <a href="#kelebihan" className="text-white text-[0.65rem] font-medium hover:text-green-200 transition-colors duration-300 bg-white bg-opacity-10 py-1 px-2 rounded-md text-left">
              Kelebihan
            </a>
            <a href="#blog" className="text-white text-[0.65rem] font-medium hover:text-green-200 transition-colors duration-300 bg-white bg-opacity-10 py-1 px-2 rounded-md text-left">
              Blog
            </a>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-2 sm:pt-3 md:pt-5 lg:pt-7 xl:pt-9 2xl:pt-11">
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-5 md:flex-row md:justify-between md:items-center">
            <div className="text-center md:text-left order-2 md:order-1">
              <p className="text-white opacity-70 text-[0.65rem] sm:text-xs md:text-sm lg:text-base xl:text-lg font-medium">
                © 2025 INESA BY COCONUT.ORG
              </p>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="hidden sm:flex gap-2 sm:gap-3 md:gap-5 lg:gap-7 xl:gap-9 2xl:gap-11 justify-center md:justify-end">
                <a 
                  href="#" 
                  className="text-white text-[0.65rem] sm:text-xs md:text-sm lg:text-base xl:text-lg font-medium hover:text-green-200 transition-colors duration-300"
                >
                  Linkedin
                </a>
                <a 
                  href="#" 
                  className="text-white text-[0.65rem] sm:text-xs md:text-sm lg:text-base xl:text-lg font-medium hover:text-green-200 transition-colors duration-300"
                >
                  Facebook
                </a>
                <a 
                  href="#" 
                  className="text-white text-[0.65rem] sm:text-xs md:text-sm lg:text-base xl:text-lg font-medium hover:text-green-200 transition-colors duration-300"
                >
                  Instagram
                </a>
                <a 
                  href="#" 
                  className="text-white text-[0.65rem] sm:text-xs md:text-sm lg:text-base xl:text-lg font-medium hover:text-green-200 transition-colors duration-300"
                >
                  Youtube
                </a>
              </div>

              <div className="grid grid-cols-2 gap-1.5 sm:gap-2 sm:hidden">
                <a 
                  href="#" 
                  className="text-white text-[0.65rem] font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-0.75 px-1.5 rounded-sm"
                >
                  Linkedin
                </a>
                <a 
                  href="#" 
                  className="text-white text-[0.65rem] font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-0.75 px-1.5 rounded-sm"
                >
                  Facebook
                </a>
                <a 
                  href="#" 
                  className="text-white text-[0.65rem] font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-0.75 px-1.5 rounded-sm"
                >
                  Instagram
                </a>
                <a 
                  href="#" 
                  className="text-white text-[0.65rem] font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-0.75 px-1.5 rounded-sm"
                >
                  Youtube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function KelebihanPage() {
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
            <span className="text-sm font-medium text-green-800">Keunggulan INESA</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent leading-tight">
            Mengapa Memilih INESA?
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            INESA adalah solusi digital terpadu yang dirancang untuk mentransformasi administrasi desa menjadi lebih efisien, transparan, dan modern. Temukan bagaimana fitur-fitur kami dapat membantu desa Anda.
          </p>
        </div>

        {/* Solusi Section */}
        <div className={`mb-16 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Solusi Digital untuk Desa Modern
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Solusi Card 1: Platform Digital Lengkap */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Platform Digital Lengkap</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                INESA menyediakan ekosistem digital terintegrasi yang mencakup semua aspek administrasi desa, dari surat-menyurat hingga pengelolaan keuangan. Platform ini dirancang untuk menyederhanakan proses, meningkatkan efisiensi, dan memastikan transparansi dalam setiap operasi desa. Dengan antarmuka yang intuitif, semua pengguna—mulai dari kepala desa hingga warga—dapat mengakses layanan dengan mudah.
              </p>
            </div>

            {/* Solusi Card 2: Layanan Surat Menyurat Online */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l4 4a1 1 0 001.414 0l4-4a1 1 0 011.414 1.414L12.414 12l4.293 4.293a1 1 0 01-1.414 1.414L11 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L9.586 12 5.293 7.707a1 1 0 010-1.414z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Layanan Surat Menyurat Online</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Proses pengajuan surat kini lebih cepat dan praktis dengan sistem surat-menyurat online INESA. Warga dapat mengajukan surat seperti surat keterangan atau izin tanpa perlu mengunjungi kantor desa. Sistem ini terintegrasi dengan database desa, memastikan data akurat dan proses verifikasi yang cepat. Antarmuka yang ramah pengguna memudahkan semua kalangan untuk mengakses layanan ini.
              </p>
            </div>

            {/* Solusi Card 3: Sistem Informasi Kependudukan */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sistem Informasi Kependudukan</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Kelola data kependudukan dengan presisi menggunakan sistem informasi kependudukan INESA. Data warga tersimpan secara terstruktur, memungkinkan pembuatan laporan demografi yang akurat dalam hitungan detik. Sistem ini mendukung pembaruan data real-time, integrasi dengan layanan lain, dan akses yang aman, memastikan informasi sensitif terlindungi.
              </p>
            </div>

            {/* Solusi Card 4: Dashboard Keuangan Desa */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm2 4a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dashboard Keuangan Desa</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Dashboard keuangan INESA mempermudah pengelolaan Anggaran Pendapatan dan Belanja Desa (APBDes). Lacak realisasi anggaran, buat laporan keuangan, dan analisis data dengan visualisasi yang jelas dan interaktif. Fitur ini membantu desa memenuhi standar akuntabilitas, mengurangi risiko kesalahan, dan meningkatkan transparansi kepada warga.
              </p>
            </div>
          </div>
        </div>

        {/* Keunggulan Section */}
        <div className={`mb-16 transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            Keunggulan Utama INESA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Keunggulan Card 1: Sistem Persuratan Digital Terpadu */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l4 4a1 1 0 001.414 0l4-4a1 1 0 011.414 1.414L12.414 12l4.293 4.293a1 1 0 01-1.414 1.414L11 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L9.586 12 5.293 7.707a1 1 0 010-1.414z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sistem Persuratan Digital Terpadu</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Sistem persuratan INESA mengotomatiskan seluruh alur surat-menyurat, dari pengajuan hingga pengarsipan. Dengan integrasi ke database kependudukan dan keuangan, setiap surat dihasilkan dengan data yang akurat. Fitur ini mengurangi ketergantungan pada proses manual, mempercepat pelayanan, dan meningkatkan kepuasan warga.
              </p>
            </div>

            {/* Keunggulan Card 2: Template Dokumen Profesional */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 2v8h8V6H6zm2 2h4v4H8V8z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Template Dokumen Profesional</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                INESA menyediakan koleksi template dokumen yang sesuai dengan standar administrasi desa, seperti surat keterangan, undangan, dan laporan resmi. Template ini dapat disesuaikan dengan mudah, menghemat waktu dan memastikan konsistensi format. Desain profesional meningkatkan citra pemerintahan desa di mata warga dan pihak eksternal.
              </p>
            </div>

            {/* Keunggulan Card 3: Cloud Storage yang Aman */}
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a6 6 0 00-6 6v1H3a2 2 0 00-2 2v5a2 2 0 002 2h14a2 2 0 002-2v-5a2 2 0 00-2-2h-1V8a6 6 0 00-6-6zm0 2a4 4 0 014 4v1H6V8a4 4 0 014-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud Storage yang Aman</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Semua dokumen dan data desa disimpan di cloud dengan enkripsi tingkat tinggi, menjamin keamanan dari ancaman siber. Akses data dapat dilakukan kapan saja, dari perangkat apa pun, tanpa khawatir kehilangan informasi. Sistem cadangan otomatis memastikan data tetap aman meski terjadi gangguan teknis.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-green-50 to-green-500 rounded-2xl p-8 border border-green-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Siap Transformasi Digital Desa Anda?</h3>
            <p className="text-gray-600 mb-6">
              Bergabunglah dengan desa-desa lain yang telah menggunakan INESA untuk administrasi yang lebih modern dan efisien.
            </p>
            <Link
              href="/#contact"
              className="inline-block font-semibold text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-6 py-3 rounded-xl transition-all duration-300 text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105"
            >
              Hubungi Kami Sekarang
            </Link>
          </div>
        </div>
      </div>
      
      <BlogFooter />
    </div>
  );
}