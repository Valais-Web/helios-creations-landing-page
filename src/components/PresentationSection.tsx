const PresentationSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative group">
              <img
                src="/lovable-uploads/ee9d1e67-5715-4992-8cc9-8adc2809cf5c.png"
                alt="Pergola bioclimatique moderne — Hélios Créations"
                loading="lazy"
                decoding="async"
                className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:scale-[1.02]"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-red-hat text-primary leading-tight">
              Hélios Créations vous accompagne dans votre projet
            </h2>

            <div className="w-16 h-1 bg-primary" />

            <div className="space-y-4">
              <p className="text-lg font-rubik text-foreground leading-relaxed">
                Vous souhaitez créer un espace unique, améliorer votre bien-être à la
                maison et profiter de votre extérieur toute l’année&nbsp;?
              </p>

              <p className="text-lg font-rubik text-foreground leading-relaxed">
                Vous ne savez pas quel produit est le plus adapté à votre maison, quel
                design, ni quels accessoires choisir&nbsp;? C’est pour répondre à ces
                questions que nous avons créé Hélios Créations. Votre projet devient le
                nôtre et nous vous accompagnons dans sa concrétisation, du conseil à la
                pose de votre pergola bioclimatique.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentationSection;
