<template>
  <div class="app-container">
    <!-- Tabs -->
    <div class="tabs">
      <button @click="selectedTab = 1" :class="{ active: selectedTab === 1 }">
        Freshwater
      </button>
      <button @click="selectedTab = 2" :class="{ active: selectedTab === 2 }">
        Saltwater
      </button>
      <button @click="selectedTab = 3" :class="{ active: selectedTab === 3 }">
        Misc
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
// Import the placeholder image
import placeholderImage from "@/assets/images/placeholder.png";

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
      fishList: [
        {
          id: 1,
          name: "Alligator",
          latinName: "Alligator mississippiensis",
          catchPhrase: "See you later- !",
          tier: "3",
          table: 1,
          imageName: "alligator.png",
        },
        {
          id: 2,
          name: "Axolotl",
          latinName: "Ambystoma mexicanum",
          catchPhrase: "Can I ax-olotl you a question? (...I tried, ok?)",
          tier: "3",
          table: 1,
          imageName: "axolotl.png",
        },
        {
          id: 3,
          name: "Largemouth Bass",
          latinName: "Micropterus salmoides",
          catchPhrase: "Seems out of tune to me.",
          tier: "1",
          table: 1,
          imageName: "largemouth-bass.png",
        },
        {
          id: 4,
          name: "Bluegill",
          latinName: "Lepomis macrochirus",
          catchPhrase: "Bluegill? What a thrill!",
          tier: "1",
          table: 1,
          imageName: "bluegill.png",
        },
        {
          id: 5,
          name: "Bowfin",
          latinName: "Amia calca",
          catchPhrase: "Bowfin deez n-",
          tier: "2",
          table: 1,
          imageName: "bowfin.png",
        },
        {
          id: 6,
          name: "Bull Shark",
          latinName: "Carcharhinus leucas",
          catchPhrase: "Bullshark? Bull S-",
          tier: "3",
          table: 1,
          imageName: "bull-shark.png",
        },
        {
          id: 7,
          name: "Carp",
          latinName: "Cyprinus carpio",
          catchPhrase: "Carp? What a lark!",
          tier: "1",
          table: 1,
          imageName: "carp.png",
        },
        {
          id: 8,
          name: "Catfish",
          latinName: "Ictalurus punctatus",
          catchPhrase: "He's just like you! But yknow... more... fishy?",
          tier: "1",
          table: 1,
          imageName: "catfish.png",
        },
        {
          id: 9,
          name: "Crab",
          latinName: "Uca minax",
          catchPhrase: "Arg!",
          tier: "2",
          table: 1,
          imageName: "crab.png",
        },
        {
          id: 10,
          name: "Crappie",
          latinName: "Pomoxis annularis",
          catchPhrase: "Holy Carppie!",
          tier: "2",
          table: 1,
          imageName: "crappie.png",
        },
        {
          id: 11,
          name: "Crayfish",
          latinName: "Procambarus clarki",
          catchPhrase: "Blah blah blah.",
          tier: "1",
          table: 1,
          imageName: "crayfish.png",
        },
        {
          id: 12,
          name: "Drum",
          latinName: "Aplodinotus grunnies",
          catchPhrase: "Also known as the Gobble Gobble.",
          tier: "1",
          table: 1,
          imageName: "drum.png",
        },
        {
          id: 13,
          name: "Frog",
          latinName: "Rana temporaria",
          catchPhrase: "Cozy Staple.",
          tier: "1",
          table: 1,
          imageName: "frog.png",
        },
        {
          id: 14,
          name: "Gar",
          latinName: "Atractosteus spatula!",
          catchPhrase: "Step-Brother of the Alligator!",
          tier: "3",
          table: 1,
          imageName: "gar.png",
        },
        {
          id: 15,
          name: "Golden Bass",
          latinName: "Micropterus aurum",
          catchPhrase: "Woah! What a catch!",
          tier: "3",
          table: 1,
          imageName: "golden-bass.png",
        },
        {
          id: 16,
          name: "Goldfish",
          latinName: "Carassius auratus",
          catchPhrase: "We're rich!",
          tier: "1",
          table: 1,
          imageName: "goldfish.png",
        },
        {
          id: 17,
          name: "Guppy",
          latinName: "Poecilia reticulata",
          catchPhrase: "Guess you're a guppy puppy!",
          tier: "1",
          table: 1,
          imageName: "guppy.png",
        },
        {
          id: 18,
          name: "King Salmon",
          latinName: "Oncorhynchus tshawytscha",
          catchPhrase: "Royalty!",
          tier: "3",
          table: 1,
          imageName: "king-salmon.png",
        },
        {
          id: 19,
          name: "Koi",
          latinName: "Cyprinus rubrofuscus",
          catchPhrase: "This koi is the boy for me!",
          tier: "1",
          table: 1,
          imageName: "koi.png",
        },
        {
          id: 20,
          name: "Leech",
          latinName: "Hirudo medicinalis",
          catchPhrase: "Bringing back oldschool medicine!",
          tier: "2",
          table: 1,
          imageName: "leech.png",
        },
        {
          id: 21,
          name: "Mooneye",
          latinName: "Hiodon tergisus",
          catchPhrase: "Mooneye? At this time?",
          tier: "3",
          table: 1,
          imageName: "mooneye.png",
        },
        {
          id: 22,
          name: "Muskellunge",
          latinName: "Esox masquinongy",
          catchPhrase: "A muskie!",
          tier: "2",
          table: 1,
          imageName: "muskellunge.png",
        },
        {
          id: 23,
          name: "Perch",
          latinName: "Perca flavescens",
          catchPhrase: "Man am I parched...",
          tier: "1",
          table: 1,
          imageName: "perch.png",
        },
        {
          id: 24,
          name: "Pike",
          latinName: "Esox lucius",
          catchPhrase: "This Piked my interest!",
          tier: "2",
          table: 1,
          imageName: "pike.png",
        },
        {
          id: 25,
          name: "Pupfish",
          latinName: "Cyprinodon pacycephalus",
          catchPhrase: "A little puppy!",
          tier: "3",
          table: 1,
          imageName: "pupfish.png",
        },
        {
          id: 26,
          name: "Rainbow Trout",
          latinName: "Oncorhynchus mykiss",
          catchPhrase: "These fishes gay. Good for them. Good for them.",
          tier: "1",
          table: 1,
          imageName: "rainbow-trout.png",
        },
        {
          id: 27,
          name: "Salmon",
          latinName: "Oncorhynchus nerka",
          catchPhrase: "It's Sal' good, 'mon!",
          tier: "1",
          table: 1,
          imageName: "salmon.png",
        },
        {
          id: 28,
          name: "Snail",
          latinName: "Lymnaea stagnalis",
          catchPhrase: "Meow?",
          tier: "1",
          table: 1,
          imageName: "snail.png",
        },
        {
          id: 29,
          name: "Sturgeon",
          latinName: "Acipenser fulvescens",
          catchPhrase: "I want a econd opinion.",
          tier: "1",
          table: 1,
          imageName: "sturgeon.png",
        },
        {
          id: 30,
          name: "Toad",
          latinName: "Bufo bufo",
          catchPhrase: "What a boy!",
          tier: "2",
          table: 1,
          imageName: "toad.png",
        },
        {
          id: 31,
          name: "Turtle",
          latinName: "Actinemys marmorata",
          catchPhrase: "This catch was quite the hurdle!",
          tier: "2",
          table: 1,
          imageName: "turtle.png",
        },
        {
          id: 32,
          name: "Walleye",
          latinName: "Sander vitreus",
          catchPhrase: "Walleye? What a guy!",
          tier: "1",
          table: 1,
          imageName: "walleye.png",
        },
        {
          id: 33,
          name: "Angelfish",
          latinName: "Pterophyllum scalare",
          catchPhrase: "Obtuse or acute? (... did i read that right?)",
          tier: "1",
          table: 2,
          imageName: "angelfish.png",
        },
        {
          id: 34,
          name: "Atlantic Salmon",
          latinName: "Salmo salar",
          catchPhrase: "It's like non-atlantic salmon but atlantic",
          tier: "1",
          table: 2,
          imageName: "atlantic-salmon.png",
        },
        {
          id: 35,
          name: "Bluefish",
          latinName: "Pomatomus saltatrix",
          catchPhrase: "One fish, two fish, red fish...",
          tier: "1",
          table: 2,
          imageName: "bluefish.png",
        },
        {
          id: 36,
          name: "Clownfish",
          latinName: "Amphiprion ocellaris",
          catchPhrase: "Well this isnt so scary...",
          tier: "1",
          table: 2,
          imageName: "clownfish.png",
        },
        {
          id: 37,
          name: "Coelecanth",
          latinName: "Latimeria chalumnae",
          catchPhrase: "Did you see it? I can't!",
          tier: "3",
          table: 2,
          imageName: "coelecanth.png",
        },
        {
          id: 38,
          name: "Dogfish",
          latinName: "Squalus acanthias",
          catchPhrase: "He's just like you! But yknow... more... fishy?",
          tier: "1",
          table: 2,
          imageName: "dogfish.png",
        },
        {
          id: 39,
          name: "Eel",
          latinName: "Anguilla anguilla",
          catchPhrase: "Eel? EEL!",
          tier: "1",
          table: 2,
          imageName: "eel.png",
        },
        {
          id: 40,
          name: "Flouder",
          latinName: "Paralichthys dentatus",
          catchPhrase: "Flouder? I hardly know 'er!'",
          tier: "1",
          table: 2,
          imageName: "flouder.png",
        },
        {
          id: 41,
          name: "Golden Manta Ray",
          latinName: "Mobula aurum",
          catchPhrase: "Woah! What a catch!",
          tier: "3",
          table: 2,
          imageName: "golden-manta-ray.png",
        },
        {
          id: 42,
          name: "Great White Shark",
          latinName: "Carcharodon carcharias",
          catchPhrase: "Do I smell blood...?",
          tier: "3",
          table: 2,
          imageName: "great-white-shark.png",
        },
        {
          id: 43,
          name: "Grouper",
          latinName: "Mycteroperca bonaci",
          catchPhrase: "Grouper? I hardly know 'er!'",
          tier: "1",
          table: 2,
          imageName: "grouper.png",
        },
        {
          id: 44,
          name: "Hammerhead Shark",
          latinName: "Sphyrna mokarran",
          catchPhrase: "Guess you hit the nail on the head!",
          tier: "2",
          table: 2,
          imageName: "hammerhead-shark.png",
        },
        {
          id: 45,
          name: "Herring",
          latinName: "Clupea harengus",
          catchPhrase: "Huh... this isnt red...",
          tier: "1",
          table: 2,
          imageName: "herring.png",
        },
        {
          id: 46,
          name: "Krill",
          latinName: "Euphausia superba",
          catchPhrase: "Shrimply impressive! (this isnt a shrimp btw)",
          tier: "1",
          table: 2,
          imageName: "krill.png",
        },
        {
          id: 47,
          name: "Lionfish",
          latinName: "Pterois volitans",
          catchPhrase: "Well I ain't callin' you a truther!",
          tier: "2",
          table: 2,
          imageName: "lionfish.png",
        },
        {
          id: 48,
          name: "Lobster",
          latinName: "Homarus americanus",
          catchPhrase: "What a beaut!",
          tier: "1",
          table: 2,
          imageName: "lobster.png",
        },
        {
          id: 49,
          name: "Man O' War",
          latinName: "Physalia physalis",
          catchPhrase: "ok you should probably not be holding this",
          tier: "3",
          table: 2,
          imageName: "man-o-war.png",
        },
        {
          id: 50,
          name: "Manta Ray",
          latinName: "Mobula birostris",
          catchPhrase: "The butterfly of the sea!",
          tier: "3",
          table: 2,
          imageName: "manta-ray.png",
        },
        {
          id: 51,
          name: "Marlin",
          latinName: "Makaira nigricans",
          catchPhrase: "Something something MARLIN",
          tier: "2",
          table: 2,
          imageName: "marlin.png",
        },
        {
          id: 52,
          name: "Octopus",
          latinName: "Octopus vulgaris",
          catchPhrase: "How vulgar!",
          tier: "2",
          table: 2,
          imageName: "octopus.png",
        },
        {
          id: 53,
          name: "Oyster",
          latinName: "Crassostrea gigas",
          catchPhrase: "Oyster? I hardly know 'er!'",
          tier: "1",
          table: 2,
          imageName: "oyster.png",
        },
        {
          id: 54,
          name: "Sawfish",
          latinName: "Pristis perotteti",
          catchPhrase: "I saw it!",
          tier: "1",
          table: 2,
          imageName: "sawfish.png",
        },
        {
          id: 55,
          name: "Sea Turtle",
          latinName: "Chelonia mydas",
          catchPhrase: "Surf's up!",
          tier: "3",
          table: 2,
          imageName: "sea-turtle.png",
        },
        {
          id: 56,
          name: "Seahorse",
          latinName: "Hippocampus kuda",
          catchPhrase: "Giddy up!",
          tier: "2",
          table: 2,
          imageName: "seahorse.png",
        },
        {
          id: 57,
          name: "Shrimp",
          latinName: "Pandalus borealis",
          catchPhrase: "One in a krillion! (this isnt a krill btw)",
          tier: "1",
          table: 2,
          imageName: "shrimp.png",
        },
        {
          id: 58,
          name: "Squid",
          latinName: "Dosidicus gigas",
          catchPhrase: "A true alien!",
          tier: "3",
          table: 2,
          imageName: "squid.png",
        },
        {
          id: 59,
          name: "Sting Ray",
          latinName: "Dasyatis pastinaca",
          catchPhrase: "What a ripper!",
          tier: "2",
          table: 2,
          imageName: "sting-ray.png",
        },
        {
          id: 60,
          name: "Sunfish",
          latinName: "Mola mola",
          catchPhrase: "Here it comes!",
          tier: "1",
          table: 2,
          imageName: "sunfish.png",
        },
        {
          id: 61,
          name: "Swordfish",
          latinName: "Xiphias gladius",
          catchPhrase: "Master duelist!",
          tier: "2",
          table: 2,
          imageName: "swordfish.png",
        },
        {
          id: 62,
          name: "Tuna",
          latinName: "Thunnus alalunga",
          catchPhrase: "Well this was a tuna fun!",
          tier: "1",
          table: 2,
          imageName: "tuna.png",
        },
        {
          id: 63,
          name: "Whale",
          latinName: "Balaenoptera musculus",
          catchPhrase: "A whale of a time!",
          tier: "3",
          table: 2,
          imageName: "whale.png",
        },
        {
          id: 64,
          name: "Wolffish",
          latinName: "Anarhichas lupus",
          catchPhrase: "A true alpha",
          tier: "2",
          table: 2,
          imageName: "wolffish.png",
        },
        {
          id: 65,
          name: "Anomalocaris",
          latinName: "NAMELATIN",
          catchPhrase: "CATCH",
          tier: "1",
          table: 3,
          imageName: "TABLE2.png",
        },
        {
          id: 66,
          name: "Helicoprion",
          latinName: "NAMELATIN",
          catchPhrase: "CATCH",
          tier: "1",
          table: 3,
          imageName: "TABLE2.png",
        },
        {
          id: 67,
          name: "Horseshoe Crab",
          latinName: "Tachypleus tridentatus",
          catchPhrase: "Guess it's my lucky day!",
          tier: "1",
          table: 3,
          imageName: "horseshoe-crab.png",
        },
        {
          id: 68,
          name: "Leedsichthys",
          latinName: "Leedsichthys problematicus",
          catchPhrase: "A giant!",
          tier: "3",
          table: 3,
          imageName: "leedsichthys.png",
        },
        {
          id: 69,
          name: "Bone",
          latinName: "What a story!",
          catchPhrase: "Yuck! Who put this in here...",
          tier: "1",
          table: 3,
          imageName: "bone.png",
        },
        {
          id: 70,
          name: "Old Boot",
          latinName: "Don't Litter!",
          catchPhrase: "Yuck! Who put this in here...",
          tier: "1",
          table: 3,
          imageName: "old-boot.png",
        },
        {
          id: 71,
          name: "Branch",
          latinName: "Stick!",
          catchPhrase: "Agh! Caught a snag!",
          tier: "1",
          table: 3,
          imageName: "branch.png",
        },
        {
          id: 72,
          name: "Diamond",
          latinName: "NAMELATIN",
          catchPhrase: "CATCH",
          tier: "1",
          table: 3,
          imageName: "TABLE2.png",
        },
        {
          id: 73,
          name: "Drink Rings",
          latinName: "Don't Litter!",
          catchPhrase: "Yuck! Who put this in here...",
          tier: "1",
          table: 3,
          imageName: "drink-rings.png",
        },
        {
          id: 74,
          name: "Plastic Bag",
          latinName: "Don't Litter!",
          catchPhrase: "Yuck! Who put this in here...",
          tier: "1",
          table: 3,
          imageName: "plastic-bag.png",
        },
        {
          id: 75,
          name: "Soda Can",
          latinName: "Don't Litter!",
          catchPhrase: "Yuck! Who put this in here...",
          tier: "1",
          table: 3,
          imageName: "soda-can.png",
        },
        {
          id: 76,
          name: "Weed",
          latinName: "Weed!",
          catchPhrase: "Agh! Caught a snag!",
          tier: "1",
          table: 3,
          imageName: "weed.png",
        },
        {
          id: 77,
          name: "Unidentified Fish Object",
          latinName: "Alienus Caninus",
          catchPhrase: "...what? the fuck?",
          tier: "2",
          table: 3,
          imageName: "unidentified-fish-object.png",
        },
      ],
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
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.tabs button {
  padding: 10px;
  margin: 0 5px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
}
.tabs button.active {
  background-color: #ddd;
  font-weight: bold;
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
  border-radius: 50%;
  border: 1px solid #101c31;
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
