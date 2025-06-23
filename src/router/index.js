import { createRouter, createWebHistory } from "vue-router";

import FishChecklist from "../components/fishChecklist.vue";
import Cosmetics from "../components/Cosmetics.vue";
import About from "../components/About.vue";
import Settings from "../components/Settings.vue";

const routes = [
  { path: "/", component: FishChecklist },
  { path: "/cosmetics", component: Cosmetics },
  { path: "/about", component: About },
  { path: "/settings", component: Settings },
];

const router = createRouter({
  history: createWebHashHistory(), // Hash history for static GH page deployment
  routes,
});

export default router;
