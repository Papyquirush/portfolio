import { skills } from "@/interface/skills";

export const projects = {
    projets: [
        {
            id: "tournois",
            title: "Site de création de tournoi pour ALOAS",
            description:
                "Création d'un site web pour la gestion de tournois de sport pour les handicapés de l'association ALOAS",
            images: [
                "/logos/projects/aloas1.png",
                "/logos/projects/aloas2.png",
                "/logos/projects/aloas3.png",
            ],
            context: "Ce projet à été réalisé pour l'association d'un professeur de l'université, elle s'occupe d'handicapé et de personne à déficiance mentale. Le but de ce projet est de créer un site de gestion de tournoi pour plusieurs sports (pétanque,tennis,football) pour faciliter la mise en place de ces tournois lors de journée au sein de l'association. Le site devait permettre la gestion de tournoi mais aussi le fait que les handicapés puissent naviguer sur le site et voir où ils en sont dans le tournoi en fonction de leur logo d'équipe.",
            contributions: [
                "La mise en place de la Base de Données",
                "L'affichage et le calcul du classement global par fairplay et par goalaverage des équipes par tournoi",
                "L'affichage des matchs et des résultats des matchs",
                "La logique de gestion des poules et matchs de poules"
            ],
            skills: skills.skills.filter(skill =>
                ["PHP", "MySQL", "CSS", "JavaScript", "Team"].includes(skill.name)
            ),
            links: [
                "https://iutbg-gitlab.iutbourg.univ-lyon1.fr/sae-but31/2024-25-web/gestion-tournois-aloas",

                ]
        },
        {
            id: "metiers",
            title: "Site de présentation des métiers de la DGFIP",
            description:
                "Création d'un site web pour la présentation des métiers de la DGFIP",
            images: [
                "/logos/projects/dgfip.png",
            ],
            context: "Ce projet a été réalisé dans le cadre de mon stage de deuxième année de BUT Informatique, au sein de la Direction Générale des Finances Publiques (DGFIP). L’objectif principal était de concevoir une application ludique, interactive et accessible, destinée à promouvoir les métiers de la DGFIP auprès des collégiens, lycéens ainsi que des nouveaux stagiaires et alternants. Dans un contexte de renouvellement générationnel et de besoin en attractivité, la DGFIP souhaite valoriser ses missions, ses valeurs, et les opportunités de carrière qu’elle propose. L’application vise donc à susciter l’intérêt des jeunes pour les métiers de la fonction publique, et plus particulièrement pour ceux de la DGFIP, à travers une approche pédagogique et immersive.",
            contributions: [
                "Recherche et compilation d'informations sur les différentes valeurs et métiers de la DGFIP.",
                "Mise en place d'une interface dynamique et ludique pour la présentation des métiers.",
                "Création de mini-jeux et quiz pour rendre l'apprentissage interactif.",
            ],
            skills: skills.skills.filter(skill =>
                ["Angular", "TypeScript"].includes(skill.name)
            ),
            links: [

            ]
        },
        {
            id: "echec",
            title: "Site de jeu d'échec",
            description: "Création d'un site web pour jouer aux échecs",
            images: [
                "/logos/projects/echec.png",
            ],
            context: "Ce projet a été réalisé dans le cadre d'un projet de groupe. Le but était de créer un site de jeu d'échec en ligne, avec la possibilité de jouer contre un autre joueur en local. Le site devait également permettre de rejouer les parties.",
            contributions: [
                "Algorithme des coups spéciaux (roque, prise en passant).",
                "Algorithme de changement de pion en une autre pièce.",
                "Algorithme permettant de rejouer un match coup par coup.",
            ],
            skills: skills.skills.filter(skill =>
                ["MySQL", "Vue.js", "Tailwind CSS", "TypeScript", "API", "Team"].includes(skill.name)
            ),
            links: [

            ]
        },
        {
            id: "coaster",
            title: "Site de roller coaster",
            description:
                "Création d'un site qui repertorie tous les roller coaster du monde sur une carte, les compares et d'avoir des statistiques sur chaque coaster",
            images: [
                "/logos/projects/coaster.png",
            ],
            context: "Projet long réalisé dans le cadre d’un module SIG et data visualization.",
            contributions: [
                "Dolore magna aliqua enim ad minim veniam.",
                "Ut aliquip ex ea commodo consequat.",
                "Duis aute irure dolor in reprehenderit in voluptate.",
            ],
            skills: skills.skills.filter(skill =>
                ["MySQL", "Symfony", "PHP", "Tailwind CSS", "TypeScript", "API", "Team"].includes(skill.name)
            ),
            links: [

            ]
        },
        {
            id: "spotify",
            title: "Site utilisant l'API de Spotify",
            description:
                "Création d'un site qui permet de mettre en favoris des sons et des artistes",
            images: [
                "/logos/projects/spotify.png",
            ],
            context: "Projet réalisé dans le cadre d’un atelier API tierces.",
            contributions: [
                "Cupidatat non proident, sunt in culpa qui officia deserunt.",
                "Mollit anim id est laborum.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ],
            skills: skills.skills.filter(skill =>
                ["MySQL", "PHP", "Symfony", "CSS", "API"].includes(skill.name)
            ),
            links: [

            ]
        },
        {
            id: "transchlor",
            title: "Transchlor",
            description: "Création d'une interface web pour l'application Transchlor",
            images: [
                "/logos/projects/transchlor1.png",
                "/logos/projects/transchlor2.png",
                "/logos/projects/transchlor3.png",
            ],
            context: "Site personnel pour présenter mes compétences, projets et parcours.",
            contributions: [
                "Autem vel eum iure reprehenderit qui in ea voluptate velit.",
                "Esse quam nihil molestiae consequatur.",
                "Vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
            ],
            skills: skills.skills.filter(skill =>
                ["MySQL", "Symfony", "Tailwind CSS", "PHP","API", "Team","Visual Basic"].includes(skill.name)
            ),
            links: [

            ]
        }
    ]
};
