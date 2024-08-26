<template>
  <v-container>
    <div class="area-v2">
      <h2 class="mb-4">Postulación Concursos</h2>
      <!-- Menú simple con enlaces -->
      <div class="menu-postulaciones">
        <a class="menu-postulaciones__btn" href="#" @click.prevent="mostrarPostulacionesActivas">Postulaciones Activas</a>
        <a class="menu-postulaciones__btn" href="#" @click.prevent="mostrarHistorialPostulaciones">Historial Postulaciones</a> 
        <a class="menu-postulaciones__btn" href="#" @click.prevent="mostrarTodosConcursos">Todos los Concursos</a> 
      </div>

      <!-- Snackbar para mostrar la notificación -->
      <v-snackbar v-model="snackbar" :timeout="3000" top right>
        {{ snackbarMessage }}
        <v-btn color="grey" text @click="snackbar = false">Cerrar</v-btn>
      </v-snackbar>



      <!-- Mostrar lista de "Mis Concursos" y cargar componente dinámico cuando se selecciona -->
      <div v-if="mostrarMis">
        <br>  
        <h3>Mis Postulaciones</h3>

        <v-list>
          <v-list-item
            v-for="(concurso, index) in misConcursos"
            :key="index"
          >
            <div class="item__name">{{ concurso.nombre }}</div>

            

<!-- Botones de agregar y detalles con íconos -->

            <!-- Botones de ver y eliminar con íconos -->
            
              <v-btn icon class="btn__icon--eye" @click="mostrarDetalleConcurso(concurso)">
                <v-icon>mdi-eye</v-icon> <!-- Icono de ver concurso -->
              </v-btn>
              <v-btn icon class="btn__icon--delete" @click="eliminarConcurso(concurso)">
                <v-icon>mdi-delete</v-icon> <!-- Icono de eliminar concurso -->
              </v-btn>
            
          </v-list-item>
        </v-list>

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





      <!-- Campo de búsqueda para filtrar los concursos -->
      <div v-if="mostrarHist">
        <br>
        <h3>Historial de Postulaciones</h3>

        <v-table density="compact" class="table-hist">
          <thead>
            <tr>
              <th class="text-left">
                Fecha
              </th>
              <th class="text-left">
                Imagen
              </th>
              <th class="text-left">
                Postulación
              </th>
              <th class="text-left">
                Enlace
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
    <td>10-10-23</td>
    <td><img src="https://anid.cl/wp-content/uploads/2023/02/twt-ciencias-naturales-y-exactas.jpg"></td>
    <td>Concurso Núcleos Milenio en Ciencias Naturales y Exactas 2023"</td>
    <td><a class="btn__icon-link" href="https://anid.cl/concursos/concurso-nucleos-milenio-en-ciencias-naturales-y-exactas-2023/"><v-icon>mdi-link</v-icon></a></td>
</tr>
<tr>
    <td>10-10-23</td>
    <td><img src="https://anid.cl/wp-content/uploads/2023/09/instalacion-en-la-academia-2024_web.jpg"></td>
    <td>Subvención a la Instalación en la Academia 2024"</td>
    <td><a class="btn__icon-link" href="https://anid.cl/concursos/subvencion-a-la-instalacion-en-la-academia-2024/"><v-icon>mdi-link</v-icon></a></td>
</tr>
<tr>
    <td>10-10-23</td>
    <td><img src="https://anid.cl/wp-content/uploads/2023/12/Desafios-publicos-2024_web-op.jpg"></td>
    <td>Desafíos Públicos 2024"</td>
    <td><a class="btn__icon-link" href="https://anid.cl/concursos/desafios-publicos-2024/"><v-icon>mdi-link</v-icon></a></td>
</tr>
<tr>
    <td>10-10-23</td>
    <td><img src="https://anid.cl/wp-content/uploads/2023/12/EQUIPAMIENTO-MEDIANO-2024_web_op.jpg"></td>
    <td>Concurso de Equipamiento Científico y Tecnológico Mediano 2024"</td>
    <td><a class="btn__icon-link" href="https://anid.cl/concursos/concurso-de-equipamiento-cientifico-y-tecnologico-mediano-2024/"><v-icon>mdi-link</v-icon></a></td>
</tr>
<tr>
    <td>10-10-23</td>
    <td><img src="https://anid.cl/wp-content/uploads/2023/12/fondecyt-iniciacion-2025_web_op.jpg"></td>
    <td>Concurso de Proyectos Fondecyt de Iniciación en Investigación 2025"</td>
    <td><a class="btn__icon-link" href="https://anid.cl/concursos/concurso-de-proyectos-fondecyt-de-iniciacion-en-investigacion-2025/"><v-icon>mdi-link</v-icon></a></td>
</tr>
<tr>
    <td>10-10-23</td>
    <td><img src="https://anid.cl/wp-content/uploads/2023/12/fonis-2024_web_op.jpg"></td>
    <td>Proyectos de Investigación y Desarrollo en Salud (FONIS) 2024"</td>
    <td><a class="btn__icon-link" href="https://anid.cl/concursos/proyectos-de-investigacion-y-desarrollo-en-salud-fonis-2024/"><v-icon>mdi-link</v-icon></a></td>
</tr>

          </tbody>
        </v-table>


      </div>







      <!-- Campo de búsqueda para filtrar los concursos -->
      <div v-if="mostrarTodos">
        <br>  
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
            <div class="item__name">{{ concurso.nombre }}</div>

            <!-- Botones de agregar y detalles con íconos -->
            
            <v-btn class="btn__icon parche-i" icon @click="mostrarDetalleConcurso(concurso)">
              i
            </v-btn>
            <v-btn class="btn__icon-ok" icon @click="seleccionarConcurso(concurso)">
              <v-icon>mdi-plus</v-icon> <!-- Icono de agregar -->
            </v-btn>
            



          </v-list-item>
        </v-list>
      </div>












      
    </div>
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
      misConcursos: [],

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

      }
    },
    eliminarConcurso(concurso) {
      // Eliminar el concurso de "Mis Concursos"
      this.misConcursos = this.misConcursos.filter(c => c !== concurso);
      // Añadir de nuevo a "Todos los Concursos"
      this.todosConcursos.push(concurso);
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
.v-btn {
  margin: 5px;
}

.v-list-item{
  border-bottom: 1px solid #7f7f7f;
  

  /* border: 1px darkblue solid; */
  height: 100%; 
}

.item__name{
  display: flex;
  /* border: 1px darkblue solid; */
  width: 80%;
  line-height: 93%;
  align-items: center;
}


.btn__icon-link{
  
  font-size: 20px;
  width: 30px!important;
  height: 30px!important;
  box-shadow: none;
  padding:4px 0;
  background-color: #999999;
  color: #fff;
}


.btn__icon--eye,
.btn__icon{
  font-size: 20px;
  width: 30px;
  height: 30px;
  box-shadow: none;
  background-color: #999999;
  color: #fff;
}

.btn__icon-ok{
  font-size: 20px;
  width: 30px;
  height: 30px;
  box-shadow: none;
  background-color: #4caf50;
  color: #fff;
  
}

.btn__icon--delete{
  font-size: 20px;
  width: 30px;
  height: 30px;
  box-shadow: none;
  background-color: #fb3b3b;
  color: #fff;
  
}

.parche-i{
  text-transform: lowercase
}
</style>
