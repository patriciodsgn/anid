<template>
  <v-container>
    <div class="area-v2">
      <h2 class="mb-4">Curriculum</h2>

      <!-- Botones de navegación -->
      <v-row>
        <v-col cols="12" sm="6">
          <a class="menu-line__btn" href="#">Curriculum ANID</a>
        </v-col>
        <v-col cols="12" sm="6">
          <a class="menu-line__btn" href="https://investigadores.anid.cl/">Ir a Portal del Investigador</a>
        </v-col>
      </v-row>
      <br>

      <!-- Descripción -->
      <v-row>
        <v-col cols="12" sm="10" offset="0" offset-sm="1" class="intro">
          <p>Este es el <b>formato de CV para ANID</b>. Si necesitas el <b>formato para Portal del Investigador</b>, por favor selecciona la opción correspondiente.</p>
        </v-col>
      </v-row>
      <br>

      <!-- Botón de descarga -->
      <v-row>
        <v-col cols="12" sm="10" offset="0" offset-sm="1">
          <v-btn class="btn-primary-v1" type="submit">
            Descargar Formato ANID
          </v-btn>
        </v-col>
      </v-row>
      <br><br>

      <!-- 1. Enlace a Curriculum Completo -->
      <v-row>
        <v-col cols="12">
          <v-card class="card-v1">
            <v-card-title>1. Enlace a Curriculum Completo del(la) Director(a)</v-card-title>
            <v-card-text>
              <p>A continuación, se solicita un enlace a ORCID, que debe incluir todo su historial académico y laboral relevante, junto con el contenido completo de sus publicaciones científicas.</p>
              <br>
              <v-text-field variant="outlined" label="Enlace Curriculum" required></v-text-field>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <br>

      <!-- 2. Antecedentes Académicos -->
      <v-row>
        <v-col cols="12">
          <v-card class="card-v1">
            <v-card-title>2. Antecedentes Académicos</v-card-title>
            <!-- <div class="line-data line-data-h">
              <div class="w30">Grado Académico</div>
              <div class="w30">Título o Nombre</div>
              <div class="w30">Institución</div>
              <div class="w10">Año</div>
            </div> -->
            <div class="line-data">
              <div class="w30"><v-text-field variant="outlined" label="Grado Académico" v-model="rows[0].grado"></v-text-field></div>
              <div class="w30"><v-text-field variant="outlined" label="Título o Nombre" v-model="rows[0].titulo"></v-text-field></div>
              <div class="w30"><v-text-field variant="outlined" label="Institución" v-model="rows[0].institucion"></v-text-field></div>
              <div class="w10"><v-text-field variant="outlined" label="Año" v-model="rows[0].ano"></v-text-field></div>
            </div>
            <div class="line-data">
              <div class="w30"><v-text-field variant="outlined" label="Grado Académico" v-model="rows[1].grado"></v-text-field></div>
              <div class="w30"><v-text-field variant="outlined" label="Título o Nombre" v-model="rows[1].titulo"></v-text-field></div>
              <div class="w30"><v-text-field variant="outlined" label="Institución" v-model="rows[1].institucion"></v-text-field></div>
              <div class="w10"><v-text-field variant="outlined" label="Año" v-model="rows[1].ano"></v-text-field></div>
            </div>
            <v-row>
              <v-col cols="10" offset="2"  sm="4"  offset-sm="8">
                <v-btn class="btn-primary-v1">+ AGREGAR</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
      <br>


      <!-- 3. Productos Científicos -->
      <v-row>
        <v-col cols="12">
          <v-card class="card-v1">
            <v-card-title>3. Productos Científicos</v-card-title>
            <v-card-text>
              <p>Se solicita ingresar 3 listas de productos científicos relevantes.</p>
              <h4>3.1 Productos Relevantes Relacionados con el Proyecto de Núcleo</h4>
              <br>
              <!-- <div class="line-data line-data-h">
                <div class="w40">Producto Científico</div>
                <div class="w30">URL</div>
                <div class="w30">Año</div>
              </div> -->

              <div class="line-data">
                <div class="w50"><v-text-field variant="outlined" label="Producto Científico"></v-text-field></div>
                <div class="w40"><v-text-field variant="outlined" label="URL"></v-text-field></div>
                <div class="w10"><v-text-field variant="outlined" label="Año"></v-text-field></div>
              </div>
              <div class="line-data">
                <div class="w50"><v-text-field variant="outlined" label="Producto Científico"></v-text-field></div>
                <div class="w40"><v-text-field variant="outlined" label="URL"></v-text-field></div>
                <div class="w10"><v-text-field variant="outlined" label="Año"></v-text-field></div>
              </div>

              <v-row>
                <v-col cols="10" offset="2"  sm="4"  offset-sm="8">
                  <v-btn class="btn-primary-v1">+ AGREGAR</v-btn>
                </v-col>
              </v-row>

              <h4 class="mt-6">3.2 Otros Productos Relevantes</h4>
              <br>
              <div class="line-data">
                <div class="w50"><v-text-field variant="outlined" label="Producto Científico"></v-text-field></div>
                <div class="w40"><v-text-field variant="outlined" label="URL"></v-text-field></div>
                <div class="w10"><v-text-field variant="outlined" label="Año"></v-text-field></div>
              </div>
              <div class="line-data">
                <div class="w50"><v-text-field variant="outlined" label="Producto Científico"></v-text-field></div>
                <div class="w40"><v-text-field variant="outlined" label="URL"></v-text-field></div>
                <div class="w10"><v-text-field variant="outlined" label="Año"></v-text-field></div>
              </div>

              <v-row>
                <v-col cols="10" offset="2"  sm="4"  offset-sm="8">
                  <v-btn class="btn-primary-v1">+ AGREGAR</v-btn>
                </v-col>
              </v-row>
              
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <br>

      <!-- 4. Financiamiento de Investigación -->
      <v-row>
        <v-col cols="12">
          <v-card class="card-v1">
            <v-card-title>4. Financiamiento de Investigación en los últimos 5 años</v-card-title>

            <v-card-text> 
              <div class="line-data">
                <div class="w40">Proyecto</div>
                <div class="w40">Financiación</div>
                <div class="w20">Año</div>
              </div>
              <div class="line-data">
                <div class="w40"><v-text-field variant="outlined" label="Proyecto"></v-text-field></div>
                <div class="w40"><v-text-field variant="outlined" label="Financiación"></v-text-field></div>
                <div class="w20"><v-text-field variant="outlined" label="Año"></v-text-field></div>
              </div>
            </v-card-text>

            <v-row>
              <v-col cols="10" offset="2"  sm="4"  offset-sm="8">
                <v-btn class="btn-primary-v1">+ AGREGAR</v-btn>
              </v-col>
            </v-row>

          </v-card>
        </v-col>
      </v-row>
      <br>

      <!-- 5. Indicadores -->
      <v-row>
        <v-col cols="12">
          <v-card class="card-v1">
            <v-card-title>5. Indicadores</v-card-title>
            <v-card-text>
              <h4>5.1 Productividad Científica</h4>
              <div class="line-data">
                <div class="w70">Indicador</div>
                <div class="w30">Cantidad</div>
              </div>
              <div class="line-data">
                <div class="w70 border">Índice h total de Google Scholar</div>
                <div class="w30"><v-text-field variant="outlined"  label="Num"></v-text-field></div>
              </div>
              <div class="line-data">
                <div class="w70 border">Total de publicaciones en los últimos 5 años</div>
                <div class="w30"><v-text-field variant="outlined"  label="Num"></v-text-field></div>
              </div>

              <v-row>
                <v-col cols="10" offset="2"  sm="4"  offset-sm="8">
                  <v-btn class="btn-primary-v1">+ AGREGAR</v-btn>
                </v-col>
              </v-row>

            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <br>
      
      <!-- Botón de Guardar -->
      
      <v-row>
        <v-col cols="12" offset="0"  sm="6"  offset-sm="3">
          <v-btn class="btn-success-v1">GUARDAR</v-btn>
        </v-col>
      </v-row>
      <br>

    </div>
  </v-container>
