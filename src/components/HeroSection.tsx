import { useEffect, useState } from "react";
import avatarImg from "@/assets/developer-avatar.jpg";

const roles = [
  "Desenvolvedor Full Stack",
  "Banco de Dados",
  "Suporte Técnico",
];

const stack = ["React", "TypeScript", "Node.js","PostgreSQL", "Java Spring","Java API", "MySQL", "AWS", "Docker", "Git"];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIndex];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
        return () => clearTimeout(t);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" className="section-dark min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-0">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          {/* Text */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-muted-on-dark text-sm uppercase tracking-widest mb-3">Olá, eu sou</p>
            <h1 className="text-4xl md:text-6xl font-semibold text-foreground mb-4 leading-tight">
              Pedro Palheta
            </h1>
            <div className="h-10 mb-6">
              <span className="text-xl md:text-2xl text-red-accent font-medium">
                {displayed}
              </span>
              <span className="cursor-blink text-red-accent text-2xl ml-0.5">|</span>
            </div>

            {/* Stack badges */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-8">
              {stack.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-xs font-medium rounded-full border border-muted-foreground/30 text-muted-on-dark"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="#projetos"
                className="px-6 py-3 bg-red-accent text-primary-foreground font-medium rounded-md hover:bg-red-deep transition-colors"
              >
                Ver Projetos
              </a>
              <a
                href="#contato"
                className="px-6 py-3 border border-foreground/30 text-foreground font-medium rounded-md hover:border-red-accent hover:text-red-accent transition-colors"
              >
                Contato
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-red-accent/30 shadow-2xl">
              <img
                src={avatarImg}
                alt="Pedro Palheta - Desenvolvedor"
                width={512}
                height={512}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
