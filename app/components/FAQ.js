'use client'
import { useState } from 'react'

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState('faq1') // First FAQ open by default

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id) // Toggle the clicked FAQ, closing others
  }

  const faqData = [
    {
      id: 'faq1',
      question: 'Apa itu Inesa?',
      answer: 'Inesa adalah platform digital untuk desa agar dapat mengelola administrasi dan keuangan dengan lebih baik dan transparan.'
    },
    {
      id: 'faq2',
      question: 'Apakah data saya aman?',
      answer: 'Ya, Inesa menggunakan enkripsi tingkat tinggi dan protokol keamanan modern untuk melindungi data Anda. Semua informasi disimpan dengan aman dan hanya dapat diakses oleh pihak yang berwenang.'
    },
    {
      id: 'faq3',
      question: 'Apakah Inesa gratis?',
      answer: 'Inesa menawarkan paket gratis dengan fitur dasar untuk desa. Untuk fitur lanjutan, tersedia opsi berlangganan berbayar yang dapat disesuaikan dengan kebutuhan desa Anda.'
    },
    {
      id: 'faq4',
      question: ' Bagaimana cara pakainya?',
      answer: 'Anda dapat mendaftar melalui situs web Inesa, mengatur profil desa, dan mulai menggunakan fitur seperti manajemen keuangan, pendataan warga, dan pelayanan digital. Panduan langkah demi langkah tersedia di platform.'
    },
    {
      id: 'faq5',
      question: 'Apakah perlu pelatihan untuk menggunakannya?',
      answer: 'Inesa dirancang agar mudah digunakan, namun kami menyediakan pelatihan gratis untuk perangkat desa agar dapat memanfaatkan semua fitur secara maksimal.'
    }
  ]

  return (
    <section id="faq" className="py-6 sm:py-8 md:py-10 lg:py-12 xl:py-14 2xl:py-16 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-6 left-6 w-8 sm:w-10 md:w-12 lg:w-14 xl:w-16 2xl:w-18 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-18 bg-green-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-16 right-8 w-10 sm:w-12 md:w-16 lg:w-18 xl:w-20 2xl:w-22 h-10 sm:h-12 md:h-16 lg:h-18 xl:h-20 2xl:h-22 bg-green-50 rounded-full opacity-30 animate-pulse delay-700"></div>
      <div className="absolute bottom-12 left-1/4 w-6 sm:w-8 md:w-10 lg:w-12 xl:w-14 2xl:w-16 h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 2xl:h-16 bg-green-100 rounded-full opacity-15 animate-pulse delay-300"></div>
      <div className="absolute bottom-16 right-1/3 w-5 sm:w-7 md:w-9 lg:w-10 xl:w-11 2xl:w-12 h-5 sm:h-7 md:h-9 lg:h-10 xl:h-11 2xl:h-12 bg-green-200 rounded-full opacity-10 animate-pulse delay-500"></div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 2xl:mb-14 mx-1 sm:mx-2 md:mx-4 lg:mx-6 xl:mx-8 2xl:mx-10">
          <div className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18 bg-green-500 rounded-xl mb-2 sm:mb-3 md:mb-4 lg:mb-5 shadow-lg shadow-green-500/20">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 2xl:w-9 2xl:h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 lg:mb-5">
            Pertanyaan Sering <span className="text-green-500">Ditanyakan</span>
          </h2>
          <p className="text-2xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-600 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto leading-relaxed">
            Temukan jawaban atas pertanyaan umum tentang Inesa dan bagaimana platform ini membantu transformasi digital desa Anda.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
          {/* FAQ 1-4 in Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-7 2xl:gap-8 items-start mx-auto">
            {faqData.slice(0, 4).map((faq) => (
              <div
                key={faq.id}
                className={`bg-white rounded-xl shadow-md border-2 overflow-hidden transition-all duration-300 hover:shadow-lg min-h-0 ${
                  openFAQ === faq.id 
                    ? 'border-green-500 shadow-green-500/15' 
                    : 'border-gray-100 hover:border-green-200'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className={`w-full flex items-center p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-7 text-left transition-all duration-200 ${
                    openFAQ === faq.id 
                      ? 'bg-green-50' 
                      : 'hover:bg-green-25'
                  }`}
                >
                  <div className={`flex-shrink-0 w-6 sm:w-7 md:w-8 lg:w-9 xl:w-10 2xl:w-11 h-6 sm:h-7 md:h-8 lg:h-9 xl:h-10 2xl:h-11 rounded-lg flex items-center justify-center mr-2 sm:mr-3 md:mr-4 lg:mr-5 transition-all duration-200 ${
                    openFAQ === faq.id 
                      ? 'bg-green-500 shadow-md shadow-green-500/25' 
                      : 'bg-green-100 hover:bg-green-200'
                  }`}>
                    <svg className={`w-3 sm:w-4 md:w-5 lg:w-6 xl:w-7 2xl:w-8 h-3 sm:h-4 md:h-5 lg:h-6 xl:h-7 2xl:h-8 ${
                      openFAQ === faq.id ? 'text-white' : 'text-green-500'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className={`text-2xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold ${
                      openFAQ === faq.id ? 'text-green-700' : 'text-gray-800'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    {openFAQ === faq.id ? (
                      <svg className="w-4 sm:w-5 md:w-5 lg:w-6 xl:w-7 2xl:w-8 h-4 sm:h-5 md:h-5 lg:h-6 xl:h-7 2xl:h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                      </svg>
                    ) : (
                      <svg className="w-4 sm:w-5 md:w-5 lg:w-6 xl:w-7 2xl:w-8 h-4 sm:h-5 md:h-5 lg:h-6 xl:h-7 2xl:h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === faq.id ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-7 pb-3 sm:pb-4 md:pb-5 lg:pb-6">
                    <div className="h-px bg-green-200 mb-2 sm:mb-3 md:mb-4 lg:mb-5"></div>
                    <p className="text-3xs sm:text-2xs md:text-xs lg:text-sm xl:text-base 2xl:text-lg text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ 5 Centered */}
          <div className="mt-3 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-7 2xl:mt-8 max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto">
            {faqData.slice(4).map((faq) => (
              <div
                key={faq.id}
                className={`bg-white rounded-xl shadow-md border-2 overflow-hidden transition-all duration-300 hover:shadow-lg min-h-0 ${
                  openFAQ === faq.id 
                    ? 'border-green-500 shadow-green-500/15' 
                    : 'border-gray-100 hover:border-green-200'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className={`w-full flex items-center p-2 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-7 text-left transition-all duration-200 ${
                    openFAQ === faq.id 
                      ? 'bg-green-50' 
                      : 'hover:bg-green-25'
                  }`}
                >
                  <div className={`flex-shrink-0 w-6 sm:w-7 md:w-8 lg:w-9 xl:w-10 2xl:w-11 h-6 sm:h-7 md:h-8 lg:h-9 xl:h-10 2xl:h-11 rounded-lg flex items-center justify-center mr-2 sm:mr-3 md:mr-4 lg:mr-5 transition-all duration-200 ${
                    openFAQ === faq.id 
                      ? 'bg-green-500 shadow-md shadow-green-500/25' 
                      : 'bg-green-100 hover:bg-green-200'
                  }`}>
                    <svg className={`w-3 sm:w-4 md:w-5 lg:w-6 xl:w-7 2xl:w-8 h-3 sm:h-4 md:h-5 lg:h-6 xl:h-7 2xl:h-8 ${
                      openFAQ === faq.id ? 'text-white' : 'text-green-500'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className={`text-2xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl font-semibold ${
                      openFAQ === faq.id ? 'text-green-700' : 'text-gray-800'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    {openFAQ === faq.id ? (
                      <svg className="w-4 sm:w-5 md:w-5 lg:w-6 xl:w-7 2xl:w-8 h-4 sm:h-5 md:h-5 lg:h-6 xl:h-7 2xl:h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                      </svg>
                    ) : (
                      <svg className="w-4 sm:w-5 md:w-5 lg:w-6 xl:w-7 2xl:w-8 h-4 sm:h-5 md:h-5 lg:h-6 xl:h-7 2xl:h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === faq.id ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-2 sm:px-3 md:px-4 lg:px-5 xl:px-6 2xl:px-7 pb-3 sm:pb-4 md:pb-5 lg:pb-6">
                    <div className="h-px bg-green-200 mb-2 sm:mb-3 md:mb-4 lg:mb-5"></div>
                    <p className="text-3xs sm:text-2xs md:text-xs lg:text-sm xl:text-base 2xl:text-lg text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}