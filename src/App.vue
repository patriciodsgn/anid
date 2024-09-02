<template>
  <v-app id="inspire">
    <!-- Mostrar el drawer solo si no estamos en la ruta raíz (/) -->
    <!-- Botón estilizado de accesibilidad -->
    
    
  
    <!-- Botón de accesibilidad -->
    <div @click="closePanelIfClickedOutside">
      <div class="accessibility-btn" @click.stop="togglePanel">
        <img :src="iconWheelchair" alt="Wheelchair Icon" />
      </div>
      <div v-if="isUsabiVisible" ref="accessibilityPanel" class="panel_usa">
        <div class="btn-primary-v1">
          <v-icon left>mdi-plus</v-icon>
          <span>Aumentar texto</span>
        </div>
        <div class="btn-primary-v1">
          <v-icon left>mdi-minus</v-icon>
          <span>Disminuir texto</span>
        </div>
        <div class="btn-primary-v1">
          <v-icon left>mdi-contrast-box</v-icon>
          <span>Contraste</span>
        </div>
      </div>
    </div>




    <v-navigation-drawer v-if="shouldShowDrawer" v-model="drawer" :permanent="isLgAndUp" app>
    <!-- Contenido del drawer -->

      <v-list v-if="isActiveRole1">
        <v-list-item-group>

          <v-list-item :class="{ 'active-list-item': route.path === '/postulacion-concursos1' }" href="/postulacion-concursos1" class="d-flex align-center" @click="closeDrawer">
            <v-icon left>mdi-trophy</v-icon>
            <span>Postulación Concursos</span>
          </v-list-item>

          <v-list-item :class="{ 'active-list-item': route.path === '/datos-principales1' }" href="/datos-principales1" class="d-flex align-center" @click="closeDrawer">
            <span><v-icon left>mdi-account</v-icon></span>
            <span>Datos Principales</span>
          </v-list-item>

          <v-list-item :class="{ 'active-list-item': route.path === '/curriculum1' }" href="/curriculum1" class="d-flex align-center">
            <v-icon left>mdi-file-document</v-icon>
            <span>Curriculum</span>
          </v-list-item>


          <v-list-item :class="{ 'active-list-item': route.path === '/notificaciones1' }" href="/notificaciones1" class="d-flex align-center" @click="closeDrawer">
            <v-icon left>mdi-bell</v-icon>
            <span>Notificaciones</span>
          </v-list-item>

          <v-list-item :class="{ 'active-list-item': route.path === '/colaborador1' }" href="/colaborador1" class="d-flex align-center" @click="closeDrawer">
            <v-icon left>mdi-account-group</v-icon>
            <span>Colaborador</span>
          </v-list-item>

          <v-list-item :class="{ 'active-list-item': route.path === '/configuracion1' }" href="/configuracion1" class="d-flex align-center" @click="closeDrawer">
            <v-icon left>mdi-cog</v-icon>
            <span>Configuración</span>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item :class="{ 'active-list-item': route.path === '/' }" href="/" class="d-flex align-center" @click="closeDrawer">
            <v-icon left>mdi-logout</v-icon>
            <span>Cerrar Sesión</span>
          </v-list-item>


        </v-list-item-group>
      </v-list>



      <v-list v-if="isActiveRole2a">
        <v-list-item-group>

          <v-list-item :class="{ 'active-list-item': route.path === '/datos-principales2a' }" href="/datos-principales2a" class="d-flex align-center" @click="closeDrawer">
            <span><v-icon left>mdi-account</v-icon></span>
            <span>Datos Principales</span>
          </v-list-item>

          <v-list-item :class="{ 'active-list-item': route.path === '/postulacion-concursos2a' }" href="/postulacion-concursos2a" class="d-flex align-center" @click="closeDrawer">
            <v-icon left>mdi-trophy</v-icon>
            <span>Postulación Concursos</span>
          </v-list-item>

          <v-list-item :class="{ 'active-list-item': route.path === '/notificaciones2a' }" href="/notificaciones2a" class="d-flex align-center" @click="closeDrawer">
            <v-icon left>mdi-bell</v-icon>
            <span>Notificaciones</span>
          </v-list-item>

          <v-list-item :class="{ 'active-list-item': route.path === '/colaborador2a' }" href="/colaborador2a" class="d-flex align-center" @click="closeDrawer">
            <v-icon left>mdi-account-group</v-icon>
            <span>Colaborador</span>
          </v-list-item>

          <v-list-item :class="{ 'active-list-item': route.path === '/configuracion2a' }" href="/configuracion2a" class="d-flex align-center" @click="closeDrawer">
            <v-icon left>mdi-cog</v-icon>
            <span>Configuración</span>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item :class="{ 'active-list-item': route.path === '/' }" href="/" class="d-flex align-center" @click="closeDrawer">
            <v-icon left>mdi-logout</v-icon>
            <span>Cerrar Sesión</span>
          </v-list-item>

        </v-list-item-group>
      </v-list>




      <v-list v-if="isActiveRole2b">
        <v-list-item-group>

          <v-list-item :class="{ 'active-list-item': route.path === '/datos-principales2b' }" href="/datos-principales2b" class="d-flex align-center" @click="closeDrawer">
            <span><v-icon left>mdi-account</v-icon></span>
            <span>Datos Principales</span>
          </v-list-item>

          <v-list-item :class="{ 'active-list-item': route.path === '/postulacion-concursos2b' }" href="/postulacion-concursos2b" class="d-flex align-center" @click="closeDrawer">
            <v-icon left>mdi-trophy</v-icon>
            <span>Postulación Concursos</span>
          </v-list-item>

          <v-list-item :class="{ 'active-list-item': route.path === '/notificaciones2b' }" href="/notificaciones2b" class="d-flex align-center" @click="closeDrawer">
            <v-icon left>mdi-bell</v-icon>
            <span>Notificaciones</span>
          </v-list-item>

          <v-list-item :class="{ 'active-list-item': route.path === '/colaborador2b' }" href="/colaborador2b" class="d-flex align-center" @click="closeDrawer">
            <v-icon left>mdi-account-group</v-icon>
            <span>Colaborador</span>
          </v-list-item>

          <v-list-item :class="{ 'active-list-item': route.path === '/configuracion2b' }" href="/configuracion2b" class="d-flex align-center" @click="closeDrawer">
            <v-icon left>mdi-cog</v-icon>
            <span>Configuración</span>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item :class="{ 'active-list-item': route.path === '/' }" href="/" class="d-flex align-center" @click="closeDrawer">
            <v-icon left>mdi-logout</v-icon>
            <span>Cerrar Sesión</span>
          </v-list-item>

        </v-list-item-group>
      </v-list>


    </v-navigation-drawer>

    <!-- Barra superior -->
    <v-app-bar class="header">
      <v-app-bar-nav-icon class="header__ham" v-if="shouldShowDrawer && !isLgAndUp" @click="drawer = !drawer" />

      <v-app-bar-title class="header__logo">
        <img  :src="logoAnid1"  class="header__logo-img1" alt="Logo ANID">
        <img  :src="logoPlataforma1"  class="header__logo-img2" alt="Logo Plataforma">
        <img  :src="logoPlataforma2"  class="header__logo-img3" alt="Logo Plataforma2">
      </v-app-bar-title>

      <div v-if="isLogin">
        <v-btn>
          <v-icon left>mdi-earth</v-icon>
          <span>EN</span>
        </v-btn>
      </div>
      
      <div v-if="isActiveRole1" class="user">
        <img class="user__pic" :src=profilePato alt="">
        <div class="user__profile">
          <div class="user__name">Patricio Garrido</div>
          <div class="user__org">patricio@usach.cl</div>
          <div class="user__hist">Último ingreso: 22:12:12 - 8/10/24</div>
        </div>
      </div>
      <div v-if="isActiveRole2a" class="block-user-v1">
        <img class="block-user-v1--img" src="https://idd.cl/d/anid/assets/img/profile-cote.png" alt="">
        <div class="block-user-v1--profile">
          <div class="block-user-v1--name">María José Ensignia</div>
          <div class="block-user-v1--org">PUC.cl</div>
          <div class="block-user-v1--hist">Último ingreso: 10:21:21 - 9/11/24</div>
        </div>
      </div>
      <div v-if="isActiveRole2b" class="block-user-v1">
        <img class="block-user-v1--img" src="https://idd.cl/d/anid/assets/img/profile-cote.png" alt="">
        <div class="block-user-v1--profile">
          <div class="block-user-v1--name">María José Ensignia(R)</div>
          <div class="block-user-v1--org">PUC.cl</div>
          <div class="block-user-v1--hist">Último ingreso: 10:21:21 - 9/11/24</div>
        </div>
      </div>

    </v-app-bar>

    <v-main>
      <!-- Contenido principal -->
      <router-view />
    </v-main>

    <AppFooter />

  </v-app>
