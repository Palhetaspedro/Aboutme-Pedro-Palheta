import { useInView } from "@/hooks/useInView";
import { useContactForm } from "@/hooks/useContactForm";
import { Mail, Linkedin, Github, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { useEffect } from "react";

const ContactSection = () => {
  const { ref, isInView } = useInView();
  const { register, errors, isSubmitting, submitSuccess, submitError, onSubmit } = useContactForm();

  useEffect(() => {
    if (submitSuccess) {
      toast.success("Mensagem enviada com sucesso!");
    }
  }, [submitSuccess]);

  useEffect(() => {
    if (submitError) {
      toast.error(submitError);
    }
  }, [submitError]);

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
          Vamos conversar? Entre em contato por aqui ou pelas redes sociais.
        </p>

        <div className="max-w-2xl mx-auto grid md:grid-cols-5 gap-10">
          {/* Formulário */}
          <form
            onSubmit={onSubmit}
            className={`md:col-span-3 space-y-4 ${isInView ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {/* Honeypot — invisível para humanos, bots preenchem */}
            <input
              type="text"
              {...register("_honey" as never)}
              tabIndex={-1}
              autoComplete="off"
              className="absolute opacity-0 h-0 w-0 overflow-hidden"
              aria-hidden="true"
            />

            <div>
              <input
                type="text"
                placeholder="Seu nome"
                {...register("name")}
                className="w-full px-4 py-3 rounded-md bg-surface-dark border border-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-red-accent transition-colors"
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Seu e-mail"
                {...register("email")}
                className="w-full px-4 py-3 rounded-md bg-surface-dark border border-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-red-accent transition-colors"
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <textarea
                placeholder="Sua mensagem"
                rows={4}
                {...register("message")}
                className="w-full px-4 py-3 rounded-md bg-surface-dark border border-muted/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-red-accent transition-colors resize-none"
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="flex items-center gap-2 px-6 py-3 bg-red-accent text-white font-medium rounded-md hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Enviando...
                </>
              ) : submitSuccess ? (
                <>
                  <CheckCircle size={16} /> Enviado!
                </>
              ) : (
                <>
                  <Send size={16} /> Enviar Mensagem
                </>
              )}
            </button>
          </form>

          {/* Links de Redes Sociais */}
          <div
            className={`md:col-span-2 flex flex-col justify-center gap-5 ${isInView ? "animate-fade-up" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            {/* Email */}
            <a
              href="mailto:Palhetapedro11@gmail.com"
              className="flex items-center gap-3 text-foreground hover:text-red-accent transition-colors group"
            >
              <div className="p-2 rounded-full bg-surface-dark border border-muted/20 group-hover:border-red-accent/50 transition-colors">
                <Mail size={20} className="text-red-accent" />
              </div>
              <span className="text-sm">Palhetapedro11@gmail.com</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/pedro-palheta-b81017321/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-red-accent transition-colors group"
            >
              <div className="p-2 rounded-full bg-surface-dark border border-muted/20 group-hover:border-red-accent/50 transition-colors">
                <Linkedin size={20} className="text-red-accent" />
              </div>
              <span className="text-sm">linkedin/PedroPalheta</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Palhetaspedro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-foreground hover:text-red-accent transition-colors group"
            >
              <div className="p-2 rounded-full bg-surface-dark border border-muted/20 group-hover:border-red-accent/50 transition-colors">
                <Github size={20} className="text-red-accent" />
              </div>
              <span className="text-sm">github.com/Palhetaspedro</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;