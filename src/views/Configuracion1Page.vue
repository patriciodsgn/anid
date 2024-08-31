<template>
  <div>
    <v-container>
      <div class="area-v2">

      <h2>Configuración de Cuenta</h2>

      <p class="intro">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi id est laborum.</p>
      
      <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="formData.username"
              label="Nombre de Usuario"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="formData.email"
              :rules="[v => /.+@.+\..+/.test(v) || 'Email inválido']"
              label="Email"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="formData.email2"
              :rules="[v => /.+@.+\..+/.test(v) || 'Email inválido']"
              label="Email Respaldo"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="formData.email3"
              :rules="[v => /.+@.+\..+/.test(v) || 'Email inválido']"
              label="Email Respaldo"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="formData.phone"
            :rules="[v => /^(\+56)?(\s?9\d{8})$/.test(v) || 'Teléfono inválido']"
            label="Teléfono de Contacto"
            variant="outlined"
            required
          ></v-text-field>
        </v-col>
      </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="formData.password"
              :rules="[v => !!v || 'La contraseña es requerida']"
              label="Contraseña"
              type="password"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-text-field
              v-model="formData.confirmPassword"
              :rules="[v => v === formData.password || 'Las contraseñas no coinciden']"
              label="Confirmar Contraseña"
              type="password"
              variant="outlined"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" sm="6">
            <v-select
              v-model="formData.preferredLanguage"
              :items="['Español', 'Inglés']"
              label="Idioma Preferido"
              variant="outlined"
              required
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6">
            <v-select
              v-model="formData.theme"
              :items="['Claro', 'Oscuro']"
              label="Tema de Interfaz"
              variant="outlined"
              required
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6">
            <v-switch
              v-model="formData.notifications"
              label="Habilitar Notificaciones"
              inset
              variant="outlined"
            ></v-switch>
          </v-col>


        </v-row>
        <v-row>
          <v-col cols="12" sm="6" offset="2">
            <v-btn class="btn-primary-v1" type="submit" :disabled="!valid">
              Guardar Configuración
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
  name: 'ConfiguracionPage',
  data() {
    return {
      valid: false,
      formData: {
        username: 'patricio_andres',
        email: 'patricio@usach.cl',
        email2: 'patricio@gmail.cl',
        email3: 'patricio@outlook.cl',
        phone: '+56988650377',
        password: '******',
        confirmPassword: '******',
        preferredLanguage: 'Español',
        theme: 'Claro',
        notifications: true,
        twoFactorAuth: false
      }
    };
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        console.log(this.formData);
        alert('Configuración guardada exitosamente!');
      }
    }
  }
};
</script>
