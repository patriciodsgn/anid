<template>
  <v-container>

    <v-row>
      <v-col
      cols="12" offset="0"
      xs="10" offset-xs="1"
      sm="10" offset-sm="1"
      md="10" offset-md="1"
      lg="10" offset-lg="1"
      xl="6" offset-xl="3"
      class="page2">



      <h2 class="mb-4">Postulación Concursos</h2>
      <br>
      <div class="menu-line">
    <a 
      class="menu-line__btn" 
      href="#" 
      @click.prevent="mostrarTodosConcursos"
      :class="{ 'menu-line__btn--active': mostrarTodos }"
    >
      Todos los Concursos
    </a> 
    <a 
      class="menu-line__btn" 
      href="#" 
      @click.prevent="mostrarPostulacionesActivas"
      :class="{ 'menu-line__btn--active': mostrarMis }"
    >
      Mis Postulaciones Activas
    </a>
    <a 
      class="menu-line__btn" 
      href="#" 
      @click.prevent="mostrarHistorialPostulaciones"
      :class="{ 'menu-line__btn--active': mostrarHist }"
    >
      Mi Historial Postulaciones
    </a> 
  </div>
      <br>
      
      <div class="intro">
        
        <p><b>¡Bienvenido a tu espacio de gestión de concursos!</b></p>
        <p>Aquí podrás postularte, ver tu historial y explorar nuevos concursos.</p>
        <br>
        <p> <b>Postulaciones Activas</b>: Gestiona las postulaciones en las que estás participando actualmente.</p>
        <p> <b>Historial de Postulaciones</b>: Revisa tus postulaciones anteriores y su estado.</p>
        <p> <b>Todos los Concursos</b>: Descubre y aplica a nuevos concursos disponibles.</p>
        
      </div>
      <!-- Menú simple con enlaces -->

      <!-- Snackbar para mostrar la notificación -->
      <v-snackbar v-model="snackbar" :timeout="3000" class="advice-v1">
        <p>{{ snackbarMessage }}</p>
        <div class="btn-primary-v1" text @click="snackbar = false">Cerrar</div>
      </v-snackbar>





      <!-- 1 -------------------------------------------------------- -->
      <!-- Campo de búsqueda para filtrar los concursos -->
      <div v-if="mostrarTodos">
        <br>
        <br>
        <br>
        <br>
        <h3>Todos los Concursos</h3>
        <br>
        <div class="block-search">
          <div class="block-search__col">
            <small><b>Filtros</b>:</small>
          </div>
          <div class="block-search__col">
            <div class="chipx">2020</div>
            <div class="chipx chipx--active">2021</div>
            <div class="chipx">2022</div>
            <div class="chipx">2023</div>
            <div class="chipx">2024</div>
          </div>
          <div class="block-search__col">
            <div class="chipx chipx--cp">Capital Humano</div>
            <div class="chipx chipx--ci chipx--active">Proyectos de Investigación</div>
            <div class="chipx chipx--cia">Centros e Investigación Asociativa</div>
            <div class="chipx chipx--iai chipx--active">Investigación Aplicada e Innovación</div>
            <div class="chipx chipx--rec">Redes, Estrategia y Conocimiento</div>
          </div>
          <div class="block-search__col borderx">
            <div class="chipx">Próximo</div>
            <div class="chipx chipx--active">Abierto</div>
            <div class="chipx">En evaluación</div>
            <div class="chipx chipx--active">Adjudicado</div>
            <div class="chipx">Suspendido</div>
            <div class="chipx">Patrocinio Institucional</div>
            <div class="chipx">Desierto</div>
          </div>
        </div>
        <br>

        <v-text-field
        v-model="searchQuery"
        label="Buscar Concurso"
        variant="outlined"
        placeholder="Escribe para buscar..."
        ></v-text-field>
        <br>
        <br>
        <br>


        <div class="line-data" v-for="(concurso, index) in filteredConcursos" :key="index">
          <div class="w80"><span class="smallx">Concurso:</span>{{ concurso.nombre }}</div>
        <!--
          <div class="w20">
            <span class="small1">Proyecto</span>
            <a class="link-main" href="#">{{ aceptada.proyecto }}</a>
          </div>
          <div class="w10"><span class="small1">Año</span>{{ aceptada.anio }}</div>
          <div class="w20"><span class="small1">Estado</span>{{ aceptada.estado }}</div>
          <div class="w20"><span class="small1">Subdirección</span>{{ aceptada.sub }}</div>
          -->


      <div class="w20">
        <div class="btn-secondary-v2" @click="mostrarDetalleConcurso(concurso)">
          <v-icon left>mdi-information-outline</v-icon>
        </div>
        <div class="btn-success-v2" @click="seleccionarConcurso(concurso)">
          <v-icon>mdi-plus</v-icon>
        </div>
      </div>
        </div>


      </div>




      <!-- 2 -------------------------------------------------------- -->
      <!-- Mostrar lista de "Mis Concursos" y cargar componente dinámico cuando se selecciona -->
      <div v-if="mostrarMis">
        <br>  
        <h3>Mis Postulaciones</h3>
        <br>
        <br>
        <div 
          v-for="(concurso, index) in misConcursos"
          :key="index"
          class="line-data"
        >
          <div class="w80">
            <span class="smallx">concurso:</span>
            {{ concurso.nombre }}
          </div>
          <div class="w20">
            <div icon class="btn-secondary-v2" @click="mostrarDetalleConcurso(concurso)">
              <v-icon>mdi-eye</v-icon> <!-- Icono de ver concurso -->
            </div>
            <div icon class="btn-danger-v2" @click="eliminarConcurso(concurso)">
              <v-icon>mdi-delete</v-icon> <!-- Icono de eliminar concurso -->
            </div>
          </div>
        </div>
        <!-- Botón para regresar a la lista de todos los concursos -->
        <!-- <v-btn @click="mostrarTodosConcursos">Volver a Todos los Concursos</v-btn> -->
        <!-- Diálogo para mostrar el iframe con detalles del concurso -->
        <v-dialog v-model="dialog" width="800">
          <v-card>
            <v-card-title class="headline">Detalles del Concurso</v-card-title>
            <v-card-text>
              <iframe :src="concursoSeleccionado.enlace" width="100%" height="500px" frameborder="0"></iframe>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" @click="dialog = false">Cerrar</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>


      <!-- 3 -------------------------------------------------------- -->
      <!-- Campo de búsqueda para filtrar los concursos -->
      <div v-if="mostrarHist">
        <br>
        <h3>Historial de Postulaciones</h3>

        <br>
            <div class="line-data">
              <div class="w40"><b>Concurso</b></div>
              <div class="w10"><b>Año</b></div>
              <div class="w20"><b>Fecha postulación / Estado</b></div>
              <div class="w20"><b>Subdirección</b></div>
              <div class="w10"><b></b></div>
            </div>
            <hr>
            <div class="line-data" v-for="(item, index) in arrHist" :key="index">
              <div class="w40">{{ item.title }}</div>
              <div class="w10">{{ item.year }}</div>
              <div class="w20">{{ item.date }} {{ item.status }}</div>
              <div class="w20">{{ item.subdire }}</div>
              <div class="w10">
                <a class="btn__icon-link" :href="item.url" target="_blank">
                  <v-icon>mdi-link</v-icon>
                </a>
              </div>
            </div>

            



      </div>















      


      </v-col>
    </v-row>

  </v-container>
