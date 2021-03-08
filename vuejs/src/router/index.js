import Vue from "vue";
import VueRouter from "vue-router";
import codePromoView from "../views/codePromoView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/codePromoView",
    name: "codePromoView",
    component: codePromoView
  }
];

const router = new VueRouter({
  routes
});

export default router;
