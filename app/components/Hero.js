export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 2xl:pt-36 pb-8 sm:pb-10 md:pb-12 lg:pb-14 xl:pb-16 2xl:pb-20 bg-gradient-to-br from-green-100 via-green-50 to-white min-h-screen flex items-center overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-50/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-16 max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto lg:mx-0">
              {/* Main Heading */}
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-5 md:mb-6 lg:mb-8 xl:mb-10 2xl:mb-12 leading-tight">
                <span className="block">Digitalisasi Desa,</span>
                <span className="block text-green-600">Menuju Masa Depan</span>
                <span className="block">yang Transparan</span>
              </h1>
              
              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl text-gray-600 mb-6 sm:mb-7 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14 leading-relaxed max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto lg:mx-0">
                Permudah administrasi desa melalui platform digital cerdas yang aman dan terpercaya. 
                <span className="font-semibold text-green-700"> inesa.id</span> hadir untuk membawa kemajuan nyata bagi desa Anda.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-5 sm:px-6 md:px-7 lg:px-8 xl:px-9 2xl:px-10 py-2.5 sm:py-3 md:py-3.5 lg:py-4 xl:py-4.5 2xl:py-5 rounded-xl text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md cursor-pointer"
                >
                  <span>Bergabung Sekarang</span>
                  <svg className="ml-2 w-4 sm:w-5 md:w-5 lg:w-6 xl:w-7 2xl:w-8 h-4 sm:h-5 md:h-5 lg:h-6 xl:h-7 2xl:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <div className="relative max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[85%] xl:max-w-[80%] 2xl:max-w-[75%] mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-4 sm:-top-5 md:-top-6 lg:-top-8 xl:-top-10 2xl:-top-12 -right-4 sm:-right-5 md:-right-6 lg:-right-8 xl:-right-10 2xl:-right-12 w-20 sm:w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40 h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 2xl:h-40 bg-white/20 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-5 sm:-bottom-6 md:-bottom-8 lg:-bottom-10 xl:-bottom-12 2xl:-bottom-14 -left-5 sm:-left-6 md:-left-8 lg:-left-10 xl:-left-12 2xl:-left-14 w-24 sm:w-28 md:w-32 lg:w-36 xl:w-40 2xl:w-44 h-24 sm:h-28 md:h-32 lg:h-36 xl:h-40 2xl:h-44 bg-white/15 rounded-full opacity-50 animate-pulse delay-1000"></div>
              
              {/* Background Image */}
              <div className="relative">
                <img
                  src="/back.png"
                  alt="Background illustration"
                  className="absolute inset-0 w-full h-full object-contain z-0 opacity-80"
                  style={{ 
                    transform: 'scale(1.05) translateY(-5px)',
                    filter: 'drop-shadow(0 10px 30px rgba(255, 255, 255, 0.2))'
                  }}
                  loading="lazy"
                />
                
                {/* Main Image */}
                <img
                  src="/kanan.png"
                  alt="Digital village transformation"
                  className="relative w-full max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[85%] xl:max-w-[80%] 2xl:max-w-[75%] mx-auto h-auto z-10 transform hover:scale-105 transition-transform duration-500"
                  style={{ 
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1))',
                    objectFit: 'contain'
                  }}
                  loading="lazy"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-1/4 -left-3 sm:-left-4 md:-left-5 lg:-left-6 xl:-left-7 2xl:-left-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 2xl:p-4.5 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  <div className="w-2 sm:w-2.5 md:w-3 lg:w-3.5 xl:w-4 2xl:w-4.5 h-2 sm:h-2.5 md:h-3 lg:h-3.5 xl:h-4 2xl:h-4.5 bg-green-500 rounded-full mr-2 sm:mr-2.5 md:mr-3"></div>
                  <span className="font-medium">Digital</span>
                </div>
              </div>
              
              <div className="absolute bottom-1/4 -right-3 sm:-right-4 md:-right-5 lg:-right-6 xl:-right-7 2xl:-right-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-2 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 2xl:p-4.5 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
                  <div className="w-2 sm:w-2.5 md:w-3 lg:w-3.5 xl:w-4 2xl:w-4.5 h-2 sm:h-2.5 md:h-3 lg:h-3.5 xl:h-4 2xl:h-4.5 bg-blue-500 rounded-full mr-2 sm:mr-2.5 md:mr-3"></div>
                  <span className="font-medium">Transparan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-10 sm:h-12 md:h-14 lg:h-16 xl:h-18 2xl:h-20">
          <path d="M0,96L48,101.3C96,107,192,117,288,112C384,107,480,85,576,85.3C672,85,768,107,864,112C960,117,1056,107,1152,101.3L1200,96V120H1152C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0V96Z" fill="white" fillOpacity="0.8"/>
        </svg>
      </div>
    </section>
  );
}