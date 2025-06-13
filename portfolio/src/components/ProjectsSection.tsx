
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

export const ProjectsSection = () => {
  const { t } = useLanguage();
  
  // Projects data
  const projects = [
    {
      id: 1,
      title: 'RISU',
      description: t('risuDescriptionProject'),
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2574&auto=format&fit=crop',
      technologies: ['Flutter', 'Node.js', 'Stripe', 'Express', 'MySQL', 'Prisma', 'Docker', 'JWT'],
      demoLink: '#',
      repoLink: 'https://github.com/H-chauvet/RISU',
    },
    {
      id: 2,
      title: 'Grand Luxe Drive',
      description: t('grandLuxeDriveDescription'),
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop',
      technologies: ['React.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Prisma', 'Express', 'Docker', 'JWT',],
      demoLink: 'http://www.grandluxedrive.com/',
      repoLink: '#',
    },
    {
      id: 2,
      title: 'EURL SC',
      description: t('eurlscDescription'),
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2670&auto=format&fit=crop',
      technologies: ['React.js', 'Tailwind CSS',],
      demoLink: 'https://eurlsc.netlify.app/',
      repoLink: '#',
    },
    {
      id: 4,
      title: 'Student link',
      description: t('studentLinkDescriptionProject'),
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2574&auto=format&fit=crop',
      technologies: ['Flutter', 'Python', 'FastAPI', 'Stripe', 'MySQL', 'Docker', 'PostgreSQL', 'JWT'],
      demoLink: 'https://studentlink.fr/',
      repoLink: '#',
    },
  ];

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background gradient element */}
      <div className="absolute top-60 left-20 w-1/3 h-1/3 bg-primary/10 blur-[100px] rounded-full -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16 animate-fade-in">
          <h2 className="heading">{t('projectsTitle')}</h2>
          <div className="h-1 w-16 bg-primary my-4"></div>
          <p className="text-lg max-w-2xl text-foreground/80">
            {t('projectsDescription')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="glass-card overflow-hidden group hover-scale">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-foreground/80">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/50">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0 flex gap-4">
                {project.demoLink !== '#' && (
                  <Button asChild variant="default" size="sm">
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      {t('viewProject')}
                    </a>
                  </Button>
                )}
                
                {project.repoLink !== '#' && (
                  <Button asChild variant="outline" size="sm">
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                )} 
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
