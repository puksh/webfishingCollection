<template>
	<div class="notification-container">
		<div
			v-for="(notification, index) in notifications"
			:key="notification.id"
			:class="['notification', notification.type]"
		>
			{{ notification.message }}
			<button @click="removeNotification(notification.id)">X</button>
		</div>
	</div>
</template>

<script>
	import { reactive } from "vue";

	const notifications = reactive([]);
	let notificationId = 0;
	export const addNotification = (message, type = "blue", duration = 3000) => {
		const id = notificationId++;
		notifications.push({ id, message, type });
		setTimeout(() => {
			removeNotification(id);
		}, duration);
	};
	export const removeNotification = (id) => {
		const index = notifications.findIndex((notification) => notification.id === id);
		if (index !== -1) notifications.splice(index, 1);
	};

	export default {
		name: "NotificationMessage",
		setup() {
			return { notifications, removeNotification };
		},
	};
</script>

<style scoped>
	.notification-container {
		position: fixed;
		bottom: 20px;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 100;
	}
	.notification {
		padding: 10px 15px;
		border-radius: var(--border-radius);
		margin: 5px 0;
		color: white;
		min-width: 250px;
		text-align: center;
		animation: fadeInOut 3s forwards;
		box-shadow: 0 4px 4px var(--color-shadow);
		font-family: var(--font-main);
	}
	.notification button {
		background: transparent;
		border: none;
		color: white;
		font-size: 16px;
		cursor: pointer;
		font-weight: bolder;
		padding: 0 5px;
		outline: none;
	}
	.notification button:hover {
		color: lightgray;
	}
	@media (max-width: 900px) {
		.notification-container {
			bottom: 66px;
		}
	}
	@keyframes fadeInOut {
		0% {
			opacity: 0;
		}
		10% {
			opacity: 1;
		}
		90% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	.green {
		background-color: var(--color-green);
	}
	.red {
		background-color: var(--color-red);
	}
	.blue {
		background-color: var(--color-blue);
	}
</style>
