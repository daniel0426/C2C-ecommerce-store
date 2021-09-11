<template>
  <div>
    <div
      class="bg-bright-purple font-epilogue flex flex-row h-20 justify-between px-4 items-center border border-black"
    >
      <router-link class="text-2xl text-cream font-bold tracking-wide" to="/">
        ThriftMe
      </router-link>

      <div v-click-outside="hideMenu">
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
          class="flex flex-col z-10 fixed top-0 right-0 w-80 px-4 py-4 text-2xl font-semibold text-cream h-screen bg-bright-purple"
          v-if="menuOpen"
        >
          <button @click="hideMenu">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <router-link to="/CreateListing"> List Item </router-link>
          <router-link to="/MyListings"> My Listings </router-link>
          <router-link to="/Watchlist"> Watchlist </router-link>
          <router-link to="/Notifications"> Notifications </router-link>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from "vue-click-outside";

export default {
  name: "NavBar",

  data() {
    return {
      menuOpen: false
    };
  },

  methods: {
    openMenu() {
      this.menuOpen = !this.menuOpen;
    },
    hideMenu() {
      this.menuOpen = false;
    }
  },
  directives: {
    ClickOutside
  }
};
</script>

<style>
</style>