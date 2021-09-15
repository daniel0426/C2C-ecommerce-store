<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <div class="flex flex-col border border-red-500">
      <router-link to="/CreateAccount">Create Account </router-link>
      <router-link to="/CreateListing"> Create Listing </router-link>
      <router-link to="/Detail"> Detail </router-link>
      <router-link to="/Login"> Login </router-link>
      <router-link to="/MyListings"> My Listings </router-link>
      <router-link to="/Update"> Update </router-link>
      <router-link to="/Watchlist"> Watchlist </router-link>
    </div>

    <div
      v-if="posts"
      class="
        grid
        gap-6
        md:gap-12
        grid-cols-1
        md:grid-cols-2
        max-w-4xl
        mx-auto
        pb-10
      "
    >
      <SinglePost class="" v-for="post in posts" :key="post._id" :post="post" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SinglePost from "../components/SinglePost.vue";

export default {
  name: "Home",
  components: {
    SinglePost
  },
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const response = await fetch("http://localhost:4000/posts");
      const data = await response.json();
      this.posts = data;
      console.log(this.posts);
    }
  }
};
</script>
