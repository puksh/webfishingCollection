<template>
	<div class="app-container">
		<!-- Tabs -->
		<nav class="tabs" role="navigation" aria-label="Fish Tabs">
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
		</nav>

		<!-- Tables: Render based on selected tab -->
		<main class="tables-container">
			<section
				v-if="selectedTab === 'Freshwater'"
				class="table"
				aria-labelledby="freshwater-table"
			>
				<h2 id="freshwater-table" class="visually-hidden">Freshwater Fish</h2>
				<div
					class="cell"
					v-for="fish in fishListFreshwater"
					:key="fish.id"
					@click="toggleFlip(fish.id)"
					:class="{ flipped: flippedFish === fish.id }"
					role="button"
					tabindex="0"
					:aria-label="'View details for ' + fish.name"
				>
					<!-- Front of the card -->
					<div class="card-face card-front">
						<div
							class="circles"
							role="group"
							:aria-label="'Color selection for ' + fish.name"
						>
							<button
								v-for="(name, index) in circleNames"
								:key="`freshwater-${fish.id}-${index}`"
								:style="{
									backgroundColor: isTypeSelected(fish.id, 'freshwater', name)
										? colors[index]
										: '#ffeed5',
									borderColor: colors[index],
								}"
								@click.stop="toggleCircle('freshwater', fish.id, name)"
								class="circle"
								:title="name"
								:aria-pressed="isTypeSelected(fish.id, 'freshwater', name)"
							></button>
						</div>
						<img
							:src="'/images/' + fish.imageName"
							:alt="fish.name + ' image'"
							class="fish-img, loaded"
						/>
					</div>

					<!-- Back of the card -->
					<div
						class="card-face card-back"
						role="dialog"
						aria-labelledby="fish-name"
						aria-describedby="fish-description"
						tabindex="0"
					>
						<h2 id="fish-name" class="fishname-popup" aria-live="polite">
							{{ fish.name }} - Tier {{ fish.tier }}
						</h2>
						<p id="fish-description" class="latin" aria-hidden="false">
							{{ fish.latinName }}
						</p>
						<p class="catchphrase">{{ fish.catchPhrase }}</p>
					</div>
				</div>
			</section>

			<section
				v-if="selectedTab === 'Saltwater'"
				class="table"
				aria-labelledby="saltwater-table"
			>
				<h2 id="Saltwater-table" class="visually-hidden">Freshwater Fish</h2>
				<div
					class="cell"
					v-for="fish in fishListSaltwater"
					:key="fish.id"
					@click="toggleFlip(fish.id)"
					:class="{ flipped: flippedFish === fish.id }"
					role="button"
					tabindex="0"
					:aria-label="'View details for ' + fish.name"
				>
					<!-- Front of the card -->
					<div class="card-face card-front">
						<div
							class="circles"
							role="group"
							:aria-label="'Color selection for ' + fish.name"
						>
							<button
								v-for="(name, index) in circleNames"
								:key="`saltwater-${fish.id}-${index}`"
								:style="{
									backgroundColor: isTypeSelected(fish.id, 'saltwater', name)
										? colors[index]
										: '#ffeed5',
									borderColor: colors[index],
								}"
								@click.stop="toggleCircle('saltwater', fish.id, name)"
								class="circle"
								:title="name"
								:aria-pressed="isTypeSelected(fish.id, 'saltwater', name)"
							></button>
						</div>
						<img
							:src="'/images/' + fish.imageName"
							:alt="fish.name + ' image'"
							class="fish-img"
						/>
					</div>

					<!-- Back of the card -->
					<div
						class="card-face card-back"
						role="dialog"
						aria-labelledby="fish-name"
						aria-describedby="fish-description"
						tabindex="0"
					>
						<h2 id="fish-name" class="fishname-popup" aria-live="polite">
							{{ fish.name }} - Tier {{ fish.tier }}
						</h2>
						<p id="fish-description" class="latin" aria-hidden="false">
							{{ fish.latinName }}
						</p>
						<p class="catchphrase">{{ fish.catchPhrase }}</p>
					</div>
				</div>
			</section>

			<section
				v-if="selectedTab === 'Misc'"
				class="table"
				aria-labelledby="misc-table"
			>
				<h2 id="Misc-table" class="visually-hidden">Freshwater Fish</h2>
				<div
					class="cell"
					v-for="fish in fishListMisc"
					:key="fish.id"
					@click="toggleFlip(fish.id)"
					:class="{ flipped: flippedFish === fish.id }"
					role="button"
					tabindex="0"
					:aria-label="'View details for ' + fish.name"
				>
					<!-- Front of the card -->
					<div class="card-face card-front">
						<div
							class="circles"
							role="group"
							:aria-label="'Color selection for ' + fish.name"
						>
							<button
								v-for="(name, index) in circleNames"
								:key="`misc-${fish.id}-${index}`"
								:style="{
									backgroundColor: isTypeSelected(fish.id, 'misc', name)
										? colors[index]
										: '#ffeed5',
									borderColor: colors[index],
								}"
								@click.stop="toggleCircle('misc', fish.id, name)"
								class="circle"
								:title="name"
								:aria-pressed="isTypeSelected(fish.id, 'misc', name)"
							></button>
						</div>
						<img
							:src="'/images/' + fish.imageName"
							:alt="fish.name + ' image'"
							class="fish-img"
						/>
					</div>

					<!-- Back of the card -->
					<div
						class="card-face card-back"
						role="dialog"
						aria-labelledby="fish-name"
						aria-describedby="fish-description"
						tabindex="0"
					>
						<h2 id="fish-name" class="fishname-popup" aria-live="polite">
							{{ fish.name }} - Tier {{ fish.tier }}
						</h2>
						<p id="fish-description" class="latin" aria-hidden="false">
							{{ fish.latinName }}
						</p>
						<p class="catchphrase">{{ fish.catchPhrase }}</p>
					</div>
				</div>
			</section>
		</main>
	</div>
