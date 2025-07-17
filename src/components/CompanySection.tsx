import { Check } from 'lucide-react';

const CompanySection = () => {
  const advantages = [
    "Rapport qualité-prix imbattable",
    "Pose et installation de qualité",
    "Produits innovants",
    "Accompagnement personnalisé",
    "Service Après-Vente Fiable",
    "Entreprise familiale"
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-red-hat text-primary mb-6">
          Découvrez Hélios Créations
        </h2>
        
        <p className="text-xl font-rubik text-foreground mb-12 max-w-3xl mx-auto">
          Hélios Créations SA, spécialiste en pergolas, vous accompagne dans l'installation 
          de votre aménagement extérieur.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-center justify-center gap-3">
              <Check className="text-primary flex-shrink-0" size={24} />
              <span className="text-foreground font-rubik text-lg font-medium">
                {advantage}
              </span>
            </div>
          ))}
        </div>

        <button className="btn-helios">
          CONTACTEZ NOS EXPERTS
        </button>
      </div>
    </section>
  );
};

export default CompanySection;