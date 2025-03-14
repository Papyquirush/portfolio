import { createApp } from 'vue'
import App from './App.vue'
import {i18n} from './i18n';
import '@fortawesome/fontawesome-free/css/all.css';
import './index.css'
import router from './router';


createApp(App).use(router).use(i18n).mount('#app')
