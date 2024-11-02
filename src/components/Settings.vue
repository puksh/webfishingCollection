<template>
  <div class="settings-container">
    <h1>Settings</h1>
    <button @click="resetSettings">Reset Settings</button>
    <button @click="exportSettings">Export Settings</button>
    <button @click="importSettings">Import Settings</button>
  </div>
</template>

<script>
export default {
  name: "Settings",
  methods: {
    resetSettings() {
      // Reset clickedStates
      if (
        confirm(
          "Are you sure you want to reset your settings? This will delete all your saved data."
        )
      ) {
        if (
          confirm(
            "Double-checking... Are you REALLY sure you want to reset your settings? This will delete all your saved data."
          )
        ) {
          localStorage.removeItem("clickedStates");
          alert("Settings have been reset.");
        }
      }
    },
    exportSettings() {
      // Export settings as an encrypted string and copy to clipboard
      const settings = localStorage.getItem("clickedStates");
      const encryptedSettings = btoa(settings); // Simple base64 encryption
      navigator.clipboard
        .writeText(encryptedSettings)
        .then(() => {
          alert("Settings have been copied as an encrypted string.");
        })
        .catch((err) => {
          console.error("Failed to copy settings: ", err);
        });
    },
    importSettings() {
      // Import settings from user input
      const encryptedSettings = prompt(
        "Enter your base64-encoded settings string:"
      );
      if (encryptedSettings) {
        const settings = atob(encryptedSettings); // Simple base64 decryption
        localStorage.setItem("clickedStates", settings);
      }
    },
  },
};
</script>

<style scoped>
.settings-container {
  padding: 20px;
  max-width: 800px;
  text-align: center;
  border-left: 4px solid transparent;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
</style>
