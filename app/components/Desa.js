// components/Desa.js
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
    return (
      <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    );
  };

  return (
    <section id="villages" className="py-8 sm:py-12 lg:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-6 px-2">
            Timeline Digitalisasi Desa
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Perjalanan transformasi digital desa-desa di Indonesia bersama Inesa.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Mobile Timeline - Single Column */}
          <div className="block lg:hidden">
            {/* Mobile Timeline Line */}
            <div className="absolute left-4 sm:left-6 top-0 bottom-8 w-0.5 bg-gray-300"></div>

            <div className="space-y-6 sm:space-y-8">
              {timelineData.map((item, index) => (
                <div key={item.id} className="relative flex items-start">
                  {/* Mobile Timeline Dot */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 sm:border-4 border-white ${getStatusColor(item.status)} shadow-lg flex items-center justify-center`}>
                      {getStatusIcon(item.status)}
                    </div>
                  </div>

                  {/* Mobile Content */}
                  <div className="ml-4 sm:ml-6 flex-1 pb-6 sm:pb-8">
                    <div className="bg-white p-4 sm:p-6 rounded-lg sm:rounded-xl shadow-md hover:shadow-lg border-l-4 border-green-500 transition-all duration-300">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 leading-tight">
                        {item.title}
                      </h3>
                      {item.village && (
                        <h6 className="text-sm sm:text-base font-semibold text-green-600 mb-3 leading-relaxed">
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

            {/* Mobile End Indicator */}
            <div className="absolute left-4 sm:left-6 top-full mt-2 flex justify-center">
              <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gray-400 shadow-inner"></div>
            </div>
          </div>

          {/* Desktop Timeline - Alternating Layout */}
          <div className="hidden lg:block">
            {/* Desktop Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-8 h-full w-1 bg-gray-300"></div>

            <div className="space-y-16">
              {timelineData.map((item, index) => (
                <div key={item.id} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className={`bg-white p-8 rounded-2xl shadow-lg border-l-4 border-green-500 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                      index % 2 === 0 ? 'border-l-4' : 'border-r-4 border-l-0'
                    }`}>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h3>
                      {item.village && (
                        <h6 className="text-lg font-semibold text-green-600 mb-4">{item.village}</h6>
                      )}
                      <p className="text-gray-600 leading-relaxed text-base">{item.description}</p>
                    </div>
                  </div>

                  {/* Desktop Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-12 h-12 rounded-full border-4 border-white ${getStatusColor(item.status)} shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300`}>
                      {getStatusIcon(item.status)}
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>

            {/* Desktop End Indicator */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-4 flex justify-center">
              <div className="w-4 h-4 rounded-full bg-gray-400 shadow-inner"></div>
            </div>
          </div>

          {/* Call to Action (opsional) */}
          <div className="text-center mt-12 lg:mt-20">
           
          </div>
        </div>
      </div>
    </section>
  );
}