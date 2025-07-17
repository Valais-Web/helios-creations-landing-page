const Header = () => {
  return (
    <header className="relative bg-white/95 backdrop-blur-sm shadow-sm border-b border-border/50">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.02]" style={{
        backgroundImage: `url(/lovable-uploads/98178adf-676f-4df9-900b-60c69a214e8a.png)`
      }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center py-4">
          <img 
            src="/lovable-uploads/606d7749-8f6f-4797-b77b-eae7f7abe860.png" 
            alt="Hélios Créations SA" 
            className="h-12 w-auto hover-scale"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;