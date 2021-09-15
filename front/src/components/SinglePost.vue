<template>
  <router-link
    :to="{ name: 'PostDetail', params: { postId: post._id } }"
    class="
      rounded-md
      shadow-lg
      hover:shadow-xl
      overflow-hidden
      transition
      duration-150
      flex flex-col
      justify-between
    "
  >
    <div class="flex items-center -mb-12">
      <img
        class="h-56 w-full mx-auto object-cover"
        alt="post image"
        src="https://drive.google.com/uc?export=view&id=1zuSmi2XiHb6StpW4pQ1VHcVRpse5OvAY"
      />
    </div>
    <div class="h-36 flex flex-col justify-end">
      <div
        class="flex flex-row flex-wrap w-full justify-between items-center z-10 p-2"
      >
        <h3 class="ml-2 text-dark-purple font-semibold w-full">
          {{ post.title }}
        </h3>
        <button
          type="button"
          class="
            px-3
            py-1
            bg-dark-purple
            hover
            text-cream
            rounded-lg
            m-2
            text-md
            cursor-pointer
          "
        >
          View Listing
        </button>
        <h3 class="mr-2 text-dark-purple font-semibold">
          {{
            (post.price / 100).toLocaleString("en-US", {
              style: "currency",
              currency: "USD"
            })
          }}
        </h3>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "SinglePost",
  props: {
    post: Object
  },
  mounted() {
    console.log(this.post._id);
  }
};
</script>

<style>
</style>