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

    }
};

const i18n = createI18n({
    locale: 'en',
    messages,
});

const locale = ref(i18n.global.locale);

export { i18n, locale };