export default function Footer() {
  return (
    <footer className="bg-green-600 text-white relative overflow-hidden min-h-[350px] sm:min-h-[400px]">
      {/* Decorative curved lines - Hidden on small screens for better performance */}
      <div className="absolute inset-0 opacity-10 hidden sm:block">
        {/* Top curved lines */}
        <svg className="absolute top-8 right-20 w-48 h-24" viewBox="0 0 200 100">
          <path d="M20,80 Q100,20 180,60" stroke="white" strokeWidth="1" fill="none" />
        </svg>
        <svg className="absolute top-16 right-32 w-32 h-16" viewBox="0 0 150 80">
          <path d="M10,60 Q75,10 140,40" stroke="white" strokeWidth="1" fill="none" />
        </svg>
        
        {/* Bottom curved lines */}
        <svg className="absolute bottom-20 right-12 w-56 h-32" viewBox="0 0 220 120">
          <path d="M30,90 Q110,30 190,70" stroke="white" strokeWidth="1" fill="none" />
        </svg>
        <svg className="absolute bottom-32 right-24 w-40 h-20" viewBox="0 0 160 80">
          <path d="M15,60 Q80,20 145,50" stroke="white" strokeWidth="1" fill="none" />
        </svg>
        <svg className="absolute bottom-8 right-4 w-64 h-24" viewBox="0 0 250 100">
          <path d="M40,70 Q125,20 210,55" stroke="white" strokeWidth="1" fill="none" />
        </svg>
      </div>

      {/* Simple mobile decoration */}
      <div className="absolute inset-0 opacity-5 sm:hidden">
        <div className="absolute top-4 right-4 w-32 h-32 rounded-full border border-white"></div>
        <div className="absolute bottom-4 left-4 w-20 h-20 rounded-full border border-white"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 relative z-10 max-w-6xl">
        {/* Main CTA Card */}
        <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-10 mb-12 sm:mb-16 border border-white border-opacity-20 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
            <div className="flex-1 text-center lg:text-left">
              <p className="text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed text-white">
                Bergabunglah dengan desa-desa lain untuk menciptakan
                <span className="hidden sm:inline"><br /></span>
                <span className="sm:hidden"> </span>
                tata kelola desa yang modern dan transparan.
              </p>
            </div>
            <div className="flex-shrink-0 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white text-green-600 font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl text-base sm:text-lg">
                Bergabung
              </button>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="mb-12 sm:mb-16">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-white tracking-wide text-center sm:text-left">
            MENU LAINNYA
          </h3>
          
          {/* Desktop Menu - Horizontal */}
          <div className="hidden sm:flex flex-wrap gap-x-16 gap-y-4">
            <a href="#beranda" className="text-white text-lg font-medium hover:text-green-200 transition-colors duration-300">
              Beranda
            </a>
            <a href="#upaya" className="text-white text-lg font-medium hover:text-green-200 transition-colors duration-300">
              Upaya
            </a>
            <a href="#desa-digital" className="text-white text-lg font-medium hover:text-green-200 transition-colors duration-300">
              Desa Digital
            </a>
            <a href="#publikasi" className="text-white text-lg font-medium hover:text-green-200 transition-colors duration-300">
              Publikasi
            </a>
          </div>

          {/* Mobile Menu - Grid */}
          <div className="grid grid-cols-2 gap-4 sm:hidden">
            <a href="#beranda" className="text-white text-base font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-3 px-4 rounded-xl">
              Beranda
            </a>
            <a href="#upaya" className="text-white text-base font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-3 px-4 rounded-xl">
              Upaya
            </a>
            <a href="#desa-digital" className="text-white text-base font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-3 px-4 rounded-xl">
              Desa Digital
            </a>
            <a href="#publikasi" className="text-white text-base font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-3 px-4 rounded-xl">
              Publikasi
            </a>
          </div>
        </div>

        {/* Bottom Section - Copyright and Social Media */}
        <div className="border-t border-white border-opacity-20 pt-6 sm:pt-8">
          <div className="flex flex-col gap-6 sm:gap-4 md:flex-row md:justify-between md:items-center">
            {/* Copyright - Centered on mobile */}
            <div className="text-center md:text-left order-2 md:order-1">
              <p className="text-white opacity-70 text-sm sm:text-base font-medium">
                © 2025 INESA BY COCONUT.ORG
              </p>
            </div>
            
            {/* Social Media - Centered on mobile */}
            <div className="order-1 md:order-2">
              {/* Desktop Social - Horizontal */}
              <div className="hidden sm:flex gap-6 md:gap-8 justify-center md:justify-end">
                <a 
                  href="#" 
                  className="text-white text-base md:text-lg font-medium hover:text-green-200 transition-colors duration-300"
                >
                  Linkedin
                </a>
                <a 
                  href="#" 
                  className="text-white text-base md:text-lg font-medium hover:text-green-200 transition-colors duration-300"
                >
                  Facebook
                </a>
                <a 
                  href="#" 
                  className="text-white text-base md:text-lg font-medium hover:text-green-200 transition-colors duration-300"
                >
                  Instagram
                </a>
                <a 
                  href="#" 
                  className="text-white text-base md:text-lg font-medium hover:text-green-200 transition-colors duration-300"
                >
                  Youtube
                </a>
              </div>

              {/* Mobile Social - Grid */}
              <div className="grid grid-cols-2 gap-3 sm:hidden">
                <a 
                  href="#" 
                  className="text-white text-sm font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-2 px-3 rounded-lg"
                >
                  Linkedin
                </a>
                <a 
                  href="#" 
                  className="text-white text-sm font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-2 px-3 rounded-lg"
                >
                  Facebook
                </a>
                <a 
                  href="#" 
                  className="text-white text-sm font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-2 px-3 rounded-lg"
                >
                  Instagram
                </a>
                <a 
                  href="#" 
                  className="text-white text-sm font-medium hover:text-green-200 transition-colors duration-300 text-center bg-white bg-opacity-10 py-2 px-3 rounded-lg"
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