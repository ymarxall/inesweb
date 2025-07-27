export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-right mb-2" style={{ marginRight: '300px' }}>Keunggulan inesa.id</h2>
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="md:w-1/2 relative">
            <img
              src="/putus.png"
              alt="Dashed Line"
              className="absolute w-full h-auto opacity-50"
            />
            <img
              src="/rocket.png"
              alt="Keunggulan Inesa"
              className="w-[300px] h-auto relative z-10"
              style={{ marginLeft: '50px' }}
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-600 mb-6">
              Inesa membantu desa mengelola data secara digital dan transparan, agar pelayanan publik lebih efisien dan akuntabel.
            </p>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <div className="text-lg text-gray-600 flex-1 group-hover:bg-white group-hover:shadow-md group-hover:p-4 group-hover:rounded-lg transition duration-300">
                  <div className="flex items-center">
                    <span className="group-hover:inline-block">
                      <img src="/pesawat.png" alt="Icon" className="w-6 h-6 object-contain mr-2" />
                    </span>
                    <div>
                      <strong>Sistem Persuratan Digital Terpadu</strong>
                      <p className="text-sm text-gray-500">Kelola surat-menyurat desa dengan cepat, akurat, dan efisien.</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="text-lg text-gray-600 flex-1 group-hover:bg-white group-hover:shadow-md group-hover:p-4 group-hover:rounded-lg transition duration-300">
                  <div className="flex items-center">
                    <span className="group-hover:inline-block">
                      <img src="/gedung.png" alt="Icon" className="w-8 h-8 object-contain mr-2" />
                    </span>
                    <div>
                      <strong>Template Dokumen Profesional</strong>
                      <p className="text-sm text-gray-500">Beragam template surat yang sesuai kebutuhan, mempermudah tugas administrasi sehari-hari.</p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex items-start group">
                <div className="text-lg text-gray-600 flex-1 group-hover:bg-white group-hover:shadow-md group-hover:p-4 group-hover:rounded-lg transition duration-300">
                  <div className="flex items-center">
                    <span className="group-hover:inline-block">
                      <img src="/koper.png" alt="Icon" className="w-8 h-8 object-contain mr-2" />
                    </span>
                    <div>
                      <strong>Cloud Storage yang Aman</strong>
                      <p className="text-sm text-gray-500">Dokumen desa tersimpan aman dalam sistem cloud terenkripsi, akses kapan saja dan dari mana saja.</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <a href="#contact" className="inline-block mt-6 text-lg text-green-600 font-semibold hover:text-green-800">
              Lihat Unggulan Lainnya →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}