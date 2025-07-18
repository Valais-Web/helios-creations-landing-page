
import { Check, Star, Wrench, Lightbulb, Users, Shield, Heart } from 'lucide-react';

const CompanySection = () => {
  const advantages = [
    {
      icon: Star,
      title: "Rapport qualité-prix imbattable",
      description: "Nous nous efforçons de vous offrir des produits de la plus haute qualité tout en garantissant une tarification compétitive, vous permettant de profiter pleinement de votre espace extérieur sans compromettre votre budget."
    },
    {
      icon: Wrench,
      title: "Pose et Installation de qualité",
      description: "Évitez les soucis d'installation en confiant la tâche à notre équipe de professionnels qualifiés. Nous nous occupons de tout, assurant une installation précise et sans tracas de votre pergola bioclimatique partout en Suisse Romande."
    },
    {
      icon: Lightbulb,
      title: "Produits innovants",
      description: "L'innovation et la nouveauté nous animent. Nous proposons la vente et la pose de produits innovants et modernes dans toute la Suisse Romande. Nos pergolas comprennent les dernières technologies et sont entièrement personnalisables."
    },
    {
      icon: Users,
      title: "Accompagnement personnalisé",
      description: "Nous vous offrons un accompagnement personnalisé et attentioné tout au long de votre démarche. Nous veillons à ce que votre pergola soit parfaitement adaptée à votre style, votre extérieur et votre budget."
    },
    {
      icon: Shield,
      title: "Service Après-Vente Fiable",
      description: "Nous sommes là pour vous même après l'installation. Bénéficiez d'un service après-vente fiable pour toute assistance ultérieure, garantissant votre satisfaction à long terme avec votre pergola bioclimatique."
    },
    {
      icon: Heart,
      title: "Entreprise familiale",
      description: "Notre entreprise familiale a des valeurs ancrées telles que, la loyauté, la bienveillance et la solidarité. Nous portons un engagement profond basé sur l'écoute et la confiance. Nous avons plus de 15 ans d'expérience et avons reçu 32 prix et distinctions."
    }
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
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-4 rounded-full">
                    <IconComponent className="text-primary" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold font-red-hat text-primary mb-3">
                  {advantage.title}
                </h3>
                <p className="text-foreground font-rubik text-sm leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            );
          })}
        </div>

        <button 
          className="btn-helios-cta"
          onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
        >
          DEMANDEZ UN DEVIS GRATUIT
        </button>
      </div>
    </section>
  );
};

export default CompanySection;
