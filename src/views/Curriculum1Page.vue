<template>
  <v-container>

    <div class="area-v2">
    <h2 class="mb-4">Curriculum</h2>

    <!-- 1. Enlace a Curriculum Completo -->
    <v-card class="card-v1">
      <v-card-title>1. Enlace a Curriculum Completo del(la) Director(a)</v-card-title>
      <v-card-text>
        <p>A continuación, se solicita un enlace a ORCID, que debe incluir todo su historial académico y laboral relevante, junto con el contenido completo de sus publicaciones científicas.</p>
        <v-text-field variant="outlined" label="Enlace Curriculum" required></v-text-field>
      </v-card-text>
    </v-card>

    <!-- 2. Antecedentes Académicos -->
    <v-card class="card-v1">
      <v-card-title>2. Antecedentes Académicos</v-card-title>
      <v-card-text>
        <v-simple-table>
          <thead>
            <tr>
              <th>Grado Académico</th>
              <th>Título o Nombre</th>
              <th>Institución</th>
              <th>Año</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><v-text-field variant="outlined"  label="Grado Académico"></v-text-field></td>
              <td><v-text-field variant="outlined" label="Título o Nombre"></v-text-field></td>
              <td><v-text-field variant="outlined" label="Institución"></v-text-field></td>
              <td><v-text-field variant="outlined" label="Año"></v-text-field></td>
            </tr>
          </tbody>
        </v-simple-table>
        <v-btn class="btn-primary-v1">+ AGREGAR</v-btn>
      </v-card-text>
    </v-card>

    <!-- 3. Productos Científicos -->
    <v-card class="card-v1">
      <v-card-title>3. Productos Científicos</v-card-title>
      <v-card-text>
        <p>Se solicita ingresar 3 listas de productos científicos relevantes.</p>

        <h4>3.1 Productos Relevantes Relacionados con el Proyecto de Núcleo</h4>
        <v-simple-table>
          <thead>
            <tr>
              <th>Producto Científico</th>
              <th>URL</th>
              <th>Año</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><v-text-field variant="outlined" label="Producto Científico"></v-text-field></td>
              <td><v-text-field variant="outlined" label="URL"></v-text-field></td>
              <td><v-text-field variant="outlined" label="Año"></v-text-field></td>
            </tr>
          </tbody>
        </v-simple-table>
        <v-btn class="btn-primary-v1">+ AGREGAR</v-btn>

        <h4 class="mt-6">3.2 Otros Productos Relevantes</h4>
        <v-simple-table>
          <thead>
            <tr>
              <th>Producto Científico</th>
              <th>URL</th>
              <th>Año</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><v-text-field variant="outlined" label="Producto Científico"></v-text-field></td>
              <td><v-text-field variant="outlined" label="URL"></v-text-field></td>
              <td><v-text-field variant="outlined" label="Año"></v-text-field></td>
            </tr>
          </tbody>
        </v-simple-table>
        <v-btn class="btn-primary-v1">+ AGREGAR</v-btn>
      </v-card-text>
    </v-card>

    <!-- 4. Financiamiento de Investigación -->
    <v-card class="card-v1">
      <v-card-title>4. Financiamiento de Investigación en los últimos 5 años</v-card-title>
      <v-card-text>
        <v-simple-table>
          <thead>
            <tr>
              <th>Proyecto</th>
              <th>Financiación</th>
              <th>Año</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><v-text-field variant="outlined" label="Proyecto"></v-text-field></td>
              <td><v-text-field variant="outlined" label="Financiación"></v-text-field></td>
              <td><v-text-field variant="outlined" label="Año"></v-text-field></td>
            </tr>
          </tbody>
        </v-simple-table>
        <v-btn class="btn-primary-v1">+ AGREGAR</v-btn>
      </v-card-text>
    </v-card>

    <!-- 5. Indicadores -->
    <v-card class="card-v1">
      <v-card-title>5. Indicadores</v-card-title>
      <v-card-text>
        <h4>5.1 Productividad Científica</h4>
        <v-simple-table>
          <thead>
            <tr>
              <th>Indicador</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Índice h total de Google Scholar</td>
              <td><v-text-field variant="outlined"  label="Num"></v-text-field></td>
            </tr>
            <tr>
              <td>Total de publicaciones en los últimos 5 años</td>
              <td><v-text-field variant="outlined"  label="Num"></v-text-field></td>
            </tr>
          </tbody>
        </v-simple-table>
        <v-btn class="btn-primary-v1">+ AGREGAR</v-btn>
      </v-card-text>
    </v-card>

    <!-- Botón de Guardar -->
    <v-btn class="btn-success-v1">GUARDAR</v-btn>
  </div>



  </v-container>
</template>

<script>
export default {
  name: "CurriculumPage"
};
</script>

<style scoped>
h2 {
  font-weight: bold;
}

h4 {
  margin-top: 16px;
}
</style>
