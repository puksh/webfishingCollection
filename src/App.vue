<template>
	<div class="app-container">
		<Sidebar />
		<main class="main-content">
			<router-view />
			<NotificationMessage />
		</main>
	</div>
</template>

<script>
	import Sidebar from "./components/Sidebar.vue";
	import NotificationMessage from "./components/NotificationMessage.vue";

	export default {
		name: "Webfishing Tracker",
		components: {
			Sidebar,
			NotificationMessage,
		},
		mounted() {
			const applyTheme = () => {
				let theme = localStorage.getItem("theme") || "auto";
				if (theme === "auto") {
					const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
					theme = prefersDark ? "dark" : "light";
				}
				document.documentElement.setAttribute("data-theme", theme);
			};
			applyTheme();
			// Listen for system theme changes if auto
			window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
				if ((localStorage.getItem("theme") || "auto") === "auto") {
					applyTheme();
				}
			});
		},
	};
</script>

<style>
	.app-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 0 0 88px;
	}

	.main-content {
		display: flex;
		padding: 20px;
		max-width: 1600px;
		text-align: center;
	}
	@media (max-width: 900px) {
		.app-container {
			padding: 0;
			height: auto;
		}

		.main-content {
			padding-bottom: 60px;
		}
	}
</style>
