<template>
  <div class="settings-container">
    <h1>Settings</h1>
    <section>
      <h2>Export / Import</h2>
      <section class="export-import-section">
        <button @click="exportSettings" class="export-button">
          Export Collection
        </button>
        <button @click="importSettings" class="import-button">
          Import Collection
        </button>
      </section>
    </section>

    <section>
      <h2>Reset</h2>
      <button @click="resetSettings" class="reset-button">
        Reset Collection
      </button>
    </section>

    <section class="fast-mark">
      <h3>Mark all fish with selected rarity</h3>
      <button
        @click="markAllFishWithType('Normal')"
        class="mark-all-button normal"
      >
        Fill All Normal
      </button>
      <button
        @click="markAllFishWithType('Shining')"
        class="mark-all-button shining"
      >
        Fill All Shining
      </button>
      <button
        @click="markAllFishWithType('Glistening')"
        class="mark-all-button glistening"
      >
        Fill All Glistening
      </button>
      <button
        @click="markAllFishWithType('Opulent')"
        class="mark-all-button opulent"
      >
        Fill All Opulent
      </button>
      <button
        @click="markAllFishWithType('Radiant')"
        class="mark-all-button radiant"
      >
        Fill All Radiant
      </button>
      <button
        @click="markAllFishWithType('Alpha')"
        class="mark-all-button alpha"
      >
        Fill All Alpha
      </button>
    </section>
  </div>
</template>

<script>
import fishData from "@/data/fishData.js";
import { addNotification } from "@/components/NotificationMessage.vue";
export default {
  name: "Settings",
  data() {
    return {
      circleNames: [
        "Normal",
        "Shining",
        "Glistening",
        "Opulent",
        "Radiant",
        "Alpha",
      ],
      clickedStates: JSON.parse(localStorage.getItem("clickedStates") || "[]"),
      fishList: fishData,
    };
  },
  methods: {
    resetSettings() {
      // Reset clickedStates
      if (
        confirm(
          "Are you sure you want to reset your collection? This will delete all your saved collection."
        )
      ) {
        if (
          confirm(
            "Double-checking... Are you REALLY sure you want to reset them? This will delete all of it."
          )
        ) {
          localStorage.removeItem("clickedStates");
          addNotification("Collection reset!", "red");
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
          addNotification("Collection has been exported to clipboard!", "blue");
        })
        .catch((err) => {
          addNotification("Failed to copy your collection!", "red");
        });
    },
    importSettings() {
      // Import settings from user input
      const encryptedSettings = prompt("Paste your exported Collection here:");
      if (encryptedSettings) {
        const settings = atob(encryptedSettings); // Simple base64 decryption
        localStorage.setItem("clickedStates", settings);
        addNotification("Collection has been imported!", "blue");
      }
    },
    /**
     * Marks all fish in the given category with the given type.
     * If an entry for the fish already exists, the type is added if it's not already present.
     * If an entry for the fish does not exist, a new one is created.
     * @param {string} type The type to mark.
     */
    markAllFishWithType(type) {
      const now = new Date().toISOString().split("T")[0];

      // Step 1: Iterate over each fish in the fishList
      this.fishList.forEach((fish) => {
        // Find if the fish already exists in clickedStates
        const existingEntry = this.clickedStates.find(
          (entry) => entry.id === fish.id
        );

        if (existingEntry) {
          // If the fish exists, check if the caught type is already included
          if (!existingEntry.caughtTypes.includes(type)) {
            // Add the type if not already present
            existingEntry.caughtTypes.push(type);
            existingEntry.modifiedAt = now; // Update modified date
            //console.log(`Added type "${type}" to existing fish ID ${fish.id}`);
          }
        } else {
          // If the fish does not exist, create a new entry with the caught type
          this.clickedStates.push({
            id: fish.id,
            category: fish.category.toLowerCase(),
            caughtTypes: [type], // Start with the caught type
            modifiedAt: now,
          });
          //console.log(`Added new fish ID ${fish.id} with type "${type}"`);
        }
      });

      addNotification("Marked all fish with " + type + "!", "blue");
      // Step 2: Save updated clickedStates to localStorage
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem("clickedStates", JSON.stringify(this.clickedStates));
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
.import-button,
.mark-all-button {
  padding: 10px;
  margin: 0 5px;
  color: #faebd1;
  font-weight: bold;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 2vb;
  height: 45px;
  font-size: 20px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease,
    font-weight 0.3s ease;
  font-family: "IBMPlexMono", monospace;
  gap: 20px;
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
.import-button:hover,
.mark-all-button:hover {
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
.normal {
  background-color: #d8b077;
}

.shining {
  background-color: #d8b077;
}

.glistening {
  background-color: #a49d9c;
}

.opulent {
  background-color: #008583;
}

.radiant {
  background-color: #e69d00;
}

.alpha {
  background-color: #cd0462;
}
.fast-mark,
.export-import-section {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
.fast-mark {
  flex-direction: column;
}
.export-import-section {
  flex-direction: row;
}
@media (max-width: 582px) {
  .export-button,
  .import-button,
  .reset-button,
  .mark-all-button {
    font-size: 12px;
  }
}
</style>
