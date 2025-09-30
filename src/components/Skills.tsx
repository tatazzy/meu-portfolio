import { Code2, Palette, Zap, Smartphone, Database, GitBranch } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "React & TypeScript",
    description: "Desenvolvimento de aplicações robustas e tipadas"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Interfaces modernas e acessíveis com Tailwind CSS"
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Otimização e carregamento rápido de aplicações"
  },
  {
    icon: Smartphone,
    title: "Responsividade",
    description: "Design adaptável para todos os dispositivos"
  },
  {
    icon: Database,
    title: "APIs & Backend",
    description: "Integração com serviços e gerenciamento de dados"
  },
  {
    icon: GitBranch,
    title: "Git & CI/CD",
    description: "Versionamento e deploy automatizado"
  }
];

const Skills = () => {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Habilidades
        </h2>
        <p className="text-muted-foreground text-center mb-16 text-lg">
          Tecnologias e ferramentas que domino
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="gradient-card rounded-xl p-6 shadow-card hover:shadow-glow transition-smooth hover:scale-105 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                <skill.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
