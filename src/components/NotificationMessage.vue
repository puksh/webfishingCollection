<template>
  <div class="notification-container">
    <div
      v-for="(notification, index) in notifications"
      :key="index"
      :class="['notification', notification.type]"
    >
      {{ notification.message }}
      <button @click="removeNotification(index)">X</button>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  name: "NotificationMessage",
  setup() {
    const notifications = reactive([]);

    const addNotification = (message, type = "blue") => {
      notifications.push({ message, type });
      setTimeout(() => notifications.shift(), 3000); // Remove notification after 3 seconds
    };

    const removeNotification = (index) => notifications.splice(index, 1);

    return { notifications, addNotification, removeNotification };
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
}

.notification {
  padding: 10px 20px;
  border-radius: 5px;
  margin: 5px 0;
  color: white;
  min-width: 200px;
  text-align: center;
}

.green {
  background-color: #4caf50;
}

.red {
  background-color: #f44336;
}

.blue {
  background-color: #2196f3;
}
</style>