</template>

<script>
	import fishData from "@/data/fishData.js";
	import { addNotification } from "@/components/NotificationMessage.vue";

	export default {
		name: "Fish Checklist",
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

				clickedStates: JSON.parse(
					localStorage.getItem("clickedStates") || "[]",
				),
			};
		},
		computed: {
			fishListFreshwater() {
				return this.fishList.filter((fish) => fish.category === "Freshwater");
			},
			fishListSaltwater() {
				return this.fishList.filter((fish) => fish.category === "Saltwater");
			},
			fishListMisc() {
				return this.fishList.filter((fish) => fish.category === "Misc");
			},
		},
		methods: {
			toggleCircle(category, fishId, type) {
				const now = new Date().toISOString().split("T")[0];
				const fish = this.fishList.find((f) => f.id === fishId);

				if (!fish) {
					console.warn(`Fish with ID ${fishId} not found.`);
					return;
				}

				const fishEntry = this.clickedStates.find(
					(entry) => entry.id === fishId && entry.category === category,
				);

				if (fishEntry) {
					const typeIndex = fishEntry.caughtTypes.indexOf(type);
					if (typeIndex > -1) {
						fishEntry.caughtTypes.splice(typeIndex, 1);
						addNotification("Unmarked " + fish.name + " " + type + "!", "red");
					} else {
						fishEntry.caughtTypes.push(type);
						addNotification("Marked " + fish.name + " " + type + "!", "blue");
					}
					fishEntry.modifiedAt = now;
				} else {
					this.clickedStates.push({
						id: fishId,
						category: category,
						caughtTypes: [type],
						modifiedAt: now,
					});
					addNotification("Marked " + fish.name + " " + type + "!", "blue");
				}

				this.saveToLocalStorage();
			},

			isTypeSelected(fishId, category, type) {
				const fishEntry = this.clickedStates.find(
					(entry) => entry.id === fishId && entry.category === category,
				);
				return fishEntry ? fishEntry.caughtTypes.includes(type) : false;
			},
			saveToLocalStorage() {
				// Convert the clicked states to JSON and save it
				localStorage.setItem(
					"clickedStates",
					JSON.stringify(this.clickedStates),
				);
			},

			loadFromLocalStorage() {
				const savedStates = localStorage.getItem("clickedStates");
				try {
					const parsedStates = JSON.parse(savedStates);
					this.clickedStates = Array.isArray(parsedStates) ? parsedStates : [];
				} catch (error) {
					addNotification("Failed to load Collection from your browser", "red");
					console.warn(
						"Failed to load clickedStates from localStorage:",
						error,
					);
					this.clickedStates = [];
				}
			},

			/*async loadFishImage(fish) {
      // check if the image is already stored in IndexedDB
      try {
        const cachedImage = await getImage(fish.id);
        if (cachedImage) {
          this.fishImages[fish.id] = URL.createObjectURL(cachedImage.imageBlob);
          return; // image found in IndexedDB, dont load
        }
      } catch (error) {
        console.error(
          `Error accessing IndexedDB for fish ${fish.name}:`,
          error
        );
      }

      // if the image not in IndexedDB, load it from the network
      const imagePath = `/images/${fish.imageName}`;
      try {
        const img = new Image();
        img.src = imagePath;

        // wait 4 it
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });

        // create a BLOB URL for the fish
        const blob = await fetch(imagePath).then((res) => res.blob());

        // save the fish in IndexedDB
        await saveImage(fish.id, blob);

        // store the image URL in the component state
        this.fishImages[fish.id] = URL.createObjectURL(blob);
      } catch (error) {
        console.error(`Error loading image for fish ${fish.name}:`, error);
      }
    },*/
			toggleFlip(fishId) {
				this.flippedFish = this.flippedFish === fishId ? null : fishId; // Toggle flip state
			},
		},
		async mounted() {
			// Load the clicked states when the component mounts
			this.loadFromLocalStorage();
		},
	};
