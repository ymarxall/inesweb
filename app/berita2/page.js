'use client';
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NewsArticle = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50/30">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-green-500 to-teal-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <a href="/" className="hover:text-blue-600">Beranda</a>
          <span>›</span>
          <a href="/#energi" className="hover:text-blue-600">Energi</a>
          <span>›</span>
          <span className="text-gray-900">Energi Bersih Desa</span>
        </nav>

        {/* Article */}
        <article className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Hero Section */}
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-blue-600 via-teal-600 to-green-600 relative overflow-hidden">
              <img
                src="/gbr.jpg"
                alt="Micro Hydro Power Plant"
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-12 left-12 w-16 h-16 bg-green-300/20 rounded-full blur-lg animate-pulse delay-1000"></div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    INOVASI ENERGI
                  </span>
                  <time className="bg-white/20 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    Selasa, 26 Agustus 2025
                  </time>
                  <div className="flex items-center gap-1 text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    <span>6 min read</span>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  Energi Bersih untuk Desa Terpencil melalui PLTMH
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed max-w-3xl">
                  Pembangkit Listrik Tenaga Mikrohidro (PLTMH) menjadi solusi inovatif untuk menyediakan listrik ramah lingkungan di desa-desa terpencil Indonesia, dipelopori oleh Tri Mumpuni.
                </p>
              </div>
            </div>
          </div>

          {/* Article Meta */}
          <div className="px-8 py-6 bg-gradient-to-r from-gray-50 to-green-50 border-b border-gray-100">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">A</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Yusuf Marcelino</p>
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
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 mb-12 border border-green-100">
                <p className="text-xl leading-relaxed text-gray-700 mb-0 font-medium">
                  <strong className="text-green-600">Indonesia</strong> – Desa-desa terpencil di Indonesia kini memiliki harapan baru untuk mendapatkan akses listrik yang ramah lingkungan melalui Pembangkit Listrik Tenaga Mikrohidro (PLTMH), sebuah solusi inovatif yang memanfaatkan aliran air untuk menghasilkan energi bersih, dipelopori oleh Tri Mumpuni.
                </p>
              </div>

              {/* Main Content Sections */}
              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-200">
                  Apa Itu PLTMH?
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Pembangkit Listrik Tenaga Mikrohidro (PLTMH) adalah teknologi pembangkit listrik yang memanfaatkan aliran sungai atau air terjun kecil untuk menghasilkan energi listrik. Berbeda dengan pembangkit tenaga air skala besar, PLTMH dirancang untuk daerah terpencil dengan kebutuhan aliran air yang lebih kecil dan biaya pembangunan yang lebih terjangkau.
                </p>
                <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-400 mb-6">
                  <p className="text-gray-700 leading-relaxed mb-0">
                    Dengan kapasitas antara 10 hingga 500 kW, PLTMH mampu menyediakan listrik untuk kebutuhan dasar masyarakat di desa-desa yang belum terjangkau jaringan listrik nasional. Teknologi ini tidak hanya ramah lingkungan, tetapi juga bebas dari bahan bakar fosil, sehingga biaya operasionalnya jauh lebih rendah.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-200">
                  Mengapa Memilih PLTMH?
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Indonesia memiliki potensi energi air yang sangat besar, diperkirakan mencapai 75.000 MW, namun baru sekitar 2,5% yang dimanfaatkan. PLTMH menawarkan solusi yang ideal untuk desa-desa terpencil karena memanfaatkan sumber daya air yang melimpah, seperti sungai dan air terjun, tanpa menghasilkan emisi karbon.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-green-100 rounded-xl p-6 border border-green-200">
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 10a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Efisiensi Tinggi</h3>
                    <p className="text-gray-700">
                      PLTMH memiliki efisiensi energi hingga 70-85%, menjadikannya solusi yang sangat efektif untuk kebutuhan listrik pedesaan.
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-teal-50 to-blue-100 rounded-xl p-6 border border-teal-200">
                    <div className="w-12 h-12 bg-teal-600 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Ramah Lingkungan</h3>
                    <p className="text-gray-700">
                      Tanpa emisi gas rumah kaca, PLTMH mendukung pelestarian lingkungan dan energi terbarukan.
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-green-200">
                  Keunggulan dan Tantangan PLTMH
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  PLTMH memiliki sejumlah keunggulan yang menjadikannya solusi ideal untuk desa terpencil. Teknologi ini tahan lama, dengan masa operasi hingga 50 tahun, dan biaya pembangkitan yang rendah. Selain itu, PLTMH dapat digunakan untuk menggerakkan berbagai peralatan, seperti generator atau pompa air.
                </p>
                <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl font-semibold">S</span>
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-lg text-gray-700 leading-relaxed mb-4 italic">
                        "PLTMH adalah solusi energi yang sangat cocok untuk daerah terpencil. Dengan memanfaatkan aliran air lokal, kita bisa menyediakan listrik murah dan ramah lingkungan tanpa ketergantungan pada bahan bakar fosil."
                      </blockquote>
                      <cite className="text-green-600 font-semibold">- Siti, Pakar Energi Terbarukan</cite>
                    </div>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Namun, PLTMH juga memiliki tantangan. Investasi awal untuk pembangunan relatif besar, dan kinerjanya dapat terpengaruh oleh musim kemarau yang mengurangi debit air. Selain itu, penggunaan air yang intensif berpotensi memengaruhi ketersediaan air untuk kebutuhan lain, seperti irigasi.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-teal-200">
                  Kisah Sukses Tri Mumpuni dan PLTMH
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Tri Mumpuni Wiyatno, dijuluki "Perempuan Listrik," telah menjadi tokoh inspiratif dalam pengembangan PLTMH. Pada Desember 2020, ia masuk dalam daftar 500 tokoh muslim berpengaruh versi Royal Islamic Strategies Studies Centre untuk kategori Sains dan Teknologi. Melalui Institut Bisnis dan Ekonomi Kerakyatan (IBEKA), Tri telah membangun 65 PLTMH di desa-desa terpencil di Indonesia dan Filipina, menyediakan listrik di wilayah yang belum terjangkau PLN.
                </p>
                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 border border-teal-200 mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl font-semibold">T</span>
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-lg text-gray-700 leading-relaxed mb-4">
                        "PLTMH memanfaatkan sumber daya lokal untuk kemakmuran masyarakat setempat, sekaligus membantu PLN mengurangi penggunaan bahan bakar fosil."
                      </blockquote>
                      <cite className="text-teal-600 font-semibold">- Tri Mumpuni, Penggiat PLTMH</cite>
                    </div>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  PLTMH yang dikembangkan Tri berbasis masyarakat, dengan 50% kepemilikan oleh komunitas melalui koperasi dan 50% oleh investor. Contohnya, PLTMH Cinta Mekar di Subang, Jawa Barat, yang dibangun pada 2002, menghasilkan keuntungan yang digunakan untuk biaya sekolah, subsidi kesehatan, dan modal usaha warga. Meski operasinya terhenti pada 2017 karena rendahnya harga beli listrik oleh PLN, koperasi setempat tetap berjalan dengan modal usaha Rp50 juta, mendukung 100 anggota aktif.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Di Desa Kamanggih, Sumba Timur, PLTMH yang dibangun pada 2011 memungkinkan warga menggunakan pompa air listrik, mengurangi beban perempuan yang sebelumnya menghabiskan tujuh jam untuk mengambil air. Kini, mereka dapat fokus menenun kain untuk dijual, meningkatkan pendapatan keluarga.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-blue-200">
                  Masa Depan Energi Bersih dan Desa Makmur
                </h2>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Tri Mumpuni menekankan bahwa desa memiliki potensi besar untuk pembangunan nasional jika sumber daya lokal dikelola dengan baik. Namun, ia menyayangkan minimnya fokus pada desa, yang menyebabkan generasi muda meninggalkan desa karena pendidikan yang tidak mendukung potensi lokal. Melalui program Patriot Desa bersama Pemprov Jawa Barat, Tri melatih pemuda untuk membangun desa melalui inisiatif seperti One Village One Company (OVOC), yang memaksimalkan potensi desa lewat Badan Usaha Milik Desa (BUMDes).
                </p>
                <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-lg mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xl font-semibold">T</span>
                    </div>
                    <div className="flex-1">
                      <blockquote className="text-lg text-gray-700 leading-relaxed mb-4 italic">
                        "Kemiskinan terjadi karena masyarakat dipisahkan dari sumber daya lokal. PLTMH memastikan warga memiliki dan memanfaatkan teknologi untuk kesejahteraan mereka."
                      </blockquote>
                      <cite className="text-green-600 font-semibold">- Tri Mumpuni, Penggiat PLTMH</cite>
                    </div>
                  </div>
                </div>
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  Meski telah membangun banyak PLTMH, Tri merasa frustrasi karena masih ada 433 desa di Indonesia tanpa listrik per April 2020, terutama di Papua, Nusa Tenggara Timur, dan Maluku. Ia berharap pemerintah mendukung energi terbarukan untuk memakmurkan desa, memungkinkan desa menghasilkan pendapatan dari sumber energi lokal.
                </p>
                <div className="bg-white rounded-xl border-2 border-dashed border-gray-300 p-8 text-center mb-8">
                  <div className="flex justify-center mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Ayo Dukung Energi Bersih!</h3>
                  <p className="text-gray-600 mb-4">Bergabunglah dalam gerakan energi terbarukan untuk masa depan desa yang makmur.</p>
                  <div className="bg-green-100 text-green-800 px-6 py-3 rounded-full inline-block font-semibold">
                    🌱 Solusi Energi untuk Desa
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Article Footer */}
          <footer className="px-8 py-6 bg-gray-50 border-t border-gray-100">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Tags:</span>
                <div className="flex flex-wrap gap-2">
                  {['MicroHydro', 'CleanEnergy', 'RenewableEnergy', 'RuralDevelopment', 'Sustainability', 'TriMumpuni'].map((tag) => (
                    <span
                      key={tag}
                      className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium hover:bg-green-200 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span>📅 Dipublikasikan: 26 Agustus 2025</span>
                <span>👁️ 1,892 views</span>
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