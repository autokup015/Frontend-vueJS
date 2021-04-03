import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Bill from "@/views/Bill.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Bill",
    name: "Bill",
    component: Bill,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
