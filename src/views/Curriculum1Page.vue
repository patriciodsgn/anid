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

      <h2 class="mb-4">Curriculum</h2>

      <!-- Botones de navegación -->
      
        <div class="menu-line">
          <a class="menu-line__btn menu-line__btn--active" href="#">Curriculum ANID</a>
          <a class="menu-line__btn" href="https://investigadores.anid.cl/">Ir a Portal del Investigador</a>
        </div>
      
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
          <div class="btn-primary-v1" type="submit">
            Descargar Formato ANID
          </div>
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
                <div class="btn-primary-v1">+ AGREGAR</div>
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
              <br>
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
                  <div class="btn-primary-v1">+ AGREGAR</div>
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
                  <div class="btn-primary-v1">+ AGREGAR</div>
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
              <!-- <div class="line-data">
                <div class="w40">Proyecto</div>
                <div class="w40">Financiación</div>
                <div class="w20">Año</div>
              </div> -->
              <div class="line-data">
                <div class="w50"><v-text-field variant="outlined" label="Proyecto"></v-text-field></div>
                <div class="w40"><v-text-field variant="outlined" label="Financiación"></v-text-field></div>
                <div class="w10"><v-text-field variant="outlined" label="Año"></v-text-field></div>
              </div>
              
              <v-row>
                <v-col cols="10" offset="2"  sm="4"  offset-sm="8">
                  <div class="btn-primary-v1">+ AGREGAR</div>
                </v-col>
              </v-row>
            </v-card-text>

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
              <br>
              <!-- <div class="line-data">
                <div class="w70">Indicador</div>
                <div class="w30">Cantidad</div>
              </div> -->
              <div class="line-data">
                <div class="w90 borderx">Índice h total de Google Scholar</div>
                <div class="w10"><v-text-field variant="outlined"  label="Num"></v-text-field></div>
              </div>
              <div class="line-data">
                <div class="w90 borderx">Total de publicaciones en los últimos 5 años</div>
                <div class="w10"><v-text-field variant="outlined"  label="Num"></v-text-field></div>
              </div>

              <v-row>
                <v-col cols="10" offset="2"  sm="4"  offset-sm="8">
                  <div class="btn-primary-v1">+ AGREGAR</div>
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
          <div class="btn-success-v1">GUARDAR</div>
        </v-col>
      </v-row>
      <br>

    
  </v-col>
</v-row>
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



</style>
