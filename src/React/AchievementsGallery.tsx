import { useState } from "react";

interface Achievement {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  unlocked: boolean;
}

const AchievementsGallery = () => {
  const [selectedCert, setSelectedCert] = useState<Achievement | null>(null);
  
  // Lista de logros y certificados
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Python Essentials",
      description: "Certificado de Python Essentials otorgado por Cisco Networking Academy y Python Institute",
      image: "/Certificados/PythonEssentials.jpg",
      date: "2023-06",
      category: "Python",
      unlocked: true
    },
    {
      id: 2,
      title: "Desarrollo Movil",
      description: "Certificado de Desarrollo Movil otorgado por la Universidad Continental",
      image: "/Certificados/DesarrolloMovil.png",
      date: "2025-02",
      category: "Desarrollo Movil",
      unlocked: true
    },
    {
      id: 3,
      title: "Proyectos Informaticos",
      description: "Certificado de Proyectos Informaticos otorgado por la Universidad Continental",
      image: "/Certificados/ProyectosInformaticos.png",
      date: "2025-02",
      category: "Proyectos Informaticos",
      unlocked: true
    },
    {
      id: 4,
      title: "CCNAv7: Introduccion a Redes",
      description: "Certificado de CCNAv7: Introduccion a Redes otorgado por Cisco Networking Academy",
      image: "/Certificados/Redes1.png",
      date: "2023-07",
      category: "CCNAv7: Introduccion a Redes",
      unlocked: true
    },
    {
      id: 5,
      title: "CCNAv7: Switching, Routing and Wireless Essentials",
      description: "Certificado de CCNAv7: Switching, Routing and Wireless Essentials otorgado por Cisco Networking Academy",
      image: "/Certificados/Redes2.jpg",
      date: "2024-07",
      category: "CCNAv7: Switching, Routing and Wireless Essentials",
      unlocked: true
    },
    {
      id: 6,
      title: "Bachiller en Ingenieria de Sistemas e Informatica",
      description: "Certificado de Bachiller en Ingenieria de Sistemas e Informatica otorgado por la Universidad Continental",
      image: "/Certificados/Bachiller.png",
      date: "2025-03",
      category: "Bachiller en Ingenieria de Sistemas e Informatica",
      unlocked: true
    },
    {
      id: 7,
      title: "Constancia de prácticas preprofesionales",
      description: "Certificado de Constancia de prácticas preprofesionales otorgado por la Clínica Cayetano Heredia S.A",
      image: "/Certificados/Practicas.jpg",
      date: "2024-02",
      category: "Constancia de prácticas preprofesionales",
      unlocked: true
    },
    {
      id: 8,
      title: "Certificado de concurso de programación",
      description: "Certificado de concurso de programación otorgado por la Universidad Continental y ACM",
      image: "/Certificados/FestiCode.png",
      date: "2022-12",
      category: "Certificado de concurso de programación",
      unlocked: true
    },
    {
      id: 9,
      title: "Certificado de Office Intermedio",
      description: "Certificado de Office Intermedio otorgado por la Fundación Telefonica",
      image: "/Certificados/OfficeInt.png",
      date: "2025-02",
      category: "Certificado de Office Intermedio",
      unlocked: true
    }
  ];

  const unlockedCount = achievements.filter(a => a.unlocked).length;

  const openCertificate = (cert: Achievement) => {
    setSelectedCert(cert);
  };

  const closeCertificate = () => {
    setSelectedCert(null);
  };

  return (
    <div className="w-full space-y-6">
      <div className="scroll-reveal">
        <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold mb-4 flex items-center gap-3">
          🏆 Logros & Certificados
        </h3>
        <p className="text-[var(--white-icon)] text-sm md:text-base">
          Colección de certificados y logros obtenidos
        </p>
      </div>

      {/* Grid de Logros */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {achievements.map((achievement, index) => (
          <div
            key={achievement.id}
            onClick={() => openCertificate(achievement)}
            className="scroll-reveal-scale relative group rounded-xl overflow-hidden border-2 border-[var(--sec)] cursor-pointer hover:transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(164,118,255,0.3)] transition-all duration-300"
          >
            {/* Imagen */}
            <div className="relative aspect-square">
              <img 
                src={achievement.image} 
                alt={achievement.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>

              {/* Badge brillante */}
              <div className="absolute top-2 right-2">
                <div className="relative">
                  <div className="text-3xl animate-bounce-slow">🏆</div>
                  <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
              <div className="text-white font-bold text-sm mb-1 line-clamp-1">
                {achievement.title}
              </div>
              <div className="text-xs text-gray-300 line-clamp-2">
                {achievement.description}
              </div>
              <div className="text-xs text-[var(--sec)] mt-1">
                {new Date(achievement.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'short' })}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Lightbox */}
      {selectedCert && (
        <div className="fixed inset-0 z-[10100]" aria-hidden="false" onClick={closeCertificate}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
          
          {/* Contenedor centrado */}
          <div className="relative h-full w-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
            <div className="w-full max-w-4xl bg-[#0f0f0f] rounded-2xl border border-[var(--white-icon-tr)] shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-start justify-between p-4 border-b border-[#ffffff10]">
                <div className="flex-1 mr-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-4xl animate-bounce-slow">🏆</div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-semibold mb-1 text-[var(--white)]">
                        {selectedCert.title}
                      </h2>
                      <p className="text-sm text-[var(--white-icon)]">
                        {selectedCert.category} • {new Date(selectedCert.date).toLocaleDateString('es-ES', { 
                          year: 'numeric', 
                          month: 'long'
                        })}
                      </p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeCertificate}
                  className="text-[var(--white-icon)] hover:text-[var(--white)] transition p-2 flex-shrink-0"
                  aria-label="Cerrar"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M18.3 5.71L12 12.01l-6.3-6.3-1.41 1.41 6.3 6.3-6.3 6.3 1.41 1.41 6.3-6.3 6.29 6.29 1.41-1.41-6.29-6.29 6.29-6.29-1.41-1.41z"/>
                  </svg>
                </button>
              </div>

              {/* Imagen */}
              <div className="relative bg-black">
                <img 
                  src={selectedCert.image} 
                  alt={selectedCert.title}
                  className="w-full h-[55vh] object-contain"
                  style={{ minHeight: '400px' }}
                />
              </div>

              {/* Descripción */}
              <div className="p-4 border-t border-[#ffffff10]">
                <p className="text-[var(--white-icon)] text-center mb-4">
                  {selectedCert.description}
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <span className="px-4 py-2 bg-[var(--sec)] text-white rounded-lg text-sm font-semibold">
                    ✓ Verificado
                  </span>
                  <span className="px-4 py-2 border border-[var(--white-icon-tr)] text-[var(--white)] rounded-lg text-sm">
                    {selectedCert.category}
                  </span>
                  <span className="px-4 py-2 border border-[var(--white-icon-tr)] text-[var(--white-icon)] rounded-lg text-sm">
                    ID: #{selectedCert.id.toString().padStart(6, '0')}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AchievementsGallery;

