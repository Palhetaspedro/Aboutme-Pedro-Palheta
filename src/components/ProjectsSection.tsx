import { ExternalLink, Github } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const projects = [
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
    tech: ["Node.js", "React", "Supabase/PostgreSQL", "JWT"],
    github: "https://github.com/Palhetaspedro/DashboardPalhetta",
    demo: "https://dashboardpalhetta.vercel.app/",
  },
  {
    title: "Auto-Ultimate",
    description: "Sistema de aluguel completo, incluindo cadastro de veículos, carrinho, simulação de pagamentos e painel administrativo.Autenticação JWT e Docker para fácil implantação.",
    tech: ["React", "TypeScript", "Node.js", "Appwrite","Docker","Northflank","Javascript"],
    github: "https://github.com/Palhetaspedro/AUTO-PALHETA/tree/minha-feature",
    demo: "https://auto-palheta.vercel.app/",
  },
  {
    title: "Palheta Barbearia",
    description: "Sistema de agendamento para uma barbearia, com interface intuitiva,API Javaspring e autenticação JWT.",
    tech: ["React", "JavaSpringBoot", "Node.js", "Java","PostgreSQL/Supabase"],
    github: "https://github.com/Palhetaspedro/BarbeariaAgendamento",
    demo: "https://barbearia-agendamento-seven.vercel.app/",
  },
];

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
        <p className={`text-center text-muted-on-light mb-12 max-w-lg mx-auto ${isInView ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          Uma seleção dos meus trabalhos mais relevantes
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} delay={i * 0.1} visible={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

function ProjectCard({
  project,
  delay,
  visible,
}: {
  project: (typeof projects)[0];
  delay: number;
  visible: boolean;
}) {
  return (
    <div
      className={`group bg-card border border-border rounded-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:border-l-4 hover:border-l-red-accent hover:shadow-lg ${
        visible ? "animate-fade-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${delay + 0.2}s` }}
    >
      <h3 className="text-lg font-semibold text-card-foreground mb-2">{project.title}</h3>
      <p className="text-sm text-muted-on-light mb-4 leading-relaxed">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-0.5 rounded bg-surface-dark/10 text-card-foreground font-medium">
            {t}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={project.github} className="flex items-center gap-1 text-sm text-muted-on-light hover:text-red-accent transition-colors">
          <Github size={16} /> GitHub
        </a>
        <a href={project.demo} className="flex items-center gap-1 text-sm text-muted-on-light hover:text-red-accent transition-colors">
          <ExternalLink size={16} /> Live Demo
        </a>
      </div>
    </div>
  );
}

export default ProjectsSection;
