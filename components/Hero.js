import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="pt-40 pb-16 bg-gradient-to-b from-green-200 to-transparent min-h-[450px] md:min-h-[550px] flex items-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-left hero-text ml-10"> {/* Menggeser ke kanan dengan margin-left */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 leading-tight">
           Digitalisasi Desa, Menuju Masa Depan yang Transparan
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-lg">
            Permudah administrasi desa melalui platform digital cerdas yang aman dan terpercaya. inesa.id hadir untuk membawa kemajuan nyata bagi desa Anda.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition scale-hover"
          >
            Bergabung
          </Link>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 relative flex justify-end items-center">
          <img
            src="/back.png"
            alt="Background"
            className="absolute max-w-[200px] md:max-w-[330px] h-auto z-0"
            style={{ left: '160px', top: '-100px' }}
          />
          <img
            src="/kanan.png"
            alt="Brand Ambassador"
            className="relative max-w-[300px] md:max-w-[350px] h-auto z-10"
            style={{ left: '-125px', top: '-20px' }}
          />
        </div>
      </div>
    </section>
  );
}