<template>
  <div class="login-box">
    <h1>login</h1>

    <md-field :class="messageClass">
      <label>E-mail</label>
      <md-input type="email" v-model="email" required></md-input>
      <span class="md-error">There is an error</span>
    </md-field>

    <md-field :class="messageClass">
      <label>Password</label>
      <md-input type="password" v-model="password" required></md-input>
      <span class="md-error">There is an error</span>
    </md-field>

    <md-button class="md-raised md-primary md-layout-item md-size-100" md-size-100
      >Entrar</md-button
    >
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  @Prop() private msg!: string;

  hasMessages = false;

  email = '';

  password = '';

  get messageClass(): string {
    return this.hasMessages ? 'md-invalid' : '';
  }
}
</script>
<style scoped lang="scss">
div.login-box {
  background-color: #ffff;
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
</style>
