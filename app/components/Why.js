export default function Why() {
  return (
    <section id="why-choose" className="py-20 bg-green-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Mengapa Memilih Inesa?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg card scale-hover">
            <svg className="w-12 h-12 mx-auto mb-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Solusi Terjangkau</h3>
            <p className="text-gray-600">Layanan kami dirancang sesuai kebutuhan desa dengan biaya yang kompetitif.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg card scale-hover">
            <svg className="w-12 h-12 mx-auto mb-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
            </svg>
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Mudah Digunakan</h3>
            <p className="text-gray-600">Sistem kami intuitif, didukung pelatihan untuk perangkat desa.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg card scale-hover">
            <svg className="w-12 h-12 mx-auto mb-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Transparansi</h3>
            <p className="text-gray-600">Meningkatkan kepercayaan masyarakat dengan laporan keuangan yang jelas.</p>
          </div>
        </div>
      </div>
    </section>
  )
}