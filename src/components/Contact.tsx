import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Vamos Trabalhar Juntos?
        </h2>
        <p className="text-muted-foreground mb-12 text-lg">
          Estou disponível para projetos freelance e oportunidades de trabalho
        </p>
        
        <div className="gradient-card rounded-2xl p-8 md:p-12 shadow-card mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="mailto:seu@email.com"
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-background/50 hover:bg-primary/10 transition-smooth hover:scale-105 group"
            >
              <Mail className="w-8 h-8 text-primary" />
              <span className="font-medium">Email</span>
              <span className="text-sm text-muted-foreground group-hover:text-primary transition-smooth">
                seu@email.com
              </span>
            </a>
            
            <a 
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-background/50 hover:bg-primary/10 transition-smooth hover:scale-105 group"
            >
              <Linkedin className="w-8 h-8 text-primary" />
              <span className="font-medium">LinkedIn</span>
              <span className="text-sm text-muted-foreground group-hover:text-primary transition-smooth flex items-center gap-1">
                Perfil <ExternalLink className="w-3 h-3" />
              </span>
            </a>
            
            <a 
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-background/50 hover:bg-primary/10 transition-smooth hover:scale-105 group"
            >
              <Github className="w-8 h-8 text-primary" />
              <span className="font-medium">GitHub</span>
              <span className="text-sm text-muted-foreground group-hover:text-primary transition-smooth flex items-center gap-1">
                Repositórios <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          </div>
        </div>
        
        <Button 
          size="lg" 
          className="gradient-primary shadow-glow hover:scale-105 transition-smooth"
          asChild
        >
          <a href="mailto:seu@email.com">
            <Mail className="w-5 h-5 mr-2" />
            Enviar Mensagem
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Contact;
