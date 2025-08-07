'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

// Custom BlogHeader component to override Header links
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
              href="/desa"
              className="font-medium text-green-800 hover:text-green-900 transition-all duration-200 text-base hover:scale-105"
            >
              Upaya
            </Link>
            <Link
              href="/"
              className="font-medium text-green-800 hover:text-green-900 transition-all duration-200 text-base hover:scale-105"
            >
              Desa Digital
            </Link>
            <Link
              href="/"
              className="font-medium text-green-800 hover:text-green-900 transition-all duration-200 text-base hover:scale-105"
            >
              Blog
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex">
            <Link
              href="/contact"
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
                href="/desa"
                className="font-medium text-gray-800 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 px-4 py-3 rounded-xl transition-all duration-200 text-lg"
                onClick={closeMenu}
              >
                Upaya
              </Link>
              <Link
                href="/"
                className="font-medium text-gray-800 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 px-4 py-3 rounded-xl transition-all duration-200 text-lg"
                onClick={closeMenu}
              >
                Desa Digital
              </Link>
              <Link
                href="/"
                className="font-medium text-gray-800 hover:text-green-600 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 px-4 py-3 rounded-xl transition-all duration-200 text-lg"
                onClick={closeMenu}
              >
                Blog
              </Link>
              
              {/* Mobile CTA Button */}
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

