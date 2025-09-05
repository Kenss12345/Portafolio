import React, { useEffect, useRef, useState } from "react";

type Project = {
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  repoUrl?: string;
  demoUrl?: string;
};

// Mapeo de tecnologías a íconos
const techIcons: Record<string, string> = {
  "C++": "/svg/C++.svg",
  "C": "/svg/C.svg",
  "JavaScript": "/svg/javaScript.svg",
  "Python": "/svg/python.svg",
  "CSS": "/svg/CSS3.svg",
  "HTML": "/svg/HTML5.svg",
  "Dart": "/svg/dart.svg",
  "Swift": "/svg/swift.svg",
  "Firebase": "/svg/firebase.svg",
  "MongoDB": "/svg/mongodb.svg",
  "CMake": "/svg/cmake.svg",
};

const useProjectsData = (): Project[] => {
  const [data, setData] = useState<Project[]>([]);
  
  useEffect(() => {
    const loadData = () => {
      try {
        const script = document.getElementById("projects-data");
        if (script && script.textContent) {
          const parsed = JSON.parse(script.textContent) as Project[];
          setData(parsed);
        } else {
          setData([]);
        }
      } catch (error) {
        console.error('Error cargando datos de proyectos:', error);
        setData([]);
      }
    };

    // Intentar cargar inmediatamente
    loadData();
    
    // Si no hay datos, intentar de nuevo después de un breve delay
    const timeout = setTimeout(() => {
      if (data.length === 0) {
        loadData();
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, []);
  
  return data;
};

const trapFocus = (container: HTMLElement | null) => {
  if (!container) return () => {};
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== "Tab") return;
    const focusable = container.querySelectorAll<HTMLElement>(
      'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first || !last) return;
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };
  container.addEventListener("keydown", handleKeyDown);
  return () => container.removeEventListener("keydown", handleKeyDown);
};

const ProjectsLightbox: React.FC = () => {
  const projects = useProjectsData();
  const [open, setOpen] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const dialogRef = useRef<HTMLDivElement>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);

  const openLightbox = (idx: number) => {
    if (idx >= 0 && idx < projects.length) {
      lastActiveRef.current = document.activeElement as HTMLElement;
      setProjectIndex(idx);
      setImageIndex(0);
      setOpen(true);
      setTimeout(() => dialogRef.current?.focus(), 0);
    }
  };

  // Exponer función globalmente para que los botones puedan llamarla
  useEffect(() => {
    (window as any).openProjectLightbox = openLightbox;
    return () => {
      delete (window as any).openProjectLightbox;
    };
  }, [projects]);

  // Escucha de clics como fallback si el onclick inline no funciona
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      if (!target || !('closest' in target)) return;
      const btn = (target as any).closest?.('button.project-card') as HTMLElement | null;
      if (!btn) return;
      const idxAttr = btn.getAttribute('data-index');
      const idx = idxAttr ? Number(idxAttr) : NaN;
      if (!Number.isFinite(idx)) return;
      openLightbox(idx);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, [projects]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, projectIndex, imageIndex]);

  useEffect(() => {
    if (!open || !dialogRef.current) return;
    const cleanup = trapFocus(dialogRef.current);
    return cleanup;
  }, [open]);

  const project = projects[projectIndex];
  const images = project?.images ?? [];

  const next = () => setImageIndex((n) => (images.length ? (n + 1) % images.length : 0));
  const prev = () => setImageIndex((n) => (images.length ? (n - 1 + images.length) % images.length : 0));

  const close = () => {
    setOpen(false);
    if (lastActiveRef.current) lastActiveRef.current.focus();
  };

  if (!open || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className="fixed inset-0 z-[200]"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={close} />
      <div className="relative h-full w-full flex items-center justify-center p-4">
        <div
          ref={dialogRef}
          className="w-full max-w-4xl bg-[#0f0f0f] rounded-2xl border border-[var(--white-icon-tr)] shadow-2xl outline-none"
          tabIndex={-1}
        >
          <div className="flex items-start justify-between p-4 border-b border-[#ffffff10]">
            <div className="flex-1 mr-4">
              <h4 id="modal-title" className="text-2xl font-semibold mb-2">
                {project.title}
              </h4>
              <p id="modal-description" className="text-sm text-[var(--white-icon)] mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech) => (
                  <div key={tech} className="flex items-center gap-1.5 px-2 py-1 bg-[#1a1a1a] rounded-md border border-[var(--white-icon-tr)] text-xs text-[var(--white-icon)]">
                    <img 
                      src={techIcons[tech]}
                      alt={tech}
                      className="w-3 h-3 object-contain"
                    />
                    <span>{tech}</span>
                  </div>
                )) || []}
              </div>
            </div>
            <button onClick={close} aria-label="Cerrar" className="text-[var(--white-icon)] hover:text-[var(--white)] transition p-2 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path d="M18.3 5.71L12 12.01l-6.3-6.3-1.41 1.41 6.3 6.3-6.3 6.3 1.41 1.41 6.3-6.3 6.29 6.29 1.41-1.41-6.29-6.29 6.29-6.29-1.41-1.41z"/></svg>
            </button>
          </div>

          <div className="relative">
            <button onClick={prev} aria-label="Anterior" className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
            </button>
            <button onClick={next} aria-label="Siguiente" className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/50 hover:bg-black/70 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L13.17 12z"/></svg>
            </button>
            {images.length > 0 && (
              <img
                src={images[imageIndex]}
                alt={`${project.title} ${imageIndex + 1}`}
                className="w-full h-[55vh] object-contain bg-black"
              />
            )}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-[var(--white-icon)] bg-black/50 px-2 py-1 rounded-full">
              {imageIndex + 1} / {images.length}
            </div>
          </div>

          <div className="p-4 border-t border-[#ffffff10] bg-[#0f0f0f]">
            <div className="flex gap-2 overflow-x-auto">
              {images.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setImageIndex(i)}
                  className={`shrink-0 w-14 h-14 rounded-md overflow-hidden border ${i === imageIndex ? 'border-[var(--sec)]' : 'border-[var(--white-icon-tr)]'} hover:border-[var(--sec)] transition`}
                  aria-current={i === imageIndex}
                  aria-label={`Imagen ${i + 1}`}
                >
                  <img src={src} alt={`thumb ${i + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="p-3 flex flex-wrap items-center justify-end gap-2 border-t border-[#ffffff10]">
            {project.repoUrl && (
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-sm border border-[var(--white-icon-tr)] rounded-lg text-[var(--white-icon)] hover:text-white hover:bg-[var(--white-icon-tr)]">Ver repo</a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-sm border border-[var(--white-icon-tr)] rounded-lg text-[var(--white-icon)] hover:text-white hover:bg-[var(--white-icon-tr)]">Ver demo</a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsLightbox;


