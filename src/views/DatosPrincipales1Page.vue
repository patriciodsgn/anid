<template>
  <div>
    <v-container>
      <div class="area-v2">
      <h2>Datos Principales Page</h2>
      <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
        <v-row>
          <v-col cols="12" sm="8">
            <v-text-field
              v-model="formData.nombres"
              :rules="[v => !!v || 'Los nombres son requeridos']"
              label="Nombres"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="8">
            <v-text-field
              v-model="formData.primerApellido"
              :rules="[v => !!v || 'El primer apellido es requerido']"
              label="Primer Apellido"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="8">
            <v-text-field
            v-model="formData.segundoApellido"
              label="Segundo Apellido"
              variant="outlined"
              ></v-text-field>
            </v-col>
            
            <v-col cols="12" sm="8">
            <v-text-field
              v-model="formData.nombreSocial"
              label="Nombre Social"
              variant="outlined"
            ></v-text-field>
          </v-col>


          <div class="line-v1"></div>




          <v-col cols="12" sm="6">
            <v-select
              v-model="formData.runPasaporte"
              :items="['RUN', 'Pasaporte',]"
              label="RUN o Pasaporte"
              variant="outlined"
              required
            ></v-select>
          </v-col>


          <v-col cols="12" sm="6">
            <v-text-field
              v-model="formData.runPasaporteNumero"
              :rules="[v => !!v || 'El número es requerido']"
              label="Número"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-select
              v-model="formData.sexoRegistral"
              :items="['Masculino', 'Femenino', 'No Binario', 'Otro']"
              label="Sexo Registral"
              variant="outlined"
              required
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6">
            <v-select
              v-model="formData.sexoDeclarativo"
              :items="['Masculino', 'Femenino', 'Transmasculino', 'Transfemenino', 'No Binario', 'Otro']"
              label="Sexo Declarativo"
              variant="outlined"
              required
            ></v-select>
          </v-col>


          <v-col cols="12" sm="6">
            <v-text-field
              v-model="formData.nacionalidad"
              :rules="[v => !!v || 'La nacionalidad es requerida']"
              label="Nacionalidad"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="formData.fechaNacimiento"
              :rules="[v => !!v || 'La fecha de nacimiento es requerida']"
              label="Fecha de Nacimiento"
              type="date"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="formData.paisResidencia"
              :rules="[v => !!v || 'El país de residencia es requerido']"
              label="País de Residencia"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="formData.regionResidencia"
              :rules="[v => !!v || 'La región de residencia es requerida']"
              label="Región de Residencia"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="12">
            <v-text-field
              v-model="formData.lugarEmpleo"
              label="Indique el principal lugar de empleo del investigador"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-btn class="btn-primary-v2" type="submit" :disabled="!valid">
              Guardar
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'DatosPrincipalesPage',
  data() {
    return {
      valid: true,
      formData: {
        nombres : 'Patricio Andrés',
        primerApellido : 'Garrido',
        segundoApellido : 'García',
        nombreSocial : '',
        runPasaporte : 'RUN',
        runPasaporteNumero : '15.700.111-4',
        sexoRegistral : 'Masculino',
        sexoDeclarativo : 'Masculino',
        nacionalidad : 'Chilena',
        fechaNacimiento : '1984-08-08',
        paisResidencia : '',
        regionResidencia : '',
        lugarEmpleo : ''

      }
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        console.log(this.formData);
        alert('Formulario guardado!');
      }
    }
  }
};
</script>

