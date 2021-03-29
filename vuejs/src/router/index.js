import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/SignIn",
  },
  {
    path: "/ListPromo",
    name: "ListPromo",
    component: () => import("@/views/tabs/ListCodePromoView.vue"),
  },
  {
    path: "/QRCode",
    name: "QRCode",
    component: () => import("@/views/tabs/QRCodeView.vue"),
  },
  {
    path: "/SignIn",
    name: "SignIn",
    component: () => import("@/views/authentication/SignInView.vue"),
  },
  {
    path: "/SignUp",
    name: "SignUp",
    component: () => import("@/views/authentication/SignUpView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
