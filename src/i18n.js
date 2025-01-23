import { createI18n } from 'vue-i18n';

const messages = {
    en: {
        home: 'Home',
        myProjects: 'My Projects',
        skills: 'Skills',
        experiences: 'Experiences',
        aboutMe: 'About Me',
        contactMe: 'Contact Me',
        portfolio: 'My Portfolio'
    },
    fr: {
        home: 'Accueil',
        myProjects: 'Mes Projets',
        skills: 'Compétences',
        experiences: 'Expériences',
        aboutMe: 'À propos de moi',
        contactMe: 'Contactez-moi',
        portfolio: 'Mon Portfolio'
    }
};

const i18n = createI18n({
    locale: 'en',
    messages,
});

export default i18n;