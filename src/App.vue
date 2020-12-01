<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <ComposantDynamique />
  </div>
</template>

<script>
import ComposantDynamique from "./components/ComposantDynamique";

export default {
  name: "App",
  components: {
    ComposantDynamique,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
