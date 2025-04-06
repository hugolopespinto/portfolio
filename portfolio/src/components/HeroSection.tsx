
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-40 right-0 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-primary/20 blur-[100px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start space-y-6 max-w-2xl animate-fade-in">
          <div className="flex items-center gap-3">
            <div className="h-1 w-16 bg-primary"></div>
            <p className="text-primary font-medium">{t('heroGreeting')}</p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            {t('heroName')}
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-primary">
            {t('heroTitle')}
          </h2>
          
          <p className="text-lg text-foreground/80 max-w-lg">
            {t('heroDescription')}
          </p>
          
          <div className="flex gap-4 pt-4">
            <Button asChild size="lg" className="group">
              <a href="#contact">
                {t('heroButton')}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">
                {t('projects')}
              </a>
            </Button>
          </div>
          
          {/* Tech stack logos (placeholders) */}
          <div className="flex items-center gap-6 mt-12 pt-8 border-t border-border/50 w-full">
            <p className="text-sm text-foreground/60 font-mono">Tech Stack</p>
            <div className="flex gap-6 flex-wrap">
              {['React', 'React native', 'TypeScript', 'Node.js', 'Angular', 'Flutter'].map((tech) => (
                <div key={tech} className="text-foreground/80 font-mono text-sm">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
