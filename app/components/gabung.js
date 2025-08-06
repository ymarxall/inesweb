'use client';
import React from 'react';
import Link from 'next/link';

export default function Gabung() {
  return (
    <section className="py-16 bg-white text-center">
      {/* Judul */}
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Mitra desa yang telah memakai Inesa.id
        </h2>
        <p className="text-sm text-gray-500">
          Desa-desa yang telah bergabung dengan platform kami untuk meningkatkan kemajuan digital.
        </p>
      </div>

      {/* Grid Gambar */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Desa Bontomanai */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/jeneponto.png"
              alt="Desa Bontomanai"
              className="w-full h-48 object-contain"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">Kabupaten Jeneponto</p>
              <h4 className="text-lg font-semibold text-gray-800">Desa Bontomanai</h4>
            </div>
          </div>

          {/* Card 2: Coming Soon */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="text-center">
                <span className="text-white font-bold text-lg">Coming Soon</span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-400"></p>
              <h4 className="text-lg font-semibold text-gray-500"></h4>
            </div>
          </div>

          {/* Card 3: Coming Soon */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="text-center">
                <span className="text-white font-bold text-lg">Coming Soon</span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-400"></p>
              <h4 className="text-lg font-semibold text-gray-500"></h4>
            </div>
          </div>

          {/* Card 4: Coming Soon */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="text-center">
                <span className="text-white font-bold text-lg">Coming Soon</span>
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-400"></p>
              <h4 className="text-lg font-semibold text-gray-500"></h4>
            </div>
          </div>
        </div>
      </div>

      {/* Tombol Aksi */}
      <div className="container mx-auto px-4 mt-10 text-center">
        <Link href="/Tombol">
          <button className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            <span>Timeline Digitalisasi Desa</span>
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}