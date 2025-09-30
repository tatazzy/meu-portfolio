import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";


const projects = [
  {
    title: "E-commerce Moderno",
    description: "Plataforma de e-commerce completa com carrinho, checkout e painel administrativo. Desenvolvida com React, TypeScript e integração com APIs.",
    image: project1,
    tags: ["React", "TypeScript", "Tailwind CSS", "API Integration"],
    demoLink: "#",
    githubLink: "#"
  },
  {
    title: "Dashboard Analytics",
    description: "Dashboard interativo para visualização de dados com gráficos dinâmicos e métricas em tempo real. Interface intuitiva e responsiva.",
    image: project2,
    tags: ["React", "Charts", "Real-time Data", "Responsive"],
    demoLink: "#",
    githubLink: "#"
  },

];

const Projects = () => {
  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Projetos
        </h2>
        <p className="text-muted-foreground text-center mb-16 text-lg">
          Alguns dos meus trabalhos recentes
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="gradient-card rounded-xl overflow-hidden shadow-card hover:shadow-glow transition-smooth group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex items-end justify-center gap-3 p-6">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Código
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