</template>

<script>


// Importa el archivo JSON desde la carpeta data
import concursosData from "@/data/concursos.json";
export default {
  data() {
    return {
      mostrarTodos: false, // Mostrar "Todos los Concursos" por defecto
      mostrarMis: true, // Estado para mostrar "Mis Concursos"
      mostrarHist: false, // Estado para mostrar "Mis Concursos"
      snackbar: false, // Controla la visibilidad del snackbar
      snackbarMessage: '', // Mensaje del snackbar
      searchQuery: "", // Valor para el input de búsqueda
      concursoSeleccionado: null, // Almacena el concurso seleccionado para cargar el componente dinámico
      dialog: false, // Controla la visibilidad del diálogo
      // Lista de todos los concursos cargados desde el JSON
      todosConcursos: concursosData, 
      // Lista de concursos seleccionados (Mis Concursos)
      misConcursos: JSON.parse(localStorage.getItem('misConcursos')) || [], // Recupera los concursos del localStorage
      arrHist: [ // <--- Aquí se corrige el error
        {
          title: "Concurso Núcleos Milenio en Ciencias 'Naturales y Exactas 2023",
          url: "https://anid.cl/concursos/concurso-nucleos-milenio-en-ciencias-naturales-y-exactas-2023/",
          year: "2023",
          date: "10-10-23",
          status: "Cerrada",
          subdire: "Centros e Investigación Asociativa",
          image: "https://anid.cl/wp-content/uploads/2023/02/twt-ciencias-naturales-y-exactas.jpg",
        },
        {
          title: "Subvención a la Instalación 'en la Academia 2024",
          url: "https://anid.cl/concursos/subvencion-a-la-instalacion-en-la-academia-2024/",
          year: "2023",
          date: "10-10-23",
          status: "Cerrada",
          subdire: "Capital Humano",
          image: "https://anid.cl/wp-content/uploads/2023/09/instalacion-en-la-academia-2024_web.jpg",
        },
        {
          title: "Desafíos Públicos 2024",
          url: "https://anid.cl/concursos/desafios-publicos-2024/",
          year: "2023",
          date: "10-10-23",
          status: "Cerrada",
          subdire: "Investigación Aplicada",
          image: "https://anid.cl/wp-content/uploads/2023/12/Desafios-publicos-2024_web-op.jpg",
        },
        {
          title: "Concurso de Equipamiento Científico 'y Tecnológico Mediano 2024",
          url: "https://anid.cl/concursos/concurso-de-equipamiento-cientifico-y-tecnologico-mediano-2024/",
          year: "2023",
          date: "10-10-23",
          status: "Cerrada",
          subdire: "Centros e Investigación Asociativa",
          image: "https://anid.cl/wp-content/uploads/2023/12/EQUIPAMIENTO-MEDIANO-2024_web_op.jpg",
        },
        {
          title: "Concurso de Proyectos Fondecyt de 'Iniciación en Investigación 2025",
          url: "https://anid.cl/concursos/concurso-de-proyectos-fondecyt-de-iniciacion-en-investigacion-2025/",
          year: "2023",
          date: "10-10-23",
          status: "Cerrada",
          subdire: "Proyectos de Investigación",
          image: "https://anid.cl/wp-content/uploads/2023/12/fondecyt-iniciacion-2025_web_op.jpg",
        },
        {
          title: "Proyectos de Investigación y Desarrollo en Salud '(FONIS) 2024",
          url: "https://anid.cl/concursos/proyectos-de-investigacion-y-desarrollo-en-salud-fonis-2024/",
          year: "2023",
          date: "10-10-23",
          status: "Cerrada",
          subdire: "Proyectos de Investigación",
          image: "https://anid.cl/wp-content/uploads/2023/12/fonis-2024_web_op.jpg",
        }
      ]
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
    mostrarPostulacionesActivas() {
      this.mostrarMis = true;
      this.mostrarHist = false;
      this.mostrarTodos = false;
      this.concursoSeleccionado = null;
    },

    mostrarHistorialPostulaciones() {
      this.mostrarMis = false;
      this.mostrarHist = true;
      this.mostrarTodos = false;
      this.concursoSeleccionado = null;
    },

    mostrarTodosConcursos() {
      this.mostrarMis = false;
      this.mostrarHist = false;
      this.mostrarTodos = true;
      this.concursoSeleccionado = null;
    },

    seleccionarConcurso(concurso) {
      // Añadir el concurso seleccionado a "Mis Concursos"
      if (!this.misConcursos.includes(concurso)) {
        this.misConcursos.push(concurso);
        // Remover de "Todos los Concursos"
        this.todosConcursos = this.todosConcursos.filter(c => c !== concurso);

        this.snackbarMessage = `${concurso.nombre} ha sido agregado a Mis Postulaciones`;
        this.snackbar = true;

        // Guardar en localStorage
        localStorage.setItem('misConcursos', JSON.stringify(this.misConcursos));
      }
    },
    eliminarConcurso(concurso) {
      // Eliminar el concurso de "Mis Concursos"
      this.misConcursos = this.misConcursos.filter(c => c !== concurso);
      // Añadir de nuevo a "Todos los Concursos"
      this.todosConcursos.push(concurso);

      // Actualizar localStorage
      localStorage.setItem('misConcursos', JSON.stringify(this.misConcursos));
    },
    mostrarDetalleConcurso(concurso) {
      const popupWidth = 800;
      const popupHeight = 600;
      const left = (screen.width / 2) - (popupWidth / 2);
      const top = (screen.height / 2) - (popupHeight / 2);

      window.open(
        concurso.link,
        'ConcursoPopup', 
        `width=${popupWidth},height=${popupHeight},top=${top},left=${left},resizable,scrollbars`
      );
    }
  },
};
</script>

<style scoped>
/* Tu estilo aquí */
</style>
