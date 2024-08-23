<template>
  <v-container>

    <div class="area-v2">
    <!-- Menú simple con enlaces -->

      <div class="menu-micro-login">
      <a class="menu-micro-login--clave-unica" style="width: 46% ;color: white" href="#" @click.prevent="mostrarTodosConcursos">Todos los Concursos</a> 
      <a class="menu-micro-login--clave-unica" style="width: 46% ;color: white" href="#" @click.prevent="mostrarMisConcursos">Mis Concursos</a>
    </div>

    <h2 class="mb-4">Postulacion Concursos</h2>

    

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
        { nombre: "Concurso Núcleos Ciencias Naturales y Exactas 2023", codigo: "(post-im)" },
        { nombre: "(qa01) Concurso Startup Ciencia, Año 2024", codigo: "(qa01)" },
        { nombre: "(qa01) Fondecyt de Iniciación en Investigación 2025", codigo: "(qa01)" },
        { nombre: "(qa01) FONDECYT de Postdoctorado 2025", codigo: "(qa01)" },
        { nombre: "(qa01) FONDECYT Regular 2025", codigo: "(qa01)" },
        { nombre: "(qa05) Concurso Anillos de Investigación en Áreas Temáticas Específicas 2024", codigo: "(qa05)" },
        { nombre: "(qa05) Concurso Anillos Regulares de Tecnología 2024", codigo: "(qa05)" },
        { nombre: "(qa05) Concurso Apoyo Centros de Excelencia con Financiamiento Basal 2023", codigo: "(qa05)" },
        { nombre: "(qa05) CONCURSO FONDO ALMA-ANID PARA EL DESARROLLO DE LA ASTRONOMÍA CHILENA 2024", codigo: "(qa05)" },
        { nombre: "(qa05) Concurso IDeA I+D 2025", codigo: "(qa05)" },
        { nombre: "(qa05) Concurso Nacional de Proyectos de Investigación y Desarrollo en Salud, Fonis 2024", codigo: "(qa05)" },
        { nombre: "(qa05) Concurso Startup Ciencia, Año 2025", codigo: "(qa05)" },
        { nombre: "(qa05) DESAFÍOS PÚBLICOS 2024: CONSEJO DE DEFENSA DEL ESTADO", codigo: "(qa05)" },
        { nombre: "(qa05) FONDO DE PUBLICACIÓN DE REVISTAS CIENTÍFICAS 2024", codigo: "(qa05)" },
        { nombre: "(qa05) SCIA - 417 - CONCURSO DE APOYO A CENTROS DE EXCELENCIA EN INVESTIGACIÓN EN ÁREAS PRIORITARIAS - FONDAP 2023", codigo: "(qa05)" },
        { nombre: "(qa05) XIII Concurso de Equipamiento Científico y Tecnológico Mediano 2024", codigo: "(qa05)" },
        { nombre: "(qa05) CONCURSO FONDO ALMA-ANID PARA EL DESARROLLO DE LA ASTRONOMÍA CHILENA 2024", codigo: "(qa05)" },
        { nombre: "(qa05) Concurso IDeA I+D 2025", codigo: "(qa05)" },
        { nombre: "(qa05) Instrumento de Consolidación de Resultados del Programa Nueva Ingeniería para el 2030, Ingeniería 2030-Tercera Etapa - Convocatoria 2024", codigo: "(qa05)" },
        { nombre: "(qa05) X III Concurso de Equipamiento Científico y Tecnológico Mediano 2024", codigo: "(qa05)" },
        { nombre: "(splqa) BECAS CHILE DE DOCTORADO EN EL EXTRANJERO - Convocatoria 2024", codigo: "(splqa)" },
        { nombre: "(splqa) CONVOCATORIA NACIONAL SUBVENCIÓN A LA INSTALACIÓN EN LA ACADEMIA 2024", codigo: "(splqa)" },



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
