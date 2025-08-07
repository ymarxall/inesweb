import React from 'react';

export default function Desa() {
  const timelineData = [
    {
      id: 1,
      title: "Riset Pendahuluan",
      village: "Literatur review, wawancara mendalam.",
      description: "Studi literatur teknologi terkini dan praktik terbaik, observasi lapangan, wawancara dengan pemangku kepentingan (pemerintah desa, kelompok tani, pelajar).",
      status: "completed"
    },
    {
      id: 2,
      title: "Pengumpulan Data",
      village: "Kuantitatif (kuesioner digital), Kualitatif (FGD).",
      description: "Survei kebutuhan dan Focus Group Discussion (FGD) untuk menggali tantangan spesifik.",
      status: "completed"
    },
    {
      id: 3,
      title: "Penyusunan Konsep",
      village: "Analisis prioritas, desain prototipe.",
      description: "Pemetaan solusi teknologi berdasarkan matriks impact-feasibility, pembuatan prototipe sederhana (mock-up).",
      status: "completed"
    },
    {
      id: 4,
      title: "Penetapan Ide Final",
      village: "Dialog partisipatif, komitmen formal.",
      description: "Presentasi konsep kepada masyarakat desa, revisi berdasarkan masukan, penandatanganan MoU.",
      status: "completed"
    },
    {
      id: 5,
      title: "Eksekusi Langsung",
      village: "Implementasi terukur, pelatihan langsung.",
      description: "Pembagian tim (IoT, infrastruktur, AI), pelibatan masyarakat dalam instalasi dan pelatihan (learning by doing).",
      status: "completed"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-yellow-500';
      case 'planned':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusIcon = (status) => {
    if (status === 'completed') {
      return (
        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      );
    }
    return (
      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    );
  };

  return (
    <section id="villages" className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
            </svg>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Timeline <span className="text-green-600">Digitalisasi Desa</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ikuti langkah-langkah transformasi digital desa-desa di Indonesia bersama Inesa untuk pelayanan publik yang lebih modern dan transparan.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Mobile Timeline - Single Column */}
          <div className="block lg:hidden">
            {/* Mobile Timeline Line */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-300 to-blue-300"></div>

            <div className="space-y-6 sm:space-y-8">
              {timelineData.map((item) => (
                <div key={item.id} className="relative flex items-start">
                  {/* Mobile Timeline Dot */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 sm:border-4 border-white ${getStatusColor(item.status)} shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110`}>
                      {getStatusIcon(item.status)}
                    </div>
                  </div>

                  {/* Mobile Content */}
                  <div className="ml-4 sm:ml-6 flex-1 pb-6 sm:pb-8">
                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl border-l-4 border-green-500 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.01]">
                      <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-2 leading-tight">
                        {item.title}
                      </h3>
                      {item.village && (
                        <h6 className="text-sm font-semibold text-green-600 mb-3 leading-relaxed">
                          {item.village}
                        </h6>
                      )}
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Timeline - Alternating Layout */}
          <div className="hidden lg:block">
            {/* Desktop Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-300 to-blue-300"></div>

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <div key={item.id} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className={`bg-white p-6 sm:p-8 rounded-2xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.01] ${
                      index % 2 === 0 ? 'border-l-4' : 'border-r-4 border-l-0'
                    }`}>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                      {item.village && (
                        <h6 className="text-base font-semibold text-green-600 mb-4">{item.village}</h6>
                      )}
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Desktop Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-4 border-white ${getStatusColor(item.status)} shadow-xl flex items-center justify-center transition-transform duration-300 hover:scale-110`}>
                      {getStatusIcon(item.status)}
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-8 sm:mt-12 lg:mt-16">
          <a
            href="#contact"
            className="inline-flex items-center text-base sm:text-lg font-semibold text-green-600 hover:text-green-700 group transition-colors duration-300"
          >
            <span>Gabung dalam Transformasi Digital</span>
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
    </section>
  );
}