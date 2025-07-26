import { createWebHistory, createRouter } from "vue-router";

import RootView from "../views/RootView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import DashboardView from "../views/DashboardView.vue";
// define routes

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: RootView,
    },
    {
      path: "/auth",
      component: LoginView,
    },

    {
      path: "/auth/register",
      component: RegisterView,
    },
    {
      path: "/dashboard",
      component: DashboardView,
    },
  ],
});

export default router;
