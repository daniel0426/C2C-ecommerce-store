<template>
  <div class="w-full flex flex-col">
    <div class="my-4 flex sm:flex-wrap md:justify-between">
      <BackToListings class="" />
      <div class="flex flex-row items-center">
        <h3 class="text-xl font-semibold text-dark-purple">Add to Watchlist</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 text-dark-purple m-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </div>
    </div>
    <div v-if="post" class="">
      <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div class="">
          <img
            class="h-96 w-96 mb-6 rounded-xl object-cover"
            alt="post image"
            src="https://drive.google.com/uc?export=view&id=1zuSmi2XiHb6StpW4pQ1VHcVRpse5OvAY"
          />
          <SellerTile />
        </div>
        <div>
          <h2 class="text-dark-purple font-semibold text-2xl mb-4">
            {{ post.title }}
          </h2>
          <div class="text-dark-purple font-semibold text-lg my-4">
            <h3>
              Asking Price:
              {{
                (post.price / 100).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD"
                })
              }}
            </h3>
            <h3>Condition:{{ post.condition }}</h3>
            <h3>Size: {{ post.size }}</h3>
            <h3>Location: {{ post.location }}</h3>
          </div>
          <div class="text-dark-purple font-semibold text-lg mb-4">
            <h3>Payment: {{ post.paymentType }}</h3>
            <h3>Shipping: {{ post.shippingOption }}</h3>
          </div>
          <h3 class="text-dark-purple font-semibold text-lg">
            Description: {{ post.description }}
          </h3>
        </div>
      </div>
      <Commenting class="flex my-6 justify-center" />
    </div>
  </div>
</template>

<script>
import BackToListings from "../components/BackToListings.vue";
import SellerTile from "../components/SellerTile.vue";
import Commenting from "../components/Commenting.vue";

export default {
  name: "PostDetail",

  components: {
    BackToListings,
    SellerTile,
    Commenting
  },

  props: {
    postId: String
  },

  data() {
    return {
      post: null
    };
  },

  mounted() {
    this.getPost();
  },

  methods: {
    async getPost() {
      const response = await fetch(
        "http://localhost:4000/posts/" + this.postId
      );
      const data = await response.json();
      this.post = data;
    }
  }
};
</script>

<style>
</style>