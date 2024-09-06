<template>
  <div class="page2">
    <h2>Progreso general</h2>
    <div id="progress">
      <!-- Aquí se mostrará el porcentaje de completitud -->
      <p>{{ totalCompletionPercentage }}% completado</p>
    </div>

    <div class="page-block">
      <h3 id="heading1">Sección 1</h3>
      <p>Esta es la sección 1.</p>
      <v-text-field class="dev" label="Campo 1 de la sección 1" v-model="form.section1.field1" @input="updateProgress"></v-text-field>
      <v-text-field class="dev" label="Campo 2 de la sección 1" v-model="form.section1.field2" @input="updateProgress"></v-text-field>
      <v-text-field label="Campo no contado"></v-text-field>
    </div>

    <div class="page-block">
      <h3 id="heading2">Sección 2</h3>
      <p>Esta es la sección 2.</p>
      <v-text-field class="dev" label="Campo 1 de la sección 2" v-model="form.section2.field1" @input="updateProgress"></v-text-field>
    </div>

    <div class="page-block">
      <h3 id="heading3">Sección 3</h3>
      <p>Esta es la sección 3.</p>
      <v-text-field class="dev" label="Campo 1 de la sección 3" v-model="form.section3.field1" @input="updateProgress"></v-text-field>
      <v-text-field class="dev" label="Campo 2 de la sección 3" v-model="form.section3.field2" @input="updateProgress"></v-text-field>
      <v-text-field class="dev" label="Campo 3 de la sección 3" v-model="form.section3.field3" @input="updateProgress"></v-text-field>
    </div>

    <div class="page-block">
      <h3 id="heading4">Sección 4</h3>
      <p>Esta es la sección 4.</p>
      <v-text-field class="dev" label="Campo 1 de la sección 4" v-model="form.section4.field1" @input="updateProgress"></v-text-field>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegularConcursos25',
  data() {
    return {
      form: {
        section1: { field1: '', field2: '' },
        section2: { field1: '' },
        section3: { field1: '', field2: '', field3: '' },
        section4: { field1: '' }
      },
      totalCompletionPercentage: 0 // Porcentaje de completitud general
    };
  },
  mounted() {
    this.updateProgress(); // Calcular el progreso al cargar la página
  },
  methods: {
    updateProgress() {
      const sections = Object.values(this.form); // Obtener las secciones del formulario
      let totalFields = 0;
      let completedFields = 0;

      // Calcular el total de campos y los campos completados
      sections.forEach(section => {
        const fields = Object.values(section);
        totalFields += fields.length;
        completedFields += fields.filter(field => field.trim() !== '').length;
      });

      // Calcular el porcentaje de completitud general
      this.totalCompletionPercentage = totalFields > 0 ? Math.round((completedFields / totalFields) * 100) : 0;
    }
  }
};
</script>

<style scoped>
#progress {
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
}
</style>
