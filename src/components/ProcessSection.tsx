import { MessagesSquare, Ruler, Hammer } from 'lucide-react';

const steps = [
  {
    icon: MessagesSquare,
    title: 'Échange et visite sur place',
    description:
      'Nous comprenons votre besoin, mesurons votre extérieur et validons ensemble la faisabilité de votre projet.',
  },
  {
    icon: Ruler,
    title: 'Conception sur-mesure et devis détaillé',
    description:
      'Design, options, matériaux et budget clair : vous recevez une proposition transparente adaptée à votre style.',
  },
  {
    icon: Hammer,
    title: 'Pose clé en main et service après-vente',
    description:
      'Nos équipes installent votre pergola avec soin, puis restent à votre disposition pour un suivi durable.',
  },
];

const scrollToForm = () =>
  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });

const ProcessSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-red-hat text-primary mb-4">
            Comment se déroule votre projet
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Un accompagnement structuré en 3 étapes, du premier échange à la pose finale.
          </p>
        </div>

        <ol className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map(({ icon: Icon, title, description }, i) => (
            <li
              key={title}
              className="relative bg-white border border-gray-200 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="absolute -top-4 left-7 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center shadow">
                {i + 1}
              </div>
              <div className="mb-4 mt-2">
                <Icon className="text-primary" size={32} strokeWidth={1.75} />
              </div>
              <h3 className="text-lg font-bold font-red-hat text-foreground mb-2">
                {title}
              </h3>
              <p className="text-foreground/80 leading-relaxed">{description}</p>
            </li>
          ))}
        </ol>

        <div className="text-center mt-12">
          <button
            onClick={scrollToForm}
            className="bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
          >
            Démarrer mon projet
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
