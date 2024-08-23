<template>
  <v-container>
    <div class="area-v2">
      <!-- Menú simple con enlaces -->
      <div class="menu-micro-login">
        <a class="menu-micro-login--clave-unica" style="width: 46%; color: white" href="#" @click.prevent="mostrarTodosConcursos">Todos los Concursos</a> 
        <a class="menu-micro-login--clave-unica" style="width: 46%; color: white" href="#" @click.prevent="mostrarMisConcursos">Mis Concursos</a>
      </div>

      <h2 class="mb-4">Postulación Concursos</h2>

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

      <!-- Mostrar lista de "Mis Concursos" y cargar componente dinámico cuando se selecciona -->
      <div v-if="mostrarMis">
        <h3>Mis Concursos</h3>
        <v-list>
          <v-list-item
            v-for="(concurso, index) in misConcursos"
            :key="index"
            @click="mostrarDetalleConcurso(concurso)"
          >
            <v-list-item-content>
              <v-list-item-title>{{ concurso.nombre }}</v-list-item-title>
              <v-list-item-subtitle>{{ concurso.codigo }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        
        <!-- Cargar componente dinámico -->
        <component v-if="concursoSeleccionado" :is="concursoSeleccionado.component"></component>
      </div>
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
      concursoSeleccionado: null, // Almacena el concurso seleccionado para cargar el componente dinámico
      // Lista de todos los concursos
      todosConcursos: [
        { nombre: "BECA DE DOCTORADO NACIONAL - Año Académico 2024", codigo: "(splqa)", component: "ConcursoBecaDoctorado" },
        { nombre: "Concurso Núcleos Ciencias Naturales y Exactas 2023", codigo: "(post-im)", component: "ConcursoNucleosNaturales" },
        { nombre: "(qa01) Concurso Startup Ciencia, Año 2024", codigo: "(qa01)", component: "ConcursoStartupCiencia" },
        { nombre: "(qa01) Fondecyt de Iniciación en Investigación 2025", codigo: "(qa01)", component: "FondecytIniciacion" }
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
      this.concursoSeleccionado = null;
    },
    mostrarMisConcursos() {
      this.mostrarTodos = false;
      this.mostrarMis = true;
      this.concursoSeleccionado = null;
    },
    seleccionarConcurso(concurso) {
      // Añadir el concurso seleccionado a "Mis Concursos"
      if (!this.misConcursos.includes(concurso)) {
        this.misConcursos.push(concurso);
        // Remover de "Todos los Concursos"
        this.todosConcursos = this.todosConcursos.filter(c => c !== concurso);
      }
    },
    mostrarDetalleConcurso(concurso) {
      this.concursoSeleccionado = concurso; // Cargar el componente del concurso seleccionado
    }
  },
  components: {
    ConcursoBecaDoctorado: {
      template: '<div><h2>Detalles de BECA DE DOCTORADO NACIONAL</h2><p>Información completa del concurso de BECA DE DOCTORADO NACIONAL.</p></div>'
    },
    ConcursoNucleosNaturales: {
      template: '<div><h2>Detalles del Concurso Núcleos Ciencias Naturales y Exactas 2023</h2><p>Información completa del concurso Núcleos.</p></div>'
    },
    ConcursoStartupCiencia: {
      template: '<div><h2>Detalles del Concurso Startup Ciencia, Año 2024</h2><p>Información completa del concurso Startup Ciencia.</p></div>'
    },
    FondecytIniciacion: {
      template: '<div><h2>Detalles de Fondecyt de Iniciación en Investigación 2025</h2><p>Información completa del concurso Fondecyt.</p></div>'
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

