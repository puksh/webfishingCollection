<template>
  <div class="app-container">
    <Sidebar />
    <main class="main-content">
      <router-view></router-view>
      <NotificationMessage />
    </main>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import NotificationMessage from "./components/NotificationMessage.vue";

export default {
  name: "Webfishing Tracker",
  components: {
    Sidebar,
    NotificationMessage,
  },
};
</script>

<style>
* {
  font-family: "IBMPlexMono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  image-rendering: pixelated;
  scrollbar-width: none;
}
body::-webkit-scrollbar {
  display: none; /* Hide scrollbar on Chrome, Safari */
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
  max-width: 1600px;
  text-align: center;
  border-left: 4px solid transparent;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  overflow: visible;
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
