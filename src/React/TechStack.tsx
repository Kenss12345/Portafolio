import { useState } from "react";

interface TechSkill {
  name: string;
  level: number;
  category: string;
  icon: string;
}

const TechStack = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const techSkills: TechSkill[] = [
    // Frontend
    { name: "React", level: 85, category: "Frontend", icon: "/svg/react.svg" },
    { name: "TypeScript", level: 80, category: "Frontend", icon: "/svg/typeScript.svg" },
    { name: "HTML5", level: 90, category: "Frontend", icon: "/svg/HTML5.svg" },
    { name: "CSS3", level: 85, category: "Frontend", icon: "/svg/CSS3.svg" },
    { name: "JavaScript", level: 88, category: "Frontend", icon: "/svg/javaScript.svg" },
    { name: "Tailwind", level: 82, category: "Frontend", icon: "/svg/tailwindcss.svg" },
    { name: "Angular", level: 75, category: "Frontend", icon: "/svg/angular.svg" },
    { name: "Astro", level: 78, category: "Frontend", icon: "/svg/astro.svg" },
    
    // Backend
    { name: "Node.js", level: 80, category: "Backend", icon: "/svg/nodejs.svg" },
    { name: "Python", level: 82, category: "Backend", icon: "/svg/python.svg" },
    { name: "C++", level: 75, category: "Backend", icon: "/svg/C++.svg" },
    { name: "C#", level: 70, category: "Backend", icon: "/svg/C Sharp.svg" },
    
    // Mobile
    { name: "Flutter", level: 80, category: "Mobile", icon: "/svg/flutter.svg" },
    { name: "Dart", level: 78, category: "Mobile", icon: "/svg/dart.svg" },
    { name: "Swift", level: 65, category: "Mobile", icon: "/svg/swift.svg" },
    
    // Database
    { name: "MongoDB", level: 77, category: "Database", icon: "/svg/mongodb.svg" },
    { name: "MySQL", level: 80, category: "Database", icon: "/svg/mysql.svg" },
    { name: "Firebase", level: 82, category: "Database", icon: "/svg/firebase.svg" },
    
    // Tools
    { name: "Git", level: 85, category: "Tools", icon: "/svg/git.svg" },
    { name: "GitHub", level: 83, category: "Tools", icon: "/svg/Git Hub.svg" },
    { name: "VS Code", level: 90, category: "Tools", icon: "/svg/visual studio code.svg" },
  ];

  const categories = ["All", "Frontend", "Backend", "Mobile", "Database", "Tools"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = activeCategory === "All" 
    ? techSkills 
    : techSkills.filter(skill => skill.category === activeCategory);

  return (
    <div className="w-full space-y-6">
      <div>
        <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold mb-4">
          Stack Tecnológico
        </h3>
        <p className="text-[var(--white-icon)] text-sm md:text-base">
          Mis habilidades y nivel de experiencia en diferentes tecnologías
        </p>
      </div>

      {/* Filtros de categoría */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
              activeCategory === category
                ? "bg-[var(--sec)] border-[var(--sec)] text-white"
                : "bg-[var(--card)] border-[var(--white-icon-tr)] text-[var(--white-icon)] hover:border-[var(--sec)] hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid de habilidades con barras de progreso */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredSkills.map((skill, index) => (
          <div
            key={skill.name}
            className={`group bg-[var(--card)] border border-[var(--white-icon-tr)] rounded-xl p-4 hover:border-[var(--sec)] transition-all duration-300 cursor-pointer ${
              selectedTech === skill.name ? "ring-2 ring-[var(--sec)]" : ""
            }`}
            onClick={() => setSelectedTech(selectedTech === skill.name ? null : skill.name)}
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.05}s both`
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[var(--card-hover)] flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                  <img 
                    src={skill.icon} 
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-[var(--white)] font-semibold">{skill.name}</h4>
                  <span className="text-xs text-[var(--white-icon)]">{skill.category}</span>
                </div>
              </div>
              <span className="text-[var(--sec)] font-bold text-lg">{skill.level}%</span>
            </div>
            
            {/* Barra de progreso animada */}
            <div className="relative h-2 bg-[var(--card-hover)] rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[var(--sec)] to-[#8a5dd6] rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: selectedTech === skill.name || activeCategory !== "All" ? `${skill.level}%` : "0%",
                  animation: activeCategory !== "All" ? `growWidth 1s ease-out ${index * 0.05}s both` : "none"
                }}
              >
                {/* Efecto de brillo en la barra */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Radar Chart (Spider Chart) simplificado */}
      <div className="bg-[var(--card)] border border-[var(--white-icon-tr)] rounded-2xl p-6">
        <h4 className="text-[var(--white)] text-xl font-semibold mb-4 text-center">
          Resumen de Habilidades por Categoría
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {categories.slice(1).map((category) => {
            const categorySkills = techSkills.filter(s => s.category === category);
            const avgLevel = Math.round(
              categorySkills.reduce((acc, s) => acc + s.level, 0) / categorySkills.length
            );
            
            return (
              <div key={category} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-2">
                  {/* Círculo de fondo */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="var(--card-hover)"
                      strokeWidth="8"
                      fill="none"
                    />
                    {/* Círculo de progreso */}
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="var(--sec)"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${(avgLevel / 100) * 251.2} 251.2`}
                      className="transition-all duration-1000 ease-out"
                      style={{
                        filter: "drop-shadow(0 0 8px rgba(164, 118, 255, 0.5))"
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[var(--white)] font-bold text-lg">{avgLevel}%</span>
                  </div>
                </div>
                <p className="text-[var(--white-icon)] text-sm font-medium">{category}</p>
                <p className="text-xs text-[var(--white-icon)] opacity-60">{categorySkills.length} skills</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TechStack;

