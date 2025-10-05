import { useState } from "react";

const NowSection = () => {
  const lastUpdated = "5 de Octubre, 2025";

  const learning = [
    {
      title: "Inteligencia Artificial",
      description: "Profundizando en ML y redes neuronales",
      progress: 65,
      icon: "🤖"
    },
    {
      title: "Arquitectura Cloud",
      description: "AWS y diseño de sistemas escalables",
      progress: 50,
      icon: "☁️"
    },
    {
      title: "Web3 & Blockchain",
      description: "Smart contracts y desarrollo descentralizado",
      progress: 40,
      icon: "⛓️"
    }
  ];

  const currentProjects = [
    {
      title: "Portfolio Interactivo",
      description: "Este mismo proyecto que estás viendo",
      status: "En desarrollo",
      image: "/perfil.png",
      tech: ["Astro", "React", "TypeScript", "Tailwind"]
    },
    {
      title: "App de Gestión Comunitaria",
      description: "Sistema de gestión para comunidades y equipos",
      status: "Completado",
      image: "/AppComu/PantallaGestor1.png",
      tech: ["Flutter", "Firebase", "Dart"]
    },
    {
      title: "Sistema de Navegación",
      description: "App de rutas inteligentes para Huancayo",
      status: "Completado",
      image: "/TravelEase/MapaHuancayo.png",
      tech: ["Flutter", "Google Maps API", "Pathfinding"]
    }
  ];

  return (
    <div className="w-full space-y-8">
      <div className="space-y-2">
        <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold flex items-center gap-3">
          📍 Ahora
        </h3>
        <p className="text-[var(--white-icon)] text-sm md:text-base">
          Una instantánea de lo que estoy haciendo actualmente
        </p>
        <p className="text-[var(--sec)] text-xs">
          Última actualización: {lastUpdated}
        </p>
      </div>

      {/* Qué estoy aprendiendo */}
      <div className="space-y-4">
        <h4 className="text-[var(--white)] text-xl font-semibold">
          📚 Aprendiendo
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {learning.map((item, index) => (
            <div
              key={index}
              className="bg-[var(--card)] border border-[var(--white-icon-tr)] rounded-xl p-4 hover:border-[var(--sec)] transition-all duration-300 hover:transform hover:-translate-y-1"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">{item.icon}</span>
                <div className="flex-1">
                  <h5 className="text-[var(--white)] font-semibold text-sm mb-1">
                    {item.title}
                  </h5>
                  <p className="text-[var(--white-icon)] text-xs">
                    {item.description}
                  </p>
                </div>
              </div>
              {/* Progress bar */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-[var(--white-icon)]">Progreso</span>
                  <span className="text-[var(--sec)] font-bold">{item.progress}%</span>
                </div>
                <div className="h-2 bg-[var(--card-hover)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[var(--sec)] to-[#c084ff] rounded-full transition-all duration-1000"
                    style={{ width: `${item.progress}%` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Proyectos en progreso */}
      <div className="space-y-4">
        <h4 className="text-[var(--white)] text-xl font-semibold">
          🚀 Proyectos Recientes
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[var(--card)] border border-[var(--white-icon-tr)] rounded-xl overflow-hidden hover:border-[var(--sec)] transition-all duration-300 hover:transform hover:-translate-y-1 group"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1 + 0.3}s both`
              }}
            >
              {/* Imagen */}
              <div className="relative h-40 overflow-hidden bg-[var(--card-hover)]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === "En desarrollo"
                      ? "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                      : "bg-green-500/20 text-green-300 border border-green-500/30"
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-4 space-y-3">
                <div>
                  <h5 className="text-[var(--white)] font-semibold text-base mb-1">
                    {project.title}
                  </h5>
                  <p className="text-[var(--white-icon)] text-xs">
                    {project.description}
                  </p>
                </div>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-[var(--card-hover)] border border-[var(--white-icon-tr)] rounded text-xs text-[var(--white-icon)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nota personal */}
      <div className="bg-gradient-to-r from-[var(--sec)]/10 to-transparent border-l-4 border-[var(--sec)] rounded-r-xl p-4">
        <p className="text-[var(--white-icon)] italic text-sm">
          💡 <strong className="text-[var(--white)]">Filosofía actual:</strong> "Construyendo proyectos que importan, 
          aprendiendo algo nuevo cada día, y compartiendo el conocimiento con la comunidad."
        </p>
      </div>
    </div>
  );
};

export default NowSection;

