<template>
	<div>
		<section
			class="mark-all-button"
			role="button"
			@click="markAllDefault()"
			:aria-label="'Mark all default'"
		>
			Mark all default
		</section>
		<p>Species</p>
		<section class="cosmetics-container">
			<div v-for="cosmetic in cosmeticsSpecies">
				<section
					class="cosmetic-card"
					@click="toggleCollected(cosmetic.id)"
					:class="{ collected: isCollected(cosmetic.id) }"
					role="button"
					:aria-label="'Toggle collected state for ' + cosmetic.name"
				>
					<img
						:src="'/images/' + cosmetic.imageName"
						:alt="cosmetic.name + ' image'"
						class="cosmetic-img"
					/>
					<h3>{{ cosmetic.name }}</h3>
				</section>
			</div>
		</section>
		<p>Tails</p>
		<section class="cosmetics-container">
			<div v-for="cosmetic in cosmeticsTails">
				<section
					class="cosmetic-card"
					@click="toggleCollected(cosmetic.id)"
					:class="{ collected: isCollected(cosmetic.id) }"
					role="button"
					:aria-label="'Toggle collected state for ' + cosmetic.name"
				>
					<img
						:src="'/images/' + cosmetic.imageName"
						:alt="cosmetic.name + ' image'"
						class="cosmetic-img"
					/>
					<h3>{{ cosmetic.name }}</h3>
				</section>
			</div>
		</section>
		<p>Patterns</p>
		<section class="cosmetics-container">
			<div v-for="cosmetic in cosmeticPatterns">
				<section
					class="cosmetic-card"
					@click="toggleCollected(cosmetic.id)"
					:class="{ collected: isCollected(cosmetic.id) }"
					role="button"
					:aria-label="'Toggle collected state for ' + cosmetic.name"
				>
					<img
						:src="'/images/' + cosmetic.imageName"
						:alt="cosmetic.name + ' image'"
						class="cosmetic-img"
					/>
					<h3>{{ cosmetic.name }}</h3>
				</section>
			</div>
		</section>
		<p>Colours</p>
		<section class="cosmetics-container">
			<div v-for="cosmetic in cosmeticColours">
				<section
					class="cosmetic-card"
					@click="toggleCollected(cosmetic.id)"
					:class="{ collected: isCollected(cosmetic.id) }"
					role="button"
					:aria-label="'Toggle collected state for ' + cosmetic.name"
				>
					<img
						:src="'/images/' + cosmetic.imageName"
						:alt="cosmetic.name + ' image'"
						class="cosmetic-img"
					/>
					<h3>{{ cosmetic.name }}</h3>
				</section>
			</div>
		</section>
		<p>Accessories</p>
		<section class="cosmetics-container">
			<div v-for="cosmetic in cosmeticAccessories">
				<section
					class="cosmetic-card"
					@click="toggleCollected(cosmetic.id)"
					:class="{ collected: isCollected(cosmetic.id) }"
					role="button"
					:aria-label="'Toggle collected state for ' + cosmetic.name"
				>
					<img
						:src="'/images/' + cosmetic.imageName"
						:alt="cosmetic.name + ' image'"
						class="cosmetic-img"
					/>
					<h3>{{ cosmetic.name }}</h3>
				</section>
			</div>
		</section>
		<p>Bobbers</p>
		<section class="cosmetics-container">
			<div v-for="cosmetic in cosmeticBobbers">
				<section
					class="cosmetic-card"
					@click="toggleCollected(cosmetic.id)"
					:class="{ collected: isCollected(cosmetic.id) }"
					role="button"
					:aria-label="'Toggle collected state for ' + cosmetic.name"
				>
					<img
						:src="'/images/' + cosmetic.imageName"
						:alt="cosmetic.name + ' image'"
						class="cosmetic-img"
					/>
					<h3>{{ cosmetic.name }}</h3>
				</section>
			</div>
		</section>
		<p>Eyes</p>
		<section class="cosmetics-container">
			<div v-for="cosmetic in cosmeticEyes">
				<section
					class="cosmetic-card"
					@click="toggleCollected(cosmetic.id)"
					:class="{ collected: isCollected(cosmetic.id) }"
					role="button"
					:aria-label="'Toggle collected state for ' + cosmetic.name"
				>
					<img
						:src="'/images/' + cosmetic.imageName"
						:alt="cosmetic.name + ' image'"
						class="cosmetic-img"
					/>
					<h3>{{ cosmetic.name }}</h3>
				</section>
			</div>
		</section>
		<p>Noses</p>
		<section class="cosmetics-container">
			<div v-for="cosmetic in cosmeticNoses">
				<section
					class="cosmetic-card"
					@click="toggleCollected(cosmetic.id)"
					:class="{ collected: isCollected(cosmetic.id) }"
					role="button"
					:aria-label="'Toggle collected state for ' + cosmetic.name"
				>
					<img
						:src="'/images/' + cosmetic.imageName"
						:alt="cosmetic.name + ' image'"
						class="cosmetic-img"
					/>
					<h3>{{ cosmetic.name }}</h3>
				</section>
			</div>
		</section>
		<p>Mouths</p>
		<section class="cosmetics-container">
			<div v-for="cosmetic in cosmeticMouths">
				<section
					class="cosmetic-card"
					@click="toggleCollected(cosmetic.id)"
					:class="{ collected: isCollected(cosmetic.id) }"
					role="button"
					:aria-label="'Toggle collected state for ' + cosmetic.name"
				>
					<img
						:src="'/images/' + cosmetic.imageName"
						:alt="cosmetic.name + ' image'"
						class="cosmetic-img"
					/>
					<h3>{{ cosmetic.name }}</h3>
				</section>
			</div>
		</section>
		<p>Hats</p>
		<section class="cosmetics-container">
			<div v-for="cosmetic in cosmeticHats">
				<section
					class="cosmetic-card"
					@click="toggleCollected(cosmetic.id)"
					:class="{ collected: isCollected(cosmetic.id) }"
					role="button"
					:aria-label="'Toggle collected state for ' + cosmetic.name"
				>
					<img
						:src="'/images/' + cosmetic.imageName"
						:alt="cosmetic.name + ' image'"
						class="cosmetic-img"
					/>
					<h3>{{ cosmetic.name }}</h3>
				</section>
			</div>
		</section>
		<p>Shirts</p>
		<section class="cosmetics-container">
			<div v-for="cosmetic in cosmeticShirts">
				<section
					class="cosmetic-card"
					@click="toggleCollected(cosmetic.id)"
					:class="{ collected: isCollected(cosmetic.id) }"
					role="button"
					:aria-label="'Toggle collected state for ' + cosmetic.name"
				>
					<img
						:src="'/images/' + cosmetic.imageName"
						:alt="cosmetic.name + ' image'"
						class="cosmetic-img"
					/>
					<h3>{{ cosmetic.name }}</h3>
				</section>
			</div>
		</section>
		<p>Pants</p>
		<section class="cosmetics-container">
			<div v-for="cosmetic in cosmeticPants">
				<section
					class="cosmetic-card"
					@click="toggleCollected(cosmetic.id)"
					:class="{ collected: isCollected(cosmetic.id) }"
					role="button"
					:aria-label="'Toggle collected state for ' + cosmetic.name"
				>
					<img
						:src="'/images/' + cosmetic.imageName"
						:alt="cosmetic.name + ' image'"
						class="cosmetic-img"
					/>
					<h3>{{ cosmetic.name }}</h3>
				</section>
			</div>
		</section>
		<p>Titles</p>
		<section class="cosmetics-container-titles">
			<div v-for="title in titlesData">
				<section
					class="cosmetic-card-title"
					@click="toggleCollectedTitle(title.id)"
					:class="{ collected: isCollected(title.id) }"
					role="button"
					:aria-label="'Toggle collected state for ' + title.title"
				>
					<h3>{{ title.title }}</h3>
				</section>
			</div>
		</section>
	</div>
