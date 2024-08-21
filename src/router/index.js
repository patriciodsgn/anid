import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from '@/views/LoginPage.vue';
import RolePage from '@/views/RolePage.vue';

import DatosPrincipalesPage from '@/views/DatosPrincipalesPage.vue';
import CurriculumPage from '@/views/CurriculumPage.vue';
import PostulacionConcursosPage from '@/views/PostulacionConcursosPage.vue';

import NotificacionesPage from '@/views/NotificacionesPage.vue';
import ColaboradorPage from '@/views/ColaboradorPage.vue';
import ConfiguracionPage from '@/views/ConfiguracionPage.vue';

const routes = [

  { path: '/', component: LoginPage },
  { path: '/role', component: RolePage },
  
  { path: '/datos-principales', component: DatosPrincipalesPage },
  { path: '/curriculum', component: CurriculumPage },
  { path: '/postulacion-concursos', component: PostulacionConcursosPage },

  { path: '/notificaciones', component: NotificacionesPage },
  { path: '/colaborador', component: ColaboradorPage },
  { path: '/configuracion', component: ConfiguracionPage },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
