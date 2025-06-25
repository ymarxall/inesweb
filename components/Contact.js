export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-green-100">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Hubungi Kami</h2>
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-2xl card">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-green-600 mb-6">Siap Memulai Digitalisasi Desa Anda?</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <svg className="w-10 h-10 text-green-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <p className="text-gray-600 text-lg"><strong>Email:</strong> hello@coconut.or.id</p>
                </div>
                <div className="flex items-center">
                  <svg className="w-10 h-10 text-green-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <p className="text-gray-600 text-lg"><strong>Telepon:</strong> +62 85240791254</p>
                </div>
                <div className="flex items-center">
                  <svg className="w-10 h-10 text-green-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p className="text-gray-600 text-lg"><strong>Alamat:</strong> Jl. Emmy Saelan lll No. 70, Makassar, Indonesia</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-600 mb-6">Kirim Pesan</h3>
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Nama"
                  className="w-full p-4 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-4 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                />
                <textarea
                  placeholder="Pesan"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 transition"
                  rows="5"
                ></textarea>
                <button className="w-full bg-green-600 text-white p-4 rounded-full font-semibold hover:bg-green-700 transition scale-hover">
                  Kirim Pesan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}