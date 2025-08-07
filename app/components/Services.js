'use client';
export default function Services() {
  return (
    <section id="about" className="py-8 sm:py-12 lg:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - mobile first approach */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          {/* Title */}
          <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 px-2">
            Solusi yang <span className="text-green-600">Diberikan</span>
          </h2>
          
          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 px-4 sm:px-0 max-w-2xl mx-auto mb-6 sm:mb-8 lg:mb-0">
            Platform digital lengkap untuk transformasi administrasi desa modern
          </p>
          
          {/* CTA Button - mobile centered */}
          <div className="lg:absolute lg:top-0 lg:right-0 flex justify-center lg:justify-end">
          </div>
        </div>

        {/* Services Grid - optimized spacing for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          
          {/* Service Card 1 */}
          <div className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-green-200 transition-all duration-300 sm:duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2">
            <div className="flex flex-col items-center text-center">
              {/* Icon Container - mobile optimized sizes */}
              <div className="relative mb-4 sm:mb-6 transform group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 sm:duration-500">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full opacity-15 group-hover:opacity-25 sm:group-hover:opacity-30 blur-md sm:blur-lg transition-opacity duration-300 sm:duration-500"></div>
                <img 
                  src="/a1.png" 
                  alt="Online document service illustration" 
                  className="relative w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain drop-shadow-lg"
                />
                {/* Floating badge - hidden on small mobile */}
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden xs:block">
                  Popular
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-2 sm:space-y-4">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300 leading-tight">
                  Layanan Surat Menyurat Online
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed px-2 sm:px-0">
                  Mempermudah proses pengajuan surat menyurat tanpa harus datang ke kantor desa. Sistem terintegrasi dan user-friendly.
                </p>
                
                {/* Features */}
                <div className="pt-2 sm:pt-4 space-y-1 sm:space-y-2">
                  <div className="flex items-center justify-center text-xs text-gray-500">
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-300 sm:duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2">
            <div className="flex flex-col items-center text-center">
              {/* Icon Container */}
              <div className="relative mb-4 sm:mb-6 transform group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 sm:duration-500">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-15 group-hover:opacity-25 sm:group-hover:opacity-30 blur-md sm:blur-lg transition-opacity duration-300 sm:duration-500"></div>
                <img 
                  src="/a2.png" 
                  alt="Population information system illustration" 
                  className="relative w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain drop-shadow-lg"
                />
                {/* Floating badge */}
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-blue-500 text-white text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden xs:block">
                  Secure
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-2 sm:space-y-4">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                  Sistem Informasi Kependudukan
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed px-2 sm:px-0">
                  Simpan data kependudukan dengan mudah dan akurat, memberikan laporan cepat dan mudah diakses kapan saja.
                </p>
                
                {/* Features */}
                <div className="pt-2 sm:pt-4 space-y-1 sm:space-y-2">
                  <div className="flex items-center justify-center text-xs text-gray-500">
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-xl border border-gray-100 hover:border-purple-200 transition-all duration-300 sm:duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 md:col-span-2 xl:col-span-1">
            <div className="flex flex-col items-center text-center">
              {/* Icon Container */}
              <div className="relative mb-4 sm:mb-6 transform group-hover:scale-105 sm:group-hover:scale-110 transition-transform duration-300 sm:duration-500">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-15 group-hover:opacity-25 sm:group-hover:opacity-30 blur-md sm:blur-lg transition-opacity duration-300 sm:duration-500"></div>
                <img 
                  src="/a3.png" 
                  alt="Village financial dashboard illustration" 
                  className="relative w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 object-contain drop-shadow-lg"
                />
                {/* Floating badge */}
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-purple-500 text-white text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden xs:block">
                  Advanced
                </div>
              </div>
              
              {/* Content */}
              <div className="space-y-2 sm:space-y-4">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300 leading-tight">
                  Dashboard Keuangan Desa
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed px-2 sm:px-0">
                  Kelola APBDes, realisasi anggaran, dan laporan keuangan hanya dalam beberapa klik dengan visualisasi yang jelas.
                </p>
                
                {/* Features */}
                <div className="pt-2 sm:pt-4 space-y-1 sm:space-y-2">
                  <div className="flex items-center justify-center text-xs text-gray-500">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}