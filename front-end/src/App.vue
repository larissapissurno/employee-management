<template>
  <div id="app">
    <div>
      <div v-if="loggedIn" id="nav" class="md-elevation-6">
        <router-link to="/employees">Funcionários</router-link>

        <md-button @click="handleLogout">
          Sair
          <md-icon>exit_to_app</md-icon>
        </md-button>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue {
  get loggedIn(): boolean {
    return this.$store.state.authentication.status.loggedIn;
  }

  get containerClass(): string {
    return this.loggedIn ? 'container md-elevation-16' : '';
  }

  handleLogout() {
    console.log('logout?');

    const { dispatch } = this.$store;
    dispatch('authentication/logout');
  }
}
</script>

<style src="./assets/themes/purple-green-theme.scss" lang="scss"></style>

<style lang="scss">
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2b303f;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#nav {
  text-align: justify;
  background: #fff;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;

  a {
    font-weight: 500;
    font-size: 20px;
    color: #cccccc;
    padding-left: 20px;

    &.router-link-exact-active {
      color: #2b303f;
    }
  }

  button {
    float: right;
    display: flex;
    align-items: center;
  }
}

div.container {
  border-radius: 50px;
  background: #fff;
  min-height: calc(100vh - 200px);
  width: calc(100vw - 100px);
  padding: 30px;
  text-align: justify;
}

div.content {
  padding: 20px;
  text-align: justify;
  h1 {
    font-weight: 500;
    color: #7743d9;
    margin: 50px 0;

    i {
      color: #7743d9 !important;
    }
  }

  div.content-header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

button {
  border-radius: 50px !important;
}
</style>
