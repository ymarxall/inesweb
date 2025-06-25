/* Komponen: Hero section dengan teks dan gambar brand ambassador */
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-hero min-h-[250px] md:min-h-[350px] flex items-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-left hero-text">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6 leading-tight">
            <span className='text-green-600'>INESA</span> Mewujudkan Desa Digital!
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-lg">
            Solusi teknologi modern untuk tata kelola desa yang efisien, transparan, dan inovatif.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition scale-hover"
          >
            Hubungi Kami
          </Link>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img src="/amel.png" alt="Brand Ambassador" className="mx-auto max-w-[200px] md:max-w-xs h-auto" />
        </div>
      </div>
    </section>
  );
}