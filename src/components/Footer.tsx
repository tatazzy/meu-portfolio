const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto text-center text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Desenvolvedora Front-End. 
          Desenvolvido com React & TypeScript
        </p>
      </div>
    </footer>
  );
};

export default Footer;
