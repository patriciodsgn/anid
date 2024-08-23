<template>
  <v-container>
    <!-- Menú simple con enlaces -->
    <div>
      <a href="#" @click.prevent="mostrarTodosConcursos">Todos los Concursos</a> |
      <a href="#" @click.prevent="mostrarMisConcursos">Mis Concursos</a>
    </div>

    <!-- Campo de búsqueda para filtrar los concursos -->
    <div v-if="mostrarTodos">
      <v-text-field
        v-model="searchQuery"
        label="Buscar Concurso"
        variant="outlined"
        placeholder="Escribe para buscar..."
      ></v-text-field>
      
      <h3>Todos los Concursos</h3>
      <v-list>
        <v-list-item
          v-for="(concurso, index) in filteredConcursos"
          :key="index"
          @click="seleccionarConcurso(concurso)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ concurso.nombre }}</v-list-item-title>
            <v-list-item-subtitle>{{ concurso.codigo }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>

    <div v-if="mostrarMis">
      <h3>Mis Concursos</h3>
      <v-list>
        <v-list-item
          v-for="(concurso, index) in misConcursos"
          :key="index"
        >
          <v-list-item-content>
            <v-list-item-title>{{ concurso.nombre }}</v-list-item-title>
            <v-list-item-subtitle>{{ concurso.codigo }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      mostrarTodos: true, // Mostrar "Todos los Concursos" por defecto
      mostrarMis: false, // Estado para mostrar "Mis Concursos"
      searchQuery: "", // Valor para el input de búsqueda
      // Lista de todos los concursos
      todosConcursos: [
        { nombre: "BECA DE DOCTORADO NACIONAL - Año Académico 2024", codigo: "(splqa)" },
        { nombre: "Concurso Institutos Milenio 2024 Mayo", codigo: "(post-im)" },
        { nombre: "Concurso Núcleos Ciencias Naturales y Exactas 2023", codigo: "(post-im)" }
      ],
      // Lista de concursos seleccionados (Mis Concursos)
      misConcursos: []
    };
  },
  computed: {
    // Filtra los concursos en base a la búsqueda
    filteredConcursos() {
      return this.todosConcursos.filter(concurso =>
        concurso.nombre.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    mostrarTodosConcursos() {
      this.mostrarTodos = true;
      this.mostrarMis = false;
    },
    mostrarMisConcursos() {
      this.mostrarTodos = false;
      this.mostrarMis = true;
    },
    seleccionarConcurso(concurso) {
      // Añadir el concurso seleccionado a "Mis Concursos"
      if (!this.misConcursos.includes(concurso)) {
        this.misConcursos.push(concurso);
        // Remover de "Todos los Concursos"
        this.todosConcursos = this.todosConcursos.filter(c => c !== concurso);
      }
    }
  }
};
</script>

<style scoped>
a {
  cursor: pointer;
  color: blue;
  text-decoration: underline;
  margin: 10px;
}

a:hover {
  color: darkblue;
}
</style>
