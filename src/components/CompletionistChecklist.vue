<template>
  <div class="app-container">
    <!-- Tabs -->
    <div class="tabs">
      <button @click="selectedTab = 1" :class="{ active: selectedTab === 1 }">
        FRESHWATER
      </button>
      <button @click="selectedTab = 2" :class="{ active: selectedTab === 2 }">
        SALTWATER
      </button>
      <button @click="selectedTab = 3" :class="{ active: selectedTab === 3 }">
        MISC
      </button>
    </div>

    <!-- Tables: Render based on selected tab -->
    <div class="tables-container">
      <div v-if="selectedTab === 1" class="table freshwater" :key="'table-1'">
        <div
          class="cell"
          v-for="fish in filteredFish(1)"
          :key="fish.id"
          @mouseover="showPopup(fish, $event)"
          @mouseleave="hidePopup"
        >
          <!-- Circles -->
          <div class="circles">
            <button
              v-for="(color, index) in colors"
              :key="`circle-${fish.id}-${index}`"
              :style="{
                backgroundColor: clicked[`table1-fish${fish.id}-circle${index}`]
                  ? color
                  : '#ffeed5',
                borderColor: clicked[`table1-fish${fish.id}-circle${index}`]
                  ? color
                  : '#101c31',
              }"
              @click="toggleCircle('1', fish.id, index)"
              class="circle"
            ></button>
          </div>
          <img
            :src="fishImages[fish.id] || placeholderImage"
            alt="fish"
            class="fish-img"
          />
          <!-- Popup that appears on hover -->
          <FishPopup
            v-if="popupFish && popupFish.id === fish.id"
            :fish="popupFish"
            :visible="true"
            :position="popupPosition"
          />
        </div>
      </div>

      <div v-if="selectedTab === 2" class="table saltwater" :key="'table-2'">
        <div
          class="cell"
          v-for="fish in filteredFish(2)"
          :key="fish.id"
          @mouseover="showPopup(fish, $event)"
          @mouseleave="hidePopup"
        >
          <div class="circles">
            <button
              v-for="(color, index) in colors"
              :key="`circle-${fish.id}-${index}`"
              :style="{
                backgroundColor: clicked[`table2-fish${fish.id}-circle${index}`]
                  ? color
                  : '#ffeed5',
                borderColor: clicked[`table2-fish${fish.id}-circle${index}`]
                  ? color
                  : '#101c31',
              }"
              @click="toggleCircle('2', fish.id, index)"
              class="circle"
            ></button>
          </div>
          <img
            :src="fishImages[fish.id] || placeholderImage"
            alt="fish"
            class="fish-img"
          />
          <!-- Popup that appears on hover -->
          <FishPopup
            v-if="popupFish && popupFish.id === fish.id"
            :fish="popupFish"
            :visible="true"
            :position="popupPosition"
          />
        </div>
      </div>

      <div v-if="selectedTab === 3" class="table misc" :key="'table-3'">
        <div
          class="cell"
          v-for="fish in filteredFish(3)"
          :key="fish.id"
          @mouseover="showPopup(fish, $event)"
          @mouseleave="hidePopup"
        >
          <div class="circles">
            <button
              v-for="(color, index) in colors"
              :key="`circle-${fish.id}-${index}`"
              :style="{
                backgroundColor: clicked[`table3-fish${fish.id}-circle${index}`]
                  ? color
                  : '#ffeed5',
                borderColor: clicked[`table3-fish${fish.id}-circle${index}`]
                  ? color
                  : '#101c31',
              }"
              @click="toggleCircle('3', fish.id, index)"
              class="circle"
            ></button>
          </div>
          <img
            :src="fishImages[fish.id] || placeholderImage"
            alt="fish"
            class="fish-img"
          />
          <!-- Popup that appears on hover -->
          <FishPopup
            v-if="popupFish && popupFish.id === fish.id"
            :fish="popupFish"
            :visible="true"
            :position="popupPosition"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import placeholderImage from "@/assets/images/placeholder.png";
import fishData from "@/data/fishData.js";
import FishPopup from "./FishPopup.vue";

// Dynamically import all fish images
const fishImages = import.meta.glob("@/assets/images/*.png");

//console.log("Available fish images:", fishImages); // Log all available image paths

