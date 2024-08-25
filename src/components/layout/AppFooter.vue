<template>
  <v-footer class="footer">
    <!-- <v-container class="container"> -->

        <div class="footer__logo">
          <img :src="logoAnid" alt="Logo ANID">
          <div>Version 0.0.1</div>
        </div>

        <div class="footer__menu">
          <v-btn class="link-alt" text href="https://anid.cl/calendario-concursos-2024/">Concursos Disponibles</v-btn>
          <v-btn class="link-alt" text href="https://anid.cl/centro-de-ayuda-anid/">Centro de Ayuda ANID</v-btn>
          <v-btn class="link-alt" text href="https://anid.cl/">ANID.cl</v-btn>
        </div>
      
    <!-- </v-container> -->
  </v-footer>
</template>

<script>
import logoAnid from '../../assets/images/logo-anid.png';
export default {
  name: "AppFooter",
  data() {
    return {
      logoAnid,
    };
  },
};
</script>

<style scoped>


</style>
