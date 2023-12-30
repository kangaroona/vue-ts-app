import {
  createRouter,
  createWebHistory,
  // Router,
  RouteRecordRaw,
} from "vue-router";
const Home = () => import("@pages/Home.vue");
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@pages/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
