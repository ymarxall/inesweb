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
      question: 'Apakah perlu pelatihan untuk menggunakannya?',
      answer: 'Inesa dirancang agar mudah digunakan, namun kami menyediakan pelatihan gratis untuk perangkat desa agar dapat memanfaatkan semua fitur secara maksimal.'
    },
    {
      id: 'faq5',
      question: 'Bagaimana cara pakainya?',
      answer: 'Anda dapat mendaftar melalui situs web Inesa, mengatur profil desa, dan mulai menggunakan fitur seperti manajemen keuangan, pendataan warga, dan pelayanan digital. Panduan langkah demi langkah tersedia di platform.'
    }
  ]

  return (
    <section id="faq" className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 2xl:py-28 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-8 left-8 w-12 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 h-12 sm:h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32 bg-green-100 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-24 right-12 w-16 sm:w-20 md:w-28 lg:w-32 xl:w-36 2xl:w-40 h-16 sm:h-20 md:h-28 lg:h-32 xl:h-36 2xl:h-40 bg-green-50 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-16 left-1/4 w-14 sm:w-18 md:w-22 lg:w-26 xl:w-30 2xl:w-34 h-14 sm:h-18 md:h-22 lg:h-26 xl:h-30 2xl:h-34 bg-green-100 rounded-full opacity-25 animate-pulse delay-500"></div>
      <div className="absolute bottom-24 right-1/3 w-10 sm:w-14 md:w-18 lg:w-20 xl:w-22 2xl:w-24 h-10 sm:h-14 md:h-18 lg:h-20 xl:h-22 2xl:h-24 bg-green-200 rounded-full opacity-20 animate-pulse delay-700"></div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20 2xl:mb-24 mx-2 sm:mx-4 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-12">
          <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28 bg-green-500 rounded-2xl mb-3 sm:mb-4 md:mb-5 lg:mb-6 shadow-lg shadow-green-500/25">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            Pertanyaan Sering <span className="text-green-500">Ditanyakan</span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-gray-600 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto leading-relaxed">
            Temukan jawaban atas pertanyaan umum tentang Inesa dan bagaimana platform ini membantu transformasi digital desa Anda.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
          {/* FAQ 1-4 in Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14 items-start mx-auto">
            {faqData.slice(0, 4).map((faq) => (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl shadow-lg border-2 overflow-hidden transition-all duration-300 hover:shadow-xl min-h-0 ${
                  openFAQ === faq.id 
                    ? 'border-green-500 shadow-green-500/20' 
                    : 'border-gray-100 hover:border-green-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className={`w-full flex items-center p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8 text-left transition-all duration-200 ${
                    openFAQ === faq.id 
                      ? 'bg-green-50' 
                      : 'hover:bg-green-25'
                  }`}
                >
                  <div className={`flex-shrink-0 w-8 sm:w-9 md:w-10 lg:w-11 xl:w-12 2xl:w-14 h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 2xl:h-14 rounded-xl flex items-center justify-center mr-3 sm:mr-4 md:mr-5 lg:mr-6 transition-all duration-200 ${
                    openFAQ === faq.id 
                      ? 'bg-green-500 shadow-lg shadow-green-500/30' 
                      : 'bg-green-100 hover:bg-green-200'
                  }`}>
                    <svg className={`w-4 sm:w-5 md:w-6 lg:w-7 xl:w-8 2xl:w-9 h-4 sm:h-5 md:h-6 lg:h-7 xl:h-8 2xl:h-9 ${
                      openFAQ === faq.id ? 'text-white' : 'text-green-500'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold ${
                      openFAQ === faq.id ? 'text-green-700' : 'text-gray-800'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    {openFAQ === faq.id ? (
                      <svg className="w-5 sm:w-6 md:w-6 lg:w-7 xl:w-8 2xl:w-9 h-5 sm:h-6 md:h-6 lg:h-7 xl:h-8 2xl:h-9 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                      </svg>
                    ) : (
                      <svg className="w-5 sm:w-6 md:w-6 lg:w-7 xl:w-8 2xl:w-9 h-5 sm:h-6 md:h-6 lg:h-7 xl:h-8 2xl:h-9 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 pb-5 sm:pb-6 md:pb-7 lg:pb-8">
                    <div className="h-px bg-green-200 mb-3 sm:mb-4 md:mb-5 lg:mb-6"></div>
                    <p className="text-2xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ 5 Centered */}
          <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12 2xl:mt-14 max-w-full sm:max-w-2xl md:max-w-3xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl mx-auto">
            {faqData.slice(4).map((faq) => (
              <div
                key={faq.id}
                className={`bg-white rounded-2xl shadow-lg border-2 overflow-hidden transition-all duration-300 hover:shadow-xl min-h-0 ${
                  openFAQ === faq.id 
                    ? 'border-green-500 shadow-green-500/20' 
                    : 'border-gray-100 hover:border-green-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className={`w-full flex items-center p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8 text-left transition-all duration-200 ${
                    openFAQ === faq.id 
                      ? 'bg-green-50' 
                      : 'hover:bg-green-25'
                  }`}
                >
                  <div className={`flex-shrink-0 w-8 sm:w-9 md:w-10 lg:w-11 xl:w-12 2xl:w-14 h-8 sm:h-9 md:h-10 lg:h-11 xl:h-12 2xl:h-14 rounded-xl flex items-center justify-center mr-3 sm:mr-4 md:mr-5 lg:mr-6 transition-all duration-200 ${
                    openFAQ === faq.id 
                      ? 'bg-green-500 shadow-lg shadow-green-500/30' 
                      : 'bg-green-100 hover:bg-green-200'
                  }`}>
                    <svg className={`w-4 sm:w-5 md:w-6 lg:w-7 xl:w-8 2xl:w-9 h-4 sm:h-5 md:h-6 lg:h-7 xl:h-8 2xl:h-9 ${
                      openFAQ === faq.id ? 'text-white' : 'text-green-500'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className={`text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-semibold ${
                      openFAQ === faq.id ? 'text-green-700' : 'text-gray-800'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    {openFAQ === faq.id ? (
                      <svg className="w-5 sm:w-6 md:w-6 lg:w-7 xl:w-8 2xl:w-9 h-5 sm:h-6 md:h-6 lg:h-7 xl:h-8 2xl:h-9 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                      </svg>
                    ) : (
                      <svg className="w-5 sm:w-6 md:w-6 lg:w-7 xl:w-8 2xl:w-9 h-5 sm:h-6 md:h-6 lg:h-7 xl:h-8 2xl:h-9 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                      </svg>
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openFAQ === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-3 sm:px-4 md:px-5 lg:px-6 xl:px-7 2xl:px-8 pb-5 sm:pb-6 md:pb-7 lg:pb-8">
                    <div className="h-px bg-green-200 mb-3 sm:mb-4 md:mb-5 lg:mb-6"></div>
                    <p className="text-2xs sm:text-xs md:text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-600 leading-relaxed">
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