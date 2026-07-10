import { Star, Wrench, Lightbulb, Users, Shield, Heart } from 'lucide-react';

const advantages = [
  {
    icon: Star,
    title: 'Rapport qualité-prix imbattable',
    description:
      'Nous nous efforçons de vous offrir des produits de la plus haute qualité tout en garantissant une tarification compétitive, pour profiter pleinement de votre espace extérieur sans compromettre votre budget.',
  },
  {
    icon: Wrench,
    title: 'Pose et installation de qualité',
    description:
      'Évitez les soucis d’installation en confiant la tâche à notre équipe de professionnels qualifiés. Nous assurons une installation précise et sans tracas partout en Suisse romande.',
  },
  {
    icon: Lightbulb,
    title: 'Produits innovants',
    description:
      'L’innovation et la nouveauté nous animent. Nous proposons la vente et la pose de produits modernes intégrant les dernières technologies, entièrement personnalisables.',
  },
  {
    icon: Users,
    title: 'Accompagnement personnalisé',
    description:
      'Nous vous offrons un accompagnement personnalisé et attentionné tout au long de votre démarche, pour que votre pergola soit parfaitement adaptée à votre style, votre extérieur et votre budget.',
  },
  {
    icon: Shield,
    title: 'Service après-vente fiable',
    description:
      'Nous sommes là pour vous, même après l’installation. Bénéficiez d’un service après-vente fiable pour toute assistance ultérieure et une satisfaction durable.',
  },
  {
    icon: Heart,
    title: 'Entreprise familiale',
    description:
      'Notre entreprise familiale repose sur des valeurs ancrées : loyauté, bienveillance et solidarité. Nous portons un engagement profond basé sur l’écoute et la confiance, avec plus de 15 ans d’expérience et 32 prix et distinctions.',
  },
];

const scrollToForm = () =>
  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });

const CompanySection = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-red-hat text-primary mb-4">
          Découvrez Hélios Créations
        </h2>

        <p className="text-lg md:text-xl font-rubik text-foreground/85 mb-12 max-w-3xl mx-auto">
          Hélios Créations SA, spécialiste en pergolas, vous accompagne dans l’installation
          de votre aménagement extérieur.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 text-left">
          {advantages.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="text-primary" size={24} strokeWidth={1.75} />
                </div>
              </div>
              <h3 className="text-lg font-bold font-red-hat text-foreground mb-2">
                {title}
              </h3>
              <p className="text-foreground/80 font-rubik text-[15px] leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={scrollToForm}
          className="bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
        >
          Demander un devis gratuit
        </button>
      </div>
    </section>
  );
};

export default CompanySection;
