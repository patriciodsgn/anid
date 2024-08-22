import { createRouter, createWebHistory } from 'vue-router';

import LoginPage from '@/views/LoginPage.vue';

// import Role1Page from '@/views/Role1Page.vue';
import Role2Page from '@/views/Role2Page.vue';

import DatosPrincipales1Page from '@/views/DatosPrincipales1Page.vue';
import DatosPrincipales2aPage from '@/views/DatosPrincipales2aPage.vue';
import DatosPrincipales2bPage from '@/views/DatosPrincipales2bPage.vue';

import Curriculum1Page from '@/views/Curriculum1Page.vue';
import Curriculum2aPage from '@/views/Curriculum2aPage.vue';
// import Curriculum2bPage from '@/views/Curriculum2bPage.vue';

import PostulacionConcursos1Page from '@/views/PostulacionConcursos1Page.vue';
import PostulacionConcursos2aPage from '@/views/PostulacionConcursos2aPage.vue';
import PostulacionConcursos2bPage from '@/views/PostulacionConcursos2bPage.vue';

import Notificaciones1Page from '@/views/Notificaciones1Page.vue';
import Notificaciones2aPage from '@/views/Notificaciones2aPage.vue';
import Notificaciones2bPage from '@/views/Notificaciones2bPage.vue';

import Colaborador1Page from '@/views/Colaborador1Page.vue';
import Colaborador2aPage from '@/views/Colaborador2aPage.vue';
import Colaborador2bPage from '@/views/Colaborador2bPage.vue';

import Configuracion1Page from '@/views/Configuracion1Page.vue';
import Configuracion2aPage from '@/views/Configuracion2aPage.vue';
import Configuracion2bPage from '@/views/Configuracion2bPage.vue';

const routes = [

  { path: '/', component: LoginPage },
  // { path: '/role1', component: Role1Page },
  { path: '/role2', component: Role2Page },
  
  { path: '/datos-principales1', component: DatosPrincipales1Page },
  { path: '/datos-principales2a', component: DatosPrincipales2aPage },
  { path: '/datos-principales2b', component: DatosPrincipales2bPage },

  { path: '/curriculum1', component: Curriculum1Page },
  { path: '/curriculum2a', component: Curriculum2aPage },
  
  { path: '/postulacion-concursos1', component: PostulacionConcursos1Page },
  { path: '/postulacion-concursos2a', component: PostulacionConcursos2aPage },
  { path: '/postulacion-concursos2b', component: PostulacionConcursos2bPage },

  { path: '/notificaciones1', component: Notificaciones1Page },
  { path: '/notificaciones2a', component: Notificaciones2aPage },
  { path: '/notificaciones2b', component: Notificaciones2bPage },
  
  { path: '/colaborador1', component: Colaborador1Page },
  { path: '/colaborador2a', component: Colaborador2aPage },
  { path: '/colaborador2b', component: Colaborador2bPage },
  
  { path: '/configuracion1', component: Configuracion1Page },
  { path: '/configuracion2a', component: Configuracion2aPage },
  { path: '/configuracion2b', component: Configuracion2bPage },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
