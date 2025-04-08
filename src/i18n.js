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
        projects: {
            title: "My Projects",
            allFilter: "All",
            viewProject: "View Project",
            skillsUsed: "Skills used",
            noProjects: "No projects match the selected filters."
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
        projects: {
            title: "Mes Projets",
            allFilter: "Tous",
            viewProject: "Voir le projet",
            skillsUsed: "Compétences utilisées",
            noProjects: "Aucun projet ne correspond aux filtres sélectionnés."
        },

    }
};

const i18n = createI18n({
    locale: 'en',
    messages,
});

const locale = ref(i18n.global.locale);

export { i18n, locale };