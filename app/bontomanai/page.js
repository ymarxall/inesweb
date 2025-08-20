'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Timeline from '../components/Timeline';

// ClientOnly wrapper for client-side-only components
const ClientOnly = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted ? children : null;
};

export default function Bontomanai() {
  const [activeSection, setActiveSection] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const tableOfContents = [
    { id: 'tentang-desa', title: 'Tentang Desa Bontomanai' },
    { id: 'latar-belakang', title: 'Latar Belakang Kemitraan' },
    { id: 'fitur-dukungan', title: 'Fitur dan Dukungan dari Inesa' },
    { id: 'pendekatan', title: 'Pendekatan Digital Desa Bontomanai' },
    { id: 'gallery', title: 'Galeri Kegiatan' },
    { id: 'kesimpulan', title: 'Kesimpulan' },
  ];

  const galleryImages = [
    { src: '/1a.jpg', alt: 'Kegiatan Desa Bontomanai 1', description: 'Dokumentasi Kerjasama antara INESA dan Kepala Desa Bontomanai' },
    { src: '/2a.JPG', alt: 'Kegiatan Desa Bontomanai 2', description: 'Sosialisasi penggunaan Web Aplikasi INESA' },
    { src: '/3a.JPG', alt: 'Kegiatan Desa Bontomanai 3', description: 'Pengenalan INESA kepada warga' },
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

      const sections = tableOfContents.map((item) => document.getElementById(item.id)).filter(Boolean);
      const currentSection = sections.find((section) => {
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
    const title = 'Inesa & Pemerintah Desa Bontomanai';
    const shareUrls = {
      linkedin: 'https://www.linkedin.com/company/coconutcomputer',
      instagram: 'https://www.instagram.com/coconutdotorg/',
      facebook: 'https://www.facebook.com/coconutcomputer',
      youtube: 'https://www.youtube.com/@coconutcomputerclub3982',
    };
    window.open(shareUrls[platform], '_blank');
    setIsShareOpen(false);
  };

  const openLightbox = (index) => {
    setSelectedImage(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImage(0);
  };

  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].screenX);
  };

  const handleTouchEnd = (e) => {
    setTouchEndX(e.changedTouches[0].screenX);
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX && touchEndX) {
      const deltaX = touchEndX - touchStartX;
      if (deltaX > 50) {
        setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
      } else if (deltaX < -50) {
        setSelectedImage((prev) => (prev + 1) % galleryImages.length);
      }
      setTouchStartX(null);
      setTouchEndX(null);
    }
  };

  const handleKeyDown = (e) => {
    if (isLightboxOpen) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') setSelectedImage((prev) => (prev + 1) % galleryImages.length);
      if (e.key === 'ArrowLeft') setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <Header />

      {/* Progress Bar */}
      <ClientOnly>
        <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
          <div
            className="h-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </ClientOnly>

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
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
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
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs">6 min read</span>
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
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">
                          Desa Bontomanai merupakan salah satu desa di Kecamatan Rumbia, Kabupaten Jeneponto, Sulawesi Selatan yang memiliki karakteristik geografis dataran rendah, dengan mayoritas penduduk bermata pencaharian di sektor pertanian dan perkebunan.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                          Dengan jumlah penduduk lebih dari 2.500 jiwa, desa ini memiliki potensi besar dalam pengembangan sektor ekonomi lokal serta peningkatan pelayanan publik melalui teknologi.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 2: Latar Belakang */}
                <section id="latar-belakang" className="mb-12 sm:mb-16" style={{ marginTop: '80px' }}>
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-3 sm:mr-4"></div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Latar Belakang Kemitraan</h2>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                      <div className="flex-shrink-0 w-full sm:w-16 h-40 sm:h-16 bg-gradient-to-br from-blue-200 to-green-200 rounded-xl flex items-center justify-center mb-4 sm:mb-0">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
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
                <section id="fitur-dukungan" className="mb-12 sm:mb-16" style={{ marginTop: '80px' }}>
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
                          icon: (
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M8.433 7.418c.106-.057.26-.01.353.097l2.15 2.744 4.645-5.945a.243.243 0 01.353-.008c.1.09.116.24.032.354L10.97 11.33a.75.75 0 01-1.104.03L7.715 8.616a.25.25 0 01.097-.353z" />
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-14a6 6 0 110 12 6 6 0 010-12z" clipRule="evenodd" />
                            </svg>
                          ),
                          color: 'from-green-100 to-green-200',
                        },
                        {
                          title: 'Sistem Informasi Penduduk (SIP)',
                          desc: 'Pendataan warga yang lebih terstruktur dan mudah dikelola untuk layanan administrasi desa.',
                          icon: (
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                            </svg>
                          ),
                          color: 'from-blue-100 to-blue-200',
                        },
                        {
                          title: 'Surat Menyurat Digital',
                          desc: 'Pelayanan penerbitan surat keterangan dan dokumen lainnya secara online, efisien, dan terekam secara otomatis.',
                          icon: (
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-purple-700" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.3.287.678.508 1.076.633C9.88 15.773 10.894 16 12 16c1.106 0 2.12-.227 2.862-.6.398-.126.776-.347 1.076-.633L17.414 13H15z" />
                            </svg>
                          ),
                          color: 'from-purple-100 to-purple-200',
                        },
                        {
                          title: 'Website Profil Desa',
                          desc: 'Menyediakan informasi tentang kegiatan, anggaran, dan program desa secara terbuka kepada warga melalui website.',
                          icon: (
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-orange-700" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 3a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H3zm2 4h10a1 1 0 010 2H5a1 1 0 01-0 2zm0 4h10a1 1 0 010 2H5a1 1 0 010-2z" clipRule="evenodd" />
                            </svg>
                          ),
                          color: 'from-orange-100 to-orange-200',
                        },
                        {
                          title: 'Pelatihan Perangkat Desa',
                          desc: 'Tim Inesa memberikan bimbingan teknis dan dukungan operasional selama masa transisi digital.',
                          icon: (
                            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-teal-700" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM8 12a2 2 0 11-4 0 2 2 0 014 0z" clipRule="evenodd" />
                            </svg>
                          ),
                          color: 'from-teal-100 to-teal-200',
                        },
                      ].map((feature, index) => (
                        <div
                          key={index}
                          className={`bg-gradient-to-br ${feature.color} p-4 sm:p-6 rounded-xl border border-white/50 hover:shadow-lg transition-all duration-300 hover:scale-105 ${index === 4 ? 'sm:col-span-2' : ''}`}
                        >
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

                {/* Section 4: Pendekatan */}
                <section id="pendekatan" className="mb-12 sm:mb-16" style={{ marginTop: '80px' }}>
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-3 sm:mr-4"></div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Pendekatan Digital Desa Bontomanai</h2>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 sm:p-8 lg:p-10 border border-green-100 hover:shadow-lg transition-all duration-300">
                    <div className="text-center mb-6">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4">
                        Strategi <span className="text-green-600">Transformasi Digital</span> untuk Tata Kelola Desa
                      </h3>
                      <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
                        INESA merancang sistem informasi desa yang mencakup persuratan, pengelolaan keuangan, dan website profil desa, dengan pendekatan yang disesuaikan dengan kebutuhan masyarakat Bontomanai yang dikenal dengan semangat gotong royong. Sistem ini diperkenalkan kepada perangkat desa dan warga untuk mendukung transparansi dan efisiensi.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      {[
                        {
                          title: "Persuratan Digital",
                          description: "Platform untuk penerbitan surat keterangan secara online, memudahkan warga dan perangkat desa dengan proses yang cepat dan terdokumentasi.",
                          icon: (
                            <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                              <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.3.287.678.508 1.076.633C9.88 15.773 10.894 16 12 16c1.106 0 2.12-.227 2.862-.6.398-.126.776-.347 1.076-.633L17.414 13H15z" />
                            </svg>
                          ),
                          bgColor: "from-green-50 to-green-100",
                        },
                        {
                          title: "Manajemen Keuangan Desa",
                          description: "Sistem digital untuk perencanaan, penganggaran, dan pelaporan APBDes, meningkatkan transparansi dan akuntabilitas.",
                          icon: (
                            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M8.433 7.418c.106-.057.26-.01.353.097l2.15 2.744 4.645-5.945a.243.243 0 01.353-.008c.1.09.116.24.032.354L10.97 11.33a.75.75 0 01-1.104.03L7.715 8.616a.25.25 0 01.097-.353z" />
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-14a6 6 0 110 12 6 6 0 010-12z" clipRule="evenodd" />
                            </svg>
                          ),
                          bgColor: "from-blue-50 to-blue-100",
                        },
                        {
                          title: "Website Profil Desa",
                          description: "Platform publik untuk informasi kegiatan desa, anggaran, dan program, dapat diakses oleh warga kapan saja.",
                          icon: (
                            <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M3 3a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2H3zm2 4h10a1 1 0 010 2H5a1 1 0 01-0 2zm0 4h10a1 1 0 010 2H5a1 1 0 010-2z" clipRule="evenodd" />
                            </svg>
                          ),
                          bgColor: "from-purple-50 to-purple-100",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className={`bg-gradient-to-br ${item.bgColor} rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center`}
                        >
                          <div className="mb-4">{item.icon}</div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h4>
                          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
                        </div>
                      ))}
                    </div>
                    <Timeline />
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Target Dampak Digitalisasi</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-green-600 mb-2">80%</div>
                          <p className="text-sm text-gray-600">Peningkatan efisiensi pelayanan administrasi</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-blue-600 mb-2">90%</div>
                          <p className="text-sm text-gray-600">Transparansi pengelolaan anggaran desa</p>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-purple-600 mb-2">100%</div>
                          <p className="text-sm text-gray-600">Akses informasi publik melalui platform digital</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 5: Gallery */}
                <section id="gallery" className="mb-12 sm:mb-16" style={{ marginTop: '80px' }}>
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-3 sm:mr-4"></div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Galeri Kegiatan</h2>
                  </div>
                  <div className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="relative">
                      <div className="relative overflow-hidden rounded-xl">
                        <div
                          className="flex transition-transform duration-500 ease-in-out"
                          style={{ transform: `translateX(-${selectedImage * 100}%)` }}
                          onTouchStart={handleTouchStart}
                          onTouchEnd={handleTouchEnd}
                          role="region"
                          aria-label="Image carousel"
                        >
                          {galleryImages.map((image, index) => (
                            <div
                              key={index}
                              className="flex-shrink-0 w-full cursor-pointer"
                              onClick={() => openLightbox(index)}
                            >
                              <div className="relative aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden">
                                <img
                                  src={image.src}
                                  alt={image.alt}
                                  className="w-full h-full object-contain rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                                  loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                                  <p className="text-white text-xs sm:text-sm text-center font-medium leading-tight">
                                    {image.description}
                                  </p>
                                </div>
                                <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                  <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <button
                          onClick={() => setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-800 p-2 sm:p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 z-10"
                          aria-label="Previous image"
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          onClick={() => setSelectedImage((prev) => (prev + 1) % galleryImages.length)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-800 p-2 sm:p-3 rounded-full shadow-lg hover:bg-white hover:scale-110 transition-all duration-200 z-10"
                          aria-label="Next image"
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                        <div className="flex justify-center mt-4 space-x-2">
                          {galleryImages.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setSelectedImage(index)}
                              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                                selectedImage === index ? 'bg-green-600 scale-125 shadow-md' : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                              }`}
                              aria-label={`Go to image ${index + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Section 6: Kesimpulan */}
                <section id="kesimpulan" className="mb-8 sm:mb-16" style={{ marginTop: '80px' }}>
                  <div className="flex items-center mb-6 sm:mb-8">
                    <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-green-500 rounded-full mr-3 sm:mr-4"></div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Kesimpulan</h2>
                  </div>
                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-100 hover:shadow-lg transition-all duration-300">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                      <div className="flex-shrink-0 w-full sm:w-16 h-40 sm:h-16 bg-gradient-to-br from-blue-200 to-green-200 rounded-xl flex items-center justify-center mb-4 sm:mb-0">
                        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-green-700" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">
                          Kerjasama antara INESA dan Pemerintah Desa Bontomanai menunjukkan bahwa transformasi digital bukan hanya tentang teknologi, tetapi juga tentang pemberdayaan masyarakat dan peningkatan kualitas layanan publik.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg">
                          Dengan pendekatan yang holistik dan berkelanjutan, digitalisasi desa dapat menjadi katalis untuk kemajuan ekonomi, sosial, dan budaya masyarakat desa.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">
                          Keberhasilan implementasi di Desa Bontomanai diharapkan dapat menjadi model replikasi untuk desa-desa lain di Sulawesi Selatan dan Indonesia secara keseluruhan.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </article>

          {/* Lightbox Modal */}
          <ClientOnly>
            {isLightboxOpen && (
              <div
                className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center"
                role="dialog"
                aria-label="Image lightbox"
              >
                <div className="relative w-full max-w-5xl h-full flex items-center justify-center p-4 sm:p-6">
                  <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-[95vw] max-h-[85vh] flex flex-col">
                    <div className="relative flex items-center justify-center bg-gray-100">
                      <img
                        src={galleryImages[selectedImage].src}
                        alt={galleryImages[selectedImage].alt}
                        className="w-full h-auto max-h-[70vh] object-contain"
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        style={{ maxWidth: '100%', maxHeight: '70vh' }}
                      />
                      <div className="absolute inset-0 bg-gray-100 animate-pulse rounded-lg" style={{ zIndex: -1 }} />
                    </div>
                    <div className="bg-white border-t border-gray-100 p-4 sm:p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="text-gray-800 text-sm sm:text-base font-medium mb-1">
                            {galleryImages[selectedImage].description}
                          </p>
                          <p className="text-gray-500 text-xs sm:text-sm">
                            Foto {selectedImage + 1} dari {galleryImages.length}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2 ml-4">
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full whitespace-nowrap">
                            Galeri Kegiatan
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
                    }}
                    className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-800 p-3 sm:p-4 rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg z-10"
                    aria-label="Previous image"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage((prev) => (prev + 1) % galleryImages.length);
                    }}
                    className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-gray-800 p-3 sm:p-4 rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg z-10"
                    aria-label="Next image"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <button
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white/90 backdrop-blur-sm text-gray-800 p-2 sm:p-3 rounded-full hover:bg-white hover:scale-110 transition-all duration-200 shadow-lg z-10"
                    aria-label="Close lightbox"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <div className="absolute top-4 sm:top-6 left-4 sm:left-6 bg-black/70 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
                    {selectedImage + 1} / {galleryImages.length}
                  </div>
                  <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg max-w-[90vw] overflow-x-auto z-10">
                    <div className="flex items-center space-x-2">
                      {galleryImages.map((image, index) => (
                        <button
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(index);
                          }}
                          className={`flex-shrink-0 w-12 h-8 rounded overflow-hidden border-2 transition-all duration-200 ${
                            selectedImage === index
                              ? 'border-green-500 scale-110 shadow-md'
                              : 'border-transparent hover:border-gray-300 hover:scale-105'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        >
                          <img
                            src={image.src}
                            alt={`Thumbnail ${index + 1}`}
                            className="w-full h-full object-contain"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-xs hidden sm:block z-10">
                    <div className="flex items-center space-x-3">
                      <span>←→ Navigate</span>
                      <span>ESC Close</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </ClientOnly>

          {/* Sidebar */}
          <ClientOnly>
            {isMobile === false && (
              <aside className="w-80 flex-shrink-0 space-y-6 sticky top-24 h-fit">
                <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-6 border border-green-200 shadow-lg">
                  <h3 className="font-semibold text-gray-800 mb-4 text-center">Sosial Media Kami</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        name: 'linkedin',
                        icon: (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" stroke="currentColor" strokeWidth="0.5"/>
                          </svg>
                        ),
                        color: 'bg-blue-700 hover:bg-blue-800',
                        label: 'LinkedIn',
                      },
                      {
                        name: 'instagram',
                        icon: (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm0 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3m-4 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m4.5-3.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2" stroke="currentColor" strokeWidth="0.5"/>
                          </svg>
                        ),
                        color: 'bg-pink-600 hover:bg-pink-700',
                        label: 'Instagram',
                      },
                      {
                        name: 'facebook',
                        icon: (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        ),
                        color: 'bg-blue-600 hover:bg-blue-700',
                        label: 'Facebook',
                      },
                      {
                        name: 'youtube',
                        icon: (
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a2.917 2.917 0 0 0-2.048-2.048C19.896 3.584 12 3.584 12 3.584s-7.896 0-9.45.554a2.917 2.917 0 0 0-2.048 2.048C.584 7.74.584 12 .584 12s0 4.26.554 5.814a2.917 2.917 0 0 0 2.048 2.188c1.554.554 9.45.554 9.45.554s7.896 0 9.45-.554a2.917 2.917 0 0 0 2.048-2.048c.554-1.554.554-5.814.554-5.814s0-4.26-.554-5.814zm-13.498 9.814V8l6.5 4-6.5 4z"/>
                          </svg>
                        ),
                        color: 'bg-red-600 hover:bg-red-700',
                        label: 'YouTube',
                      },
                    ].map((social) => (
                      <button
                        key={social.name}
                        onClick={() => handleShare(social.name)}
                        className={`flex items-center justify-center gap-2 w-full ${social.color} text-white rounded-xl py-3 px-4 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg text-sm font-medium`}
                        aria-label={`Share on ${social.label}`}
                      >
                        {social.icon}
                        {social.label}
                      </button>
                    ))}
                  </div>
                </div>
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
                          activeSection === item.id ? 'text-blue-600 font-medium bg-blue-50 translate-x-2 shadow-sm' : 'text-gray-600 hover:bg-gray-50'
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
                          <div
                            className={`w-2 h-2 rounded-full mr-3 transition-all duration-300 ${
                              activeSection === item.id ? 'bg-blue-600' : 'bg-gray-300 group-hover:bg-blue-400'
                            }`}
                          ></div>
                          <span className="text-xs font-medium text-gray-400 mr-2">0{index + 1}</span>
                          {item.title}
                        </div>
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 border border-purple-200 shadow-lg">
                  <h3 className="font-semibold text-gray-800 mb-4">Statistik Artikel</h3>
                  <div className="space-y-3">
                   
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Kategori</span>
                      <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded-full text-xs font-medium">Digitalisasi</span>
                    </div>
                  </div>
                </div>
              </aside>
            )}
          </ClientOnly>

          {/* Mobile Share Bar */}
          <ClientOnly>
            {isMobile === true && (
              <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40">
                <div className="flex items-center justify-between max-w-sm mx-auto">
                  <span className="text-sm font-medium text-gray-600">Sosial Media:</span>
                  <div className="flex gap-2">
                    {[
                      {
                        name: 'linkedin',
                        icon: (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" stroke="currentColor" strokeWidth="0.5"/>
                          </svg>
                        ),
                        color: 'bg-blue-700 hover:bg-blue-800',
                        label: 'LinkedIn',
                      },
                      {
                        name: 'instagram',
                        icon: (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm0 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3m-4 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m4.5-3.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2" stroke="currentColor" strokeWidth="0.5"/>
                          </svg>
                        ),
                        color: 'bg-pink-600 hover:bg-pink-700',
                        label: 'Instagram',
                      },
                      {
                        name: 'facebook',
                        icon: (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                        ),
                        color: 'bg-blue-600 hover:bg-blue-700',
                        label: 'Facebook',
                      },
                      {
                        name: 'youtube',
                        icon: (
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M23.498 6.186a2.917 2.917 0 0 0-2.048-2.048C19.896 3.584 12 3.584 12 3.584s-7.896 0-9.45.554a2.917 2.917 0 0 0-2.048 2.048C.584 7.74.584 12 .584 12s0 4.26.554 5.814a2.917 2.917 0 0 0 2.048 2.188c1.554.554 9.45.554 9.45.554s7.896 0 9.45-.554a2.917 2.917 0 0 0 2.048-2.048c.554-1.554.554-5.814.554-5.814s0-4.26-.554-5.814zm-13.498 9.814V8l6.5 4-6.5 4z"/>
                          </svg>
                        ),
                        color: 'bg-red-600 hover:bg-red-700',
                        label: 'YouTube',
                      },
                    ].map((social) => (
                      <button
                        key={social.name}
                        onClick={() => handleShare(social.name)}
                        className={`flex items-center justify-center ${social.color} text-white rounded-full p-2 transition-all duration-300 hover:scale-110 shadow-md`}
                        aria-label={`Share on ${social.label}`}
                      >
                        {social.icon}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </ClientOnly>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}