<template>
  <v-container>
    <div class="area-v2">
    <!-- Sección 1: Información del Programa de Estudios -->
    <v-card>
      <v-card-title class="text-h5">Información del Programa de Estudios</v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field variant="outlined" v-model="programa.nombreInstitucion" label="Nombre de la Institución" :items="instituciones" required></v-text-field>
          <v-text-field variant="outlined" v-model="programa.nombrePrograma" label="Nombre del Programa de Estudios" required></v-text-field>
          <v-text-field variant="outlined" v-model="programa.region" label="Región en que se imparte el Programa de Estudios" required></v-text-field>
          <v-text-field variant="outlined" v-model="programa.especialidadWOS" label="Especialidad Web of Science (WOS)" :items="especialidadesWOS" required></v-text-field>
          <v-text-field variant="outlined" v-model="programa.subAreaOCDE" label="Sub Área OCDE" required></v-text-field>
          <v-text-field variant="outlined" v-model="programa.sitioWebUniversidad" label="Sitio Web de la Universidad (link)" required></v-text-field>
          <v-text-field variant="outlined" v-model="programa.sitioWebPrograma" label="Sitio Web del Programa (link)" required></v-text-field>
          <v-text-field variant="outlined" v-model="programa.fechaInicio" label="Fecha de inicio de los estudios" type="date" required></v-text-field>
          <v-select variant="outlined" v-model="programa.estadoPostulacion" label="Estado de la Postulación al Programa de Estudio" :items="estadosPostulacion" required></v-select>
        </v-form>
      </v-card-text>
    </v-card>

    <!-- Sección 2: Descripción del Programa de Estudios -->
    <v-card class="mt-5">
      <v-card-title class="text-h5">Descripción del Programa de Estudios</v-card-title>
      <v-card-text>
        <v-form>
          <v-textarea variant="outlined" v-model="programa.objetivoGeneral" label="Objetivo General" maxlength="500" required></v-textarea>
          <v-textarea variant="outlined" v-model="programa.objetivosEspecificos" label="Objetivos Específicos" maxlength="2000" required></v-textarea>
          <v-textarea variant="outlined" v-model="programa.cuerpoAcademico" label="Cuerpo Académico y/o equipo de investigación" maxlength="2000" required></v-textarea>
        </v-form>
      </v-card-text>
    </v-card>

    <!-- Sección 3: Investigación y Objetivos de Estudio -->
    <v-card class="mt-5">
      <v-card-title class="text-h5">Investigación y Objetivos de Estudio</v-card-title>
      <v-card-text>
        <v-form>
          <v-textarea variant="outlined" v-model="investigacion.docenciaInvestigacion" label="Actividades de Docencia e Investigación" maxlength="3000" required></v-textarea>
          <v-textarea variant="outlined" v-model="investigacion.objetivoEstudio" label="Objetivo de Estudio" maxlength="3000" required></v-textarea>
          <v-textarea variant="outlined" v-model="investigacion.declaracionIntereses" label="Declaración de Intereses" maxlength="2000" required></v-textarea>
          <v-textarea variant="outlined" v-model="investigacion.retribucionPais" label="Retribución al País" maxlength="2000" required></v-textarea>
        </v-form>
      </v-card-text>
      <v-btn class="btn-success-v1">GUARDAR</v-btn>

    </v-card>
  </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      programa: {
        nombreInstitucion: '',
        nombrePrograma: '',
        region: '',
        especialidadWOS: '',
        subAreaOCDE: '',
        sitioWebUniversidad: '',
        sitioWebPrograma: '',
        fechaInicio: '',
        estadoPostulacion: '',
        objetivoGeneral: '',
        objetivosEspecificos: '',
        cuerpoAcademico: ''
      },
      investigacion: {
        docenciaInvestigacion: '',
        objetivoEstudio: '',
        declaracionIntereses: '',
        retribucionPais: ''
      },
      instituciones: ['UNIVERSIDAD DE CHILE', 'PONTIFICIA UNIVERSIDAD CATOLICA DE CHILE', 'UNIVERSIDAD DE CONCEPCION'],
      especialidadesWOS: ['Abuso de Sustancias', 'Acústica', 'Administración Pública'],
      estadosPostulacion: ['Admitido(a)/Aceptado(a)', 'Alumno(a) Regular', 'En proceso de postulación formal']
    }
  }
}
</script>

<style scoped>
  .mt-5 {
    margin-top: 32px;
  }
</style>
