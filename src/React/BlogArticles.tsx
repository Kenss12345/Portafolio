import { useState } from "react";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: number;
  tags: string[];
  image: string;
}

const BlogArticles = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [readProgress, setReadProgress] = useState(0);

  const articles: Article[] = [
    {
      id: 1,
      title: "Construyendo Apps Móviles con Flutter",
      excerpt: "Mi experiencia desarrollando aplicaciones multiplataforma con Flutter y Firebase.",
      content: `En este artículo compartiré mi experiencia desarrollando aplicaciones móviles con Flutter...
      
Flutter es un framework increíble que me ha permitido crear aplicaciones para iOS y Android con una sola base de código. Durante el desarrollo de AppComu, aprendí sobre:

• Gestión de estado con Provider y Riverpod
• Integración con Firebase para autenticación y base de datos
• Optimización de rendimiento en listas largas
• Diseño responsive y adaptativo

Una de las características más poderosas es el hot reload, que acelera significativamente el desarrollo. También destaco la amplia biblioteca de widgets que facilita la creación de interfaces atractivas.

Los desafíos principales fueron la integración con APIs nativas y la gestión de permisos en diferentes plataformas. Sin embargo, la documentación oficial y la comunidad activa hicieron que superar estos obstáculos fuera más sencillo.`,
      date: "2025-01-15",
      readTime: 5,
      tags: ["Flutter", "Mobile", "Firebase"],
      image: "/AppComu/EquiposaCargo.png"
    },
    {
      id: 2,
      title: "Optimización de Algoritmos en C++",
      excerpt: "Técnicas avanzadas de optimización y estructuras de datos para mejorar el rendimiento.",
      content: `La optimización de código es crucial para aplicaciones de alto rendimiento...

Durante el desarrollo de TravelEase, implementé varios algoritmos de búsqueda de rutas. Aquí comparto las técnicas que utilicé:

• Algoritmos de grafos (Dijkstra y A*)
• Estructuras de datos eficientes (heaps, hash maps)
• Uso de punteros inteligentes para gestión de memoria
• Programación orientada a objetos con templates

La clave está en elegir la estructura de datos correcta para cada problema. Por ejemplo, usar un priority_queue para el algoritmo de Dijkstra redujo el tiempo de ejecución en un 40%.

También aprendí sobre profiling y análisis de complejidad temporal, herramientas esenciales para identificar cuellos de botella en el código.`,
      date: "2024-12-20",
      readTime: 7,
      tags: ["C++", "Algorithms", "Performance"],
      image: "/TravelEase/MapaHuancayo.png"
    },
    {
      id: 3,
      title: "IA y Reconocimiento de Movimientos",
      excerpt: "Implementando visión por computadora con Python para detectar ejercicios físicos.",
      content: `El proyecto EvoFit me permitió explorar el fascinante mundo de la inteligencia artificial...

Utilizando MediaPipe y TensorFlow, desarrollé un sistema que puede:

• Detectar poses corporales en tiempo real
• Validar la correcta ejecución de ejercicios
• Contar repeticiones automáticamente
• Proporcionar feedback instantáneo

La parte más desafiante fue lograr precisión en diferentes condiciones de iluminación y ángulos de cámara. La solución involucró:

- Normalización de datos de entrada
- Uso de modelos pre-entrenados
- Fine-tuning con datos específicos del dominio
- Implementación de filtros para suavizar detecciones

El resultado es una aplicación que puede ayudar a usuarios a realizar ejercicios de manera segura y efectiva desde casa.`,
      date: "2024-11-10",
      readTime: 6,
      tags: ["Python", "AI", "Computer Vision"],
      image: "/EvoFit/EvoFit3.png"
    }
  ];

  const openArticle = (article: Article) => {
    setSelectedArticle(article);
    setReadProgress(0);
    document.body.style.overflow = 'hidden';
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    setReadProgress(0);
    document.body.style.overflow = '';
  };

  // Simular progreso de lectura
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight - element.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    setReadProgress(Math.min(progress, 100));
  };

  return (
    <div className="w-full space-y-6">
      <div>
        <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold mb-4">
          📝 Blog & Artículos
        </h3>
        <p className="text-[var(--white-icon)] text-sm md:text-base">
          Experiencias, aprendizajes y tutoriales técnicos
        </p>
      </div>

      {/* Grid de Artículos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <article
            key={article.id}
            className="group bg-[var(--card)] border border-[var(--white-icon-tr)] rounded-xl overflow-hidden hover:border-[var(--sec)] transition-all duration-300 cursor-pointer hover:transform hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(164,118,255,0.2)]"
            onClick={() => openArticle(article)}
            style={{
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
            }}
          >
            {/* Imagen */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex gap-2 flex-wrap">
                  {article.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-[var(--sec)] text-white text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div className="p-4 space-y-3">
              <h4 className="text-[var(--white)] text-lg font-semibold line-clamp-2 group-hover:text-[var(--sec)] transition-colors">
                {article.title}
              </h4>
              <p className="text-[var(--white-icon)] text-sm line-clamp-3">
                {article.excerpt}
              </p>
              
              {/* Meta info */}
              <div className="flex items-center justify-between text-xs text-[var(--white-icon)] pt-2 border-t border-[var(--white-icon-tr)]">
                <span className="flex items-center gap-1">
                  📅 {new Date(article.date).toLocaleDateString('es-ES', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-1">
                  ⏱️ {article.readTime} min
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Modal de Artículo */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          {/* Barra de progreso de lectura */}
          <div className="fixed top-0 left-0 right-0 h-1 bg-[var(--card)] z-[10001]">
            <div 
              className="h-full bg-gradient-to-r from-[var(--sec)] to-[#8a5dd6] transition-all duration-100"
              style={{ width: `${readProgress}%` }}
            />
          </div>

          <div className="relative w-full max-w-4xl bg-[var(--background)] rounded-2xl border border-[var(--white-icon-tr)] shadow-2xl max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="sticky top-0 bg-[var(--card)] backdrop-blur-lg border-b border-[var(--white-icon-tr)] p-6 z-10">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {selectedArticle.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-[var(--sec)] text-white text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[var(--white)] mb-2">
                    {selectedArticle.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-[var(--white-icon)]">
                    <span>📅 {new Date(selectedArticle.date).toLocaleDateString('es-ES', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                    <span>⏱️ {selectedArticle.readTime} min de lectura</span>
                    <span className="ml-auto">📊 {Math.round(readProgress)}% leído</span>
                  </div>
                </div>
                <button
                  onClick={closeArticle}
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-[var(--card-hover)] hover:bg-[var(--sec)] text-[var(--white-icon)] hover:text-white transition-all"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Contenido */}
            <div 
              className="p-6 overflow-y-auto"
              style={{ maxHeight: 'calc(90vh - 180px)' }}
              onScroll={handleScroll}
            >
              <img 
                src={selectedArticle.image} 
                alt={selectedArticle.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <div className="prose prose-invert max-w-none">
                <div className="text-[var(--white-icon)] text-base leading-relaxed whitespace-pre-line">
                  {selectedArticle.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogArticles;

