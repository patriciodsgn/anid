<template>
  <v-container>
    <div class="area">
    <h1 class="text-h4">Notificaciones</h1>
    <p>Bienvenida, <strong>María José (Rol Personal)</strong></p>
    <p>al Sistema de Postulaciones de la Agencia Nacional de Investigación y Desarrollo.</p>

    <v-list>
      <v-list-item>
        <v-list-item-avatar>
          <v-icon color="purple">mdi-circle</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title><strong>Este Mes se cierra doctorados becas chile 2024</strong></v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-avatar>
          <v-icon color="orange">mdi-circle</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title><strong>Este Mes se cierra las postulaciones a Magíster Funcionarios(as) Públicos 2024</strong></v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item>
        <v-list-item-avatar>
          <v-icon color="green">mdi-circle</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title><strong>Concurso Fondecyt de Postdoctorado 2025</strong></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
  </v-container>
</template>

<script>
export default {
  name: "NotificacionesPage"
};
</script>

<style scoped>
h1 {
  margin-bottom: 16px;
}
</style>
