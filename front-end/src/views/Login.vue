<template>
  <div class="container">
    <div class="login-box">
      <h1>login</h1>
      <form v-on:submit.prevent="handleSubmit($event)">
        <md-field :class="submitted && !email ? 'md-invalid' : ''">
          <label>E-mail</label>
          <md-input type="email" v-model="email" required></md-input>
          <span class="md-error">Campo obrigatório</span>
        </md-field>

        <md-field :class="submitted && !password ? 'md-invalid' : ''">
          <label>Senha</label>
          <md-input type="password" v-model="password" required></md-input>
          <span class="md-error">Campo obrigatório</span>
        </md-field>

        <md-button
          type="submit"
          class="md-raised md-primary md-layout-item md-size-100"
          >Entrar
        </md-button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Swal from 'sweetalert2';
import api from '../services/api';

@Component
export default class Login extends Vue {
  email = '';

  password = '';

  submitted = false;

  handleSubmit(): void {
    this.submitted = true;
    const { email, password } = this;
    const { dispatch } = this.$store;
    if (email && password) {
      dispatch('authentication/login', { email, password });
    }
  }
}
</script>
<style scoped lang="scss">
div.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('../assets/Business_PNG.png') no-repeat;
  background-position: 95% 85%;
  background-size: 500px;

  div.login-box {
    background-color: #fff;
    padding: 26px;
    min-width: 500px;
    border-radius: 20px;
    -webkit-box-shadow: 0px 0px 50px 0px rgba(178, 178, 178, 0.6);
    -moz-box-shadow: 0px 0px 50px 0px rgba(178, 178, 178, 0.6);
    box-shadow: 0px 0px 50px 0px rgba(178, 178, 178, 0.6);
    button {
      margin-top: 20px;
    }
  }
}
</style>
