
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
    { name: 'HTML5', level: 90 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 90 },
    { name: 'TypeScript', level: 80 },
    { name: 'React', level: 80 },
    { name: 'React Native', level: 70 },
    { name: 'Flutter', level: 85 },
    { name: 'Angular', level: 70 },
    { name: 'Responsive Design', level: 80 },
    { name: 'Bootstrap / Tailwind CSS', level: 80 },
  ];
  
  const backendSkills = [
    { name: 'Node.js', level: 90 },
    { name: 'Express', level: 85 },
    { name: 'Python', level: 90 },
    { name: 'Flask', level: 80 },
    { name: 'Stripe', level: 85 },
    { name: 'Django', level: 65 },
    { name: 'RESTful APIs', level: 75 },
    { name: 'PHP Symfony', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'PostgreSQL', level: 85 },
    { name: 'MySQL', level: 80 },
    { name: 'OAuth2.0', level: 70 },
    { name: 'JWT', level: 80 },
  ];
  
  const toolsSkills = [
    { name: 'Git', level: 85 },
    { name: 'Git hub', level: 85 },
    { name: 'Docker', level: 75 },
    { name: 'Heroku', level: 85 },
    { name: 'CI/CD', level: 75 },
    { name: 'Fire Base', level: 75 },
    { name: 'Figma', level: 80 },
    { name: 'VS Code / jetbrains IDE', level: 90 },
    { name: 'Agile/Scrum', level: 80 },
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
