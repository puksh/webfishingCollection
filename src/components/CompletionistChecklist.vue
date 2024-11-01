<template>
  <div class="app-container">
    <!-- Tabs -->
    <div class="tabs">
      <button
        @click="selectedTab = 'Freshwater'"
        :class="{ active: selectedTab === 'Freshwater' }"
        class="tab-button"
        aria-label="Select Freshwater tab"
      >
        FRESHWATER
      </button>
      <button
        @click="selectedTab = 'Saltwater'"
        :class="{ active: selectedTab === 'Saltwater' }"
        class="tab-button"
        aria-label="Select Saltwater tab"
      >
        SALTWATER
      </button>
      <button
        @click="selectedTab = 'Misc'"
        :class="{ active: selectedTab === 'Misc' }"
        class="tab-button"
        aria-label="Select Miscellaneous tab"
      >
        MISC
      </button>
    </div>

    <!-- Tables: Render based on selected tab -->
    <div class="tables-container">
      <div v-if="selectedTab === 'Freshwater'" class="table">
        <div
          class="cell"
          v-for="fish in filteredFish('Freshwater')"
          :key="fish.id"
          @click="toggleFlip(fish.id)"
          :class="{ flipped: flippedFish === fish.id }"
        >
          <!-- Front of the card -->
          <div class="card-face card-front">
            <div class="circles">
              <button
                v-for="(name, index) in circleNames"
                :key="`freshwater-${fish.id}-${index}`"
                :style="{
                  backgroundColor: clicked[
                    `freshwater-fish${fish.id}-circle${index}`
                  ]
                    ? colors[index]
                    : '#ffeed5',
                  borderColor: colors[index],
                }"
                @click.stop="toggleCircle('freshwater', fish.id, index)"
                class="circle"
                :title="name"
              ></button>
            </div>
            <img :src="fishImages[fish.id]" alt="fish" class="fish-img" />
          </div>

          <!-- Back of the card -->
          <div class="card-face card-back">
            <p class="fishname-popup">{{ fish.name }} - Tier {{ fish.tier }}</p>
            <p class="latin">{{ fish.latinName }}</p>
            <p class="catchphrase">{{ fish.catchPhrase }}</p>
          </div>
        </div>
      </div>

      <div v-if="selectedTab === 'Saltwater'" class="table">
        <div
          class="cell"
          v-for="fish in filteredFish('Saltwater')"
          :key="fish.id"
          @click="toggleFlip(fish.id)"
          :class="{ flipped: flippedFish === fish.id }"
        >
          <!-- Front of the card -->
          <div class="card-face card-front">
            <div class="circles">
              <button
                v-for="(name, index) in circleNames"
                :key="`saltwater-${fish.id}-${index}`"
                :style="{
                  backgroundColor: clicked[
                    `saltwater-fish${fish.id}-circle${index}`
                  ]
                    ? colors[index]
                    : '#ffeed5',
                  borderColor: colors[index],
                }"
                @click.stop="toggleCircle('saltwater', fish.id, index)"
                class="circle"
                :title="name"
              ></button>
            </div>
            <img :src="fishImages[fish.id]" alt="fish" class="fish-img" />
          </div>

          <!-- Back of the card -->
          <div class="card-face card-back">
            <p class="fishname-popup">{{ fish.name }} - Tier {{ fish.tier }}</p>
            <p class="latin">{{ fish.latinName }}</p>
            <p class="catchphrase">{{ fish.catchPhrase }}</p>
          </div>
        </div>
      </div>

      <div v-if="selectedTab === 'Misc'" class="table">
        <div
          class="cell"
          v-for="fish in filteredFish('Misc')"
          :key="fish.id"
          @click="toggleFlip(fish.id)"
          :class="{ flipped: flippedFish === fish.id }"
        >
          <!-- Front of the card -->
          <div class="card-face card-front">
            <div class="circles">
              <button
                v-for="(name, index) in circleNames"
                :key="`misc-${fish.id}-${index}`"
                :style="{
                  backgroundColor: clicked[`misc-fish${fish.id}-circle${index}`]
                    ? colors[index]
                    : '#ffeed5',
                  borderColor: colors[index],
                }"
                @click.stop="toggleCircle('misc', fish.id, index)"
                class="circle"
                :title="name"
              ></button>
            </div>
            <img :src="fishImages[fish.id]" alt="fish" class="fish-img" />
          </div>

          <!-- Back of the card -->
          <div class="card-face card-back">
            <p class="fishname-popup">{{ fish.name }} - Tier {{ fish.tier }}</p>
            <p class="latin">{{ fish.latinName }}</p>
            <p class="catchphrase">{{ fish.catchPhrase }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fishData from "@/data/fishData.js";

//console.log("Available fish images:", fishImages); // Log all available image paths

export default {
  data() {
    return {
      selectedTab: "Freshwater", // Default tab is Freshwater

      flippedFish: null, // Keeps track of the flipped fish ID

      fishImages: {}, // To store resolved image URLs

      fishList: fishData,
      colors: [
        "#d8b077",
        "#d8b077",
        "#a49d9c",
        "#008583",
        "#e69d00",
        "#cd0462",
      ],
      circleNames: [
        "Normal",
        "Shining",
        "Glistening",
        "Opulent",
        "Radiant",
        "Alpha",
      ],

      clicked: {}, // Store the clicked status of each circle
    };
  },
  methods: {
    toggleCircle(tableCategory, fishId, index) {
      const key = `${tableCategory}-fish${fishId}-circle${index}`;
      // Toggle the clicked state
      this.clicked[key] = !this.clicked[key];
      // Save the updated state to local storage
      this.saveToLocalStorage();
    },

    async loadFishImage(fish) {
      // Construct the image path directly from the public folder
      const imagePath = `/images/${fish.imageName}`;

      // Log the image path for debugging
      console.log(`Image path for fish ${fish.name}:`, imagePath);

      // Check if the image path is valid
      if (imagePath) {
        try {
          // No need to import; just use the image path directly
          this.fishImages[fish.id] = imagePath; // Store image URL
          console.log(`Loaded image for fish ${fish.name}:`, imagePath); // Debug loaded image URL
        } catch (error) {
          console.error(`Failed to load image for fish ${fish.name}:`, error); // Debug if there's an error
        }
      } else {
        console.warn(`Image not found for fish ${fish.name}`);
      }
    },
    saveToLocalStorage() {
      // Convert the clicked object to a JSON string and save it to local storage
      localStorage.setItem("clickedStates", JSON.stringify(this.clicked));
    },
    filteredFish(tabCategory) {
      return this.fishList.filter((fish) => fish.category === tabCategory);
    },
    loadFromLocalStorage() {
      // Load the clicked states from local storage if they exist
      const savedStates = localStorage.getItem("clickedStates");
      if (savedStates) {
        this.clicked = JSON.parse(savedStates);
      }
    },
    toggleFlip(fishId) {
      this.flippedFish = this.flippedFish === fishId ? null : fishId; // Toggle flip state
    },
  },
  async mounted() {
    // Load the clicked states when the component mounts
    this.loadFromLocalStorage();
    const tabCategories = ["Freshwater", "Saltwater", "Misc"];
    for (const tab of tabCategories) {
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
  width: 100%;
  display: flex;
  justify-content: space-between; /* Ensure buttons are spaced evenly */
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
  height: 35px;
  font-size: 20px;
  line-height: 10px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease,
    font-weight 0.3s ease;
  font-family: "IBMPlexMono", monospace;
}
.tab-button {
  flex: 1 1 33.33%; /* Make all buttons one-third of the width */
}
.tabs button.active {
  background-color: #5a755a;
  color: #faebd1;
  font-weight: bold;
}
.tabs button:not(.active):hover {
  transform: scale(1.08);
}
/* Responsive adjustments */
@media (max-width: 550px) {
  .tab-button {
    line-height: 0px !important;
    font-size: 0 !important; /* Hide text by reducing font size to 0 */
  }

  /* Change text to emojis */
  .tab-button {
    font-size: 0; /* Hide text by reducing font size to 0 */
    position: relative; /* Keep position for pseudo-element */
  }

  /* Change text to emojis */
  .tab-button::after {
    display: block; /* Ensure emojis are shown */
    content: ""; /* Clear content initially */
    font-size: 24px; /* Adjust emoji size */
    text-align: center; /* Center emojis */
  }

  .tab-button:nth-child(1)::after {
    content: "🐟"; /* FRESHWATER */
  }

  .tab-button:nth-child(2)::after {
    content: "🌊"; /* SALTWATER */
  }

  .tab-button:nth-child(3)::after {
    content: "🌿"; /* MISC */
  }

  /* Keep active button text */
  .tab-button.active:nth-child(1)::after {
    content: "🐟"; /* FRESHWATER */
  }

  .tab-button.active:nth-child(2)::after {
    content: "🌊"; /* SALTWATER */
  }
  .tab-button.active:nth-child(3)::after {
    content: "🌿"; /* SALTWATER */
  }
}
/* Restore text on larger screens */
@media (min-width: 551px) {
  .tab-button {
    font-size: 16px; /* Restore font size for larger screens */
  }

  .tab-button::after {
    content: ""; /* Clear emojis */
  }
}
.tables-container {
  display: block;
}

.table {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Default to 4 equal columns */
  gap: 10px;
  height: auto;
  margin-top: 10px;
  background-color: #d5aa73;
  border: 3px solid #8d7858;
  border-radius: 25px;
  padding: 10px;
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .table {
    grid-template-columns: repeat(3, 1fr); /* 3 columns for medium screens */
  }
}

@media (max-width: 800px) {
  .table {
    grid-template-columns: repeat(2, 1fr); /* 2 columns for smaller screens */
  }
}

@media (max-width: 550px) {
  .table {
    grid-template-columns: 1fr; /* 1 column for very small screens */
  }
}
.cell .table {
  transform: scale(2);
}
.cell {
  width: 140px;
}

.circles {
  display: flex; /* Align circles in a row */
  gap: 4px; /* Space between circles */
  /* Fallback for Safari */
  flex-wrap: nowrap; /* Prevent wrapping in case of small widths */
}
img {
  height: 90px !important;
  margin-top: -20px;
  max-width: 100%; /* Ensure images don't overflow their container */
  height: auto; /* Maintain aspect ratio */
  z-index: 2;
}
.circle {
  width: 15px !important; /* Safari width bug */
  height: 15px;
  border-radius: 50%;
  border: 1px solid #101c31;
  cursor: pointer;
  z-index: 3;
}
/* Responsive styles */
@media (max-width: 900px) {
  /* Adjust the max-width as needed */
  .cell,
  .card-face {
    width: 190px; /* Full width on small screens */
  }

  .tabs button {
    padding: 15px; /* Increased padding */
    font-size: 30px; /* Increased font size */
    height: 40px; /* Increased button height */
  }

  img {
    height: 150px !important; /* Increased image height */
    margin-top: -10px;
  }

  .circle {
    width: 22px !important; /* Increased circle width */
    height: 22px; /* Increased circle height */
  }
  .cell {
    height: 120px !important; /* Adjust height as needed */
  }
  .latin,
  .fishname-popup,
  .catchphrase {
    font-size: medium !important;
  }
}
.app-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
}

.cell {
  height: 85px; /* Adjust height as needed */
  perspective: 1000px; /* Necessary for 3D effect */
  position: relative;
}

.card-face {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  border-radius: 15px;
  border-width: 5px;
  padding: 10px;
  box-sizing: border-box;
  transition: transform 0.6s;
  border-color: #ffeed5;
}

.card-front {
  background-color: #ffeed5;
  transform: rotateY(0deg);
  z-index: 3; /* Ensures front is on top initially */
}

.card-back {
  background-color: #5a755a !important;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1; /* Initially behind the front */
}

.cell.flipped .card-front {
  transform: rotateY(-180deg);
  z-index: 1; /* Moves behind during the flip */
}

.cell.flipped .card-back {
  transform: rotateY(0deg);
  z-index: 2; /* Brings back to the front during the flip */
}

/* Adjust the style of the text inside the back of the card */
.latin,
.fishname-popup,
.catchphrase {
  line-height: normal;
  text-align: center;
  font-size: xx-small;
  font-weight: bold;
  margin: 1px 0;
}

.latin {
  font-style: italic;
  color: #b48141;
}

.fishname-popup {
  color: #6a4420;
}

.catchphrase {
  color: #ffeed5;
}
</style>
