<template>
  <div class="home">
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue';

export default {
  name: 'Home',
  components: {
    Login,
  },
};
</script>
<style lang="scss">
div.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url('../assets/Business_PNG.png') no-repeat;
  background-position: 95% 85%;
  background-size: 500px;
}
</style>
