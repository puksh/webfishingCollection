<template>
  <div class="settings-container">
    <h1>Settings</h1>
    <section>
      <h2>Export / Import</h2>
      <button @click="exportSettings" class="export-button">
        Export Collection
      </button>
      <button @click="importSettings" class="import-button">
        Import Collection
      </button>
    </section>

    <section>
      <h2>Reset</h2>
      <button @click="resetSettings" class="reset-button">
        Reset Collection
      </button>
    </section>

    <section>
      <h2>Help</h2>
      <p>
        If you have any issues, please open an issue on
        <a href="https://github.com/puksh/webfishingCollection" target="_blank"
          >GitHub</a
        >.
      </p>
    </section>
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
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-left: 4px solid transparent;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
.reset-button,
.export-button,
.import-button {
  padding: 10px;
  margin: 0 5px;
  color: #faebd1;
  font-weight: bold;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 2vb;
  height: 35px;
  font-size: 20px;
  line-height: 10px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease,
    font-weight 0.3s ease;
  font-family: "IBMPlexMono", monospace;
}

.export-button {
  background-color: #007bff; /* Blue */
  color: white;
}

.import-button {
  background-color: #28a745; /* Green */
  color: white;
}
.reset-button {
  background-color: #dc3545; /* Red */
  color: white;
  gap: 20px;
}
.reset-button:hover,
.export-button:hover,
.import-button:hover {
  transform: scale(1.08);
}
h2 {
  font-size: 20px;
  font-weight: bold;
}
a {
  text-decoration: none;
  color: #007bff;
}
</style>
