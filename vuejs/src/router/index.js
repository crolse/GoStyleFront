import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/ListPromo",
  },
  {
    path: "/ListPromo",
    component: () => import("@/views/tabs/ListCodePromoView.vue"),
  },
  {
    path: "/QRCode",
    component: () => import("@/views/tabs/QRCodeView.vue"),
  },
  {
    path: "/SignIn",
    component: () => import("@/views/authentication/SignInView.vue"),
  },
  {
    path: "/SignUp",
    component: () => import("@/views/authentication/SignUpView.vue"),
  },
  {
    path: "/test",
    component: () => import("@/components/HeaderBar.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
