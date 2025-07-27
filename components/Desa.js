export default function Desa() {
  const timelineData = [
    {
      id: 1,
      title: "INESA",
      village: "Desa Bontomanai",
      location: "Kabupaten Jeneponto, Sulawesi Selatan",
      date: "5 Mei 2025 - 10 Mei 2025 ",
      description: "Peluncuran website profil desa, persuratan desa dan sistem keuangan transparan untuk meningkatkan akuntabilitas pemerintahan desa.",
      status: "completed"
    },
    {
      id: 2,
      title: "Coming Soon",
      village: "",
      location: "",
      date: "Coming Soon",
      description: "Proyek digitalisasi desa berikutnya akan segera diumumkan. Pantau terus perkembangan program transformasi digital desa bersama Inesa.",
      status: "coming-soon"
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'coming-soon':
        return 'bg-gray-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Selesai';
      case 'in-progress':
        return 'Sedang Berjalan';
      case 'planned':
        return 'Direncanakan';
      default:
        return 'Tidak Diketahui';
    }
  };

  return (
    <section id="villages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">Timeline Digitalisasi Desa</h2>
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Perjalanan transformasi digital desa-desa di Indonesia bersama Inesa. Berikut timeline kegiatan yang telah dan akan dilaksanakan:
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-300"></div>
          
          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div key={item.id} className={`flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:items-center`}>
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8'} ml-16 md:ml-0`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-end mb-3">
                      <span className="text-sm font-medium text-gray-500">{item.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                    {item.village && <h4 className="text-lg font-semibold text-green-600 mb-2">{item.village}</h4>}
                    
                    {item.location && (
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {item.location}
                      </div>
                    )}
                    
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
                
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1">
                  <div className={`w-4 h-4 rounded-full border-4 border-white ${getStatusColor(item.status)} shadow-lg`}></div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
          
          {/* Timeline End */}
          
        </div>
        <div className="flex justify-center mt-20">
            <span className="text-gray-500 font-medium">Timeline Berlanjut...</span>
          </div>
      </div>
    </section>
  );
}