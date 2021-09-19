<template>
  <!-- Whole App Layout/Styling - Alexis -->
  <div class="h-screen flex flex-col w-full bg-cream">
    <NavBar />
    <a @click="logOut">Log Out</a>

    <div class="flex flex-grow overflow-y-auto">
      <div class="max-w-4xl w-full mx-auto px-2">
        <router-view @loggedin="userLoggedIn" class="h-full" />
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

  methods:{
    async logOut (){
      const response = await fetch("http://localhost:4000/accounts/logout", {
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
    }
  },

  userLoggedIn(){
    console.log("Login event detected");
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap");
</style>
