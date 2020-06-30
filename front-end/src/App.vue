<template>
  <div id="app">
    <!-- <div >
      <div v-if="loggedIn" id="nav">
        <router-link to="/employees">Funcionários</router-link>
        <router-link to="/feedbacks">Feedbacks</router-link>
      </div>
      <router-view />
    </div>-->
    <router-view />
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
  padding: 30px;

  a {
    font-weight: 500;
    font-size: 26px;
    color: #cccccc;
    padding-left: 20px;

    &.router-link-exact-active {
      color: #7743d9;
    }
  }
}

div.container {
  border-radius: 50px;
  background: #fff;
  min-height: calc(100vh - 100px);
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
