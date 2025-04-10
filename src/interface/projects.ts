import { skills } from "@/interface/skills";

export const projects = {
    projets: [
        {
            id: "tournois",
            title: "Site de création de tournoi pour ALOAS",
            description:
                "Création d'un site web pour la gestion de tournois de sport pour les handicapés de l'association ALOAS",
            logo: "/logos/projects/aloas.png",
            context: "Projet réalisé dans le cadre d’un partenariat avec une association locale engagée dans l’inclusion par le sport.",
            contributions: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
            ],
            skills: skills.skills.filter(skill =>
                ["PHP", "MySQL", "CSS", "JavaScript", "Team"].includes(skill.name)
            )
        },
        {
            id: "metiers",
            title: "Site de présentation des métiers de la DGFIP",
            description:
                "Création d'un site web pour la présentation des métiers de la DGFIP",
            logo: "/logos/projects/dgfip.png",
            context: "Projet commandité dans le cadre d'une campagne de valorisation des métiers de la fonction publique.",
            contributions: [
                "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
                "Cillum dolore eu fugiat nulla pariatur.",
                "Excepteur sint occaecat cupidatat non proident.",
            ],
            skills: skills.skills.filter(skill =>
                ["Angular", "TypeScript"].includes(skill.name)
            )
        },
        {
            id: "echec",
            title: "Site de jeu d'échec",
            description: "Création d'un site web pour jouer aux échecs",
            logo: "/logos/projects/echec.png",
            context: "Projet personnel développé pour expérimenter les algorithmes de jeu et l’interaction en temps réel.",
            contributions: [
                "Anim id est laborum lorem ipsum dolor sit amet.",
                "Consectetur adipiscing elit, sed do eiusmod tempor.",
                "Reprehenderit in voluptate velit esse cillum dolore.",
            ],
            skills: skills.skills.filter(skill =>
                ["MySQL", "Vue.js", "Tailwind CSS", "TypeScript", "API", "Team"].includes(skill.name)
            )
        },
        {
            id: "coaster",
            title: "Site de roller coaster",
            description:
                "Création d'un site qui repertorie tous les roller coaster du monde sur une carte, les compares et d'avoir des statistiques sur chaque coaster",
            logo: "/logos/projects/coaster.png",
            context: "Projet long réalisé dans le cadre d’un module SIG et data visualization.",
            contributions: [
                "Dolore magna aliqua enim ad minim veniam.",
                "Ut aliquip ex ea commodo consequat.",
                "Duis aute irure dolor in reprehenderit in voluptate.",
            ],
            skills: skills.skills.filter(skill =>
                ["MySQL", "Symfony", "PHP", "Tailwind CSS", "TypeScript", "API", "Team"].includes(skill.name)
            )
        },
        {
            id: "spotify",
            title: "Site utilisant l'API de Spotify",
            description:
                "Création d'un site qui permet de mettre en favoris des sons et des artistes",
            logo: "/logos/projects/spotify.png",
            context: "Projet réalisé dans le cadre d’un atelier API tierces.",
            contributions: [
                "Cupidatat non proident, sunt in culpa qui officia deserunt.",
                "Mollit anim id est laborum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ],
            skills: skills.skills.filter(skill =>
                ["MySQL", "PHP", "Symfony", "CSS", "API"].includes(skill.name)
            )
        },
        {
            id: "parcs",
            title: "Application de repérage des parcs nationnaux",
            description:
                "Création d'une application qui permet de repérer les parcs nationnaux sur une carte et de les comparer",
            logo: "",
            context: "Application mobile développée dans le cadre d’un projet SIG sur mobile.",
            contributions: [
                "Sed ut perspiciatis unde omnis iste natus error sit.",
                "Voluptatem accusantium doloremque laudantium.",
                "Totam rem aperiam, eaque ipsa quae ab illo inventore.",
            ],
            skills: skills.skills.filter(skill =>
                ["Android Studio", "Java", "API"].includes(skill.name)
            )
        },
        {
            id: "portfolio",
            title: "Portfolio",
            description: "Création de mon portfolio",
            logo: "",
            context: "Site personnel pour présenter mes compétences, projets et parcours.",
            contributions: [
                "Autem vel eum iure reprehenderit qui in ea voluptate velit.",
                "Esse quam nihil molestiae consequatur.",
                "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            ],
            skills: skills.skills.filter(skill =>
                ["Vue.js", "TypeScript", "Tailwind CSS"].includes(skill.name)
            )
        }
    ]
};
