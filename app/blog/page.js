'use client';
import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BlogPage() {
  const [isHovered, setIsHovered] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50/30">
      <Header />
      
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
            Ikuti perjalanan Transformasi desa dan berbagai kegiatan komunitas dalam membangun desa di Indonesia 
          </p>
        </div>

        {/* Article Cards */}
        <div className="space-y-8">
          {/* Article Card 1: Berita1 */}
          <div className={`max-w-3xl mx-auto transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link href="/berita1">
              <article 
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-700 hover:-translate-y-1 cursor-pointer"
                onMouseEnter={() => setIsHovered('berita1')}
                onMouseLeave={() => setIsHovered(null)}
              >
                {/* Image Container */}
                <div className="relative h-40 sm:h-56 lg:h-72 overflow-hidden">
                  <img 
                    src="/berita1.png" 
                    alt="Desa Krandegan Pionir Smart Village dengan Chatbot AI" 
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
                        <time className="font-medium text-gray-800">17 Juni 2025</time>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-3 right-3">
                    <div className="bg-green-500 rounded-full px-2.5 py-1 transition-all duration-500 group-hover:bg-green-600 group-hover:scale-105">
                      <span className="text-white font-medium text-[0.65rem]">Inovasi Digital</span>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute top-12 right-12 w-12 h-12 bg-white/10 rounded-full blur-xl transition-all duration-700 ${isHovered === 'berita1' ? 'animate-pulse scale-150' : ''}`}></div>
                  <div className={`absolute bottom-12 left-12 w-10 h-10 bg-green-500/20 rounded-full blur-lg transition-all duration-700 delay-300 ${isHovered === 'berita1' ? 'animate-pulse scale-125' : ''}`}></div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-5 lg:p-7">
                  <div className="flex items-center gap-2.5 mb-2.5 text-[0.65rem] text-gray-500">
                    <div className="flex items-center gap-1">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-[0.6rem]">Y</span>
                      </div>
                      <span className="font-medium">Yusuf, Technology Enthusiast</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <svg className="w-2.5 h-2.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                      </svg>
                      <span>8 menit baca</span>
                    </div>
                  </div>

                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2.5 leading-tight group-hover:text-green-700 transition-colors duration-300">
                    Desa Krandegan Pionir Smart Village dengan Chatbot AI
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed mb-3 text-xs sm:text-sm">
                    Desa Krandegan memimpin transformasi digital dengan chatbot AI, menyederhanakan layanan publik untuk warga.
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {['Digital Village', 'AI Technology', 'Smart Government', 'Innovation', 'Public Service'].map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-green-100 text-green-500 px-1.5 py-0.5 rounded-full text-[0.65rem] font-medium transition-all duration-300 hover:bg-green-200"
                      >
                        #{tag.replace(' ', '')}
                      </span>
                    ))}
                  </div>

                  {/* Read More Button */}
                  <div className="flex items-center justify-end gap-1 text-green-500 font-medium group-hover:text-green-700 transition-colors duration-300">
                    <span>Baca Selengkapnya</span>
                    <svg 
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${isHovered === 'berita1' ? 'translate-x-2' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-xl transition-all duration-500 pointer-events-none ${isHovered === 'berita1' ? 'shadow-lg shadow-green-200/50' : ''}`}></div>
              </article>
            </Link>
          </div>

          {/* Article Card 2: Berita2 */}
          <div className={`max-w-3xl mx-auto transform transition-all duration-1000 delay-500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link href="/berita2">
              <article 
                className="group relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-700 hover:-translate-y-1 cursor-pointer"
                onMouseEnter={() => setIsHovered('berita2')}
                onMouseLeave={() => setIsHovered(null)}
              >
                {/* Image Container */}
                <div className="relative h-40 sm:h-56 lg:h-72 overflow-hidden">
                  <img 
                    src="/gbr.jpg" 
                    alt="Energi Bersih untuk Desa Terpencil melalui PLTMH" 
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
                        <time className="font-medium text-gray-800">26 Agustus 2025</time>
                      </div>
                    </div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-3 right-3">
                    <div className="bg-green-500 rounded-full px-2.5 py-1 transition-all duration-500 group-hover:bg-green-600 group-hover:scale-105">
                      <span className="text-white font-medium text-[0.65rem]">Inovasi Energi</span>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className={`absolute top-12 right-12 w-12 h-12 bg-white/10 rounded-full blur-xl transition-all duration-700 ${isHovered === 'berita2' ? 'animate-pulse scale-150' : ''}`}></div>
                  <div className={`absolute bottom-12 left-12 w-10 h-10 bg-green-500/20 rounded-full blur-lg transition-all duration-700 delay-300 ${isHovered === 'berita2' ? 'animate-pulse scale-125' : ''}`}></div>
                </div>

                {/* Content */}
                <div className="p-3 sm:p-5 lg:p-7">
                  <div className="flex items-center gap-2.5 mb-2.5 text-[0.65rem] text-gray-500">
                    <div className="flex items-center gap-1">
                      <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-[0.6rem]">A</span>
                      </div>
                      <span className="font-medium">Yusuf, Technology Enthusiast </span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <svg className="w-2.5 h-2.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                      </svg>
                      <span>6 menit baca</span>
                    </div>
                  </div>

                  <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2.5 leading-tight group-hover:text-green-700 transition-colors duration-300">
                    Energi Bersih untuk Desa Terpencil melalui PLTMH
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed mb-3 text-xs sm:text-sm">
                    Pembangkit Listrik Tenaga Mikrohidro (PLTMH) menjadi solusi inovatif untuk menyediakan listrik ramah lingkungan di desa-desa terpencil Indonesia, dipelopori oleh Tri Mumpuni.
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {['MicroHydro', 'CleanEnergy', 'RenewableEnergy', 'RuralDevelopment', 'TriMumpuni'].map((tag, index) => (
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
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${isHovered === 'berita2' ? 'translate-x-2' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-xl transition-all duration-500 pointer-events-none ${isHovered === 'berita2' ? 'shadow-lg shadow-green-200/50' : ''}`}></div>
              </article>
            </Link>
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
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