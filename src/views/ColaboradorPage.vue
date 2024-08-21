<template>
  <v-container>
    <h2>Invitaciones para ser Colaborador en Proyectos</h2>
    <v-row>
      <v-col v-for="(invitacion, index) in invitaciones" :key="index" cols="12" sm="6" md="4">
        <v-card>
          <v-card-title>{{ invitacion.proyecto }}</v-card-title>
          <v-card-subtitle>{{ invitacion.descripcion }}</v-card-subtitle>
          <v-card-text>
            <v-text-field
              v-model="razonesRechazo[index]"
              label="Motivo de rechazo"
              placeholder="Escribe la razón para rechazar"
              
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="green" @click="aceptarInvitacion(index)">Aceptar</v-btn>
            <v-btn color="red" @click="rechazarInvitacion(index)">Rechazar</v-btn>
          </v-card-actions>
        </v-card>
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
        { proyecto: "Proyecto A", descripcion: "Descripción del Proyecto A" },
        { proyecto: "Proyecto B", descripcion: "Descripción del Proyecto B" },
        { proyecto: "Proyecto C", descripcion: "Descripción del Proyecto C" }
      ],
      razonesRechazo: ["", "", ""], // Inicializar para cada invitación
    };
  },
  methods: {
    aceptarInvitacion(index) {
      this.invitaciones.splice(index, 1);
      alert("Has aceptado la invitación.");
    },
    rechazarInvitacion(index) {
      const razon = this.razonesRechazo[index];
      if (razon) {
        alert(`Has rechazado la invitación. Razón: ${razon}`);
      } else {
        alert("Has rechazado la invitación sin una razón específica.");
      }
      this.invitaciones.splice(index, 1);
    }
  }
};
</script>
