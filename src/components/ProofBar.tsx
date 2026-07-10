import { Star, Award, MapPin, Home } from 'lucide-react';

const items = [
  { icon: Star, label: 'Note Google 4.7', sub: '19 avis clients' },
  { icon: Award, label: '15+ ans d’expérience', sub: 'Pergolas bioclimatiques' },
  { icon: MapPin, label: 'Suisse romande', sub: 'Intervention dans toute la région' },
  { icon: Home, label: 'Entreprise familiale', sub: 'Suivi personnalisé' },
];

const ProofBar = () => {
  return (
    <section className="bg-secondary/60 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 md:py-8">
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
          {items.map(({ icon: Icon, label, sub }) => (
            <li key={label} className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Icon className="text-primary" size={20} strokeWidth={2} />
              </span>
              <div>
                <p className="font-semibold text-foreground text-sm md:text-base leading-tight">
                  {label}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground leading-tight mt-0.5">
                  {sub}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProofBar;
