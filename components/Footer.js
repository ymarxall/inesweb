/* Komponen: Footer dengan logo, navigasi, dan ikon sosial media */
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-600 to-green-800 text-white py-6 md:py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-3">Inesa</h3>
            <p className="text-sm mb-3">Memberdayakan desa dengan teknologi untuk masa depan yang lebih baik.</p>
            <img src="/inesaputih.png" alt="Logo Inesa" className="h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Navigasi</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="#home" className="hover:text-gray-200 transition scale-hover inline-block">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-gray-200 transition scale-hover inline-block">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-gray-200 transition scale-hover inline-block">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-gray-200 transition scale-hover inline-block">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-3">Ikuti Kami</h3>
            <div className="flex space-x-3">
              <Link href="#" className="hover:text-gray-200 transition scale-hover">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.96 3.64 9.08 8.4 9.84v-6.96h-2.52v-2.88h2.52v-2.16c0-2.52 1.5-3.9 3.78-3.9 1.08 0 2.22.18 2.22.18v2.46h-1.26c-1.26 0-1.62.78-1.62 1.56v1.86h2.88l-.48 2.88h-2.4v6.96c4.76-.76 8.4-4.88 8.4-9.84 0-5.5-4.46-9.96-9.96-9.96z"></path>
                </svg>
              </Link>
              <Link href="#" className="hover:text-gray-200 transition scale-hover">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.94 4.56c-.88.38-1.82.64-2.82.76 1.02-.62 1.8-1.6 2.16-2.76-.96.58-2.02.98-3.14 1.2-.9-.96-2.18-1.56-3.6-1.56-2.72 0-4.92 2.2-4.92 4.92 0 .38.04.76.12 1.12-4.08-.2-7.7-2.16-10.14-5.12-.42.72-.66 1.56-.66 2.46 0 1.7.86 3.2 2.16 4.08-.8-.02-1.54-.24-2.2-.6v.06c0 2.38 1.68 4.36 3.92 4.82-.4.1-.84.16-1.28.16-.32 0-.62-.02-.92-.08.62 1.94 2.42 3.36 4.56 3.4-1.66 1.3-3.76 2.08-6.04 2.08-.4 0-.78-.02-1.16-.06 2.16 1.38 4.72 2.18 7.48 2.18 8.98 0 13.9-7.44 13.9-13.9 0-.22 0-.42-.02-.64.96-.7 1.78-1.58 2.44-2.58z"></path>
                </svg>
              </Link>
              <Link href="#" className="hover:text-gray-200 transition scale-hover">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95.49-7.29-2.85-6.8-6.8.49-3.95 3.83-7.29 7.78-6.8 3.95.49 7.29 3.83 6.8 7.78-.49 3.95-3.83 7.29-7.78 6.82zM16.5 9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-6 text-center text-sm">
          <p>© 2025 Powered by COCONUT.</p>
          <p className="mt-1">
            Dibuat dengan <span className="text-red-300">❤️</span> untuk Desa Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}