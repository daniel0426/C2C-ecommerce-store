<template>
  <!-- Home Layout/Styling - Alexis -->
  <div class="">
    <div v-if="user" class="my-10 font-epilogue space-y-5 text-dark-purple">
      <h2 class="text-4xl font-bold">
        Welcome, {{ user.fname }} {{ user.lname }}!
      </h2>
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

    <div class="mb-8">
      <SearchFilter @filteredByInput="categorizeByInput" />
      <CategoryFilter class="my-1" @categorizeListings="categorizeByFilter" />
    </div>

    <div
      v-if="filteredPosts.length"
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
        v-for="post in filteredPosts"
        :key="post._id"
        :post="post"
      />
    </div>
    <div v-else>
      <h1 class="text-center m-12">
        There are no available items on this category
      </h1>
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
  props: {
    user: Object,
  },

  components: {
    SinglePost,
    SearchFilter,
    CategoryFilter,
  },
  data() {
    return {
      posts: [],
      category: "",
      inputItem: "",
      filteredPosts: [],
    };
  },
  computed: {},
  mounted() {
    this.getPosts();
    console.log("User:", this.user);
  },
  methods: {
    async getPosts() {
      const response = await fetch("http://localhost:4000/posts");
      const data = await response.json();
      this.posts = data;
      this.filteredPosts = this.posts;
    },
    categorizeByFilter(category) {
      this.category = category;
      this.filterPosts();
    },

    categorizeByInput(inputItem) {
      this.inputItem = inputItem;
      this.filterPosts();
      this.inputItem = "";
    },

    filterPosts() {
      this.filteredPosts = this.posts.filter((post) => {
        if (this.inputItem.length > 0) {
          return post.title.includes(this.inputItem);
        }
        if (
          this.category === "All" ||
          this.category === "" ||
          this.inputItem === undefined
        ) {
          return post;
        }
        return post.category === this.category;
      });
    },
  },
};
</script>
