export default function Footer() {
  return (
    <footer className="bg-green-600 text-white relative overflow-hidden min-h-[400px]">
      {/* Decorative curved lines */}
      <div className="absolute inset-0 opacity-10">
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

      <div className="container mx-auto px-6 py-12 relative z-10 max-w-6xl">
        {/* Main CTA Card */}
        <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-3xl p-10 mb-16 border border-white border-opacity-20 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center lg:text-left">
              <p className="text-xl lg:text-2xl font-normal leading-relaxed text-white">
                Bergabunglah dengan desa-desa lain untuk menciptakan<br className="hidden lg:block" />
                tata kelola desa yang modern dan transparan.
              </p>
            </div>
            <div className="flex-shrink-0">
              <button className="bg-white text-green-600 font-semibold px-10 py-4 rounded-2xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg">
                Bergabung
              </button>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-white tracking-wide">MENU LAINNYA</h3>
          <div className="flex flex-wrap gap-x-16 gap-y-4">
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
        </div>

        {/* Bottom Section - Copyright and Social Media */}
        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            {/* Left - Copyright */}
            <div>
              <p className="text-white opacity-70 text-base font-medium">
                © 2025 INESA BY COCONUT.ORG
              </p>
            </div>
            
            {/* Right - Social Media */}
            <div className="flex gap-8">
              <a 
                href="#" 
                className="text-white text-lg font-medium hover:text-green-200 transition-colors duration-300"
              >
                Linkedin
              </a>
              <a 
                href="#" 
                className="text-white text-lg font-medium hover:text-green-200 transition-colors duration-300"
              >
                Facebook
              </a>
              <a 
                href="#" 
                className="text-white text-lg font-medium hover:text-green-200 transition-colors duration-300"
              >
                Instagram
              </a>
              <a 
                href="#" 
                className="text-white text-lg font-medium hover:text-green-200 transition-colors duration-300"
              >
                Youtube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}