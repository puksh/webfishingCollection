<template>
	<div>
		<section class="mark-all-button" role="button" @click="markAllDefault()" :aria-label="'Mark all default'">
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
					<img :src="'/images/' + cosmetic.imageName" :alt="cosmetic.name + ' image'" class="cosmetic-img" />
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
					<img :src="'/images/' + cosmetic.imageName" :alt="cosmetic.name + ' image'" class="cosmetic-img" />
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
					<img :src="'/images/' + cosmetic.imageName" :alt="cosmetic.name + ' image'" class="cosmetic-img" />
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
					<img :src="'/images/' + cosmetic.imageName" :alt="cosmetic.name + ' image'" class="cosmetic-img" />
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
					<img :src="'/images/' + cosmetic.imageName" :alt="cosmetic.name + ' image'" class="cosmetic-img" />
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
					<img :src="'/images/' + cosmetic.imageName" :alt="cosmetic.name + ' image'" class="cosmetic-img" />
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
					<img :src="'/images/' + cosmetic.imageName" :alt="cosmetic.name + ' image'" class="cosmetic-img" />
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
					<img :src="'/images/' + cosmetic.imageName" :alt="cosmetic.name + ' image'" class="cosmetic-img" />
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
					<img :src="'/images/' + cosmetic.imageName" :alt="cosmetic.name + ' image'" class="cosmetic-img" />
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
					<img :src="'/images/' + cosmetic.imageName" :alt="cosmetic.name + ' image'" class="cosmetic-img" />
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
					<img :src="'/images/' + cosmetic.imageName" :alt="cosmetic.name + ' image'" class="cosmetic-img" />
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
					<img :src="'/images/' + cosmetic.imageName" :alt="cosmetic.name + ' image'" class="cosmetic-img" />
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
				clickedStates: JSON.parse(localStorage.getItem("clickedStates") || "[]"),
			};
		},
		computed: {
			cosmeticsSpecies() {
				return this.cosmeticsData.filter((cosmetic) => cosmetic.category === "species");
			},
			cosmeticColours() {
				return this.cosmeticsData.filter((cosmetic) => cosmetic.category === "colours");
			},
			cosmeticPatterns() {
				return this.cosmeticsData.filter((cosmetic) => cosmetic.category === "patterns");
			},
			cosmeticAccessories() {
				return this.cosmeticsData.filter((cosmetic) => cosmetic.category === "accessories");
			},
			cosmeticBobbers() {
				return this.cosmeticsData.filter((cosmetic) => cosmetic.category === "bobbers");
			},
			cosmeticEyes() {
				return this.cosmeticsData.filter((cosmetic) => cosmetic.category === "eyes");
			},
			cosmeticNoses() {
				return this.cosmeticsData.filter((cosmetic) => cosmetic.category === "noses");
			},
			cosmeticMouths() {
				return this.cosmeticsData.filter((cosmetic) => cosmetic.category === "mouths");
			},
			cosmeticHats() {
				return this.cosmeticsData.filter((cosmetic) => cosmetic.category === "hats");
			},
			cosmeticPants() {
				return this.cosmeticsData.filter((cosmetic) => cosmetic.category === "pants");
			},
			cosmeticShirts() {
				return this.cosmeticsData.filter((cosmetic) => cosmetic.category === "shirts");
			},
			cosmeticsTails() {
				return this.cosmeticsData.filter((cosmetic) => cosmetic.category === "tails");
			},
		},
		methods: {
			toggleCollected(cosmeticId) {
				const now = new Date().toISOString().split("T")[0];

				const cosmetic = this.cosmeticsData.find((f) => f.id === cosmeticId);

				if (!cosmetic) {
					console.warn(`Cosmetic with ID ${cosmeticId} not found.`);
					return;
				}
				const cosmeticEntry = this.clickedStates.find((entry) => entry.id === cosmeticId);
				if (cosmeticEntry) {
					const typeIndex = cosmeticEntry.acquired;
					if (typeIndex === true) {
						cosmeticEntry.acquired = false;
						addNotification("Unmarked " + cosmetic.name + "!", "red");
					} else {
						cosmeticEntry.acquired = true;
						addNotification("Marked " + cosmetic.name + "!", "blue");
					}
					cosmeticEntry.modifiedAt = now;
				} else {
					this.clickedStates.push({
						id: cosmeticId,
						category: cosmetic.category,
						acquired: true,
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
					console.warn(`Cosmetic with ID ${titleId} not found.`);
					return;
				}
				const titleEntry = this.clickedStates.find((entry) => entry.id === titleId);
				if (titleEntry) {
					const typeIndex = titleEntry.acquired;
					if (typeIndex === true) {
						titleEntry.acquired = false;
						addNotification("Unmarked " + title.title + "!", "red");
					} else {
						titleEntry.acquired = true;
						addNotification("Marked " + title.title + "!", "blue");
					}
					titleEntry.modifiedAt = now;
				} else {
					this.clickedStates.push({
						id: titleId,
						category: "title",
						acquired: true,
						modifiedAt: now,
					});
					addNotification("Marked " + title.title + "!", "blue");
				}
				this.saveToLocalStorage();
			},
			isCollected(cosmeticId) {
				return this.clickedStates.some((entry) => entry.id === cosmeticId && entry.acquired === true);
			},
			saveToLocalStorage() {
				localStorage.setItem("clickedStates", JSON.stringify(this.clickedStates));
			},
			loadFromLocalStorage() {
				const savedStates = localStorage.getItem("clickedStates");
				this.clickedStates = savedStates ? JSON.parse(savedStates) : [];
			},
			markAllDefault() {
				[...this.cosmeticsData, ...this.titlesData].forEach((item) => {
					if (!this.isCollected(item.id) && item.unlock === "No unlock requirement") {
						this.toggleCollected(item.id);
					}
				});
			},
		},
		async mounted() {
			this.loadFromLocalStorage();
		},
	};
</script>

<style scoped>
	:root {
		--color-primary: #5a755a;
		--color-secondary: #faebd1;
		--color-light: #ffffff;
		--color-shadow: rgba(0, 0, 0, 0.5);
		--transition-main: 0.3s ease;
		--font-main: "Arial", sans-serif;
		--border-radius: 10px;
	}

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
		border-radius: var(--border-radius);
		cursor: pointer;
		box-shadow: 0px 1px 3px var(--color-shadow);
		transition: all var(--transition-main);
		height: 78px;
		width: 96px;
		margin: 0px 5px 0px 5px;
		background: var(--color-secondary);
		font-family: var(--font-main);
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
		background-color: var(--color-primary);
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
		filter: drop-shadow(0 0 1px var(--color-shadow));
	}
	.mark-all-button {
		border: 1px solid var(--color-primary);
		cursor: pointer;
		background-color: var(--color-secondary);
		position: absolute;
		top: 10px;
		left: 120px;
		width: 120px;
		margin: 0 auto;
		padding: 3px;
		border-radius: 5px;
		font-size: 12px;
		font-weight: bold;
		transition: all var(--transition-main);
	}
	.mark-all-button:hover {
		background-color: transparent;
	}
	.mark-all-button:active {
		background-color: var(--color-secondary);
		transform: scale(0.9);
	}
</style>
