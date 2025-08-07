export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative pt-16 sm:pt-20 md:pt-24 lg:pt-32 pb-8 sm:pb-12 md:pb-16 bg-gradient-to-br from-green-100 via-green-50 to-white min-h-screen flex items-center overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-50/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 mx-4 sm:mx-6 lg:mx-8">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
            <div className="max-w-xl mx-auto lg:mx-0">
              {/* Main Heading */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
                <span className="block">Digitalisasi Desa,</span>
                <span className="block text-green-600">Menuju Masa Depan</span>
                <span className="block">yang Transparan</span>
              </h1>
              
              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Permudah administrasi desa melalui platform digital cerdas yang aman dan terpercaya. 
                <span className="font-semibold text-green-700"> inesa.id</span> hadir untuk membawa kemajuan nyata bagi desa Anda.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-md cursor-pointer"
                >
                  <span>Bergabung Sekarang</span>
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <div className="relative max-w-md sm:max-w-lg mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/20 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/15 rounded-full opacity-50 animate-pulse delay-1000"></div>
              
              {/* Background Image */}
              <div className="relative">
                <img
                  src="/back.png"
                  alt="Background illustration"
                  className="absolute inset-0 w-full h-full object-contain z-0 opacity-80"
                  style={{ 
                    transform: 'scale(1.1) translateY(-10px)',
                    filter: 'drop-shadow(0 10px 30px rgba(255, 255, 255, 0.2))'
                  }}
                  loading="lazy"
                />
                
                {/* Main Image */}
                <img
                  src="/kanan.png"
                  alt="Digital village transformation"
                  className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto h-auto z-10 transform hover:scale-105 transition-transform duration-500"
                  style={{ 
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.1))',
                    objectFit: 'contain'
                  }}
                  loading="lazy"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-1/4 -left-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 transform rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center text-xs text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span className="font-medium">Digital</span>
                </div>
              </div>
              
              <div className="absolute bottom-1/4 -right-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-3 transform -rotate-12 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center text-xs text-gray-600">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="font-medium">Transparan</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-12 sm:h-16">
          <path d="M0,96L48,101.3C96,107,192,117,288,112C384,107,480,85,576,85.3C672,85,768,107,864,112C960,117,1056,107,1152,101.3L1200,96V120H1152C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120H0V96Z" fill="white" fillOpacity="0.8"/>
        </svg>
      </div>
    </section>
  );
}