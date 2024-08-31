<template>
  <v-container>
    <div class="area-v2">

    <h2>Invitaciones para ser Colaborador en Proyectos</h2>
    
    <p class="intro">En esta sección, encontrarás invitaciones para unirte como colaborador en distintos proyectos. Puedes revisar los detalles de cada invitación y tomar una decisión. Tienes la opción de <b>Aceptar</b> para unirte al equipo o <b>Rechazar</b> si decides no participar en el proyecto.</p> 
    
    <v-row>
      <v-col v-for="(invitacion, index) in invitaciones" :key="index" cols="12" sm="6" md="4">
        <v-card class="card-v1">
          <v-card-title>{{ invitacion.proyecto }}</v-card-title>
          <v-card-subtitle>{{ invitacion.descripcion }}</v-card-subtitle>
          <v-card-subtitle>[ Enlace ]</v-card-subtitle>
          <v-card-text>
            <v-text-field
              v-model="razonesRechazo[index]"
              label="Motivo de rechazo"
              placeholder="Escribe la razón para rechazar"
              variant="outlined"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <div>
              <v-btn color="green" @click="aceptarInvitacion(index)">Aceptar</v-btn>
            </div>
            <div>
              <v-btn color="red" @click="rechazarInvitacion(index)">Rechazar</v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <!-- Listados de Aceptados y Rechazados -->
    <v-row>
      <v-col cols="12">
        <h3>Invitaciones Aceptadas</h3>
        <v-list>
          <v-list-item v-for="(aceptada, index) in invitacionesAceptadas" :key="index">
            <v-list-item-content>
              <v-list-item-title>{{ aceptada.proyecto }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
</div>
  </v-container>
</template>

<script>
export default {
  name: "ColaboradorPage",
  data() {
    return {
      invitaciones: [
        { proyecto: "Proyecto A", descripcion: "Descripción del Proyecto A" },
        { proyecto: "Proyecto B", descripcion: "Descripción del Proyecto B" },
        { proyecto: "Proyecto C", descripcion: "Descripción del Proyecto C" }
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
