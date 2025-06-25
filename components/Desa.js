/* Komponen: Section Desa yang Telah Bergabung dengan logo dan deskripsi */
export default function Desa() {
  return (
    <section id="villages" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Desa yang Telah Bergabung</h2>
        <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Kami bangga telah memulai digitalisasi desa di Indonesia. Berikut desa yang telah bergabung:
        </p>
        <div className="flex justify-center">
          <div className="bg-green-50 p-8 rounded-xl shadow-lg text-center max-w-sm card scale-hover">
            <img src="/jeneponto.png" alt="Logo Desa Bontomanai" className="mx-auto mb-6 max-w-[100px]" />
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Desa Bontomanai</h1>
            <p className="text-gray-600">
              Desa pertama kami telah menggunakan solusi Inesa untuk website profil dan sistem keuangan yang transparan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}