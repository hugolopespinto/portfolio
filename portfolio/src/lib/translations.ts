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
    heroName: "Hugo Lopes pinto",
    heroTitle: "Web Developer - Full Stack",
    heroDescription: "I'm a passionate web developer with expertise in modern web technologies. Currently in my 5th year at Epitech with graduation in 2025.",
    heroButton: "Contact Me",
    
    // About Section
      aboutTitle: "About Me",
      aboutDescription: `I am a web developer in my 5th year at Epitech, passionate about creating elegant and functional web applications.
      With a solid background in computer science and a good sense of design, I bring ideas to life through code.
      My self-learning ability and academic journey at Epitech have provided me with theoretical knowledge and practical experience,
      enabling me to solve complex problems and deliver high-quality solutions.`,
      aboutEducation: "Education",
      aboutSchool: "Epitech School of Technology",
      aboutDegree: "Master's Degree in Computer Science",
      aboutYears: "2020 - 2025", 
    risuTitle: "Experience",
    risuCompany: "RISU - Full Stack Mobile Developer",
    risuDescription: "Node.js, Flutter, CI/CD, Docker, Git, Scrum",
    risuYears: "2023 - 2025 | 2 years",
    
    partTimeTitle: "Experience",
    partTimeCompany: "Independant - Full Stack Developer",
    partTimeDescription: "End-to-end full stack projects with Node.js, React, TypeScript, Agile",
    partTimeYears: "2024 - 2025 | 1 year",
    
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
    heroName: "Hugo Lopes pinto",
    heroTitle: "Développeur Web - Full Stack",
    heroDescription: "Je suis un développeur web passionné avec expertise en technologies web modernes. Actuellement en 5ème année à Epitech avec l'obtention de mon diplôme en 2025.",
    heroButton: "Me Contacter",
    
    // About Section
    aboutTitle: "À Propos",
    aboutDescription: `Je suis un développeur web en 5ème année à Epitech, passionné par la création d'applications web élégantes et fonctionnelles.
    Avec une solide formation en informatique et un bon sens du design, je donne vie aux idées à travers le code.
    Mon sens de l'apprentissage en autonomie et mon parcours académique à Epitech m'ont dotés d'une connaissance théorique et d'une expérience pratique,
    me permettant de résoudre des problèmes complexes et de fournir des solutions de haute qualité.`,
    aboutEducation: "Formation",
    aboutSchool: "Epitech École de Technologie",
    aboutDegree: "Master en Informatique",
    aboutYears: "2020 - 2025",

    // Experience and Education Cards
    risuTitle: "Expérience",
    risuCompany: "RISU - Développeur Full Stack Mobile",
    risuDescription: "Node.js, Flutter, CI/CD, Docker, Git, Scrum",
    risuYears: "2023 - 2025 | 2 ans",
    
    partTimeTitle: "Expérience",
    partTimeCompany: "Freelance - Développeur Full Stack",
    partTimeDescription: "Projets full stack de A à Z avec Node.js, React, TypeScript, Agile",
    partTimeYears: "2024 - 2025 | 1 an",
    
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
