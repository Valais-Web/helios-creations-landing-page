import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

/**
 * FAQ Hélios Créations
 * ⚠️ IMPORTANT : les réponses marquées [À COMPLÉTER PAR HÉLIOS] doivent être
 * validées par le client avant mise en ligne. Ne pas inventer de chiffres,
 * délais ou montants. Ces placeholders sont volontairement explicites.
 */
const faqs = [
  {
    q: 'Ai-je besoin d’une autorisation ou d’un permis de construire ?',
    a: 'Certains projets de pergola nécessitent une autorisation simplifiée, voire un permis de construire selon la commune. Nous vous renseignons et vous guidons dans cette démarche administrative pour que votre projet soit conforme.',
  },
  {
    q: 'Dans quelles régions intervenez-vous ?',
    a: 'Nous intervenons dans toute la Suisse romande. Nos équipes se déplacent chez vous pour la visite technique, la pose et le service après-vente.',
  },
  {
    q: 'Combien coûte une pergola bioclimatique ?',
    // TODO: À valider avec Hélios avant mise en ligne — ne pas inventer de prix.
    a: '[À COMPLÉTER PAR HÉLIOS] Le prix dépend des dimensions, options et finitions choisies. Demandez un devis gratuit et personnalisé pour connaître le budget exact de votre projet.',
  },
  {
    q: 'Quels sont les délais entre la commande et la pose ?',
    // TODO: À valider avec Hélios avant mise en ligne — ne pas inventer de durées.
    a: '[À COMPLÉTER PAR HÉLIOS] Les délais varient selon la période et la configuration du projet. Nous vous communiquons un planning précis lors de l’établissement du devis.',
  },
  {
    q: 'Quelle garantie sur les produits et la pose ?',
    // TODO: À valider avec Hélios avant mise en ligne — ne pas inventer de garanties.
    a: '[À COMPLÉTER PAR HÉLIOS] Nos pergolas et notre pose sont couvertes par une garantie détaillée que nous vous présentons dans le devis.',
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold font-red-hat text-primary mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-foreground/80">
            Tout ce qu’il faut savoir avant de démarrer votre projet.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-white border border-gray-200 rounded-lg px-5 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
