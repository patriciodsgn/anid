import { createApp } from 'vue';
import App from './App.vue';
import router from './router';  // Aquí estás importando el router
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import '@mdi/font/css/materialdesignicons.css'; // Asegúrate de importar los estilos de los iconos

// Importar los estilos globales
import './assets/styles/global.css';

loadFonts();

createApp(App)
  .use(router)  // Usar el router en la aplicación
  .use(vuetify)
  .mount('#app');
