<template>
  <!-- Whole App Layout/Styling - Alexis -->
  <div class="h-screen flex flex-col w-full bg-cream">
    <NavBar v-bind:user="user" />

    <div class="flex flex-grow overflow-y-auto">
      <div class="max-w-4xl w-full mx-auto px-2">
        <router-view
          v-bind:user="user"
          @loggedIn="userLoggedIn"
          class="h-full"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    NavBar,
    Footer,
  },

  data() {
    return {
      user: null,
    };
  },

  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
  },

  methods: {
    async logOut() {
      const response = await fetch("http://localhost:4000/accounts/logout", {
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
    },
    userLoggedIn(user) {
      localStorage.setItem("user", JSON.stringify(user));
      this.user = user;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap");
</style>
