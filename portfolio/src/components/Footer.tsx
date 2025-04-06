
import { useLanguage } from '@/context/LanguageContext';
import { Heart } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background py-12 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-primary">Hugo LOPES PINTO</h3>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12">
            <div>
              <h4 className="font-semibold mb-3">{t('quikLinks')}</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-foreground/70 hover:text-primary transition-colors">{t('home')}</a></li>
                <li><a href="#about" className="text-foreground/70 hover:text-primary transition-colors">{t('about')}</a></li>
                <li><a href="#skills" className="text-foreground/70 hover:text-primary transition-colors">{t('skills')}</a></li>
                <li><a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">{t('projects')}</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">{t('connect')}</h4>
              <ul className="space-y-2">
                <li><a target="_blank" href="https://www.linkedin.com/in/hugo-lopes-pinto-b3790a207/" className="text-foreground/70 hover:text-primary transition-colors">GitHub</a></li>
                <li><a target="_blank" href="https://github.com/hugolopespinto  " className="text-foreground/70 hover:text-primary transition-colors">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/60 text-sm">
              © {currentYear} Portfolio. {t('footerRights')}.
            </p>
          </div>
          
          <div className="flex items-center text-foreground/60 text-sm">
            <p className="flex items-center">
              {t('madeWith')} <Heart className="h-4 w-4 mx-1 text-primary" /> & React
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
