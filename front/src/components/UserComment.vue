<template>
  <div
    class="
      bg-white
      rounded-xl
      shadow-lg
      flex flex-row
      justify-between
      w-full
      p-4
    "
  >
    <div class="flex flex-row font-epilogue">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-20 w-20 text-light-purple"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
          clip-rule="evenodd"
        />
      </svg>
      <div class="flex flex-col pt-4">
        <!-- ADD USER'S NAME IN ONCE ACCOUNT FUNCTIONALITY IS COMPLETE -->
        <h3 class="text-dark-purple text-md font-semibold">User Name asked:</h3>
        <h4 class="text-dark-purple text-md">
          {{ comment.text }}
        </h4>
      </div>
    </div>
    <div
      class="
        flex flex-col
        items-end
        justify-between
        font-epilogue
        justify-items-end
      "
    >
      <h3 class="flex text-dark-purple text-right text-md">
        {{ new Date(comment.createdAt).toLocaleDateString("en-NZ") }} at
        {{ new Date(comment.createdAt).toLocaleTimeString("en-NZ") }}
      </h3>
      <div class="flex flex-row text-dark-purple font-semibold text-md">
        Reply
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 ml-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserComment",

  props: {
    comment: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style>
</style>