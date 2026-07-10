import {
  Frame,
  Sliders,
  CloudRain,
  Smartphone,
  Zap,
  Music,
  Plug,
  Lightbulb,
  Flame,
  PanelsTopLeft,
  Settings2,
  Sparkles,
} from 'lucide-react';
import YouTubeFacade from './YouTubeFacade';

const features = [
  { icon: Frame, label: 'Structure durable en aluminium' },
  { icon: Sliders, label: 'Lames orientables' },
  { icon: CloudRain, label: 'Capteur vent, pluie et soleil' },
  { icon: Smartphone, label: 'Contrôle via l’application' },
  { icon: Zap, label: 'Motorisation automatique' },
  { icon: Music, label: 'Haut-parleurs Bluetooth' },
  { icon: Plug, label: 'Prises de courant et USB' },
  { icon: Lightbulb, label: 'Éclairage LED intégré' },
  { icon: Flame, label: 'Chauffage infrarouge' },
  { icon: PanelsTopLeft, label: 'Fermetures latérales' },
  { icon: Settings2, label: 'Complètement personnalisable' },
  { icon: Sparkles, label: 'Et bien plus encore' },
];

const scrollToForm = () =>
  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });

const FeaturesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-red-hat text-primary mb-4">
            Des pergolas d’exception
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Une conception haut de gamme et un équipement complet pour profiter de votre
            extérieur en toute saison.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl p-4 hover:border-primary/40 hover:shadow-md transition-all"
            >
              <span className="w-11 h-11 flex-shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="text-primary" size={22} strokeWidth={1.75} />
              </span>
              <span className="text-foreground font-rubik font-medium">{label}</span>
            </li>
          ))}
        </ul>

        <div className="mt-14 max-w-4xl mx-auto">
          <YouTubeFacade
            videoId="9PrgaUNNLWw"
            start={3}
            title="Hélios Créations | Pergolas"
          />
        </div>

        <div className="text-center mt-12">
          <button
            onClick={scrollToForm}
            className="bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-lg hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
          >
            Demander un devis gratuit
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
