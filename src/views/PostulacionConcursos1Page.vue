<template>
  <v-container>
    <!-- Menú de Pestañas -->
    <v-tabs v-model="activeTab" background-color="primary" dark>
      <v-tab>Todos los Concursos</v-tab>
      <v-tab>Mis Concursos</v-tab>
    </v-tabs>

    <!-- Contenido de las Pestañas -->
    <v-tabs-items v-model="activeTab">
      <!-- Todos los Concursos -->
      <v-tab-item>
        <v-card>
          <v-card-title>Todos los Concursos</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="(concurso, index) in todosConcursos" :key="index">
                <v-list-item-content>
                  <v-list-item-title>{{ concurso.nombre }}</v-list-item-title>
                  <v-list-item-subtitle>{{ concurso.descripcion }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-tab-item>

      <!-- Mis Concursos -->
      <v-tab-item>
        <v-card>
          <v-card-title>Mis Concursos</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="(concurso, index) in misConcursos" :key="index">
                <v-list-item-content>
                  <v-list-item-title>{{ concurso.nombre }}</v-list-item-title>
                  <v-list-item-subtitle>{{ concurso.descripcion }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 0, // Controla la pestaña activa (0 = Todos los Concursos, 1 = Mis Concursos)
      todosConcursos: [
        { nombre: "Concurso A", descripcion: "Descripción del Concurso A" },
        { nombre: "Concurso B", descripcion: "Descripción del Concurso B" },
        { nombre: "Concurso C", descripcion: "Descripción del Concurso C" }
      ],
      misConcursos: [
        { nombre: "Concurso B", descripcion: "Descripción del Concurso B" },
        { nombre: "Concurso C", descripcion: "Descripción del Concurso C" }
      ]
    };
  }
};
</script>

<style scoped>
.v-tabs {
  margin-bottom: 20px;
}
</style>
