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

    <h2>Invitaciones para ser Colaborador en Proyectos</h2>
    <br>
    <p class="intro">En esta sección, encontrarás invitaciones para unirte como colaborador en distintos proyectos. Puedes revisar los detalles de cada invitación y tomar una decisión. Tienes la opción de <b>Aceptar</b> para unirte al equipo o <b>Rechazar</b> si decides no participar en el proyecto.</p> 
    <br>
    
    <h3>Invitaciones</h3>
    <br>
    




    <div class="line-data" v-for="(invitacion, index) in invitaciones" :key="index">
      <div class="w20"><span class="small1">Autor:</span>{{ invitacion.autor }}</div>
      <div class="w20">
        <span class="small1">Proyecto: </span>
        <a class="link-main" href="#">{{ invitacion.proyecto }}</a>
      </div>
      <div class="w10"><span class="small1">Año: </span>{{ invitacion.anio }}</div>
      <div class="w20"><span class="small1">Estado: </span>{{ invitacion.estado }}</div>
      <div class="w20"><span class="small1">Subdirección: </span>{{ invitacion.sub }}</div>
      <div class="w10">
        <div class="btn-success-v2" @click="aceptarInvitacion(index)">
          <v-icon left>mdi-check-bold</v-icon>
        </div>
        <div class="btn-danger-v2" @click="rechazarInvitacion(index)">
          <v-icon left>mdi-close-thick</v-icon>
        </div>
      </div>
    </div>

    <hr>
<br>
<br>
    <!-- Listados de Aceptados y Rechazados -->
    <h3>Aceptadas</h3>
    <br>




    <div class="line-data" v-for="(aceptada, index) in invitacionesAceptadas" :key="index">
      <div class="w20"><span class="small1">Autor</span>{{ aceptada.autor }}</div>
      <div class="w20">
        <span class="small1">Proyecto</span>
        <a class="link-main" href="#">{{ aceptada.proyecto }}</a>
      </div>
      <div class="w10"><span class="small1">Año</span>{{ aceptada.anio }}</div>
      <div class="w20"><span class="small1">Estado</span>{{ aceptada.estado }}</div>
      <div class="w20"><span class="small1">Subdirección</span>{{ aceptada.sub }}</div>
      <div class="w10">
      </div>
    </div>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ColaboradorPage",
  data() {
    return {
      invitaciones: [
        {
          autor: "Juán Pérez",
          proyecto: "Carbono Libre",
          anio: "2024",
          estado: "Revisión",
          sub: "Capital Humano",
        },
        {
          autor: "Juán Soto",
          proyecto: "Reino Fungi",
          anio: "2024",
          estado: "Revisión",
          sub: "Capital Humano",
        },
        {
          autor: "Juán Rojas",
          proyecto: "Poesía para niños",
          anio: "2024",
          estado: "Revisión",
          sub: "Capital Humano",
        }
      ],
      razonesRechazo: ["", "", ""], // Inicializar para cada invitación
      invitacionesAceptadas: [], // Almacena las invitaciones aceptadas
      invitacionesRechazadas: [] // Almacena las invitaciones rechazadas junto con la razón
    };
  },
  methods: {
    aceptarInvitacion(index) {
      const invitacionAceptada = this.invitaciones[index];
      this.invitacionesAceptadas.push(invitacionAceptada); // Agregar a la lista de aceptadas
      this.invitaciones.splice(index, 1); // Eliminar de la lista de invitaciones
      this.razonesRechazo.splice(index, 1); // Eliminar la razón correspondiente
      alert("Has aceptado la invitación.");
    },
    rechazarInvitacion(index) {
      const razon = this.razonesRechazo[index];
      const invitacionRechazada = this.invitaciones[index];
      if (razon) {
        this.invitacionesRechazadas.push({
          proyecto: invitacionRechazada.proyecto,
          razon: razon
        }); // Agregar a la lista de rechazadas
        alert(`Has rechazado la invitación. Razón: ${razon}`);
      } else {
        alert("Has rechazado la invitación sin una razón específica.");
      }
      this.invitaciones.splice(index, 1); // Eliminar de la lista de invitaciones
      this.razonesRechazo.splice(index, 1); // Eliminar la razón correspondiente
    }
  }
};
</script>
