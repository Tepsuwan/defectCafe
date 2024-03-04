import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/Home.vue";
import Products from "../pages/Products.vue";
import Panel from "../pages/Panel.vue";
import ProductDetail from "../pages/ProductDetail.vue";
import Payment from "../pages/Payment.vue";
import Test from "../pages/Test.vue";
import Test2 from "../pages/Test2.vue";

import Home2Page from "../pages/Home2.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/panel",
    name: "Panel",
    component: Panel,
  },
  {
    path: "/productDetail",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,
  },
  {
    path: "/test2",
    name: "Test2",
    component: Test2,
  },
  {
    path: "/payment",
    name: "Payment",
    component: Payment,
  },
  {
    path: "/home2",
    name: "Home2Page",
    component: Home2Page,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
