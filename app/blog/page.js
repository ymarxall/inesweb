'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BlogArticlePage() {
  const [activeSection, setActiveSection] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const tableOfContents = [
    { id: 'tentang-desa', title: 'Tentang Desa Bontomanai' },
    { id: 'tantangan', title: 'Tantangan yang Dihadapi' },
    { id: 'solusi', title: 'Solusi Digital INESA' },
    { id: 'dampak', title: 'Dampak dan Manfaat' },
    { id: 'kesimpulan', title: 'Kesimpulan' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Update active section based on scroll position
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
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`
    };

    window.open(shareUrls[platform], '_blank');
    setIsShareOpen(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      alert('Link berhasil disalin!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
    setIsShareOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <Header />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-green-500 to-blue-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="container mx-auto px-4 pt-16 py-8 max-w-7xl">
        <div className="flex gap-8 relative">
          {/* Main Content */}
          <article className="flex-1 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            {/* Hero Section */}
            <div className="relative h-96 bg-gradient-to-br from-green-600 via-blue-600 to-purple-700 overflow-hidden">
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-20 right-20 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-xl"></div>
              <div className="absolute bottom-20 left-20 w-24 h-24 bg-green-300 bg-opacity-20 rounded-full blur-lg"></div>
              
              <div className="relative h-full flex items-end p-8">
                <div className="text-white">
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-200">
                    <time className="bg-white bg-opacity-20 px-3 py-1 rounded-full backdrop-blur-sm">Oct 19, 2024</time>
                    <span>•</span>
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full backdrop-blur-sm">10 min read</span>
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
              {/* Content Sections */}
              <div className="prose prose-lg max-w-none">
                <section id="tentang-desa" className="mb-16">
                  <div className="flex items-center mb-6">
                    <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-4"></div>
                    <h2 className="text-3xl font-bold text-gray-800">Tentang Desa Bontomanai</h2>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border border-green-100">
                    <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                      Desa Bontomanai merupakan salah satu desa di Kecamatan Mangarabombang, 
                      Kabupaten Takalar, Sulawesi Selatan yang memiliki karakteristik geografis dataran 
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

                <section id="tantangan" className="mb-16">
                  <div className="flex items-center mb-8">
                    <div className="w-1 h-8 bg-gradient-to-b from-red-500 to-orange-500 rounded-full mr-4"></div>
                    <h2 className="text-3xl font-bold text-gray-800">Tantangan yang Dihadapi</h2>
                  </div>
                  
                  <div className="grid gap-6">
                    <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors">
                          <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-800 mb-3">Administrasi Manual</h3>
                          <p className="text-gray-600 leading-relaxed">
                            Sistem administrasi desa yang masih mengandalkan proses manual menyebabkan 
                            pelayanan menjadi lambat dan rentan terhadap kesalahan pencatatan.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                          <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-800 mb-3">Transparansi Terbatas</h3>
                          <p className="text-gray-600 leading-relaxed">
                            Kurangnya akses informasi publik terkait program desa, anggaran, dan 
                            kegiatan pembangunan yang sedang berjalan.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
                          <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-800 mb-3">Akses Teknologi</h3>
                          <p className="text-gray-600 leading-relaxed">
                            Keterbatasan infrastruktur teknologi dan literasi digital masyarakat 
                            dalam mengakses layanan berbasis digital.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="solusi" className="mb-16">
                  <div className="flex items-center mb-8">
                    <div className="w-1 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full mr-4"></div>
                    <h2 className="text-3xl font-bold text-gray-800">Solusi Digital INESA</h2>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 rounded-2xl p-8 mb-8 border border-green-100">
                    <p className="text-gray-700 leading-relaxed text-lg">
                      INESA hadir sebagai solusi komprehensif untuk transformasi digital desa dengan 
                      pendekatan yang disesuaikan dengan karakteristik dan kebutuhan lokal.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                        title: "Digitalisasi Administrasi",
                        desc: "Sistem administrasi online untuk mempercepat pelayanan dan mengurangi birokrasi.",
                        color: "green"
                      },
                      {
                        icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
                        title: "Transparansi Publik",
                        desc: "Portal informasi publik yang memudahkan akses data program dan anggaran desa.",
                        color: "blue"
                      },
                      {
                        icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
                        title: "Aplikasi Mobile",
                        desc: "Aplikasi mobile yang memudahkan warga mengakses layanan desa kapan saja.",
                        color: "purple"
                      },
                      {
                        icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                        title: "E-Commerce Lokal",
                        desc: "Platform perdagangan elektronik untuk memasarkan produk lokal desa.",
                        color: "indigo"
                      }
                    ].map((item, index) => (
                      <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                        <div className={`w-14 h-14 bg-${item.color}-100 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-${item.color}-200 transition-colors`}>
                          <svg className={`w-7 h-7 text-${item.color}-600`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section id="dampak" className="mb-16">
                  <div className="flex items-center mb-8">
                    <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-4"></div>
                    <h2 className="text-3xl font-bold text-gray-800">Dampak dan Manfaat</h2>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-green-50 rounded-2xl p-8 border border-purple-100">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Transformasi Positif</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        "Peningkatan efisiensi pelayanan publik hingga 60%",
                        "Transparansi anggaran dan program desa meningkat secara signifikan",
                        "Partisipasi masyarakat dalam pembangunan desa meningkat",
                        "Akses informasi publik tersedia 24/7 melalui platform digital"
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{item}</p>
                        </div>
                      ))}
                    </div>
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

              {/* Enhanced Call to Action */}
              <div className="relative bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-300 bg-opacity-20 rounded-full blur-xl"></div>
                <div className="relative">
                  <h3 className="text-3xl font-bold mb-4">Bergabung dengan Transformasi Digital</h3>
                  <p className="mb-8 text-gray-100 text-lg max-w-2xl mx-auto">
                    Apakah desa Anda siap untuk transformasi digital? Mari bersama INESA 
                    wujudkan desa digital yang modern dan berkelanjutan.
                  </p>
                  <button className="bg-white text-gray-800 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg">
                    Konsultasi Gratis
                  </button>
                </div>
              </div>
            </div>
          </article>

          {/* Enhanced Sidebar */}
          <aside className="w-80 flex-shrink-0 space-y-6 sticky top-8 h-fit">
            {/* Enhanced Share Widget */}
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-6 border border-green-200">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                Share with your community!
              </h3>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { name: 'facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', color: 'bg-blue-600 hover:bg-blue-700' },
                  { name: 'twitter', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', color: 'bg-black hover:bg-gray-800' },
                  { name: 'linkedin', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z', color: 'bg-blue-700 hover:bg-blue-800' },
                  { name: 'whatsapp', icon: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488', color: 'bg-green-600 hover:bg-green-700' }
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
              <button
                onClick={copyToClipboard}
                className="w-full mt-4 bg-white bg-opacity-50 hover:bg-opacity-70 text-gray-800 font-medium px-4 py-2 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white border-opacity-20"
              >
                Copy Link
              </button>
            </div>

            {/* Enhanced Table of Contents */}
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

            {/* Enhanced Related Articles */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
                Related Articles
              </h3>
              <div className="space-y-4">
                {[
                  { title: "Digital Village Transformation Guide", time: "5 min read", gradient: "from-green-400 to-blue-500" },
                  { title: "E-Government Implementation Best Practices", time: "7 min read", gradient: "from-purple-400 to-pink-500" },
                  { title: "Community Engagement in Digital Era", time: "4 min read", gradient: "from-yellow-400 to-orange-500" }
                ].map((article, index) => (
                  <a key={index} href="#" className="block group">
                    <div className="p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-md">
                      <div className={`w-full h-2 bg-gradient-to-r ${article.gradient} rounded-full mb-3`}></div>
                      <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                        {article.title}
                      </h4>
                      <p className="text-xs text-gray-500 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        {article.time}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* New Newsletter Subscription */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-6 text-white">
              <h3 className="font-semibold mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                Stay Updated
              </h3>
              <p className="text-indigo-100 text-sm mb-4">
                Dapatkan artikel terbaru tentang transformasi digital desa
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-4 py-3 rounded-xl bg-white bg-opacity-20 border border-white border-opacity-30 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 backdrop-blur-sm"
                />
                <button className="w-full bg-white text-indigo-600 font-semibold py-3 rounded-xl hover:bg-opacity-90 transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>

            {/* New Quick Stats */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
                </svg>
                Quick Stats
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Desa Terdaftar", value: "150+", color: "text-green-600", bg: "bg-green-50" },
                  { label: "Layanan Digital", value: "25+", color: "text-blue-600", bg: "bg-blue-50" },
                  { label: "Pengguna Aktif", value: "10K+", color: "text-purple-600", bg: "bg-purple-50" }
                ].map((stat, index) => (
                  <div key={index} className={`${stat.bg} rounded-xl p-4 flex justify-between items-center`}>
                    <span className="text-sm font-medium text-gray-700">{stat.label}</span>
                    <span className={`text-xl font-bold ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}