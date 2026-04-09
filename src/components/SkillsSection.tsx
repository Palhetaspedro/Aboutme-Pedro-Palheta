import { useInView } from "@/hooks/useInView";

interface Skill {
  name: string;
  level: number;
}

const categories: { title: string; skills: Skill[] }[] = [
  {
    title: "Front-end",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    title: "Back-end",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "Python / Django", level: 80 },
      { name: "PostgreSQL", level: 85 },
      { name: "REST / GraphQL", level: 82 },
    ],
  },
  {
    title: "DevOps & Ferramentas",
    skills: [
      { name: "Git / GitHub", level: 93 },
      { name: "Docker", level: 78 },
      { name: "AWS / Cloud", level: 75 },
      { name: "CI/CD", level: 80 },
    ],
  },
];

const SkillsSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="habilidades" className="section-dark py-20 md:py-28">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-semibold text-center mb-4 text-foreground ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Habilidades
        </h2>
        <p className={`text-center text-muted-on-dark mb-12 max-w-lg mx-auto ${isInView ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          Tecnologias e ferramentas que domino
        </p>

        <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
          {categories.map((cat, ci) => (
            <div
              key={cat.title}
              className={`${isInView ? "animate-fade-up" : "opacity-0"}`}
              style={{ animationDelay: `${ci * 0.15 + 0.2}s` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-6 border-b border-muted/20 pb-2">
                {cat.title}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill, si) => (
                  <SkillBar key={skill.name} skill={skill} visible={isInView} delay={ci * 0.15 + si * 0.1 + 0.3} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function SkillBar({ skill, visible, delay }: { skill: Skill; visible: boolean; delay: number }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm text-foreground">{skill.name}</span>
        <span className="text-xs text-muted-on-dark">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted/20 overflow-hidden">
        <div
          className={`h-full rounded-full bg-red-accent ${visible ? "animate-skill-bar" : "scale-x-0"}`}
          style={{ width: `${skill.level}%`, animationDelay: `${delay}s` }}
        />
      </div>
    </div>
  );
}

export default SkillsSection;
