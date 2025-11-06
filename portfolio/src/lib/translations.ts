interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

export const translations: Translations = {
  en: {
    // Navbar
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
    
    // Hero Section
    heroGreeting: "Hello, I'm",
    heroName: "Hugo Lopes Pinto",
    heroTitle: "Software Engineer - Full Stack Developer - Founder of Articentro",
    heroDescription: "I am a young developer passionate about code and new technologies, driven by a genuine thirst to learn and improve every day. Autonomous and curious, I enjoy exploring new tools and taking on technical challenges, while easily integrating into a team thanks to my sense of collaboration and mutual support. My adaptability and constant desire to exceed myself allow me to contribute effectively to various projects while continuing to develop my skills.",
    heroButton: "Contact Me",
    // About Section
    educationTitle: "Educations",
    experienceTitle: "Experiences",
    internshipTitle: "Internships",
    aboutTitle: "About my experiences",
    aboutDescription: `I am a software engineer graduated from Epitech in 2025, passionate about creating web applications.
    With a solid background in computer science and a good sense of design, I bring ideas to life through code.
    My self-learning ability and academic journey at Epitech have provided me with both theoretical knowledge and practical experience,
    enabling me to solve complex problems and deliver high-quality solutions.`,
    aboutEducation: "Education",
    aboutSchool: "Epitech School of Technology",
    aboutDegree: "Master's Degree in Computer Science",
    aboutYears: "2020 - 2025", 

    articentroTitle: "Articentro",
    articentroCompany: "Founder & Full Stack Software Engineer & AI",
    articentroDescription: "Full development of a SaaS business management application designed for construction professionals (quotes, invoices, clients, payments, tracking). Built entirely from the ground up — from needs analysis to production release. Tech stack: Next.js (React), TypeScript, Supabase, jsPDF. This experience highlights strong autonomy, end-to-end product vision, and mastery of the full software development lifecycle.",
    articentroYears: "July 2025 – Present | Remote",

    cycleVistaTitle: "Ecommerce website",
    cycleVistaCompany: "Cycle Vista Store - Full Stack Developer",
    cycleVistaDescription: "Cycle Vista is a fictional ecommerce website for bicycles. The site is for demonstration purposes only, no real orders or purchases can be made. Stripe is in test mode.",
    cycleVistaYears: "2025",
    
    risuTitle: "Experience",
    risuCompany: "RISU - Full Stack Mobile Developer",
    risuDescription: "Node.js, Flutter, CI/CD, Docker, Git, Scrum",
    risuYears: "2023 - 2025 | 2 years | Remote",
    
    partTimeTitle: "Experience",
    partTimeCompany: "Freelance - Full Stack Developer & AI",
    partTimeDescription: "Participated in a variety of web projects: end-to-end application development as well as adding new features to ongoing projects. Worked with Node.js, React, Qwik, TypeScript, FastAPI, Docker, and Flutter, applying Clean Architecture principles and maintainable coding practices. Implemented AI-powered functionalities: chatbots, API integrations with Python-based AI models, and a voice agent (call bot). Optimized deployment pipelines and automated workflows for faster delivery and improved reliability.",
    partTimeYears: "sept 2024 - 2025 | 1 year | Remote, France",
    
    rhinovTitle: "Experience",
    rhinovCompany: "Rhinov - Full Stack & AI Developer Intern",
    rhinovDescription: "Python, Flask, YOLOv5, Node.js, Angular, typescript and Qwik",
    rhinovYears: "April 2023 - August 2023 | 5 months",
    
    redboxTitle: "Experience",
    redboxCompany: "Redbox Communication - Full Stack Developer Intern",
    redboxDescription: "PHP, Symfony",
    redboxYears: "August 2021 - December 2021 | 5 months",
    
    epitechTitle: "Education",
    epitechSchool: "Epitech School of Technology",
    epitechDegree: "Expert in Information Technology (RNCP Level 7)",
    epitechYears: "2020 - 2025 | 5 years",
    
    ahliaTitle: "Education",
    ahliaSchool: "Ahlia University, Bahrain",
    ahliaDegree: "International Exchange Program - IT Department",
    ahliaYears: "2023 - 2024 | 1 year",
    
    // Skills Section
    skillsTitle: "My Skills",
    skillsDescription: "I've worked with a range of technologies in the web development world. Here are my main areas of expertise:",
    frontEnd: "Front-End",
    backEnd: "Back-End",
    tools: "Tools & Others",
    
    // Projects Section
    projectsTitle: "My Projects",
    projectsDescription: "Here are some of the projects I've worked on:",
    viewProject: "View Project",
    risuDescriptionProject: "Risu offers a connected storage locker solution as well as lockers for entertainment rentals. The latter can be customized according to the needs of our partners, and our lockers simplify the organization of your outdoor day. Enjoy your activities at any time with our innovative solution.",
    grandLuxeDriveDescription: "Car rental platform with admin authentication, car management, contact management.",
    eurlscDescription: "eurlsc is a tiling company based in the Basque Country for over 20 years. I developed a website to showcase their services and products.",
    studentLinkDescriptionProject: "Student Link is a platform that connects students with local businesses for internships and job opportunities. It provides a user-friendly interface for students to find relevant opportunities and for businesses to post their job listings.",


    
    // Contact Section
    contactTitle: "Get In Touch",
    contactDescription: "Interested in working together? Feel free to contact me for any project ideas or just to say hi!",
    nameLabel: "Name",
    namePlaceholder: "John Doe",
    emailLabel: "Email",
    emailPlaceholder: "john@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Your message here...",
    submitButton: "Send Message",
    informationContactTitle: "Contact Information",
    Phone: "Phone",
    findMeOn: "Find me on",
    
    // Footer
    footerRights: "All Rights Reserved",
    madeWith: "Made with",
    quikLinks: "Quick Links",
    connect: "Connect with me",
  },
  fr: {
    // Navbar
    home: "Accueil",
    about: "À Propos",
    skills: "Compétences",
    projects: "Projets",
    contact: "Contact",
    
    // Hero Section
    heroGreeting: "Bonjour, je suis",
    heroName: "Hugo Lopes Pinto",
    heroTitle: "Ingénieur Logiciel - Développeur Full Stack - Fondateur d'Articentro",
    heroDescription: "Je suis un jeune développeur passionné par le code et les nouvelles technologies, animé par une véritable soif d’apprendre et de progresser chaque jour. Autonome et curieux, j’aime explorer de nouveaux outils et relever des défis techniques, tout en sachant m’intégrer facilement dans une équipe grâce à mon sens de la collaboration et de l’entraide. Mon adaptabilité et mon envie constante de me dépasser me permettent de contribuer efficacement à des projets variés, tout en continuant à développer mes compétences.",
    heroButton: "Me Contacter",
    
    // About Section
    educationTitle: "Formations",
    experienceTitle: "Expériences",
    internshipTitle: "Stages",
    aboutTitle: "À Propos de mes expériences",
    aboutDescription: `Je suis un ingénieur logiciel diplômé d'Epitech en 2025, passionné par la création d'applications web.
    Avec une solide formation en informatique et un bon sens du design, je donne vie aux idées à travers le code.
    Mon autonomie dans l'apprentissage et mon parcours académique à Epitech m'ont doté d'une connaissance théorique et d'une expérience pratique,
    me permettant de résoudre des problèmes complexes et de fournir des solutions de haute qualité.`,
    aboutEducation: "Formation",
    aboutSchool: "Epitech École de Technologie",
    aboutDegree: "Master en Informatique",
    aboutYears: "2020 - 2025",

    // Experience and Education Cards
    articentroTitle: "Articentro",
    articentroCompany: "Fondateur & Ingénieur Logiciel Full Stack & IA",
    articentroDescription: "Développement complet d’une application SaaS de gestion commerciale destinée aux artisans du bâtiment (devis, factures, clients, paiements, suivis). Projet conçu, développé et déployé de A à Z, de l’analyse du besoin à la mise en production. Stack : Next.js (React), TypeScript, Supabase, jsPDF. Expérience marquée par une forte autonomie, une vision produit complète et une maîtrise du cycle de développement d’un logiciel professionnel.",
    articentroYears: "Juillet 2025 – Aujourd’hui | Remote",

    cycleVistaTitle: "Site Ecommerce",
    cycleVistaCompany: "Cycle Vista Store - Développeur Full Stack",
    cycleVistaDescription: "Cycle Vista est un site ecommerce fictif pour les vélos. Le site est à des fins de démonstration uniquement, aucune commande ou achat réel ne peut être effectué. Stripe est en mode test.",
    cycleVistaYears: "2025",

    risuTitle: "Expérience",
    risuCompany: "RISU - Développeur Full Stack Mobile",
    risuDescription: "Node.js, Flutter, CI/CD, Docker, Git, Scrum",
    risuYears: "2023 - 2025 | 2 ans | Remote",
    
    partTimeTitle: "Expérience",
    partTimeCompany: "Freelance - Développeur Full Stack & IA",
    partTimeDescription: "Participated in a variety of web projects: end-to-end application development as well as adding new features to ongoing projects. Worked with Node.js, React, Qwik, TypeScript, FastAPI, Docker, and Flutter, applying Clean Architecture principles and maintainable coding practices. Implemented AI-powered functionalities: chatbots, API integrations with Python-based AI models, and a voice agent (call bot). Optimized deployment pipelines and automated workflows for faster delivery and improved reliability. ",
    partTimeYears: "sept 2024 - 2025 | 1 an | Remote, France",
    
    rhinovTitle: "Expérience",
    rhinovCompany: "Rhinov - Stagiaire Développeur Full Stack & IA",
    rhinovDescription: "Python, Flask, YOLOv5, Node.js, Angular, typescript et Qwik",
    rhinovYears: "Avril 2023 - Août 2023 | 5 mois",
    
    redboxTitle: "Expérience",
    redboxCompany: "Redbox Communication - Stagiaire Développeur Full Stack",
    redboxDescription: "PHP, Symfony",
    redboxYears: "Août 2021 - Décembre 2021 | 5 mois",
    
    epitechTitle: "Formation",
    epitechSchool: "Epitech École de Technologie",
    epitechDegree: "Expert en Informatique (RNCP Niveau 7)",
    epitechYears: "2020 - 2025 | 5 ans",
    
    ahliaTitle: "Formation",
    ahliaSchool: "Université Ahlia, Bahreïn",
    ahliaDegree: "Programme d'échange international (IT Department)",
    ahliaYears: "2023 - 2024 | 1 an",
    
    // Skills Section
    skillsTitle: "Mes Compétences",
    skillsDescription: "J'ai travaillé avec une variété de technologies dans le monde du développement web. Voici mes principaux domaines d'expertise :",
    frontEnd: "Front-End",
    backEnd: "Back-End",
    tools: "Outils & Autres",
    
    // Projects Section
    projectsTitle: "Mes Projets",
    projectsDescription: "Voici quelques-uns des projets sur lesquels j'ai travaillé :",
    viewProject: "Voir le Projet",
    risuDescriptionProject: "Risu propose une solution de casiers connectés ainsi que des casiers pour la location de loisirs. Ces derniers peuvent être personnalisés selon les besoins de nos partenaires, et nos casiers simplifient l'organisation de votre journée en extérieur. Profitez de vos activités à tout moment grâce à notre solution innovante.",
    grandLuxeDriveDescription: "Plateforme de location de voitures avec authentification admin, gestion des voitures, gestion des contacts.",
    eurlscDescription: "eurlsc est une entreprise de carrelage basée au pays basque depuis plus de 20 ans. j'ai développé un site web pour présenter leurs services et produits.",
    studentLinkDescriptionProject: "Student Link is a platform that connects students with local businesses for internships and job opportunities. It provides a user-friendly interface for students to find relevant opportunities and for businesses to post their job listings.",
    
    // Contact Section
    contactTitle: "Restons en Contact",
    contactDescription: "Intéressé par une collaboration ? N'hésitez pas à me contacter pour toute idée de projet ou simplement pour dire bonjour !",
    nameLabel: "Nom",
    namePlaceholder: "Jean Dupont",
    emailLabel: "Email",
    emailPlaceholder: "jean@exemple.com",
    messageLabel: "Message",
    messagePlaceholder: "Votre message ici...",
    submitButton: "Envoyer",
    informationContactTitle: "Informations de Contact",
    Phone: "Téléphone",
    findMeOn: "Trouvez-moi sur",
    
    // Footer
    footerRights: "Tous Droits Réservés",
    madeWith: "Fait avec",
    quikLinks: "Liens Rapides",
    connect: "Connectez-vous",
  }
};
