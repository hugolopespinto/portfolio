import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';

export const ContactSection = () => {
  const { t } = useLanguage();

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

        <Card className="glass-card overflow-hidden max-w-xl mx-auto">
          <CardContent className="p-8 space-y-8">
            <div className="text-xl font-semibold">
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

              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <svg
                    className="h-5 w-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16.04 2.003C8.636 2.003 2.54 8.097 2.54 15.5c0 2.772.758 5.362 2.072 7.61L2 30l6.998-2.582a13.423 13.423 0 006.996 1.882c7.404 0 13.5-6.096 13.5-13.5S23.444 2.003 16.04 2.003zm0 24.499a11.03 11.03 0 01-5.627-1.537l-.402-.24-4.158 1.535 1.553-4.048-.263-.415a11.003 11.003 0 1119.93-5.795c0 6.072-4.931 11-11.033 11zm6.029-8.26c-.329-.165-1.945-.958-2.247-1.067-.301-.11-.521-.165-.741.165s-.85 1.066-1.042 1.287c-.191.22-.382.247-.71.082-.329-.165-1.392-.513-2.65-1.64-.98-.874-1.641-1.956-1.832-2.286-.191-.33-.02-.508.145-.673.149-.148.33-.382.494-.573.165-.192.22-.33.33-.55.11-.22.055-.412-.027-.576-.082-.165-.741-1.787-1.016-2.449-.267-.64-.537-.55-.741-.56-.191-.008-.412-.01-.632-.01-.22 0-.576.082-.877.385-.301.302-1.15 1.123-1.15 2.74s1.177 3.177 1.34 3.396c.165.22 2.317 3.541 5.615 4.962.785.34 1.396.543 1.872.694.786.25 1.5.215 2.064.13.63-.094 1.945-.794 2.22-1.56.274-.767.274-1.424.191-1.56-.082-.137-.301-.22-.63-.384z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <a
                    href="https://wa.me/33766448906"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +33 7 66 44 89 06
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border/50">
              <p className="font-medium mb-4">{t('findMeOn')}</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/hugolopespinto"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/hugo-lopes-pinto-b3790a207/"
                  className="text-foreground/80 hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
