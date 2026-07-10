const scrollToForm = () => {
  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
};

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <a href="#top" aria-label="Hélios Créations SA" className="flex items-center">
            <img
              src="/lovable-uploads/606d7749-8f6f-4797-b77b-eae7f7abe860.png"
              alt="Hélios Créations SA"
              className="h-9 md:h-10 w-auto"
              width="180"
              height="40"
            />
          </a>
          <button
            onClick={scrollToForm}
            className="hidden sm:inline-flex items-center bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors shadow-sm hover:shadow"
          >
            Demander un devis gratuit
          </button>
          <button
            onClick={scrollToForm}
            className="sm:hidden bg-primary text-primary-foreground font-semibold text-xs px-3 py-2 rounded-md"
          >
            Devis gratuit
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
