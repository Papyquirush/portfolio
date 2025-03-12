import { skills } from "@/interface/skills";

export const categories = {
    category: [
        {
            id: "backend",
            title: "backend",
            description: "Symfony, MySQL, Java...",
            skills: skills.skills.filter(skill =>
                ["PHP", "MySQL", "Java", "Symfony", "C++", "CakePHP", "Angular"].includes(skill.name)
            )
        },
        {
            id: "frontend",
            title: "frontend",
            description: "TypeScript, Vue.js, Tailwind CSS ...",
            skills: skills.skills.filter(skill =>
                ["HTML", "CSS", "JavaScript", "TypeScript", "Tailwind CSS", "Vue.js", "Bootstrap"].includes(skill.name)
            )
        },
        {
            id: "tools",
            title: "tools",
            description: "Git, Docker, Talend...",
            skills: skills.skills.filter(skill =>
                ["JetBrains Tools", "VS Code", "Postman", "Office Suite", "GitHub", "GitLab", "Android Studio", "Inkscape", "QT Creator", "Talend", "Docker"].includes(skill.name)
            )
        }
    ]
}