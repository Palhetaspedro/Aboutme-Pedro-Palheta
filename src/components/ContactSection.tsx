import { useState } from "react";
import { useInView } from "@/hooks/useInView";
import { Mail, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  const { ref, isInView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Mensagem enviada! (demonstração)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="section-dark py-20 md:py-28">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-semibold text-center mb-4 text-foreground ${
            isInView ? "animate-fade-up" : "opacity-0"
          }`}
        >
          Contato
        </h2>
        <p className={`text-center text-muted-on-dark mb-12 max-w-lg mx-auto ${isInView ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          Vamos conversar? Entre em contato por aqui ou pelas redes.
        </p>

        <div className="max-w-2xl mx-auto grid md:grid-cols-5 gap-10">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`md:col-span-3 space-y-4 ${isInView ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            <input
              type="text"
              placeholder="Seu nome"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-md bg-surface-dark border border-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-red-accent transition-colors"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-md bg-surface-dark border border-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-red-accent transition-colors"
            />
            <textarea
              placeholder="Sua mensagem"
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-md bg-surface-dark border border-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-red-accent transition-colors resize-none"
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-red-accent text-primary-foreground font-medium rounded-md hover:bg-red-deep transition-colors"
            >
              <Send size={16} /> Enviar Mensagem
            </button>
          </form>

          {/* Links */}
          <div
            className={`md:col-span-2 flex flex-col justify-center gap-5 ${isInView ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="mailto:joao@email.com"
              className="flex items-center gap-3 text-foreground hover:text-red-accent transition-colors"
            >
              <Mail size={20} />
              <span className="text-sm">joao@email.com</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-foreground hover:text-red-accent transition-colors"
            >
              <Linkedin size={20} />
              <span className="text-sm">linkedin.com/in/joaosilva</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 text-foreground hover:text-red-accent transition-colors"
            >
              <Github size={20} />
              <span className="text-sm">github.com/joaosilva</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
