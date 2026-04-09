import { ExternalLink, Github } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Plataforma completa de e-commerce com carrinho, pagamentos via Stripe e painel admin.",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Manager API",
    description: "API RESTful para gerenciamento de tarefas com autenticação JWT e documentação Swagger.",
    tech: ["Node.js", "Express", "MongoDB", "JWT"],
    github: "#",
    demo: "#",
  },
  {
    title: "Dashboard Analytics",
    description: "Dashboard interativo com gráficos em tempo real, filtros avançados e exportação de relatórios.",
    tech: ["React", "TypeScript", "D3.js", "Firebase"],
    github: "#",
    demo: "#",
  },
  {
    title: "Chat App Real-time",
    description: "Aplicação de chat em tempo real com salas, notificações push e compartilhamento de arquivos.",
    tech: ["React", "Socket.io", "Node.js", "Redis"],
    github: "#",
    demo: "#",
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
