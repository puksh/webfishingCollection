<template>
  <div>
    <p1>Species</p1>
    <section class="cosmetics-container">
      <div v-for="cosmetic in cosmeticsSpecies">
        <template
          class="cosmetic-card"
          @click="toggleCollected(cosmetic.id)"
          :class="{ collected: isCollected(cosmetic.id) }"
          role="button"
          :aria-label="'Toggle collected state for' + cosmetic.name"
        >
          <img
            :src="cosmeticImages[cosmetic.id]"
            :alt="cosmetic.name + ' image'"
            class="cosmetic-img"
          />
          <h3>{{ cosmetic.name }}</h3>
        </template>
      </div>
    </section>
    <p1>Colours</p1>
    <section class="cosmetics-container">
      <div v-for="cosmetic in cosmeticColours">
        <template
          class="cosmetic-card"
          @click="toggleCollected(cosmetic.id)"
          :class="{ collected: isCollected(cosmetic.id) }"
          role="button"
          :aria-label="'Toggle collected state for' + cosmetic.name"
        >
          <img
            :src="cosmeticImages[cosmetic.id]"
            :alt="cosmetic.name + ' image'"
            class="cosmetic-img"
          />
          <h3>{{ cosmetic.name }}</h3>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
import cosmeticsData from "@/data/cosmeticsData.js";
import { addNotification } from "@/components/NotificationMessage.vue";

export default {
  name: "CosmeticsChecklist",
  data() {
    return {
      cosmeticsData,
      cosmeticImages: {},
      collectedStates: JSON.parse(
        localStorage.getItem("collectedStates") || "[]"
      ),
    };
  },
  computed: {
    cosmeticsSpecies() {
      return this.cosmeticsData.filter(
        (cosmetic) => cosmetic.category === "species"
      );
    },
    cosmeticColours() {
      return this.cosmeticsData.filter(
        (cosmetic) => cosmetic.category === "colours"
      );
    },
  },
  methods: {
    async loadCosmeticImage(cosmetic) {
      const id = cosmetic.id;

      try {
        const imagePath = `/images/${cosmetic.imageName}`;
        const response = await fetch(imagePath);
        if (!response.ok)
          throw new Error(`Failed to fetch image: ${response.statusText}`);

        this.cosmeticImages[id] = imagePath;
      } catch (error) {
        console.error(
          `Error loading image for cosmetic ${cosmetic.name}:`,
          error
        );
      }
    },

    toggleCollected(cosmeticId) {
      const index = this.collectedStates.indexOf(cosmeticId);
      if (index > -1) {
        this.collectedStates.splice(index, 1);
      } else {
        this.collectedStates.push(cosmeticId);
      }
      this.saveToLocalStorage();
    },
    isCollected(cosmeticId) {
      return this.collectedStates.includes(cosmeticId);
    },
    saveToLocalStorage() {
      localStorage.setItem(
        "collectedStates",
        JSON.stringify(this.collectedStates)
      );
    },
    loadFromLocalStorage() {
      const savedStates = localStorage.getItem("collectedStates");
      this.collectedStates = savedStates ? JSON.parse(savedStates) : [];
    },
  },
  async mounted() {
    this.loadFromLocalStorage();
    for (const cosmetic of cosmeticsData) {
      await this.loadCosmeticImage(cosmetic);
    }
  },
};
</script>

<style scoped>
.cosmetics-container {
  display: flex;
  direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 14px;
  height: auto;
  overflow: hidden;
  width: 100%;
  box-sizing: border-box;
}

.cosmetic-card {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-break: strict;
  line-height: 0%;
  flex-direction: column;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 3px;
  transition: opacity 0.3s ease;
  height: 78px;
  width: 78px;
}
.cosmetic-card h3 {
  font-size: smaller;
}

.cosmetic-card.collected {
  filter: opacity(0.5);
}

.cosmetic-card:hover {
  transform: scale(1.05);
}

.cosmetic-img {
  width: 38px;
  height: auto;
  object-fit: contain;
  object-position: center;
  filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
}
</style>
