<script>

import logoAnidId from "../assets/images/logo-anid_id.svg";
import logoClaveUnica from "../assets/images/logo-clave_unica.svg";

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '', // Variable para mostrar mensajes de error
      logoAnidId,
      logoClaveUnica,
    };
  },

  methods: {
    login() {
      // Simular un inicio de sesión exitoso
      if (this.username === 'usuario@demo.cl' && this.password === '123456') {
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


<template>
  <v-container class="d-flex justify-center align-center block-v1 h-100" fill-height>

    <v-row>
      <v-col
      cols="12" offset="0"
      xs="10" offset-xs="1"
      sm="10" offset-sm="1"
      md="10" offset-md="1"
      lg="8" offset-lg="2"
      xl="8" offset-xl="2"
      class="page">

        
        
        <!-- <v-card class="card-v1 border"> -->
          <!-- Mini menú horizontal -->
        <!-- <div class="menu-micro-login">
          <span class="menu-micro-login--anid-id">
          </span>
          <a href="https://accounts.claveunica.gob.cl/accounts/login/?next=/openid/authorize%3Fclient_id%3D9f3c39663dac4e6791811016adc217da%26redirect_uri%3Dhttps%253a%252f%252fclave.fondosdecultura.cl%252fES%252fAccount%252fResponseCU%26response_type%3Dcode%26scope%3Dopenid%2520run%2520name%26state%3DLVr8SaszYx5stKDEpcxKpG65g4YTeCA4vIUqmbgHZ2LLUcOKm8dCh-xd6HDqSQ-uNKgezeXmDVhYe8pUOSexYSK451tKEFucf5umDgqTdCY1" class="menu-micro-login--clave-unica">
            <img :src="logoAnidId" alt="logo anid id">
            <img :src="logoClaveUnica" alt="logo-clave-unica">
          </a>
        </div> -->
        
        <br>

        <v-row>
          <v-col 
            cols="10" offset="1"
            xs="8" offset-xs="2"
            sm="10" offset-sm="1"
            md="8" offset-md="2"
            lg="6" offset-lg="3"
            xl="4" offset-xl="4"
            class="block">

            <div class="menu-line">
              <div class="menu-line__btn menu-line__btn--active" href="#">
                <img class="menu-line__img1" :src="logoAnidId" alt="logo anid id">
              </div>
              <a class="menu-line__btn" href="https://accounts.claveunica.gob.cl/accounts/login/?next=/openid/authorize/%3Fscope%3Dopenid%2Brun%2Bname%26state%3DnqmiW1oMJtQACjewZ4nEMTfibegqNiJ-MRaQeDCvOo8.-VHmiyKK0s4.client-home%26response_type%3Dcode%26client_id%3D67339e06f4b44f78994ff4785178807a%26redirect_uri%3Dhttps%253A%252F%252Fheimdall.mercadopublico.cl%252Fauth%252Frealms%252Fmercadopublico%252Fbroker%252Foidc%252Fendpoint%26prompt%3Dlogin%26nonce%3DH844XerKMk_hcGcDykrHFA">
                <img class="menu-line__img2" :src="logoClaveUnica" alt="logo-clave-unica">
              </a>
            </div>

            <v-row>
              <v-col cols="12">
                <p><b>Bienvenido(a)</b>,</p> 
                <p>al Sistema de Postulación ANID</p>
                <p>Ingrese con su <b>ANID ID</b> o <b>Clave Única</b>.</p>
              </v-col>
            </v-row>

            <v-form>



              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="username"
                    label="ANID ID"
                    variant="outlined">
                  </v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                  v-model="password"
                  label="Contraseña"
                  type="password"
                  variant="outlined">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <div class="btn-primary-v1" @click="login">Ingresar</div>
                <v-alert v-if="errorMessage" type="error" variant="outlined" class="mt-5">{{ errorMessage }}</v-alert>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="8" offset="2">
                <v-btn class="link-main" @click="forgotPassword">¿Olvidaste tu contraseña?</v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <p class="text-center"><small>Si aún no has creado tu cuenta ANID <a class="link-main">Ingresa aquí</a></small></p>
                <br>
                <p class="text-center"><small>ANID no puede ver sus credenciales. <br>Solo usted tiene acceso a la plataforma. </small></p>
              </v-col>
            </v-row>

            </v-form>
            
          </v-col>
        </v-row>
        <br>
                <!-- <br> -->
                <!-- 
                <br> -->

              
              <!--  -->

        
        <!-- 
        
  <v-card-text>
        </v-card-text>

        <v-card-actions>
        </v-card-actions>

        
        <v-card-text>
        </v-card-text>
      </v-card>

 -->

      </v-col>
    </v-row>


  </v-container>
</template>



<style scoped>
.v-card {
  /* padding: 20px; */
}

.v-card-title {
  /* text-align: center;
  font-size: 18px; */
  /* margin-bottom: 20px; */
}

.v-btn {
  /* width: 100%;
  margin-top: 20px; */
}

.v-field__input {
  /* border: 2px solid #205ec9; */
}

.blue {
  /* background-color: #205ec9;
  color: #ffffff;
  padding: 16px;
  height: auto;
  border-radius: 0;
  box-shadow: none; */
}

.menu-micro-login--anid-id,
.menu-micro-login--clave-unica {
  /* background-color: #205ec9;
  width: 50%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center; */
}

.menu-micro-login--anid-id {
  /* background-color: #0b1e3e; */
}

.menu-micro-login--anid-id img,
.menu-micro-login--clave-unica img {
  /* width: 100px; */
}

.menu-micro-login {
  /* position: relative;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center; */
}
</style>