</template>

<script setup>

import profilePato from "./assets/images/profile-pato.png";
import iconWheelchair from './assets/images/icon-wheelchair.svg';

import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useDisplay } from 'vuetify'
// import AppBar from '@/components/layout/AppBar.vue'
// import AppMenu from '@/components/layout/AppMenu.vue'
import AppFooter from '@/components/layout/AppFooter.vue'


import logoAnid1 from '../src/assets/images/logo-anid1.svg';
import logoPlataforma1 from '../src/assets/images/logo-plataforma1.svg';
import logoPlataforma2 from '../src/assets/images/logo-plataforma2.svg';

// Estado del drawer
const drawer = ref(false)

const isUsabiVisible = ref(false)
const togglePanel = () => {
  isUsabiVisible.value = !isUsabiVisible.value
}

// Verificar si la pantalla es grande
const { lgAndUp } = useDisplay()
const isLgAndUp = computed(() => lgAndUp.value)

// Obtener la ruta actual
const route = useRoute()

// Condición para mostrar el drawer solo en rutas específicas
const shouldShowDrawer = computed(() => {
  // No mostrar el drawer en la ruta '/' o '/role'
  return route.path !== '/' && route.path !== '/role2'
})

// Verificar si el drawer debería estar abierto en pantallas grandes
watch([isLgAndUp, shouldShowDrawer], ([isLgAndUpVal, shouldShowDrawerVal]) => {
  if (isLgAndUpVal && shouldShowDrawerVal) {
    drawer.value = true
  }
}, { immediate: true })




// const isRootPath = computed(() => route.path === '/');
const isLogin = computed(() => 
  route.path === '/'
);

const isActiveRole1 = computed(() => 
  route.path === '/datos-principales1'
  || route.path === '/curriculum1'
  || route.path === '/postulacion-concursos1'
  || route.path === '/notificaciones1'
  || route.path === '/colaborador1'
  || route.path === '/configuracion1'
);

const isActiveRole2a = computed(() => 
  route.path === '/datos-principales2a'
  || route.path === '/curriculum2a'
  || route.path === '/postulacion-concursos2a'
  || route.path === '/notificaciones2a'
  || route.path === '/colaborador2a'
  || route.path === '/configuracion2a'
);

const isActiveRole2b = computed(() => 
  route.path === '/datos-principales2b'
  || route.path === '/curriculum2b'
  || route.path === '/postulacion-concursos2b'
  || route.path === '/notificaciones2b'
  || route.path === '/colaborador2b'
  || route.path === '/configuracion2b'
);









</script>

<style scoped>





</style>
