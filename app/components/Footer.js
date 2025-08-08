'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-green-600 text-white relative overflow-hidden min-h-[280px] sm:min-h-[320px] md:min-h-[360px] lg:min-h-[400px]">
      {/* Decorative curved lines - Hidden on small screens for better performance */}
      <div className="absolute inset-0 opacity-10 hidden sm:block">
        {/* Top curved lines */}
        <svg className="absolute top-5 right-10 w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 lg:w-56 lg:h-28 xl:w-64 xl:h-32 2xl:w-72 2xl:h-36" viewBox="0 0 200 100">
          <path d="M20,80 Q100,20 180,60" stroke="white" strokeWidth="1" fill="none" />
        </svg>
        <svg className="absolute top-10 right-20 w-20 h-10 sm:w-24 sm:h-12 md:w-32 md:h-16 lg:w-40 lg:h-20 xl:w-48 xl:h-24 2xl:w-56 2xl:h-28" viewBox="0 0 150 80">
          <path d="M10,60 Q75,10 140,40" stroke="white" strokeWidth="1" fill="none" />
        </svg>
        
        {/* Bottom curved lines */}
        <svg className="absolute bottom-10 right-5 w-40 h-24 sm:w-48 sm:h-28 md:w-56 md:h-32 lg:w-64 lg:h-36 xl:w-72 xl:h-40 2xl:w-80 2xl:h-44" viewBox="0 0 220 120">
          <path d="M30,90 Q110,30 190,70" stroke="white" strokeWidth="1" fill="none" />
        </svg>
        <svg className="absolute bottom-20 right-14 w-24 h-12 sm:w-32 sm:h-16 md:w-40 md:h-20 lg:w-48 lg:h-24 xl:w-56 xl:h-28 2xl:w-64 2xl:h-32" viewBox="0 0 160 80">
          <path d="M15,60 Q80,20 145,50" stroke="white" strokeWidth="1" fill="none" />
        </svg>
        <svg className="absolute bottom-5 right-2 w-48 h-16 sm:w-56 sm:h-20 md:w-64 md:h-24 lg:w-72 lg:h-28 xl:w-80 xl:h-32 2xl:w-88 2xl:h-36" viewBox="0 0 250 100">
          <path d="M40,70 Q125,20 210,55" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Simple mobile decoration */}
      <div className="absolute inset-0 opacity-5 sm:hidden">
        <div className="absolute top-2 right-2 w-14 h-14 rounded-full border border-white"></div>
        <div className="absolute bottom-2 left-2 w-8 h-8 rounded-full border border-white"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 py-5 sm:py-7 md:py-9 lg:py-11 xl:py-13 2xl:py-15 relative z-10 max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        {/* Main CTA Card */}
        <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-7 lg:p-9 mb-5 sm:mb-7 md:mb-9 lg:mb-11 xl:mb-13 2xl:mb-15 border border-white border-opacity-20 shadow-xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-2 sm:gap-3 md:gap-5 lg:gap-7 xl:gap-9 2xl:gap-11">
            <div className="flex-1 text-center lg:text-left">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-normal leading-relaxed text-white">
                Bergabunglah dengan desa-desa lain untuk menciptakan
                <span className="hidden sm:inline"><br /></span>
                <span className="sm:hidden"> </span>
                tata kelola desa yang modern dan transparan.
              </p>
            </div>
            <div className="flex-shrink-0 w-full sm:w-auto">
              <Link href="/#contact">
                <button className="w-full sm:w-auto bg-white text-green-600 font-semibold px-4 sm:px-6 md:px-8 lg:px-10 py-1.5 sm:py-2 md:py-2.5 lg:py-3 rounded-lg sm:rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-xs sm:text-sm md:text-base lg:text-lg">
                  Bergabung
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="mb-5 sm:mb-7 md:mb-9 lg:mb-11 xl:mb-13 2xl:mb-15">
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold mb-2 sm:mb-3 md:mb-5 lg:mb-7 text-white tracking-wide text-center sm:text-left">
            MENU LAINNYA
          </h3>
          
          {/* Desktop Menu - Horizontal */}
          <div className="hidden sm:flex flex-wrap gap-x-5 sm:gap-x-7 md:gap-x-9 lg:gap-x-11 xl:gap-x-13 2xl:gap-x-15 gap-y-1.5 justify-start">
            <a href="/" className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg font-medium hover:text-green-200 transition-colors duration-300">
              Beranda
            </a>
            <a href="/#services" className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg font-medium hover:text-green-200 transition-colors duration-300">
              Upaya
            </a>
            <a href="/#mitra" className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg font-medium hover:text-green-200 transition-colors duration-300">
              Mitra
            </a>
            <a href="/blog" className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg font-medium hover:text-green-200 transition-colors duration-300">
              Blog
            </a>
          </div>

          {/* Mobile Menu - Single Column */}
          <div className="flex flex-col gap-1.5 sm:hidden">
            <a href="#/" className="text-white text-[0.65rem] font-medium hover:text-green-200 transition-colors duration-300 bg-white bg-opacity-10 py-1 px-2 rounded-md text-left">
              Beranda
            </a>
            <a href="#services" className="text-white text-[0.65rem] font-medium hover:text-green-200 transition-colors duration-300 bg-white bg-opacity-10 py-1 px-2 rounded-md text-left">
              Upaya
            </a>
            <a href="#mitra" className="text-white text-[0.65rem] font-medium hover:text-green-200 transition-colors duration-300 bg-white bg-opacity-10 py-1 px-2 rounded-md text-left">
              Mitra
            </a>
            <a href="/blog" className="text-white text-[0.65rem] font-medium hover:text-green-200 transition-colors duration-300 bg-white bg-opacity-10 py-1 px-2 rounded-md text-left">
              Blog
            </a>
          </div>
        </div>

        {/* Bottom Section - Copyright and Social Media */}
        <div className="border-t border-white border-opacity-20 pt-2 sm:pt-3 md:pt-5 lg:pt-7 xl:pt-9 2xl:pt-11">
          <div className="flex flex-col gap-2 sm:gap-3 md:gap-5 md:flex-row md:justify-between md:items-center">
            {/* Copyright - Centered on mobile */}
            <div className="text-center md:text-left order-2 md:order-1">
              <p className="text-white opacity-70 text-[0.65rem] sm:text-xs md:text-sm lg:text-base xl:text-lg font-medium">
                © 2025 Coconut Lab • Crafted with ❤️ by hacklab
              </p>
            </div>
            
            {/* Social Media - Centered on mobile */}
            <div className="order-1 md:order-2">
              {/* Desktop Social - Horizontal */}
              <div className="hidden sm:flex gap-2 sm:gap-3 md:gap-5 lg:gap-7 xl:gap-9 2xl:gap-11 justify-center md:justify-end">
                <a 
                  href="https://www.youtube.com/@coconutcomputerclub3982" 
                  className="text-white text-[0.65rem] sm:text-xs md:text-sm lg:text-base xl:text-lg font-medium hover:text-green-200 transition-colors duration-300"
                >
                  YouTube
                </a>
                <a 
                  href="https://www.facebook.com/coconutcomputer" 
                  className="text-white text-[0.65rem] sm:text-xs md:text-sm lg:text-base xl:text-lg font-medium hover:text-green-200 transition-colors duration-300"
                >
                  Facebook
                </a>
                <a 
                  href="https://www.instagram.com/coconutdotorg/" 
                  className="text-white text-[0.65rem] sm:text-xs md:text-sm lg:text-base xl:text-lg font-medium hover:text-green-200 transition-colors duration-300"
                >
                  Instagram
                </a>
                <a 
                  href="https://www.tiktok.com/@coconut_computer_club" 
                  className="text-white text-[0.65rem] sm:text-xs md:text-sm lg:text-base xl:text-lg font-medium hover:text-green-200 transition-colors duration-300"
                >
                  TikTok
                </a>
              </div>

              {/* Mobile Social - Grid */}
              <div className="grid grid-cols-2 gap-1.5 sm:gap-2 sm:hidden">
                <a 
                  href="https://www.youtube.com/@coconutcomputerclub3982/" 
                  className="text-white text-[0.65rem] font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-0.75 px-1.5 rounded-sm"
                >
                  YouTube
                </a>
                <a 
                  href="https://www.facebook.com/coconutcomputer" 
                  className="text-white text-[0.65rem] font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-0.75 px-1.5 rounded-sm"
                >
                  Facebook
                </a>
                <a 
                  href="https://www.instagram.com/coconutdotorg/" 
                  className="text-white text-[0.65rem] font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-0.75 px-1.5 rounded-sm"
                >
                  Instagram
                </a>
                <a 
                  href="https://www.tiktok.com/@coconut_computer_club" 
                  className="text-white text-[0.65rem] font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-0.75 px-1.5 rounded-sm"
                >
                  TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}