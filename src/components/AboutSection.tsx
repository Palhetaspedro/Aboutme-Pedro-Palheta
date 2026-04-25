import { useInView } from "@/hooks/useInView";
import { Code, GraduationCap, Heart, Briefcase } from "lucide-react";

const values = [
  { icon: Code, title: "Código Limpo", desc: "Escrevo código legível, testável e bem documentado." },
  { icon: Briefcase, title: "Entrega", desc: "Foco em resultados e prazos, sem comprometer qualidade." },
  { icon: GraduationCap, title: "Aprendizado", desc: "Atualização constante com novas tecnologias e práticas." },
  { icon: Heart, title: "Colaboração", desc: "Trabalho em equipe com comunicação clara e empatia." },
];

const AboutSection = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="sobre" className="section-light py-20 md:py-28">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-semibold text-center mb-4 text-secondary-foreground ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Sobre Mim
        </h2>
        <p
          className={`text-center text-muted-on-light mb-12 max-w-2xl mx-auto leading-relaxed ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.1s" }}
        >
          Desenvolvedor de Software com formação técnica em Informática, focado em resolver problemas e criar soluções eficientes. Possuo experiência prática em desenvolvimento de sistemas e sou movido por tecnologia, sempre buscando evoluir e aprimorar minhas habilidades.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`text-center p-6 rounded-lg border border-border hover:border-red-accent/40 transition-colors ${
                isInView ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1 + 0.2}s` }}
            >
              <v.icon className="mx-auto mb-3 text-red-accent" size={28} />
              <h3 className="font-semibold text-secondary-foreground mb-1">{v.title}</h3>
              <p className="text-sm text-muted-on-light">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
