import valaisWebLogo from '@/assets/valais-web-logo.png';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="max-w-7xl mx-auto px-5 md:px-20 text-center">
        <p className="font-rubik">
          © 2024 Hélios Créations SA | All rights reserved | 
          <a 
            href="https://valaisweb.ch" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 hover:text-background/80 transition-colors ml-1"
          >
            Site web créé par
            <img 
              src={valaisWebLogo} 
              alt="Valais Web" 
              className="h-5 inline-block"
            />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;