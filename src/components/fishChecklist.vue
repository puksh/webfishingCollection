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

		<!-- Progress Bar -->
		<div class="progress-bar-container">
			<div
				v-for="(name, index) in circleNames"
				:key="`progress-${index}`"
				class="progress-bar-segment"
				:style="{
					backgroundColor: colors[index],
					width: Math.min(calculateProgressWidth(name), 16.67) + '%', // Max width is 16.67% (1/6 of the bar)
					zIndex: 10 - index, // Dynamically set z-index
				}"
				:title="`Collected ${countCollectedFish(name)} ${name}`"
				:aria-label="`Progress for ${name}: ` + calculateProgressWidth(name) + '%'"
			></div>
		</div>

		<!-- Tables: Render based on selected tab -->
		<main class="tables-container">
			<section v-if="selectedTab === 'Freshwater'" class="table" aria-labelledby="freshwater-table">
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
						<div class="circles" role="group" :aria-label="'Color selection for ' + fish.name">
							<button
								v-for="(name, index) in circleNames"
								:key="`freshwater-${fish.id}-${index}`"
								:style="{
									backgroundColor: isTypeSelected(fish.id, 'freshwater', name) ? colors[index] : '#ffeed5',
									borderColor: colors[index],
								}"
								@click.stop="toggleCircle('freshwater', fish.id, name)"
								class="circle"
								:title="name"
								:aria-pressed="isTypeSelected(fish.id, 'freshwater', name)"
							></button>
						</div>
						<img :src="'/images/' + fish.imageName" :alt="fish.name + ' image'" class="fish-img, loaded" />
					</div>

					<!-- Back of the card -->
					<div
						class="card-face card-back"
						role="dialog"
						aria-labelledby="fish-name"
						aria-describedby="fish-description"
						tabindex="0"
					>
						<h2 id="fish-name" class="fishname-popup" aria-live="polite"> {{ fish.name }} - Tier {{ fish.tier }} </h2>
						<p id="fish-description" class="latin" aria-hidden="false">
							{{ fish.latinName }}
						</p>
						<p class="catchphrase">{{ fish.catchPhrase }}</p>
					</div>
				</div>
			</section>

			<section v-if="selectedTab === 'Saltwater'" class="table" aria-labelledby="saltwater-table">
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
						<div class="circles" role="group" :aria-label="'Color selection for ' + fish.name">
							<button
								v-for="(name, index) in circleNames"
								:key="`saltwater-${fish.id}-${index}`"
								:style="{
									backgroundColor: isTypeSelected(fish.id, 'saltwater', name) ? colors[index] : '#ffeed5',
									borderColor: colors[index],
								}"
								@click.stop="toggleCircle('saltwater', fish.id, name)"
								class="circle"
								:title="name"
								:aria-pressed="isTypeSelected(fish.id, 'saltwater', name)"
							></button>
						</div>
						<img :src="'/images/' + fish.imageName" :alt="fish.name + ' image'" class="fish-img" />
					</div>

					<!-- Back of the card -->
					<div
						class="card-face card-back"
						role="dialog"
						aria-labelledby="fish-name"
						aria-describedby="fish-description"
						tabindex="0"
					>
						<h2 id="fish-name" class="fishname-popup" aria-live="polite"> {{ fish.name }} - Tier {{ fish.tier }} </h2>
						<p id="fish-description" class="latin" aria-hidden="false">
							{{ fish.latinName }}
						</p>
						<p class="catchphrase">{{ fish.catchPhrase }}</p>
					</div>
				</div>
			</section>

			<section v-if="selectedTab === 'Misc'" class="table" aria-labelledby="misc-table">
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
						<div class="circles" role="group" :aria-label="'Color selection for ' + fish.name">
							<button
								v-for="(name, index) in circleNames"
								:key="`misc-${fish.id}-${index}`"
								:style="{
									backgroundColor: isTypeSelected(fish.id, 'misc', name) ? colors[index] : '#ffeed5',
									borderColor: colors[index],
								}"
								@click.stop="toggleCircle('misc', fish.id, name)"
								class="circle"
								:title="name"
								:aria-pressed="isTypeSelected(fish.id, 'misc', name)"
							></button>
						</div>
						<img :src="'/images/' + fish.imageName" :alt="fish.name + ' image'" class="fish-img" />
					</div>

					<!-- Back of the card -->
					<div
						class="card-face card-back"
						role="dialog"
						aria-labelledby="fish-name"
						aria-describedby="fish-description"
						tabindex="0"
					>
						<h2 id="fish-name" class="fishname-popup" aria-live="polite"> {{ fish.name }} - Tier {{ fish.tier }} </h2>
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
				colors: ["#d8b077", "#d8b077", "#a49d9c", "#008583", "#e69d00", "#cd0462"],
				circleNames: ["Normal", "Shining", "Glistening", "Opulent", "Radiant", "Alpha"],

				clickedStates: JSON.parse(localStorage.getItem("clickedStates") || "[]"),
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
				try {
					const now = new Date().toISOString().split("T")[0];
					const fish = this.fishList.find((f) => f.id === fishId);
					if (!fish) throw new Error(`Fish with ID ${fishId} not found.`);

					let fishEntry = this.clickedStates.find((entry) => entry.id === fishId && entry.category === category);

					if (!fishEntry) {
						fishEntry = { id: fishId, category, caughtTypes: [], modifiedAt: now };
						this.clickedStates.push(fishEntry);
					}

					const typeIndex = fishEntry.caughtTypes.indexOf(type);
					if (typeIndex > -1) {
						fishEntry.caughtTypes.splice(typeIndex, 1);
						addNotification(`Unmarked ${fish.name} (${type})!`, "red");
					} else {
						fishEntry.caughtTypes.push(type);
						addNotification(`Marked ${fish.name} (${type})!`, "blue");
					}

					fishEntry.modifiedAt = now;
					this.saveToLocalStorage();
				} catch (error) {
					addNotification(error.message, "red");
				}
			},

			isTypeSelected(fishId, category, type) {
				const fishEntry = this.clickedStates.find((entry) => entry.id === fishId && entry.category === category);
				return fishEntry ? fishEntry.caughtTypes.includes(type) : false;
			},
			saveToLocalStorage() {
				// Convert the clicked states to JSON and save it
				localStorage.setItem("clickedStates", JSON.stringify(this.clickedStates));
			},

			loadFromLocalStorage() {
				const savedStates = localStorage.getItem("clickedStates");
				try {
					const parsedStates = JSON.parse(savedStates);
					this.clickedStates = Array.isArray(parsedStates) ? parsedStates : [];
				} catch (error) {
					addNotification("Failed to load Collection from your browser", "red");
					console.warn("Failed to load clickedStates from localStorage:", error);
					this.clickedStates = [];
				}
			},
			toggleFlip(fishId) {
				this.flippedFish = this.flippedFish === fishId ? null : fishId; // Toggle flip state
			},
			calculateProgressWidth(type) {
				const totalFish = this.fishList.length;
				const collectedFish = this.clickedStates.filter((entry) => {
					// Ensure caughtTypes is defined and is an array
					return Array.isArray(entry.caughtTypes) && entry.caughtTypes.includes(type);
				}).length;
				return totalFish > 0 ? (collectedFish / totalFish) * 100 : 0;
			},
			countCollectedFish(type) {
				// Count the number of fish collected for a specific type
				return this.clickedStates.filter((entry) => {
					return Array.isArray(entry.caughtTypes) && entry.caughtTypes.includes(type);
				}).length;
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
		position: absolute;
		width: 1px;
		height: 1px;
		margin: -1px;
		padding: 0;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
	}

	.tabs {
		margin-bottom: 10px;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.tabs .tab-button {
		padding: 10px;
		margin: 0 5px;
		background-color: #3f523f;
		color: #b2a795;
		border: none;
		cursor: pointer;
		box-sizing: border-box;
		border-radius: var(--border-radius);
		height: 35px;
		font-size: 18px;
		line-height: 10px;
		transition: background-color var(--transition-main), color var(--transition-main), transform 0.2s ease, font-weight var(--transition-main);
		font-family: var(--font-main);
	}
	.tab-button {
		flex: 1 1 33.33%;
	}
	.tabs .tab-button.active {
		background-color: var(--color-primary);
		color: var(--color-light);
		font-weight: bold;
		transform: scale(0.9);
	}
	.tabs .tab-button:not(.active):hover {
		transform: scale(1.08);
	}
	@media (max-width: 550px) {
		.tab-button {
			line-height: 0px !important;
			font-size: 0 !important;
		}
		.tab-button {
			font-size: 0;
			position: relative;
		}
		.tab-button::after {
			display: block;
			content: "";
			font-size: 24px;
			text-align: center;
		}
		.tab-button:nth-child(1)::after {
			content: "🐟";
		}
		.tab-button:nth-child(2)::after {
			content: "🌊";
		}
		.tab-button:nth-child(3)::after {
			content: "🌿";
		}
		.tab-button.active:nth-child(1)::after {
			content: "🐟";
		}
		.tab-button.active:nth-child(2)::after {
			content: "🌊";
		}
		.tab-button.active:nth-child(3)::after {
			content: "🌿";
		}
	}
	@media (min-width: 551px) {
		.tab-button {
			font-size: 16px;
		}
		.tab-button::after {
			content: "";
		}
	}
	.tables-container {
		display: block;
		overflow: hidden;
	}

	.table {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 10px;
		height: auto;
		margin-top: 10px;
		background-color: var(--color-accent);
		border: 3px solid var(--color-border);
		border-radius: 25px;
		padding: 10px;
	}

	@media (max-width: 800px) {
		.table {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 600px) and (min-width: 400px) {
		.table {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 400px) {
		.table {
			grid-template-columns: 1fr;
		}
	}
	.cell .table {
		transform: scale(2);
	}
	.cell {
		width: 140px;
	}

	.circles {
		display: flex;
		gap: 4px;
		flex-wrap: nowrap;
		overflow: visible;
	}
	img {
		height: 90px !important;
		margin-top: -20px;
		width: 100px;
		z-index: 2;
		filter: drop-shadow(0 0 1px var(--color-shadow));
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
		width: 15px !important;
		height: 15px;
		border-radius: 50%;
		border: 1px solid var(--color-dark);
		cursor: pointer;
		z-index: 3;
		transition: all var(--transition-main);
	}
	.circle:active {
		transform: scale(0.9);
	}
	@media (max-width: 900px) {
		.cell,
		.card-face {
			width: 190px !important;
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
		perspective: 1000px;
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
		border-color: var(--color-secondary);
	}

	.card-front {
		background-color: var(--color-secondary);
		transform: rotateY(0deg);
		z-index: 3;
	}

	.card-back {
		background-color: var(--color-primary) !important;
		transform: rotateY(180deg);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		z-index: 1;
	}

	.cell.flipped .card-front {
		transform: rotateY(-180deg);
		z-index: 1;
	}

	.cell.flipped .card-back {
		transform: rotateY(0deg);
		z-index: 2;
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
		color: #d1b12d;
	}
	.latin {
		font-style: italic;
		color: #d48256;
	}
	.catchphrase {
		color: var(--color-secondary);
	}
	.fish-img {
		opacity: 1;
	}

	.progress-bar-container {
		display: flex;
		width: 100%;
		height: 20px;
		background-color: hsl(29, 52%, 28%);
		border-radius: 8px;
		overflow: hidden;
		margin: 8px 0;
	}

	.progress-bar-segment {
		height: 100%;
		transition: width var(--transition-main);
		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
		box-shadow: 1px 1px 1px var(--color-shadow);
		padding-right: 8px;
		margin-left: -8px;
		position: relative;
	}
</style>