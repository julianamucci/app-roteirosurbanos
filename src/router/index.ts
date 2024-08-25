import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignupView.vue"),
    },
    {
      path: "/addjournal",
      name: "addjournal",
      component: () => import("../views/AddJournal.vue"),
    },
    {
      path: "/readjournal",
      name: "readjournal",
      component: () => import("../views/ReadJournal.vue"),
    },
  ],
});

export default router;