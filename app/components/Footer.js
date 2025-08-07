export default function Footer() {
  return (
    <footer className="bg-green-600 text-white relative overflow-hidden min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px]">
      {/* Decorative curved lines - Hidden on small screens for better performance */}
      <div className="absolute inset-0 opacity-10 hidden sm:block">
        {/* Top curved lines */}
        <svg className="absolute top-8 right-16 w-40 h-20 sm:w-48 sm:h-24 md:w-56 md:h-28 lg:w-64 lg:h-32 xl:w-72 xl:h-36 2xl:w-80 2xl:h-40" viewBox="0 0 200 100">
          <path d="M20,80 Q100,20 180,60" stroke="white" strokeWidth="1" fill="none" />
        </svg>
        <svg className="absolute top-16 right-28 w-28 h-14 sm:w-32 sm:h-16 md:w-40 md:h-20 lg:w-48 lg:h-24 xl:w-56 xl:h-28 2xl:w-64 2xl:h-32" viewBox="0 0 150 80">
          <path d="M10,60 Q75,10 140,40" stroke="white" strokeWidth="1" fill="none" />
        </svg>
        
        {/* Bottom curved lines */}
        <svg className="absolute bottom-16 right-8 w-48 h-28 sm:w-56 sm:h-32 md:w-64 md:h-36 lg:w-72 lg:h-40 xl:w-80 xl:h-44 2xl:w-88 2xl:h-48" viewBox="0 0 220 120">
          <path d="M30,90 Q110,30 190,70" stroke="white" strokeWidth="1" fill="none" />
        </svg>
        <svg className="absolute bottom-28 right-20 w-32 h-16 sm:w-40 sm:h-20 md:w-48 md:h-24 lg:w-56 lg:h-28 xl:w-64 xl:h-32 2xl:w-72 2xl:h-36" viewBox="0 0 160 80">
          <path d="M15,60 Q80,20 145,50" stroke="white" strokeWidth="1" fill="none" />
        </svg>
        <svg className="absolute bottom-8 right-4 w-56 h-20 sm:w-64 sm:h-24 md:w-72 md:h-28 lg:w-80 lg:h-32 xl:w-88 xl:h-36 2xl:w-96 2xl:h-40" viewBox="0 0 250 100">
          <path d="M40,70 Q125,20 210,55" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Simple mobile decoration */}
      <div className="absolute inset-0 opacity-5 sm:hidden">
        <div className="absolute top-4 right-4 w-20 h-20 rounded-full border border-white"></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full border border-white"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-14 py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 2xl:py-24 relative z-10 max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
        {/* Main CTA Card */}
        <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24 border border-white border-opacity-20 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14">
            <div className="flex-1 text-center lg:text-left">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-normal leading-relaxed text-white">
                Bergabunglah dengan desa-desa lain untuk menciptakan
                <span className="hidden sm:inline"><br /></span>
                <span className="sm:hidden"> </span>
                tata kelola desa yang modern dan transparan.
              </p>
            </div>
            <div className="flex-shrink-0 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white text-green-600 font-semibold px-6 sm:px-8 md:px-10 lg:px-12 py-2.5 sm:py-3 md:py-3.5 lg:py-4 rounded-xl sm:rounded-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl text-sm sm:text-base md:text-lg lg:text-xl">
                Bergabung
              </button>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-white tracking-wide text-center sm:text-left">
            MENU LAINNYA
          </h3>
          
          {/* Desktop Menu - Horizontal */}
          <div className="hidden sm:flex flex-wrap gap-x-8 sm:gap-x-10 md:gap-x-12 lg:gap-x-14 xl:gap-x-16 2xl:gap-x-18 gap-y-3">
            <a href="#beranda" className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-medium hover:text-green-200 transition-colors duration-300">
              Beranda
            </a>
            <a href="#upaya" className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-medium hover:text-green-200 transition-colors duration-300">
              Upaya
            </a>
            <a href="#desa-digital" className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-medium hover:text-green-200 transition-colors duration-300">
              Desa Digital
            </a>
            <a href="#blog" className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-medium hover:text-green-200 transition-colors duration-300">
              Blog
            </a>
          </div>

          {/* Mobile Menu - Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:hidden">
            <a href="#beranda" className="text-white text-xs sm:text-sm font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-2 sm:py-2.5 px-3 rounded-xl">
              Beranda
            </a>
            <a href="#upaya" className="text-white text-xs sm:text-sm font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-2 sm:py-2.5 px-3 rounded-xl">
              Upaya
            </a>
            <a href="#desa-digital" className="text-white text-xs sm:text-sm font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-2 sm:py-2.5 px-3 rounded-xl">
              Desa Digital
            </a>
            <a href="#blog" className="text-white text-xs sm:text-sm font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-2 sm:py-2.5 px-3 rounded-xl">
              Blog
            </a>
          </div>
        </div>

        {/* Bottom Section - Copyright and Social Media */}
        <div className="border-t border-white border-opacity-20 pt-4 sm:pt-6 md:pt-8 lg:pt-10 xl:pt-12 2xl:pt-14">
          <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 md:flex-row md:justify-between md:items-center">
            {/* Copyright - Centered on mobile */}
            <div className="text-center md:text-left order-2 md:order-1">
              <p className="text-white opacity-70 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium">
                © 2025 INESA BY COCONUT.ORG
              </p>
            </div>
            
            {/* Social Media - Centered on mobile */}
            <div className="order-1 md:order-2">
              {/* Desktop Social - Horizontal */}
              <div className="hidden sm:flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 justify-center md:justify-end">
                <a 
                  href="#" 
                  className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium hover:text-green-200 transition-colors duration-300"
                >
                  Linkedin
                </a>
                <a 
                  href="#" 
                  className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium hover:text-green-200 transition-colors duration-300"
                >
                  Facebook
                </a>
                <a 
                  href="#" 
                  className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium hover:text-green-200 transition-colors duration-300"
                >
                  Instagram
                </a>
                <a 
                  href="#" 
                  className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium hover:text-green-200 transition-colors duration-300"
                >
                  Youtube
                </a>
              </div>

              {/* Mobile Social - Grid */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:hidden">
                <a 
                  href="#" 
                  className="text-white text-xs font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-1.5 px-2.5 rounded-lg"
                >
                  Linkedin
                </a>
                <a 
                  href="#" 
                  className="text-white text-xs font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-1.5 px-2.5 rounded-lg"
                >
                  Facebook
                </a>
                <a 
                  href="#" 
                  className="text-white text-xs font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-1.5 px-2.5 rounded-lg"
                >
                  Instagram
                </a>
                <a 
                  href="#" 
                  className="text-white text-xs font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-1.5 px-2.5 rounded-lg"
                >
                  Youtube
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}