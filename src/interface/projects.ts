import {skills} from "@/interface/skills";

export const projects = {
    projets : [
        {
            id: "tournois",
            title: "Site de création de tournoi pour ALOAS",
            description: "Création d'un site web pour la gestion de tournois de sport pour les handicapés de l'association ALOAS",
            logo:"/logos/projects/aloas.png",
            skills: skills.skills.filter(skill =>
                ["PHP", "MySQL", "CSS", "JavaScript", "Team"].includes(skill.name)
            )
        },
        {
            id:"metiers",
            title: "Site de présentation des métiers de la DGFIP",
            description: "Création d'un site web pour la présentation des métiers de la DGFIP",
            logo:"/logos/projects/dgfip.png",
            skills: skills.skills.filter(skill =>
                ["Angular", "TypeScript"].includes(skill.name)
            )
        },
        {
            id:"echec",
            title: "Site de jeu d'échec",
            description: "Création d'un site web pour jouer aux échecs",
            logo:"/logos/projects/echec.png",
            skills: skills.skills.filter(skill =>
                ["MySQL", "Vue.js", "Tailwind CSS", "TypeScript","API", "Team"].includes(skill.name)
            )
        },
        {
            id:"coaster",
            title: "Site de roller coaster",
            description: "Création d'un site qui repertorie tous les roller coaster du monde sur une carte, les compares et d'avoir des statistiques sur chaque coaster",
            logo:"/logos/projects/coaster.png",
            skills: skills.skills.filter(skill =>
                ["MySQL", "Symfony","PHP", "Tailwind CSS", "TypeScript","API", "Team"].includes(skill.name)
            )

        },
        {
            id:"spotify",
            title: "Site utilisant l'API de Spotify",
            description: "Création d'un site qui permet de mettre en favoris des sons et des artistes",
            logo:"/logos/projects/spotify.png",
            skills: skills.skills.filter(skill =>
                ["MySQL","PHP", "Symfony", "CSS", "API"].includes(skill.name)
            )
        },
        {
            id:"parcs",
            title: "Application de repérage des parcs nationnaux",
            description: "Création d'une application qui permet de repérer les parcs nationnaux sur une carte et de les comparer",
            logo:"",
            skills: skills.skills.filter(skill =>
                ["Android Studio", "Java","API"].includes(skill.name)
            )
        },
        {
            id:"portfolio",
            title: "Portfolio",
            description: "Création de mon portfolio",
            logo:"",
            skills: skills.skills.filter(skill =>
                ["Vue.js", "TypeScript", "Tailwind CSS"].includes(skill.name)
            )
        }




        ]

}