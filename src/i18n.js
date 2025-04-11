import { createI18n } from 'vue-i18n';
import { ref } from 'vue';

const messages = {
    en: {
        home: 'Home',
        myProjects: 'My Projects',
        skills: 'Skills',
        experiences: 'Experiences',
        aboutMe: 'About Me',
        contactMe: 'Contact Me',
        portfolio: 'My Portfolio',
        tools : 'Tools',
        backend : 'Backend',
        frontend : 'Frontend',
        "Office Suite" : 'Office Suite',
        "See my projects" : 'See my projects',
        "Not finished" : 'Not finished',
        about : {
            contact:"I would love to connect with you! Feel free to reach out through LinkedIn, GitHub or via email.",
            degree: "Diplomas",
            me : "My name is Florian DUSSUD and I am in my 3rd year of a Computer Science Bachelor's degree in Bourg-en-Bresse. I am a junior web developer and I am passionate about web development. I have acquired skills in both front-end and back-end development, as well as a good knowledge of databases. I am always eager to learn new technologies.",
            exp1 : {
                title: "Apprenticeship at Téréva (MartinBelaysoud)",
                description: "Apprenticeship within the EBuisness team as a developer. I was responsible for resolving various tickets related to anomalies and enhancements on the company's applications assigned to me.",
                date : "From September 2024 to September 2025"            },
            exp2 : {
                title: "Internship at DGFIP",
                description: "Internship at the French public finance department (DGFIP) as a web developer. The goal was to create a playful and interactive tool to present DGFIP's values and career opportunities to young students and interns.",
                date: "From March 2023 to June 2023"
            },
            deg1 : {
                title : "Bachelor's Degree in Computer Science",
                place: "IUT Lyon1 de Bourg-en-Bresse (01)",
                date: "2022 - 2025",
            },
            deg2 : {
                title: "General Baccalaureate with a focus on NSI (Digital and Computer Science) and Mathematics",
                place: "Lycée Aiguerande in Belleville sur Saône (69)",
                date: "2022"
            },
            skills: "See my Skills",
        },
        projects: {
            title: "My Projects",
            allFilter: "All",
            viewProject: "View Project",
            skillsUsed: "Skills used",
            noProjects: "No projects match the selected filters.",
            backToList: "Back to the list",
            "context": "Context",
            "description": "Description",
            "myWork": "What I did",
            "visitSite": "Visit website",
            "notFound": "Project not found",
            technologies: "Technologies",
            links : "Links",
            sourceCode: "Source code",
            website: "Website",
            noLinks : "No links available as the project was done in a company and is internal.",
            tournois: {
                title: "Tournament creation site for ALOAS",
                description: "Development of a web platform to manage sports tournaments for disabled people for the ALOAS association",
                context: "This project was carried out for a university professor’s association that supports people with disabilities or mental challenges. The goal was to build a site for managing sports tournaments like pétanque, tennis, and football, and to help disabled participants follow their progress via team logos.",
                contributions: {
                    "database-setup": "Database setup",
                    "rankings-by-fairplay": "Displaying and calculating team rankings by fair play and goal average per tournament",
                    "match-fixtures-and-results": "Displaying match fixtures and results",
                    "pool-management": "Logic for managing pools and group matches"
                }
            },
            transchlor: {
                title: "Transchlor",
                description: "Web interface for the Transchlor application",
                context: "Transchlor simulates chloride ion transport in reinforced concrete (e.g. bridges) and predicts degradation based on environmental exposure. The goal was to rebuild the interface as a web app, design a database for storing results, and implement user management.",
                contributions: {
                    "weather-file-import":"Weather file import and auto-filled form",
                    "link-between-symfony-api":"Link between Symfony and the Visual Basic project API",
                    "database-creation":"Database creation",
                    "store-calculation-results":"Storing calculation results in the database"
                }
            },
            echec: {
                title: "Chess Game Website",
                description: "Web platform to play chess online",
                context: "This group project aimed to build an online chess game allowing two local players to compete, and replay the game step by step.",
                contributions: {
                    "special-moves-logic": "Special move logic (castling, en passant)",
                    "pawn-promotion-logic": "Pawn promotion logic",
                    "replay-match-move-by-move": "Replay a full match move by move"
                }
            },
            coaster: {
                title: "Roller Coaster Site",
                description: "A site listing roller coasters worldwide on an interactive map with comparisons and stats",
                context: "Frissons & Virages is a web app for roller coaster fans. It shows nearby parks with an interactive map, allows coaster lookup, and displays rankings. It uses data from a public API.",
                contributions: {
                    "database-setup":"Database setup",
                    "api-import-coasters":"API import of coasters from CaptainCoaster",
                    "display-parks-on-map":"Displaying parks on Google Maps and listing coasters per park"
                }
            },
            spotify: {
                title: "Spotify API Website",
                description: "Web app allowing users to favorite songs and artists via the Spotify API",
                context: "Project made during a course using the Spotify API to list songs and artists, search them, and manage favorites.",
                contributions: {
                    "spotify-api-connection":"Connecting to the Spotify API",
                    "list-artists-tracks":"Listing artists and tracks",
                    "search-artists-tracks":"Searching artists and tracks",
                    "manage-favorites":"Favorites management"
                }
            },
            metiers: {
                title: "Job Presentation Site for DGFIP",
                description: "Web app to promote DGFIP careers",
                context: "Developed during my internship at the French public finance department (DGFIP). The goal was to create a playful and interactive tool to present DGFIP's values and career opportunities to young students and interns.",
                contributions: {
                    "research-job-information":"Researching and compiling information about DGFIP values and jobs",
                    "dynamic-interface-for-job-presentation": "Creating a dynamic and fun interface for job presentations",
                    "interactive-mini-games-and-quizzes": "Designing mini-games and quizzes for interactive learning"
                }
            }
        },
    },
    fr: {
        home: 'Accueil',
        myProjects: 'Mes Projets',
        skills: 'Compétences',
        experiences: 'Expériences',
        aboutMe: 'À propos de moi',
        contactMe: 'Contactez-moi',
        portfolio: 'Mon Portfolio',
        tools : 'Outils',
        "Office Suite" : 'Suite Office',
        "See my projects" : 'Voir mes projets',
        "Not finished" : 'Pas encore terminé',
        about : {
            contact:"J'aimerais beaucoup échanger avec vous ! N'hésitez pas à me contacter via LinkedIn, GitHub ou par email.",
            degree: "Diplômes",
            me : "Je m'appelle Florian DUSSUD et je suis en 3ème année de BUT Informatique à Bourg-en-Bresse. Je suis développeur web junior et je suis passionné par le développement web. J'ai acquis des compétences en développement front-end et back-end, ainsi qu'une bonne connaissance des bases de données. Je suis toujours partant pour apprendre de nouvelles technologies.",
            exp1 : {
                title: "Alternance à Téréva (MartinBelaysoud)",
                description: "Alternance au sein de l'équipe EBuisness en tant que développeur. Je devais résoudre les différents tickets d'anomalies et d'évolutions sur les applicatifs de l'entreprise qui m'étaient' affectés",
                date : "De Septembre 2024 à Septembre 2025"
            },
            exp2 : {
                title: "Stage à la DGFIP",
                description: "Stage à la Direction Générale des Finances Publiques (DGFIP) en tant que développeur web. Le but était de créer un outil ludique et interactif pour présenter les valeurs et les métiers de la DGFIP aux jeunes collégiens, lycéens et stagiaires.",
                date: "De Mars 2024 à Juillet 2024"
            },
            deg1 : {
                title : "BUT Informatique",
                place: "IUT Lyon1 de Bourg-en-Bresse (01)",
                date: "2022 - 2025",
            },
            deg2 : {
                title: "Baccalauréat Général option NSI (Numerique et Sciences Informatiques) et Mathématiques",
                place: "Lycée Aiguerande à Belleville sur Saône (69)",
                date: "2022"
            },
            skills: "Voir mes compétences",
        },
        projects: {
            title: "Mes Projets",
            allFilter: "Tous",
            viewProject: "Voir le projet",
            skillsUsed: "Compétences utilisées",
            noProjects: "Aucun projet ne correspond aux filtres sélectionnés.",
            backToList: "Retour à la liste",
            "context": "Contexte",
            "description": "Description",
            "myWork": "Ce que j’ai fait",
            "visitSite": "Voir le site",
            "notFound": "Projet introuvable",
            technologies: "Technologies",
            links : "Liens",
            sourceCode: "Code source",
            website: "Site web",
            noLinks : "Aucun lien disponible car le projet a été fait en entreprise et est en interne.",
            tournois: {
                title: "Site de création de tournoi pour ALOAS",
                description: "Création d'un site web pour la gestion de tournois de sport pour les handicapés de l'association ALOAS",
                context: "Ce projet à été réalisé pour l'association d'un professeur de l'université, elle s'occupe d'handicapé et de personne à déficiance mentale. Le but de ce projet est de créer un site de gestion de tournoi pour plusieurs sports (pétanque,tennis,football) pour faciliter la mise en place de ces tournois lors de journée au sein de l'association. Le site devait permettre la gestion de tournoi mais aussi le fait que les handicapés puissent naviguer sur le site et voir où ils en sont dans le tournoi en fonction de leur logo d'équipe.",
                contributions:{
                    "database-setup": "La mise en place de la Base de Données",
                    "rankings-by-fairplay": "L'affichage et le calcul du classement global par fairplay et par goalaverage des équipes par tournoi",
                    "match-fixtures-and-results": "L'affichage des matchs et des résultats des matchs",
                    "pool-management": "La logique de gestion des poules et matchs de poules"
                }
            },
            transchlor: {
                title: "Transchlor",
                description: "Création d'une interface web pour l'application Transchlor",
                context: "Transchlor est une application de simulation multiphysique du Transport des ions Chlorure dans les structures en béton armé (ponts, etc..), responsable de dégradations en fonction de l'exposition de l'ouvrage. Elle est utilisée pour prédire les dégradations au cours du temps et prévoir les phases d'entretien et de réparation. L’objectif principal de ce travail est de recréer complètement l’interface en créant une interface web, de créer une base de données pour stocker les résultats des calculs et de pouvoir gérer différents utilisateurs.",
                contributions: {
                    "weather-file-import":"Gestion de l'importation des fichiers météo et du remplissage automatique du formulaire",
                    "link-between-symfony-api":"Gestion de la liaison entre symfony et l'API du projet VB",
                    "database-creation":"Création de la Base de Données",
                    "store-calculation-results":"Gestion de l'enregistrement des calculs dans la Base de Données"
                }
            },
            echec: {
                title: "Site de jeu d'échec",
                description: "Création d'un site web pour jouer aux échecs",
                context: "Ce projet a été réalisé dans le cadre d'un projet de groupe. Le but était de créer un site de jeu d'échec en ligne, avec la possibilité de jouer contre un autre joueur en local. Le site devait également permettre de rejouer les parties.",
                contributions: {
                    "special-moves-logic": "Algorithme des coups spéciaux (roque, prise en passant).",
                    "pawn-promotion-logic": "Algorithme de changement de pion en une autre pièce.",
                    "replay-match-move-by-move": "Algorithme permettant de rejouer un match coup par coup."
                }
            },
            coaster: {
                title: "Site de roller coaster",
                description: "Création d'un site qui repertorie tous les roller coaster du monde sur une carte, les compares et d'avoir des statistiques sur chaque coaster",
                context: "Le projet Frissons & Virages est une application web dédiée aux passionnés de montagnes russes et de parcs. Elle permet de voir les parcs à proximité grâce à une carte interactive, consulter les coasters, et accéder à un classement mondial. Elle se base sur une API publique qui fournit les données.",
                contributions: {
                    "database-setup":"Mise en place de la BD",
                    "api-import-coasters":"Algorithme d'import des coasters depuis l'API de CaptainCoaster",
                    "display-parks-on-map":"Mise en place de l'affichage des parcs sur une google map et de la liste de ses coasters quand on clique dessus"
                }
            },
            spotify: {
                title: "Site utilisant l'API de Spotify",
                description: "Création d'un site qui permet de mettre en favoris des sons et des artistes grâce à l'API spotify",
                context: "Projet réalisé dans le cadre d’un cours, le but était d'utiliser l'API spotify pour permettre de lister les sons, les artistes, faire une recherche et ajouter en favoris.",
                contributions: {
                    "spotify-api-connection":"Connexion à l'API de Spotify",
                    "list-artists-tracks":"Listing des artistes et des sons",
                    "search-artists-tracks":"Recherche d'artistes et de sons",
                    "manage-favorites":"Gestion des favoris"
                }
            },
            metiers: {
                title: "Site de présentation des métiers de la DGFIP",
                description: "Création d'un site web pour la présentation des métiers de la DGFIP",
                context: "Projet de stage de deuxième année de BUT Informatique à la DGFIP. L’objectif était de créer une application interactive et accessible destinée à promouvoir les métiers de la DGFIP auprès des collégiens, lycéens et stagiaires, à travers une approche pédagogique et immersive.",
                contributions: {
                    "research-job-information":"Recherche et compilation d'informations sur les différentes valeurs et métiers de la DGFIP",
                    "dynamic-interface-for-job-presentation": "Mise en place d'une interface dynamique et ludique pour la présentation des métiers",
                    "interactive-mini-games-and-quizzes": "Création de mini-jeux et quiz pour rendre l'apprentissage interactif"
                }
            }

        },
    }
};

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages,
});

const locale = ref(i18n.global.locale);

export { i18n, locale };