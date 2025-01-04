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
	};
</script>

<style>
	* {
		font-family: "IBMPlexMono", monospace;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		image-rendering: pixelated;
		scrollbar-width: none;
	}
	body::-webkit-scrollbar {
		display: none; /* Hide scrollbar on Chrome, Safari */
	}
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
		border-left: 4px solid transparent;
		border-top-left-radius: 8px;
		border-bottom-left-radius: 8px;
	}
	/* Remove left padding on smaller screens */
	@media (max-width: 900px) {
		.app-container {
			padding: 0;
			height: auto;
		}

		.main-content {
			padding-bottom: 60px; /* Offset for bottom-positioned sidebar */
		}
	}
</style>
