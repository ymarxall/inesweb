'use client';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 400,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  useEffect(() => {
    if (submitStatus) {
      setShowPopup(true);
      // Auto hide popup after 5 seconds
      const timer = setTimeout(() => {
        setShowPopup(false);
        setSubmitStatus(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const closePopup = () => {
    setShowPopup(false);
    setSubmitStatus(null);
  };

  // Web3Forms Integration
  const submitWithWeb3Forms = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formDataToSend = new FormData();
      
      formDataToSend.append('access_key', 'faffeb8f-86af-4d26-b7be-ae9518acfe2b');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      
      // Optional: Custom subject and additional fields
      formDataToSend.append('subject', 'Pesan Baru dari Website INESA');
      formDataToSend.append('from_name', 'Contact Form - INESA Website');
      
      // Honeypot field for anti-spam
      formDataToSend.append('botcheck', '');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.log('Error:', data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-20 bg-white" data-aos="fade-up" data-aos-delay="50">
        <div className="container mx-auto px-6">
          {/* Judul */}
          <h2 className="text-4xl font-bold text-gray-800 text-center mb-12" data-aos="fade-up" data-aos-delay="100">
            Hubungi Kami
          </h2>

          {/* Kartu Kontak */}
          <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-2xl" data-aos="fade-up" data-aos-delay="150">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              
              {/* Bagian Informasi Kontak */}
              <div className="flex flex-col justify-center" data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-3xl font-bold text-green-600 mb-6" data-aos="fade-up" data-aos-delay="250">
                  Siap Memulai Digitalisasi Desa Anda?
                </h3>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-center" data-aos="fade-up" data-aos-delay="300">
                    <svg className="w-10 h-10 text-green-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    <div>
                      <p className="text-gray-600 text-lg"><strong>Email:</strong></p>
                      <a href="mailto:hello@coconut.or.id" className="text-green-600 hover:text-green-700 transition duration-200">
                        hello@coconut.or.id
                      </a>
                    </div>
                  </div>

                  {/* Telepon */}
                  <div className="flex items-center" data-aos="fade-up" data-aos-delay="350">
                    <svg className="w-10 h-10 text-green-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <div>
                      <p className="text-gray-600 text-lg"><strong>Telepon:</strong></p>
                      <a href="tel:+6285240791254" className="text-green-600 hover:text-green-700 transition duration-200">
                        +62 85240791254
                      </a>
                    </div>
                  </div>

                  {/* Alamat */}
                  <div className="flex items-center" data-aos="fade-up" data-aos-delay="400">
                    <svg className="w-10 h-10 text-green-600 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <div>
                      <p className="text-gray-600 text-lg"><strong>Alamat:</strong></p>
                      <p className="text-gray-600">Jl. Emmy Saelan III No. 70, Makassar, Indonesia</p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8" data-aos="fade-up" data-aos-delay="450">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">Ikuti Kami:</h4>
                  <div className="flex space-x-4">
                     {/* LinkedIn */}
                    <a href="https://www.linkedin.com/company/coconut-computer-club/?originalSubdomain=id" className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition duration-200">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z" stroke="currentColor" strokeWidth="0.5"/>
                      </svg>
                    </a>
                     {/* Instagram */}
                    <a href="https://www.instagram.com/coconutdotorg/" className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition duration-200">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm0 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3m-4 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4m4.5-3.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2" stroke="currentColor" strokeWidth="0.5"/>
                      </svg>
                    </a>
                    {/* Facebook */}
                    <a href="https://www.facebook.com/coconutcomputer" className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition duration-200">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.437 9.878v-6.987h-2.54V12h2.54V9.845c0-2.51 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                      </svg>
                    </a>
                    {/* YouTube */}
                    <a href="https://www.youtube.com/@coconutcomputerclub3982" className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition duration-200">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a2.977 2.977 0 00-2.094-2.094C19.582 3.5 12 3.5 12 3.5s-7.582 0-9.404.592A2.977 2.977 0 00.502 6.186C0 7.986 0 12 0 12s0 4.014.502 5.814a2.977 2.977 0 002.094 2.094C4.418 20.5 12 20.5 12 20.5s7.582 0 9.404-.592a2.977 2.977 0 002.094-2.094C24 16.014 24 12 24 12s0-4.014-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                   
                  </div>
                </div>
              </div>

              {/* Bagian Formulir */}
              <div data-aos="fade-up" data-aos-delay="450">
                <h3 className="text-2xl font-semibold text-green-600 mb-6" data-aos="fade-up" data-aos-delay="500">
                  Kirim Pesan
                </h3>
                
                {/* Form */}
                <div className="space-y-6">
                  <div data-aos="fade-up" data-aos-delay="550">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Nama Lengkap"
                      required
                      className="w-full p-4 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition duration-200"
                    />
                  </div>
                  
                  <div data-aos="fade-up" data-aos-delay="600">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      required
                      className="w-full p-4 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition duration-200"
                    />
                  </div>
                  
                  <div data-aos="fade-up" data-aos-delay="650">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tulis pesan Anda di sini..."
                      required
                      className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition duration-200 resize-none"
                      rows="5"
                    />
                  </div>
                  
                  <div data-aos="fade-up" data-aos-delay="700">
                    <button
                      onClick={submitWithWeb3Forms}
                      disabled={isSubmitting}
                      className="w-full bg-green-600 text-white p-4 rounded-full font-semibold hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed transition duration-300 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Mengirim Pesan...
                        </>
                      ) : (
                        'Kirim Pesan'
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixed Popup Status Messages */}
      {showPopup && submitStatus && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fadeIn">
          <div className={`relative max-w-md mx-4 p-6 rounded-2xl shadow-2xl transform animate-slideIn ${
            submitStatus === 'success' 
              ? 'bg-white border-t-4 border-green-500' 
              : 'bg-white border-t-4 border-red-500'
          }`}>
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>

            {/* Content */}
            <div className="pr-8">
              {submitStatus === 'success' ? (
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-green-100 rounded-full p-3">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Berhasil Terkirim!</h3>
                    <p className="text-gray-600">Pesan Anda telah berhasil dikirim. Kami akan segera menghubungi Anda dalam waktu 1x24 jam.</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="bg-red-100 rounded-full p-3">
                      <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Gagal Mengirim</h3>
                    <p className="text-gray-600">Terjadi kesalahan saat mengirim pesan. Silakan coba lagi atau hubungi kami langsung melalui email atau telepon.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-slideIn {
          animation: slideIn 0.4s ease-out;
        }
      `}</style>
    </>
  );
}