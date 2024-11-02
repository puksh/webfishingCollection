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
    /*************  ✨ Codeium Command 🌟  *************/
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
    /******  4608c2a2-290f-4f15-bcdd-5df9e85308c9  *******/
    exportSettings() {
      // Export settings to a JSON file
      const settings = localStorage.getItem("userSettings");
      const blob = new Blob([settings], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "settings.json";
      a.click();
      URL.revokeObjectURL(url);
    },
    copySettingsToClipboard() {
      // Copy settings to clipboard
      const settings = localStorage.getItem("userSettings");
      navigator.clipboard.writeText(settings);
      alert("Settings have been copied to clipboard.");
    },
    pasteSettingsFromClipboard() {
      // Paste settings from clipboard
      navigator.clipboard.readText().then((settings) => {
        try {
          JSON.parse(settings); // Validate JSON
          localStorage.setItem("userSettings", settings);
          alert("Settings have been imported.");
        } catch (error) {
          alert("Invalid settings in clipboard.");
        }
      });
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
