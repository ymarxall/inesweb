'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';

// Custom Gabung Component for Tombol page
function CustomGabung() {
  return (
    <section className="py-16 bg-white text-center">
      {/* Judul */}
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Mitra desa yang telah memakai Inesa.id
        </h2>
        <p className="text-sm text-gray-500">
          Desa-desa yang telah bergabung dengan platform kami untuk meningkatkan kemajuan digital.
        </p>
      </div>

      {/* Grid Gambar */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Desa Bontomanai */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/jeneponto.png"
              alt="Desa Bontomanai"
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">Kabupaten Jeneponto</p>
              <h4 className="text-lg font-semibold text-gray-800">Desa Bontomanai</h4>
            </div>
          </div>

          {/* Card 2: Placeholder (Full Blur) */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative filter blur-lg">
            <div className="p-4">
              <p className="text-sm text-gray-400"></p>
              <h4 className="text-lg font-semibold text-gray-500"></h4>
            </div>
          </div>

          {/* Card 3: Placeholder (Full Blur) */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative filter blur-lg">
            <div className="p-4">
              <p className="text-sm text-gray-400"></p>
              <h4 className="text-lg font-semibold text-gray-500"></h4>
            </div>
          </div>

          {/* Card 4: Placeholder (Full Blur) */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative filter blur-lg">
            <div className="p-4">
              <p className="text-sm text-gray-400"></p>
              <h4 className="text-lg font-semibold text-gray-500"></h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Custom Header for Tombol page
function TombolHeader() {
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
        <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between max-w-full">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src="/green.png" 
              alt="Logo Inesa" 
              className="h-8 w-auto sm:h-9"
              loading="lazy"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 mx-auto">
            <Link
              href="/"
              className="font-medium text-green-800 hover:text-green-900 transition-colors duration-200 text-base"
            >
              Beranda
            </Link>
            <Link
              href="/"
              className="font-medium text-green-800 hover:text-green-900 transition-colors duration-200 text-base"
            >
              Upaya
            </Link>
            <Link
              href="/"
              className="font-medium text-green-800 hover:text-green-900 transition-colors duration-200 text-base"
            >
              Desa Digital
            </Link>
            <Link
              href="/"
              className="font-medium text-green-800 hover:text-green-900 transition-colors duration-200 text-base"
            >
              Publikasi
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex flex-shrink-0">
            <Link
              href="/contact"
              className="font-semibold text-white bg-green-600 hover:bg-green-700 px-6 py-2.5 rounded-lg transition-all duration-300 text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
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
            style={{ marginRight: '-8px' }}
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
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-out overflow-x-hidden" style={{ maxWidth: '100vw' }}>
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

            {/* Mobile Menu Items */}
            <nav className="flex flex-col p-6 space-y-1">
              <Link
                href="/"
                className="font-medium text-gray-800 hover:text-green-600 hover:bg-green-50 px-4 py-3 rounded-lg transition-colors duration-200 text-lg"
                onClick={closeMenu}
              >
                Beranda
              </Link>
              <Link
                href="/"
                className="font-medium text-gray-800 hover:text-green-600 hover:bg-green-50 px-4 py-3 rounded-lg transition-colors duration-200 text-lg"
                onClick={closeMenu}
              >
                Upaya
              </Link>
              <Link
                href="/"
                className="font-medium text-gray-800 hover:text-green-600 hover:bg-green-50 px-4 py-3 rounded-lg transition-colors duration-200 text-lg"
                onClick={closeMenu}
              >
                Desa Digital
              </Link>
              <Link
                href="/"
                className="font-medium text-gray-800 hover:text-green-600 hover:bg-green-50 px-4 py-3 rounded-lg transition-colors duration-200 text-lg"
                onClick={closeMenu}
              >
                Publikasi
              </Link>
              
              {/* Mobile CTA Button */}
              <div className="pt-6 mt-6 border-t border-gray-100">
                <Link
                  href="/"
                  className="block w-full font-semibold text-center text-white bg-green-600 hover:bg-green-700 px-6 py-4 rounded-lg transition-colors duration-200 text-lg shadow-md"
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

export default function Tombol() {
  const router = useRouter();
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = document.querySelectorAll('[data-timeline-item]');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const timelineSteps = [
    {
      phase: "Fase 1",
      title: "Analisis & Perencanaan",
      description: "Survei kebutuhan desa, analisis infrastruktur, dan perencanaan sistem digital",
      icon: "🔍",
      color: "blue",
      duration: "2-3 Bulan",
      items: [
        "Survei kondisi desa dan kebutuhan masyarakat",
        "Analisis infrastruktur teknologi yang ada",
        "Perencanaan sistem dan platform digital",
        "Pembentukan tim digitalisasi desa"
      ]
    },
    {
      phase: "Fase 2",
      title: "Implementasi Dasar",
      description: "Membangun fondasi sistem digital dan website desa",
      icon: "🏗️",
      color: "orange",
      duration: "3-4 Bulan",
      items: [
        "Pembuatan website desa dengan fitur dasar",
        "Sistem administrasi online",
        "Database penduduk digital",
        "Pelatihan dasar untuk perangkat desa"
      ]
    },
    {
      phase: "Fase 3",
      title: "Pengembangan Lanjutan",
      description: "Menambahkan fitur-fitur advanced dan integrasi sistem",
      icon: "🚀",
      color: "purple",
      duration: "4-5 Bulan",
      items: [
        "Sistem pelayanan publik online",
        "E-commerce untuk produk lokal",
        "Sistem keuangan desa digital",
        "Aplikasi mobile untuk masyarakat"
      ]
    },
    {
      phase: "Fase 4",
      title: "Optimasi & Monitoring",
      description: "Pemeliharaan sistem dan pengembangan berkelanjutan",
      icon: "📈",
      color: "green",
      duration: "Berkelanjutan",
      items: [
        "Monitoring dan evaluasi sistem",
        "Pelatihan lanjutan untuk masyarakat",
        "Update dan maintenance berkala",
        "Pengembangan fitur berdasarkan feedback"
      ]
    }
  ];

  const colorClasses = {
    blue: {
      bg: "bg-blue-600",
      light: "bg-blue-100",
      text: "text-blue-800",
      line: "bg-blue-300",
      hover: "hover:bg-blue-700"
    },
    orange: {
      bg: "bg-orange-600",
      light: "bg-orange-100",
      text: "text-orange-800",
      line: "bg-orange-300",
      hover: "hover:bg-orange-700"
    },
    purple: {
      bg: "bg-purple-600",
      light: "bg-purple-100",
      text: "text-purple-800",
      line: "bg-purple-300",
      hover: "hover:bg-purple-700"
    },
    green: {
      bg: "bg-green-600",
      light: "bg-green-100",
      text: "text-green-800",
      line: "bg-green-300",
      hover: "hover:bg-green-700"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50 flex flex-col">
      {/* Header */}
      <TombolHeader />

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {/* Gabung Section */}
        <CustomGabung />

        {/* Timeline Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Roadmap Digitalisasi</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Proses bertahap yang terstruktur untuk menciptakan ekosistem digital desa yang komprehensif
              </p>
            </div>

            {timelineSteps.map((step, index) => (
              <div 
                key={index} 
                className="relative mb-16 last:mb-0"
                data-timeline-item
                data-index={index}
              >
                {/* Timeline Line - Desktop */}
                {index < timelineSteps.length - 1 && (
                  <div className={`hidden md:block absolute left-12 top-28 w-1 h-full ${colorClasses[step.color].line} z-0 rounded-full`}></div>
                )}
                
                {/* Timeline Line - Mobile */}
                {index < timelineSteps.length - 1 && (
                  <div className={`md:hidden absolute left-6 top-20 w-0.5 h-full ${colorClasses[step.color].line} z-0`}></div>
                )}
                
                {/* Timeline Item */}
                <div className={`relative z-10 transform transition-all duration-700 ${
                  visibleItems.has(index.toString()) 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`}>
                  <div className="flex items-start">
                    {/* Phase Circle - Mobile */}
                    <div className="md:hidden flex-shrink-0 w-12 h-12 bg-white border-4 border-gray-200 rounded-full flex items-center justify-center font-bold text-gray-600 shadow-md">
                      {index + 1}
                    </div>
                    
                    {/* Phase Circle - Desktop */}
                    <div className={`hidden md:flex flex-shrink-0 w-24 h-24 ${colorClasses[step.color].bg} ${colorClasses[step.color].hover} text-white rounded-full items-center justify-center font-bold text-2xl shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl`}>
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    
                    {/* Content Card */}
                    <div className="ml-4 md:ml-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex-1 border border-gray-100 hover:-translate-y-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                        <div>
                          <div className="flex items-center gap-3 mb-3">
                            <span className={`inline-block ${colorClasses[step.color].light} ${colorClasses[step.color].text} text-sm font-semibold px-4 py-2 rounded-full`}>
                              {step.phase}
                            </span>
                            <span className={`inline-block ${colorClasses[step.color].light} ${colorClasses[step.color].text} text-sm font-semibold px-4 py-2 rounded-full`}>
                              {step.duration}
                            </span>
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">{step.title}</h3>
                          <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                        </div>
                        
                        <div className="hidden md:block text-6xl opacity-20">
                          {step.icon}
                        </div>
                      </div>
                      
                      {/* Items Grid */}
                      <div className="grid md:grid-cols-2 gap-4">
                        {step.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start group">
                            <div className={`w-2 h-2 ${colorClasses[step.color].bg} rounded-full mt-2.5 mr-4 flex-shrink-0 group-hover:scale-150 transition-transform duration-200`}></div>
                            <span className="text-gray-700 text-base leading-relaxed group-hover:text-gray-900 transition-colors">{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Progress Indicator */}
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <span>Kemajuan fase</span>
                          <span>{index + 1}/4</span>
                        </div>
                        <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`${colorClasses[step.color].bg} h-2 rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: visibleItems.has(index.toString()) ? `${((index + 1) / 4) * 100}%` : '0%' }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}