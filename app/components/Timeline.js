
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
    <div className="mb-8">
      <h4 className="text-lg font-semibold text-gray-900 mb-4 text-center">Timeline Implementasi Sistem Informasi Desa</h4>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {timelineData.map((item, index) => (
          <div key={index} className="relative text-center">
            <div className={`w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-3 z-10 relative`}>
              <span className="text-white font-bold">{item.number}</span>
            </div>
            <h5 className="font-semibold text-gray-900 mb-2">{item.title}</h5>
            <p className="text-xs text-gray-600">{item.description}</p>
            {/* Add arrows between items, except for the last item */}
            {index < timelineData.length - 1 && (
              <svg
                className="absolute top-5 -right-4 hidden lg:block w-8 h-4 text-gray-500"
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
