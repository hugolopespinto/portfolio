
import { useLanguage } from '@/context/LanguageContext';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const SkillsSection = () => {
  const { t } = useLanguage();
  
  // Skill sets
  const frontendSkills = [
    { name: 'React', level: 90 },
    { name: 'React Native', level: 70 },
    { name: 'JavaScript / TypeScript', level: 90 },
    { name: 'Flutter', level: 85 },
    { name: 'Angular', level: 75 },
  ];
  
  const backendSkills = [
    { name: 'Node.js', level: 90 },
    { name: 'Flask / FastAPI', level: 80 },
    { name: 'PHP Symfony', level: 80 },
    { name: 'Supabase', level: 85 },
  ];
  
  const toolsSkills = [
    { name: 'Stripe', level: 85 },
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 80 },
    { name: 'Cloud', level: 80 },
    { name: 'CI/CD', level: 70 },
    { name: 'Agile/Scrum', level: 85 },
    { name: 'Figma', level: 70 },
  ];
  
  const renderSkillBar = (skill: { name: string; level: number }) => (
    <div key={skill.name} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-primary">{skill.level}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="section-padding relative overflow-hidden">
      {/* Background gradient element */}
      <div className="absolute bottom-40 right-20 w-1/3 h-1/3 bg-primary/10 blur-[100px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
          <h2 className="heading">{t('skillsTitle')}</h2>
          <div className="h-1 w-16 bg-primary my-4"></div>
          <p className="text-lg max-w-2xl text-foreground/80">
            {t('skillsDescription')}
          </p>
        </div>
        
        <Tabs defaultValue="frontend" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-background/50 backdrop-blur-sm border border-border">
              <TabsTrigger value="frontend">{t('frontEnd')}</TabsTrigger>
              <TabsTrigger value="backend">{t('backEnd')}</TabsTrigger>
              <TabsTrigger value="tools">{t('tools')}</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="frontend" className="animate-fade-in">
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    {frontendSkills.slice(0, Math.ceil(frontendSkills.length / 2)).map(renderSkillBar)}
                  </div>
                  <div className="space-y-6">
                    {frontendSkills.slice(Math.ceil(frontendSkills.length / 2)).map(renderSkillBar)}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="backend" className="animate-fade-in">
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    {backendSkills.slice(0, Math.ceil(backendSkills.length / 2)).map(renderSkillBar)}
                  </div>
                  <div className="space-y-6">
                    {backendSkills.slice(Math.ceil(backendSkills.length / 2)).map(renderSkillBar)}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="tools" className="animate-fade-in">
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    {toolsSkills.slice(0, Math.ceil(toolsSkills.length / 2)).map(renderSkillBar)}
                  </div>
                  <div className="space-y-6">
                    {toolsSkills.slice(Math.ceil(toolsSkills.length / 2)).map(renderSkillBar)}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        
        {/* Additional skills cloud */}
        <div className="mt-16 text-center">
          <h3 className="subheading mb-6">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {['AI', 'Bot', 'Call Bot', 'Chat bot', 'YOLOV5', 'Blockchain'].map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm py-1 px-3 m-1 hover-scale">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
