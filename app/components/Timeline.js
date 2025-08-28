'use client';
import React from 'react';

const Timeline = () => {
  const timelineData = [
    {
      number: 1,
      title: "Fase Persiapan",
      description: "Survey kebutuhan desa dan pelatihan awal untuk perangkat desa tentang sistem informasi.",
      bgColor: "bg-green-500",
    },
    {
      number: 2,
      title: "Instalasi Sistem",
      description: "Pemasangan aplikasi persuratan, keuangan, dan website profil desa sesuai kebutuhan.",
      bgColor: "bg-blue-500",
    },
    {
      number: 3,
      title: "Sosialisasi dan Uji Coba",
      description: "Pengenalan sistem kepada warga dan perangkat desa, serta pengujian fitur untuk memastikan fungsionalitas.",
      bgColor: "bg-purple-500",
    },
    {
      number: 4,
      title: "Peluncuran Resmi",
      description: "Sistem informasi desa diluncurkan dengan dukungan teknis berkelanjutan.",
      bgColor: "bg-red-500",
    },
  ];

  return (
    <div className="mb-8 px-4 sm:px-6 lg:px-8">
      <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6 text-center">
        Timeline Implementasi Sistem Informasi Desa
      </h4>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {timelineData.map((item, index) => (
          <div key={index} className="relative text-center">
            <div className={`w-10 h-10 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 z-10 relative shadow-md`}>
              <span className="text-white font-bold text-base">{item.number}</span>
            </div>
            <h5 className="font-semibold text-gray-800 text-sm sm:text-base mb-2">{item.title}</h5>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{item.description}</p>
            {/* Add arrows between items, except for the last item */}
            {index < timelineData.length - 1 && (
              <svg
                className="absolute top-4 -right-3 hidden lg:block w-6 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                style={{ transform: 'translateX(50%)' }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;