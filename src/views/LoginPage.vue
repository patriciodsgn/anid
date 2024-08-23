<template>
  <v-container class="d-flex justify-center align-center block-v1 h-100" fill-height>
    <div class="area">
      <v-card class="card-v1" max-width="400">
        <!-- Mini menú horizontal -->
        <div class="menu-micro-login">
          <span class="menu-micro-login--anid-id">
            <img src="https://idd.cl/d/anid/assets/img/logo-anid-id.svg" alt="logo anid id">
          </span>
          <a href="https://accounts.claveunica.gob.cl/accounts/login/?next=/openid/authorize%3Fclient_id%3D9f3c39663dac4e6791811016adc217da%26redirect_uri%3Dhttps%253a%252f%252fclave.fondosdecultura.cl%252fES%252fAccount%252fResponseCU%26response_type%3Dcode%26scope%3Dopenid%2520run%2520name%26state%3DLVr8SaszYx5stKDEpcxKpG65g4YTeCA4vIUqmbgHZ2LLUcOKm8dCh-xd6HDqSQ-uNKgezeXmDVhYe8pUOSexYSK451tKEFucf5umDgqTdCY1" class="menu-micro-login--clave-unica">
            <img src="https://idd.cl/d/anid/assets/img/logo-clave-unica.svg" alt="logo anid id">
          </a>
        </div>

        <br>
        <div><b>Bienvenido(a)</b>,</div>
        <div>al Sistema de Postulación ANID</div>
        <div>Ingrese con su <b>ANID ID</b> o <b>Clave Única</b>.</div>

        <v-card-text>
          <v-form>
            <v-text-field
              v-model="username"
              label="ANID ID"
              variant="outlined"
            ></v-text-field>
            <v-text-field
              v-model="password"
              label="Contraseña"
              type="password"
              variant="outlined"
            ></v-text-field>
            <v-btn class="blue darken-1 white--text" @click="login">Ingresar</v-btn>
            <v-alert v-if="errorMessage" type="error" outlined>{{ errorMessage }}</v-alert>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-btn text color="primary" @click="forgotPassword">¿Olvidaste tu contraseña?</v-btn>
        </v-card-actions>

        <v-card-subtitle>
          <a href="#">Si aún no has creado tu cuenta ANID Ingresa aquí</a>
        </v-card-subtitle>
        
        <v-card-text>
          <small>ANID no puede ver sus credenciales. Solo usted tiene acceso a la plataforma.</small>
        </v-card-text>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '', // Variable para mostrar mensajes de error
    };
  },
  methods: {
    login() {
      // Simular un inicio de sesión exitoso
      if (this.username === 'patricio@usach.cl' && this.password === '123456') {
        console.log('Iniciar sesión con', this.username, this.password);
        // Redirigir a la página de Notificación 1
        this.$router.push('/notificaciones1');
      } else if (this.username === 'mariajose@puc.cl' && this.password === '123456') {
        console.log('Iniciar sesión con', this.username, this.password);
        // Redirigir a la página de Role 2
        this.$router.push('/role2');
      } else {
        this.errorMessage = 'Credenciales incorrectas'; // Mostrar el mensaje de error
      }
    },
    forgotPassword() {
      this.errorMessage = 'Recuperar contraseña no disponible en este momento.';
    },
  },
};
</script>


<style scoped>
.v-card {
  padding: 20px;
}

.v-card-title {
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
}

.v-btn {
  width: 100%;
  margin-top: 20px;
}

.v-field__input {
  border: 2px solid #205ec9;
}

.blue {
  background-color: #205ec9;
  color: #ffffff;
  padding: 16px;
  height: auto;
  border-radius: 0;
  box-shadow: none;
}

.menu-micro-login--anid-id,
.menu-micro-login--clave-unica {
  background-color: #205ec9;
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-micro-login--anid-id {
  background-color: #0b1e3e;
}

.menu-micro-login--anid-id img,
.menu-micro-login--clave-unica img {
  width: 100px;
}

.menu-micro-login {
  position: relative;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
}
</style>
