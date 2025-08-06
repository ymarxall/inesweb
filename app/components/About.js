export default function About() {
  return (
    <section id="about" 
    className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Keunggulan <span className="text-green-600">inesa.id</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Inesa membantu desa mengelola data secara digital dan transparan, agar pelayanan publik lebih efisien dan akuntabel.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 overflow-x-hidden">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Background decorative elements */}
              <div className="absolute -top-8 -right-8 w-24 sm:w-32 h-24 sm:h-32 bg-green-100 rounded-full opacity-30 animate-pulse hidden sm:block"></div>
              <div className="absolute -bottom-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 bg-blue-100 rounded-full opacity-40 hidden sm:block"></div>
              
              <img
                src="/putus.png"
                alt="Decorative dashed line"
                className="absolute inset-0 w-full h-full object-contain opacity-20 z-0"
                loading="lazy"
              />
              
              <div className="relative z-10">
                <img
                  src="/rocket.png"
                  alt="Digital transformation illustration"
                  className="w-full max-w-xs sm:max-w-sm mx-auto h-auto drop-shadow-2xl"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg transform rotate-12 transition-transform duration-300 hidden sm:block">
                <div className="flex items-center text-xs font-semibold text-green-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                  Digital First
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="space-y-6">
              <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-green-200 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                    <img 
                      src="/pesawat.png" 
                      alt="Digital mail system" 
                      className="w-6 h-6 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                      Sistem Persuratan Digital Terpadu
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Kelola surat-menyurat desa dengan cepat, akurat, dan efisien melalui platform digital yang terintegrasi.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-green-200 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <img 
                      src="/gedung.png" 
                      alt="Professional templates" 
                      className="w-7 h-7 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      Template Dokumen Profesional
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Beragam template surat yang sesuai kebutuhan, mempermudah tugas administrasi sehari-hari dengan standar profesional.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-xl p-6 shadow-sm hover:shadow-lg border border-gray-100 hover:border-green-200 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                    <img 
                      src="/koper.png" 
                      alt="Cloud storage security" 
                      className="w-7 h-7 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                      Cloud Storage yang Aman
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Dokumen desa tersimpan aman dalam sistem cloud terenkripsi, akses kapan saja dan dari mana saja dengan keamanan terjamin.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center text-lg font-semibold text-green-600 hover:text-green-700 group transition-colors duration-300"
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