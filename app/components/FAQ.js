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
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-green-100 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute top-32 right-16 w-32 h-32 bg-green-50 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-100 rounded-full opacity-25 animate-pulse delay-500"></div>
      <div className="absolute bottom-32 right-1/3 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-pulse delay-700"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 mx-4 sm:mx-6 lg:mx-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-2xl mb-4 shadow-lg shadow-green-500/25">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Pertanyaan Sering <span className="text-green-500">Ditanyakan</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Temukan jawaban atas pertanyaan umum tentang Inesa dan bagaimana platform ini membantu transformasi digital desa Anda.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-6xl mx-auto mx-4 sm:mx-6 lg:mx-8">
          {/* FAQ 1-4 in Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
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
                  className={`w-full flex items-center p-5 sm:p-7 text-left transition-all duration-200 ${
                    openFAQ === faq.id 
                      ? 'bg-green-50' 
                      : 'hover:bg-green-25'
                  }`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mr-4 transition-all duration-200 ${
                    openFAQ === faq.id 
                      ? 'bg-green-500 shadow-lg shadow-green-500/30' 
                      : 'bg-green-100 hover:bg-green-200'
                  }`}>
                    <svg className={`w-5 h-5 ${
                      openFAQ === faq.id ? 'text-white' : 'text-green-500'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className={`text-base sm:text-lg font-semibold ${
                      openFAQ === faq.id ? 'text-green-700' : 'text-gray-800'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    {openFAQ === faq.id ? (
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div className="px-5 sm:px-7 pb-7">
                    <div className="h-px bg-green-200 mb-4"></div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ 5 Centered */}
          <div className="mt-6 max-w-3xl mx-auto">
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
                  className={`w-full flex items-center p-5 sm:p-7 text-left transition-all duration-200 ${
                    openFAQ === faq.id 
                      ? 'bg-green-50' 
                      : 'hover:bg-green-25'
                  }`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mr-4 transition-all duration-200 ${
                    openFAQ === faq.id 
                      ? 'bg-green-500 shadow-lg shadow-green-500/30' 
                      : 'bg-green-100 hover:bg-green-200'
                  }`}>
                    <svg className={`w-5 h-5 ${
                      openFAQ === faq.id ? 'text-white' : 'text-green-500'
                    }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <span className={`text-base sm:text-lg font-semibold ${
                      openFAQ === faq.id ? 'text-green-700' : 'text-gray-800'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  <div className="flex-shrink-0">
                    {openFAQ === faq.id ? (
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div className="px-5 sm:px-7 pb-7">
                    <div className="h-px bg-green-200 mb-4"></div>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
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