</template>

<script>
export default {
  name: "CurriculumPage",
  data() {
    return {
      rows: [
        {
          grado: 'Magíster en Ciencias',
          titulo: 'Química',
          institucion: 'Universidad Católica',
          ano: '2017',
        },
        {
          grado: 'Doctorado en Física',
          titulo: 'Física Teórica',
          institucion: 'Universidad de Concepción',
          ano: '2020',
        },
      ],
    };
  },
};
</script>

<style scoped>
td, th {
  padding: 0;
  text-align: left;
  /* border: 1px solid #000; */
}

td {
  padding: 8px!important;
}

v-table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background-color: #f5f5f5;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.btn-primary-v1 {
  background-color: #1976d2;
  color: white;
}

.btn-success-v1 {
  background-color: #4caf50;
  color: white;
}

.card-v1 {
  padding: 20px;
  margin-bottom: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}


td, th {
  padding: 0;
  text-align: left;
  /* border: 1px solid #000; */
}

td{
  /* border: 2px solid #0f0; */
  padding: 0!important;
  margin: 0!important;
  height: 70px!important;
  left: 0!important;
  
}
td div{
  /* border: 2px solid #0f0; */
  padding: 0!important;
  margin: 0!important;
  margin-top: 10px!important;
  height: 70px!important;
  width: 100%!important;
  left: 0!important;
  
}

thead {
  background-color: #f5f5f5;
  border: none!important;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}


tbody tr:nth-child(even) {
  background-color: #fff;
}

th{
  border: none!important;
  margin-bottom: 20px!important;
}
td{
  border: none!important;
}



</style>
