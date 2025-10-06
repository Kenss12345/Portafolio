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
      title: "Construyendo Apps Móviles y Web con Flutter",
      excerpt: "Mi experiencia desarrollando aplicaciones multiplataforma con Flutter y Firebase.",
      content: `En este artículo compartiré mi experiencia desarrollando aplicaciones móviles con Flutter, un framework que ha revolucionado completamente la forma en que creo aplicaciones multiplataforma.

🚀 ¿Por qué Flutter?

Flutter es un framework increíble desarrollado por Google que me ha permitido crear aplicaciones para iOS, Android y Web con una sola base de código. Durante el desarrollo de AppComu, descubrí el verdadero potencial de esta tecnología.

La principal ventaja es la productividad: escribes el código una vez y funciona en múltiples plataformas sin necesidad de mantener bases de código separadas. Esto no solo ahorra tiempo, sino que también reduce significativamente los errores y facilita el mantenimiento.

📚 Conceptos Clave que Dominas

Durante mi aprendizaje y desarrollo con Flutter, profundicé en varios conceptos fundamentales:

• Gestión de estado con Provider y Riverpod: Aprendí a manejar el estado de la aplicación de manera eficiente, evitando re-renders innecesarios y manteniendo el código limpio y organizado.

• Integración con Firebase: Implementé autenticación completa (email/password, Google Sign-In), base de datos en tiempo real con Firestore, y almacenamiento de archivos con Firebase Storage.

• Optimización de rendimiento: Utilicé ListView.builder para listas largas, implementé lazy loading de imágenes, y optimicé las consultas a la base de datos.

• Diseño responsive y adaptativo: Creé interfaces que se adaptan perfectamente a diferentes tamaños de pantalla, desde smartphones hasta tablets.

⚡ El Poder del Hot Reload

Una de las características más poderosas es el hot reload. Esta funcionalidad te permite ver los cambios en tiempo real sin perder el estado de la aplicación. Es como magia: modificas el código, guardas, y en menos de un segundo ves el resultado en tu dispositivo o emulador.

Esto acelera significativamente el desarrollo y hace que la experiencia de programar sea mucho más fluida y agradable. Ya no necesitas recompilar toda la aplicación cada vez que haces un pequeño cambio.

🎨 Widgets: Los Bloques de Construcción

Flutter destaca por su amplia biblioteca de widgets prediseñados. Desde botones básicos hasta componentes complejos como listas infinitas o animaciones elaboradas, Flutter tiene un widget para casi todo.

Los widgets en Flutter son componentes reutilizables que puedes combinar para crear interfaces complejas. Además, la personalización es muy sencilla: puedes modificar colores, tamaños, formas y comportamientos con solo unas pocas líneas de código.

🔧 Desafíos Superados

Como en todo proyecto, enfrenté varios desafíos:

1. Integración con APIs nativas: Algunos servicios requieren código nativo específico para cada plataforma. Aprendí a usar platform channels para comunicar Flutter con código Kotlin/Swift.

2. Gestión de permisos: Cada plataforma (iOS y Android) maneja los permisos de manera diferente. Implementé soluciones robustas usando el paquete permission_handler.

3. Optimización de tamaño de la app: Las aplicaciones Flutter pueden ser pesadas. Aprendí técnicas como tree shaking, compilación en modo release, y división de código para reducir el tamaño final.

4. Testing: Implementé pruebas unitarias, de widgets y de integración para garantizar la calidad del código.

💡 Lecciones Aprendidas

Después de desarrollar AppComu con Flutter, puedo decir que:

• La curva de aprendizaje inicial vale completamente la pena
• La documentación oficial es excelente y muy completa
• La comunidad es activa y siempre está dispuesta a ayudar
• Es ideal para startups y proyectos que necesitan lanzarse rápido
• El rendimiento es casi nativo en la mayoría de los casos

🎯 Conclusión

Flutter no es solo un framework más, es una herramienta que realmente cambia la forma en que desarrollas aplicaciones móviles. Si estás considerando aprender desarrollo móvil o buscas una alternativa a desarrollo nativo, Flutter es una excelente opción.

La combinación de Flutter con Firebase crea un ecosistema completo y poderoso para desarrollar aplicaciones modernas. Desde la autenticación hasta el almacenamiento y las notificaciones push, todo está perfectamente integrado.

¿Mi recomendación? Si tienes conocimientos de programación orientada a objetos y quieres entrar al mundo del desarrollo móvil, Flutter es tu mejor opción para 2025.`,
      date: "2025-01-15",
      readTime: 8,
      tags: ["Flutter", "Mobile", "Firebase"],
      image: "/BlogArticles/FlutterFirebase.png"
    },
    {
      id: 2,
      title: "Optimización de Algoritmos en C++",
      excerpt: "Técnicas avanzadas de optimización y estructuras de datos para mejorar el rendimiento.",
      content: `La optimización de código es crucial para aplicaciones de alto rendimiento, y en este artículo compartiré mi experiencia optimizando algoritmos complejos durante el desarrollo de TravelEase, una aplicación de rutas inteligentes.

🎯 El Reto: Búsqueda de Rutas en Tiempo Real

TravelEase necesitaba encontrar rutas óptimas entre dos puntos en la ciudad de Huancayo en tiempo real. Con cientos de intersecciones, calles y posibles rutas, la eficiencia era crítica. Un algoritmo lento significaría usuarios frustrados esperando respuestas.

El desafío era doble: encontrar no solo la ruta más corta, sino también considerar el tráfico en tiempo real, el tipo de transporte disponible, y las preferencias del usuario.

🧠 Algoritmos de Grafos: El Corazón del Sistema

Implementé dos algoritmos principales:

1. Dijkstra: Para encontrar la ruta más corta desde un punto origen a todos los demás puntos del grafo. Es el algoritmo clásico, confiable y eficiente cuando no tenemos información sobre la ubicación del destino.

2. A* (A-Star): Una versión mejorada de Dijkstra que usa heurísticas para dirigir la búsqueda hacia el objetivo. En la práctica, A* es significativamente más rápido porque "sabe" en qué dirección buscar.

La diferencia de rendimiento fue sorprendente: mientras Dijkstra exploraba en promedio 500 nodos para encontrar una ruta, A* solo necesitaba explorar 150-200 nodos gracias a su función heurística bien diseñada.

📊 Estructuras de Datos: La Clave del Rendimiento

La elección de estructuras de datos adecuadas marcó una diferencia dramática en el rendimiento:

• Priority Queue (Heap): Fundamental para los algoritmos de búsqueda. Me permitió extraer el nodo con menor costo en O(log n) en lugar de O(n) con una lista simple. Esto redujo el tiempo de ejecución en un 40%.

• Unordered Map (Hash Map): Para acceso rápido a los nodos del grafo en O(1) promedio. Cada nodo representa una intersección y necesitaba acceso constante a su información.

• Vector con reserva de memoria: En lugar de usar push_back sin reserva, prealoqué memoria para evitar reasignaciones constantes. Esto mejoró el rendimiento en un 15% adicional.

• Sets ordenados: Para mantener los nodos visitados y evitar ciclos infinitos en el grafo.

🔍 Técnicas de Optimización Aplicadas

1. Punteros Inteligentes (Smart Pointers)
En lugar de manejar memoria manualmente con new/delete, utilicé:
• std::unique_ptr para ownership exclusivo
• std::shared_ptr cuando varios componentes necesitaban acceder al mismo nodo
• std::weak_ptr para evitar ciclos de referencias

Esto eliminó completamente los memory leaks y simplificó el código.

2. Templates para Genericidad
Implementé templates para que los algoritmos funcionaran con diferentes tipos de grafos y pesos (distancia, tiempo, costo). Esto permitió reutilizar el mismo código para diferentes escenarios.

3. Move Semantics
Aproveché std::move para transferir recursos pesados en lugar de copiarlos. Esto fue especialmente útil al manejar grafos grandes.

4. Inline Functions
Marqué funciones pequeñas y frecuentes como inline para eliminar el overhead de llamadas a función.

⚡ Profiling: Midiendo el Rendimiento Real

Usé herramientas de profiling como:

• Valgrind: Para detectar memory leaks y analizar el uso de memoria
• gprof: Para identificar qué funciones consumían más tiempo
• Perf: Para análisis detallado a nivel de CPU

El profiling reveló sorpresas: funciones que pensaba eran rápidas resultaron ser cuellos de botella, y optimizaciones que creía importantes apenas afectaban el rendimiento.

📈 Análisis de Complejidad Temporal

Entender la complejidad es fundamental:

• Dijkstra sin optimización: O(V²) donde V es el número de vértices
• Dijkstra con priority queue: O((V + E) log V) donde E son las aristas
• A* optimizado: O(E log V) en el caso promedio

Para un grafo de 500 intersecciones y 1500 calles:
• Versión sin optimizar: ~250,000 operaciones
• Versión optimizada: ~11,000 operaciones
• ¡Una mejora de más del 95%!

🛠️ Optimizaciones Específicas del Dominio

1. Caché de Rutas Frecuentes
Implementé un sistema de caché LRU para almacenar las 100 rutas más consultadas. Si un usuario pide la ruta del punto A al B y ya la calculamos recientemente, la servimos del caché.

2. Precálculo de Distancias
Para ubicaciones populares (universidades, centros comerciales), precalculé las distancias en horarios de baja carga del servidor.

3. Índices Espaciales
Usé un quadtree para búsquedas espaciales rápidas. Cuando un usuario busca transporte cerca de su ubicación, el quadtree encuentra las opciones cercanas en O(log n) en lugar de revisar todas.

💡 Lecciones Aprendidas

1. "Primero hazlo funcionar, luego hazlo rápido": No optimices prematuramente. Primero implementa correctamente el algoritmo.

2. Mide antes de optimizar: Lo que crees que es lento puede no serlo. Usa profilers.

3. La estructura de datos correcta puede ser más importante que el algoritmo: Un algoritmo O(n log n) con una estructura de datos eficiente puede superar a un algoritmo O(n) con estructuras ineficientes.

4. La memoria importa: Un algoritmo rápido pero que consume mucha memoria puede ser peor que uno más lento pero eficiente en memoria, especialmente en dispositivos móviles.

🎯 Resultados Finales

Las optimizaciones llevaron a:
• Tiempo de respuesta: De 2-3 segundos a menos de 200ms
• Uso de memoria: Reducción del 60%
• Capacidad: El servidor puede manejar 10x más usuarios simultáneos
• Batería: Menor consumo en dispositivos móviles

La combinación de algoritmos inteligentes, estructuras de datos eficientes, y técnicas modernas de C++ resultó en una aplicación rápida, eficiente y escalable que puede crecer con las necesidades del proyecto.`,
      date: "2024-12-20",
      readTime: 9,
      tags: ["C++", "Algorithms", "Performance"],
      image: "/BlogArticles/Djistra.png"
    },
    {
      id: 3,
      title: "IA y Reconocimiento de Movimientos",
      excerpt: "Implementando visión por computadora con Python para detectar ejercicios físicos.",
      content: `El proyecto EvoFit me permitió explorar el fascinante mundo de la inteligencia artificial aplicada al fitness, creando un sistema que actúa como entrenador personal virtual usando visión por computadora.

🎯 La Visión: Tu Entrenador Personal con IA

La idea surgió de una necesidad real: muchas personas quieren hacer ejercicio en casa pero no tienen acceso a un entrenador que les corrija la técnica. Una mala ejecución no solo reduce la efectividad del ejercicio, sino que puede causar lesiones.

EvoFit usa la cámara de tu dispositivo para analizar tus movimientos en tiempo real, validar si estás haciendo el ejercicio correctamente, contar repeticiones automáticamente, y darte feedback inmediato para mejorar tu técnica.

🧠 Tecnologías y Librerías Utilizadas

Para este proyecto, elegí un stack tecnológico potente y bien establecido:

1. MediaPipe de Google: Una librería increíble para detección de poses que incluye modelos pre-entrenados altamente precisos. MediaPipe puede detectar 33 puntos clave del cuerpo humano (landmarks) en tiempo real.

2. TensorFlow y Keras: Para construir modelos personalizados que clasifican si un ejercicio se está realizando correctamente o no.

3. OpenCV: Para procesamiento de video, captura de frames, y visualización de los puntos detectados.

4. NumPy y Pandas: Para manipulación eficiente de datos y cálculos matemáticos.

🎨 Características Principales del Sistema

El sistema que desarrollé incluye varias capacidades sofisticadas:

• Detección de Poses en Tiempo Real: El modelo de MediaPipe procesa cada frame del video y detecta la posición exacta de 33 puntos del cuerpo (hombros, codos, muñecas, caderas, rodillas, tobillos, etc.) en menos de 50ms.

• Validación de Técnica: Analiza los ángulos entre articulaciones y la posición relativa de los puntos clave para determinar si estás haciendo el ejercicio correctamente. Por ejemplo, en una sentadilla, valida que tus rodillas no pasen los dedos de los pies y que tu espalda esté recta.

• Contador Automático de Repeticiones: Usa máquinas de estado para detectar el ciclo completo de un ejercicio (posición inicial → ejecución → vuelta a posición inicial). Solo cuenta repeticiones correctamente ejecutadas.

• Feedback en Tiempo Real: Muestra indicadores visuales en pantalla cuando detecta errores comunes: "Espalda más recta", "Baja más las caderas", "Extiende completamente los brazos", etc.

• Tracking de Progreso: Guarda tu historial de entrenamientos, número de repeticiones, tiempo de ejercicio, y calorías quemadas estimadas.

⚡ Desafíos Técnicos y Soluciones

El desarrollo no fue sencillo. Enfrenté varios desafíos significativos:

1. Diferentes Condiciones de Iluminación
Problema: MediaPipe funciona perfectamente en condiciones ideales, pero en ambientes con poca luz o luz irregular, la detección fallaba.

Solución: Implementé un preprocesamiento de imagen que ajusta automáticamente el brillo y contraste usando técnicas de ecualización de histograma. También agregué filtros de suavizado para reducir el ruido.

2. Variabilidad de Ángulos de Cámara
Problema: La detección de poses es muy sensible al ángulo de la cámara. Una cámara muy alta o muy baja puede dificultar la detección de ciertos puntos.

Solución: Entrené al sistema para que funcione desde múltiples ángulos. También agregué una guía inicial que ayuda al usuario a posicionar correctamente la cámara usando una silueta de referencia.

3. Normalización de Datos
Problema: Las coordenadas de los landmarks varían según la distancia del usuario a la cámara y el tamaño del frame.

Solución: Normalicé todos los puntos usando la distancia entre hombros como referencia. Esto hace que el sistema sea invariante al tamaño y posición del usuario en el frame.

4. Modelos Pre-entrenados vs Personalizados
Problema: Los modelos pre-entrenados de MediaPipe son excelentes para detección de poses generales, pero no están optimizados para ejercicios específicos.

Solución: Utilicé transfer learning. Tomé el modelo base de MediaPipe y le agregué capas personalizadas entrenadas específicamente con videos de ejercicios correctos e incorrectos. Esto mejoró la precisión en un 30%.

5. Suavizado de Detecciones
Problema: La detección frame por frame puede ser ruidosa, causando que los puntos "tiemblen" incluso cuando el usuario está quieto.

Solución: Implementé un filtro de Kalman para suavizar las trayectorias de los puntos clave. También usé un filtro de mediana móvil para eliminar detecciones anómalas (outliers).

📊 Pipeline de Procesamiento

El flujo completo del sistema es:

1. Captura de Video: OpenCV captura frames a 30 FPS
2. Detección de Poses: MediaPipe procesa cada frame y extrae los 33 landmarks
3. Normalización: Los puntos se normalizan para ser invariantes a escala y posición
4. Filtrado: Aplicación de filtros de suavizado
5. Análisis de Ángulos: Cálculo de ángulos entre articulaciones clave
6. Clasificación: El modelo de TensorFlow determina si la pose es correcta
7. Feedback: El sistema genera retroalimentación visual y auditiva
8. Actualización de Estado: Si se completó una repetición correctamente, se incrementa el contador

🎓 Técnicas de Machine Learning Aplicadas

Para el componente de clasificación de ejercicios, implementé:

• Red Neuronal Convolucional (CNN): Para clasificar secuencias de poses como "correctas" o "incorrectas"
• LSTM (Long Short-Term Memory): Para analizar la secuencia temporal de movimientos y detectar patrones
• Ensemble Learning: Combiné múltiples modelos para mejorar la precisión general
• Data Augmentation: Generé variaciones artificiales de los datos de entrenamiento (rotaciones, flips, cambios de escala) para hacer el modelo más robusto

🧪 Entrenamiento del Modelo

El proceso de entrenamiento fue iterativo:

1. Recolección de Datos: Grabé videos de personas haciendo ejercicios correcta e incorrectamente. En total, recopilé más de 2,000 videos de diferentes ejercicios.

2. Etiquetado: Cada video fue etiquetado manualmente indicando si la ejecución era correcta y qué errores específicos contenía.

3. Extracción de Features: Procesé cada video con MediaPipe para extraer las secuencias de landmarks.

4. División de Datos: 70% para entrenamiento, 15% para validación, 15% para testing.

5. Entrenamiento: Usé técnicas de regularización (dropout, L2) para evitar overfitting. El entrenamiento tomó aproximadamente 8 horas en una GPU NVIDIA.

6. Evaluación: Alcancé una precisión del 94% en el conjunto de test, con un recall del 92% para detección de ejercicios incorrectos.

💡 Ejercicios Implementados

El sistema actualmente soporta:
• Sentadillas (Squats)
• Flexiones de pecho (Push-ups)
• Abdominales (Crunches)
• Planchas (Planks)
• Estocadas (Lunges)
• Elevaciones laterales (Lateral raises)

Cada ejercicio tiene su propio modelo de validación con reglas específicas sobre ángulos y posiciones correctas.

🎯 Resultados e Impacto

Los resultados han sido impresionantes:

• Precisión de Detección: 94% en condiciones normales, 89% en condiciones desafiantes
• Latencia: Menos de 50ms por frame (procesamiento en tiempo real)
• Satisfacción de Usuarios: 4.7/5 estrellas en pruebas beta
• Reducción de Lesiones: Los usuarios reportan mejor técnica y menos molestias

El sistema ha demostrado ser especialmente útil para principiantes que están aprendiendo la técnica correcta y para usuarios avanzados que quieren mantener su forma durante entrenamientos de alta intensidad.

🔮 Futuro del Proyecto

Las próximas mejoras incluyen:

• Soporte para más ejercicios (sentadilla búlgara, peso muerto, etc.)
• Integración con wearables para datos de frecuencia cardíaca
• Modo de entrenamiento personalizado con rutinas generadas por IA
• Análisis de video post-entrenamiento con gráficos de ángulos y trayectorias
• Modo multiplayer para entrenar con amigos
• Exportación de datos para análisis biomecánico profesional

La combinación de visión por computadora, machine learning, y procesamiento en tiempo real ha creado una herramienta poderosa para democratizar el acceso a entrenamiento de calidad. EvoFit demuestra cómo la IA puede ser aplicada de manera práctica para resolver problemas reales y mejorar la vida de las personas.`,
      date: "2024-11-10",
      readTime: 10,
      tags: ["Python", "AI", "Computer Vision"],
      image: "/BlogArticles/IAFitness.png"
    }
  ];

  const openArticle = (article: Article) => {
    setSelectedArticle(article);
    setReadProgress(0);
    // Ocultar navegación y scrollbar
    const nav = document.getElementById('main-nav');
    if (nav) nav.style.display = 'none';
    document.body.style.overflow = 'hidden';
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    setReadProgress(0);
    // Mostrar navegación y scrollbar
    const nav = document.getElementById('main-nav');
    if (nav) nav.style.display = 'flex';
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
          Blog & Artículos
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
        <div className="fixed inset-0 z-[10200]" aria-hidden="false" onClick={closeArticle}>
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
          
          {/* Barra de progreso de lectura */}
          <div className="fixed top-0 left-0 right-0 h-1 bg-[var(--card)] z-10">
            <div 
              className="h-full bg-gradient-to-r from-[var(--sec)] to-[#8a5dd6] transition-all duration-100"
              style={{ width: `${readProgress}%` }}
            />
          </div>

          {/* Contenedor centrado */}
          <div className="relative h-full w-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
            <div className="w-full max-w-4xl bg-[#0f0f0f] rounded-2xl border border-[var(--white-icon-tr)] shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="flex items-start justify-between p-4 border-b border-[#ffffff10]">
                <div className="flex-1 mr-4">
                  <div className="flex gap-2 mb-3 flex-wrap">
                    {selectedArticle.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-[var(--sec)] text-white text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-semibold mb-2 text-[var(--white)]">
                    {selectedArticle.title}
                  </h2>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--white-icon)]">
                    <span>📅 {new Date(selectedArticle.date).toLocaleDateString('es-ES', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                    <span>⏱️ {selectedArticle.readTime} min</span>
                    <span>📊 {Math.round(readProgress)}%</span>
                  </div>
                </div>
                <button
                  onClick={closeArticle}
                  className="text-[var(--white-icon)] hover:text-[var(--white)] transition p-2 flex-shrink-0"
                  aria-label="Cerrar"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M18.3 5.71L12 12.01l-6.3-6.3-1.41 1.41 6.3 6.3-6.3 6.3 1.41 1.41 6.3-6.3 6.29 6.29 1.41-1.41-6.29-6.29 6.29-6.29-1.41-1.41z"/>
                  </svg>
                </button>
              </div>

              {/* Contenido con scroll */}
              <div 
                className="overflow-y-auto p-4"
                style={{ maxHeight: '55vh', minHeight: '400px' }}
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

              {/* Footer con info adicional */}
              <div className="p-3 flex items-center justify-between gap-3 border-t border-[#ffffff10]">
                <div className="text-xs text-[var(--white-icon)]">
                  Artículo escrito el {new Date(selectedArticle.date).toLocaleDateString('es-ES')}
                </div>
                <div className="text-xs text-[var(--sec)] font-semibold">
                  {Math.round(readProgress)}% leído
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

