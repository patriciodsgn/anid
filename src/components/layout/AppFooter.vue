<template>
  <v-footer padless>
    <v-container fluid>
      <v-row no-gutters>
        <v-col class="white--text order-last order-md-first text-md-center" cols="12" md="4" xs="12">
          <div class="bar">
            <span>Version 0.0.1</span>
          </div>
          <div class="bar">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 152 10" class="SvgBarrafooter">
              <path fill="#0F69C4" d="M0 0h68.989v10H0z"></path>
              <path fill="#E22C2C" d="M68.989 0h82.428v10H68.989z"></path>
            </svg>
          </div>
        </v-col>
        <v-col class="menu-micro-footer text-md-right center" cols="12" md="8" xs="12">
          <v-btn class="link-alt" text href="https://anid.cl/calendario-concursos-2024/">Concursos Disponibles</v-btn>
          <v-btn class="link-alt" text href="https://anid.cl/centro-de-ayuda-anid/">Centro de Ayuda ANID</v-btn>
          <v-btn class="link-alt" text href="https://anid.cl/">ANID.cl</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>



</style>
