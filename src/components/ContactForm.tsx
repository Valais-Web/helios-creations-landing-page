import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postalCode: '',
    message: '',
    callbackTime: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Ici vous pourriez ajouter la logique d'envoi du formulaire
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-red-hat text-primary text-center mb-12">
          Prêt à profiter de votre extérieur ?
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-foreground font-rubik font-medium mb-2">
                Nom / Prénom *
              </label>
              <Input 
                type="text" 
                required 
                value={formData.name} 
                onChange={e => handleInputChange('name', e.target.value)} 
                className="w-full" 
              />
            </div>
            
            <div>
              <label className="block text-foreground font-rubik font-medium mb-2">
                Email *
              </label>
              <Input 
                type="email" 
                required 
                value={formData.email} 
                onChange={e => handleInputChange('email', e.target.value)} 
                className="w-full" 
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-foreground font-rubik font-medium mb-2">
                Téléphone *
              </label>
              <Input 
                type="tel" 
                required 
                value={formData.phone} 
                onChange={e => handleInputChange('phone', e.target.value)} 
                className="w-full" 
              />
            </div>
            
            <div>
              <label className="block text-foreground font-rubik font-medium mb-2">
                Code Postal *
              </label>
              <Input 
                type="text" 
                required 
                value={formData.postalCode} 
                onChange={e => handleInputChange('postalCode', e.target.value)} 
                className="w-full" 
              />
            </div>
          </div>
          
          <div>
            <label className="block text-foreground font-rubik font-medium mb-2">
              Quand pouvons-nous vous rappeler ? *
            </label>
            <Select onValueChange={value => handleInputChange('callbackTime', value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sélectionnez un créneau" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Matin (8h-12h)</SelectItem>
                <SelectItem value="afternoon">Après-midi (12h-18h)</SelectItem>
                <SelectItem value="evening">Soir (18h-20h)</SelectItem>
                <SelectItem value="weekend">Week-end</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-foreground font-rubik font-medium mb-2">Votre message</label>
            <Textarea 
              rows={5} 
              value={formData.message} 
              onChange={e => handleInputChange('message', e.target.value)} 
              className="w-full" 
              placeholder="Décrivez votre projet..." 
            />
          </div>
          
          <div className="text-center">
            <Button type="submit" className="btn-helios">
              Demander un devis gratuit
            </Button>
          </div>
        </form>

        {/* Section CTA avec image */}
        <div className="mt-16 relative">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Contenu textuel */}
            <div className="lg:order-1 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold font-red-hat text-primary">
                  Transformez votre extérieur dès aujourd'hui
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Rejoignez nos clients satisfaits et profitez d'une pergola bioclimatique 
                  sur-mesure qui s'adapte parfaitement à votre style de vie et à votre architecture.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-helios-cta flex-1 sm:flex-none">
                  DEMANDEZ VOTRE DEVIS GRATUIT
                </Button>
                <div className="text-sm text-muted-foreground flex items-center justify-center sm:justify-start">
                  <span>✓ Devis gratuit et sans engagement</span>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="lg:order-2 relative">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="/lovable-uploads/44a9a47a-9597-46cb-a276-a0809a4e3c43.png" 
                  alt="Pergola bioclimatique moderne avec femme se détendant"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              
              {/* Badge flottant */}
              <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Sur-mesure</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