export default function BlogArticlePage() {
  const [activeSection, setActiveSection] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const tableOfContents = [
    { id: 'tentang-desa', title: 'Tentang Desa Bontomanai' },
    { id: 'latar-belakang', title: 'Latar Belakang Kemitraan' },
    { id: 'fitur-dukungan', title: 'Fitur dan Dukungan dari Inesa' },
    { id: 'kesimpulan', title: 'Kesimpulan' }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = tableOfContents.map(item => document.getElementById(item.id)).filter(Boolean);
      const currentSection = sections.find(section => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = "Inesa & Pemerintah Desa Bontomanai";
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      instagram: `https://www.instagram.com/?url=${encodeURIComponent(url)}`,
      tiktok: `https://www.tiktok.com/share?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`
    };

    window.open(shareUrls[platform], '_blank');
    setIsShareOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <BlogHeader />
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 relative">
          {/* Main Article */}
          <article className="flex-1 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            {/* Hero Section */}
            <div className="relative h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-green-600 via-blue-600 to-purple-700 overflow-hidden">
              <img 
                src="/des.png" 
                alt="Desa Bontomanai" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-10 right-10 w-20 h-20 sm:w-32 sm:h-32 bg-white bg-opacity-10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-10 left-10 w-16 h-16 sm:w-24 sm:h-24 bg-green-300 bg-opacity-20 rounded-full blur-lg animate-pulse delay-1000"></div>
              
              <div className="relative h-full flex items-end p-4 sm:p-6 lg:p-8">
                <div className="text-white">
                  <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm text-gray-200">
                    <time className="bg-white bg-opacity-20 px-2 py-1 sm:px-3 sm:py-1 rounded-full backdrop-blur-sm">
                      Mei 8, 2025
                    </time>
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-xs">5 min read</span>
                    </div>
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4 leading-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    Inesa & Pemerintah Desa Bontomanai
                  </h1>
                  <p className="text-sm sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-3xl">
                    Menuju Tata Kelola Desa yang Transparan, Efisien, dan Digital.
                  </p>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <div className="p-4 sm:p-6 lg:p-12">
              <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                
                {/* Section 1: Tentang Desa */}
                <section id="tentang-desa" className="mb-12 sm:mb-16">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-3 sm:mr-4"></div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Tentang Desa Bontomanai</h2>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-green-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                      <div className="flex-shrink-0 w-full sm:w-16 h-40 sm:h-16 bg-gradient-to-br from-green-200 to-blue-200 rounded-xl flex items-center justify-center mb-4 sm:mb-0">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">
                          Desa Bontomanai merupakan salah satu desa di Kecamatan Rumbia, 
                          Kabupaten Jeneponto, Sulawesi Selatan yang memiliki karakteristik geografis dataran 
                          rendah, dengan mayoritas penduduk bermata pencaharian di sektor pertanian dan 
                          perkebunan.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                          Dengan jumlah penduduk lebih dari 2.500 jiwa, desa ini memiliki potensi besar 
                          dalam pengembangan sektor ekonomi lokal serta peningkatan pelayanan publik 
                          melalui teknologi.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 2: Latar Belakang */}
                <section id="latar-belakang" className="mb-12 sm:mb-16">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-3 sm:mr-4"></div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Latar Belakang Kemitraan</h2>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                      <div className="flex-shrink-0 w-full sm:w-16 h-40 sm:h-16 bg-gradient-to-br from-blue-200 to-green-200 rounded-xl flex items-center justify-center mb-4 sm:mb-0">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">
                          Sebagai bagian dari komitmen dalam meningkatkan transparansi, efisiensi, dan pelayanan kepada masyarakat, Pemerintah Desa Bontomanai menjalin kerja sama strategis dengan Inesa—platform digitalisasi pemerintahan desa.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                          Kolaborasi ini diharapkan mampu mendukung akselerasi transformasi digital melalui integrasi sistem informasi yang menyeluruh dan dapat diakses oleh seluruh perangkat desa dan masyarakat.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 3: Fitur dan Dukungan */}
                <section id="fitur-dukungan" className="mb-12 sm:mb-16">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-3 sm:mr-4"></div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Fitur dan Dukungan dari Inesa</h2>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-green-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {[
                        {
                          title: 'Manajemen Keuangan Desa (APBDes)',
                          desc: 'Digitalisasi seluruh proses perencanaan, penganggaran, dan pelaporan keuangan desa.',
                          icon: '💰',
                          color: 'from-green-100 to-green-200'
                        },
                        {
                          title: 'Sistem Informasi Penduduk (SIP)',
                          desc: 'Pendataan warga yang lebih terstruktur dan mudah dikelola untuk layanan administrasi desa.',
                          icon: '👥',
                          color: 'from-blue-100 to-blue-200'
                        },
                        {
                          title: 'Surat Menyurat Digital',
                          desc: 'Pelayanan penerbitan surat keterangan dan dokumen lainnya secara online, efisien, dan terekam secara otomatis.',
                          icon: '📄',
                          color: 'from-purple-100 to-purple-200'
                        },
                        {
                          title: 'Papan Informasi Publik Digital',
                          desc: 'Menyediakan informasi tentang kegiatan, anggaran, dan program desa secara terbuka kepada warga.',
                          icon: '📊',
                          color: 'from-orange-100 to-orange-200'
                        },
                        {
                          title: 'Pelatihan Perangkat Desa',
                          desc: 'Tim Inesa memberikan bimbingan teknis dan dukungan operasional selama masa transisi digital.',
                          icon: '🎓',
                          color: 'from-teal-100 to-teal-200'
                        }
                      ].map((feature, index) => (
                        <div key={index} className={`bg-gradient-to-br ${feature.color} p-4 sm:p-6 rounded-xl border border-white/50 hover:shadow-lg transition-all duration-300 hover:scale-105 ${index === 4 ? 'sm:col-span-2' : ''}`}>
                          <div className="flex items-start gap-3 sm:gap-4">
                            <div className="text-2xl sm:text-3xl">{feature.icon}</div>
                            <div>
                              <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base lg:text-lg">{feature.title}</h3>
                              <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">{feature.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Section 4: Kesimpulan */}
                <section id="kesimpulan" className="mb-8 sm:mb-16">
                  <div className="flex items-center mb-6 sm:mb-8">
                    <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-green-500 rounded-full mr-3 sm:mr-4"></div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Kesimpulan</h2>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                      <div className="flex-shrink-0 w-full sm:w-16 h-40 sm:h-16 bg-gradient-to-br from-blue-200 to-green-200 rounded-xl flex items-center justify-center mb-4 sm:mb-0">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">
                          Kerjasama antara INESA dan Pemerintah Desa Bontomanai menunjukkan bahwa 
                          transformasi digital bukan hanya tentang teknologi, tetapi juga tentang 
                          pemberdayaan masyarakat dan peningkatan kualitas layanan publik.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                          Dengan pendekatan yang holistik dan berkelanjutan, digitalisasi desa dapat 
                          menjadi katalis untuk kemajuan ekonomi, sosial, dan budaya masyarakat desa.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </article>

          {/* Sidebar - Hidden on mobile, shown on desktop */}
          {!isMobile && (
            <aside className="w-80 flex-shrink-0 space-y-6 sticky top-24 h-fit">
              {/* Share Buttons */}
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-6 border border-green-200 shadow-lg">
                <h3 className="font-semibold text-gray-800 mb-4 text-center">Bagikan Artikel</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { 
                      name: 'facebook', 
                      icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', 
                      color: 'bg-blue-600 hover:bg-blue-700',
                      label: 'Facebook' 
                    },
                    { 
                      name: 'instagram', 
                      icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.741 0 8.332.014 7.052.072 3.668.227 1.981 1.97 1.826 5.314.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.201 3.344 1.888 5.087 5.232 5.242 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c3.344-.155 5.031-1.898 5.242-5.242.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.155-3.344-1.898-5.087-5.242-5.242C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z', 
                      color: 'bg-pink-600 hover:bg-pink-700',
                      label: 'Instagram' 
                    },
                    { 
                      name: 'whatsapp', 
                      icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884', 
                      color: 'bg-green-600 hover:bg-green-700',
                      label: 'WhatsApp' 
                    },
                    { 
                      name: 'tiktok', 
                      icon: 'M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 11-5-5v2a3 3 0 103 3V0z', 
                      color: 'bg-black hover:bg-gray-800',
                      label: 'TikTok' 
                    }
                  ].map((social) => (
                    <button
                      key={social.name}
                      onClick={() => handleShare(social.name)}
                      className={`flex items-center justify-center gap-2 w-full ${social.color} text-white rounded-xl py-3 px-4 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg text-sm font-medium`}
                      aria-label={`Share on ${social.label}`}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d={social.icon} />
                      </svg>
                      {social.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Table of Contents */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                  Daftar Isi
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <a 
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm transition-all duration-300 hover:text-blue-600 hover:translate-x-2 p-3 rounded-lg group ${
                        activeSection === item.id 
                          ? 'text-blue-600 font-medium bg-blue-50 translate-x-2 shadow-sm' 
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveSection(item.id);
                        const element = document.getElementById(item.id);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      <div className="flex items-center">
                        <div className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                          activeSection === item.id ? 'bg-blue-600' : 'bg-gray-300 group-hover:bg-blue-400'
                        }`}></div>
                        <span className="text-xs font-medium text-gray-400 mr-2">0{index + 1}</span>
                        {item.title}
                      </div>
                    </a>
                  ))}
                </nav>
              </div>

              {/* Article Stats */}
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 border border-purple-200 shadow-lg">
                <h3 className="font-semibold text-gray-800 mb-4">Statistik Artikel</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Waktu Baca</span>
                    <span className="font-medium text-purple-700">5 menit</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Kata</span>
                    <span className="font-medium text-purple-700">~850</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Kategori</span>
                    <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">Digitalisasi</span>
                  </div>
                </div>
              </div>
            </aside>
          )}
        </div>

        {/* Mobile Share Bar - Only visible on mobile */}
        {isMobile && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40">
            <div className="flex items-center justify-between max-w-sm mx-auto">
              <span className="text-sm font-medium text-gray-600">Bagikan:</span>
              <div className="flex gap-2">
                {[
                  { name: 'whatsapp', icon: '💬', color: 'bg-green-600' },
                  { name: 'facebook', icon: '📘', color: 'bg-blue-600' },
                  { name: 'instagram', icon: '📷', color: 'bg-pink-600' },
                  { name: 'tiktok', icon: '🎵', color: 'bg-black' }
                ].map((social) => (
                  <button
                    key={social.name}
                    onClick={() => handleShare(social.name)}
                    className={`w-10 h-10 ${social.color} text-white rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md text-sm`}
                    aria-label={`Share on ${social.name}`}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile Table of Contents - Floating Button */}
        {isMobile && (
          <div className="fixed bottom-20 right-4 z-30">
            <button
              onClick={() => setIsShareOpen(!isShareOpen)}
              className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              aria-label="Table of contents"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>

            {/* Mobile TOC Popup */}
            {isShareOpen && (
              <>
                <div 
                  className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                  onClick={() => setIsShareOpen(false)}
                />
                <div className="absolute bottom-16 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 max-h-80 overflow-y-auto">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-800 text-sm">Daftar Isi</h3>
                    <button
                      onClick={() => setIsShareOpen(false)}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <nav className="space-y-2">
                    {tableOfContents.map((item, index) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block text-xs transition-all duration-300 p-2 rounded-lg ${
                          activeSection === item.id 
                            ? 'text-blue-600 font-medium bg-blue-50' 
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveSection(item.id);
                          setIsShareOpen(false);
                          const element = document.getElementById(item.id);
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        <div className="flex items-center">
                          <span className="text-xs font-medium text-gray-400 mr-2">0{index + 1}</span>
                          {item.title}
                        </div>
                      </a>
                    ))}
                  </nav>
                </div>
              </>
            )}
          </div>
        )}
      </div>
      
      <div className={isMobile ? 'mb-16' : ''}>
        <Footer />
      </div>
    </div>
  );
}