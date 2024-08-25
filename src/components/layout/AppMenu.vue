<template>

  <!-- <img :src="logoAnid" alt="Logo ANID"> -->
  <v-navigation-drawer v-if="shouldShowDrawer" v-model="drawer" :permanent="isLgAndUp" app>
  <!-- Contenido del drawer -->

    <v-list v-if="isActiveRole1">
      <v-list-item-group>

        <v-list-item :class="{ 'active-list-item': route.path === '/datos-principales1' }" href="/datos-principales1" class="d-flex align-center" @click="closeDrawer">
          <span><v-icon left>mdi-account</v-icon></span>
          <span>Datos Principales</span>
        </v-list-item>

        <v-list-item :class="{ 'active-list-item': route.path === '/curriculum1' }" href="/curriculum1" class="d-flex align-center">
          <v-icon left>mdi-file-document</v-icon>
          <span>Curriculum</span>
        </v-list-item>

        <v-list-item :class="{ 'active-list-item': route.path === '/postulacion-concursos1' }" href="/postulacion-concursos1" class="d-flex align-center" @click="closeDrawer">
          <v-icon left>mdi-trophy</v-icon>
          <span>Postulación Concursos</span>
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
</template>

<script>
// import logoAnid from '../../assets/images/logo-anid.png';
export default {
  name: "AppMenu",
  // data() {
  //   return {
  //     logoAnid,
  //   };
  // },
};

</script>

<style scoped>


</style>
