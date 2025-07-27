export default function Services() {
  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="absolute" style={{ width: '1000px', height: '2000px', left: '-50px', top: '-200px' }}>
        <img src="/pudar.png" alt="Fade effect" style={{ width: '1000px', height: '800px' }} />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-end mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mr-auto">Solusi yang Diberikan</h2>
          <a href="#contact" className="inline-block bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 ml-4">Bergabung</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <img src="/a1.png" alt="Layanan Surat Menyurat Online" style={{ width: '250px', height: '250px' }} />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-black mb-2">Layanan Surat Menyurat Online</h3>
              <p className="text-gray-600 text-sm text-justify" style={{ maxWidth: '250px' }}>Menyurat proses pengajuan surat menyurat tanpa harus datang ke kantor desa.</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <img src="/a2.png" alt="Sistem Informasi Kependudukan" style={{ width: '250px', height: '250px' }} />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-black mb-2">Sistem Informasi Kependudukan</h3>
              <p className="text-gray-600 text-sm text-justify" style={{ maxWidth: '250px' }}>Simpan data kependudukan dengan mudah dan akurat, memberikan laporan cepat dan mudah diakses.</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <img src="/a3.png" alt="Dashboard Keuangan Desa" style={{ width: '250px', height: '250px' }} />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-black mb-2">Dashboard Keuangan Desa</h3>
              <p className="text-gray-600 text-sm text-justify" style={{ maxWidth: '250px' }}>Kelola APBDes, realisasi anggaran, dan laporan keuangan hanya dalam beberapa klik.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}