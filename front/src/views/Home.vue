<template>
  <!-- Home Layout/Styling - Alexis -->
  <div class="">
    <div class="flex flex-col">
      <router-link to="/CreateAccount">Create Account </router-link>
      <router-link to="/Detail"> Detail </router-link>
      <router-link to="/Login"> Login </router-link>
      <router-link to="/Update"> Update </router-link>
    </div>

    <div v-if="true" class="my-10 font-epilogue space-y-5 text-dark-purple">
      <h2 class="text-4xl font-bold">Welcome, User Name!</h2>
      <h3 class="font-semibold text-2xl">What would you like to do today?</h3>
    </div>

    <div v-else class="my-10 font-epilogue space-y-5 text-dark-purple">
      <h2 class="text-4xl font-bold">Welcome, Guest!</h2>
      <h3 class="font-semibold text-2xl">
        See our current listings below, or create/login to your ThriftMe Account
        for the full user experience.
      </h3>
    </div>

    <h2 class="font-semibold text-2xl text-dark-purple font-epilogue">
      Browse:
    </h2>

    <div class="space-y-4 mb-4">
      <SearchFilter />
      <CategoryFilter />
    </div>

    <div
      v-if="posts"
      class="
        grid
        gap-6
        md:gap-8
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        mx-auto
        pb-10
      "
    >
      <SinglePost
        class="flex mx-auto"
        v-for="post in posts"
        :key="post._id"
        :post="post"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SinglePost from "../components/SinglePost.vue";
import SearchFilter from "../components/SearchFilter.vue";
import CategoryFilter from "../components/CategoryFilter.vue";

export default {
  name: "Home",
  components: {
    SinglePost,
    SearchFilter,
    CategoryFilter,
  },
  data() {
    return {
      posts: [],
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
    },
  },
};
</script>
