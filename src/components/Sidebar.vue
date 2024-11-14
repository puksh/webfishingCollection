<template>
  <aside class="sidebar">
    <router-link to="/" class="sidebar-button"> Collection </router-link>
    <router-link to="/about" class="sidebar-button">About</router-link>
    <router-link to="/settings" class="sidebar-button"> Settings </router-link>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
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
}

.sidebar-button {
  background-color: #ffeed5;
  color: #333;
  height: 66px;
  padding: 10px;
  font-size: 12px;
  border-radius: 8px;
  cursor: pointer;
  border-color: #5a755a;
  border-width: 1px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}
.sidebar-button:hover {
  background-color: #ffd7ae;
  color: #222;
  border-color: #3e8e41;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transform: scale(1.05) ease;
}

.sidebar-button:active {
  background-color: #ff9900;
  color: #111;
  border-color: #2f6f2f;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  transform: scale(0.95) ease;
}
/* Mobile styling: Move sidebar to the bottom */
@media (max-width: 900px) {
  .sidebar {
    background-color: transparent;
    position: fixed;
    left: 0;
    bottom: 33px;
    top: auto; /* Remove top alignment */
    width: 100%;
    height: 33px;
    flex-direction: row;
    justify-content: space-around;
    z-index: 10;
    box-sizing: border-box; /* Include scrollbar in width calculation */
  }

  .sidebar-button {
    height: 39px;
    border-color: #5a755a;
    border-width: 1px;
    flex: 1 1 33.33%; /* Make all buttons one-third of the width */
    font-size: 14px;
    padding: 0px;
    margin: 0 auto;
  }
}
</style>
