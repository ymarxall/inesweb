'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden" data-aos="fade-up" data-aos-delay="50">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-16 sm:w-20 h-16 sm:h-20 bg-green-100 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-32 right-16 w-24 sm:w-32 h-24 sm:h-32 bg-green-50 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-20 sm:w-24 h-20 sm:h-24 bg-green-100 rounded-full opacity-25 animate-pulse delay-500"></div>
      <div className="absolute bottom-32 right-1/3 w-12 sm:w-16 h-12 sm:h-16 bg-green-200 rounded-full opacity-20 animate-pulse delay-700"></div>

      <div className="container mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 mx-4 sm:mx-6 lg:mx-10" data-aos="fade-up" data-aos-delay="100">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-2xl mb-4 shadow-lg shadow-green-500/25" data-aos="fade-up" data-aos-delay="150">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4" data-aos="fade-up" data-aos-delay="200">
            Keunggulan <span className="text-green-500">inesa.id</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-sm sm:max-w-md lg:max-w-lg mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="250">
            Inesa adalah solusi digital terpadu untuk desa, membantu mengelola administrasi, keuangan, dan pelayanan publik secara efisien, transparan, dan modern.
          </p>
        </div>

        {/* Mobile Image - Show only on mobile, right after description */}
        <div className="lg:hidden mb-8 sm:mb-12 mx-4 sm:mx-6 lg:mx-10" data-aos="fade-up" data-aos-delay="300">
          <div className="relative max-w-[80%] sm:max-w-[70%] mx-auto">
            {/* Background decorative elements for mobile */}
            <div className="absolute -top-4 -right-4 w-16 sm:w-20 h-16 sm:h-20 bg-green-100 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-12 sm:w-16 h-12 sm:h-16 bg-green-200 rounded-full opacity-40 animate-pulse"></div>
            
            <img
              src="/putus.png"
              alt="Decorative dashed line"
              className="absolute inset-0 w-full h-full object-contain opacity-20 z-0"
              loading="lazy"
              data-aos="fade-up"
              data-aos-delay="350"
            />
            
            <div className="relative z-10">
              <img
                src="/rocket.png"
                alt="Digital transformation illustration"
                className="w-full max-w-[80%] sm:max-w-[70%] mx-auto h-auto drop-shadow-2xl transition-transform duration-300 hover:scale-105"
                loading="lazy"
                data-aos="fade-up"
                data-aos-delay="400"
              />
            </div>
            
            <div className="absolute top-2 right-2 bg-white rounded-full px-2 sm:px-3 py-1 shadow-lg transform rotate-12 transition-transform duration-300 hover:scale-110" data-aos="fade-up" data-aos-delay="450">
              <div className="flex items-center text-xs sm:text-sm font-semibold text-green-500">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Digital First
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12 mx-4 sm:mx-6 lg:mx-10">
          {/* Desktop Image Section - Hidden on mobile */}
          <div className="hidden lg:block w-full lg:w-1/2" data-aos="fade-left" data-aos-delay="300">
            <div className="relative max-w-[80%] sm:max-w-[70%] lg:max-w-[80%] mx-auto lg:mx-0">
              {/* Background decorative elements */}
              <div className="absolute -top-6 sm:-top-8 -right-6 sm:-right-8 w-20 sm:w-24 h-20 sm:h-24 bg-green-100 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 sm:w-20 h-16 sm:h-20 bg-green-200 rounded-full opacity-40 animate-pulse"></div>
              
              <img
                src="/putus.png"
                alt="Decorative dashed line"
                className="absolute inset-0 w-full h-full object-contain opacity-20 z-0"
                loading="lazy"
                data-aos="fade-left"
                data-aos-delay="350"
              />
              
              <div className="relative z-10">
                <img
                  src="/rocket.png"
                  alt="Digital transformation illustration"
                  className="w-full max-w-[80%] sm:max-w-[70%] lg:max-w-[80%] mx-auto h-auto drop-shadow-2xl transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  data-aos="fade-left"
                  data-aos-delay="400"
              />
              </div>
              
              <div className="absolute top-4 right-4 bg-white rounded-full px-3 sm:px-4 py-1 sm:py-2 shadow-lg transform rotate-12 transition-transform duration-300 hover:scale-110" data-aos="fade-left" data-aos-delay="450">
                <div className="flex items-center text-xs sm:text-sm font-semibold text-green-500">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Digital First
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2" data-aos="fade-right" data-aos-delay="500">
            <div className="space-y-4 sm:space-y-6">
              <div className="group bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl border-2 border-gray-100 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01]" data-aos="fade-up" data-aos-delay="550">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-green-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2 group-hover:text-green-500 transition-colors duration-300" data-aos="fade-up" data-aos-delay="600">
                      Sistem Persuratan Digital Terpadu
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed" data-aos="fade-up" data-aos-delay="650">
                      Sederhanakan proses surat-menyurat desa dengan platform digital yang cepat, akurat, dan terintegrasi, menghemat waktu dan meningkatkan efisiensi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl border-2 border-gray-100 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01]" data-aos="fade-up" data-aos-delay="700">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-green-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2 group-hover:text-green-500 transition-colors duration-300" data-aos="fade-up" data-aos-delay="750">
                      Template Dokumen Profesional
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed" data-aos="fade-up" data-aos-delay="800">
                      Akses berbagai template dokumen siap pakai yang dirancang untuk memenuhi standar administrasi desa, mempermudah pembuatan surat resmi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl border-2 border-gray-100 hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01]" data-aos="fade-up" data-aos-delay="850">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 sm:w-12 h-10 sm:h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-green-500 group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800 mb-2 group-hover:text-green-500 transition-colors duration-300" data-aos="fade-up" data-aos-delay="900">
                      Cloud Storage yang Aman
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed" data-aos="fade-up" data-aos-delay="950">
                      Simpan semua dokumen desa di cloud dengan enkripsi tingkat tinggi, memastikan keamanan data dan akses mudah kapan saja, di mana saja.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 sm:pt-6" data-aos="fade-up" data-aos-delay="1000">
                <a
                  href="/kelebihan"
                  className="inline-flex items-center text-sm sm:text-base md:text-lg font-semibold text-green-500 hover:text-green-600 group transition-colors duration-300"
                >
                  <span>Lihat Unggulan Lainnya</span>
                  <svg
                    className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}