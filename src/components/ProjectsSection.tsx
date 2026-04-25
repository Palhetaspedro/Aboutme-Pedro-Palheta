import { ExternalLink, Github, Star } from "lucide-react";
import { useInView } from "@/hooks/useInView";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  inProgress?: boolean;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "WeatherDash",
    description: "Dashboard de previsão do tempo com gráficos interativos, dados em tempo real e integração com API de clima.",
    tech: ["React", "Node.js", "Weather API"],
    github: "https://github.com/Palhetaspedro/WeatherSystemAPI",
    demo: "https://weather-system-api.vercel.app/",
  },
  {
    title: "DashboardPalhetta",
    description: "Dashboard para gerenciamento de fluxo comercial com autenticação JWT e documentação Swagger.",
    tech: ["Node.js", "React", "Supabase/PostgreSQL", "JWT", "TypeScript"],
    github: "https://github.com/Palhetaspedro/DashboardPalhetta",
    demo: "https://dashboardpalhetta.vercel.app/",
    inProgress: true,
  },
  {
    title: "Auto-Ultimate",
    description: "Sistema de aluguel completo, incluindo cadastro de veículos, carrinho, simulação de pagamentos e painel administrativo. Autenticação JWT e Docker para fácil implantação.",
    tech: ["React", "Node.js", "Appwrite", "Docker", "Northflank", "JWT"],
    github: "https://github.com/Palhetaspedro/AUTO-PALHETA/tree/minha-feature",
    demo: "https://auto-palheta.vercel.app/",
    featured: true,
  },
  {
    title: "Palheta Barbearia",
    description: "Sistema de agendamento para uma barbearia, com interface intuitiva, API Javaspring e autenticação JWT.",
    tech: ["React", "JavaSpringBoot", "Java API", "PostgreSQL/Supabase"],
    github: "https://github.com/Palhetaspedro/BarbeariaAgendamento",
    demo: "https://barbearia-agendamento-seven.vercel.app/",
  },
];

// Vermelho vinho
const WINE = "#7c1d2e";
const WINE_LIGHT = "rgba(124,29,46,0.08)";
const WINE_BORDER = "rgba(124,29,46,0.35)";

const ProjectsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="projetos" className="section-light py-20 md:py-28">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-semibold text-center mb-4 text-secondary-foreground ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Projetos
        </h2>
        <p
          className={`text-center text-muted-on-light mb-12 max-w-lg mx-auto ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.1s" }}
        >
          Uma seleção dos meus trabalhos mais relevantes
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 0.1} visible={isInView} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(0.65); }
        }
      `}</style>
    </section>
  );
};

function ProjectCard({
  project,
  delay,
  visible,
}: {
  project: Project;
  delay: number;
  visible: boolean;
}) {
  return (
    <div
      className={`group bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative overflow-hidden ${
        visible ? "animate-fade-up" : "opacity-0"
      }`}
      style={{
        animationDelay: `${delay + 0.2}s`,
        // Borda esquerda vinho sutil nos cards especiais
        borderLeft: project.featured || project.inProgress
          ? `3px solid ${WINE}`
          : undefined,
      }}
    >

      {/* ── FAIXA DIAGONAL VINHO (featured e inProgress) ── */}
      {(project.featured || project.inProgress) && (
        <div
          style={{
            position: "absolute",
            top: 18,
            right: -32,
            width: 120,
            background: WINE,
            color: "#fff",
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            textAlign: "center",
            padding: "4px 0",
            transform: "rotate(35deg)",
            zIndex: 10,
          }}
        >
          {project.featured ? "★ Destaque" : "Em Progresso"}
        </div>
      )}

      {/* ── BADGE PILL ── */}
      {project.featured && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            marginBottom: 10,
            padding: "3px 10px",
            borderRadius: 999,
            background: WINE_LIGHT,
            border: `1px solid ${WINE_BORDER}`,
          }}
        >
          <Star size={10} style={{ color: WINE, fill: WINE }} />
          <span style={{ fontSize: 11, fontWeight: 700, color: WINE, letterSpacing: "0.04em" }}>
            Melhor Projeto
          </span>
        </div>
      )}

      {project.inProgress && (
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 5,
            marginBottom: 10,
            padding: "3px 10px",
            borderRadius: 999,
            background: WINE_LIGHT,
            border: `1px solid ${WINE_BORDER}`,
          }}
        >
          {/* Bolinha pulsando */}
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: WINE,
              display: "inline-block",
              animation: "pulse-dot 1.6s ease-in-out infinite",
            }}
          />
          <span style={{ fontSize: 11, fontWeight: 700, color: WINE, letterSpacing: "0.04em" }}>
            Em desenvolvimento ativo
          </span>
        </div>
      )}

      <h3 className="text-lg font-semibold text-card-foreground mb-2">{project.title}</h3>
      <p className="text-sm text-muted-on-light mb-4 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-0.5 rounded bg-surface-dark/10 text-card-foreground font-medium"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-muted-on-light hover:text-red-accent transition-colors"
        >
          <Github size={16} /> GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-muted-on-light hover:text-red-accent transition-colors"
        >
          <ExternalLink size={16} /> Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectsSection;