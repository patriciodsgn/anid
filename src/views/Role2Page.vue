<template>
    <v-container class="d-flex justify-center align-center block-v1 h-100" fill-height>

    <div class="area-v3">
    <v-row justify="center">
      <v-col cols="12" md="5">
        <v-card class="card-v1">
          <v-card-title class="text-center">
            <v-icon class="mr-2">mdi-account</v-icon> Persona
          </v-card-title>
          <v-card-subtitle class="text-center">Cree una nueva postulación</v-card-subtitle>
          <v-card-subtitle class="text-center">Visualice sus postulaciones abiertas</v-card-subtitle>
          <v-card-actions class="justify-center">
            <v-btn color="blue darken-1" @click="goToPersona">Seleccionar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col cols="12" md="5">
        <v-card class="card-v1">
          <v-card-title class="text-center">
            <v-icon class="mr-2">mdi-office-building</v-icon> Institución
          </v-card-title>
          <v-card-subtitle class="text-center">Representante Institucional</v-card-subtitle>
          <v-card-subtitle class="text-center">Revise y patrocine las postulaciones de su institución</v-card-subtitle>
          <v-card-actions class="justify-center">
            <v-btn color="blue darken-1" @click="goToInstitucion">Seleccionar</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
  </v-container>
</template>

<script>
export default {
  methods: {
    goToPersona() {
      this.$router.push('/notificaciones2a');
    },
    goToInstitucion() {
      this.$router.push('/notificaciones2b');
    }
  }
};
</script>

<style scoped>



</style>
