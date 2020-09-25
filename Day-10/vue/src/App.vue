<template>
  <div id="app">
    <h1>透過切換 isShow 的布林值觀察變化。</h1>
    <p v-if="isShow">I'm here!</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
