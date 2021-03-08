import Vue from "vue";
import VueRouter from "vue-router";
import SignInView from "../views/SignInView.vue";
import SignUpView from "../views/SignUpView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "SignInView",
    component: SignInView,
  },
  {
    path: "/signUp",
    name: "SignUpView",
    component: SignUpView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
