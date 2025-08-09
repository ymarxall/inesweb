'use client';
import React, { useEffect } from 'react';

export default function Services() {
  useEffect(() => {
    // AOS initialization would go here if AOS library was available
  }, []);

  return (
    <section id="services" className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header - mobile first approach */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16" data-aos="fade-up" data-aos-delay="100">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 px-4 sm:px-0" data-aos="fade-up" data-aos-delay="200">
            Solusi <span className="text-green-600">Berbasis Kebutuhan</span> Desa
          </h2>
          
          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-0" data-aos="fade-up" data-aos-delay="300">
            INESA mengidentifikasi permasalahan spesifik setiap desa dan menciptakan solusi teknologi yang tepat sasaran untuk berbagai aspek kehidupan desa
          </p>
        </div>

        {/* Services Grid - optimized spacing for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mx-4 sm:mx-6 lg:mx-8">
          
          {/* Service Card 1 - Village Administration */}
          <div className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl border border-gray-100 hover:border-green-200 transition-all duration-300 sm:duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2" data-aos="fade-up" data-aos-delay="400">
            <div className="flex flex-col items-center text-center">
              {/* Icon Container - mobile optimized sizes */}
              <div className="relative mb-4 sm:mb-6 transform group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 sm:duration-500" data-aos="fade-up" data-aos-delay="500">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-15 group-hover:opacity-25 sm:group-hover:opacity-30 blur-md sm:blur-lg transition-opacity duration-300 sm:duration-500"></div>
                <img 
                  src="/a1.png" 
                  alt="Sistem administrasi desa" 
                  className="relative w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain drop-shadow-lg"
                  loading="lazy"
                />
                {/* Floating badge - hidden on small mobile */}
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden xs:block">
                  Admin
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-2 sm:space-y-4">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300 leading-tight" data-aos="fade-up" data-aos-delay="600">
                  Sistem Administrasi Desa
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed" data-aos="fade-up" data-aos-delay="700">
                  Solusi terintegrasi untuk kebutuhan administrasi desa, mulai dari profil desa, pengelolaan keuangan, hingga layanan masyarakat yang efisien dan transparan.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 2 - Infrastructure */}
          <div className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 sm:duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2" data-aos="fade-up" data-aos-delay="800">
            <div className="flex flex-col items-center text-center">
              {/* Icon Container */}
              <div className="relative mb-4 sm:mb-6 transform group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 sm:duration-500" data-aos="fade-up" data-aos-delay="900">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-15 group-hover:opacity-25 sm:group-hover:opacity-30 blur-md sm:blur-lg transition-opacity duration-300 sm:duration-500"></div>
                <img 
                  src="/a2.png" 
                  alt="Infrastruktur teknologi desa" 
                  className="relative w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain drop-shadow-lg"
                  loading="lazy"
                />
                {/* Floating badge */}
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-blue-500 text-white text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden xs:block">
                  Smart
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-2 sm:space-y-4">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight" data-aos="fade-up" data-aos-delay="1000">
                  Infrastruktur Desa
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed" data-aos="fade-up" data-aos-delay="1100">
                  Pengembangan infrastruktur desa yang mendukung konektivitas, akses informasi, dan pengelolaan sumber daya yang berkelanjutan sesuai kebutuhan lokal.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 3 - Livelihood Enhancement */}
          <div className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-300 sm:duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 md:col-span-2 xl:col-span-1" data-aos="fade-up" data-aos-delay="1200">
            <div className="flex flex-col items-center text-center">
              {/* Icon Container */}
              <div className="relative mb-4 sm:mb-6 transform group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 sm:duration-500" data-aos="fade-up" data-aos-delay="1300">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-15 group-hover:opacity-25 sm:group-hover:opacity-30 blur-md sm:blur-lg transition-opacity duration-300 sm:duration-500"></div>
                <img 
                  src="/a3.png" 
                  alt="Peningkatan mata pencaharian warga desa" 
                  className="relative w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain drop-shadow-lg"
                  loading="lazy"
                />
                {/* Floating badge */}
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-purple-500 text-white text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden xs:block">
                  Growth
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-2 sm:space-y-4">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 leading-tight" data-aos="fade-up" data-aos-delay="1400">
                  Peningkatan Mata Pencaharian
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed" data-aos="fade-up" data-aos-delay="1500">
                  Pemberdayaan ekonomi masyarakat melalui optimalisasi potensi lokal, peningkatan produktivitas, dan akses pasar yang lebih luas dengan bantuan teknologi.
                </p>
               
              </div>
            </div>
          </div>
        </div>

     
      </div>
    </section>
  );
}