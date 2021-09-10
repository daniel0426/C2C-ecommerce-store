import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import CreateAccount from '../views/CreateAccount.vue'
import CreateListing from '../views/CreateListing.vue'
import Detail from '../views/Detail.vue'
import MyListings from '../views/MyListings.vue'
import Update from '../views/Update.vue'
import Watchlist from '../views/Watchlist.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/CreateAccount',
    name: 'CreateAccount',
    component: CreateAccount
  },
  {
    path: '/CreateListing',
    name: 'CreateListing',
    component: CreateListing
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/MyListings',
    name: 'MyListings',
    component: MyListings
  },
  {
    path: '/update',
    name: 'Update',
    component: Update
  },
  {
    path: '/watchlist',
    name: 'Watchlist',
    component: Watchlist
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
