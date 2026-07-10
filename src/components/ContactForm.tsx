import QuoteForm from './QuoteForm';

const ContactForm = () => {
  return (
    <section id="contact-form" className="section-padding bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-red-hat text-primary mb-3">
            Prêt à profiter de votre extérieur ?
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Recevez un devis gratuit, personnalisé et sans engagement sous 24h ouvrées.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          <div className="order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/lovable-uploads/d8e6f146-04d1-41ba-8294-99b7cffeea8e.png"
                alt="Pergola bioclimatique Hélios Créations"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <QuoteForm variant="full" formLocation="bottom" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