</template>

<script>
	import cosmeticsData from "@/data/cosmeticsData.js";
	import titlesData from "@/data/titlesData.js";
	import { addNotification } from "@/components/NotificationMessage.vue";

	export default {
		name: "CosmeticsChecklist",
		data() {
			return {
				cosmeticsData,
				titlesData,
				cosmeticImages: {},
				clickedStates: JSON.parse(
					localStorage.getItem("clickedStates") || "[]",
				),
			};
		},
		computed: {
			cosmeticsSpecies() {
				return this.cosmeticsData.filter(
					(cosmetic) => cosmetic.category === "species",
				);
			},
			cosmeticColours() {
				return this.cosmeticsData.filter(
					(cosmetic) => cosmetic.category === "colours",
				);
			},
			cosmeticPatterns() {
				return this.cosmeticsData.filter(
					(cosmetic) => cosmetic.category === "patterns",
				);
			},
			cosmeticAccessories() {
				return this.cosmeticsData.filter(
					(cosmetic) => cosmetic.category === "accessories",
				);
			},
			cosmeticBobbers() {
				return this.cosmeticsData.filter(
					(cosmetic) => cosmetic.category === "bobbers",
				);
			},
			cosmeticEyes() {
				return this.cosmeticsData.filter(
					(cosmetic) => cosmetic.category === "eyes",
				);
			},
			cosmeticNoses() {
				return this.cosmeticsData.filter(
					(cosmetic) => cosmetic.category == "noses",
				);
			},
			cosmeticMouths() {
				return this.cosmeticsData.filter(
					(cosmetic) => cosmetic.category == "mouths",
				);
			},
			cosmeticHats() {
				return this.cosmeticsData.filter(
					(cosmetic) => cosmetic.category == "hats",
				);
			},
			cosmeticPants() {
				return this.cosmeticsData.filter(
					(cosmetic) => cosmetic.category == "pants",
				);
			},
			cosmeticShirts() {
				return this.cosmeticsData.filter(
					(cosmetic) => cosmetic.category == "shirts",
				);
			},
			cosmeticsTails() {
				return this.cosmeticsData.filter(
					(cosmetic) => cosmetic.category == "tails",
				);
			},
		},
		methods: {
			/*async loadCosmeticImage(cosmetic) {
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
    },*/

			toggleCollected(cosmeticId) {
				const now = new Date().toISOString().split("T")[0];

				const cosmetic = this.cosmeticsData.find((f) => f.id === cosmeticId);

				if (!cosmetic) {
					console.warn(`Cosmetic with ID ${cosmetic.cosmeticId} not found.`);
					return;
				}
				const cosmeticEntry = this.clickedStates.find(
					(entry) => entry.id === cosmeticId,
				);
				if (cosmeticEntry) {
					const typeIndex = cosmeticEntry.aquired;
					if (typeIndex == true) {
						cosmeticEntry.aquired = false;
						addNotification("Unmarked " + cosmetic.name + "!", "red");
					} else {
						cosmeticEntry.aquired = true;
						addNotification("Marked " + cosmetic.name + "!", "blue");
					}
					cosmeticEntry.modifiedAt = now;
				} else {
					this.clickedStates.push({
						id: cosmeticId,
						category: cosmetic.category,
						aquired: true,
						modifiedAt: now,
					});
					addNotification("Marked " + cosmetic.name + "!", "blue");
				}
				this.saveToLocalStorage();
			},
			toggleCollectedTitle(titleId) {
				const now = new Date().toISOString().split("T")[0];

				const title = this.titlesData.find((f) => f.id === titleId);

				if (!title) {
					console.warn(`Cosmetic with ID ${title.titleId} not found.`);
					return;
				}
				const titleEntry = this.clickedStates.find(
					(entry) => entry.id === titleId,
				);
				if (titleEntry) {
					const typeIndex = titleEntry.aquired;
					if (typeIndex == true) {
						titleEntry.aquired = false;
						addNotification("Unmarked " + title.title + "!", "red");
					} else {
						titleEntry.aquired = true;
						addNotification("Marked " + title.title + "!", "blue");
					}
					titleEntry.modifiedAt = now;
				} else {
					this.clickedStates.push({
						id: titleId,
						category: "title",
						aquired: true,
						modifiedAt: now,
					});
					addNotification("Marked " + title.name + "!", "blue");
				}
				this.saveToLocalStorage();
			},
			isCollected(cosmeticId) {
				return this.clickedStates.some(
					(entry) => entry.id === cosmeticId && entry.aquired === true,
				);
			},
			saveToLocalStorage() {
				localStorage.setItem(
					"clickedStates",
					JSON.stringify(this.clickedStates),
				);
			},
			loadFromLocalStorage() {
				const savedStates = localStorage.getItem("clickedStates");
				this.clickedStates = savedStates ? JSON.parse(savedStates) : [];
			},
			markAllDefault() {
				for (const cosmetic of cosmeticsData) {
					if (!this.isCollected(cosmetic.id)) {
						if (cosmetic.unlock === "No unlock requirement") {
							this.toggleCollected(cosmetic.id);
						}
					}
				}
			},
		},
		async mounted() {
			this.loadFromLocalStorage();
			//for (const cosmetic of cosmeticsData) {
			//  await this.loadCosmeticImage(cosmetic);
			//}
		},
	};
