<template>
	<aside class="sidebar">
		<router-link v-for="link in links" :key="link.name" :to="link.path" class="sidebar-button">
			{{ link.name }}
		</router-link>
	</aside>
</template>

<script>
	export default {
		name: "Sidebar",
		data() {
			return {
				links: [
					{ name: "Fish", path: "/" },
					{ name: "Cosmetics", path: "/cosmetics" },
					{ name: "About", path: "/about" },
					{ name: "Settings", path: "/settings" },
				],
			};
		},
	};
</script>

<style scoped>
	.sidebar {
		position: fixed;
		left: 0;
		top: 0;
		bottom: 0;
		width: 88px;
		background-color: var(--color-primary);
		padding: 10px;
		display: flex;
		flex-direction: column;
		gap: 10px;
		z-index: 10;
	}

	.sidebar-button {
		background-color: var(--color-secondary);
		height: 66px;
		padding: 10px;
		font-size: 12px;
		border-radius: var(--border-radius);
		cursor: pointer;
		border: 2px solid var(--color-secondary);
		transition: all var(--transition-main);
		display: flex;
		align-items: center;
		justify-content: center;
		text-decoration: none;
		font-family: var(--font-main);
	}
	.sidebar-button:hover {
		background-color: var(--color-highlight);
		border-color: #3e8e41;
		box-shadow: 0 0 5px var(--color-shadow);
		transform: scale(1.05);
	}

	.sidebar-button:active {
		background-color: #ff9900;
		border-color: #2f6f2f;
		box-shadow: inset 0 0 5px var(--color-shadow);
		transform: scale(0.9);
	}
	@media (max-width: 900px) {
		.sidebar {
			background-color: transparent;
			position: fixed;
			left: 0;
			bottom: 33px;
			top: auto;
			width: 100%;
			height: 33px;
			flex-direction: row;
			justify-content: space-around;
			z-index: 10;
			box-sizing: border-box;
		}

		.sidebar-button {
			height: 39px;
			flex: 1 1 33.33%;
			font-size: 14px;
			padding: 0px;
			margin: 0 auto;
		}
	}
</style>
