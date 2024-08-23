<template>
  <v-footer padless>
    <v-container fluid>

        <div class="logo-footer">
          <div class="bar">
            <div>Version 0.0.1</div>
          </div>
          <div class="bar">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 152 10" class="SvgBarrafooter">
              <path fill="#0F69C4" d="M0 0h68.989v10H0z"></path>
              <path fill="#E22C2C" d="M68.989 0h82.428v10H68.989z"></path>
            </svg>
          </div>
        </div>

        <div class="menu-micro-footer">
          <v-btn class="link-alt" text href="https://anid.cl/calendario-concursos-2024/">Concursos Disponibles</v-btn>
          <v-btn class="link-alt" text href="https://anid.cl/centro-de-ayuda-anid/">Centro de Ayuda ANID</v-btn>
          <v-btn class="link-alt" text href="https://anid.cl/">ANID.cl</v-btn>
        </div>
      
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
