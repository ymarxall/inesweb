export default function Services() {
  return (
    <section id="services" className="py-20 bg-green-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Layanan Kami</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg card scale-hover">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Website Profil Desa</h3>
            <p className="text-gray-600">Website profesional untuk mempromosikan potensi dan informasi desa Anda.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg card scale-hover">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Sistem Informasi Sekretaris</h3>
            <p className="text-gray-600">Solusi digital untuk mengelola surat masuk dan keluar dengan efisien.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg card scale-hover">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">Manajemen Keuangan Desa</h3>
            <p className="text-gray-600">Sistem untuk mencatat dan melaporkan keuangan desa secara transparan.</p>
          </div>
        </div>
      </div>
    </section>
  )
}