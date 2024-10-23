<template>
  <div id="app">
    <CompletionistChecklist />
  </div>
</template>

<script>
import CompletionistChecklist from "./components/CompletionistChecklist.vue";

export default {
  name: "App",
  components: {
    CompletionistChecklist,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  image-rendering: pixelated;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
}
</style>
