'use client';
import React from 'react';
import Link from 'next/link';

export default function Gabung() {
  return (
    <section id="desa" className="py-12 sm:py-16 lg:py-20 bg-white text-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-green-100 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-32 right-16 w-32 h-32 bg-green-50 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-100 rounded-full opacity-25 animate-pulse delay-500"></div>
      <div className="absolute bottom-32 right-1/3 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-pulse delay-700"></div>

      {/* Judul */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 lg:mb-16 relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-2xl mb-4 shadow-lg shadow-green-500/25">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          Mitra Desa <span className="text-green-500">Inesa.id</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Desa-desa yang telah bergabung dengan platform kami untuk memajukan transformasi digital dan pelayanan publik.
        </p>
      </div>

      {/* Grid Gambar */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-green-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <img
              src="/jeneponto.png"
              alt="Desa Bontomanai"
              className="w-full h-48 object-contain p-4"
              loading="lazy"
            />
            <div className="p-4 sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  05 Mei - 10 Mei 2025
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-2">Kabupaten Jeneponto</p>
              <h4 className="text-base sm:text-lg font-semibold text-gray-800">Desa Bontomanai</h4>
              
         
            </div>
          </div>
        </div>
      </div>

      {/* Tombol Aksi */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 lg:mt-16 text-center">
        <Link href="/blog">
          <button className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
            <span>Lihat Timeline Digitalisasi Desa</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}