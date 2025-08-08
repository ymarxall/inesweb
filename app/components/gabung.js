'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Gabung() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section id="mitra" className="py-6 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-24 bg-white text-center relative overflow-hidden" data-aos="fade-up" data-aos-delay="50">
      {/* Decorative Background Elements */}
      <div className="absolute top-8 left-8 w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 2xl:w-36 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 2xl:h-36 bg-green-100 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-24 right-12 w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-44 h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 2xl:h-44 bg-green-50 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-16 left-1/4 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40 h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 2xl:h-40 bg-green-100 rounded-full opacity-25 animate-pulse delay-500"></div>
      <div className="absolute bottom-24 right-1/3 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32 bg-green-200 rounded-full opacity-20 animate-pulse delay-700"></div>

      {/* Judul */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 mb-2 sm:mb-3 md:mb-4 lg:mb-6 xl:mb-8 2xl:mb-10 relative z-10" data-aos="fade-up" data-aos-delay="100">
        <div className="inline-flex items-center justify-center w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 2xl:w-18 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-18 bg-green-500 rounded-2xl mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-7 shadow-lg shadow-green-500/25" data-aos="fade-up" data-aos-delay="150">
          <svg className="w-4 sm:w-5 md:w-6 lg:w-7 xl:w-8 2xl:w-9 h-4 sm:h-5 md:h-6 lg:h-7 xl:h-8 2xl:h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        </div>
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-7" data-aos="fade-up" data-aos-delay="200">
          Mitra Desa <span className="text-green-500">Inesa.id</span>
        </h2>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="250">
          Desa yang telah bergabung dengan platform kami untuk memajukan transformasi digital dan pelayanan publik.
        </p>
      </div>

      {/* Grid Gambar */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16" data-aos="fade-up" data-aos-delay="300">
        <div className="flex justify-center">
          <Link href="/bontomanai">
            <div className="w-full max-w-[15rem] sm:max-w-[17rem] md:max-w-[19rem] lg:max-w-[21rem] xl:max-w-[23rem] 2xl:max-w-[25rem] bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-green-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-aos="fade-up" data-aos-delay="350">
              <img
                src="/jeneponto.png"
                alt="Desa Bontomanai"
                className="w-full h-28 sm:h-32 md:h-36 lg:h-40 xl:h-44 2xl:h-48 object-contain p-2 sm:p-3 md:p-4 lg:p-4 xl:p-5 2xl:p-6"
                loading="lazy"
                data-aos="fade-up"
                data-aos-delay="400"
              />
              <div className="p-2 sm:p-3 md:p-3 lg:p-4 xl:p-5 2xl:p-6">
                <div className="flex items-center justify-between mb-1 sm:mb-1.5 md:mb-2" data-aos="fade-up" data-aos-delay="450">
                  <span className="inline-flex items-center px-1.5 sm:px-2 md:px-2.5 py-0.5 rounded-full text-[0.65rem] sm:text-xs md:text-sm lg:text-base xl:text-base font-medium bg-green-100 text-green-700">
                    <svg className="w-2 sm:w-2.5 md:w-3 lg:w-3.5 xl:w-4 h-2 sm:h-2.5 md:h-3 lg:h-3.5 xl:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    05 Mei - 10 Mei 2025
                  </span>
                </div>
                <p className="text-[0.65rem] sm:text-xs md:text-sm lg:text-base xl:text-base 2xl:text-lg text-gray-500 mb-1 sm:mb-1.5" data-aos="fade-up" data-aos-delay="500">
                  Kabupaten Jeneponto
                </p>
                <h4 className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg 2xl:text-xl font-semibold text-gray-800" data-aos="fade-up" data-aos-delay="550">
                  Desa Bontomanai
                </h4>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* Tombol Aksi */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 mt-2 sm:mt-3 md:mt-4 lg:mt-6 xl:mt-8 2xl:mt-10 text-center" data-aos="fade-up" data-aos-delay="600">
        <Link href="/Tombol">
          <button className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold px-3 sm:px-4 md:px-5 lg:px-7 xl:px-9 2xl:px-10 py-1 sm:py-1.5 md:py-2 lg:py-2.5 xl:py-3 2xl:py-3.5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/25" data-aos="fade-up" data-aos-delay="650">
            <span className="text-[0.65rem] sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl">Lihat Timeline Digitalisasi Desa</span>
            <svg className="ml-1 sm:ml-1.5 w-3 sm:w-4 md:w-4.5 lg:w-5 xl:w-6 2xl:w-7 h-3 sm:h-4 md:h-4.5 lg:h-5 xl:h-6 2xl:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}