export default {
  components: { FishPopup },
  data() {
    return {
      selectedTab: 1, // Default tab is Freshwater (tab 1)

      popupFish: null,
      popupPosition: { top: "0", left: "0" },

      fishImages: {}, // To store resolved image URLs

      placeholderImage,
      fishList: fishData,
      colors: [
        "#d8b077",
        "#d8b077",
        "#a49d9c",
        "#008583",
        "#e69d00",
        "#cd0462",
      ],
      clicked: {}, // Store the clicked status of each circle
    };
  },
  methods: {
    toggleCircle(table, fishId, index) {
      const key = `table${table}-fish${fishId}-circle${index}`;
      // Toggle the clicked state
      this.clicked[key] = !this.clicked[key];

      // Save the updated state to local storage
      this.saveToLocalStorage();
    },
    async loadFishImage(fish) {
      //console.log(
      //  `Attempting to load image for fish: ${fish.name} with imageName: ${fish.imageName}`
      //); // Debug imageName

      const imagePath = fishImages[`/src/assets/images/${fish.imageName}`];
      //console.log(`Image path for fish ${fish.name}:`, imagePath); // Debug image path

      if (imagePath) {
        try {
          const imageModule = await imagePath();
          //console.log(
          //  `Resolved image for fish ${fish.name}:`,
          //  imageModule.default
          //); // Debug resolved image URL
          this.fishImages[fish.id] = imageModule.default; // Store image URL
        } catch (error) {
          console.error(`Failed to load image for fish ${fish.name}:`, error); // Debug if there's an error
          this.fishImages[fish.id] = this.placeholderImage; // Fallback to placeholder
        }
      } else {
        console.warn(
          `Image not found for fish ${fish.name}, using placeholder`
        ); // Warn if the image is not found
        this.fishImages[fish.id] = this.placeholderImage; // Fallback to placeholder
      }
    },
    saveToLocalStorage() {
      // Convert the clicked object to a JSON string and save it to local storage
      localStorage.setItem("clickedStates", JSON.stringify(this.clicked));
    },
    filteredFish(tabNumber) {
      return this.fishList.filter((fish) => fish.table === tabNumber);
    },
    loadFromLocalStorage() {
      // Load the clicked states from local storage if they exist
      const savedStates = localStorage.getItem("clickedStates");
      if (savedStates) {
        this.clicked = JSON.parse(savedStates);
      }
    },
    showPopup(fish, event) {
      this.popupFish = fish;
    },
    hidePopup() {
      this.popupFish = null;
    },
  },
  async mounted() {
    // Load the clicked states when the component mounts
    this.loadFromLocalStorage();
    const tabNumbers = [1, 2, 3];
    for (const tab of tabNumbers) {
      const fishList = this.filteredFish(tab);
      //console.log(`Tab ${tab}: Loaded fish list`, fishList); // Debug the fish list for each tab

      for (const fish of fishList) {
        //console.log(`Loading image for fish:`, fish); // Debug which fish is being processed
        await this.loadFishImage(fish);
      }
    }
  },
};
</script>

<style scoped>
.tabs {
  margin-bottom: 10px;
}
.tabs button {
  padding: 10px;
  margin: 0 5px;
  background-color: #3f523f;
  color: #b2a795;
  border: none;
  cursor: pointer;
  box-sizing: border-box;
  border-radius: 2vb;
  width: 200px;
  height: 30px;
  font-size: 20px;
  line-height: 10px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease,
    font-weight 0.3s ease;
  font-family: "IBMPlexMono", monospace;
}
.tabs button.active {
  background-color: #5a755a;
  color: #faebd1;
  font-weight: bold;
}
.tabs button:not(.active):hover {
  transform: scale(1.08);
}
.tables-container {
  display: block;
}

.table {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Create 4 equal columns */
  gap: 10px;
  height: auto;
  margin-top: 10px;
  background-color: #d5aa73;
  border: 3px solid #8d7858;
  border-radius: 25px;
  padding: 10px;
}

.cell {
  width: 100px;
  border-radius: 15px;
  padding: 10px;
  background-color: #ffeed5;
  display: flex;
  flex-direction: column; /* Stack the circles and image vertically */
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  margin: 0 auto;
  position: relative;
  font-family: "IBMPlexMono", monospace;
}

.circles {
  display: flex; /* Align circles in a row */
  gap: 2px; /* Space between circles */
}
img {
  height: 35px !important;
}
.circle {
  width: 10px; /* Size of the circle */
  height: 10px; /* Size of the circle */
  border-radius: 25px;
  border: 0.2px solid #101c31;
  cursor: pointer;
}

.fish-img {
  width: 50px; /* Adjust the size of the fish image */
  height: auto;
}

.fish-info {
  display: none; /* Hide additional info by default */
}
.app-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
}
</style>