</script>

<style scoped>
	.cosmetics-container,
	.cosmetics-container-titles {
		display: flex;
		flex-direction: row;
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

	.cosmetics-container-titles {
		flex-direction: column !important;
	}

	.cosmetic-card,
	.cosmetic-card-title {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		line-break: strict;
		line-height: 0%;
		flex-direction: column;
		border-radius: 10px;
		cursor: pointer;
		box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 3px;
		transition: all 0.3s ease;
		height: 78px;
		width: 96px;
		margin: 0px 5px 0px 5px;
	}
	.cosmetic-card h3,
	.cosmetic-card-title h3 {
		font-size: 10px;
		line-break: normal;
		line-height: 1;
	}
	.cosmetic-card-title {
		width: auto !important;
		padding: 2px 10px 2px 10px;
		height: 8px;
		margin: 0px;
		line-height: 0px;
	}
	@media (max-width: 900px) {
		.cosmetic-card h3 {
			font-size: 12px;
		}
		.mark-all-button {
			left: 10px !important;
			font-size: 14px !important;
			width: 140px !important;
		}
		.cosmetic-card-title {
			padding: 4px 14px 4px 14px;
			height: 10px;
			font-size: 18px;
		}
	}
	p {
		margin-bottom: 0px;
	}
	.cosmetic-card.collected,
	.cosmetic-card-title.collected {
		filter: opacity(0.5);
		background-color: #5a755a;
	}
	.cosmetic-card.collected img {
		filter: contrast(0) brightness(0);
	}
	.cosmetic-card:hover,
	.cosmetic-card-title:hover {
		transform: scale(1.05);
	}
	.cosmetic-card:active,
	.cosmetic-card-title:active {
		transform: scale(0.9);
	}
	.cosmetic-img {
		width: 38px;
		object-fit: contain;
		object-position: center;
		filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.5));
	}
	.mark-all-button {
		border: 1px solid #5a755a;
		cursor: pointer;
		background-color: #5a755a;
		color: #faebd1;
		position: absolute;
		top: 10px;
		left: 120px;
		width: 120px;
		margin: 0 auto;
		padding: 3px;
		border-radius: 5px;
		font-size: 12px;
		font-weight: bold;
		transition: all 0.3s ease;
	}
	.mark-all-button:hover {
		background-color: #faebd1;
		color: #5a755a;
	}
	.mark-all-button:active {
		background-color: #5a755a;
		color: #faebd1;
		transform: scale(0.9);
	}
</style>
