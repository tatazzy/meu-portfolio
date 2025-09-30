const About = () => {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Sobre Mim
        </h2>
        
        <div className="gradient-card rounded-2xl p-8 md:p-12 shadow-card">
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
            Sou desenvolvedora front-end apaixonada por criar interfaces intuitivas e 
            experiências digitais memoráveis. Com foco em qualidade de código e atenção 
            aos detalhes, transformo ideias em produtos digitais funcionais e esteticamente 
            agradáveis.
          </p>
          
          <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
            Especializada em React e TypeScript, busco sempre as melhores práticas de 
            desenvolvimento e me mantenho atualizada com as últimas tendências do mercado. 
            Acredito que bom código é aquele que é limpo, testável e fácil de manter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
