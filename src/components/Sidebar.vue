<template>
  <aside class="sidebar">
    <button @click="navigateTo('fishChecklist')" class="sidebar-button">
      Collection
    </button>
    <button @click="navigateTo('about')" class="sidebar-button">About</button>
    <button @click="navigateTo('settings')" class="sidebar-button">
      Settings
    </button>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    navigateTo(section) {
      this.$emit("navigate", section); // Emit navigation events to parent
    },
  },
};
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 88px;
  background-color: #5a755a;
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 10; /* Ensures it stays on top of other content */
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar-button {
  background-color: #ffeed5;
  border: none;
  color: #333;
  height: 66px;
  padding: 10px;
  font-size: 12px;
  border-radius: 8px;
  cursor: pointer;
}

/* Mobile styling: Move sidebar to the bottom */
@media (max-width: 900px) {
  .sidebar {
    position: fixed;
    left: 0;
    bottom: 0;
    top: auto; /* Remove top alignment */
    width: 100%;
    height: 33px;
    flex-direction: row;
    justify-content: space-around;
    z-index: 10;
    padding-bottom: 13px;
  }

  .sidebar-button {
    height: 39px;
    flex: 1;
    font-size: 14px;
    padding: 0px;
  }
}
</style>
