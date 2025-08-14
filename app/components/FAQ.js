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
      question: 'Apa itu INESA ?',
      answer: 'INESA (Inovasi dan Edukasi Desa), sebuah inisiatif unggulan dari COCONUT Computer Club yang dirancang untuk membawa perubahan nyata di pedesaan. Berlandaskan pada teori pemberdayaan masyarakat dan sustainable development, INESA menggabungkan teknologi modern seperti Internet of Things (IoT), Artificial Intelligence (AI), dan penguatan infrastruktur digital untuk meningkatkan kemandirian dan kesejahteraan masyarakat desa.'
    },
    {
      id: 'faq2',
      question: 'Masalah apa saja yang bisa ditangani INESA?',
      answer: 'INESA menangani berbagai masalah desa seperti: efisiensi pertanian dan peternakan, pengelolaan sampah dan lingkungan, kesulitan akses pasar UMKM, administrasi desa yang lambat, overfishing di daerah pesisir, keterbatasan energi, dan kurangnya transparansi pelayanan publik. Setiap masalah ditangani dengan pendekatan teknologi yang disesuaikan dengan kondisi lokal.'
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



// Improved Timeline Component with better visual hierarchy
const ImprovedTimeline = () => {
  const timelineData = [
    {
      number: 1,
      title: "Fase Persiapan",
      description: "Survey kebutuhan desa dan pelatihan awal untuk perangkat desa tentang sistem informasi.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      color: "from-emerald-500 to-teal-600",
      lightColor: "from-emerald-50 to-teal-50",
      textColor: "text-emerald-700",
    },
    {
      number: 2,
      title: "Instalasi Sistem",
      description: "Pemasangan aplikasi persuratan, keuangan, dan website profil desa sesuai kebutuhan.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
        </svg>
      ),
      color: "from-blue-500 to-indigo-600",
      lightColor: "from-blue-50 to-indigo-50",
      textColor: "text-blue-700",
    },
    {
      number: 3,
      title: "Sosialisasi dan Uji Coba",
      description: "Pengenalan sistem kepada warga dan perangkat desa, serta pengujian fitur untuk memastikan fungsionalitas.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
        </svg>
      ),
      color: "from-purple-500 to-violet-600",
      lightColor: "from-purple-50 to-violet-50",
      textColor: "text-purple-700",
    },
    {
      number: 4,
      title: "Peluncuran Resmi",
      description: "Sistem informasi desa diluncurkan dengan dukungan teknis berkelanjutan.",
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ),
      color: "from-rose-500 to-pink-600",
      lightColor: "from-rose-50 to-pink-50",
      textColor: "text-rose-700",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Timeline Implementasi
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Proses transformasi digital desa yang terstruktur dan berkelanjutan
        </p>
      </div>
      
      {/* Desktop Timeline */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-blue-200 via-purple-200 to-rose-200 rounded-full"></div>
          
          <div className="grid grid-cols-4 gap-8">
            {timelineData.map((item, index) => (
              <div key={index} className="relative group">
                {/* Circle with Icon */}
                <div className={`relative w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl hover:scale-110 transition-all duration-300 z-10 group-hover:shadow-2xl`}>
                  {item.icon}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-gray-700 font-bold text-sm">{item.number}</span>
                  </div>
                  {/* Pulse Animation */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-full animate-ping opacity-20`}></div>
                </div>
                
                {/* Arrow */}
                {index < timelineData.length - 1 && (
                  <div className="absolute top-10 -right-4 z-20">
                    <svg className="w-8 h-8 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                    </svg>
                  </div>
                )}
                
                {/* Content Card */}
                <div className={`bg-gradient-to-br ${item.lightColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/50 backdrop-blur-sm`}>
                  <h4 className={`font-bold ${item.textColor} mb-3 text-lg text-center`}>
                    {item.title}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed text-center">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-10 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-200 via-blue-200 via-purple-200 to-rose-200 rounded-full"></div>
          
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div key={index} className="relative flex items-start">
                {/* Circle with Icon */}
                <div className={`relative w-20 h-20 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center mr-6 shadow-xl z-10 flex-shrink-0`}>
                  {item.icon}
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md">
                    <span className="text-gray-700 font-bold text-xs">{item.number}</span>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-full animate-ping opacity-20`}></div>
                </div>
                
                {/* Content Card */}
                <div className={`bg-gradient-to-br ${item.lightColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-1 border border-white/50 backdrop-blur-sm`}>
                  <h4 className={`font-bold ${item.textColor} mb-3 text-lg`}>
                    {item.title}
                  </h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

ImprovedTimeline.propTypes = {
  // No props are passed to this component
};