'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null)

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Pertanyaan Umum</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="bg-green-50 rounded-xl shadow-lg card">
            <input type="checkbox" id="faq1" className="hidden peer" checked={openFAQ === 'faq1'} onChange={() => toggleFAQ('faq1')} />
            <label htmlFor="faq1" className="flex justify-between items-center p-6 cursor-pointer text-green-600 font-semibold hover:bg-green-100 transition">
              Apa itu Inesa?
              <svg className={`w-6 h-6 transform ${openFAQ === 'faq1' ? 'rotate-180' : ''} transition`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </label>
            <div className={`max-h-0 overflow-hidden ${openFAQ === 'faq1' ? 'max-h-40' : ''} transition-all duration-300`}>
              <p className="p-6 text-gray-600">
                Inesa adalah brand yang membantu desa-desa di Indonesia menuju digitalisasi dengan solusi seperti website profil desa dan sistem informasi.
              </p>
            </div>
          </div>
          <div className="bg-green-50 rounded-xl shadow-lg card">
            <input type="checkbox" id="faq2" className="hidden peer" checked={openFAQ === 'faq2'} onChange={() => toggleFAQ('faq2')} />
            <label htmlFor="faq2" className="flex justify-between items-center p-6 cursor-pointer text-green-600 font-semibold hover:bg-green-100 transition">
              Berapa biaya layanan Inesa?
              <svg className={`w-6 h-6 transform ${openFAQ === 'faq2' ? 'rotate-180' : ''} transition`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </label>
            <div className={`max-h-0 overflow-hidden ${openFAQ === 'faq2' ? 'max-h-40' : ''} transition-all duration-300`}>
              <p className="p-6 text-gray-600">Biaya disesuaikan dengan kebutuhan desa. Hubungi kami untuk konsultasi gratis.</p>
            </div>
          </div>
          <div className="bg-green-50 rounded-xl shadow-lg card">
            <input type="checkbox" id="faq3" className="hidden peer" checked={openFAQ === 'faq3'} onChange={() => toggleFAQ('faq3')} />
            <label htmlFor="faq3" className="flex justify-between items-center p-6 cursor-pointer text-green-600 font-semibold hover:bg-green-100 transition">
              Apakah Inesa menyediakan pelatihan?
              <svg className={`w-6 h-6 transform ${openFAQ === 'faq3' ? 'rotate-180' : ''} transition`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </label>
            <div className={`max-h-0 overflow-hidden ${openFAQ === 'faq3' ? 'max-h-40' : ''} transition-all duration-300`}>
              <p className="p-6 text-gray-600">Ya, kami menyediakan pelatihan bagi perangkat desa untuk menggunakan sistem kami.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}