
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

export const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background gradient element */}
      <div className="absolute bottom-20 right-20 w-1/3 h-1/3 bg-primary/10 blur-[100px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
          <h2 className="heading">{t('contactTitle')}</h2>
          <div className="h-1 w-16 bg-primary my-4"></div>
          <p className="text-lg max-w-2xl text-foreground/80">
            {t('contactDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="glass-card overflow-hidden">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t('nameLabel')}
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('namePlaceholder')}
                    required
                    className="bg-secondary/50 border-border"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t('emailLabel')}
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('emailPlaceholder')}
                    required
                    className="bg-secondary/50 border-border"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t('messageLabel')}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t('messagePlaceholder')}
                    required
                    className="min-h-32 bg-secondary/50 border-border"
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-foreground border-t-transparent"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      <span>{t('submitButton')}</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <div className="text-xl font-semibold mb-8">
            {t('informationContactTitle')}
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:hugolpazerty@gmail.com" className="text-primary hover:underline">
                    hugolpazerty [at] gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">{t('Phone')}</p>
                  <a href="tel:+330755448906" className="text-primary hover:underline">
                    +33 7 66 44 89 06
                  </a>
                </div>
              </div>
            </div>
            
            <div className="pt-6 border-t border-border/50">
              <p className="font-medium mb-4">{t('findMeOn')}</p>
              <div className="flex gap-4">
                <a 
                  key="GitHub" 
                  href="https://github.com/hugolopespinto" 
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  GitHub
                </a>
                <a 
                  key="LinkedIn" 
                  href="https://www.linkedin.com/in/hugo-lopes-pinto-b3790a207/" 
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
