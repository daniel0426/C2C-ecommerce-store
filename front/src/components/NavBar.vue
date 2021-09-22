<template>
  <!-- Nav Bar - Alexis -->
  <div>
    <div
      class="
        bg-bright-purple
        font-epilogue
        flex flex-row
        h-20
        justify-between
        px-4
        items-center
      "
    >
      <router-link class="text-4xl text-cream font-bold tracking-wide" to="/">
        ThriftMe
      </router-link>

      <!-- Mobile menu -->
      <div class="md:hidden" v-click-outside="hideMenu">
        <button class="focus:outline-none" @click="openMenu()">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-cream"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div
          v-if="menuOpen"
          class="
            text-right
            flex flex-col
            z-10
            fixed
            top-0
            right-0
            w-80
            px-4
            py-6
            text-2xl
            font-semibold
            text-cream
            h-screen
            bg-bright-purple
            space-y-4
            items-end
          "
        >
          <div class="flex flex-row justify-between mb-8 w-full">
            <button @click="hideMenu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <router-link
              class="text-4xl text-cream font-bold tracking-wide"
              to="/"
            >
              ThriftMe
            </router-link>
          </div>
          <div v-if="user" class="flex flex-col space-y-4">
            <router-link to="/CreateListing"> List Item </router-link>
            <router-link to="/MyListings"> My Listings </router-link>
            <router-link to="/Watchlist"> Watchlist </router-link>
            <!-- <router-link to="/Notifications"> Notifications </router-link> -->
            <router-link to="/Account" class="flex text-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              My Account
            </router-link>
            <button class="flex flex-end font-semibold" @click="logOut">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Log Out
            </button>
          </div>
          <div class="flex flex-col space-y-4" v-else>
            <router-link to="/Login"> Log In</router-link>
            <router-link to="/CreateAccount"> Create Account </router-link>
          </div>
        </div>
      </div>

      <!-- Desktop menu -->
      <div
        class="
          hidden
          md:text-lg
          md:flex
          flex-row
          text-cream
          lg:text-xl
          uppercase
          space-x-4
          lg:space-x-8
          font-semibold
        "
        v-if="user"
      >
        <router-link to="/CreateListing"> List Item </router-link>
        <router-link to="/MyListings"> My Listings </router-link>
        <router-link to="/Watchlist"> Watchlist </router-link>
        <!-- <router-link to="/Notifications"> Notifications </router-link> -->
        <router-link to="/Account">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </router-link>
        <button class="flex" @click="logOut">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </div>
      <div
        class="
          hidden
          md:text-lg
          md:flex
          flex-row
          text-cream
          lg:text-xl
          uppercase
          space-x-4
          lg:space-x-8
          font-semibold
        "
        v-else
      >
        <router-link to="/Login"> Log In</router-link>
        <router-link to="/CreateAccount"> Create Account </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from "click-outside-vue3";

export default {
  name: "NavBar",

  props: {
    user: Object,
  },

  directives: {
    clickOutside: vClickOutside.directive,
  },

  data() {
    return {
      menuOpen: false,
    };
  },

  methods: {
    openMenu() {
      this.menuOpen = true;
    },
    hideMenu() {
      this.menuOpen = false;
    },
    async logOut() {
      // const response = await fetch("http://localhost:4000/accounts/logout", {
      //   credentials: "include",
      // });
      // const data = await response.json();

      // localStorage.removeItem("user");
      // console.log(data);
      // location.reload();
      this.$emit("logout");
    },
  },
};
</script>

<style>
</style>