<template>
  <iframe src="https://www.w3schools.com" title="W3Schools Free Online Web Tutorials"></iframe>

  <v-container>
    <div class="area-v2">
      <!-- Menú simple con enlaces -->
      <div class="menu-postulaciones">
        <a class="menu-postulaciones__btn" href="#" @click.prevent="mostrarTodosConcursos">Todos los Concursos</a> 
        <a class="menu-postulaciones__btn" href="#" @click.prevent="mostrarMisConcursos">Mis Postulaciones</a>
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
          >
            <v-list-item-content>
              <v-list-item-title>{{ concurso.nombre }}</v-list-item-title>
            </v-list-item-content>
            <!-- Botones de agregar y detalles con íconos -->
            <v-list-item-action>
              <v-btn icon @click="seleccionarConcurso(concurso)">
                <v-icon>mdi-plus</v-icon> <!-- Icono de agregar -->
              </v-btn>
              <v-btn icon @click="mostrarDetalleConcurso(concurso)">
                <v-icon>mdi-information</v-icon> <!-- Icono de detalles -->
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </div>

      <!-- Mostrar lista de "Mis Concursos" y cargar componente dinámico cuando se selecciona -->
      <div v-if="mostrarMis">
        <h3>Mis Postulaciones</h3>
        <v-list>
          <v-list-item
            v-for="(concurso, index) in misConcursos"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title>{{ concurso.nombre }}</v-list-item-title>
            </v-list-item-content>
            <!-- Botones de ver y eliminar con íconos -->
            <v-list-item-action>
              <v-btn icon @click="mostrarDetalleConcurso(concurso)">
                <v-icon>mdi-eye</v-icon> <!-- Icono de ver concurso -->
              </v-btn>
              <v-btn icon color="red" @click="eliminarConcurso(concurso)">
                <v-icon>mdi-delete</v-icon> <!-- Icono de eliminar concurso -->
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        
        <!-- Botón para regresar a la lista de todos los concursos -->
        <v-btn @click="mostrarTodosConcursos">Volver a Todos los Concursos</v-btn>

        <!-- Cargar componente dinámico -->
        <component v-if="concursoSeleccionado" :is="concursoSeleccionado.component"></component>
      </div>

      <!-- Diálogo para mostrar el iframe con detalles del concurso -->
      <v-dialog v-model="dialog" width="800">
        <v-card>
          <v-card-title class="headline">Detalles del Concurso</v-card-title>
          <v-card-text>
            <iframe :src="concursoSeleccionado.link" width="100%" height="500px" frameborder="0"></iframe>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="dialog = false">Cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

    </div>
  </v-container>
</template>

<script>
// Importa el archivo JSON desde la carpeta data
import concursosData from "@/data/concursos.json";

export default {
  data() {
    return {
      mostrarTodos: true, // Mostrar "Todos los Concursos" por defecto
      mostrarMis: false, // Estado para mostrar "Mis Concursos"
      searchQuery: "", // Valor para el input de búsqueda
      concursoSeleccionado: null, // Almacena el concurso seleccionado para cargar el componente dinámico
      dialog: false, // Controla la visibilidad del diálogo
      // Lista de todos los concursos cargados desde el JSON
      todosConcursos: concursosData, 
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
    eliminarConcurso(concurso) {
      // Eliminar el concurso de "Mis Concursos"
      this.misConcursos = this.misConcursos.filter(c => c !== concurso);
      // Añadir de nuevo a "Todos los Concursos"
      this.todosConcursos.push(concurso);
    },
    mostrarDetalleConcurso(concurso) {
      this.concursoSeleccionado = concurso; // Selecciona el concurso
      this.dialog = true; // Abre el diálogo para mostrar el iframe
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
.v-btn {
  margin: 5px;
}

  iframe{
    heigth: 500px;
  }

</style>
