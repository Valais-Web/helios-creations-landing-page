const PresentationSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Large Image */}
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <img 
                src="/lovable-uploads/ee9d1e67-5715-4992-8cc9-8adc2809cf5c.png" 
                alt="Pergola bioclimatique moderne - Hélios Créations" 
                className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:scale-[1.02]" 
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
          
          {/* Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-red-hat text-primary leading-tight">
              Hélios Créations vous accompagne dans votre projets
            </h2>
            
            {/* Red accent line */}
            <div className="w-16 h-1 bg-red-500"></div>
            
            <div className="space-y-4">
              <p className="text-lg font-rubik text-foreground leading-relaxed">
                Vous souhaitez créer un espace unique et améliorer votre bien-être à la maison et pouvoir profiter de votre extérieur toute l'année ?
              </p>
              
              <p className="text-lg font-rubik text-foreground leading-relaxed">
                Vous ne savez pas quel est le produit le plus adapté pour votre maison, quel design, ou même quels accessoires choisir ? Vous vous posez toutes ces questions, c'est pourquoi nous avons créé Hélios Créations. Votre projet devient le nôtre et nous vous accompagnons dans sa concrétisation. Nous vous conseillons et nous installons votre pergola bioclimatique pour vous !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
