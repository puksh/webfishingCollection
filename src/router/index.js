import { createRouter, createWebHistory } from "vue-router";

import FishChecklist from "../components/fishChecklist.vue";
import About from "../components/About.vue";
import Settings from "../components/Settings.vue";

const routes = [
  { path: "/", component: FishChecklist },
  { path: "/about", component: About },
  { path: "/settings", component: Settings },
];

const router = createRouter({
  history: createWebHistory(), // use HTML5 History API to manage URL
  routes,
});

export default router;