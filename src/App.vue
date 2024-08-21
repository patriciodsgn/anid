<template>
  <v-app id="inspire">
    <!-- Mostrar el drawer solo si no estamos en la ruta raíz (/) -->

    <v-navigation-drawer v-if="shouldShowDrawer" v-model="drawer" :permanent="isLgAndUp" app>
    <!-- Contenido del drawer -->

      <v-list>
        <v-list-item-group>

          <v-list-item href="/datos-principales" class="d-flex align-center">
            <span><v-icon left>mdi-account</v-icon></span>
            <span>Datos Principales</span>
          </v-list-item>

          <v-list-item href="/curriculum" class="d-flex align-center">
            <v-icon left>mdi-file-document</v-icon>
            <span>Curriculum</span>
          </v-list-item>

          <v-list-item href="/postulacion-concursos" class="d-flex align-center">
            <v-icon left>mdi-trophy</v-icon>
            <span>Postulación Concursos</span>
          </v-list-item>

          <v-list-item href="/notificaciones" class="d-flex align-center">
            <v-icon left>mdi-bell</v-icon>
            <span>Notificaciones</span>
          </v-list-item>

          <v-list-item href="/colaborador" class="d-flex align-center">
            <v-icon left>mdi-account-group</v-icon>
            <span>Colaborador</span>
          </v-list-item>

          <v-list-item href="/configuracion" class="d-flex align-center">
            <v-icon left>mdi-cog</v-icon>
            <span>Configuración</span>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item href="/" class="d-flex align-center">
            <v-icon left>mdi-logout</v-icon>
            <span>Cerrar Sesión</span>
          </v-list-item>

        </v-list-item-group>
      </v-list>

    </v-navigation-drawer>

    <!-- Barra superior -->
    <v-app-bar class="v-app-bar">
      <v-app-bar-nav-icon v-if="shouldShowDrawer && !isLgAndUp" @click="drawer = !drawer" />
      <v-app-bar-title>
        <div class="headline">SISTEMA DE POSTULACIONES</div>
        <div><small>Agencia Nacional de Investigación y Desarrollo</small></div>
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <!-- Contenido principal -->
      <router-view />
    </v-main>

    <AppFooter />

  </v-app>
</template>

<script setup>



import { ref, computed, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useDisplay } from 'vuetify'
import AppFooter from '@/components/layout/AppFooter.vue'

// Estado del drawer
const drawer = ref(false)

// Verificar si la pantalla es grande
const { lgAndUp } = useDisplay()
const isLgAndUp = computed(() => lgAndUp.value)

// Obtener la ruta actual
const route = useRoute()

// Condición para mostrar el drawer solo en rutas específicas
const shouldShowDrawer = computed(() => {
  // No mostrar el drawer en la ruta '/' o '/role'
  return route.path !== '/' && route.path !== '/role'
})

// Verificar si el drawer debería estar abierto en pantallas grandes
watch([isLgAndUp, shouldShowDrawer], ([isLgAndUpVal, shouldShowDrawerVal]) => {
  if (isLgAndUpVal && shouldShowDrawerVal) {
    drawer.value = true
  }
}, { immediate: true })
</script>

<style scoped>

.v-toolbar {
  background-color: #0a1631!important;
  color: #fff;
}

.v-navigation-drawer {
  background-color: #0a1631;
  color: #fff;
}


.v-footer{
  background-color: #0a1631;
  color: #fff;
}



/* 

.v-list-item{
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  position: relative;
  border: 2px solid #0f0;
}

.v-list-item__content{
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  position: relative;
  border: 1px solid #0f0;
}

.v-icon{
  flex-wrap: wrap;
  position: relative;
  border: 1px solid #f00;
  width: fit-content;
  display: inline;
}

.v-list-item-title{
  position: relative;
  border: 1px solid #ff0;
  width: fit-content;
}


.v-list-item__content{
  display: flex;
  flex-direction: row;
}

class="d-flex align-center" */
</style>
