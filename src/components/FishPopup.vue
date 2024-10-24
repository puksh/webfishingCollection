<template>
  <div v-if="visible" class="popup">
    <p class="fishname-popup">{{ fish.name }} - Tier {{ fish.tier }}</p>
    <p class="latin">{{ fish.latinName }}</p>
    <p class="catchphrase">{{ fish.catchPhrase }}</p>
  </div>
</template>

<script>
export default {
  props: {
    fish: {
      type: Object,
      required: true,
    },
    visible: {
      type: Boolean,
      default: false,
    },
    position: {
      type: Object,
      default: () => ({ top: "0", left: "0" }),
    },
  },
  computed: {},
};
</script>

<style scoped>
.popup {
  position: absolute;
  left: 100%;
  background-color: #d5aa73;
  border: 1px solid #d5aa73;
  border-radius: 25px;
  z-index: 10;
  color: #734e2b;
  padding: 10px;
  white-space: nowrap;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.latin {
  font-style: italic;
  color: #b48141;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
}
.fishname-popup {
  color: #6a4420;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.7);
}
.catchphrase {
  color: #ffeed5;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7);
}
</style>
