import { useState, useEffect } from "react";

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
  const [showUnlockAnimation, setShowUnlockAnimation] = useState(false);
  
  // Convertir achievements a estado para poder actualizarlos
  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: 1,
      title: "Maestro de Flutter",
      description: "Desarrolló aplicación móvil completa con Flutter y Firebase",
      image: "/AppComu/EquiposaCargo.png",
      date: "2024-09",
      category: "Mobile Development",
      unlocked: true
    },
    {
      id: 2,
      title: "Arquitecto de Sistemas",
      description: "Diseñó e implementó sistema de gestión empresarial",
      image: "/AppComu/PantallaGestor1.png",
      date: "2024-08",
      category: "Architecture",
      unlocked: true
    },
    {
      id: 3,
      title: "Experto en Rutas",
      description: "Implementó algoritmos de pathfinding para navegación",
      image: "/TravelEase/MapaHuancayo.png",
      date: "2024-06",
      category: "Algorithms",
      unlocked: true
    },
    {
      id: 4,
      title: "Ingeniero de IA",
      description: "Integró ML para reconocimiento de movimientos",
      image: "/EvoFit/EvoFit3.png",
      date: "2024-04",
      category: "Artificial Intelligence",
      unlocked: true
    },
    {
      id: 5,
      title: "Diseñador UI/UX",
      description: "Creó interfaces intuitivas y atractivas",
      image: "/AppComu/Perfil.png",
      date: "2024-03",
      category: "Design",
      unlocked: true
    },
    {
      id: 6,
      title: "Mago del Backend",
      description: "Construyó APIs robustas y escalables",
      image: "/EvoFit/EvoFit1.png",
      date: "2024-02",
      category: "Backend",
      unlocked: false
    }
  ]);

  const unlockedCount = achievements.filter(a => a.unlocked).length;

  useEffect(() => {
    // Desbloquear logros al explorar el portfolio
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      // Verificar si el logro del backend aún no está desbloqueado
      const backendAchievement = achievements.find(a => a.id === 6);
      if (scrollPercent > 80 && backendAchievement && !backendAchievement.unlocked) {
        unlockAchievement(6);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [achievements]); // Agregar achievements como dependencia

  const unlockAchievement = (id: number) => {
    const achievement = achievements.find(a => a.id === id);
    if (!achievement || achievement.unlocked) return; // Evitar desbloquear múltiples veces
    
    // Actualizar el estado de los logros
    setAchievements(prev => 
      prev.map(a => a.id === id ? { ...a, unlocked: true } : a)
    );
    
    setShowUnlockAnimation(true);
    setTimeout(() => setShowUnlockAnimation(false), 3000);
    
    // Mostrar notificación
    const notification = document.createElement('div');
    notification.className = 'achievement-unlock-notification';
    notification.innerHTML = `
      <div class="text-2xl mb-2">🏆</div>
      <div class="font-bold text-[var(--sec)]">¡Logro Desbloqueado!</div>
      <div class="text-sm text-[var(--white-icon)]">${achievement.title}</div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.remove(), 4000);
  };

  const openCertificate = (cert: Achievement) => {
    if (!cert.unlocked) return;
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeCertificate = () => {
    setSelectedCert(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="w-full space-y-6">
      <div>
        <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold mb-4 flex items-center gap-3">
          🏆 Logros & Certificados
          <span className="text-lg text-[var(--sec)]">
            ({unlockedCount}/{achievements.length})
          </span>
        </h3>
        <p className="text-[var(--white-icon)] text-sm md:text-base">
          Explora el portfolio para desbloquear todos los logros
        </p>
      </div>

      {/* Barra de progreso */}
      <div className="bg-[var(--card)] border border-[var(--white-icon-tr)] rounded-xl p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[var(--white)] font-semibold">Progreso de Exploración</span>
          <span className="text-[var(--sec)] font-bold">{Math.round((unlockedCount / achievements.length) * 100)}%</span>
        </div>
        <div className="h-3 bg-[var(--card-hover)] rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[var(--sec)] to-[#8a5dd6] rounded-full transition-all duration-1000 relative"
            style={{ width: `${(unlockedCount / achievements.length) * 100}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
          </div>
        </div>
      </div>

      {/* Grid de Logros */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {achievements.map((achievement, index) => (
          <div
            key={achievement.id}
            onClick={() => openCertificate(achievement)}
            className={`relative group rounded-xl overflow-hidden border-2 transition-all duration-300 ${
              achievement.unlocked
                ? 'border-[var(--sec)] cursor-pointer hover:transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(164,118,255,0.3)]'
                : 'border-[var(--white-icon-tr)] opacity-40 grayscale cursor-not-allowed'
            }`}
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
            }}
          >
            {/* Imagen */}
            <div className="relative aspect-square">
              <img 
                src={achievement.image} 
                alt={achievement.title}
                className={`w-full h-full object-cover ${achievement.unlocked ? 'group-hover:scale-110' : ''} transition-transform duration-500`}
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent ${achievement.unlocked ? 'opacity-70' : 'opacity-90'}`}></div>
              
              {/* Icono de bloqueo */}
              {!achievement.unlocked && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl animate-pulse">🔒</div>
                </div>
              )}

              {/* Badge brillante */}
              {achievement.unlocked && (
                <div className="absolute top-2 right-2">
                  <div className="relative">
                    <div className="text-3xl animate-bounce-slow">🏆</div>
                    <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black to-transparent">
              <div className="text-white font-bold text-sm mb-1 line-clamp-1">
                {achievement.title}
              </div>
              <div className="text-xs text-gray-300 line-clamp-2">
                {achievement.unlocked ? achievement.description : '???'}
              </div>
              {achievement.unlocked && (
                <div className="text-xs text-[var(--sec)] mt-1">
                  {new Date(achievement.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'short' })}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Modal Lightbox */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={closeCertificate}
        >
          <div 
            className="relative max-w-4xl w-full bg-[var(--background)] rounded-2xl overflow-hidden border-2 border-[var(--sec)] shadow-[0_0_50px_rgba(164,118,255,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header con brillo */}
            <div className="relative bg-gradient-to-r from-[var(--sec)] to-[#8a5dd6] p-6">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-shimmer"></div>
              <div className="relative flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <div className="text-5xl animate-bounce-slow">🏆</div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">
                      {selectedCert.title}
                    </div>
                    <div className="text-white/80 text-sm">
                      {selectedCert.category} • {new Date(selectedCert.date).toLocaleDateString('es-ES', { 
                        year: 'numeric', 
                        month: 'long'
                      })}
                    </div>
                  </div>
                </div>
                <button
                  onClick={closeCertificate}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white transition-all"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Imagen */}
            <div className="relative">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.title}
                className="w-full h-auto max-h-[60vh] object-contain bg-black/50"
              />
            </div>

            {/* Descripción */}
            <div className="p-6 bg-[var(--card)]">
              <p className="text-[var(--white-icon)] text-center">
                {selectedCert.description}
              </p>
              <div className="mt-4 flex justify-center gap-4">
                <span className="px-4 py-2 bg-[var(--sec)] text-white rounded-full text-sm font-semibold">
                  ✓ Verificado
                </span>
                <span className="px-4 py-2 bg-[var(--card-hover)] text-[var(--white)] rounded-full text-sm">
                  ID: #{selectedCert.id.toString().padStart(6, '0')}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AchievementsGallery;

