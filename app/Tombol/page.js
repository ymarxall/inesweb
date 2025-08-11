
'use client'
import React, { useEffect, useState } from 'react';

export default function About() {
  const [visibleItems, setVisibleItems] = useState(new Set());

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          if (entry.target.dataset.index) {
            setVisibleItems(prev => new Set([...prev, entry.target.dataset.index]));
          }
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.fade-in, [data-timeline-item]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const timelineSteps = [
    {
      phase: "Fase 1",
      title: "Analisis & Perencanaan",
      description: "Survei kebutuhan desa, analisis infrastruktur, dan perencanaan sistem digital",
      icon: "🔍",
      color: "green",
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
      color: "emerald",
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
      color: "teal",
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
      color: "lime",
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
    green: {
      bg: "bg-green-600",
      light: "bg-green-100",
      text: "text-green-800",
      line: "bg-green-300",
      hover: "hover:bg-green-700"
    },
    emerald: {
      bg: "bg-emerald-600",
      light: "bg-emerald-100",
      text: "text-emerald-800",
      line: "bg-emerald-300",
      hover: "hover:bg-emerald-700"
    },
    teal: {
      bg: "bg-teal-600",
      light: "bg-teal-100",
      text: "text-teal-800",
      line: "bg-teal-300",
      hover: "hover:bg-teal-700"
    },
    lime: {
      bg: "bg-lime-600",
      light: "bg-lime-100",
      text: "text-lime-800",
      line: "bg-lime-300",
      hover: "hover:bg-lime-700"
    }
  };

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-white via-green-50/20 to-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-6 left-6 w-14 h-14 bg-green-100/30 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-10 w-20 h-20 bg-emerald-50/40 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-12 left-1/4 w-16 h-16 bg-green-100/25 rounded-full animate-pulse delay-500"></div>

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        {/* Compact Header */}
        <div className="text-center fade-in" style={{opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease', marginBottom: '50px'}}>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" style={{marginBottom: '250px'}}>
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
        <div className="grid lg:grid-cols-2 items-center fade-in" style={{opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 0.8s', gap: '64px', marginBottom: '100px'}}>
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

        {/* Timeline Content */}
        <div className="max-w-5xl mx-auto py-16 fade-in" style={{opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 1s'}}>
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

      {/* Minimal floating particles */}
      <div className="absolute top-1/4 left-1/3 w-1.5 h-1.5 bg-green-300 rounded-full opacity-40 animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-emerald-300 rounded-full opacity-30 animate-ping delay-1000"></div>
    </section>
  );
}
