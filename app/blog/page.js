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

  // Navigation items matching blog.js section IDs
  const navItems = [
    { href: '#tentang-desa', label: 'Tentang Desa' },
    { href: '#latar-belakang', label: 'Latar Belakang' },
    { href: '#fitur-dukungan', label: 'Fitur dan Dukungan' },
    { href: '#kesimpulan', label: 'Kesimpulan' },
  ];

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
              href="/desa"
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
              Blog
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
                Blog
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

export default function BlogArticlePage() {
  const [activeSection, setActiveSection] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const tableOfContents = [
    { id: 'tentang-desa', title: 'Tentang Desa Bontomanai' },
    { id: 'latar-belakang', title: 'Latar Belakang Kemitraan' },
    { id: 'fitur-dukungan', title: 'Fitur dan Dukungan dari Inesa' },
    { id: 'kesimpulan', title: 'Kesimpulan' }
  ];

  useEffect(() => {
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
    return () => window.removeEventListener('scroll', handleScroll);
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <BlogHeader /> {/* Use BlogHeader instead of Header */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="container mx-auto px-4 pt-16 py-8 max-w-7xl">
        <div className="flex gap-8 relative">
          <article className="flex-1 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="relative h-96 bg-gradient-to-br from-green-600 via-blue-600 to-purple-700 overflow-hidden">
              <img 
                src="/des.png" 
                alt="Desa Bontomanai" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              <div className="absolute top-20 right-20 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-xl"></div>
              <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-300 bg-opacity-20 rounded-full blur-lg"></div>
              
              <div className="relative h-full flex items-end p-8">
                <div className="text-white">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-200">
                    <time className="bg-white bg-opacity-20 px-3 py-1 rounded-full backdrop-blur-sm">Mei 8, 2025</time>
                  </div>
                  <h1 className="text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                    Inesa & Pemerintah Desa Bontomanai
                  </h1>
                  <p className="text-xl text-gray-200 leading-relaxed max-w-3xl">
                    Menuju Tata Kelola Desa yang Transparan, Efisien, dan Digital.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <section id="tentang-desa" className="mb-16">
                  <div className="flex items-center mb-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-4"></div>
                    <h2 className="text-3xl font-bold text-gray-800">Tentang Desa Bontomanai</h2>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
                    <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                      Desa Bontomanai merupakan salah satu desa di Kecamatan Rumbia, 
                      Kabupaten Jeneponto, Sulawesi Selatan yang memiliki karakteristik geografis dataran 
                      rendah, dengan mayoritas penduduk bermata pencaharian di sektor pertanian dan 
                      perkebunan.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Dengan jumlah penduduk lebih dari 2.500 jiwa, desa ini memiliki potensi besar 
                      dalam pengembangan sektor ekonomi lokal serta peningkatan pelayanan publik 
                      melalui teknologi.
                    </p>
                  </div>
                </section>

                <section id="latar-belakang" className="mb-16">
                  <div className="flex items-center mb-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-4"></div>
                    <h2 className="text-3xl font-bold text-gray-800">Latar Belakang Kemitraan</h2>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
                    <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                      Sebagai bagian dari komitmen dalam meningkatkan transparansi, efisiensi, dan pelayanan kepada masyarakat, Pemerintah Desa Bontomanai menjalin kerja sama strategis dengan Inesa—platform digitalisasi pemerintahan desa.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Kolaborasi ini diharapkan mampu mendukung akselerasi transformasi digital melalui integrasi sistem informasi yang menyeluruh dan dapat diakses oleh seluruh perangkat desa dan masyarakat.
                    </p>
                  </div>
                </section>

                <section id="fitur-dukungan" className="mb-16">
                  <div className="flex items-center mb-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-4"></div>
                    <h2 className="text-3xl font-bold text-gray-800">Fitur dan Dukungan dari Inesa</h2>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
                    <ul className="space-y-4 text-gray-700 leading-relaxed text-lg">
                      <li>
                        <strong>Manajemen Keuangan Desa (APBDes)</strong><br />
                        Digitalisasi seluruh proses perencanaan, penganggaran, dan pelaporan keuangan desa.
                      </li>
                      <li>
                        <strong>Sistem Informasi Penduduk (SIP)</strong><br />
                        Pendataan warga yang lebih terstruktur dan mudah dikelola untuk layanan administrasi desa.
                      </li>
                      <li>
                        <strong>Surat Menyurat Digital</strong><br />
                        Pelayanan penerbitan surat keterangan dan dokumen lainnya secara online, efisien, dan terekam secara otomatis.
                      </li>
                      <li>
                        <strong>Papan Informasi Publik Digital</strong><br />
                        Menyediakan informasi tentang kegiatan, anggaran, dan program desa secara terbuka kepada warga.
                      </li>
                      <li>
                        <strong>Pelatihan Perangkat Desa</strong><br />
                        Tim Inesa memberikan bimbingan teknis dan dukungan operasional selama masa transisi digital.
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="kesimpulan" className="mb-16">
                  <div className="flex items-center mb-8">
                    <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-green-500 rounded-full mr-4"></div>
                    <h2 className="text-3xl font-bold text-gray-800">Kesimpulan</h2>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-100">
                    <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                      Kerjasama antara INESA dan Pemerintah Desa Bontomanai menunjukkan bahwa 
                      transformasi digital bukan hanya tentang teknologi, tetapi juga tentang 
                      pemberdayaan masyarakat dan peningkatan kualitas layanan publik.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      Dengan pendekatan yang holistik dan berkelanjutan, digitalisasi desa dapat 
                      menjadi katalis untuk kemajuan ekonomi, sosial, dan budaya masyarakat desa.
                    </p>
                  </div>
                </section>
              </div>

            
            </div>
          </article>

          <aside className="w-80 flex-shrink-0 space-y-6 sticky top-8 h-fit">
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-6 border border-green-200">
              <div className="grid grid-cols-4 gap-3">
                {[
                  { 
                    name: 'facebook', 
                    icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', 
                    color: 'bg-blue-600 hover:bg-blue-700' 
                  },
                  { 
                    name: 'instagram', 
                    icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.332.014 7.052.072 3.668.227 1.981 1.97 1.826 5.314.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.201 3.344 1.888 5.087 5.232 5.242 1.28.058 1.689.072 4.948.072s3.668-.014 4.948-.072c3.344-.155 5.031-1.898 5.242-5.242.058-1.28.072-1.689.072-4.948s-.014-3.668-.072-4.948c-.155-3.344-1.898-5.087-5.242-5.242C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z', 
                    color: 'bg-pink-600 hover:bg-pink-700' 
                  },
                  { 
                    name: 'tiktok', 
                    icon: 'M12.53.02C12.204.02 11.88.048 11.56.103c-1.23.206-2.35.763-3.243 1.656-.893.893-1.45 2.013-1.656 3.243-.055.32-.083.644-.083.97 0 .326.028.65.083.97.206 1.23.763 2.35 1.656 3.243.893.893 2.013 1.45 3.243 1.656.32.055.644.083.97.083.326 0 .65-.028.97-.083 1.23-.206 2.35-.763 3.243-1.656.893-.893 1.45-2.013 1.656-3.243.055-.32.083-.644.083-.97 0-.326-.028-.65-.083-.97-.206-1.23-.763-2.35-1.656-3.243-.893-.893-2.013-1.45-3.243-1.656-.32-.055-.644-.083-.97-.083zm4.406 3.787c-.644.644-1.536 1.043-2.513 1.173v3.35c0 .356-.014.71-.042 1.063-.103 1.23-.515 2.35-1.243 3.24-.728.89-1.76 1.503-2.91 1.74-.356.074-.716.103-1.073.103-.356 0-.716-.029-1.073-.103-1.15-.237-2.182-.85-2.91-1.74-.728-.89-1.14-2.01-1.243-3.24-.028-.353-.042-.707-.042-1.063v-6.7c0-.356.014-.71.042-1.063.103-1.23.515-2.35 1.243-3.24.728-.89 1.76-1.503 2.91-1.74.356-.074.716-.103 1.073-.103.356 0 .716.029 1.073.103 1.15.237 2.182.85 2.91 1.74.728.89 1.14 2.01 1.243 3.24.028.353.042.707.042 1.063v3.35c-.977-.13-1.87-.529-2.513-1.173v-2.177c0-.326-.028-.65-.083-.97-.206-1.23-.763-2.35-1.656-3.243-.893-.893-2.013-1.45-3.243-1.656-.32-.055-.644-.083-.97-.083-.326 0-.65.028-.97.083-1.23.206-2.35.763-3.243 1.656-.893.893-1.45 2.013-1.656 3.243-.055.32-.083.644-.083.97 0 .326.028.65.083.97.206 1.23.763 2.35 1.656 3.243.893.893 2.013 1.45 3.243 1.656.32.055.644.083.97.083.326 0 .65-.028.97-.083 1.23-.206 2.35-.763 3.243-1.656.893-.893 1.45-2.013 1.656-3.243.055-.32.083-.644.083-.97v-2.177z', 
                    color: 'bg-black hover:bg-gray-800' 
                  },
                  { 
                    name: 'whatsapp', 
                    icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488', 
                    color: 'bg-green-600 hover:bg-green-700' 
                  }
                ].map((social) => (
                  <button
                    key={social.name}
                    onClick={() => handleShare(social.name)}
                    className={`w-12 h-12 ${social.color} text-white rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-md`}
                    aria-label={`Share on ${social.name}`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                In this article
              </h3>
              <nav className="space-y-2">
                {tableOfContents.map((item, index) => (
                  <a 
                    key={item.id}
                    href={`#${item.id}`}
                    className={`block text-sm transition-all duration-300 hover:text-blue-600 hover:translate-x-2 p-2 rounded-lg ${
                      activeSection === item.id 
                        ? 'text-blue-600 font-medium bg-blue-50 translate-x-2' 
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
                        activeSection === item.id ? 'bg-blue-600' : 'bg-gray-300'
                      }`}></div>
                      {item.title}
                    </div>
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}