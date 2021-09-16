<template>
  <div
    class="
      shadow-md
      p-2
      border-2 border-opacity-30
      font-epilogue font-semibold
      rounded-lg
      bg-white
      border-dark-purple
      flex
      justify-between
    "
  >
    <div>
      <h2 class="text-xl text-dark-purple">Manage My Listing:</h2>
      <h3 class="text-purple-grey">Views:</h3>
      <h3 class="text-purple-grey">Listed On:</h3>
    </div>
    <div class="object-bottom mt-auto mb-1">
      <button
        class="
          px-4
          py-2
          bg-bright-purple
          rounded-md
          text-cream
          font-semibold
          mx-2
        "
      >
        Edit Listing
      </button>
      <button
        class="
          px-4
          py-2
          bg-bright-purple
          rounded-md
          text-cream
          font-semibold
          mx-2
        "
      >
        Delete Listing
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ManageMyListing",
};
</script>

<style>
</style>