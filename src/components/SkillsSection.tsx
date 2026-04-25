import { FaReact, FaHtml5, FaCss3Alt, FaPhp, FaDocker, FaAws, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiSpring, SiJavascript, SiMongodb, SiMysql, SiGithub } from 'react-icons/si';
import { VscCircuitBoard } from 'react-icons/vsc';
import { useInView } from '@/hooks/useInView';

interface Skill {
  name: string;
  icon: React.ReactNode;
}

const categories: { title: string; skills: Skill[] }[] = [
  {
    title: "Front-end",
    skills: [
      { name: "React / Next.js", icon: <FaReact className="text-cyan-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
      { name: "HTML / CSS", icon: <FaHtml5 className="text-orange-500" /> },
    ],
  },
  {
    title: "Back-end",
    skills: [
      { name: "Java Spring Boot", icon: <SiSpring className="text-green-500" /> },
      { name: "Java API", icon: <FaJava className="text-red-500" /> },
      { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
      { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
    ],
  },
  {
    title: "DevOps & Ferramentas",
    skills: [
      { name: "Git / GitHub", icon: <FaGitAlt className="text-orange-500" /> },
      { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
      { name: "AWS / Cloud", icon: <FaAws className="text-yellow-500" /> },
      { name: "CI/CD", icon: <VscCircuitBoard className="text-purple-400" /> },
    ],
  },
];

const SkillsSection = () => {
  const { ref, isInView } = useInView();
  return (
    <section id="habilidades" className="section-dark py-20 md:py-28">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-semibold text-center mb-4 text-foreground ${isInView ? "animate-fade-up" : "opacity-0"
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

function SkillBar({ skill }: { skill: Skill; visible: boolean; delay: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xl">{skill.icon}</span>
      <span className="text-sm text-foreground">{skill.name}</span>
    </div>
  );
}

export default SkillsSection;
