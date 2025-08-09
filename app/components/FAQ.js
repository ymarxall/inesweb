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
      question: 'Apa itu INESA dan bagaimana berbeda dengan digitalisasi biasa?',
      answer: 'INESA (Inovasi dan Edukasi Desa) adalah program komprehensif yang mengidentifikasi masalah nyata di desa terlebih dahulu, baru kemudian merancang solusi teknologi yang tepat guna. Berbeda dengan digitalisasi umum, INESA tidak memaksakan teknologi tertentu, melainkan mendengarkan kebutuhan masyarakat dan mengintegrasikan kearifan lokal dalam setiap solusinya.'
    },
    {
      id: 'faq2',
      question: 'Masalah apa saja yang bisa ditangani INESA?',
      answer: 'INESA menangani berbagai masalah desa seperti: ineffisiensi pertanian dan peternakan, pengelolaan sampah dan lingkungan, kesulitan akses pasar UMKM, administrasi desa yang lambat, overfishing di daerah pesisir, keterbatasan energi, dan kurangnya transparansi pelayanan publik. Setiap masalah ditangani dengan pendekatan teknologi yang disesuaikan dengan kondisi lokal.'
    },
    {
      id: 'faq3',
      question: 'Bagaimana INESA memastikan masyarakat bisa menggunakan teknologi secara mandiri?',
      answer: 'INESA menerapkan pendekatan "learning by doing" dengan pelatihan intensif, pendampingan langsung, dan transfer knowledge kepada masyarakat. Program ini membentuk kelompok inovasi lokal yang dapat memelihara dan mengembangkan teknologi tanpa ketergantungan pada pihak eksternal, sehingga desa menjadi mandiri.'
    },
    {
      id: 'faq4',
      question: 'Apakah teknologi INESA mahal dan rumit untuk desa?',
      answer: 'Tidak. INESA menggunakan prinsip "teknologi tepat guna" yang mudah dipelajari, dioperasikan, dan dipelihara oleh masyarakat. Solusi dirancang menggunakan sumber daya lokal yang tersedia dan berkelanjutan secara ekonomi. Teknologi dipilih berdasarkan kemampuan dan kebutuhan masyarakat, bukan sekadar mengikuti tren.'
    },
    {
      id: 'faq5',
      question: 'Bagaimana INESA menjaga kelestarian budaya lokal dalam penerapan teknologi?',
      answer: 'INESA menerapkan pendekatan partisipatif yang menghormati nilai-nilai budaya dan kearifan lokal. Teknologi dirancang sebagai "bahasa pemersatu" yang memperkuat identitas lokal, bukan menggantinya. Setiap solusi dikembangkan melalui dialog dengan masyarakat untuk memastikan kesesuaian dengan konteks budaya setempat.'
    },
    {
      id: 'faq6',
      question: 'Siapa saja yang terlibat dalam program INESA?',
      answer: 'INESA melibatkan berbagai pihak: tim COCONUT Computer Club sebagai inisiator, pemerintah desa, kelompok tani, peternak, nelayan, UMKM, pemuda, dan seluruh masyarakat desa. Kolaborasi multi-stakeholder ini memastikan solusi yang holistik dan berkelanjutan untuk transformasi desa.'
    },
    {
      id: 'faq7',
      question: 'Berapa lama waktu yang dibutuhkan untuk melihat hasil nyata?',
      answer: 'Target INESA adalah mencapai penurunan 30% waktu pengolahan lahan dan 50% keluhan layanan publik dalam 3 bulan. Namun, dampak jangka panjang seperti peningkatan kesejahteraan dan kemandirian masyarakat akan terlihat secara bertahap seiring dengan internalisasi teknologi dan pembentukan kelompok inovasi lokal.'
    },
    {
      id: 'faq8',
      question: 'Bagaimana cara desa saya bergabung dengan program INESA?',
      answer: 'Desa dapat memulai dengan menghubungi tim COCONUT Computer Club untuk konsultasi awal. Proses dimulai dengan riset pendahuluan untuk memahami masalah spesifik desa, dilanjutkan dengan Focus Group Discussion (FGD), penyusunan konsep solusi, dan penandatanganan MoU sebelum implementasi dimulai.'
    }
  ]

  return (
    <section id="faq" className="py-12 lg:py-16 bg-gradient-to-br from-white via-green-50/20 to-white relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-8 left-8 w-16 h-16 bg-green-100/40 rounded-full animate-pulse"></div>
      <div className="absolute top-24 right-12 w-24 h-24 bg-emerald-50/50 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-16 left-1/4 w-20 h-20 bg-green-100/30 rounded-full animate-pulse delay-300"></div>

      <div className="container mx-auto px-4 lg:px-12 relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-4 shadow-lg shadow-green-500/20">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            FAQ <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">INESA</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Pertanyaan umum tentang program transformasi desa berbasis teknologi tepat guna
          </p>
        </div>

        {/* Improved FAQ Layout - All in single column for better readability */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={faq.id}
              className={`group bg-white rounded-xl shadow-md border overflow-hidden transition-all duration-300 hover:shadow-lg ${
                openFAQ === faq.id 
                  ? 'border-green-400 shadow-green-500/10 ring-1 ring-green-200' 
                  : 'border-gray-200 hover:border-green-300'
              }`}
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className={`w-full flex items-center p-5 text-left transition-all duration-300 ${
                  openFAQ === faq.id 
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50' 
                    : 'hover:bg-gray-50'
                }`}
              >
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center mr-4 transition-all duration-300 ${
                  openFAQ === faq.id 
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 shadow-md' 
                    : 'bg-green-100 group-hover:bg-green-200'
                }`}>
                  <span className={`text-sm font-bold transition-colors duration-300 ${
                    openFAQ === faq.id ? 'text-white' : 'text-green-600'
                  }`}>
                    {index + 1}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <span className={`text-base lg:text-lg font-semibold transition-colors duration-300 block ${
                    openFAQ === faq.id ? 'text-green-700' : 'text-gray-800 group-hover:text-green-600'
                  }`}>
                    {faq.question}
                  </span>
                </div>
                <div className="flex-shrink-0 ml-4">
                  <svg className={`w-5 h-5 transition-all duration-300 ${
                    openFAQ === faq.id 
                      ? 'text-green-500 rotate-180' 
                      : 'text-gray-400 group-hover:text-green-500'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openFAQ === faq.id ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-5 pb-5">
                  <div className="pl-14">
                    <div className="h-px bg-gradient-to-r from-green-200 via-emerald-200 to-transparent mb-4"></div>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Bottom CTA */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-green-600 font-medium mb-3">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm">COCONUT Computer Club × INESA</span>
          </div>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Bergabunglah dengan transformasi desa yang mengutamakan masyarakat
          </p>
        </div>
      </div>
    </section>
  )
}