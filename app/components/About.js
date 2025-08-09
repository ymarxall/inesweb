'use client'
import React, { useEffect } from 'react';

export default function About() {
  useEffect(() => {
    // Simple fade-in animation for elements
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-white via-green-50/20 to-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-6 left-6 w-14 h-14 bg-green-100/30 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-10 w-20 h-20 bg-emerald-50/40 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-12 left-1/4 w-16 h-16 bg-green-100/25 rounded-full animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-12 fade-in" style={{opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease'}}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-4 shadow-lg shadow-green-500/20">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
            </svg>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            INESA: <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Solusi dari Masalah Nyata</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami mendengarkan masalah desa, lalu menciptakan solusi teknologi yang tepat guna untuk mengatasinya.
          </p>
        </div>

        {/* Problem Categories - Compact Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Pertanian */}
          <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-100 hover:border-green-300 transition-all duration-300 hover:-translate-y-1 fade-in" style={{opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.1s'}}>
            <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-green-500 group-hover:to-emerald-500 transition-all duration-300">
              <svg className="w-6 h-6 text-green-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21l18-18M3 21h18M3 21V9l9-9 9 9v12"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
              Pertanian & Pangan
            </h3>
            <div className="space-y-2 text-gray-600 text-sm mb-4">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Ketidakpastian waktu tanam optimal</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Pemborosan air irigasi</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Serangan hama tak terprediksi</span>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-100">
              <p className="text-xs font-medium text-green-600">
                → Monitoring & prediksi berbasis teknologi
              </p>
            </div>
          </div>

          {/* Peternakan */}
          <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-100 hover:border-green-300 transition-all duration-300 hover:-translate-y-1 fade-in" style={{opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.2s'}}>
            <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300">
              <svg className="w-6 h-6 text-blue-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
              Peternakan & Perikanan
            </h3>
            <div className="space-y-2 text-gray-600 text-sm mb-4">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Monitoring kesehatan ternak sulit</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Manajemen pakan tidak efisien</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Akses pasar terbatas</span>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-100">
              <p className="text-xs font-medium text-blue-600">
                → Platform monitoring & marketplace digital
              </p>
            </div>
          </div>

          {/* Lingkungan */}
          <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-100 hover:border-green-300 transition-all duration-300 hover:-translate-y-1 fade-in" style={{opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.3s'}}>
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-emerald-500 group-hover:to-teal-500 transition-all duration-300">
              <svg className="w-6 h-6 text-emerald-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-emerald-600 transition-colors duration-300">
              Lingkungan & Sampah
            </h3>
            <div className="space-y-2 text-gray-600 text-sm mb-4">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Penumpukan sampah tak terkelola</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Kurang kesadaran pemilahan</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Pencemaran air dan tanah</span>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-100">
              <p className="text-xs font-medium text-emerald-600">
                → Pengelolaan sampah cerdas & monitoring
              </p>
            </div>
          </div>

          {/* Kelautan */}
          <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-100 hover:border-green-300 transition-all duration-300 hover:-translate-y-1 fade-in" style={{opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.4s'}}>
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-cyan-500 group-hover:to-blue-500 transition-all duration-300">
              <svg className="w-6 h-6 text-cyan-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
              Kelautan & Pesisir
            </h3>
            <div className="space-y-2 text-gray-600 text-sm mb-4">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Overfishing dan berkurangnya ikan</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Kerusakan terumbu karang</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Kurangnya data kondisi laut</span>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-100">
              <p className="text-xs font-medium text-cyan-600">
                → Monitoring laut & platform nelayan
              </p>
            </div>
          </div>

          {/* UMKM */}
          <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-100 hover:border-green-300 transition-all duration-300 hover:-translate-y-1 fade-in" style={{opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.5s'}}>
            <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
              <svg className="w-6 h-6 text-purple-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
              Ekonomi & UMKM
            </h3>
            <div className="space-y-2 text-gray-600 text-sm mb-4">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Keterbatasan akses pasar</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Rendah literasi digital</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Kesulitan akses permodalan</span>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-100">
              <p className="text-xs font-medium text-purple-600">
                → E-commerce & pemberdayaan digital
              </p>
            </div>
          </div>

          {/* Administrasi */}
          <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-100 hover:border-green-300 transition-all duration-300 hover:-translate-y-1 fade-in md:col-span-2 lg:col-span-1" style={{opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.6s'}}>
            <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300">
              <svg className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
              Administrasi Desa
            </h3>
            <div className="space-y-2 text-gray-600 text-sm mb-4">
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Proses manual yang lambat</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Kurang transparansi dana</span>
              </div>
              <div className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mt-1.5 flex-shrink-0"></div>
                <span>Komunikasi terbatas</span>
              </div>
            </div>
            <div className="pt-3 border-t border-gray-100">
              <p className="text-xs font-medium text-orange-600">
                → Digitalisasi layanan & transparansi
              </p>
            </div>
          </div>
        </div>

        {/* Compact Core Principles */}
        <div className="grid lg:grid-cols-2 gap-8 items-center fade-in" style={{opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.8s'}}>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-5">
              Prinsip <span className="text-green-500">Teknologi Tepat Guna</span>
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-800 mb-1">Sesuai Kebutuhan Lokal</h4>
                  <p className="text-sm text-gray-600">Disesuaikan dengan konteks dan kemampuan masyarakat</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-800 mb-1">Partisipatif & Inklusif</h4>
                  <p className="text-sm text-gray-600">Melibatkan semua lapisan dengan menghormati budaya lokal</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-800 mb-1">Berkelanjutan & Mandiri</h4>
                  <p className="text-sm text-gray-600">Tidak menciptakan ketergantungan pada pihak eksternal</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
              <div className="text-center mb-5">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800">Dampak yang Diharapkan</h4>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm font-medium text-gray-800">Peningkatan kesejahteraan masyarakat</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm font-medium text-gray-800">Penguatan kapasitas lokal</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm font-medium text-gray-800">Pelestarian lingkungan berkelanjutan</span>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-3 shadow-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
                    <span className="text-sm font-medium text-gray-800">Transformasi digital inklusif</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

         {/* Additional Info Section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center" data-aos="fade-up" data-aos-delay="1600">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-6 sm:p-8 lg:p-10 max-w-6xl mx-auto">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-4" data-aos="fade-up" data-aos-delay="1700">
              Pendekatan <span className="text-green-600">Berbasis Kebutuhan</span>
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-6" data-aos="fade-up" data-aos-delay="1800">
              Setiap desa memiliki tantangan dan potensi yang unik. INESA hadir untuk mengidentifikasi permasalahan spesifik setiap desa, kemudian merancang dan mengimplementasikan solusi teknologi yang tepat sasaran dan berkelanjutan.
            </p>
            
            {/* Process Steps - 5 Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mt-8">
              
              {/* Step 1 - Riset Pendahuluan */}
              <div className="text-center" data-aos="fade-up" data-aos-delay="1900">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Riset Pendahuluan</h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">Studi literatur teknologi terkini dan praktik terbaik, observasi lapangan, wawancara dengan pemangku kepentingan</p>
                <p className="text-xs text-gray-500 font-medium">Literatur review, wawancara mendalam</p>
              </div>
              
              {/* Step 2 - Pengumpulan Data */}
              <div className="text-center" data-aos="fade-up" data-aos-delay="2000">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Pengumpulan Data</h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">Survei kebutuhan dan Focus Group Discussion (FGD) untuk menggali tantangan spesifik</p>
                <p className="text-xs text-gray-500 font-medium">Kuantitatif (kuesioner digital), Kualitatif (FGD)</p>
              </div>
              
              {/* Step 3 - Penyusunan Konsep */}
              <div className="text-center" data-aos="fade-up" data-aos-delay="2100">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Penyusunan Konsep</h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">Pemetaan solusi teknologi berdasarkan matriks impact-feasibility, pembuatan prototipe sederhana</p>
                <p className="text-xs text-gray-500 font-medium">Analisis prioritas, desain prototipe</p>
              </div>
              
              {/* Step 4 - Penetapan Ide Final */}
              <div className="text-center" data-aos="fade-up" data-aos-delay="2200">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">4</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Penetapan Ide Final</h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">Presentasi konsep kepada masyarakat desa, revisi berdasarkan masukan, penandatanganan MoU</p>
                <p className="text-xs text-gray-500 font-medium">Dialog partisipatif, komitmen formal</p>
              </div>
              
              {/* Step 5 - Eksekusi Langsung */}
              <div className="text-center" data-aos="fade-up" data-aos-delay="2300">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">5</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Eksekusi Langsung</h4>
                <p className="text-xs sm:text-sm text-gray-600 mb-2">Pembagian tim (IoT, infrastruktur, AI), pelibatan masyarakat dalam instalasi dan pelatihan</p>
                <p className="text-xs text-gray-500 font-medium">Implementasi terukur, pelatihan langsung</p>
              </div>
            </div>
          </div>
        </div>
      
      {/* Minimal floating particles */}
      <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-green-300 rounded-full opacity-40 animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-emerald-300 rounded-full opacity-30 animate-ping delay-1000"></div>
    </section>
  );
}