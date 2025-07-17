
const TestimonialsSection = () => {
  const testimonials = [
    {
      location: "Fribourg",
      text: "Nous sommes ravis de notre pergola bioclimatique d'Hélios. Leurs services sont efficaces, de qualité, réactifs et à ce prix ! Quel bel investissement !",
      image: "/lovable-uploads/7092c30a-3f64-4c3a-b373-fcca2f907ce4.png"
    },
    {
      location: "Neuchâtel", 
      text: "Une superbe pergola posée avec soin. Leur équipe qualifiée est ponctuelle, souriante et très pro ! Je recommande à 100%. Merci à vous !",
      image: "/lovable-uploads/40957818-0c14-4d35-8cda-02067128c06d.png"
    },
    {
      location: "Conthey",
      text: "Nous avons été agréablement surpris par le résultat sur une pergola avec les côtés vitrés. Le tout avec un budget maîtrisé. Nous recommandons sans hésiter Hélios Créations !",
      image: "/lovable-uploads/dee3b2b2-b17b-4947-88b5-6fd4795df7f4.png"
    }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-red-hat text-primary text-center mb-12">
          Ce qu'en pensent nos clients
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src={testimonial.image} 
                  alt={`Pergola réalisée à ${testimonial.location}`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-8">
                <div className="mb-4">
                  <div className="flex text-primary mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-2xl">★</span>
                    ))}
                  </div>
                  <p className="text-primary font-bold text-sm uppercase tracking-wider">
                    {testimonial.location}
                  </p>
                </div>
                
                <p className="text-foreground font-rubik leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
