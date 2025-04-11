import { skills } from "@/interface/skills";

export const projects = {
    projets: [
        {
            id: "tournois",
            images: [
                "/logos/projects/aloas1.png",
                "/logos/projects/aloas2.png",
                "/logos/projects/aloas3.png",
            ],
            skills: skills.skills.filter(skill =>
                ["PHP", "MySQL", "CSS", "JavaScript", "Team"].includes(skill.name)
            ),
            contributions: [
                "database-setup",
                "rankings-by-fairplay",
                "match-fixtures-and-results",
                "pool-management"
            ],
            links: [
                "https://iutbg-gitlab.iutbourg.univ-lyon1.fr/sae-but31/2024-25-web/gestion-tournois-aloas",
                "https://aloas-tournoi.com/"
                ]
        },
        {
            id: "transchlor",
            images: [
                "/logos/projects/transchlor1.png",
                "/logos/projects/transchlor2.png",
                "/logos/projects/transchlor3.png",
            ],
            skills: skills.skills.filter(skill =>
                ["MySQL", "Symfony", "Tailwind CSS", "PHP","API", "Team","Visual Basic"].includes(skill.name)
            ),
            contributions: [
                "weather-file-import",
                "link-between-symfony-api",
                "database-creation",
                "store-calculation-results"
            ],
            links: [
                "https://github.com/AntonRiviere/TransChlorWeb",
            ]
        },
        {
            id: "echec",
            images: [
                "/logos/projects/echec.png",
            ],
            skills: skills.skills.filter(skill =>
                ["MySQL", "Vue.js", "Tailwind CSS", "TypeScript", "API", "Team"].includes(skill.name)
            ),
            contributions: [
                "special-moves-logic",
                "pawn-promotion-logic",
                "replay-match-move-by-move"
            ],
            links: [
                "https://github.com/Papyquirush/VueEchec",
            ]
        },
        {
            id: "coaster",
            images: [
                "/logos/projects/coaster.png",
            ],
            skills: skills.skills.filter(skill =>
                ["MySQL", "Symfony", "PHP", "Tailwind CSS", "TypeScript", "API", "Team"].includes(skill.name)
            ),
            contributions: [
                "database-setup",
                "api-import-coasters",
                "display-parks-on-map"
            ],
            links: [
                "https://github.com/Papyquirush/VueEchec",
            ]
        },
        {
            id: "spotify",
            images: [
                "/logos/projects/spotify.png",
            ],
            skills: skills.skills.filter(skill =>
                ["MySQL", "PHP", "Symfony", "CSS", "API"].includes(skill.name)
            ),
            contributions: [
                "spotify-api-connection",
                "list-artists-tracks",
                "search-artists-tracks",
                "manage-favorites"
            ],
            links: [
                "https://github.com/Papyquirush/Tp_spot",
            ]
        },
        {
            id: "metiers",
            images: [
                "/logos/projects/dgfip.png",
            ],
            skills: skills.skills.filter(skill =>
                ["Angular", "TypeScript"].includes(skill.name)
            ),
            contributions: [
                "research-job-information",
                "dynamic-interface-for-job-presentation",
                "interactive-mini-games-and-quizzes"
            ],
            links: [

            ]
        },
    ]
};
