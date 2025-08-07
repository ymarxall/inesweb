'use client';
import React from 'react';
import Link from 'next/link';

export default function Gabung() {
  return (
    <section id="desa" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-white text-center relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-8 left-8 w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 2xl:w-36 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-36 bg-green-100 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-24 right-12 w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-44 h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 2xl:h-44 bg-green-50 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-16 left-1/4 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40 h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 2xl:h-40 bg-green-100 rounded-full opacity-25 animate-pulse delay-500"></div>
      <div className="absolute bottom-24 right-1/3 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32 bg-green-200 rounded-full opacity-20 animate-pulse delay-700"></div>

      {/* Judul */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24 relative z-10">
        <div className="inline-flex items-center justify-center w-12 sm:w-14 md:w-16 lg:w-20 xl:w-24 2xl:w-28 h-12 sm:h-14 md:h-16 lg:h-20 xl:h-24 2xl:h-28 bg-green-500 rounded-2xl mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8 shadow-lg shadow-green-500/25">
          <svg className="w-6 sm:w-7 md:w-8 lg:w-10 xl:w-12 2xl:w-14 h-6 sm:h-7 md:h-8 lg:h-10 xl:h-12 2xl:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </div>
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8">
          Mitra Desa <span className="text-green-500">Inesa.id</span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto leading-relaxed">
          Desa-desa yang telah bergabung dengan platform kami untuk memajukan transformasi digital dan pelayanan publik.
        </p>
      </div>

      {/* Grid Gambar */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="flex justify-center">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-green-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <img
              src="/jeneponto.png"
              alt="Desa Bontomanai"
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 2xl:h-80 object-contain p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8"
              loading="lazy"
            />
            <div className="p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8">
              <div className="flex items-center justify-between mb-2 sm:mb-3 md:mb-4">
                <span className="inline-flex items-center px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-2xs sm:text-xs md:text-sm lg:text-base xl:text-lg font-medium bg-green-100 text-green-700">
                  <svg className="w-2.5 sm:w-3 md:w-3.5 lg:w-4 xl:w-5 h-2.5 sm:h-3 md:h-3.5 lg:h-4 xl:h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  05 Mei - 10 Mei 2025
                </span>
              </div>
              <p className="text-2xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-500 mb-1 sm:mb-2 md:mb-3">
                Kabupaten Jeneponto
              </p>
              <h4 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold text-gray-800">
                Desa Bontomanai
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Tombol Aksi */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 mt-6 sm:mt-8 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 text-center">
        <Link href="/Tombol">
          <button className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 py-2 sm:py-3 md:py-3.5 lg:py-4 xl:py-4.5 2xl:py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25">
            <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">Lihat Timeline Digitalisasi Desa</span>
            <svg className="ml-1 sm:ml-2 w-4 sm:w-5 md:w-6 lg:w-7 xl:w-8 2xl:w-9 h-4 sm:h-5 md:h-6 lg:h-7 xl:h-8 2xl:h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}