'use client';
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NewsArticle = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null);
  const [isShareOpen, setIsShareOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = (url) => {
    window.open(url, '_blank', 'width=600,height=400');
    setIsShareOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <a href="#" className="hover:text-blue-600">Beranda</a>
          <span>›</span>
          <a href="#" className="hover:text-blue-600">Teknologi</a>
          <span>›</span>
          <span className="text-gray-900">Inovasi Digital Desa</span>
        </nav>

        {/* Article */}
        <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Hero Section */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 relative overflow-hidden">
              <img
                src="/berita1.png"
                alt="Desa Krandegan Digital Innovation"
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-12 left-12 w-16 h-16 bg-blue-300/20 rounded-full blur-lg animate-pulse delay-1000"></div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    BREAKING NEWS
                  </span>
                  <time className="bg-white/20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    Senin, 17 Juni 2025
                  </time>
                  <div className="flex items-center gap-1 text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <span>8 min read</span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Desa Krandegan Pionir Smart Village dengan Chatbot AI
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed max-w-3xl">
                  Desa Krandegan memimpin transformasi digital dengan chatbot AI, menyederhanakan layanan publik untuk warga.
                </p>
              </div>
            </div>
          </div>

          {/* Article Meta */}
          <div className="px-8 py-6 bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-100">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Y</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Yusuf</p>
                  <p className="text-sm text-gray-600">Technology Enthusiast</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">Makassar, Sulawesi Selatan</span>
                </div>
                <div className="relative">
                  <button
                    onClick={() => setIsShareOpen(!isShareOpen)}
                    className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition-all duration-300 shadow-md"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                    <span>Sosmed</span>
                  </button>
                  {isShareOpen && (
                    <div className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-20 min-w-48">
                      <p className="text-sm font-medium text-gray-700 mb-3">Bagikan artikel ini:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          {
                            name: 'LinkedIn',
                            href: 'https://www.linkedin.com/company/coconut-computer-club/?originalSubdomain=id',
                            icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" stroke="currentColor" strokeWidth="0.5"/>
                            </svg>
                          },
                          {
                            name: 'Instagram',
                            href: 'https://www.instagram.com/coconutdotorg/',
                            icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm0 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3m-4 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m4.5-3.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2" stroke="currentColor" strokeWidth="0.5"/>
                            </svg>
                          },
                          {
                            name: 'Facebook',
                            href: 'https://www.facebook.com/coconutcomputer',
                            icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.437 9.878v-6.987h-2.54V12h2.54V9.845c0-2.51 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                            </svg>
                          },
                          {
                            name: 'YouTube',
                            href: 'https://www.youtube.com/@coconutcomputerclub3982',
                            icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.498 6.186a2.977 2.977 0 00-2.094-2.094C19.582 3.5 12 3.5 12 3.5s-7.582 0-9.404.592A2.977 2.977 0 00.502 6.186C0 7.986 0 12 0 12s0 4.014.502 5.814a2.977 2.977 0 002.094 2.094C4.418 20.5 12 20.5 12 20.5s7.582 0 9.404-.592a2.977 2.977 0 002.094-2.094C24 16.014 24 12 24 12s0-4.014-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                            </svg>
                          }
                        ].map((social) => (
                          <a
                            key={social.name}
                            href={social.href}
                            onClick={(e) => {
                              e.preventDefault();
                              handleShare(social.href);
                            }}
                            className="flex items-center justify-center bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-all duration-300 shadow-md"
                          >
                            {social.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="px-8 py-12">
            <div className="prose prose-lg max-w-none">
              {/* Lead Paragraph */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12 border border-blue-100">
                <p className="text-xl leading-relaxed text-gray-700 mb-0 font-medium">
                  <strong className="text-blue-600">Purworejo</strong> – Sebuah transformasi digital yang menginspirasi tengah berlangsung di Desa Krandegan, Kecamatan Bayan, Kabupaten Purworejo, Jawa Tengah. Desa ini berhasil mengintegrasikan teknologi kecerdasan buatan (AI) ke dalam sistem pelayanan publik, menjadikannya pionir dalam penerapan konsep <em>smart village</em> di tingkat nasional.
                </p>
              </div>

              {/* Main Content Sections */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-200">
                  Layanan Digital Terintegrasi: Revolusi Administrasi Desa
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Inovasi teknologi yang diterapkan Desa Krandegan mencakup berbagai sektor vital, mulai dari pelayanan administrasi publik, aktivitas perdagangan, sektor pertanian, hingga sistem peringatan dini untuk mitigasi bencana. Yang paling menonjol adalah implementasi <strong>sistem pelayanan surat-menyurat berbasis digital</strong> yang memungkinkan warga mengurus berbagai dokumen penting tanpa harus hadir secara fisik di kantor desa.
                </p>
                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400 mb-6">
                  <p className="text-gray-700 leading-relaxed mb-0">
                    Melalui platform digital ini, warga dapat dengan mudah mengajukan permohonan untuk berbagai keperluan seperti surat keterangan usaha, surat domisili, atau surat perpindahan. Seluruh proses dilakukan secara <em>online</em> melalui website resmi desa, mulai dari pengisian formulir hingga pengiriman dokumen final dalam format digital kepada pemohon.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-purple-200">
                  Testimoni Warga: Kemudahan yang Nyata
                </h2>
                <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl font-semibold">B</span>
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-lg text-gray-700 leading-relaxed mb-4 italic">
                        "Sistem ini benar-benar memudahkan kami sebagai warga. Sekarang bisa melakukan pelayanan mandiri dari rumah, efisiensi waktu juga meningkat drastis. Bagi kami yang sedang merantau atau berada di luar kota, tetap bisa mengakses layanan karena status sebagai warga Desa Krandegan. Sambil menunggu proses, kami juga bisa mengerjakan aktivitas lain di rumah."
                      </blockquote>
                      <cite className="text-blue-600 font-semibold">- Bowo, Warga Desa Krandegan</cite>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-green-200">
                  Chatbot AI: Asisten Virtual 24 Jam Non-Stop
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Terobosan paling mengesankan dari transformasi digital Desa Krandegan adalah peluncuran <strong>layanan chatbot berbasis artificial intelligence (AI)</strong> yang beroperasi selama 24 jam tanpa henti. Sistem cerdas ini mampu memberikan informasi komprehensif kepada warga mengenai profil lengkap desa, data perangkat desa, hingga statistik demografi terkini.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.3.287.678.508 1.076.633C9.88 15.773 10.894 16 12 16c1.106 0 2.12-.227 2.862-.6.398-.126.776-.347 1.076-.633L17.414 13H15z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Akses Informasi Instan</h3>
                    <p className="text-gray-700">
                      Chatbot AI memberikan respons cepat untuk pertanyaan seputar data desa, profil perangkat, dan informasi demografis.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.894A1 1 0 0018 16V3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Sistem Peringatan Dini</h3>
                    <p className="text-gray-700">
                      Fitur khusus untuk memberikan peringatan dini bencana dan informasi kedaruratan kepada seluruh warga desa.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200 mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl font-semibold">D</span>
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-lg text-gray-700 leading-relaxed mb-4">
                        "Chatbot ini kami kembangkan sebagai bagian lanjutan dari ekosistem digital yang sudah berjalan. Sistem ini telah terintegrasi dengan teknologi kecerdasan buatan, sehingga mampu memberikan jawaban yang mencakup data internal dari website desa maupun informasi eksternal dari berbagai platform digital seperti Meta."
                      </blockquote>
                      <cite className="text-purple-600 font-semibold">- Dwinanto, Kepala Desa Krandegan</cite>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-yellow-200">
                  Cara Kerja Sistem yang Revolusioner
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Operasional sistem chatbot AI ini sangat sederhana namun efektif. Warga cukup mengirimkan pertanyaan melalui nomor layanan WhatsApp yang telah disediakan, dan secara otomatis sistem akan merespons dengan informasi yang dibutuhkan. Kemudahan akses ini tidak hanya terbatas pada layanan administrasi reguler, tetapi juga memiliki peran strategis dalam sistem peringatan dini bencana.
                </p>
                
                <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-8 text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Kontak WhatsApp AI</h3>
                  <p className="text-gray-600 mb-4">Kirim pertanyaan Anda kapan saja, sistem AI akan merespons secara otomatis</p>
                  <div className="bg-green-100 text-green-800 px-6 py-3 rounded-full inline-block font-semibold">
                    📱 Layanan 24/7 Siap Membantu
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-red-200">
                  Model Inspirasi untuk Desa di Seluruh Indonesia
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Keberhasilan implementasi teknologi digital di Desa Krandegan membuktikan bahwa transformasi digital tidak ekslusif milik kota-kota besar. Dengan komitmen yang kuat dan kolaborasi solid antara perangkat desa dan masyarakat, desa-desa di Indonesia mampu bersaing dan maju dalam era digital modern.
                </p>
                
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">🏆 Pencapaian Desa Krandegan</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M14.121 10.48a1 1 0 0 0-1.414 0l-.707.706a2 2 0 0 1-2.828-2.828l5.63-5.632a6.5 6.5 0 0 1 6.377 10.568l-2.108 2.135zM3.161 4.468a6.5 6.5 0 0 1 8.009-.938L7.757 6.944a4 4 0 0 0 5.513 5.794l.144-.137l4.243 4.242l-4.243 4.243a2 2 0 0 1-2.828 0L3.16 13.66a6.5 6.5 0 0 1 0-9.192" stroke="currentColor" strokeWidth="0.5"/>
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Layanan Digital 100%</h4>
                      <p className="text-gray-600 text-sm">Seluruh proses administrasi telah digitalisasi</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Kepuasan Warga 95%</h4>
                      <p className="text-gray-600 text-sm">Tingkat kepuasan layanan meningkat signifikan</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-3">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Efisiensi 80%</h4>
                      <p className="text-gray-600 text-sm">Waktu pemrosesan dokumen lebih cepat</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-lg leading-relaxed text-gray-700 mt-8">
                  Desa Krandegan telah membuktikan bahwa transformasi digital bukan lagi impian, melainkan realitas yang dapat diwujudkan hingga ke pelosok negeri. Model implementasi yang berhasil ini diharapkan dapat menjadi rujukan dan inspirasi bagi desa-desa lain di seluruh Indonesia untuk mengadopsi teknologi serupa dalam meningkatkan kualitas pelayanan publik.
                </p>
              </section>
            </div>
          </div>

          {/* Article Footer */}
          <footer className="px-8 py-6 bg-gray-50 border-t border-gray-100">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Tags:</span>
                <div className="flex flex-wrap gap-2">
                  {['Digital Village', 'AI Technology', 'Smart Government', 'Innovation', 'Public Service'].map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium hover:bg-blue-200 transition-colors cursor-pointer"
                    >
                      #{tag.replace(' ', '')}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>📅 Dipublikasikan: 17 Juni 2025</span>
                <span>👁️ 1,247 views</span>
              </div>
            </div>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default NewsArticle;