/* Komponen: Section Tentang Inesa dengan gambar dan teks */
export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Tentang Inesa</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/inesa.png"
              alt="Desa Digital"
              className="rounded-xl shadow-lg card max-w-[180px] sm:max-w-[200px] mx-auto"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-lg text-gray-600 mb-6">
              Inesa (Inovasi dan Edukasi Desa) adalah brand yang berdedikasi untuk membawa digitalisasi ke
              desa-desa di Indonesia. Kami menyediakan solusi seperti website profil desa, sistem informasi
              untuk sekretaris dan bendahara, serta pengelolaan keuangan yang transparan.
            </p>
            <p className="text-lg text-gray-600">
              Visi kami adalah memberdayakan desa melalui teknologi untuk efisiensi dan kesejahteraan
              masyarakat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}