</script>

<style scoped>
	.visually-hidden {
		position: absolute; /* Position the element off-screen */
		width: 1px; /* Set width to 1px */
		height: 1px; /* Set height to 1px */
		margin: -1px; /* Remove any default margin */
		padding: 0; /* Remove any default padding */
		overflow: hidden; /* Hide the overflow */
		clip: rect(0, 0, 0, 0); /* Clip the element to make it invisible */
		border: 0; /* Remove borders */
	}

	.tabs {
		margin-bottom: 10px;
		width: 100%;
		display: flex;
		justify-content: space-between; /* Ensure buttons are spaced evenly */
	}
	.tabs .tab-button {
		padding: 10px;
		margin: 0 5px;
		background-color: #3f523f;
		color: #b2a795;
		border: none;
		cursor: pointer;
		box-sizing: border-box;
		border-radius: 2vb;
		height: 35px;
		font-size: 18px;
		line-height: 10px;
		transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease,
			font-weight 0.3s ease;
		font-family: "IBMPlexMono", monospace;
	}
	.tab-button {
		flex: 1 1 33.33%; /* Make all buttons one-third of the width */
	}
	.tabs .tab-button.active {
		background-color: #5a755a;
		color: #faebd1;
		font-weight: bold;
		transform: scale(0.9);
	}
	.tabs .tab-button:not(.active):hover {
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
		overflow: hidden;
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
	@media (max-width: 800px) {
		.table {
			grid-template-columns: repeat(3, 1fr); /* 3 columns for medium screens */
		}
	}

	@media (max-width: 600px) and (min-width: 400px) {
		.table {
			grid-template-columns: repeat(2, 1fr); /* 2 columns for smaller screens */
		}
	}

	@media (max-width: 400px) {
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
		overflow: visible;
	}
	img {
		height: 90px !important;
		margin-top: -20px;
		width: 100px;
		z-index: 2;
		filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
	}
	img:hover {
		animation: hoverRotate 0.6s ease-in-out infinite alternate;
	}
	@keyframes hoverRotate {
		0% {
			transform: rotate(0deg);
		}
		50% {
			transform: rotate(10deg);
		}
		100% {
			transform: rotate(-10deg);
		}
	}
	.circle {
		width: 15px !important; /* Safari width bug */
		height: 15px;
		border-radius: 50%;
		border: 1px solid #101c31;
		cursor: pointer;
		z-index: 3;
		transition: all 0.3s ease;
	}
	.circle:active {
		transform: scale(0.9);
	}
	/* Responsive styles */
	@media (max-width: 900px) {
		.cell,
		.card-face {
			width: 190px !important; /* Full width on small screens */
		}

		.tabs button {
			padding: 15px;
			font-size: 30px;
			height: 40px;
		}

		img {
			height: 120px !important;
			margin-top: -10px;
			width: 130px !important;
		}

		.circle {
			width: 22px !important;
			height: 22px;
		}
		.cell {
			height: 120px !important;
		}
		.latin,
		.fishname-popup,
		.catchphrase {
			font-size: 14px !important;
		}
	}
	.app-container {
		display: flex;
		flex-direction: column;
		height: auto;
		width: 100%;
		align-items: center;
	}

	.cell {
		height: 85px;
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

	.latin,
	.fishname-popup,
	.catchphrase {
		line-height: normal;
		text-align: center;
		font-size: xx-small;
		font-weight: bold;
		margin: 1px 0;
	}

	.fishname-popup {
		color: #d1b12d; /* Lighter shade for better contrast */
	}
	.latin {
		font-style: italic;
		color: #d48256; /* Darker brown for better contrast */
	}
	.catchphrase {
		color: #ffeed5; /* This color is already sufficient */
	}
	.fish-img {
		opacity: 1;
	}
</style>
