import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import CreateAccount from "../views/CreateAccount.vue";
import CreateListing from "../views/CreateListing.vue";
import PostDetail from "../views/PostDetail.vue";
import MyListings from "../views/MyListings.vue";
import Update from "../views/Update.vue";
import Watchlist from "../views/Watchlist.vue";
import Notifications from "../views/Notifications.vue";
import Account from "../views/Account.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/CreateAccount",
    name: "CreateAccount",
    component: CreateAccount,
  },
  {
    path: "/CreateListing",
    name: "CreateListing",
    component: CreateListing,
  },
  {
    path: "/PostDetail/:postId",
    name: "PostDetail",
    component: PostDetail,
    props: true,
  },
  {
    path: "/MyListings",
    name: "MyListings",
    component: MyListings,
  },
  {
    path: "/Update/:postId",
    name: "Update",
    component: Update,
    props: true,
  },
  {
    path: "/watchlist",
    name: "Watchlist",
    component: Watchlist,
  },
  {
    path: "/notifications",
    name: "Notifications",
    component: Notifications,
  },
  {
    path: "/Account",
    name: "Account",
    component: Account,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
