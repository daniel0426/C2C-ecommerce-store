
<template>
  <!-- Post Detail - Written by Alexis -->
  <div class="flex flex-col" v-if="!loading">
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

      <AddToWatchlist
        @add="addToWatchlist"
        class="hidden md:flex"
        :post="post"
        v-if="user && !isAuthor"
      />
    </div>
    <!-- MANAGE MY LISTING WILL APPEAR/DISAPPEAR BASED ON USER, click funtionality and router still to be written -->
    <ManageMyListing
      class="my-4"
      :postId="post._id"
      :post="post"
      v-if="isAuthor"
    />
    <div v-if="post" class="md:mt-2 flex flex-col items-center">
      <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <div class="">
          <AddToWatchlist
            @add="addToWatchlist"
            class="md:hidden"
            v-if="user && !isAuthor"
          />
          <img
            class="h-96 w-96 mb-6 rounded-xl object-cover shadow-md"
            alt="post image"
            :src="post.imgURL"
          />
          <SellerTile :author="post.author" />
        </div>
        <div class="space-y-4">
          <h2 class="text-dark-purple font-semibold text-2xl mb-4">
            {{ post.title }}
          </h2>
          <h2 class="text-dark-purple font-semibold text-lg">
            Listed By: {{ post.author.fname }} {{ post.author.lname }}
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
            <h3>Condition: {{ post.condition }}</h3>
            <h3>Size: {{ post.size }}</h3>
            <h3>Location: {{ post.location }}</h3>
          </div>
          <div class="text-dark-purple font-semibold text-lg mb-4">
            <h3>Payment: {{ post.paymentType }}</h3>
            <h3>Shipping: {{ post.shippingOption }}</h3>
          </div>
          <h3 class="text-dark-purple font-semibold text-lg mb-10">
            Description:
            <h2 class="text-black font-epilogue font-medium">
              {{ post.description }}
            </h2>
          </h3>
          <div class="flex justify-center my-auto">
            <button
              :class="{
                'bg-gray-400 cursor-default': isAuthor,
                'bg-dark-purple': !isAuthor,
              }"
              class="
                px-6
                py-2
                font-epilogue
                rounded-lg
                text-cream text-lg
                font-medium
                shadow-xl
              "
            >
              Request to Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
    <Commenting
      class="mb-8"
      :post="post"
      @refresh="getPost"
      v-if="user"
      :isAuthor="isAuthor"
    />
    <div v-else>
      <h2
        class="
          text-center
          font-medium
          my-4
          text-xl text-dark-purple text-opacity-70
          font-epilogue
        "
      >
        Please log in to view and leave comments on this listing.
      </h2>
    </div>
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
    user: Object,
  },

  computed: {
    isAuthor() {
      return this.user?.id === this.post.author?._id;
    },
  },

  data() {
    return {
      post: {},
      loading: true,
    };
  },

  async mounted() {
    await this.getPost();
    if (!this.post.author) {
      this.$router.push("/");
    }
    console.log(this.user, this.isAuthor);
    this.loading = false;
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