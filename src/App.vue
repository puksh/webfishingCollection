<template>
  <div class="app-container">
    <Sidebar @navigate="handleNavigation" />
    <main class="main-content">
      <CompletionistChecklist v-if="currentPage === 'CompletionistChecklist'" />
      <About v-if="currentPage === 'about'" />
      <Settings v-if="currentPage === 'settings'" />
    </main>
  </div>
</template>

<script>
import CompletionistChecklist from "./components/CompletionistChecklist.vue";
import About from "./components/About.vue";
import Settings from "./components/Settings.vue";
import Sidebar from "./components/Sidebar.vue";

export default {
  name: "App",
  components: {
    CompletionistChecklist,
    Sidebar,
    About,
    Settings,
  },
  data() {
    return {
      currentPage: "CompletionistChecklist",
    };
  },
  methods: {
    handleNavigation(section) {
      this.currentPage = section;
    },
  },
};
</script>

<style scoped>
* {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  image-rendering: pixelated;
}
.app-container {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  padding-left: 88px;
}

.main-content {
  flex: 1;
  padding: 20px;
  max-width: 800px;
  text-align: center;
  border-left: 4px solid transparent;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
/* Remove left padding on smaller screens */
@media (max-width: 900px) {
  .app-container {
    padding-left: 0;
    height: auto;
  }

  .main-content {
    padding-bottom: 60px; /* Offset for bottom-positioned sidebar */
  }
}
</style>
