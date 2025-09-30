import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Disponível para projetos
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Desenvolvedora
          <br />
          Front-End
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Criando experiências web modernas e interativas com React, TypeScript e design responsivo
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="gradient-primary shadow-glow hover:scale-105 transition-smooth"
            onClick={() => scrollToSection("projetos")}
          >
            Ver Projetos
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/30 hover:bg-primary/10"
            onClick={() => scrollToSection("contato")}
          >
            Entrar em Contato
          </Button>
        </div>
        
        <div className="flex gap-4 justify-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary/10 transition-smooth hover:scale-110"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary/10 transition-smooth hover:scale-110"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="mailto:seu@email.com"
            className="p-3 rounded-full bg-card hover:bg-primary/10 transition-smooth hover:scale-110"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <button 
        onClick={() => scrollToSection("sobre")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </button>
    </section>
  );
};

export default Hero;
