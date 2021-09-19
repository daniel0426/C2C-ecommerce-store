
<template>
  <!-- Post Detail - Written by Alexis -->
  <div class="flex flex-col">
    <div
      class="
        mt-4
        w-full
        grid grid-cols-1
        gap-2
        md:flex md:flex-row
        justify-between
      "
    >
      <BackToListings class="" />

      <!-- ADD TO WATCHLIST WILL APPEAR/DISAPPEAR BASED ON USER -->
      <AddToWatchlist @add="addToWatchlist" class="hidden md:flex" />
    </div>
    <!-- MANAGE MY LISTING WILL APPEAR/DISAPPEAR BASED ON USER, click funtionality and router still to be written -->
    <ManageMyListing class="my-4" :postId="post._id"  :post="post" />
    <div v-if="post" class="md:mt-2 flex flex-col items-center">
      <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div class="">
          <AddToWatchlist @add="addToWatchlist" class="md:hidden" />
          <img
            class="h-96 w-96 mb-6 rounded-xl object-cover shadow-md"
            alt="post image"
            :src="post.imgURL"
          />
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
                  currency: "USD",
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
        <SellerTile />
      </div>
    </div>
    <Commenting class="mb-8" :post="post" @refresh="getPost" />
  </div>
</template>

<script>
import AddToWatchlist from "../components/AddToWatchlist.vue";
import BackToListings from "../components/BackToListings.vue";
import SellerTile from "../components/SellerTile.vue";
import Commenting from "../components/Commenting.vue";
import ManageMyListing from "../components/ManageMyListing.vue";
export default {
  name: "PostDetail",

  components: {
    AddToWatchlist,
    BackToListings,
    SellerTile,
    Commenting,
    ManageMyListing,
  },

  props: {
    postId: String,
  },

  data() {
    return {
      post: {},
    };
  },

  async mounted() {
       this.getPost()
  },

  methods: {
    async getPost() {
      const response = await fetch(
        "http://localhost:4000/posts/" + this.postId
      );
      const data = await response.json();
      this.post = data;
    },
    async addToWatchlist() {
      // placeholder function to add to watchlist
    },
  },
};
</script>

<style>
</style>