import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, GraduationCap } from 'lucide-react';

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background gradient element */}
      <div className="absolute top-40 left-0 w-1/2 h-1/2 bg-primary/10 blur-[120px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
          <h2 className="heading">{t('aboutTitle')}</h2>
          <div className="h-1 w-16 bg-primary my-4"></div>
        </div>

        {/* Formation */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">{t('educationTitle')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Epitech */}
            <Card className="glass-card overflow-hidden hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{t('epitechTitle')}</h3>
                    <p className="font-medium">{t('epitechSchool')}</p>
                    <p className="text-sm text-foreground/70">{t('epitechDegree')}</p>
                    <p className="text-sm text-primary font-mono">{t('epitechYears')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Ahlia */}
            <Card className="glass-card overflow-hidden hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{t('ahliaTitle')}</h3>
                    <p className="font-medium">{t('ahliaSchool')}</p>
                    <p className="text-sm text-foreground/70">{t('ahliaDegree')}</p>
                    <p className="text-sm text-primary font-mono">{t('ahliaYears')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Expérience */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">{t('experienceTitle')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Redbox */}
            <Card className="glass-card overflow-hidden hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{t('redboxTitle')}</h3>
                    <p className="font-medium">{t('redboxCompany')}</p>
                    <p className="text-sm text-foreground/70">{t('redboxDescription')}</p>
                    <p className="text-sm text-primary font-mono">{t('redboxYears')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* RISU */}
            <Card className="glass-card overflow-hidden hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{t('risuTitle')}</h3>
                    <p className="font-medium">{t('risuCompany')}</p>
                    <p className="text-sm text-foreground/70">{t('risuDescription')}</p>
                    <p className="text-sm text-primary font-mono">{t('risuYears')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Part Time */}
            <Card className="glass-card overflow-hidden hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{t('partTimeTitle')}</h3>
                    <p className="font-medium">{t('partTimeCompany')}</p>
                    <p className="text-sm text-foreground/70">{t('partTimeDescription')}</p>
                    <p className="text-sm text-primary font-mono">{t('partTimeYears')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Rhinov */}
            <Card className="glass-card overflow-hidden hover-scale">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{t('rhinovTitle')}</h3>
                    <p className="font-medium">{t('rhinovCompany')}</p>
                    <p className="text-sm text-foreground/70">{t('rhinovDescription')}</p>
                    <p className="text-sm text-primary font-mono">{t('rhinovYears')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
